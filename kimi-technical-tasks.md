# Технические задачи по доработке сайта plato-intel.by

## ⚡ КРИТИЧНЫЕ ЗАДАЧИ (неделя 1-2)

### Задача 1: Настройка Title и Meta Description

**Что нужно сделать:**
Для каждой страницы сайта добавить уникальные:
- `<title>` - 50-60 символов
- `<meta name="description">` - 150-160 символов

**Список страниц для оптимизации (приоритет):**

| № | URL | Title (пример) | Description (пример) |
|---|-----|----------------|----------------------|
| 1 | / | Электротехническое оборудование для кранов купить в Минске | Продажа электротехнического и кранового оборудования в Беларуси. Тормоза ТКГ, контакторы, выключатели. ⭐ Гарантия 12 мес. 📞 +375 (29) 615-56-72 |
| 2 | /catalog | Каталог электротехнического оборудования | Широкий каталог электротехнической продукции: тормоза, контакторы, выключатели, пускатели. ✅ Наличие на складе. 🚚 Доставка по РБ. |
| 3 | /catalog/kranovye-tormoza | Крановые тормоза ТКГ, ТКТ, ТКП купить в Минске | Купить крановые тормоза ТКГ, ТКТ, ТКП, ТГЕД в Минске. Гидротолкатели в комплекте. 💰 Выгодные цены. 📋 Технические характеристики. |
| 4 | /catalog/kontaktory | Контакторы КТ, КВ купить в Минске | Электромагнитные контакторы КТ, КВ, модульные Finder. Номиналы от 25А до 630А. ⭐ Гарантия. 🚚 Доставка по Беларуси. |
| 5 | /catalog/vyklyuchateli-avtomaticheskie | Автоматические выключатели ВА57, ВА55 купить | Автоматические выключатели ВА57-35, ВА55-41, ВА57-39. Номиналы 25А-1000А. ✅ Сертифицированная продукция. 📞 Звоните! |
| 6 | /catalog/elektromagnity | Электромагниты ЭМИС, МИС, ЭМ, ЭД купить | Тяговые электромагниты ЭМИС, МИС, ЭМ, ЭД в наличии. Напряжение 110В, 220В, 380В. 🚚 Доставка по РБ. |
| 7 | /about | О компании Плато-Интел | ООО «Плато-Интел» — поставщик электротехнического оборудования в Беларуси. 10+ лет на рынке. 🏭 Работаем с предприятиями РБ. |
| 8 | /contacts | Контакты Плато-Интел в Минске | Адрес: Минск, ул. Лынькова 85/6, офис 20. Телефоны: +375 (17) 399-31-23, +375 (29) 615-56-72. 📧 plato-intel@yandex.ru |

**Код для внедрения:**
```html
<head>
    <title>Электротехническое оборудование для кранов купить в Минске | Плато-Интел</title>
    <meta name="description" content="Продажа электротехнического и кранового оборудования в Беларуси. Тормоза ТКГ, контакторы, выключатели. ⭐ Гарантия 12 мес. 📞 +375 (29) 615-56-72">
    <meta name="keywords" content="электротехническое оборудование, крановое оборудование, купить, Минск, Беларусь">
</head>
```

---

### Задача 2: Внедрение Schema.org микроразметки

#### 2.1 Organization (для всех страниц)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ООО «Плато-Интел»",
  "alternateName": "Plato-Intel",
  "url": "https://plato-intel.by",
  "logo": "https://plato-intel.by/logo.png",
  "email": "plato-intel@yandex.ru",
  "telephone": ["+375173993123", "+375291630266", "+375296155672"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. М. Лынькова 85, корп.6, офис 20",
    "addressLocality": "Минск",
    "addressCountry": "BY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+375296155672",
    "contactType": "sales",
    "areaServed": "BY",
    "availableLanguage": "Russian"
  }
}
</script>
```

#### 2.2 LocalBusiness (для страницы контактов)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "name": "ООО «Плато-Интел»",
  "image": "https://plato-intel.by/logo.png",
  "url": "https://plato-intel.by",
  "telephone": "+375296155672",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. М. Лынькова 85, корп.6, офис 20",
    "addressLocality": "Минск",
    "postalCode": "220124",
    "addressCountry": "BY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.9069,
    "longitude": 27.4668
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
}
</script>
```

