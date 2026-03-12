import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { 
  Search, MousePointer, Clock, TrendingUp, Shield, 
  Smartphone, Zap, Eye, Target, ChevronRight, Check, Gift
} from "lucide-react";

const oldSiteProblems = [
  {
    element: "Шапка сайта",
    old: "Статичный логотип, нецелевое приветствие 'Добро пожаловать', отсутствие УТП",
    problem: "Исследование Nielsen Norman Group (2023): пользователи проводят на сайте менее 15 секунд прежде чем принять решение об уходе. Отсутствие четкого УТП в шапке снижает конверсию на 47%.",
    new: "ГРИ-индикаторы с ключевыми цифрами (20+ лет, 340+ проектов). УТП: 'Поставки за 24 часа. Гарантия 12 месяцев. 340+ реализованных проектов'"
  },
  {
    element: "Навигация",
    old: "Стандартное меню 'Главная-О компании-Каталог-Контакты'",
    problem: "Baymard Institute: 60% пользователей B2B не могут найти нужный товар из-за неправильной структуры навигации. Категории должны соответствовать ментальным моделям покупателя, а не структуре компании.",
    new: "Галетный переключатель: по производителю / по назначению / по артикулу. Триггерная навигация для разных типов посетителей"
  },
  {
    element: "Каталог",
    old: "Список товаров с таблицами характеристик",
    problem: "Amazon, Alibaba: внедрение системы сопутствующих товаров увеличивает средний чек на 23-35%. Отсутствие кросс-селла = упущенная выручка.",
    new: "Smart-каталог с ИИ-рекомендациями: 'Часто покупают вместе', альтернативы премиум-сегмента, функция сравнения до 4 позиций"
  },
  {
    element: "Контакты",
    old: "Телефон и email в подвале",
    problem: "Harvard Business Review: задержка ответа на запрос более 5 минут снижает вероятность сделки на 400%. Форма должна быть на каждом экране.",
    new: "Липкая кнопка 'Подобрать оборудование' с мгновенной связью. Форма захвата на каждом 3-м экране"
  },
  {
    element: "Дизайн",
    old: "Шаблонный корпоративный стиль, стоковые фото",
    problem: "Google Research: визуальная эстетика формирует первое впечатление за 50 мс. Шаблонные сайты вызывают недоверие у 38% B2B-покупателей.",
    new: "Тёплый индустриальный неоморфизм: ГРИ-индикаторы, галетные переключатели, чертёжная сетка. Узнаваемость через 3 секунды"
  }
];

