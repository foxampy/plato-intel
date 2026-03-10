"""
Скрипт для объединения всех данных о товарах
"""

import json
from pathlib import Path
from datetime import datetime


def merge_all_products():
    """Объединение товаров из всех источников"""
    
    data_dir = Path("data")
    output_dir = Path("data/merged")
    output_dir.mkdir(exist_ok=True)
    
    all_products = []
    categories = {}
    
    # Загрузка из v2/data/
    v2_data_dir = Path("../v2/data")
    
    json_files = [
        "products.json",
        "products-cat3-4.json",
        "products-cat5-9.json",
    ]
    
    for filename in json_files:
        filepath = v2_data_dir / filename
        if filepath.exists():
            with open(filepath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
                for category in data.get("categories", []):
                    cat_id = category["id"]
                    categories[cat_id] = {
                        "id": cat_id,
                        "name": category["name"],
                        "description": category.get("description", ""),
                    }
                    
                    for product in category.get("products", []):
                        product["category_id"] = cat_id
                        all_products.append(product)
    
    # Загрузка из scraped/
    scraped_dir = data_dir / "scraped"
    if scraped_dir.exists():
        scraped_file = scraped_dir / "products-full.json"
        if scraped_file.exists():
            with open(scraped_file, 'r', encoding='utf-8') as f:
                scraped_data = json.load(f)
                
                for category in scraped_data.get("categories", []):
                    cat_id = category["id"]
                    if cat_id not in categories:
                        categories[cat_id] = {
                            "id": cat_id,
                            "name": category["name"],
                            "description": "",
                        }
                    
                    for product in category.get("products", []):
                        product["category_id"] = cat_id
                        product["source"] = "scraped"
                        all_products.append(product)
    
    # Удаление дубликатов по артикулу
    seen_articles = set()
    unique_products = []
    
    for product in all_products:
        article = product.get("article") or product.get("slug") or product.get("id")
        if article and article not in seen_articles:
            seen_articles.add(article)
            unique_products.append(product)
        elif not article:
            unique_products.append(product)
    
    # Сохранение объединённых данных
    merged_data = {
        "meta": {
            "version": "3.0",
            "created_at": datetime.now().isoformat(),
            "total_categories": len(categories),
            "total_products": len(unique_products),
            "sources": ["v2/data", "scraped"],
        },
        "categories": list(categories.values()),
        "products": unique_products,
    }
    
    output_file = output_dir / "products-merged.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Объединено {len(unique_products)} товаров в {len(categories)} категориях")
    print(f"📁 Файл сохранён: {output_file}")
    
    # Статистика по категориям
    print("\n📊 Статистика по категориям:")
    cat_stats = {}
    for product in unique_products:
        cat_id = product.get("category_id", "unknown")
        cat_stats[cat_id] = cat_stats.get(cat_id, 0) + 1
    
    for cat_id, count in sorted(cat_stats.items()):
        cat_name = categories.get(cat_id, {}).get("name", cat_id)
        print(f"  • {cat_name}: {count}")


if __name__ == "__main__":
    merge_all_products()
