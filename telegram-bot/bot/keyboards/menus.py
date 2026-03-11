"""
Клавиатуры для бота
"""

from aiogram.types import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    KeyboardButton,
    ReplyKeyboardMarkup,
    WebAppInfo,
)


def get_main_menu() -> ReplyKeyboardMarkup:
    """Главное меню"""
    keyboard = [
        [
            KeyboardButton(text="🛒 Каталог"),
            KeyboardButton(text="🔍 Поиск"),
        ],
        [
            KeyboardButton(text="📋 Корзина"),
            KeyboardButton(text="📦 Мои заказы"),
        ],
        [
            KeyboardButton(text="👤 Профиль"),
            KeyboardButton(text="📞 Поддержка"),
        ],
        [
            KeyboardButton(text="ℹ️ О компании"),
            KeyboardButton(text="🚚 Доставка"),
        ],
    ]
    return ReplyKeyboardMarkup(
        keyboard=keyboard,
        resize_keyboard=True,
        one_time_keyboard=False,
    )


def get_catalog_menu() -> InlineKeyboardMarkup:
    """Меню каталога"""
    categories = [
        ("⚡ Крановые тормоза", "cat_brakes"),
        ("🔌 Контакторы", "cat_contactors"),
        ("🔋 Автоматы", "cat_breakers"),
        ("🧲 Электромагниты", "cat_magnets"),
        ("🔘 Концевые выключатели", "cat_limits"),
        ("⚙️ Пускатели", "cat_starters"),
        ("📟 Реле", "cat_relays"),
        ("🎮 Командоконтроллеры", "cat_controllers"),
        ("💧 Гидротолкатели", "cat_hydraulics"),
    ]
    
    keyboard = []
    for i in range(0, len(categories), 2):
        row = []
        row.append(InlineKeyboardButton(
            text=categories[i][0],
            callback_data=categories[i][1],
        ))
        if i + 1 < len(categories):
            row.append(InlineKeyboardButton(
                text=categories[i+1][0],
                callback_data=categories[i+1][1],
            ))
        keyboard.append(row)
    
    keyboard.append([InlineKeyboardButton(
        text="🔙 Назад",
        callback_data="main_menu",
    )])
    
    return InlineKeyboardMarkup(keyboard=keyboard)


def get_product_card(product_id: str, has_cross_sell: bool = False) -> InlineKeyboardMarkup:
    """Карточка товара"""
    keyboard = [
        [
            InlineKeyboardButton(
                text="🛒 В корзину",
                callback_data=f"add_to_cart:{product_id}",
            ),
            InlineKeyboardButton(
                text="❤️ В избранное",
                callback_data=f"add_to_fav:{product_id}",
            ),
        ],
    ]
    
    if has_cross_sell:
        keyboard.append([
            InlineKeyboardButton(
                text="📦 Сопутствующие товары",
                callback_data=f"cross_sell:{product_id}",
            ),
        ])
    
    keyboard.append([
        InlineKeyboardButton(
            text="💬 Задать вопрос",
            callback_data=f"ask_product:{product_id}",
        ),
    ])
    
    keyboard.append([
        InlineKeyboardButton(
            text="🔙 Назад в каталог",
            callback_data="catalog_back",
        ),
    ])
    
    return InlineKeyboardMarkup(keyboard=keyboard)


