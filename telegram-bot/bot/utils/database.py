"""
Утилиты для работы с базой данных
"""

import logging
from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import sessionmaker

from bot.config import settings

logger = logging.getLogger(__name__)


class Database:
    """Менеджер подключений к базе данных"""
    
    engine = None
    async_session_maker = None
    
    @classmethod
    async def init(cls):
        """Инициализация подключения к БД"""
        try:
            cls.engine = create_async_engine(
                settings.DATABASE_URL,
                echo=settings.ENVIRONMENT == "development",
                pool_pre_ping=True,
            )
            
            cls.async_session_maker = async_sessionmaker(
                cls.engine,
                class_=AsyncSession,
                expire_on_commit=False,
            )
            
            logger.info("✅ База данных подключена")
        except Exception as e:
            logger.error(f"❌ Ошибка подключения к базе данных: {e}")
            raise
    
    @classmethod
    async def close(cls):
        """Закрытие подключения"""
        if cls.engine:
            await cls.engine.dispose()
            logger.info("🔌 База данных отключена")
    
    @classmethod
    async def get_session(cls) -> AsyncGenerator[AsyncSession, None]:
        """Получение сессии БД"""
        async with cls.async_session_maker() as session:
            try:
                yield session
                await session.commit()
            except Exception:
                await session.rollback()
                raise
            finally:
                await session.close()
    
    @classmethod
    async def create_tables(cls):
        """Создание таблиц"""
        from database.models import Base
        
        async with cls.engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        
        logger.info("✅ Таблицы созданы")


# Глобальная функция для получения сессии
async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    """Получение сессии БД (для использования в handlers)"""
    async for session in Database.get_session():
        yield session