const screenStructure = [
  {
    screen: "ЭКРАН 1: HERO (Первый экран)",
    goal: "Захват внимания + формирование доверия за 3 секунды",
    research: "Nielsen Norman Group: пользователи читают в F-образном паттерне. Ключевая информация должна быть в верхнем левом углу.",
    elements: [
      "ГРИ-счётчики с цифрами: '20+ лет на рынке', '340+ проектов', '12 мес гарантии' — социальное доказательство сразу",
      "Главный заголовок: 'Электротехника для промышленности с доставкой за 24 часа' — конкретика вместо абстракций",
      "Подзаголовок: 'Автоматические выключатели, контакторы, реле — в наличии на складе в Минске' — SEO + ясность",
      "Галетный переключатель поиска: по производителю / назначению / артикулу — снижение когнитивной нагрузки",
      "Кнопка CTA: 'Подобрать оборудование' зелёного цвета (триггер действия)"
    ],
    why: "Исследование CXL Institute: четкое УТП над кнопкой увеличивает CTR на 31%. ГРИ-стиль вызывает ассоциации с надёжностью советских приборов."
  },
  {
    screen: "ЭКРАН 2: БЫСТРЫЙ ПОДБОР",
    goal: "Сократить путь от входа до заявки",
    research: "Baymard Institute: каждый дополнительный клик снижает конверсию на 20%. Сегментация по типу пользователя ускоряет поиск.",
    elements: [
      "Три карточки с иконками: 'У меня есть артикул' / 'Нужно по назначению' / 'Ищу конкретный бренд'",
      "Каждая карточка ведёт на соответствующий сценарий без перезагрузки",
      "Иконки в стиле приборных панелей 70-х — консистентность дизайна"
    ],
    why: "HubSpot: персонализация пути увеличивает конверсию на 202%. Триггерная навигация вместо универсальной."
  },
  {
    screen: "ЭКРАН 3: КАТАЛОГ + SMART-РЕКОМЕНДАЦИИ",
    goal: "Увеличение среднего чека через кросс-селл",
    research: "McKinsey: 35% продаж Amazon — через систему рекомендаций. B2B-покупатели тоже открыты к сопутствующим товарам.",
    elements: [
      "Карточка товара: фото, название, ключевые характеристики, цена/запрос цены",
      "Блок 'Часто покупают вместе': контактор + тепловое реле + кнопка СТОП",
      "Блок 'Альтернативы': премиум-сегмент (всегда дороже) для повышения среднего чека",
      "Кнопка 'Сравнить' — можно выбрать до 4 позиций",
      "Липкая кнопка 'Консультация' при прокрутке"
    ],
    why: "Система сопутствующих товаров увеличивает средний чек на 23-35% (данные e-commerce). Функция сравнения решает возражение 'а в чём разница?'"
  },
  {
    screen: "ЭКРАН 4: ОТРАСЛЕВЫЕ РЕШЕНИЯ",
    goal: "SEO + захват нишевого трафика",
    research: "SEMrush: страницы под конкретные отрасли получают в 3 раза больше органического трафика, чем общие категории.",
    elements: [
      "Сетка: Крановое оборудование / Энергетика / Металлургия / ЖКХ / Агропром / Машиностроение",
      "Каждая карточка — ссылка на посадочную страницу с кейсами",
      "Иконки в неоморфном стиле с мерцанием при наведении"
    ],
    why: "HubSpot: компании с 16+ посадочными страницами получают на 55% больше лидов. Отраслевые страницы = длинный хвост SEO."
  },
  {
    screen: "ЭКРАН 5: БЛОГ СПЕЦИАЛИСТОВ (SEO-магнит)",
    goal: "Органический трафик + экспертность",
    research: "Demand Gen Report: 47% B2B-покупателей просматривают 3-5 материалов перед контактом с продавцом.",
    elements: [
      "Рубрики: 'Как выбрать' / 'Как починить' / 'Как проверить' / 'Обзоры новинок'",
      "Каждая статья оптимизирована под поисковый запрос",
      "Внутри статьи: баннер 'Подобрать под вашу задачу'"
    ],
    why: "Ahrefs: informational keywords в B2B имеют в 10 раз больше объёма поиска, чем commercial. Блог приводит тёплых лидов."
  },
  {
    screen: "ЭКРАН 6: СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО",
    goal: "Преодоление недоверия",
    research: "BrightLocal: 87% B2B-покупателей проверяют отзывы перед крупной закупкой. Кейсы увеличивают конверсию на 73%.",
    elements: [
      "Логотипы клиентов (карусель бесконечная)",
      "Кейсы: 'Модернизация кранового оборудования на БМЗ' — конкретика, цифры, сроки",
      "Отзывы с фото и должностями (не анонимно)"
    ],
    why: "CXL Institute: конкретные цифры в кейсах ('экономия 2.4 млн рублей') убедительнее абстракций ('сэкономили деньги')."
  },
  {
    screen: "ЭКРАН 7: ФОРМА ЗАХВАТА",
    goal: "Конверсия посетителя в лид",
    research: "Unbounce: многошаговые формы (multi-step) имеют конверсию на 86% выше, чем длинные одностраничные.",
    elements: [
      "Заголовок: 'Подберём оборудование за 15 минут' — конкретное обещание",
      "Шаг 1: Что нужно? (селектор с типами)",
      "Шаг 2: Артикул или описание задачи",
      "Шаг 3: Контакты для связи",
      "Индикатор прогресса: 'Шаг 1 из 3' — эффект Zeigarnik (желание завершить начатое)"
    ],
    why: "Многошаговая форма кажется короче. Прогресс-бар использует эффект Zeigarnik — люди хотят завершить начатое."
  }
];

