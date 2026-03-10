# Скрипты для Telegram-бота

## scraper.py — Парсер товаров с сайта

Скрипт для автоматического сбора всех товаров с сайта plato-intel.by

### Установка зависимостей

```bash
pip install requests beautifulsoup4 fake-useragent
```

### Запуск

```bash
python scripts/scraper.py
```

### Результат

Скрипт создаёт папку `data/scraped/` с файлами:
- `products-full.json` — все товары
- `products-{category}.json` — товары по категориям

### Настройка

В `scraper.py` можно изменить:
- `CATEGORIES` — список категорий для парсинга
- `output_dir` — папка для сохранения данных

---

## merge_products.py — Слияние товаров

Скрипт для объединения данных из разных источников

### Запуск

```bash
python scripts/merge_products.py
```

---

## update_catalog.py — Обновление каталога

Скрипт для обновления каталога в боте

### Запуск

```bash
python scripts/update_catalog.py
```
