# 🚀 БЫСТРЫЙ СТАРТ — TELEGRAM BOT ПЛАТО-ИНТЕЛ

## 📋 Шаг 1: Подготовка

### 1.1. Установите Python 3.11+

```bash
python --version
# Должно быть: Python 3.11.x или выше
```

### 1.2. Создайте бота в Telegram

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте `/newbot`
3. Введите имя бота: `ПЛАТО-ИНТЕЛ Бот`
4. Введите username: `plato_intel_bot`
5. Сохраните полученный токен: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

### 1.3. Получите API ключ Qwen (DashScope)

1. Перейдите на https://dashscope.aliyun.com/
2. Зарегистрируйтесь/войдите
3. Создайте API ключ
4. Сохраните ключ: `sk-xxxxxxxxxxxxxxxx`

---

## 📥 Шаг 2: Установка проекта

### 2.1. Клонирование

```bash
cd f:\Work\platointel\telegram-bot
```

### 2.2. Виртуальное окружение

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 2.3. Установка зависимостей

```bash
pip install -r requirements.txt
```

---

## ⚙️ Шаг 3: Настройка

### 3.1. Создайте файл .env

```bash
# Скопируйте пример
copy .env.example .env
```

### 3.2. Заполните .env

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz

# Qwen AI (DashScope)
DASHSCOPE_API_KEY=sk-xxxxxxxxxxxxxxxx
QWEN_MODEL=qwen-max

# Database
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/plato_bot

# Redis
REDIS_URL=redis://localhost:6379/0

# Admins (ваш Telegram ID)
ADMIN_IDS=123456789

# Environment
ENVIRONMENT=development
LOG_LEVEL=DEBUG
```

**Как узнать свой Telegram ID:**
1. Откройте бота [@userinfobot](https://t.me/userinfobot)
2. Нажмите Start
3. Получите ID (например: 123456789)

---

## 🗄️ Шаг 4: База данных

### Вариант A: Docker (рекомендуется)

```bash
# Запуск PostgreSQL и Redis
docker-compose up -d db redis

# Проверка
docker ps
# Должны быть: plato_bot_db, plato_bot_redis
```

### Вариант B: Локальная установка

```bash
# Установите PostgreSQL 15+
# https://www.postgresql.org/download/

# Создайте базу данных
createdb -U postgres plato_bot

# Установите Redis
# https://redis.io/download/
```

### 4.1. Применение миграций

```bash
python -m database.migrate
```

---

## 🏃 Шаг 5: Запуск бота

### Вариант A: Локальный запуск (для разработки)

```bash
python -m bot.main
```

**Ожидаемый вывод:**
```
2026-03-09 12:00:00 | INFO     | bot.main:main:100 - ⚡ ПЛАТО-ИНТЕЛ Bot запускается...
2026-03-09 12:00:01 | INFO     | bot.utils.database:init:28 - ✅ База данных подключена
2026-03-09 12:00:02 | INFO     | bot.services.qwen_ai:init:85 - ✅ ИИ-консультант подключён
2026-03-09 12:00:02 | INFO     | bot.main:main:112 - 🔧 Режим разработки: запуск polling...
```

### Вариант B: Docker (production)

```bash
docker-compose up -d
```

**Проверка логов:**
```bash
docker-compose logs -f bot
```

---

## ✅ Шаг 6: Проверка работы

### 6.1. Запустите бота

Откройте Telegram и найдите своего бота по username (например: `@plato_intel_bot`)

### 6.2. Отправьте /start

**Ожидаемый ответ:**
```
👋 Здравствуйте, [Ваше имя]!

Добро пожаловать в ПЛАТО-ИНТЕЛ — ваш надёжный поставщик электротехнического оборудования! ⚡

