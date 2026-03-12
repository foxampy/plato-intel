// Страница редизайна plato-intel.by - анализ на основе реальных скриншотов

import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { 
  Search, Menu, Phone, MapPin, Clock, ChevronRight, Check, Gift, 
  AlertTriangle, TrendingUp, MessageCircle, ShoppingCart, X
} from "lucide-react";

// Анализ на основе скриншотов plato-intel.by
const currentSiteAnalysis = [
  {
    element: "Верхний край экрана (топ-бар + хедер)",
    screenshot: "vs/image_2026-03-12_13-47-40.png",
    current: "Две полосы: чёрная с адресом/временем/email + белая с логотипом, двумя телефонами, 3 мессенджерами, корзиной. Очень загружено.",
    problem: "Перегрузка информацией. Пользователь теряется прежде чем дойдёт до контента. Нет фокуса на главном.",
    solution: "Один постоянный (sticky) хедер: логотип + поиск + меню + кнопка 'Контакты'. Все телефоны и мессенджеры убрать в выпадающее меню 'Контакты'."
  },
  {
    element: "Постоянный хедер (sticky header)",
    current: "Отсутствует. При скролле хедер уходит вверх. Нет быстрого доступа к меню и поиску.",
    problem: "Пользователь вынужден скроллить вверх для навигации. Потеря удобства = потеря конверсии.",
    solution: "Хедер прилипает к верху при скролле (position: sticky). Всегда доступен поиск и кнопка связи."
  },
  {
    element: "Поисковая строка",
    current: "Отсутствует на главном экране. Поиск только внутри каталога (если есть).",
    problem: "Исследования: 70% B2B-покупателей ищут товар через поиск, а не просматривают категории. Нет поиска = потеря клиентов.",
    solution: "Большая поисковая строка на главном экране (Hero). Поиск по артикулу, названию, производителю. Автоподсказки."
  },
  {
    element: "Первый экран (Hero)",
    screenshot: "vs/image_2026-03-12_13-47-40.png",
    current: "Фон: ветрогенераторы. Текст: 'Торговля электротехнической продукцией и крановым оборудованием'. УТП слабое, общее.",
    problem: "'Торговля электротехникой' — слишком абстрактно. Нет конкретики: что, за сколько, почему здесь. Нет цифр (20 лет, 340 проектов).",
    solution: "Новый Hero: ГРИ-индикаторы с цифрами (20+ лет, 340+ объектов, 12 мес гарантии). Поисковая строка. Быстрые категории (Автоматы, Контакторы, Тормоза)."
  },
  {
    element: "Экран оборудования",
    screenshot: "vs/image_2026-03-12_13-47-41.png",
    current: "Блок 'Электротехническое оборудование' с иконками. Стоковые изображения. Нет понимания полноты ассортимента.",
    problem: "Стоковые фото вызывают недоверие. Нет количества товаров в разделе. Нет быстрого перехода.",
    solution: "Реальные фото товаров. Бейджи с количеством ('Автоматы — 47 товаров'). Быстрый доступ в категорию."
  },
  {
    element: "Текстовый блок описания",
    screenshot: "vs/image_2026-03-12_13-47-412.png",
    current: "Большой блок текста про компанию, ассортимент, сертификаты. Много текста без разбивки.",
    problem: "Никто не читает стены текста. Пользователь устаёт и закрывает страницу. Информация теряется.",
    solution: "Текст разбить на смысловые блоки с иконками: '20 лет опыта', '340+ объектов', '24 часа доставка'. Аккордеон или табы."
  },
  {
    element: "Каталог товаров",
    current: "Стандартный список товаров. Нет умного поиска. Нет фильтров по характеристикам.",
    problem: "Инженер ищет 'автомат 1600А' — не может найти быстро. Теряет время, уходит к конкуренту.",
    solution: "Умный поиск с фильтрами (по току, напряжению, производителю). Сравнение товаров. Сопутствующие товары."
  },
  {
    element: "Кнопка связи",
    current: "Телефон +375 (29) 615-56-72 только в хедере. Мессенджеры (Telegram, WhatsApp, Viber) в хедере.",
    problem: "При скролле контакты пропадают. Нет постоянной кнопки 'Написать'. Нет интеграции с CRM.",
    solution: "Плавающая кнопка 'Связаться с менеджером' (справа внизу). Ведёт в Telegram-бот. Бот → CRM + автоответы + передача менеджеру."
  }
];