#### 2.3 BreadcrumbList (для всех страниц)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://plato-intel.by/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Каталог",
      "item": "https://plato-intel.by/catalog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Крановые тормоза",
      "item": "https://plato-intel.by/catalog/kranovye-tormoza"
    }
  ]
}
</script>
```

#### 2.4 Product (для карточек товаров)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Тормоз ТКГ-200 с гидротолкателем ТЭ-30",
  "image": [
    "https://plato-intel.by/images/tkg-200-1.jpg",
    "https://plato-intel.by/images/tkg-200-2.jpg"
  ],
  "description": "Крановый колодочный тормоз ТКГ-200 с электрогидравлическим толкателем ТЭ-30. Предназначен для установки на мостовые и козловые краны.",
  "brand": {
    "@type": "Brand",
    "name": "ТКГ"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://plato-intel.by/catalog/kranovye-tormoza/tormoz-tkg-200",
    "priceCurrency": "BYN",
    "price": "350.00",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ООО «Плато-Интел»"
    }
  }
}
</script>
```

#### 2.5 FAQPage (для категорий)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Как выбрать крановый тормоз?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Выбор кранового тормоза зависит от типа крана, грузоподъемности и условий эксплуатации. Для мостовых кранов чаще используют тормоза ТКГ, для башенных — ТКТ или ТКП."
      }
    },
    {
      "@type": "Question",
      "name": "Какая гарантия на тормоза ТКГ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "На все крановые тормоза ТКГ, ТКТ, ТКП и ТГЕД компания Плато-Интел предоставляет гарантию 12 месяцев с момента продажи."
      }
    }
  ]
}
</script>
```

---

### Задача 3: Настройка Open Graph

```html
<head>
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://plato-intel.by">
    <meta property="og:title" content="Электротехническое оборудование для кранов купить в Минске | Плато-Интел">
    <meta property="og:description" content="Продажа электротехнического и кранового оборудования в Беларуси. Тормоза ТКГ, контакторы, выключатели. Гарантия 12 мес.">
    <meta property="og:image" content="https://plato-intel.by/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="Плато-Интел">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Электротехническое оборудование для кранов | Плато-Интел">
    <meta name="twitter:description" content="Продажа электротехнического оборудования в Беларуси">
    <meta name="twitter:image" content="https://plato-intel.by/og-image.jpg">