🏢 О компании:
• Работаем с 2002 года (более 20 лет)
• 95 товаров в 9 категориях
• Доставка по всей Беларуси
• Гарантия 12-24 месяца
...
```

### 6.3. Проверьте команды

| Команда | Ожидаемый результат |
|---------|---------------------|
| `/start` | Приветствие, главное меню |
| `/catalog` | Каталог товаров (9 категорий) |
| `/cart` | Корзина (пока пустая) |
| `/support` | Меню поддержки |
| `/admin` | Админ-панель (только для ADMIN_IDS) |

### 6.4. Проверьте ИИ-консультанта

1. Отправьте: `/support`
2. Нажмите: "💬 Задать вопрос ИИ"
3. Напишите: "Какой тормоз подойдёт для крана 5 тонн?"

**Ожидаемый ответ:**
```
⚡ Для крана грузоподъёмностью 5 тонн рекомендую:

🎯 Основной вариант:
**ТКГ-200 с гидротолкателем ТЭ-30**
• Номинальный момент: 200 Н·м
• Диаметр шкива: 250 мм
• Цена: 32 400 ₽
• В наличии: 38 шт.
...
```

---

## 🛠️ Шаг 7: Загрузка товаров

### 7.1. Скопируйте данные о товарах

```bash
# Из основного проекта
copy f:\Work\platointel\v2\data\products.json f:\Work\platointel\telegram-bot\data\
copy f:\Work\platointel\v2\data\products-cat3-4.json f:\Work\platointel\telegram-bot\data\
copy f:\Work\platointel\v2\data\products-cat5-9.json f:\Work\platointel\telegram-bot\data\
```

### 7.2. Проверьте загрузку

В логах должно быть:
```
INFO | bot.handlers.catalog:load_products:35 - ✅ Загружено 95 товаров в 9 категориях
```

---

## 📊 Шаг 8: Мониторинг

### Логи бота

```bash
# Просмотр логов в реальном времени
tail -f logs/bot.log

# Или через Docker
docker-compose logs -f bot
```

### Статистика

Отправьте `/admin` (если вы в ADMIN_IDS):
- 📊 Статистика
- 📦 Заказы
- 👥 Пользователи
- 💬 Диалоги с ИИ

---

## 🔧 Решение проблем

### Ошибка: "ModuleNotFoundError"

```bash
# Переустановите зависимости
pip install -r requirements.txt --force-reinstall
```

### Ошибка: "Connection refused" к PostgreSQL

```bash
# Проверьте, запущен ли PostgreSQL
docker ps | grep postgres

# Или перезапустите
docker-compose restart db
```

### Ошибка: "Invalid bot token"

1. Проверьте токен в .env
2. Создайте нового бота у @BotFather
3. Обновите токен в .env

### Ошибка: "DashScope API error"

1. Проверьте API ключ в .env
2. Убедитесь, что на балансе есть средства
3. Проверьте лимиты API

---

## 📱 Команды бота

Настройте через @BotFather → `/setcommands`:

```
start - Запустить бота
catalog - Каталог товаров
search - Поиск товара
cart - Корзина
orders - Мои заказы
profile - Профиль
support - Поддержка
help - Помощь
admin - Админ-панель
```

---

## 🎯 Следующие шаги

1. **Настройте webhook** (для production)
   ```bash
   # Установите SSL сертификат
   # Настройте Nginx
   docker-compose up -d nginx
   ```

2. **Добавьте платёжную систему**
   - ЮKassa
   - Stripe
   - ЕРИП (для Беларуси)

3. **Настройте аналитику**
   - Подключите Яндекс.Метрику
   - Настройте цели в боте

4. **Запустите рекламу**
   - Telegram Ads
   - Контекстная реклама

---

## 📞 Поддержка

При возникновении проблем:

1. Проверьте логи: `logs/bot.log`
2. Посмотрите FAQ в документации
3. Обратитесь к разработчику

**Контакты ПЛАТО-ИНТЕЛ:**
- 📍 г. Минск, ул. М. Лынькова 85, корп.6, офис 20
- 📞 +375 (17) 399-31-23
- 📧 info@plato-intel.by

---

## 🎉 Готово!

Бот успешно запущен и готов к работе! 🚀

**Что дальше:**
1. Протестируйте все функции
2. Загрузите реальные товары
3. Настройте интеграцию с 1C/CRM
4. Запустите рекламную кампанию
