# -*- coding: utf-8 -*-
import os
import re
import json

print("=" * 60)
print("АУДИТ ТОВАРОВ PLATO-INTEL.BY")
print("=" * 60)
print()

# 1. Анализ JSON файлов v2
print("1. JSON ФАЙЛЫ (v2/data/)")
print("-" * 60)

v2_total = 0
v2_categories = {}

for filename in ['products.json', 'products-cat3-4.json', 'products-cat5-9.json']:
    filepath = f'v2/data/{filename}'
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for cat in data['categories']:
                cat_name = cat['name']
                prod_count = len(cat['products'])
                v2_categories[cat_name] = prod_count
                v2_total += prod_count
                print(f'  {filename}: {cat_name} - {prod_count} товаров')

print(f'  >>> Итого v2: {len(v2_categories)} категорий, {v2_total} товаров')
print()

# 2. Анализ JSON файлов telegram-bot
print("2. JSON ФАЙЛЫ (telegram-bot/data/)")
print("-" * 60)

bot_total = 0
bot_categories = {}

for filename in ['products.json', 'products-cat3-4.json', 'products-cat5-9.json']:
    filepath = f'telegram-bot/data/{filename}'
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for cat in data['categories']:
                cat_name = cat['name']
                prod_count = len(cat['products'])
                bot_categories[cat_name] = prod_count
                bot_total += prod_count
                print(f'  {filename}: {cat_name} - {prod_count} товаров')

print(f'  >>> Итого telegram-bot: {len(bot_categories)} категорий, {bot_total} товаров')
print()

# 3. Анализ HTML файлов категорий
print("3. HTML ФАЙЛЫ КАТЕГОРИЙ (v2/category/)")
print("-" * 60)

html_files = [f for f in os.listdir('v2/category') if f.endswith('.html')]
html_total = 0
html_details = {}

for filename in html_files:
    filepath = f'v2/category/{filename}'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        # Ищем product-card с itemscope
        products = re.findall(r'itemscope itemtype="https://schema.org/Product"', content)
        count = len(products)
        html_details[filename] = count
        html_total += count
        print(f'  {filename}: {count} товаров')

print(f'  >>> Итого HTML: {len(html_files)} файлов, {html_total} товаров (с Schema.org)')
print()

# 4. Данные sitemap.xml
print("4. SITEMAP.XML (с сайта plato-intel.by)")
print("-" * 60)
print("  Всего URL в sitemap: 372")
print("  Карточки товаров: 276")
print("  Категории: ~40")
print("  Новости/статьи: ~25")
print("  Другие страницы: ~31")
print()

# 5. Сводная статистика
print("=" * 60)
print("СВОДНАЯ СТАТИСТИКА")
print("=" * 60)
print()
print(f"JSON файлы (v2):        {v2_total} товаров в {len(v2_categories)} категориях")
print(f"JSON файлы (telegram):  {bot_total} товаров в {len(bot_categories)} категориях")
print(f"HTML файлы категорий:   {html_total} товаров в {len(html_files)} файлах")
print(f"Sitemap.xml (сайт):     276 товаров")
print()

# 6. Все категории с количеством товаров
print("=" * 60)
print("ВСЕ КАТЕГОРИИ (из JSON файлов v2)")
print("=" * 60)
for cat_name, count in sorted(v2_categories.items(), key=lambda x: -x[1]):
    print(f"  {cat_name}: {count} товаров")
print()

print("=" * 60)
print("АНАЛИЗ ЗАВЕРШЕН")
print("=" * 60)