// Структура нового сайта
const newSiteStructure = [
  {
    screen: "1. POSTONY HEADER (Липкий хедер)",
    elements: [
      "Логотип PLATO-INTEL (слева)",
      "Поисковая строка (центр) — всегда доступна",
      "Меню: Каталог | О компании | Доставка | Оплата | Контакты",
      "Кнопка 'Контакты' — выпадающее меню с телефонами и мессенджерами",
      "Корзина (иконка)"
    ],
    benefit: "Хедер всегда виден. Поиск под рукой. Нет перегрузки — контакты спрятаны в меню."
  },
  {
    screen: "2. HERO С ПОИСКОМ",
    elements: [
      "ГРИ-индикаторы: 20+ лет | 340+ объектов | 12 мес гарантии | Доставка 24ч",
      "Заголовок: 'Электротехника для кранов и промышленности'",
      "ПОИСКОВАЯ СТРОКА (большая, центр) с подсказками",
      "Быстрые ссылки: Автоматы | Контакторы | Тормоза | Реле",
      "Кнопка: 'Подобрать по задаче'"
    ],
    benefit: "Пользователь сразу видит УТП и может найти товар через поиск (70% случаев)."
  },
  {
    screen: "3. SMART-КАТАЛОГ (улучшенный)",
    elements: [
      "УМНЫЙ ПОИСК: по артикулу, названию, производителю",
      "Фильтры: по току (А), по напряжению (В), по производителю",
      "Карточка товара: фото, название (ВА-57-35), характеристики (1600А), кнопка 'Запросить цену'",
      "Сравнение: выбрать 2-4 товара для сравнения",
      "Сопутствующие: 'С этим товаром покупают'"
    ],
    benefit: "Пользователь находит нужный товар за 30 секунд, а не 10 минут."
  },
  {
    screen: "4. БЫСТРЫЙ ДОСТУП К РАЗДЕЛАМ",
    elements: [
      "Плитки категорий с количеством товаров: Автоматы (47) | Контакторы (32) | Тормоза (18) | Реле (24)",
      "Реальные фото товаров (не стоковые)",
      "Быстрый переход в раздел"
    ],
    benefit: "Понимание полноты ассортимента с первого взгляда."
  },
  {
    screen: "5. ДОВЕРИЕ (структурировано)",
    elements: [
      "Цифры в блоках: 20 лет опыта | 340+ объектов | 50+ заводов",
      "Логотипы клиентов (бегущая строка)",
      "Кейс: 'Модернизация кранов на БМЗ — 48 автоматов за 3 дня'",
      "Сертификаты"
    ],
    benefit: "Текст разбит на блоки — читается легко. Социальное доказательство."
  },
  {
    screen: "6. ПЛАВАЮЩАЯ КНОПКА (Floating Action Button)",
    elements: [
      "Кнопка 'Связаться с менеджером' — справа внизу, всегда видна",
      "Переход в Telegram-бот",
      "Бот: приветствие → вопрос → запись в CRM",
      "Автоответы на типовые вопросы",
      "Передача сложных вопросов менеджеру"
    ],
    benefit: "Пользователь всегда может написать. CRM не теряет лиды. Автоматизация ответов."
  }
];