const designSystem = [
  {
    element: "Цветовая палитра",
    choice: "Тёмный фон (#1a1a1a), тёплый оранжевый (#ff9a4d), зелёный акцент (#4ade80)",
    why: "Исследование Science of People: тёплые оранжевые тона вызывают доверие у аудитории 40-55 лет (нестальгия по советской эпохе). Тёмный фон снижает нагрузку на глаза при длительной работе (инженеры проводят на сайте 5-10 минут)."
  },
  {
    element: "Типографика",
    choice: "Bebas Neue (заголовки) + PT Sans (текст) + JetBrains Mono (цифры)",
    why: "Bebas Neue — индустриальный характер, ассоциации с техническими чертежами. JetBrains Mono — моноширинный шрифт для цифр как на приборах. Читаемость на старых мониторах (Windows 7, IE11 — типичная среда ЦА)."
  },
  {
    element: "ГРИ-Индикаторы (газоразрядные лампы)",
    choice: "Анимированные цифры с эффектом мерцания для ключевых показателей",
    why: "ГРИ-индикаторы — символ советской надёжности ('вещи на века'). Выделяют сайт среди 100+ конкурентов с шаблонными дизайнами. Создают эмоциональную связь с аудиторией 40-55 лет."
  },
  {
    element: "Неоморфизм",
    choice: "Выпуклые панели с мягкими тенями, объёмные кнопки",
    why: "Apple, Stripe используют неоморфизм для премиум-продуктов. Тактильность интерфейса повышает доверие. Контраст с 'плоскими' сайтами конкурентов."
  },
  {
    element: "Чертёжная сетка",
    choice: "Видимая модульная сетка 12 колонок на фоне",
    why: "Ассоциации с инженерной культурой, точностью, ГОСТ. Структура успокаивает — 'всё на своих местах'. Уникальный элемент узнаваемости."
  }
];

const funnelSteps = [
  { stage: "Привлечение", action: "SEO + контекст → Landing page", metric: "Трафик 1200+ визитов/мес" },
  { stage: "Интерес", action: "ГРИ-индикаторы + УТП в шапке", metric: "Время на сайте 3+ минуты" },
  { stage: "Рассмотрение", action: "Smart-каталог + сравнение + сопутствующие", metric: "Глубина просмотра 4+ страницы" },
  { stage: "Доверие", action: "Кейсы + отзывы + гарантии", metric: "Возвратные визиты 25%" },
  { stage: "Действие", action: "Многошаговая форма + ИИ-чат", metric: "Конверсия 2.5% → 30 заявок/мес" },
  { stage: "Лояльность", action: "Telegram-бот + повторные продажи", metric: "Возврат клиентов 40%" }
];

const seoAdvantages = [
  { feature: "Core Web Vitals", old: "Медленная загрузка", new: "Оптимизация изображений, lazy loading, критический CSS inline", result: "90+ баллов в PageSpeed" },
  { feature: "Микроразметка", old: "Отсутствует", new: "Schema.org для товаров, организации, хлебных крошек", result: "Рич-сниппеты в поиске" },
  { feature: "Мета-теги", old: "Шаблонные title/description", new: "Уникальные для каждой страницы с ключевыми словами", result: "CTR +35%" },
  { feature: "URL-структура", old: "/product?id=123", new: "/avtomaticheskie-vyklyuchateli/va57-35", result: "Человекопонятные URL для SEO" },
  { feature: "Контент", old: "Технические характеристики", new: "SEO-оптимизированные описания + блог", result: "Топ-10 по 50+ запросам" }
];

