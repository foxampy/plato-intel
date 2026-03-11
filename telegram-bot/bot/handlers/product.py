"""
Обработчик карточки товара
"""

import logging

from aiogram import F, Router
from aiogram.types import CallbackQuery, Message
from aiogram.fsm.context import FSMContext

from bot.keyboards.menus import get_product_keyboard, get_cross_sell_keyboard
from bot.services.cross_sell import cross_sell_service
from bot.services.faq import faq_service

logger = logging.getLogger(__name__)

router = Router()


@router.callback_query(F.data.startswith("product:"))
async def show_product(callback: CallbackQuery, state: FSMContext):
    """Показать карточку товара"""
    product_id = callback.data.replace("product:", "")

    # Получаем данные о товаре из состояния или БД
    data = await state.get_data()
    products_db = data.get("products_db", {})
    product = products_db.get(product_id)

    if not product:
        await callback.answer("❌ Товар не найден", show_alert=True)
        return

    # Формируем текст карточки
    text = f"""
<b>{product['name']}</b>

💰 <b>Цена:</b> {product.get('price', 0):,.0f} ₽
📦 <b>Наличие:</b> {'✅ В наличии' if product.get('availability') == 'in_stock' else '❌ Нет'}
🔖 <b>Артикул:</b> {product_id}

📝 <b>Описание:</b>
{product.get('short_description', 'Нет описания')}

📊 <b>Характеристики:</b>
"""

    # Добавляем характеристики
    specs = product.get("specifications", {})
    for key, value in list(specs.items())[:5]:  # Показываем до 5 характеристик
        text += f"\n• {key}: {value}"

    text += f"\n\n🛡️ <b>Гарантия:</b> {product.get('warranty_months', 12)} месяцев"

    # Получаем cross-sell рекомендации
    cross_sell_text = cross_sell_service.get_cross_sell_message(
        product_id,
        product['name'],
        float(product.get('price', 0)),
    )

    if cross_sell_text:
        text += "\n\n" + cross_sell_text

    # Отправляем сообщение
    await callback.message.edit_text(
        text=text,
        reply_markup=get_product_keyboard(product_id),
        parse_mode="HTML",
    )

    await callback.answer()

    logger.info(f"📦 Пользователь {callback.from_user.id} смотрит товар {product_id}")


@router.callback_query(F.data.startswith("add_to_cart:"))
async def add_to_cart(callback: CallbackQuery, state: FSMContext):
    """Добавить товар в корзину"""
    product_id = callback.data.replace("add_to_cart:", "")

    # Получаем данные о товаре
    data = await state.get_data()
    products_db = data.get("products_db", {})
    product = products_db.get(product_id)

    if not product:
        await callback.answer("❌ Товар не найден", show_alert=True)
        return

    # Получаем текущую корзину
    cart = data.get("cart", [])

    # Проверяем, есть ли уже товар в корзине
    existing_item = next((item for item in cart if item["id"] == product_id), None)

    if existing_item:
        existing_item["quantity"] += 1
    else:
        cart.append(
            {
                "id": product_id,
                "name": product["name"],
                "price": float(product.get("price", 0)),
                "quantity": 1,
            }
        )

    # Сохраняем корзину
    await state.update_data(cart=cart)

    # Считаем общую сумму
    total = sum(item["price"] * item["quantity"] for item in cart)

    await callback.answer(
        f"✅ {product['name']} добавлен в корзину\n💰 Сумма: {total:,.0f} ₽",
        show_alert=True,
    )

    logger.info(f"🛒 Пользователь {callback.from_user.id} добавил в корзину {product_id}")


@router.callback_query(F.data.startswith("cross_sell:"))
async def show_cross_sell(callback: CallbackQuery, state: FSMContext):
    """Показать сопутствующий товар"""
    product_id = callback.data.replace("cross_sell:", "")

    # Получаем данные
    data = await state.get_data()
    products_db = data.get("products_db", {})
    product = products_db.get(product_id)

    if not product:
        await callback.answer("❌ Товар не найден", show_alert=True)
        return

    # Формируем текст
    text = f"""
<b>{product['name']}</b>

💰 <b>Цена:</b> {product.get('price', 0):,.0f} ₽
📦 <b>Наличие:</b> {'✅ В наличии' if product.get('availability') == 'in_stock' else '❌ Нет'}

📝 <b>Описание:</b>
{product.get('short_description', 'Нет описания')}

💡 <b>Рекомендуем вместе с основным товаром!</b>
"""

    await callback.message.edit_text(
        text=text,
        reply_markup=get_cross_sell_keyboard(product_id),
        parse_mode="HTML",
    )

    await callback.answer()


@router.callback_query(F.data.startswith("ask_about_product:"))
async def ask_about_product(callback: CallbackQuery, state: FSMContext):
    """Задать вопрос о товаре"""
    product_id = callback.data.replace("ask_about_product:", "")

    # Сохраняем контекст товара
    await state.update_data(ask_product_context={"product_id": product_id})

    text = """
❓ <b>Вопрос о товаре</b>

Задайте ваш вопрос о этом товаре.
Я постараюсь ответить максимально подробно!

Или выберите быстрый вопрос:
"""

    # Получаем быстрые вопросы из FAQ
    quick_questions = faq_service.get_quick_replies()

    await callback.message.edit_text(
        text=text,
        reply_markup=get_product_keyboard(product_id, quick_questions),
        parse_mode="HTML",
    )

    await callback.answer()


@router.callback_query(F.data.startswith("favorite:"))
async def add_to_favorites(callback: CallbackQuery, state: FSMContext):
    """Добавить товар в избранное"""
    product_id = callback.data.replace("favorite:", "")

    # Получаем текущее избранное
    data = await state.get_data()
    favorites = data.get("favorites", [])

    if product_id in favorites:
        await callback.answer("❌ Товар уже в избранном", show_alert=True)
        return

    favorites.append(product_id)
    await state.update_data(favorites=favorites)

    await callback.answer("✅ Добавлено в избранное", show_alert=True)

    logger.info(f"❤️ Пользователь {callback.from_user.id} добавил в избранное {product_id}")