// Что входит в работу
const workDetails = [
  {
    phase: "Анализ и проектирование (Дни 1-5)",
    tasks: [
      "Аудит текущего plato-intel.by по скриншотам",
      "Анализ поведения: 70% ищут через поиск",
      "Прототип нового хедера (sticky, с поиском)",
      "Прототип каталога с умным поиском",
      "Настройка Telegram-бота и интеграция с CRM"
    ]
  },
  {
    phase: "Дизайн (Дни 6-15)",
    tasks: [
      "Новый sticky header (упрощённый, с поиском)",
      "Hero с поисковой строкой и ГРИ-индикаторами",
      "Дизайн карточки товара (ВА-57, КТИ, ТКГ)",
      "Дизайн умного поиска в каталоге",
      "Дизайн плавающей кнопки 'Связаться'"
    ]
  },
  {
    phase: "Разработка (Дни 16-28)",
    tasks: [
      "Вёрстка sticky header (React)",
      "Поисковая строка с автоподсказками",
      "Каталог с фильтрами и сравнением",
      "Telegram-бот: автоответы + CRM",
      "Плавающая кнопка связи"
    ]
  },
  {
    phase: "Запуск (Дни 29-30)",
    tasks: [
      "Тестирование поиска и фильтров",
      "Настройка CRM для приёма заявок",
      "Обучение: как добавлять товары",
      "Запуск на plato-intel.by"
    ]
  }
];

