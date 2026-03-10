# DISPATCHER OS — Бренд-сайт PLATO-INTEL

**Версия:** 1.0.0  
**Фреймворк:** Next.js 14  
**Язык:** TypeScript  
**Стили:** Tailwind CSS  
**База данных:** Supabase  
**AI:** OpenAI GPT-4

---

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка окружения

```bash
cp .env.example .env
```

Заполните `.env` необходимыми ключами:
- Supabase URL и ключи
- OpenAI API ключ

### 3. Запуск разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 4. Сборка для продакшена

```bash
npm run build
npm start
```

---

## 📁 Структура проекта

```
v3/
├── app/                      # Next.js App Router
│   ├── (main)/              # Основная группа маршрутов
│   │   ├── catalog/         # Каталог продукции
│   │   ├── expert/          # Экспертный контент
│   │   ├── lab/             # Лаборатория
│   │   ├── selection/       # Подбор оборудования
│   │   ├── about/           # О компании
│   │   └── contacts/        # Контакты
│   ├── api/                 # API Routes
│   │   ├── ai/chat/        # ИИ-диспетчер
│   │   └── leads/          # Лиды
│   ├── layout.tsx          # Корневой layout
│   ├── globals.css         # Глобальные стили
│   ├── page.tsx            # Главная страница
│   ├── sitemap.ts          # Sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # UI компоненты
│   ├── layout/             # Layout компоненты
│   ├── sections/           # Секции страницы
│   └── catalog/            # Компоненты каталога
├── lib/
│   ├── supabase/           # Supabase клиенты
│   ├── ai/                 # AI логика
│   ├── seo/                # SEO утилиты
│   └── utils/              # Общие утилиты
├── content/
│   └── expert/             # MDX статьи
├── scripts/
│   ├── seed-database.ts    # Сидирование БД
│   └── import-products.ts  # Импорт товаров
└── public/                 # Статические файлы
```

---

## 🎨 Дизайн-система DISPATCHER OS

### Цветовая палитра

| Цвет | Hex | Использование |
|------|-----|---------------|
| Dispatcher Black | `#0a0a0a` | Основной фон |
| Dispatcher Dark | `#111111` | Вторичный фон |
| Dispatcher Gray | `#1a1a1a` | Карточки |
| Dispatcher Steel | `#2a2a2a` | Границы |
| Dispatcher Amber | `#f59e0b` | Акценты, CTA |
| Dispatcher Amber Glow | `#fbbf24` | Свечение |
| Dispatcher Green | `#10b981` | Успех, статусы |
| Dispatcher Red | `#ef4444` | Ошибки, тревога |
| Dispatcher Blue | `#3b82f6` | Инфо, ссылки |
| Dispatcher Terminal | `#00ff41` | Терминальный стиль |
| Dispatcher Screen | `#0d1117` | Экраны |

### Типографика

- **Inter** — основной шрифт интерфейса
- **JetBrains Mono** — код, технические данные, терминал

---

## 🗄️ База данных

### Таблицы

- `products` — товары
- `categories` — категории
- `leads` — лиды
- `ai_conversations` — диалоги с ИИ
- `expert_articles` — статьи

### Сидирование

```bash
npm run seed
```

### Импорт товаров

```bash
npm run import-products
```

---

## 🤖 ИИ-Диспетчер

API endpoint: `/api/ai/chat`

### Пример запроса

```typescript
const response = await fetch('/api/ai/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Подберите автоматический выключатель для двигателя 5кВт',
    context: {
      category: 'circuit-breakers',
      power: 5,
    }
  })
})
```

---

## 📊 SEO

### Автоматическая генерация

- `sitemap.xml` — `/sitemap.xml`
- `robots.txt` — `/robots.txt`
- Schema.org разметка — встроена

### Meta-теги

Настраиваются в `lib/seo/schema.ts`

---

## 📦 Зависимости

### Основные

- `next` 14.1.0 — фреймворк
- `react` 18.2.0 — UI библиотека
- `@supabase/supabase-js` — база данных
- `openai` — ИИ интеграция
- `framer-motion` — анимации
- `lucide-react` — иконки
- `tailwindcss` — стили
- `next-mdx-remote` — MDX контент

### Dev

- `typescript` — типизация
- `eslint` — линтинг
- `tsx` — запуск TypeScript скриптов

---

## 🔧 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка продакшена |
| `npm start` | Запуск продакшена |
| `npm run lint` | ESLint проверка |
| `npm run seed` | Сидирование БД |
| `npm run import-products` | Импорт товаров |

---

## 📝 Лицензия

© 2026 ООО «ПЛАТО-ИНТЕЛ»

---

## 📞 Контакты

**Адрес:** г. Минск, ул. М. Лынькова 85, корп.6, офис 20  
**Телефон:** +375 (17) 399-31-23  
**Email:** info@plato-intel.by  
**Сайт:** https://plato-intel.by
