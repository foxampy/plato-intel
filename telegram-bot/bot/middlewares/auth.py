"""
Middleware для аутентификации пользователей
"""

import logging
from datetime import datetime

from aiogram import BaseMiddleware
from aiogram.types import Message, CallbackQuery
from sqlalchemy import select, update, insert
from sqlalchemy.ext.asyncio import AsyncSession

from database.models import User

logger = logging.getLogger(__name__)


class AuthMiddleware(BaseMiddleware):
    """Middleware для регистрации и аутентификации пользователей"""
    
    async def __call__(
        self,
        handler,
        event: Message | CallbackQuery,
        data: dict,
    ):
        # Получаем информацию о пользователе
        if isinstance(event, Message):
            user = event.from_user
            session: AsyncSession = data["session"]
        elif isinstance(event, CallbackQuery):
            user = event.from_user
            session: AsyncSession = data.get("session")
        else:
            return await handler(event, data)
        
        if not session:
            return await handler(event, data)
        
        # Проверяем наличие пользователя в БД
        stmt = select(User).where(User.user_id == user.id)
        result = await session.execute(stmt)
        db_user = result.scalar_one_or_none()
        
        if not db_user:
            # Регистрируем нового пользователя
            await self._register_user(session, user)
            logger.info(f"👤 Новый пользователь: {user.id} (@{user.username})")
        else:
            # Обновляем last_seen
            await self._update_user_activity(session, user.id)
        
        # Добавляем пользователя в данные
        data["user"] = db_user or user
        
        return await handler(event, data)
    
    async def _register_user(self, session: AsyncSession, user):
        """Регистрация нового пользователя"""
        stmt = insert(User).values(
            user_id=user.id,
            username=user.username,
            first_name=user.first_name,
            last_name=user.last_name,
            created_at=datetime.now(),
            last_seen=datetime.now(),
        )
        await session.execute(stmt)
        await session.commit()
    
    async def _update_user_activity(self, session: AsyncSession, user_id: int):
        """Обновление активности пользователя"""
        stmt = (
            update(User)
            .where(User.user_id == user_id)
            .values(last_seen=datetime.now())
        )
        await session.execute(stmt)
        await session.commit()