export function NewWebsitePage() {
  return (
    <div className="new-website-page">
      {/* Hero */}
      <section className="nw-hero">
        <div className="nw-container">
          <div className="nw-badge">РЕДИЗАЙН plato-intel.by</div>
          <h1 className="nw-title">НОВЫЙ САЙТ ДЛЯ PLATO-INTEL</h1>
          <h2 className="nw-subtitle">На основе анализа текущего сайта</h2>
          
          <div className="nw-hero-stats">
            <div className="nw-stat">
              <NixieTubeAdvanced value="650" label="USD" size="large" />
              <span>Полный цикл</span>
            </div>
            <div className="nw-gift">
              <Gift size={32} />
              <div>
                <strong>ПОДАРОК</strong>
                <span>Telegram-бот + CRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Анализ на основе скриншотов */}
      <section className="nw-analysis">
        <div className="nw-container">
          <h2 className="nw-section-title">АНАЛИЗ ТЕКУЩЕГО САЙТА (по скриншотам)</h2>
          
          <div className="analysis-grid">
            {currentSiteAnalysis.map((item, idx) => (
              <div key={idx} className="analysis-card">
                <div className="analysis-header">
                  <span className="analysis-num">0{idx + 1}</span>
                  <h3>{item.element}</h3>
                </div>
                
                {item.screenshot && (
                  <div className="screenshot-ref">
                    <small>📷 Скриншот: {item.screenshot}</small>
                  </div>
                )}
                
                <div className="analysis-block current">
                  <div className="block-label">СЕЙЧАС:</div>
                  <p>{item.current}</p>
                </div>
                
                <div className="analysis-block problem">
                  <div className="block-label">ПРОБЛЕМА:</div>
                  <p>{item.problem}</p>
                </div>
                
                <div className="analysis-block solution">
                  <div className="block-label">РЕШЕНИЕ:</div>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Новая структура */}
      <section className="nw-structure">
        <div className="nw-container">
          <h2 className="nw-section-title">НОВАЯ СТРУКТУРА САЙТА</h2>
          <p className="nw-section-subtitle">Ключевые изменения</p>
          
          <div className="structure-list">
            {newSiteStructure.map((item, idx) => (
              <div key={idx} className="structure-item">
                <div className="structure-header">
                  <span className="structure-num">{idx + 1}</span>
                  <h3>{item.screen}</h3>
                </div>
                <ul className="structure-elements">
                  {item.elements.map((el, i) => (
                    <li key={i}><ChevronRight size={14} /> {el}</li>
                  ))}
                </ul>
                <div className="structure-benefit">
                  <strong>Результат:</strong> {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит в $650 */}
      <section className="nw-scope">
        <div className="nw-container">
          <h2 className="nw-section-title">ЧТО ВХОДИТ В $650</h2>
          
          <div className="scope-grid">
            {workDetails.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <h3>{phase.phase}</h3>
                <ul>
                  {phase.tasks.map((task, i) => (
                    <li key={i}><Check size={14} /> {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="highlight-box">
            <h3>🔍 КЛЮЧЕВОЕ: ПОИСК + TELEGRAM-БОТ</h3>
            <p><strong>Поиск:</strong> 70% B2B-покупателей ищут товар через поиск, а не просматривают каталог. Поисковая строка на главной = +40% конверсии.</p>
            <p><strong>Telegram-бот:</strong> Плавающая кнопка → бот → CRM. Автоответы на типовые вопросы. Менеджер подключается только к сложным.</p>
          </div>
        </div>
      </section>

      {/* Сравнение */}
      <section className="nw-comparison">
        <div className="nw-container">
          <h2 className="nw-section-title">СРАВНЕНИЕ: ДО vs ПОСЛЕ</h2>
          
          <div className="comparison-table">
            <div className="comp-row head">
              <span>ПАРАМЕТР</span>
              <span className="comp-old">ТЕКУЩИЙ САЙТ</span>
              <span className="comp-new">НОВЫЙ САЙТ</span>
            </div>
            <div className="comp-row">
              <span>Хедер</span>
              <span className="comp-old">Перегружен (топ-бар + хедер с 2 телефонами + 3 мессенджера)</span>
              <span className="comp-new">Один sticky хедер: логотип, поиск, меню, кнопка 'Контакты'</span>
            </div>
            <div className="comp-row">
              <span>Поиск</span>
              <span className="comp-old">Нет на главной. Только в каталоге.</span>
              <span className="comp-new">Большая поисковая строка на главной + умный поиск в каталоге</span>
            </div>
            <div className="comp-row">
              <span>Постоянная связь</span>
              <span className="comp-old">Телефон только в хедере (пропадает при скролле)</span>
              <span className="comp-new">Плавающая кнопка 'Связаться' → Telegram-бот → CRM</span>
            </div>
            <div className="comp-row">
              <span>Каталог</span>
              <span className="comp-old">Стандартный список без фильтров</span>
              <span className="comp-new">Умный поиск + фильтры (по току, напряжению) + сравнение</span>
            </div>
            <div className="comp-row">
              <span>Контент</span>
              <span className="comp-old">Стена текста, которую никто не читает</span>
              <span className="comp-new">Структурированные блоки с цифрами и иконками</span>
            </div>
          </div>
        </div>
      </section>

      {/* Цена */}
      <section className="nw-pricing">
        <div className="nw-container">
          <h2 className="nw-section-title">СТОИМОСТЬ</h2>
          
          <div className="pricing-cards">
            <div className="price-market">
              <h3>РЫНОК БЕЛАРУСИ</h3>
              <div className="price-range">$2000 — $4000</div>
              <ul>
                <li>Дизайн + вёрстка: $1500-2500</li>
                <li>Поиск и фильтры: $500-800</li>
                <li>Telegram-бот: $300-500</li>
                <li>CRM интеграция: $400-600</li>
              </ul>
            </div>
            
            <div className="price-our">
              <div className="price-badge">НАШЕ ПРЕДЛОЖЕНИЕ</div>
              <div className="price-main">
                <NixieTubeAdvanced value="650" label="USD" size="large" />
              </div>
              <p className="price-note">Всё включено: дизайн, вёрстка, поиск, бот, CRM</p>
              <div className="price-gift">
                <Gift size={20} />
                <span>Telegram-бот + CRM в подарок</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nw-cta">
        <div className="nw-container">
          <h2 className="nw-cta-title">ОБСУДИМ ВАШ ПРОЕКТ?</h2>
          <p className="cta-text">
            Покажу прототипы нового хедера и поиска. <br/>
            Расскажу, как настроить Telegram-бот и CRM.
          </p>
          <button className="cta-button">
            НАПИСАТЬ В TELEGRAM
          </button>
          <p className="cta-phone">+375 (29) 615-56-72</p>
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
          font-size: clamp(40px, 6vw, 72px);
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin: 0 0 8px 0;
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

        .nw-gift strong {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
        }

        /* Analysis */
        .nw-analysis {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .analysis-grid {
          display: grid;
          gap: 20px;
        }

        .analysis-card {
          background: var(--surface);
          border-radius: 12px;
          padding: 24px;
          border-left: 4px solid var(--gri-glow);
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .analysis-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .analysis-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          opacity: 0.6;
        }

        .analysis-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .screenshot-ref {
          margin-bottom: 12px;
          padding: 8px 12px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 6px;
        }

        .screenshot-ref small {
          color: var(--gri-glow);
          font-size: 12px;
        }

        .analysis-block {
          margin-bottom: 12px;
          padding: 12px;
          border-radius: 8px;
        }

        .analysis-block.current { background: rgba(255, 200, 100, 0.1); }
        .analysis-block.problem { background: rgba(255, 100, 100, 0.1); }
        .analysis-block.solution { background: rgba(74, 222, 128, 0.1); }

        .block-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .analysis-block.current .block-label { color: #ffc864; }
        .analysis-block.problem .block-label { color: #ff6464; }
        .analysis-block.solution .block-label { color: var(--accent-green); }

        .analysis-block p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        /* Structure */
        .nw-structure {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .structure-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .structure-item {
          background: var(--surface);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .structure-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .structure-num {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gri-glow);
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          border-radius: 8px;
        }

        .structure-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .structure-elements {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 8px;
        }

        .structure-elements li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .structure-elements li svg {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .structure-benefit {
          padding: 12px;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--accent-green);
        }

        .structure-benefit strong {
          font-weight: 700;
        }

        /* Scope */
        .nw-scope {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .scope-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .phase-card {
          background: var(--surface);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .phase-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .phase-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .phase-card li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .phase-card li svg {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .highlight-box {
          padding: 32px;
          background: linear-gradient(135deg, rgba(255, 154, 77, 0.15) 0%, rgba(255, 154, 77, 0.05) 100%);
          border: 2px solid var(--gri-glow);
          border-radius: 16px;
        }

        .highlight-box h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          margin: 0 0 16px 0;
        }

        .highlight-box p {
          font-family: 'PT Sans', sans-serif;
          font-size: 15px;
          color: var(--text-secondary);
          margin: 0 0 12px 0;
          line-height: 1.6;
        }

        .highlight-box p:last-child {
          margin-bottom: 0;
        }

        .highlight-box strong {
          color: var(--text-primary);
        }

        /* Comparison */
        .nw-comparison {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .comparison-table {
          background: var(--surface);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .comp-row {
          display: grid;
          grid-template-columns: 1fr 2fr 2fr;
          gap: 16px;
          padding: 16px 24px;
          border-top: 1px solid var(--grid-lines);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          align-items: center;
        }

        .comp-row.head {
          background: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .comp-old {
          color: #ff6464;
        }

        .comp-new {
          color: var(--accent-green);
        }

        /* Pricing */
        .nw-pricing {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 32px;
        }

        .price-market {
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .price-market h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 16px 0;
        }

        .price-range {
          font-family: 'JetBrains Mono', monospace;
          font-size: 28px;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 24px;
        }

        .price-market ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .price-market li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          padding: 8px 0;
          border-bottom: 1px solid var(--grid-lines);
        }

        .price-our {
          position: relative;
          padding: 40px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 2px solid var(--gri-glow);
          border-radius: 16px;
          text-align: center;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light), 0 0 40px rgba(255, 154, 77, 0.2);
        }

        .price-badge {
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

        .price-main {
          display: flex;
          justify-content: center;
          margin: 24px 0;
        }

        .price-note {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .price-gift {
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

        .cta-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          margin: 0 0 32px 0;
          line-height: 1.6;
        }

        .cta-button {
          padding: 20px 48px;
          background: var(--gri-glow);
          border: none;
          border-radius: 12px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(255, 154, 77, 0.4), 0 0 40px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
          margin-bottom: 16px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 154, 77, 0.5), 0 0 60px rgba(255, 154, 77, 0.4);
        }

        .cta-phone {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: var(--gri-glow);
          margin: 0;
        }

        @media (max-width: 768px) {
          .comp-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