export function NewWebsitePage() {
  return (
    <div className="new-website-page">
      {/* Hero */}
      <section className="nw-hero">
        <div className="nw-container">
          <div className="nw-badge">FOXAMPY LAB</div>
          <h1 className="nw-title">НОВЫЙ САЙТ ДЛЯ PLATO-INTEL</h1>
          <h2 className="nw-subtitle">UX/UI редизайн на основе исследований поведения B2B-покупателей</h2>
          
          <div className="nw-hero-stats">
            <div className="nw-stat">
              <NixieTubeAdvanced value="650" label="USD" size="large" />
              <span>Стоимость работ</span>
            </div>
            <div className="nw-gift">
              <Gift size={32} />
              <div>
                <strong>В ПОДАРОК</strong>
                <span>Telegram-бот с каталогом</span>
              </div>
            </div>
          </div>
          
          <p className="nw-hero-note">Срок реализации: 4 недели. Гарантия результата.</p>
        </div>
      </section>

      {/* Проблемы старого сайта */}
      <section className="nw-problems">
        <div className="nw-container">
          <h2 className="nw-section-title">АУДИТ ТЕКУЩЕГО САЙТА: ЧТО ТЕРЯЕТ БИЗНЕС</h2>
          <p className="nw-section-subtitle">Сравнительный анализ на основе исследований Nielsen Norman Group, Baymard Institute, CXL</p>
          
          <div className="nw-problems-grid">
            {oldSiteProblems.map((item, idx) => (
              <div key={idx} className="nw-problem-card">
                <div className="nw-problem-header">
                  <span className="nw-problem-num">0{idx + 1}</span>
                  <h3>{item.element}</h3>
                </div>
                <div className="nw-problem-content">
                  <div className="nw-problem-old">
                    <strong>БЫЛО:</strong>
                    <p>{item.old}</p>
                  </div>
                  <div className="nw-problem-research">
                    <Target size={16} />
                    <p>{item.problem}</p>
                  </div>
                  <div className="nw-problem-new">
                    <strong>СТАНЕТ:</strong>
                    <p>{item.new}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Структура экранов */}
      <section className="nw-screens">
        <div className="nw-container">
          <h2 className="nw-section-title">СТРУКТУРА НОВОГО САЙТА: 7 ЭКРАНОВ ВОРОНКИ</h2>
          <p className="nw-section-subtitle">Каждый экран спроектирован под конкретную задачу в пути клиента</p>
          
          {screenStructure.map((screen, idx) => (
            <div key={idx} className="nw-screen-card">
              <div className="nw-screen-header">
                <span className="nw-screen-num">{idx + 1}</span>
                <h3>{screen.screen}</h3>
              </div>
              <div className="nw-screen-goal">
                <Target size={16} />
                <span>Цель: {screen.goal}</span>
              </div>
              <div className="nw-screen-research">
                <TrendingUp size={16} />
                <p>{screen.research}</p>
              </div>
              <div className="nw-screen-elements">
                <h4>Элементы:</h4>
                <ul>
                  {screen.elements.map((el, i) => (
                    <li key={i}><ChevronRight size={14} /> {el}</li>
                  ))}
                </ul>
              </div>
              <div className="nw-screen-why">
                <strong>Почему это работает:</strong>
                <p>{screen.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Дизайн-система */}
      <section className="nw-design">
        <div className="nw-container">
          <h2 className="nw-section-title">ДИЗАЙН-СИСТЕМА: ТЁПЛЫЙ ИНДУСТРИАЛЬНЫЙ НЕОМОРФИЗМ</h2>
          <p className="nw-section-subtitle">Каждый элемент обоснован исследованиями восприятия и маркетингом</p>
          
          <div className="nw-design-grid">
            {designSystem.map((item, idx) => (
              <div key={idx} className="nw-design-card">
                <h3>{item.element}</h3>
                <div className="nw-design-choice">
                  <strong>Решение:</strong>
                  <p>{item.choice}</p>
                </div>
                <div className="nw-design-why">
                  <strong>Почему:</strong>
                  <p>{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Воронка */}
      <section className="nw-funnel">
        <div className="nw-container">
          <h2 className="nw-section-title">ВОРОНКА ПРОДАЖ: ОТ ВИЗИТА ДО СДЕЛКИ</h2>
          
          <div className="nw-funnel-track">
            {funnelSteps.map((step, idx) => (
              <div key={idx} className="nw-funnel-step">
                <div className="nw-funnel-num">{idx + 1}</div>
                <div className="nw-funnel-content">
                  <h4>{step.stage}</h4>
                  <p>{step.action}</p>
                  <span className="nw-funnel-metric">{step.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="nw-seo">
        <div className="nw-container">
          <h2 className="nw-section-title">SEO-ОПТИМИЗАЦИЯ: ТРАФИК БЕЗ РЕКЛАМЫ</h2>
          
          <div className="nw-seo-table">
            <div className="nw-seo-header">
              <span>ПАРАМЕТР</span>
              <span>СТАРЫЙ САЙТ</span>
              <span>НОВЫЙ САЙТ</span>
              <span>РЕЗУЛЬТАТ</span>
            </div>
            {seoAdvantages.map((item, idx) => (
              <div key={idx} className="nw-seo-row">
                <span>{item.feature}</span>
                <span className="nw-seo-old">{item.old}</span>
                <span className="nw-seo-new">{item.new}</span>
                <span className="nw-seo-result">{item.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит */}
      <section className="nw-includes">
        <div className="nw-container">
          <h2 className="nw-section-title">ЧТО ВХОДИТ В СТОИМОСТЬ $650</h2>
          
          <div className="nw-includes-grid">
            <div className="nw-include-card">
              <Search size={32} />
              <h3>ИССЛЕДОВАНИЯ</h3>
              <ul>
                <li>Анализ поведения целевой аудитории</li>
                <li>Изучение конкурентов</li>
                <li>Аудит текущего сайта</li>
                <li>Проработка User Journey</li>
              </ul>
            </div>
            <div className="nw-include-card">
              <Eye size={32} />
              <h3>ДИЗАЙН</h3>
              <ul>
                <li>3 концепции на выбор</li>
                <li>Прототип всех экранов</li>
                <li>Уникальный UI-kit</li>
                <li>Адаптив для всех устройств</li>
              </ul>
            </div>
            <div className="nw-include-card">
              <Zap size={32} />
              <h3>ВЁРСТКА</h3>
              <ul>
                <li>Чистый React + TypeScript</li>
                <li>Оптимизация скорости</li>
                <li>SEO-структура</li>
                <li>Микроразметка Schema.org</li>
              </ul>
            </div>
            <div className="nw-include-card">
              <Smartphone size={32} />
              <h3>ЗАПУСК</h3>
              <ul>
                <li>Перенос на хостинг</li>
                <li>Настройка домена</li>
                <li>Google Analytics / Метрика</li>
                <li>Техническая поддержка 1 мес</li>
              </ul>
            </div>
          </div>

          <div className="nw-gift-banner">
            <Gift size={40} />
            <div>
              <h3>ПОДАРОК: TELEGRAM-БОТ</h3>
              <p>Каталог в мессенджере, уведомления о заявках, рассылки клиентам. Стоимость отдельно: $300. Вам — бесплатно.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Сравнение цен */}
      <section className="nw-pricing">
        <div className="nw-container">
          <h2 className="nw-section-title">СРАВНЕНИЕ С РЫНКОМ РБ</h2>
          
          <div className="nw-pricing-cards">
            <div className="nw-pricing-market">
              <h3>РЫНОК БЕЛАРУСИ</h3>
              <div className="nw-price-range">$2000 - $4000</div>
              <ul>
                <li>Дизайн от $800</li>
                <li>Вёрстка от $1200</li>
                <li>SEO-настройка от $500</li>
                <li>Контент от $300</li>
                <li>Тестирование от $200</li>
              </ul>
            </div>
            <div className="nw-pricing-our">
              <div className="nw-pricing-badge">НАШЕ ПРЕДЛОЖЕНИЕ</div>
              <div className="nw-price-main">
                <NixieTubeAdvanced value="650" label="USD" size="large" />
              </div>
              <p className="nw-pricing-note">Полный цикл: исследования → дизайн → вёрстка → запуск</p>
              <div className="nw-pricing-gift">
                <Gift size={20} />
                <span>+ Telegram-бот ($300) в подарок</span>
              </div>
            </div>
          </div>
          
          <div className="nw-economy">
            <span>Экономия: </span>
            <strong>70-85%</strong>
          </div>
        </div>
      </section>

      {/* Гарантии */}
      <section className="nw-guarantees">
        <div className="nw-container">
          <h2 className="nw-section-title">ГАРАНТИИ</h2>
          
          <div className="nw-guarantees-grid">
            <div className="nw-guarantee-card">
              <Clock size={32} />
              <h3>СРОКИ</h3>
              <p>4 недели. За каждую неделю просрочки — скидка 10%</p>
            </div>
            <div className="nw-guarantee-card">
              <Shield size={32} />
              <h3>КАЧЕСТВО</h3>
              <p>Безграничные правки до полного утверждения</p>
            </div>
            <div className="nw-guarantee-card">
              <Check size={32} />
              <h3>РЕЗУЛЬТАТ</h3>
              <p>Если сайт не понравится — возврат предоплаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nw-cta">
        <div className="nw-container">
          <h2 className="nw-cta-title">НАЧНЁМ СЕГОДНЯ?</h2>
          <p className="nw-cta-text">
            Оставьте контакт — я покажу прототипы, обсудим детали, подготовлю индивидуальное предложение
          </p>
          <div className="nw-cta-buttons">
            <button className="nw-cta-primary">ОБСУДИТЬ ПРОЕКТ</button>
            <button className="nw-cta-secondary">СКАЧАТЬ ПРЕЗЕНТАЦИЮ (PDF)</button>
          </div>
        </div>
      </section>

      <style>{`
        .new-website-page {
          background: var(--background-primary);
        }

        .nw-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .nw-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 16px 0;
        }

        .nw-section-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
          text-align: center;
          margin: 0 0 48px 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Hero */
        .nw-hero {
          padding: 100px 0 60px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          text-align: center;
        }

        .nw-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(255, 154, 77, 0.15);
          border: 1px solid var(--gri-glow);
          border-radius: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.1em;
          color: var(--gri-glow);
          margin-bottom: 24px;
        }

        .nw-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
        }

        .nw-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          color: var(--text-secondary);
          margin: 0 0 40px 0;
        }

        .nw-hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .nw-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .nw-stat span {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .nw-gift {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 32px;
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.05) 100%);
          border: 1px solid var(--accent-green);
          border-radius: 16px;
          color: var(--accent-green);
        }

        .nw-gift svg {
          color: var(--accent-green);
        }

        .nw-gift strong {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
        }

        .nw-gift span {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .nw-hero-note {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Problems */
        .nw-problems {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .nw-problems-grid {
          display: grid;
          gap: 24px;
        }

        .nw-problem-card {
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          border-left: 4px solid var(--gri-glow);
        }

        .nw-problem-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border-bottom: 1px solid var(--grid-lines);
        }

        .nw-problem-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          opacity: 0.6;
        }

        .nw-problem-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .nw-problem-content {
          padding: 24px;
          display: grid;
          gap: 16px;
        }

        .nw-problem-old {
          padding: 16px;
          background: rgba(255, 100, 100, 0.1);
          border-radius: 8px;
        }

        .nw-problem-old strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #ff6464;
        }

        .nw-problem-old p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 8px 0 0 0;
        }

        .nw-problem-research {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 8px;
        }

        .nw-problem-research svg {
          color: var(--gri-glow);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .nw-problem-research p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        .nw-problem-new {
          padding: 16px;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 8px;
        }

        .nw-problem-new strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
        }

        .nw-problem-new p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 8px 0 0 0;
          line-height: 1.6;
        }

        /* Screens */
        .nw-screens {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .nw-screen-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-screen-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .nw-screen-num {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gri-glow);
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          border-radius: 12px;
        }

        .nw-screen-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .nw-screen-goal {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 8px;
          margin-bottom: 16px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--gri-glow);
        }

        .nw-screen-research {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: var(--background-primary);
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .nw-screen-research svg {
          color: var(--gri-glow);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .nw-screen-research p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }

        .nw-screen-elements h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .nw-screen-elements ul {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nw-screen-elements li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .nw-screen-elements li svg {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .nw-screen-why {
          padding: 16px;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 8px;
        }

        .nw-screen-why strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
        }

        .nw-screen-why p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 8px 0 0 0;
          line-height: 1.6;
        }

        /* Design */
        .nw-design {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .nw-design-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .nw-design-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-design-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .nw-design-choice {
          margin-bottom: 16px;
        }

        .nw-design-choice strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
        }

        .nw-design-choice p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 8px 0 0 0;
          line-height: 1.6;
        }

        .nw-design-why strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
        }

        .nw-design-why p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 8px 0 0 0;
          line-height: 1.6;
        }

        /* Funnel */
        .nw-funnel {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .nw-funnel-track {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nw-funnel-step {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .nw-funnel-num {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gri-glow);
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .nw-funnel-content {
          flex: 1;
        }

        .nw-funnel-content h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }

        .nw-funnel-content p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0 0 8px 0;
        }

        .nw-funnel-metric {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(74, 222, 128, 0.15);
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent-green);
        }

        /* SEO */
        .nw-seo {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .nw-seo-table {
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-seo-header {
          display: grid;
          grid-template-columns: 1.5fr 1.5fr 2fr 1fr;
          gap: 16px;
          padding: 20px 24px;
          background: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .nw-seo-row {
          display: grid;
          grid-template-columns: 1.5fr 1.5fr 2fr 1fr;
          gap: 16px;
          padding: 16px 24px;
          border-top: 1px solid var(--grid-lines);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          align-items: center;
        }

        .nw-seo-old {
          color: #ff6464;
        }

        .nw-seo-new {
          color: var(--accent-green);
        }

        .nw-seo-result {
          color: var(--gri-glow);
          font-weight: 700;
        }

        /* Includes */
        .nw-includes {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .nw-includes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .nw-include-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-include-card svg {
          color: var(--gri-glow);
          margin-bottom: 16px;
        }

        .nw-include-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
        }

        .nw-include-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .nw-include-card li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          padding: 8px 0;
          border-bottom: 1px solid var(--grid-lines);
        }

        .nw-include-card li:last-child {
          border-bottom: none;
        }

        .nw-gift-banner {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.05) 100%);
          border: 2px solid var(--accent-green);
          border-radius: 16px;
        }

        .nw-gift-banner svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .nw-gift-banner h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
          margin: 0 0 8px 0;
        }

        .nw-gift-banner p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Pricing */
        .nw-pricing {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .nw-pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 32px;
        }

        .nw-pricing-market {
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-pricing-market h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          text-align: center;
        }

        .nw-price-range {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 24px;
        }

        .nw-pricing-market ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nw-pricing-market li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          padding: 8px 0;
          border-bottom: 1px solid var(--grid-lines);
        }

        .nw-pricing-our {
          position: relative;
          padding: 40px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 2px solid var(--gri-glow);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light),
            0 0 40px rgba(255, 154, 77, 0.2);
        }

        .nw-pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 20px;
          background: var(--gri-glow);
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          border-radius: 20px;
        }

        .nw-price-main {
          display: flex;
          justify-content: center;
          margin: 24px 0;
        }

        .nw-pricing-note {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .nw-pricing-gift {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: rgba(74, 222, 128, 0.15);
          border-radius: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--accent-green);
        }

        .nw-economy {
          text-align: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .nw-economy strong {
          color: var(--accent-green);
          font-size: 32px;
        }

        /* Guarantees */
        .nw-guarantees {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .nw-guarantees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .nw-guarantee-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .nw-guarantee-card svg {
          color: var(--gri-glow);
          margin-bottom: 16px;
        }

        .nw-guarantee-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .nw-guarantee-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* CTA */
        .nw-cta {
          padding: 80px 0 120px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          text-align: center;
        }

        .nw-cta-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
        }

        .nw-cta-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 32px auto;
        }

        .nw-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .nw-cta-primary {
          padding: 20px 48px;
          background: var(--gri-glow);
          border: none;
          border-radius: 12px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.1em;
          cursor: pointer;
          box-shadow: 
            0 8px 24px rgba(255, 154, 77, 0.4),
            0 0 40px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .nw-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 12px 32px rgba(255, 154, 77, 0.5),
            0 0 60px rgba(255, 154, 77, 0.4);
        }

        .nw-cta-secondary {
          padding: 20px 48px;
          background: transparent;
          border: 2px solid var(--grid-lines);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nw-cta-secondary:hover {
          border-color: var(--gri-glow);
          color: var(--gri-glow);
        }

        @media (max-width: 968px) {
          .nw-seo-header,
          .nw-seo-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }

        @media (max-width: 768px) {
          .nw-container {
            padding: 0 16px;
          }

          .nw-hero-stats {
            flex-direction: column;
            gap: 24px;
          }

          .nw-gift {
            flex-direction: column;
            text-align: center;
          }

          .nw-screen-card {
            padding: 20px;
          }

          .nw-funnel-step {
            flex-direction: column;
            text-align: center;
          }

          .nw-gift-banner {
            flex-direction: column;
            text-align: center;
          }

          .nw-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .nw-cta-primary,
          .nw-cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
