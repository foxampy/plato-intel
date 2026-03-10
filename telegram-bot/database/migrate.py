"""
Миграции базы данных
"""

import asyncio
import logging

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import sessionmaker

from bot.config import settings
from database.models import Base

logger = logging.getLogger(__name__)


async def run_migrations():
    """Запуск миграций (создание таблиц)"""
    logger.info("🔄 Запуск миграций...")
    
    engine = create_async_engine(
        settings.DATABASE_URL,
        echo=True,
    )
    
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    logger.info("✅ Миграции завершены")
    
    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(run_migrations())
