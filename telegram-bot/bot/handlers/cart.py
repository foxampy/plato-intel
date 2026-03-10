"""
Обработчики корзины
"""

import logging
from decimal import Decimal

from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.fsm.context import FSMContext
from sqlalchemy import select, delete, insert, update
from sqlalchemy.ext.asyncio import AsyncSession

from bot.keyboards.menus import get_cart_menu, get_back_keyboard
from bot.utils.database import Database
from database.models import CartItem

logger = logging.getLogger(__name__)

router = Router()


@router.callback_query(F.data == "cart")
@router.message(F.text == "📋 Корзина")
async def show_cart(callback: CallbackQuery | Message, session: AsyncSession):
    """Показать корзину"""
    user_id = callback.from_user.id if isinstance(callback, CallbackQuery) else callback.from_user.id
    
    # Получаем товары корзины
    stmt = select(CartItem).where(CartItem.user_id == user_id)
    result = await session.execute(stmt)
    cart_items = result.scalars().all()
    
    if not cart_items:
        text = """
🛒 <b>Ваша корзина пуста</b>

Добавьте товары из каталога, чтобы оформить заказ! 😊
"""
        if isinstance(callback, CallbackQuery):
            await callback.message.edit_text(
                text=text,
                reply_markup=get_back_keyboard(),
            )
            await callback.answer()
        else:
            await callback.answer(
                text=text,
                reply_markup=get_back_keyboard(),
            )
        return
    
    # Считаем сумму
    total = sum(item.price * item.quantity for item in cart_items)
    
    # Формируем текст
    text = f"🛒 <b>Ваша корзина</b>\n\n"
    
    for item in cart_items:
        text += f"• {item.product_name}\n"
        text += f"  {item.quantity} шт. × {item.price:,.0f} ₽ = {item.price * item.quantity:,.0f} ₽\n\n"
    
    text += f"💰 <b>Итого:</b> {total:,.0f} ₽\n"
    
    # Проверяем скидку
    discount = 0
    if total >= 5000:
        discount = 10
    elif total >= 3000:
        discount = 7
    elif total >= 1000:
        discount = 5
    elif total >= 500:
        discount = 3
    
    if discount > 0:
        text += f"🎁 <b>Скидка:</b> {discount}%\n"
        text += f"💵 <b>К оплате:</b> {total * (1 - discount / 100):,.0f} ₽\n"
    
    if isinstance(callback, CallbackQuery):
        await callback.message.edit_text(
            text=text,
            reply_markup=get_cart_menu(),
        )
        await callback.answer()
    else:
        await callback.answer(
            text=text,
            reply_markup=get_cart_menu(),
        )


@router.callback_query(F.data.startswith("add_to_cart:"))
async def add_to_cart(callback: CallbackQuery, session: AsyncSession):
    """Добавить товар в корзину"""
    product_id = callback.data.replace("add_to_cart:", "")
    user_id = callback.from_user.id
    
    # Получаем данные о товаре (из контекста или БД)
    # Для упрощения используем заглушку
    product_name = f"Товар {product_id}"
    product_price = Decimal("1000")
    
    # Проверяем наличие в корзине
    stmt = select(CartItem).where(
        CartItem.user_id == user_id,
        CartItem.product_id == product_id,
    )
    result = await session.execute(stmt)
    cart_item = result.scalar_one_or_none()
    
    if cart_item:
        # Увеличиваем количество
        cart_item.quantity += 1
    else:
        # Добавляем новый товар
        stmt = insert(CartItem).values(
            user_id=user_id,
            product_id=product_id,
            product_name=product_name,
            price=product_price,
            quantity=1,
        )
        await session.execute(stmt)
    
    await session.commit()
    
    await callback.answer(f"✅ Товар добавлен в корзину!", show_alert=True)
    logger.info(f"Пользователь {user_id} добавил товар {product_id} в корзину")


@router.callback_query(F.data == "cart_clear")
async def clear_cart(callback: CallbackQuery, session: AsyncSession):
    """Очистить корзину"""
    user_id = callback.from_user.id
    
    stmt = delete(CartItem).where(CartItem.user_id == user_id)
    await session.execute(stmt)
    await session.commit()
    
    await callback.answer("🧹 Корзина очищена", show_alert=True)
    await show_cart(callback, session)


@router.callback_query(F.data == "checkout_start")
async def start_checkout(callback: CallbackQuery, state: FSMContext):
    """Начать оформление заказа"""
    from bot.handlers import checkout
    
    await checkout.start_checkout_process(callback, state)
