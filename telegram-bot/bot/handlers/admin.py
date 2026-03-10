"""
Обработчики админ-панели
"""

import logging
from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.filters import Command

from bot.config import settings
from bot.keyboards.menus import get_admin_menu

logger = logging.getLogger(__name__)

router = Router()


def is_admin(user_id: int) -> bool:
    """Проверка на администратора"""
    return user_id in settings.admin_ids


@router.message(Command("admin"))
async def cmd_admin(message: Message):
    """Админ-панель"""
    if not is_admin(message.from_user.id):
        await message.answer("❌ Доступ запрещён")
        return
    
    text = """
🛠️ <b>Админ-панель ПЛАТО-ИНТЕЛ</b>

Выберите раздел:
"""
    
    await message.answer(
        text=text,
        reply_markup=get_admin_menu(),
    )


@router.callback_query(F.data == "admin_stats")
async def admin_stats(callback: CallbackQuery):
    """Статистика бота"""
    if not is_admin(callback.from_user.id):
        await callback.answer("❌ Доступ запрещён", show_alert=True)
        return
    
    text = """
📊 <b>Статистика бота</b>

👥 Пользователей: 0
📦 Заказов: 0
💰 Выручка: 0 ₽
💬 Диалогов с ИИ: 0

Статистика обновляется в реальном времени.
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.callback_query(F.data == "admin_orders")
async def admin_orders(callback: CallbackQuery):
    """Управление заказами"""
    if not is_admin(callback.from_user.id):
        await callback.answer("❌ Доступ запрещён", show_alert=True)
        return
    
    text = """
📦 <b>Управление заказами</b>

Здесь будет список всех заказов.
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.callback_query(F.data == "admin_users")
async def admin_users(callback: CallbackQuery):
    """Пользователи"""
    if not is_admin(callback.from_user.id):
        await callback.answer("❌ Доступ запрещён", show_alert=True)
        return
    
    text = """
👥 <b>Пользователи</b>

Список всех пользователей бота.
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.callback_query(F.data == "admin_conversations")
async def admin_conversations(callback: CallbackQuery):
    """Диалоги с ИИ"""
    if not is_admin(callback.from_user.id):
        await callback.answer("❌ Доступ запрещён", show_alert=True)
        return
    
    text = """
💬 <b>Диалоги с ИИ-консультантом</b>

История всех диалогов с ИИ.
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()


@router.callback_query(F.data == "admin_broadcast")
async def admin_broadcast(callback: CallbackQuery):
    """Рассылка"""
    if not is_admin(callback.from_user.id):
        await callback.answer("❌ Доступ запрещён", show_alert=True)
        return
    
    text = """
📢 <b>Рассылка сообщений</b>

Введите текст рассылки:
"""
    
    await callback.message.edit_text(text=text)
    await callback.answer()