</head>
```

---

## 🔧 ВАЖНЫЕ ЗАДАЧИ (неделя 2-4)

### Задача 4: Оптимизация robots.txt

**Текущий файл:**
```
User-agent: *
Disallow: /admin/
Disallow: /order
Allow: /llms.txt
Sitemap: https://plato-intel.by/sitemap.xml
```

**Рекомендуемый файл:**
```
User-agent: *
Disallow: /admin/
Disallow: /order
Disallow: /cart
Disallow: /search
Disallow: /*?*
Allow: /llms.txt
Allow: /catalog/
Allow: /news/
Allow: /about
Allow: /contacts
Allow: /*.jpg$
Allow: /*.png$
Allow: /*.gif$

Host: https://plato-intel.by
Sitemap: https://plato-intel.by/sitemap.xml

User-agent: Yandex
Crawl-delay: 1

User-agent: Googlebot
Crawl-delay: 1
```

---

### Задача 5: Оптимизация Sitemap.xml

**Рекомендации:**
1. Разделить на несколько файлов:
   - `sitemap-categories.xml` - категории
   - `sitemap-products.xml` - товары
   - `sitemap-pages.xml` - информационные страницы
   - `sitemap-news.xml` - новости и статьи

2. Указать в robots.txt:
```
Sitemap: https://plato-intel.by/sitemap.xml
Sitemap: https://plato-intel.by/sitemap-categories.xml
Sitemap: https://plato-intel.by/sitemap-products.xml
Sitemap: https://plato-intel.by/sitemap-pages.xml
Sitemap: https://plato-intel.by/sitemap-news.xml
```

3. Настроить правильные приоритеты:
   - Главная: priority 1.0
   - Категории: priority 0.9
   - Товары: priority 0.8
   - Статьи: priority 0.7
   - Служебные: priority 0.3

---

### Задача 6: Настройка Canonical и редиректов

#### 6.1 Canonical-теги

Для каждой страницы добавить:
```html
<link rel="canonical" href="https://plato-intel.by/catalog/kranovye-tormoza">
```

#### 6.2 Редиректы (.htaccess)

```apache
# Редирект с www на без www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www.plato-intel.by$ [NC]
RewriteRule ^(.*)$ https://plato-intel.by/$1 [R=301,L]

# Редирект с HTTP на HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Редирект со слешем на без слеша (или наоборот)
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Убрать index.php
RewriteCond %{THE_REQUEST} /index\.php [NC]
RewriteRule ^index\.php(.*)$ /$1 [R=301,L]
```

---

### Задача 7: Оптимизация изображений

**Чек-лист для каждого изображения:**
- [ ] Формат: WebP (с fallback на JPEG)
- [ ] Размер: не более 200KB для товаров
- [ ] Размеры: указать width и height
- [ ] Alt-теги: описательные с ключевыми словами
- [ ] Ленивая загрузка: loading="lazy"

**Пример кода:**
```html
<picture>
    <source srcset="/images/tkg-200.webp" type="image/webp">
    <img src="/images/tkg-200.jpg" 
         alt="Тормоз ТКГ-200 с гидротолкателем для крана" 
         width="600" 
         height="400"
         loading="lazy">
</picture>
```

---

### Задача 8: Страница 404

**Требования к странице 404:**
- Дружелюбное сообщение
- Поиск по сайту
- Ссылки на популярные категории
- Форма обратной связи
- Сохранение шапки и подвала сайта

**Код ответа сервера:** HTTP 404

---

## 📱 ФУНКЦИОНАЛЬНЫЕ ДОРАБОТКИ (неделя 3-6)

### Задача 9: Онлайн-чат

**Рекомендуемые решения:**
1. **JivoSite** (jivosite.com) - бесплатный базовый тариф
2. **Talk-Me** (talk-me.ru) - русскоязычная поддержка
3. **Bitrix24** (bitrix24.ru) - если используется CRM

**Установка (пример JivoSite):**
```html
<!-- Перед закрывающим </body> -->
<script src="//code.jivosite.com/widget/[ID]" async></script>
```

**Настройки:**
- Приветственное сообщение через 10 секунд
- Рабочие часы: Пн-Пт 9:00-17:00
- Офлайн-форма для нерабочего времени
- Передача источника трафика в CRM

---

### Задача 10: Форма обратной связи

**Расположение:**
- На каждой странице (в шапке или боковой панели)
- В футере
- На странице контактов
- Попап через 30 секунд или при уходе

**Поля формы:**
- Имя (обязательное)
- Телефон (обязательное)
- Email (опционально)
- Сообщение (опционально)
- Согласие на обработку персональных данных

**Пример кода:**
```html
<form action="/send-form" method="POST" class="callback-form">
    <input type="text" name="name" placeholder="Ваше имя" required>
    <input type="tel" name="phone" placeholder="Телефон" required>
    <input type="email" name="email" placeholder="Email (необязательно)">
    <textarea name="message" placeholder="Ваше сообщение"></textarea>
    <label>
        <input type="checkbox" name="agree" required>
        Согласен на обработку персональных данных
    </label>
    <button type="submit">Отправить заявку</button>
</form>
```

---

### Задача 11: Хлебные крошки (Breadcrumbs)

**Пример кода:**
```html
<nav aria-label="breadcrumb">
    <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="/">
                <span itemprop="name">Главная</span>
            </a>
            <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="/catalog">
                <span itemprop="name">Каталог</span>
            </a>
            <meta itemprop="position" content="2">
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">Крановые тормоза</span>
            <meta itemprop="item" content="/catalog/kranovye-tormoza">
            <meta itemprop="position" content="3">
        </li>
    </ol>
</nav>
```

---

### Задача 12: Социальные кнопки

**Поделиться (для статей):**
```html
<!-- Facebook -->
<a href="https://www.facebook.com/sharer/sharer.php?u=URL" target="_blank">Facebook</a>

<!-- VK -->
<a href="https://vk.com/share.php?url=URL" target="_blank">VK</a>

<!-- Telegram -->
<a href="https://t.me/share/url?url=URL&text=Заголовок" target="_blank">Telegram</a>

<!-- WhatsApp -->
<a href="https://wa.me/?text=URL" target="_blank">WhatsApp</a>
```

**Ссылки на соцсети компании (в шапке/футере):**
- LinkedIn
- Telegram-канал
- YouTube

---

## 🚀 ПРОДВИНУТЫЕ ЗАДАЧИ (неделя 4-8)

### Задача 13: Ускорение загрузки сайта

**Оптимизации:**

1. **Включить сжатие Gzip** (.htaccess):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>
```

2. **Кэширование браузера** (.htaccess):
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

3. **CDN для изображений** (опционально):
   - Cloudflare (бесплатный тариф)
   - Yandex Cloud CDN

4. **Lazy loading** для изображений:
```html
<img src="image.jpg" loading="lazy" alt="...">
```

5. **Минификация** CSS и JS

---

### Задача 14: Уведомления и аналитика

**Google Analytics 4:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Яндекс.Метрика:**
```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/XXXXXXXX" style="position:absolute; left:-9999px;" alt=""></div></noscript>
```

**Цели для отслеживания:**
- Отправка формы обратной связи
- Клик по телефону
- Клик по email
- Время на сайте > 3 минут
- Просмотр 3+ страниц

---

### Задача 15: Мобильная оптимизация

**Проверки:**
- [ ] Viewport meta tag
- [ ] Touch-friendly элементы (мин. 44x44px)
- [ ] Читаемый текст без зума
- [ ] Адаптивные изображения
- [ ] Удобная навигация

**Viewport:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
```

---

## 📋 ЧЕК-ЛИСТ ТЕСТИРОВАНИЯ

### После каждой доработки проверить:

- [ ] Валидность HTML (validator.w3.org)
- [ ] Валидность микроразметки (validator.schema.org)
- [ ] Мобильная адаптивность (search.google.com/test/mobile-friendly)
- [ ] Скорость загрузки (pagespeed.web.dev)
- [ ] Корректность canonical
- [ ] Отсутствие 404 ошибок
- [ ] Корректность редиректов
- [ ] Работоспособность форм

### Инструменты для проверки:

1. **Google Search Console** - индексация, ошибки
2. **Яндекс.Вебмастер** - индексация, ТИЦ
3. **PageSpeed Insights** - скорость загрузки
4. **GTmetrix** - детальный анализ скорости
5. **Screaming Frog** - технический аудит
6. **Schema Validator** - проверка микроразметки

---

## ⏱️ ОЦЕНКА ВРЕМЕНИ

| Этап | Задачи | Время |
|------|--------|-------|
| Неделя 1 | Title, Description, OG | 16 часов |
| Неделя 2 | Schema.org, robots.txt, canonical | 20 часов |
| Неделя 3 | Формы, чат, хлебные крошки | 24 часа |
| Неделя 4 | Изображения, 404, аналитика | 16 часов |
| Неделя 5-6 | Скорость, мобильная оптимизация | 20 часов |
| Итого | | ~96 часов |

---

*Документ актуален на март 2026*
