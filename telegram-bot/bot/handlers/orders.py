"""
Обработчики заказов
"""

import logging
from aiogram import F, Router
from aiogram.types import CallbackQuery, Message

logger = logging.getLogger(__name__)

router = Router()


@router.callback_query(F.data == "orders")
@router.message(F.text == "📦 Мои заказы")
async def show_orders(callback: CallbackQuery | Message):
    """Показать историю заказов"""
    text = """
📦 <b>Ваши заказы</b>

Здесь будет история ваших заказов.

Пока у вас нет оформленных заказов.
"""
    
    if isinstance(callback, CallbackQuery):
        await callback.message.edit_text(text=text)
        await callback.answer()
    else:
        await callback.answer(text=text)
