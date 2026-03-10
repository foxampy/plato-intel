"""
Обработчик команды /start и главного меню
"""

import logging

from aiogram import F, Router
from aiogram.filters import Command, CommandStart
from aiogram.types import Message
from aiogram.fsm.context import FSMContext

from bot.config import settings
from bot.keyboards.menus import get_main_menu

logger = logging.getLogger(__name__)

router = Router()


@router.message(CommandStart())
async def cmd_start(message: Message, state: FSMContext):
    """Обработчик команды /start"""
    user = message.from_user
    
    # Очищаем состояние
    await state.clear()
    
    # Приветственное сообщение
    text = f"""
👋 <b>Здравствуйте, {user.first_name}!</b>

Добро пожаловать в <b>ПЛАТО-ИНТЕЛ</b> — ваш надёжный поставщик электротехнического оборудования! ⚡

🏢 <b>О компании:</b>
• Работаем с 2002 года (более 20 лет)
• 95 товаров в 9 категориях
• Доставка по всей Беларуси
• Гарантия 12-24 месяца

🎁 <b>Скидки:</b>
• От 500 BYN — 3%
• От 1000 BYN — 5%
• От 5000 BYN — 10%

📍 <b>Контакты:</b>
• г. Минск, ул. М. Лынькова 85, корп.6, офис 20
• +375 (17) 399-31-23
• info@plato-intel.by

Выберите действие в меню ниже 👇
"""
    
    await message.answer(
        text=text,
        reply_markup=get_main_menu(),
    )
    
    logger.info(f"Пользователь {user.id} ({user.username}) запустил бота")


@router.message(F.text == "ℹ️ О компании")
async def about_company(message: Message):
    """Информация о компании"""
    text = """
🏢 <b>ООО «ПЛАТО-ИНТЕЛ»</b>

📅 <b>Год основания:</b> 2002 (24 года на рынке)

📦 <b>Наш ассортимент:</b>
• 95 товаров в 9 категориях
• Крановые тормоза, контакторы, автоматы
• Электромагниты, реле, пускатели
• И другое электротехническое оборудование

🚚 <b>Доставка:</b>
• По всей Республике Беларусь
• Минск: 1-2 дня
• Областные центры: 2-3 дня
• Районные центры: 3-5 дней

🛡️ <b>Гарантия:</b>
• 12-24 месяца на всю продукцию
• Сертифицировано по ГОСТ

💰 <b>Оплата:</b>
• Наличные, карты, ЕРИП
• Безналичный расчёт для юрлиц
• Отсрочка для постоянных клиентов

📍 <b>Адрес:</b>
г. Минск, ул. М. Лынькова 85, корп.6, офис 20

📞 <b>Телефоны:</b>
• +375 (17) 399-31-23 (многоканальный)
• +375 (29) 615-56-72 (А1)

📧 <b>Email:</b>
• info@plato-intel.by
• sales@plato-intel.by

🕒 <b>Режим работы:</b>
Пн-Пт: 9:00 — 17:00
Сб-Вс: Выходной
Обед: 13:00 — 14:00
"""
    
    await message.answer(text=text)


@router.message(F.text == "🚚 Доставка")
async def delivery_info(message: Message):
    """Информация о доставке"""
    text = """
🚚 <b>Доставка по Беларуси</b>

📍 <b>Минск:</b>
• Срок: 1-2 дня
• Стоимость: 15 BYN
• <b>Бесплатно от 500 BYN</b>

🏙️ <b>Областные центры:</b>
• Срок: 2-3 дня
• Стоимость: 25 BYN
• <b>Бесплатно от 1000 BYN</b>

🏘️ <b>Районные центры:</b>
• Срок: 3-5 дней
• Стоимость: 35 BYN
• <b>Бесплатно от 1500 BYN</b>

📦 <b>Самовывоз:</b>
• Адрес: г. Минск, ул. М. Лынькова 85, корп.6, офис 20
• Стоимость: <b>Бесплатно</b>
• Готовность: в день заказа

🚛 <b>Транспортные компании:</b>
• DPD
• EMS
• Белпочта
• По договорённости

📋 <b>Процесс доставки:</b>
1. Оформляете заказ в боте
2. Менеджер подтверждает наличие
3. Оплачиваете заказ
4. Отправляем в день оплаты
5. Получаете трек-номер
6. Забираете посылку

📞 <b>Вопросы по доставке?</b>
+375 (17) 399-31-23
"""
    
    await message.answer(text=text)


@router.message(F.text == "🔙 Главное меню")
async def main_menu(message: Message, state: FSMContext):
    """Возврат в главное меню"""
    await state.clear()
    await cmd_start(message, state)
