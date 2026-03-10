"""
Middleware для логирования сообщений
"""

import logging

from aiogram import BaseMiddleware
from aiogram.types import Message, CallbackQuery

logger = logging.getLogger(__name__)


class LoggingMiddleware(BaseMiddleware):
    """Middleware для логирования входящих обновлений"""
    
    async def __call__(
        self,
        handler,
        event: Message | CallbackQuery,
        data: dict,
    ):
        # Логирование сообщений
        if isinstance(event, Message):
            if event.text:
                logger.info(
                    f"💬 Сообщение от {event.from_user.id} (@{event.from_user.username}): {event.text[:100]}"
                )
            elif event.photo:
                logger.info(
                    f"📷 Фото от {event.from_user.id} (@{event.from_user.username})"
                )
        
        # Логирование callback query
        elif isinstance(event, CallbackQuery):
            logger.info(
                f"🔘 Callback от {event.from_user.id} (@{event.from_user.username}): {event.data}"
            )
        
        # Вызов обработчика
        return await handler(event, data)
