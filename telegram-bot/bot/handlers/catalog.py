"""
Обработчики каталога товаров
"""

import json
import logging
from pathlib import Path

from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.fsm.context import FSMContext

from bot.keyboards.menus import get_catalog_menu, get_product_card, get_back_keyboard
from bot.services.qwen_ai import QwenAI

logger = logging.getLogger(__name__)

router = Router()

# Загрузка данных о товарах
def load_products():
    """Загрузка товаров из JSON файлов"""
    products = {}
    categories = {}
    
    data_dir = Path(__file__).parent.parent.parent / "data"
    
    # Загружаем все JSON файлы с товарами
    product_files = [
        "products.json",
        "products-cat3-4.json",
        "products-cat5-9.json",
    ]
    
    for filename in product_files:
        filepath = data_dir / filename
        if filepath.exists():
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
                for category in data.get("categories", []):
                    cat_id = category["id"]
                    categories[cat_id] = {
                        "id": cat_id,
                        "name": category["name"],
                        "description": category.get("description", ""),
                    }
                    
                    for product in category.get("products", []):
                        products[product["id"]] = {
                            **product,
                            "category_name": category["name"],
                        }
    
    return products, categories


# Глобальные данные
PRODUCTS, CATEGORIES = load_products()


@router.callback_query(F.data == "catalog")
@router.message(F.text == "🛒 Каталог")
async def show_catalog(callback: CallbackQuery | Message, state: FSMContext):
    """Показать каталог товаров"""
    text = """
🛒 <b>Каталог продукции ПЛАТО-ИНТЕЛ</b>

📦 <b>95 товаров в 9 категориях:</b>

Выберите категорию 👇
"""
    
    if isinstance(callback, CallbackQuery):
        await callback.message.edit_text(
            text=text,
            reply_markup=get_catalog_menu(),
        )
        await callback.answer()
    else:
        await callback.answer(
            text=text,
            reply_markup=get_catalog_menu(),
        )


@router.callback_query(F.data.startswith("cat_"))
async def show_category(callback: CallbackQuery):
    """Показать товары категории"""
    cat_id = callback.data.replace("cat_", "")
    
    if cat_id not in CATEGORIES:
        await callback.answer("❌ Категория не найдена", show_alert=True)
        return
    
    category = CATEGORIES[cat_id]
    
    # Фильтруем товары категории
    category_products = [
        p for p in PRODUCTS.values()
        if p.get("category") == cat_id or p.get("category_name") == category["name"]
    ]
    
    if not category_products:
        await callback.answer("❌ В этой категории пока нет товаров", show_alert=True)
        return
    
    # Формируем текст
    text = f"""
📦 <b>{category['name']}</b>

{category.get('description', '')}

📊 <b>Товаров в категории:</b> {len(category_products)}

Выберите товар 👇
"""
    
    # Создаём клавиатуру с товарами
    from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup
    
    keyboard = []
    for product in category_products[:10]:  # Показываем до 10 товаров
        price = product.get("price", 0)
        availability = "✅" if product.get("availability") == "in_stock" else "❌"
        
        keyboard.append([
            InlineKeyboardButton(
                text=f"{availability} {product['name']} — {price:,} ₽",
                callback_data=f"product:{product['id']}",
            ),
        ])
    
    # Кнопки навигации
    if len(category_products) > 10:
        keyboard.append([
            InlineKeyboardButton(
                text=f"📋 Ещё товары ({len(category_products) - 10})",
                callback_data=f"category_more:{cat_id}",
            ),
        ])
    
    keyboard.append([
        InlineKeyboardButton(
            text="🔙 Назад в каталог",
            callback_data="catalog",
        ),
    ])
    
    await callback.message.edit_text(
        text=text,
        reply_markup=InlineKeyboardMarkup(keyboard=keyboard),
    )
    await callback.answer()


@router.callback_query(F.data.startswith("product:"))
async def show_product(callback: CallbackQuery):
    """Показать карточку товара"""
    product_id = callback.data.replace("product:", "")
    
    if product_id not in PRODUCTS:
        await callback.answer("❌ Товар не найден", show_alert=True)
        return
    
    product = PRODUCTS[product_id]
    
    # Формируем описание
    specs_text = ""
    for key, value in product.get("specifications", {}).items():
        specs_text += f"• {key}: {value}\n"
    
    availability_emoji = "✅" if product.get("availability") == "in_stock" else "❌"
    stock_text = f"{availability_emoji} В наличии: {product.get('stock_quantity', 0)} шт."
    
    text = f"""
📦 <b>{product['name']}</b>

💰 <b>Цена:</b> {product.get('price', 0):,} ₽

{product.get('short_description', product.get('description', ''))}

📋 <b>Характеристики:</b>
{specs_text}

{stock_text}

🛡️ Гарантия: {product.get('warranty_months', 12)} месяцев
"""
    
    # Проверяем наличие сопутствующих товаров
    has_cross_sell = product_id in ["tkg-200", "kt-6012", "va57-35-63a"]
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_product_card(product_id, has_cross_sell),
    )
    await callback.answer()


@router.callback_query(F.data.startswith("ask_product:"))
async def ask_about_product(callback: CallbackQuery, state: FSMContext):
    """Задать вопрос о товаре ИИ-консультанту"""
    product_id = callback.data.replace("ask_product:", "")
    
    if product_id not in PRODUCTS:
        await callback.answer("❌ Товар не найден", show_alert=True)
        return
    
    product = PRODUCTS[product_id]
    
    # Сохраняем контекст товара
    await state.update_data(ask_product_id=product_id)
    await state.update_data(ask_product_context=product)
    
    text = f"""
💬 <b>Вопрос о товаре: {product['name']}</b>

Я — ИИ-консультант ПЛАТО-ИНТЕЛ. Готов ответить на ваши вопросы об этом товаре!

Напишите ваш вопрос 👇
"""
    
    await callback.message.edit_text(
        text=text,
        reply_markup=get_back_keyboard(),
    )
    await callback.answer()
    
    # Устанавливаем состояние ожидания вопроса
    from aiogram.fsm.state import State, StatesGroup
    
    class ProductQuestion(StatesGroup):
        waiting_for_question = State()
    
    await state.set_state(ProductQuestion.waiting_for_question)


@router.callback_query(F.data == "back")
@router.callback_query(F.data == "catalog_back")
async def go_back(callback: CallbackQuery, state: FSMContext):
    """Назад"""
    await state.clear()
    await show_catalog(callback, state)
