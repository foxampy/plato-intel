"""
Сервисы бота
"""

from bot.services.faq import faq_service, FAQService
from bot.services.cross_sell import cross_sell_service, CrossSellService
from bot.services.qwen_ai import QwenAI

__all__ = [
    "faq_service",
    "FAQService",
    "cross_sell_service",
    "CrossSellService",
    "QwenAI",
]