def get_cart_menu() -> InlineKeyboardMarkup:
    """Меню корзины"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="📝 Оформить заказ",
                    callback_data="checkout_start",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="🧹 Очистить корзину",
                    callback_data="cart_clear",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="🔙 Продолжить покупки",
                    callback_data="catalog",
                ),
            ],
        ]
    )


def get_checkout_menu(step: int) -> InlineKeyboardMarkup:
    """Оформление заказа по шагам"""
    steps = [
        ("📍 Адрес доставки", "checkout_address"),
        ("💳 Способ оплаты", "checkout_payment"),
        ("✅ Подтвердить заказ", "checkout_confirm"),
    ]
    
    keyboard = []
    for i, (text, callback) in enumerate(steps):
        if i == step:
            keyboard.append([
                InlineKeyboardButton(
                    text=f"➡️ {text}",
                    callback_data=callback,
                ),
            ])
    
    keyboard.append([
        InlineKeyboardButton(
            text="❌ Отменить",
            callback_data="checkout_cancel",
        ),
    ])
    
    return InlineKeyboardMarkup(keyboard=keyboard)


def get_support_menu() -> InlineKeyboardMarkup:
    """Меню поддержки"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="💬 Задать вопрос ИИ",
                    callback_data="support_ai",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="📞 Позвонить менеджеру",
                    callback_data="support_call",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="📧 Написать на email",
                    callback_data="support_email",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="❓ Частые вопросы",
                    callback_data="support_faq",
                ),
            ],
        ]
    )


def get_ai_chat_keyboard() -> InlineKeyboardMarkup:
    """Клавиатура для ИИ-чата"""
    quick_replies = [
        "Как сделать заказ?",
        "Сроки доставки",
        "Гарантия",
        "Прайс-лист",
    ]
    
    keyboard = [
        [
            InlineKeyboardButton(
                text=text,
                callback_data=f"ai_quick:{text}",
            )
            for text in quick_replies
        ],
        [
            InlineKeyboardButton(
                text="🔙 Завершить диалог",
                callback_data="ai_end",
            ),
        ],
    ]
    
    return InlineKeyboardMarkup(keyboard=keyboard)


def get_admin_menu() -> InlineKeyboardMarkup:
    """Админ-панель"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="📊 Статистика",
                    callback_data="admin_stats",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="📦 Заказы",
                    callback_data="admin_orders",
                ),
                InlineKeyboardButton(
                    text="👥 Пользователи",
                    callback_data="admin_users",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="💬 Диалоги с ИИ",
                    callback_data="admin_conversations",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="📢 Рассылка",
                    callback_data="admin_broadcast",
                ),
            ],
        ]
    )


def get_yes_no_keyboard() -> InlineKeyboardMarkup:
    """Клавиатура Да/Нет"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="✅ Да",
                    callback_data="yes",
                ),
                InlineKeyboardButton(
                    text="❌ Нет",
                    callback_data="no",
                ),
            ],
        ]
    )


def get_back_keyboard() -> InlineKeyboardMarkup:
    """Кнопка Назад"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="🔙 Назад",
                    callback_data="back",
                ),
            ],
        ]
    )


def get_product_keyboard(product_id: str, quick_questions: list = None) -> InlineKeyboardMarkup:
    """Клавиатура для карточки товара"""
    keyboard = [
        [
            InlineKeyboardButton(
                text="🛒 В корзину",
                callback_data=f"add_to_cart:{product_id}",
            ),
            InlineKeyboardButton(
                text="❤️ В избранное",
                callback_data=f"favorite:{product_id}",
            ),
        ],
    ]

    # Добавляем быстрые вопросы, если есть
    if quick_questions:
        for qq in quick_questions[:3]:  # До 3 вопросов
            keyboard.append([
                InlineKeyboardButton(
                    text=qq["label"],
                    callback_data=f"ai_quick:{qq['question']}",
                ),
            ])

    keyboard.append([
        InlineKeyboardButton(
            text="🔙 Назад в каталог",
            callback_data="catalog_back",
        ),
    ])

    return InlineKeyboardMarkup(keyboard=keyboard)


def get_cross_sell_keyboard(product_id: str) -> InlineKeyboardMarkup:
    """Клавиатура для сопутствующего товара"""
    return InlineKeyboardMarkup(
        keyboard=[
            [
                InlineKeyboardButton(
                    text="🛒 Добавить в корзину",
                    callback_data=f"add_to_cart:{product_id}",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="🔙 Вернуться к основному товару",
                    callback_data=f"product:{product_id}",
                ),
            ],
        ]
    )
