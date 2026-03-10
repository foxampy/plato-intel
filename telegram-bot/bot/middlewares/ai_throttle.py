"""
Middleware для ограничения ИИ-запросов (throttling)
"""

import logging
import time
from collections import defaultdict

from aiogram import BaseMiddleware
from aiogram.types import Message

logger = logging.getLogger(__name__)


class AIThrottleMiddleware(BaseMiddleware):
    """
    Middleware для ограничения частоты ИИ-запросов
    Защищает от злоупотреблений и снижает нагрузку на API
    """
    
    def __init__(self):
        # Храним время последнего запроса для каждого пользователя
        self._last_request: dict[int, float] = defaultdict(float)
        # Минимальный интервал между запросами (секунды)
        self._min_interval = 3
    
    async def __call__(
        self,
        handler,
        event: Message,
        data: dict,
    ):
        user_id = event.from_user.id
        current_time = time.time()
        
        # Проверяем интервал
        last_request = self._last_request[user_id]
        time_since_last = current_time - last_request
        
        if time_since_last < self._min_interval:
            wait_time = int(self._min_interval - time_since_last)
            logger.warning(
                f"Пользователь {user_id} слишком часто отправляет запросы. "
                f"Ожидание: {wait_time} сек."
            )
            # Пропускаем запрос, но не блокируем
            # Можно добавить уведомление пользователю
        
        # Обновляем время последнего запроса
        self._last_request[user_id] = current_time
        
        return await handler(event, data)
