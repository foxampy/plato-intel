"""
ИИ-консультант на базе Qwen API
"""

import json
import logging
from typing import AsyncGenerator, Dict, List, Optional

from dashscope import Generation

from bot.config import settings

logger = logging.getLogger(__name__)


class QwenAI:
    """ИИ-консультант для бота"""
    
    # Системный промпт
    SYSTEM_PROMPT = """
Ты — профессиональный консультант-администратор компании ПЛАТО-ИНТЕЛ.
Твоя задача: помогать клиентам с подбором электротехнического оборудования.

📋 О КОМПАНИИ:
- Название: ООО «ПЛАТО-ИНТЕЛ»
- Работаем: с 2002 года (более 20 лет на рынке)
- Адрес: г. Минск, ул. М. Лынькова 85, корп.6, офис 20
- Телефоны: +375 (17) 399-31-23, +375 (29) 615-56-72
- Email: info@plato-intel.by
- Доставка: по всей Беларуси (1-5 дней)
- Гарантия: 12-24 месяца на всю продукцию

📦 КАТАЛОГ (95 товаров в 9 категориях):
1. Крановые тормоза (ТКГ, ТКТ, ТКП, ТГЕД) — 11 товаров
   • ТКГ系列: 160, 200, 300, 400 (с гидротолкателем)
   • ТКТ系列: 100, 200, 300 (электромагнитные)
   • ТКП系列: 100, 200, 300 (пружинные)
   • ТГЕД-200 (дисковый)

2. Контакторы (КТ, КВ, Finder) — 15 товаров
   • КТ系列: 6012, 6013, 6014, 6022, 6023, 6032
   • КВ系列: 5042, 5043, 5052
   • Модульные Finder

3. Автоматические выключатели (ВА55, ВА57) — 13 товаров
   • ВА55-41: 250А, 400А, 630А, 1000А
   • ВА57-35: 25А-250А
   • ВА57-39: 250А-630А

4. Электромагниты (ЭМИС, МИС, ЭД, ЭМ) — 16 товаров
   • ЭМИС: 1100, 2100, 2200
   • МИС: 110, 210, 310, 410
   • ЭД: 50, 100, 200, 300, 400
   • ЭМ: 100, 200, 300, 400

5. Концевые выключатели (ВП, ВУ, ВК, КУ, ВКО) — 9 товаров

6. Пускатели (ПМЛ) — 5 товаров
   • ПМЛ-1100, 2100, 3100, 4100, 5100

7. Реле (РТТ, РТЛ, РЭО, РТО) — 14 товаров

8. Командоконтроллеры (ККП, ККТ) — 9 товаров

9. Гидротолкатели (ТЭ) — 3 товара
   • ТЭ-30, ТЭ-50, ТЭ-80

💰 ЦЕНЫ: от 680 ₽ до 58 900 ₽

🎁 СКИДКИ:
• От 500 BYN — 3%
• От 1000 BYN — 5%
• От 3000 BYN — 7%
• От 5000 BYN — 10%

🚚 ДОСТАВКА:
• Минск: 1-2 дня (бесплатно от 500 BYN)
• Областные центры: 2-3 дня
• Районные центры: 3-5 дней

🛡️ ГАРАНТИЯ:
• Крановые тормоза: 12 месяцев
• Контакторы: 12 месяцев
• Автоматические выключатели: 24 месяца
• Пускатели: 18 месяцев
• Реле: 18 месяцев

🎯 ТВОИ ЗАДАЧИ:
1. Помогать с подбором оборудования по параметрам
2. Отвечать на технические вопросы
3. Предлагать сопутствующие товары (cross-sell)
4. Предлагать более дорогие альтернативы (up-sell)
5. Обрабатывать возражения (цена, сроки, сомнения)
6. Консультировать по условиям доставки и оплаты

📝 СТИЛЬ ОБЩЕНИЯ:
- Профессиональный, но дружелюбный
- Краткие, информативные ответы (до 500 символов)
- Используй эмодзи для наглядности: ⚡🔧📦🎯💰🚚
- Всегда предлагай конкретное решение
- Если вопрос слишком сложный — переводи на оператора

⚠️ ЗАПРЕЩЕНО:
- Давать технические гарантии без согласования
- Обещать индивидуальные скидки без согласования
- Критиковать конкурентов
- Давать контакты личных сотрудников
"""
    
    # Контекст диалога (по пользователям)
    _contexts: Dict[int, List[Dict]] = {}
    
    @classmethod
    def init(cls):
        """Инициализация ИИ"""
        logger.info(f"✅ QwenAI инициализирован (модель: {settings.QWEN_MODEL})")
    
    @classmethod
    def _get_context(cls, user_id: int) -> List[Dict]:
        """Получить контекст диалога для пользователя"""
        if user_id not in cls._contexts:
            cls._contexts[user_id] = []
        return cls._contexts[user_id]
    
    @classmethod
    def _add_to_context(cls, user_id: int, role: str, content: str):
        """Добавить сообщение в контекст"""
        context = cls._get_context(user_id)
        context.append({"role": role, "content": content})
        
        # Ограничиваем контекст последними 10 сообщениями
        if len(context) > 20:
            cls._contexts[user_id] = context[-20:]
    
    @classmethod
    def _clear_context(cls, user_id: int):
        """Очистить контекст"""
        if user_id in cls._contexts:
            cls._contexts[user_id] = []
    
    @classmethod
    async def ask(
        cls,
        user_id: int,
        message: str,
        product_context: Optional[Dict] = None,
    ) -> str:
        """
        Задать вопрос ИИ-консультанту
        
        Args:
            user_id: ID пользователя в Telegram
            message: Сообщение пользователя
            product_context: Контекст товара (если есть)
        
        Returns:
            Ответ от ИИ
        """
        # Формируем промпт с контекстом товара
        if product_context:
            product_info = f"""
📦 КОНТЕКСТ ТОВАРА:
Название: {product_context.get('name', 'Неизвестно')}
Цена: {product_context.get('price', 0)} ₽
Наличие: {'✅ В наличии' if product_context.get('availability') == 'in_stock' else '❌ Нет'}
Категория: {product_context.get('category', 'Неизвестно')}

"""
            message = product_info + message
        
        # Добавляем в контекст
        cls._add_to_context(user_id, "user", message)
        
        try:
            # Формируем messages для API
            messages = [
                {"role": "system", "content": cls.SYSTEM_PROMPT},
                *cls._get_context(user_id)
            ]
            
            # Вызов Qwen API
            response = Generation.call(
                model=settings.QWEN_MODEL,
                messages=messages,
                temperature=settings.QWEN_TEMPERATURE,
                max_tokens=settings.QWEN_MAX_TOKENS,
                result_format='message',
            )
            
            if response.status_code == 200:
                answer = response.output.choices[0].message.content
                
                # Добавляем ответ в контекст
                cls._add_to_context(user_id, "assistant", answer)
                
                logger.info(f"🧠 ИИ ответил пользователю {user_id}")
                return answer
            else:
                logger.error(f"❌ Ошибка Qwen API: {response.code} - {response.message}")
                return cls._get_fallback_response(message)
                
        except Exception as e:
            logger.error(f"❌ Ошибка при вызове ИИ: {e}")
            return cls._get_fallback_response(message)
    
    @classmethod
    def _get_fallback_response(cls, message: str) -> str:
        """Запасной ответ при ошибке ИИ"""
        
        # Ключевые слова для простых ответов
        message_lower = message.lower()
        
        if any(word in message_lower for word in ["здравств", "привет", "добрый"]):
            return """
Здравствуйте! 👋

Я — ИИ-консультант ПЛАТО-ИНТЕЛ. Готов помочь вам с подбором электротехнического оборудования!

У нас 95 товаров в 9 категориях:
⚡ Крановые тормоза
🔌 Контакторы
🔋 Автоматические выключатели
🧲 Электромагниты
🔘 Концевые выключатели
⚙️ Пускатели
📟 Реле
🎮 Командоконтроллеры
💧 Гидротолкатели

Что вас интересует?"""
        
        if any(word in message_lower for word in ["доставк", "доставляете", "сроки"]):
            return """
🚚 Доставка по всей Беларуси:

• Минск: 1-2 дня (бесплатно от 500 BYN)
• Областные центры: 2-3 дня (25 BYN)
• Районные центры: 3-5 дня (35 BYN)
• Самовывоз: бесплатно

📍 Адрес: г. Минск, ул. М. Лынькова 85, корп.6, офис 20"""
        
        if any(word in message_lower for word in ["гаранти", "гарантия", "возврат"]):
            return """
🛡️ Гарантия на всю продукцию:

• Крановые тормоза: 12 месяцев
• Контакторы: 12 месяцев
• Автоматические выключатели: 24 месяца
• Пускатели: 18 месяцев
• Реле: 18 месяцев

Возврат в течение 14 дней при сохранении упаковки."""
        
        if any(word in message_lower for word in ["скидк", "скидка", "дешевле"]):
            return """
🎁 Наша система скидок:

• От 500 BYN — 3%
• От 1000 BYN — 5%
• От 3000 BYN — 7%
• От 5000 BYN — 10%

Для индивидуальных условий позвоните: +375 (17) 399-31-23"""
        
        # Ответ по умолчанию
        return """
Спасибо за ваш вопрос! 🙏

Для точного ответа мне нужно больше информации. 

Вы можете:
1. Описать задачу подробнее
2. Позвонить нам: +375 (17) 399-31-23
3. Попросить подключить оператора

Чем ещё могу помочь?"""
    
    @classmethod
    async def get_product_recommendations(
        cls,
        user_id: int,
        category: str,
        budget_min: Optional[int] = None,
        budget_max: Optional[int] = None,
    ) -> List[Dict]:
        """
        Получить рекомендации товаров
        
        Returns:
            Список товаров с рекомендациями
        """
        prompt = f"""
Подбери 3 товара из категории "{category}" для клиента.
"""
        if budget_min and budget_max:
            prompt += f" Бюджет: от {budget_min} до {budget_max} рублей."
        elif budget_min:
            prompt += f" Бюджет: от {budget_min} рублей."
        elif budget_max:
            prompt += f" Бюджет: до {budget_max} рублей."
        
        response = await cls.ask(user_id, prompt)
        
        # Парсим ответ (в реальном проекте лучше использовать structured output)
        # Здесь упрощённая версия
        return []
    
    @classmethod
    async def get_cross_sell(cls, product_id: str) -> List[str]:
        """
        Получить сопутствующие товары
        
        Returns:
            Список ID сопутствующих товаров
        """
        # Заглушка, в реальном проекте — запрос к ИИ
        cross_sell_map = {
            "tkg-200": ["tkg-300", "te-30", "kolodka-tkg"],
            "kt-6012": ["kt-6013", "rile-rtt", "avtomat-va57"],
        }
        return cross_sell_map.get(product_id, [])
