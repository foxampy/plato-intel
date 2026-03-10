"""
ПЛАТО-ИНТЕЛ — Telegram Bot с ИИ-консультантом
Главный файл запуска
"""

import asyncio
import logging
from contextlib import asynccontextmanager

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.fsm.storage.redis import DefaultKeyBuilder, RedisStorage
from aiogram.webhook.aiohttp_server import SimpleRequestHandler, setup_application
from aiohttp import web

from bot.config import settings
from bot.handlers import (
    admin,
    cart,
    catalog,
    checkout,
    orders,
    product,
    profile,
    start,
    support,
)
from bot.middlewares.auth import AuthMiddleware
from bot.middlewares.logging import LoggingMiddleware
from bot.middlewares.ai_throttle import AIThrottleMiddleware
from bot.services.qwen_ai import QwenAI
from bot.utils.database import Database
from bot.utils.logging import setup_logging
from database.models import Base


# Настройка логирования
setup_logging(settings.LOG_LEVEL)
logger = logging.getLogger(__name__)


# Глобальные объекты
bot = Bot(
    token=settings.TELEGRAM_BOT_TOKEN,
    default=DefaultBotProperties(
        parse_mode=ParseMode.HTML,
        link_preview_is_disabled=True,
    ),
)


@asynccontextmanager
async def lifespan(app: web.Application):
    """Управление жизненным циклом приложения"""
    # Инициализация при запуске
    logger.info("🚀 Запуск бота...")
    
    # Инициализация базы данных
    await Database.init()
    logger.info("✅ База данных подключена")
    
    # Инициализация ИИ
    QwenAI.init()
    logger.info("✅ ИИ-консультант подключён")
    
    yield
    
    # Очистка при остановке
    logger.info("🛑 Остановка бота...")
    await bot.session.close()
    await Database.close()


def create_dispatcher():
    """Создание диспетчера с роутерами"""
    # Redis storage для FSM
    redis_storage = RedisStorage.from_url(
        settings.REDIS_URL,
        key_builder=DefaultKeyBuilder(with_bot_id=True),
    )
    
    dp = Dispatcher(storage=redis_storage)
    
    # Регистрация роутеров
    dp.include_router(start.router)
    dp.include_router(catalog.router)
    dp.include_router(product.router)
    dp.include_router(cart.router)
    dp.include_router(checkout.router)
    dp.include_router(orders.router)
    dp.include_router(profile.router)
    dp.include_router(support.router)
    dp.include_router(admin.router)
    
    # Мидлвари
    dp.update.middleware(LoggingMiddleware())
    dp.update.middleware(AuthMiddleware())
    dp.message.middleware(AIThrottleMiddleware())
    
    return dp


async def on_startup():
    """Действия при запуске"""
    import aiogram
    
    logger.info(f"📦 aiogram version: {aiogram.__version__}")
    logger.info(f"🤖 Bot username: {(await bot.get_me()).username}")
    
    # Установка webhook (для production)
    if settings.WEBHOOK_URL:
        await bot.set_webhook(f"{settings.WEBHOOK_URL}/webhook")
        logger.info(f"✅ Webhook установлен: {settings.WEBHOOK_URL}")


async def on_shutdown():
    """Действия при остановке"""
    logger.info("Бот остановлен")


def create_web_app(dp: Dispatcher):
    """Создание web-приложения для webhook"""
    app = web.Application()
    app['bot'] = bot
    app['dispatcher'] = dp
    
    # Обработчик webhook
    webhook_requests_handler = SimpleRequestHandler(
        dispatcher=dp,
        bot=bot,
    )
    webhook_requests_handler.register(app, path="/webhook")
    
    # Настройка application
    setup_application(app, dp, bot=bot)
    
    return app


def main():
    """Точка входа"""
    logger.info("⚡ ПЛАТО-ИНТЕЛ Bot запускается...")
    
    # Создание диспетчера
    dp = create_dispatcher()
    
    # Регистрация онстартап/оншутдаун
    dp.startup.register(on_startup)
    dp.shutdown.register(on_shutdown)
    
    # Запуск polling (для разработки)
    if settings.ENVIRONMENT == "development":
        logger.info("🔧 Режим разработки: запуск polling...")
        try:
            asyncio.run(dp.start_polling(bot))
        except KeyboardInterrupt:
            logger.info("Получен сигнал остановки")
    else:
        # Запуск webhook (для production)
        logger.info("🌐 Режим production: запуск webhook...")
        app = create_web_app(dp)
        web.run_app(app, host="0.0.0.0", port=8080)


if __name__ == "__main__":
    main()
