# 🤖 AI Telegram Bot для ПЛАТО-ИНТЕЛ

**Версия:** 1.0.0  
**Python:** 3.11+  
**Фреймворк:** aiogram 3.x  
**ИИ:** Qwen API (DashScope)

---

## 🚀 Быстрый старт

### 1. Клонирование и установка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd plato-ai-bot

# Создать виртуальное окружение
python -m venv venv

# Активировать (Windows)
venv\Scripts\activate

# Активировать (Linux/Mac)
source venv/bin/activate

# Установить зависимости
pip install -r requirements.txt
```

### 2. Настройка окружения

Скопируйте `.env.example` в `.env` и заполните:

```bash
cp .env.example .env
```

Заполните `.env`:

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Qwen AI (DashScope)
DASHSCOPE_API_KEY=sk-your-api-key-here
QWEN_MODEL=qwen-max

# Database
DATABASE_URL=postgresql+asyncpg://postgres:password@localhost:5432/plato_bot
REDIS_URL=redis://localhost:6379/0

# Admins (Telegram IDs)
ADMIN_IDS=123456789,987654321

# Logging
LOG_LEVEL=INFO
```

### 3. База данных

```bash
# Запустить PostgreSQL и Redis (Docker)
docker-compose up -d db redis

# Применить миграции
alembic upgrade head
```

### 4. Запуск бота

```bash
# Разработчик
python -m bot.main

# Production (с gunicorn)
gunicorn bot.main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker

# Docker
docker-compose up -d
```

---

## 📁 Структура проекта

```
plato-ai-bot/
├── bot/                    # Основной код бота
│   ├── main.py            # Точка входа
│   ├── config.py          # Конфигурация
│   ├── filters.py         # Фильтры сообщений
│   ├── keyboards/         # Клавиатуры
│   ├── handlers/          # Обработчики команд
│   ├── services/          # Сервисы (ИИ, CRM, API)
│   └── utils/             # Утилиты
├── database/              # Модели БД
├── data/                  # Данные (товары, FAQ)
├── logs/                  # Логи
├── .env                   # Переменные окружения
├── docker-compose.yml     # Docker конфигурация
└── requirements.txt       # Зависимости
```

---

## 🎯 Основные команды

| Команда | Описание |
|---------|----------|
| `/start` | Запустить бота, главное меню |
| `/catalog` | Показать каталог товаров |
| `/search` | Поиск товара |
| `/cart` | Корзина |
| `/orders` | Мои заказы |
| `/profile` | Профиль |
| `/support` | Поддержка |
| `/help` | Помощь |

---

## 🧠 ИИ-консультант

Бот использует Qwen API для умных консультаций:

- Подбор товаров по параметрам
- Ответы на технические вопросы
- Cross-sell и Up-sell предложения
- Обработка возражений

---

## 📊 Админ-панель

Доступна для пользователей из `ADMIN_IDS`:

- `/admin` - главная админ-панель
- `/admin/orders` - управление заказами
- `/admin/users` - пользователи
- `/admin/stats` - статистика

---

## 🔧 Разработка

### Запуск тестов

```bash
pytest tests/
```

### Линтинг

```bash
flake8 bot/
black bot/ --check
```

---

## 📞 Контакты

**ПЛАТО-ИНТЕЛ**
- 📍 г. Минск, ул. М. Лынькова 85, корп.6, офис 20
- 📞 +375 (17) 399-31-23
- 📧 info@plato-intel.by

---

## 📄 Лицензия

© 2026 ООО «ПЛАТО-ИНТЕЛ»
