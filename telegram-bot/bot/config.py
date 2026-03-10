"""
Конфигурация приложения
"""

import os
from pathlib import Path
from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Настройки приложения"""
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )
    
    # Telegram Bot
    TELEGRAM_BOT_TOKEN: str
    BOT_NAME: str = "PlatoIntelBot"
    WEBHOOK_URL: str = ""
    
    # Qwen AI (DashScope)
    DASHSCOPE_API_KEY: str = ""
    QWEN_MODEL: str = "qwen-max"
    QWEN_TEMPERATURE: float = 0.7
    QWEN_MAX_TOKENS: int = 500
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/plato_bot"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # Admins
    ADMIN_IDS: str = ""
    
    @property
    def admin_ids(self) -> List[int]:
        """Список ID администраторов"""
        if not self.ADMIN_IDS:
            return []
        return [int(x.strip()) for x in self.ADMIN_IDS.split(",")]
    
    # Payment
    PAYMENT_PROVIDER_TOKEN: str = ""
    
    # Delivery
    DELIVERY_MIN_FREE: int = 500
    DELIVERY_BASE_PRICE: int = 15
    
    # Discounts
    DISCOUNT_LEVEL_1: int = 500
    DISCOUNT_LEVEL_1_PERCENT: int = 3
    DISCOUNT_LEVEL_2: int = 1000
    DISCOUNT_LEVEL_2_PERCENT: int = 5
    DISCOUNT_LEVEL_3: int = 3000
    DISCOUNT_LEVEL_3_PERCENT: int = 7
    DISCOUNT_LEVEL_4: int = 5000
    DISCOUNT_LEVEL_4_PERCENT: int = 10
    
    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FILE: str = "logs/bot.log"
    
    # Environment
    ENVIRONMENT: str = "development"
    
    @property
    def is_production(self) -> bool:
        """Проверка режима production"""
        return self.ENVIRONMENT == "production"
    
    # Paths
    BASE_DIR: Path = Path(__file__).resolve().parent.parent
    
    @property
    def DATA_DIR(self) -> Path:
        """Директория с данными"""
        return self.BASE_DIR / "data"
    
    @property
    def LOGS_DIR(self) -> Path:
        """Директория логов"""
        logs_dir = self.BASE_DIR / "logs"
        logs_dir.mkdir(exist_ok=True)
        return logs_dir


# Глобальный экземпляр настроек
settings = Settings()
