"""
Скрипт для парсинга товаров с сайта plato-intel.by
Собирает все товары из каталога в JSON формат
"""

import json
import logging
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime

import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class PlatoIntelScraper:
    """Парсер товаров с сайта plato-intel.by"""
    
    BASE_URL = "https://plato-intel.by"
    CATALOG_URL = f"{BASE_URL}/catalog"
    
    HEADERS = {
        'User-Agent': UserAgent().random,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    
    # Категории для парсинга
    CATEGORIES = {
        "kranovye-tormoza": "Крановые тормоза",
        "kontaktory": "Контакторы",
        "avtomaticheskie-vyklyuchateli": "Автоматические выключатели",
        "elektromagnity": "Электромагниты",
        "koncevye-vyklyuchateli": "Концевые выключатели",
        "puskateli": "Пускатели",
        "rele": "Реле",
        "kommandokontrolery": "Командоконтроллеры",
        "gidrotolkateli": "Гидротолкатели",
    }
    
    def __init__(self, output_dir: str = "data"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.session = requests.Session()
        self.session.headers.update(self.HEADERS)
    
    def fetch_url(self, url: str) -> Optional[str]:
        """Получение HTML страницы"""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            logger.error(f"Ошибка при загрузке {url}: {e}")
            return None
    
    def parse_product_card(self, product_url: str) -> Optional[Dict]:
        """Парсинг карточки товара"""
        html = self.fetch_url(product_url)
        if not html:
            return None
        
        soup = BeautifulSoup(html, 'html.parser')
        
        # Извлечение данных из Schema.org разметки
        script_tag = soup.find('script', type='application/ld+json')
        product_data = {}
        
        if script_tag:
            try:
                product_data = json.loads(script_tag.string)
            except json.JSONDecodeError:
                pass
        
        # Извлечение основной информации
        name = soup.find('h1')
        name = name.text.strip() if name else product_data.get('name', '')
        
        price = soup.find('span', {'class': 'price'})
        if not price:
            price = soup.find('meta', {'itemprop': 'price'})
            price = price.get('content') if price else None
        else:
            price = price.text.strip()
        
        # Артикул
        article = soup.find('span', {'class': 'article'})
        article = article.text.strip() if article else ''
        
        # Описание
        description = soup.find('div', {'class': 'description'})
        description = description.text.strip() if description else product_data.get('description', '')
        
        # Характеристики
        specs = {}
        specs_table = soup.find('table', {'class': 'specs'})
        if specs_table:
            for row in specs_table.find_all('tr'):
                cols = row.find_all('td')
                if len(cols) == 2:
                    key = cols[0].text.strip()
                    value = cols[1].text.strip()
                    specs[key] = value
        
        # Изображения
        images = []
        main_image = soup.find('img', {'class': 'product-main-image'})
        if main_image:
            images.append(main_image.get('src', ''))
        
        gallery = soup.find_all('img', {'class': 'product-gallery-image'})
        for img in gallery:
            images.append(img.get('src', ''))
        
        # Наличие
        availability = soup.find('span', {'class': 'availability'})
        availability = availability.text.strip() if availability else 'В наличии'
        
        return {
            'name': name,
            'article': article,
            'price': self._parse_price(price),
            'currency': 'BYN',
            'availability': availability,
            'description': description,
            'specifications': specs,
            'images': images,
            'url': product_url,
            'category': self._extract_category_from_url(product_url),
        }
    
    def _parse_price(self, price_str: str) -> float:
        """Парсинг цены из строки"""
        if not price_str:
            return 0.0
        
        # Удаляем валюту и пробелы
        price_str = price_str.replace('BYN', '').replace('руб', '').replace(' ', '')
        
        try:
            return float(price_str.replace(',', '.'))
        except ValueError:
            return 0.0
    
    def _extract_category_from_url(self, url: str) -> str:
        """Извлечение категории из URL"""
        for cat_slug in self.CATEGORIES.keys():
            if cat_slug in url:
                return cat_slug
        return 'other'
    
    def parse_category(self, category_slug: str, category_name: str) -> List[Dict]:
        """Парсинг категории товаров"""
        logger.info(f"Парсинг категории: {category_name}")
        
        category_url = f"{self.CATALOG_URL}/{category_slug}"
        html = self.fetch_url(category_url)
        
        if not html:
            return []
        
        soup = BeautifulSoup(html, 'html.parser')
        products = []
        
        # Поиск всех ссылок на товары
        product_links = soup.find_all('a', {'class': 'product-link'})
        
        for link in product_links:
            product_url = link.get('href', '')
            if product_url and '/product/' in product_url:
                logger.info(f"  Товар: {product_url}")
                product = self.parse_product_card(f"{self.BASE_URL}{product_url}")
                if product:
                    products.append(product)
        
        logger.info(f"  Найдено товаров: {len(products)}")
        return products
    
    def parse_all_categories(self) -> Dict:
        """Парсинг всех категорий"""
        all_data = {
            'meta': {
                'version': '2.0',
                'created_at': datetime.now().isoformat(),
                'source': 'https://plato-intel.by',
                'total_categories': len(self.CATEGORIES),
                'total_products': 0,
            },
            'categories': []
        }
        
        for slug, name in self.CATEGORIES.items():
            products = self.parse_category(slug, name)
            
            category_data = {
                'id': slug,
                'name': name,
                'product_count': len(products),
                'products': products
            }
            
            all_data['categories'].append(category_data)
            all_data['meta']['total_products'] += len(products)
        
        return all_data
    
    def save_to_json(self, data: Dict, filename: str):
        """Сохранение в JSON"""
        filepath = self.output_dir / filename
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        logger.info(f"Данные сохранены в {filepath}")
        logger.info(f"Всего товаров: {data['meta']['total_products']}")
    
    def run(self):
        """Запуск парсинга"""
        logger.info("Запуск парсинга сайта plato-intel.by...")
        
        # Парсинг всех категорий
        all_data = self.parse_all_categories()
        
        # Сохранение общих данных
        self.save_to_json(all_data, 'products-full.json')
        
        # Разделение по категориям
        for category in all_data['categories']:
            filename = f"products-{category['id']}.json"
            self.save_to_json({
                'meta': {
                    'category': category['name'],
                    'created_at': datetime.now().isoformat(),
                },
                'products': category['products']
            }, filename)
        
        logger.info("Парсинг завершён!")


if __name__ == "__main__":
    scraper = PlatoIntelScraper(output_dir="data/scraped")
    scraper.run()
