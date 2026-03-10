"""
Обработчики поддержки и ИИ-консультанта
"""

import logging

from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup

from bot.keyboards.menus import get_support_menu, get_ai_chat_keyboard, get_back_keyboard
from bot.services.qwen_ai import QwenAI

logger = logging.getLogger(__name__)

router = Router()


class AIChat(StatesGroup):
    """Состояния ИИ-чата"""
    waiting_for_message = State()


@router.callback_query(F.data == "support")
@router.message(F.text == "📞 Поддержка")
async def show_support(callback: CallbackQuery | Message, state: FSMContext):
    """Показать меню поддержки"""
    await state.clear()
    
    text = """
📞 <b>Поддержка ПЛАТО-ИНТЕЛ</b>

Мы готовы помочь вам с любым вопросом!

💡 <b>Чем можем помочь:</b>
• Подбор оборудования по параметрам
• Технические консультации
• Вопросы по заказам
• Гарантия и возврат

⏰ <b>Режим работы:</b>
Пн-Пт: 9:00 — 17:00
Обед: 13:00 — 14:00

Выберите способ связи 👇
"""
    
    if isinstance(callback, CallbackQuery):
        await callback.message.edit_text(
            text=text,
            reply_markup=get_support_menu(),
        )
        await callback.answer()
    else:
        await callback.answer(
            text=text,
            reply_markup=get_support_menu(),
        )


@router.callback_query(F.data == "support_ai")
async def start_ai_chat(callback: CallbackQuery, state: FSMContext):
    """Начать чат с ИИ-консультантом"""
    await state.set_state(AIChat.waiting_for_message)
    
    text = """
🤖 <b>ИИ-консультант ПЛАТО-ИНТЕЛ</b>

Здравствуйте! Я — ваш виртуальный помощник.

Могу помочь:
✅ Подобрать оборудование
✅ Ответить на технические вопросы
✅ Рассказать о условиях доставки
✅ Посоветовать сопутствующие товары

Напишите ваш вопрос или выберите быстрый вариант 👇
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_ai_chat_keyboard(),
    )
    await callback.answer()
    
    logger.info(f"Пользователь {callback.from_user.id} начал чат с ИИ")


@router.message(AIChat.waiting_for_message)
async def handle_ai_message(message: Message, state: FSMContext):
    """Обработка сообщения для ИИ-консультанта"""
    user_message = message.text
    
    # Получаем контекст товара из состояния (если есть)
    data = await state.get_data()
    product_context = data.get("ask_product_context")
    
    # Отправляем запрос ИИ
    await message.answer("⏳ Думаю...")
    
    response = await QwenAI.ask(
        user_id=message.from_user.id,
        message=user_message,
        product_context=product_context,
    )
    
    await message.answer(
        text=response,
        reply_markup=get_ai_chat_keyboard(),
    )
    
    logger.info(f"ИИ ответил пользователю {message.from_user.id}: {user_message[:50]}...")


@router.callback_query(F.data.startswith("ai_quick:"))
async def ai_quick_reply(callback: CallbackQuery, state: FSMContext):
    """Быстрый ответ ИИ"""
    question = callback.data.replace("ai_quick:", "")
    
    await state.set_state(AIChat.waiting_for_message)
    
    # Отправляем запрос ИИ
    await callback.message.edit_text("⏳ Думаю...")
    
    response = await QwenAI.ask(
        user_id=callback.from_user.id,
        message=question,
    )
    
    await callback.message.edit_text(
        text=response,
        reply_markup=get_ai_chat_keyboard(),
    )
    await callback.answer()


@router.callback_query(F.data == "ai_end")
async def end_ai_chat(callback: CallbackQuery, state: FSMContext):
    """Завершить чат с ИИ"""
    await state.clear()
    
    text = """
✅ <b>Диалог с ИИ-консультантом завершён</b>

Если у вас остались вопросы, вы можете:
• Начать новый диалог с ИИ
• Позвонить менеджеру: +375 (17) 399-31-23
• Написать на email: info@plato-intel.by

Возвращайтесь! 😊
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_support_menu(),
    )
    await callback.answer()


@router.callback_query(F.data == "support_call")
async def support_call(callback: CallbackQuery):
    """Позвонить менеджеру"""
    text = """
📞 <b>Позвонить менеджеру</b>

Наши телефоны:

📱 <b>Многоканальный:</b>
<a href="tel:+375173993123">+375 (17) 399-31-23</a>

📱 <b>Мобильный (А1):</b>
<a href="tel:+375296155672">+375 (29) 615-56-72</a>

⏰ <b>Режим работы:</b>
Пн-Пт: 9:00 — 17:00
Обед: 13:00 — 14:00

Нажмите на номер для звонка 📞
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_back_keyboard(),
    )
    await callback.answer()


@router.callback_query(F.data == "support_email")
async def support_email(callback: CallbackQuery):
    """Написать на email"""
    text = """
📧 <b>Написать на email</b>

Наши email адреса:

📩 <b>Общие вопросы:</b>
<a href="mailto:info@plato-intel.by">info@plato-intel.by</a>

📩 <b>Отдел продаж:</b>
<a href="mailto:sales@plato-intel.by">sales@plato-intel.by</a>

⏰ <b>Ответ в течение:</b>
1-2 рабочих часов в рабочее время

Нажмите на email для отправки ✉️
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_back_keyboard(),
    )
    await callback.answer()


@router.callback_query(F.data == "support_faq")
async def support_faq(callback: CallbackQuery):
    """Частые вопросы"""
    text = """
❓ <b>Частые вопросы (FAQ)</b>

💰 <b>Скидки:</b>
• От 500 BYN — 3%
• От 1000 BYN — 5%
• От 5000 BYN — 10%

🚚 <b>Доставка:</b>
• Минск: 1-2 дня (15 BYN, бесплатно от 500 BYN)
• Областные центры: 2-3 дня (25 BYN)
• Районные центры: 3-5 дней (35 BYN)

🛡️ <b>Гарантия:</b>
• 12-24 месяца на всю продукцию
• Возврат в течение 14 дней

💳 <b>Оплата:</b>
• Наличные, карты, ЕРИП
• Безналичный расчёт
• Отсрочка для постоянных клиентов

📦 <b>Самовывоз:</b>
• г. Минск, ул. М. Лынькова 85, корп.6, офис 20
• Бесплатно, в день заказа

Хотите задать другой вопрос? Напишите его в чат с ИИ!
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_back_keyboard(),
    )
    await callback.answer()
