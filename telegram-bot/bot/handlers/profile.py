"""
Обработчики профиля пользователя
"""

import logging
from aiogram import F, Router
from aiogram.types import CallbackQuery, Message

logger = logging.getLogger(__name__)

router = Router()


@router.callback_query(F.data == "profile")
@router.message(F.text == "👤 Профиль")
async def show_profile(callback: CallbackQuery | Message):
    """Показать профиль пользователя"""
    user = callback.from_user
    
    text = f"""
👤 <b>Ваш профиль</b>

📛 Имя: {user.first_name}
📧 Username: @{user.username or 'не указан'}
🆔 ID: {user.id}

📊 <b>Статистика:</b>
• Заказов: 0
• Общая сумма: 0 ₽
• Скидка: 0%

🎁 <b>Ваш уровень скидки:</b>
• До 500 BYN: 0%
• От 500 BYN: 3%
• От 1000 BYN: 5%
• От 5000 BYN: 10%
"""
    
    if isinstance(callback, CallbackQuery):
        await callback.message.edit_text(text=text)
        await callback.answer()
    else:
        await callback.answer(text=text)
