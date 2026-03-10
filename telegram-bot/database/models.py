"""
Модели базы данных
"""

from datetime import datetime
from enum import Enum

from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    DateTime,
    Enum as SQLEnum,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    JSON,
    func,
)
from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase, relationship


class Base(AsyncAttrs, DeclarativeBase):
    """Базовый класс для моделей"""
    pass


class OrderStatus(str, Enum):
    """Статусы заказа"""
    NEW = "new"
    CONFIRMED = "confirmed"
    PROCESSING = "processing"
    SHIPPED = "shipped"
    DELIVERED = "delivered"
    CANCELLED = "cancelled"


class User(Base):
    """Пользователи бота"""
    __tablename__ = "users"
    
    user_id = Column(BigInteger, primary_key=True)
    username = Column(String(255), nullable=True)
    first_name = Column(String(255), nullable=True)
    last_name = Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    email = Column(String(255), nullable=True)
    company = Column(String(255), nullable=True)
    discount_level = Column(Integer, default=0)  # 0-10%
    is_vip = Column(Boolean, default=False)
    is_blocked = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())
    last_seen = Column(DateTime, default=func.now(), onupdate=func.now())
    
    # Связи
    orders = relationship("Order", back_populates="user")
    cart_items = relationship("CartItem", back_populates="user")
    conversations = relationship("Conversation", back_populates="user")


class Conversation(Base):
    """Диалоги с ИИ-консультантом"""
    __tablename__ = "conversations"
    
    conversation_id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    operator_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=True)
    status = Column(
        SQLEnum("new", "active", "waiting", "closed", name="conversation_status"),
        default="new",
    )
    priority = Column(
        SQLEnum("low", "normal", "high", "urgent", name="conversation_priority"),
        default="normal",
    )
    topic = Column(String(100), nullable=True)  # sales, support, complaint, other
    messages = Column(JSON, default=list)  # История сообщений
    context = Column(JSON, default=dict)  # Контекст диалога
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
    closed_at = Column(DateTime, nullable=True)
    
    # Связи
    user = relationship("User", back_populates="conversations", foreign_keys=[user_id])


class Order(Base):
    """Заказы"""
    __tablename__ = "orders"
    
    order_id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    order_number = Column(String(50), unique=True, nullable=False)
    status = Column(
        SQLEnum(OrderStatus, name="order_status"),
        default=OrderStatus.NEW,
    )
    items = Column(JSON, nullable=False)  # Состав заказа
    total_amount = Column(Numeric(10, 2), nullable=False)
    discount_amount = Column(Numeric(10, 2), default=0)
    delivery_cost = Column(Numeric(10, 2), default=0)
    delivery_address = Column(Text, nullable=True)
    payment_method = Column(
        SQLEnum("card", "cash", "invoice", "erip", name="payment_method"),
        nullable=True,
    )
    payment_status = Column(
        SQLEnum("unpaid", "paid", "refunded", name="payment_status"),
        default="unpaid",
    )
    customer_phone = Column(String(50), nullable=True)
    customer_email = Column(String(255), nullable=True)
    customer_comment = Column(Text, nullable=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
    
    # Связи
    user = relationship("User", back_populates="orders")


class CartItem(Base):
    """Элементы корзины"""
    __tablename__ = "cart_items"
    
    cart_id = Column(BigInteger, primary_key=True, autoincrement=True)
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    product_id = Column(String(100), nullable=False)
    product_name = Column(String(500), nullable=True)
    price = Column(Numeric(10, 2), nullable=False)
    quantity = Column(Integer, default=1)
    added_at = Column(DateTime, default=func.now())
    
    # Связи
    user = relationship("User", back_populates="cart_items")


class Product(Base):
    """Товары (кэш из JSON)"""
    __tablename__ = "products"
    
    product_id = Column(String(100), primary_key=True)
    name = Column(String(500), nullable=False)
    category_id = Column(String(100), nullable=False)
    price = Column(Numeric(10, 2), nullable=False)
    currency = Column(String(10), default="RUB")
    availability = Column(String(50), default="in_stock")
    stock_quantity = Column(Integer, default=0)
    image_url = Column(String(500), nullable=True)
    short_description = Column(Text, nullable=True)
    specifications = Column(JSON, default=dict)
    warranty_months = Column(Integer, default=12)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())


class CrossSell(Base):
    """Сопутствующие товары"""
    __tablename__ = "cross_sells"
    
    cross_sell_id = Column(BigInteger, primary_key=True, autoincrement=True)
    product_id = Column(String(100), nullable=False)
    related_product_id = Column(String(100), nullable=False)
    priority = Column(Integer, default=1)
    created_at = Column(DateTime, default=func.now())


class UserSetting(Base):
    """Настройки пользователей"""
    __tablename__ = "user_settings"
    
    user_id = Column(BigInteger, ForeignKey("users.user_id"), primary_key=True)
    notifications_enabled = Column(Boolean, default=True)
    language = Column(String(10), default="ru")
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
