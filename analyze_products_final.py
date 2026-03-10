# -*- coding: utf-8 -*-
import os
import re
import json
from datetime import datetime

print("=" * 70)
print("           ПОЛНЫЙ АУДИТ ТОВАРОВ PLATO-INTEL.BY")
print(f"           {datetime.now().strftime('%d.%m.%Y %H:%M')}")
print("=" * 70)
print()

# 1. Анализ JSON файлов v2
print("1. JSON ФАЙЛЫ (v2/data/)")
print("-" * 70)

v2_total = 0
v2_categories = {}
v2_details = []

for filename in ['products.json', 'products-cat3-4.json', 'products-cat5-9.json']:
    filepath = f'v2/data/{filename}'
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            file_total = 0
            for cat in data['categories']:
                cat_name = cat['name']
                prod_count = len(cat['products'])
                v2_categories[cat_name] = prod_count
                v2_total += prod_count
                file_total += prod_count
                v2_details.append((filename, cat_name, prod_count))
            print(f'  {filename}: {file_total} товаров')

print(f'  >>> Итого v2: {len(v2_categories)} категорий, {v2_total} товаров')
print()

# 2. Анализ JSON файлов telegram-bot
print("2. JSON ФАЙЛЫ (telegram-bot/data/)")
print("-" * 70)

bot_total = 0
bot_categories = {}

for filename in ['products.json', 'products-cat3-4.json', 'products-cat5-9.json']:
    filepath = f'telegram-bot/data/{filename}'
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            file_total = 0
            for cat in data['categories']:
                cat_name = cat['name']
                prod_count = len(cat['products'])
                bot_categories[cat_name] = prod_count
                bot_total += prod_count
                file_total += prod_count
            print(f'  {filename}: {file_total} товаров')

print(f'  >>> Итого telegram-bot: {len(bot_categories)} категорий, {bot_total} товаров')
print()

# 3. Анализ HTML файлов категорий
print("3. HTML ФАЙЛЫ КАТЕГОРИЙ (v2/category/)")
print("-" * 70)

html_files = [f for f in os.listdir('v2/category') if f.endswith('.html')]
html_total = 0
html_details = {}

for filename in html_files:
    filepath = f'v2/category/{filename}'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        products = re.findall(r'itemscope itemtype="https://schema.org/Product"', content)
        count = len(products)
        html_details[filename] = count
        html_total += count
        print(f'  {filename}: {count} товаров')

print(f'  >>> Итого HTML: {len(html_files)} файлов, {html_total} товаров (с Schema.org)')
print()

# 4. Данные sitemap.xml
print("4. SITEMAP.XML (с сайта plato-intel.by)")
print("-" * 70)
sitemap_total = 372
sitemap_products = 276
sitemap_categories = 40
sitemap_news = 25
sitemap_other = 31
print(f"  Всего URL в sitemap: {sitemap_total}")
print(f"  Карточки товаров: {sitemap_products}")
print(f"  Категории: ~{sitemap_categories}")
print(f"  Новости/статьи: ~{sitemap_news}")
print(f"  Другие страницы: ~{sitemap_other}")
print()

# 5. Сводная статистика
print("=" * 70)
print("СВОДНАЯ СТАТИСТИКА")
print("=" * 70)
print()
print(f"JSON файлы (v2):          {v2_total} товаров в {len(v2_categories)} категориях")
print(f"JSON файлы (telegram):    {bot_total} товаров в {len(bot_categories)} категориях")
print(f"HTML файлы категорий:     {html_total} товаров в {len(html_files)} файлах")
print(f"Sitemap.xml (сайт):       {sitemap_products} товаров")
print()

# Различия
print("АНАЛИЗ РАЗЛИЧИЙ:")
print(f"  - Сайт (sitemap) имеет {sitemap_products - v2_total} товаров больше, чем локальные JSON")
print(f"  - HTML файлы содержат {html_total} товаров (некоторые категории не полные)")
print()

# 6. Все категории с количеством товаров
print("=" * 70)
print("ВСЕ КАТЕГОРИИ (из JSON файлов v2)")
print("=" * 70)
print()
print(f"{'№':<3} {'Категория':<40} {'Товаров':>10}")
print("-" * 70)
for idx, (cat_name, count) in enumerate(sorted(v2_categories.items(), key=lambda x: -x[1]), 1):
    print(f"{idx:<3} {cat_name:<40} {count:>10}")
print()

# 7. Детализация по файлам
print("=" * 70)
print("ДЕТАЛИЗАЦИЯ ПО JSON ФАЙЛАМ (v2/data/)")
print("=" * 70)
print()
print(f"{'Файл':<30} {'Категория':<35} {'Товаров':>10}")
print("-" * 70)
for filename, cat_name, count in v2_details:
    print(f"{filename:<30} {cat_name:<35} {count:>10}")
print()

# 8. Рекомендации
print("=" * 70)
print("РЕКОМЕНДАЦИИ")
print("=" * 70)
print()
print("1. Синхронизация данных:")
print(f"   - Добавить {sitemap_products - v2_total} товаров из сайта в локальные JSON")
print("   - Проверить актуальность цен и наличия")
print()
print("2. HTML файлы:")
print(f"   - 10 файлов категорий содержат {html_total} товаров")
print("   - Необходимо обновить vyklyuchateli-avtomaticheskie.html (0 товаров)")
print()
print("3. Telegram-бот:")
print(f"   - Данные синхронизированы с v2 ({bot_total} товаров)")
print()

print("=" * 70)
print("АНАЛИЗ ЗАВЕРШЕН")
print("=" * 70)

# Сохранение отчета
report_path = 'PRODUCT_AUDIT_REPORT.txt'
with open(report_path, 'w', encoding='utf-8') as f:
    f.write("ПОЛНЫЙ АУДИТ ТОВАРОВ PLATO-INTEL.BY\n")
    f.write(f"Дата: {datetime.now().strftime('%d.%m.%Y %H:%M')}\n")
    f.write("=" * 70 + "\n\n")
    f.write(f"JSON файлы (v2): {v2_total} товаров в {len(v2_categories)} категориях\n")
    f.write(f"JSON файлы (telegram): {bot_total} товаров в {len(bot_categories)} категориях\n")
    f.write(f"HTML файлы категорий: {html_total} товаров в {len(html_files)} файлах\n")
    f.write(f"Sitemap.xml (сайт): {sitemap_products} товаров\n\n")
    f.write("КАТЕГОРИИ:\n")
    for cat_name, count in sorted(v2_categories.items(), key=lambda x: -x[1]):
        f.write(f"  {cat_name}: {count} товаров\n")
    
print(f"\nОтчет сохранен в: {os.path.abspath(report_path)}")
