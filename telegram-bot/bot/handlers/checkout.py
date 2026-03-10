"""
Обработчики оформления заказа
"""

import logging
from datetime import datetime
from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import State, StatesGroup

from bot.keyboards.menus import get_checkout_menu

logger = logging.getLogger(__name__)

router = Router()


class Checkout(StatesGroup):
    """Состояния оформления заказа"""
    address = State()
    payment = State()
    confirm = State()


async def start_checkout_process(callback: CallbackQuery, state: FSMContext):
    """Начать процесс оформления"""
    await state.set_state(Checkout.address)
    
    text = """
📝 <b>Оформление заказа</b>

Шаг 1/3: Адрес доставки

📍 Введите адрес доставки:
• Город
• Улица, дом, офис
• Контактное лицо
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_checkout_menu(0),
    )
    await callback.answer()


@router.callback_query(F.data == "checkout_address")
async def checkout_address(callback: CallbackQuery, state: FSMContext):
    """Ввод адреса"""
    await state.set_state(Checkout.address)
    
    text = """
📍 <b>Введите адрес доставки</b>

Формат:
Город, Улица, Дом, Офис
Контактное лицо
Телефон

Пример:
Минск, пр. Независимости 100, офис 5
Иван Петров
+375 (29) 123-45-67
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.message(Checkout.address)
async def process_address(message: Message, state: FSMContext):
    """Обработка адреса"""
    await state.update_data(address=message.text)
    await state.set_state(Checkout.payment)
    
    text = """
✅ Адрес сохранён!

Шаг 2/3: Способ оплаты

💳 Выберите способ оплаты:
• Карта онлайн
• Наличными при получении
• Безналичный расчёт (для юрлиц)
• ЕРИП
"""
    
    await message.answer(text=text, reply_markup=get_checkout_menu(1))


@router.callback_query(F.data == "checkout_payment")
async def checkout_payment(callback: CallbackQuery, state: FSMContext):
    """Выбор оплаты"""
    await state.set_state(Checkout.payment)
    
    text = """
💳 <b>Выберите способ оплаты</b>

Нажмите на кнопку:
"""
    
    # Здесь должна быть клавиатура с вариантами оплаты
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.callback_query(F.data == "checkout_confirm")
async def checkout_confirm(callback: CallbackQuery, state: FSMContext):
    """Подтверждение заказа"""
    await state.set_state(Checkout.confirm)
    
    text = """
✅ <b>Проверьте данные заказа</b>

Шаг 3/3: Подтверждение

Нажмите "Подтвердить заказ" для оформления.
"""
    
    await callback.message.edit_text(text=text, reply_markup=get_checkout_menu(2))
    await callback.answer()


@router.callback_query(F.data == "checkout_cancel")
async def checkout_cancel(callback: CallbackQuery, state: FSMContext):
    """Отмена оформления"""
    await state.clear()
    
    text = """
❌ Оформление заказа отменено

Вы можете вернуться в каталог и продолжить покупки.
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()
