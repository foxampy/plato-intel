// Страница редизайна plato-intel.by - реальный анализ текущего сайта

import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { 
  Search, Eye, MousePointer, Phone, MapPin, Clock,
  ChevronRight, Check, Gift, AlertTriangle, TrendingUp,
  Users, FileText, ShoppingCart, Menu, X
} from "lucide-react";

// Реальный аудит текущего сайта plato-intel.by
const currentSiteAudit = [
  {
    element: "Шапка сайта",
    current: "Отсутствует чёткий логотип и УТП. Нет навигационного меню. Только текстовое название 'ООО Плато-Интел'",
    problem: "Пользователь не понимает, где находится и что делать. Нет визуальной идентичности.",
    solution: "Логотип с лампой накаливания (символ энергии). Чёткое меню: Каталог, О компании, Доставка, Контакты. УТП: '20+ лет. Доставка 24 часа. 340+ проектов.'"
  },
  {
    element: "Главный экран (Hero)",
    current: "Отсутствует. Сразу идёт текстовое описание компании без визуального акцента.",
    problem: "Нет первого впечатления. Пользователь не понимает преимуществ за 3 секунды.",
    solution: "ГРИ-индикаторы с цифрами (20+, 340+, 12 мес). Заголовок: 'Электротехника для промышленности'. Галетный переключатель поиска."
  },
  {
    element: "Навигация по каталогу",
    current: "Нет видимой навигации. Товары только через текстовые ссылки в тексте.",
    problem: "Пользователь не может быстро найти нужную категорию. Нет визуальной структуры.",
    solution: "Иконки категорий: Автоматические выключатели, Контакторы, Тормоза, Реле, Электромагниты. Триггерный выбор."
  },
  {
    element: "Каталог товаров",
    current: "Текстовые списки без фото. Нет цен. Нет кнопки 'Купить/Заказать'.",
    problem: "B2B-покупателю нужны характеристики, фото, цена, кнопка действия. Текст не продаёт.",
    solution: "Карточки товаров с фото, названием, ключевыми характеристиками, ценой/кнопкой 'Запросить цену'. Сопутствующие товары."
  },
  {
    element: "Контакты и доверие",
    current: "Телефон только в подвале. Адрес: ул. Михася Лынькова, 85. Есть негативный отзыв на firmi.by",
    problem: "Контакты спрятаны. Нет социального доказательства. Нет реакции на негативный отзыв.",
    solution: "Липкая кнопка 'Позвонить' (+375 29 615-56-72). Блок '340+ объектов' с логотипами клиентов. Работа с отзывами."
  },
  {
    element: "SEO и контент",
    current: "Текстовые описания без структуры. Нет посадочных страниц под запросы. Нет блога.",
    problem: "Трафик только по брендовым запросам. Нет длинного хвоста 'как выбрать автоматический выключатель'.",
    solution: "Структурированный каталог с SEO-URL. Блог: 'Как выбрать', 'Как починить', 'Обзоры'. Микроразметка."
  },
  {
    element: "Мобильная версия",
    current: "Текстовый сайт адаптируется, но нет мобильного меню. Нет кнопки быстрого звонка.",
    problem: "50% трафика B2B — с мобильных (инженеры на объектах). Неудобно использовать.",
    solution: "Бургер-меню. Липкая кнопка звонка. Адаптивные карточки товаров."
  }
];

// Структура нового сайта
const newSiteStructure = [
  {
    screen: "1. HERO (Первый экран)",
    elements: [
      "ГРИ-счётчики: 20+ лет / 340+ объектов / 12 мес гарантии",
      "Заголовок: 'Электротехника для кранов и промышленности'",
      "Подзаголовок: 'Автоматические выключатели, контакторы, тормоза — отгрузка за 24 часа'",
      "Галетный переключатель: по производителю / по назначению / по артикулу",
      "Кнопка CTA: 'Подобрать оборудование'"
    ],
    result: "Пользователь понимает УТП за 3 секунды. Сразу видит опыт и гарантии."
  },
  {
    screen: "2. БЫСТРЫЙ ВЫБОР (Категории)",
    elements: [
      "Иконка + Автоматические выключатели (ВА-57, ВА-99)",
      "Иконка + Контакторы (КТИ, КМ)",
      "Иконка + Крановые тормоза (ТКГ, ТКТ, ТКП)",
      "Иконка + Реле (тепловые, токовые)",
      "Иконка + Электромагниты (МП, МИС)",
      "Иконка + Гидротолкатели (ТЭ)"
    ],
    result: "Инженер сразу находит нужную категорию без чтения текста."
  },
  {
    screen: "3. SMART-КАТАЛОГ",
    elements: [
      "Карточка: Фото + Название (ВА-57-35) + Характеристики (1600А) + Кнопка 'Запросить цену'",
      "Блок 'Часто покупают вместе': контактор + реле + кнопка",
      "Блок 'Альтернатива': премиум-сегмент (всегда дороже)",
      "Фильтры: по току, по напряжению, по производителю",
      "Сравнение: выбор 2-4 позиций для сравнения"
    ],
    result: "Увеличение среднего чека на 25-35% через сопутствующие товары."
  },
  {
    screen: "4. ОТРАСЛЕВЫЕ РЕШЕНИЯ (SEO)",
    elements: [
      "Крановое оборудование (мостовые, козловые, башенные)",
      "Металлургия (прокатные станы, печи)",
      "Энергетика (подстанции, распредустройства)",
      "ЖКХ (лифты, насосные станции)",
      "Агропром (элеваторы, зерносушилки)"
    ],
    result: "Посадочные страницы под нишевые запросы. Трафик +200%."
  },
  {
    screen: "5. ДОВЕРИЕ (Кейсы)",
    elements: [
      "Цифры: 340+ объектов, 20+ лет, 50+ крупных заводов",
      "Логотипы клиентов (бегущая строка)",
      "Кейс: 'Модернизация кранов на БМЗ — поставка 48 автоматов за 3 дня'",
      "Сертификаты и гарантии",
      "Адрес и телефон видно сразу (+375 29 615-56-72, ул. М. Лынькова, 85)"
    ],
    result: "Преодоление недоверия. Ответ на негативный отзыв — профессионализм."
  },
  {
    screen: "6. БЛОГ (SEO-магнит)",
    elements: [
      "'Как выбрать автоматический выключатель для крана'",
      "'Отличие ВА-57 от ВА-99: таблица сравнения'",
      "'Ремонт кранового тормоза ТКГ: пошаговая инструкция'",
      "'Обзор новинок: контакторы КТИ-2023'"
    ],
    result: "Тёплые лиды из поиска. Инженеры читают, доверяют, звонят."
  },
  {
    screen: "7. ФОРМА ЗАХВАТА",
    elements: [
      "Заголовок: 'Подберём оборудование за 15 минут'",
      "Шаг 1: Что нужно? (автоматы / контакторы / тормоза)",
      "Шаг 2: Артикул или описание задачи",
      "Шаг 3: Телефон для связи (+375 29 615-56-72)",
      "Индикатор: 'Шаг 1 из 3'"
    ],
    result: "Конверсия посетителя в заявку. Многошаговая форма = +86% к заполнению."
  }
];

// Что конкретно делаем
const workScope = [
  {
    phase: "АУДИТ (День 1-2)",
    tasks: [
      "Анализ текущего plato-intel.by: структура, тексты, SEO",
      "Изучение конкурентов: energetika.by, elektromaterialy.by",
      "Интервью: что важно при заказе автоматов/контакторов",
      "Сбор семантики: 200+ ключевых слов"
    ]
  },
  {
    phase: "ДИЗАЙН (День 3-10)",
    tasks: [
      "3 концепции визуального стиля (неоморфизм + индустриальный)",
      "Прототип всех 7 экранов",
      "Дизайн карточки товара (ВА-57, КТИ, ТКГ)",
      "Мобильная адаптация"
    ]
  },
  {
    phase: "ВЁРСТКА (День 11-25)",
    tasks: [
      "React + TypeScript + адаптив",
      "Каталог с фильтрами",
      "Форма захвата",
      "SEO-оптимизация: ЧПУ, мета-теги, микроразметка",
      "Интеграция с Google Analytics / Метрикой"
    ]
  },
  {
    phase: "ЗАПУСК (День 26-30)",
    tasks: [
      "Тестирование на всех устройствах",
      "Наполнение: 20+ товаров с описаниями",
      "Перенос на хостинг plato-intel.by",
      "Настройка домена и SSL",
      "Обучение: как добавлять товары"
    ]
  }
];

export function NewWebsitePage() {
  return (
    <div className="new-website-page">
      {/* Hero */}
      <section className="nw-hero">
        <div className="nw-container">
          <div className="nw-badge">РЕДИЗАЙН САЙТА</div>
          <h1 className="nw-title">plato-intel.by</h1>
          <h2 className="nw-subtitle">Современный сайт для поставщика электротехники</h2>
          
          <div className="nw-hero-stats">
            <div className="nw-stat">
              <NixieTubeAdvanced value="650" label="USD" size="large" />
              <span>Полный цикл</span>
            </div>
            <div className="nw-gift">
              <Gift size={32} />
              <div>
                <strong>ПОДАРОК</strong>
                <span>Telegram-бот с каталогом</span>
              </div>
            </div>
          </div>
          
          <p className="nw-hero-note">Срок: 30 дней. Гарантия результата или возврат.</p>
        </div>
      </section>

      {/* Аудит текущего сайта */}
      <section className="nw-audit">
        <div className="nw-container">
          <h2 className="nw-section-title">АУДИТ ТЕКУЩЕГО САЙТА plato-intel.by</h2>
          <p className="nw-section-subtitle">Что есть сейчас и почему это не работает</p>
          
          <div className="audit-grid">
            {currentSiteAudit.map((item, idx) => (
              <div key={idx} className="audit-card">
                <div className="audit-header">
                  <span className="audit-num">0{idx + 1}</span>
                  <h3>{item.element}</h3>
                </div>
                
                <div className="audit-block current">
                  <div className="block-label">
                    <AlertTriangle size={14} /> СЕЙЧАС:
                  </div>
                  <p>{item.current}</p>
                </div>
                
                <div className="audit-block problem">
                  <div className="block-label">
                    <TrendingUp size={14} /> ПРОБЛЕМА:
                  </div>
                  <p>{item.problem}</p>
                </div>
                
                <div className="audit-block solution">
                  <div className="block-label">
                    <Check size={14} /> РЕШЕНИЕ:
                  </div>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Структура нового сайта */}
      <section className="nw-structure">
        <div className="nw-container">
          <h2 className="nw-section-title">СТРУКТУРА НОВОГО САЙТА</h2>
          <p className="nw-section-subtitle">7 экранов, которые продают</p>
          
          <div className="structure-list">
            {newSiteStructure.map((screen, idx) => (
              <div key={idx} className="structure-item">
                <div className="structure-header">
                  <span className="structure-num">{idx + 1}</span>
                  <h3>{screen.screen}</h3>
                </div>
                <ul className="structure-elements">
                  {screen.elements.map((el, i) => (
                    <li key={i}><ChevronRight size={14} /> {el}</li>
                  ))}
                </ul>
                <div className="structure-result">
                  <strong>Результат:</strong> {screen.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит */}
      <section className="nw-scope">
        <div className="nw-container">
          <h2 className="nw-section-title">ЧТО ВХОДИТ В $650</h2>
          
          <div className="scope-timeline">
            {workScope.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <div className="phase-header">
                  <span className="phase-num">{idx + 1}</span>
                  <h3>{phase.phase}</h3>
                </div>
                <ul>
                  {phase.tasks.map((task, i) => (
                    <li key={i}><Check size={14} /> {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="gift-banner">
            <Gift size={40} />
            <div>
              <h3>ПОДАРОК: TELEGRAM-БОТ</h3>
              <p>Каталог товаров в мессенджере. Клиенты могут смотреть цены и оставлять заявки прямо в Telegram. Обычная стоимость: $300. Вам — бесплатно.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Сравнение до/после */}
      <section className="nw-comparison">
        <div className="nw-container">
          <h2 className="nw-section-title">СРАВНЕНИЕ: ДО И ПОСЛЕ</h2>
          
          <div className="comparison-table">
            <div className="comp-header">
              <span>ПАРАМЕТР</span>
              <span className="comp-old">ТЕКУЩИЙ САЙТ</span>
              <span className="comp-new">НОВЫЙ САЙТ</span>
            </div>
            
            <div className="comp-row">
              <span>Время загрузки</span>
              <span className="comp-old">Медленно (текст + картинки без оптимизации)</span>
              <span className="comp-new">Быстро (оптимизированный код, lazy loading)</span>
            </div>
            
            <div className="comp-row">
              <span>Мобильная версия</span>
              <span className="comp-old">Текст адаптируется, но нет меню</span>
              <span className="comp-new">Полноценное приложение с бургер-меню</span>
            </div>
            
            <div className="comp-row">
              <span>Каталог</span>
              <span className="comp-old">Текстовые списки без фото</span>
              <span className="comp-new">Карточки с фото, фильтрами, сравнением</span>
            </div>
            
            <div className="comp-row">
              <span>Конверсия</span>
              <span className="comp-old">Низкая (только звонок по телефону)</span>
              <span className="comp-new">Высокая (формы, чат, кнопки на каждом экране)</span>
            </div>
            
            <div className="comp-row">
              <span>SEO</span>
              <span className="comp-old">Только главная страница</span>
              <span className="comp-new">50+ посадочных страниц под запросы</span>
            </div>
            
            <div className="comp-row">
              <span>Доверие</span>
              <span className="comp-old">Нет отзывов, кейсов</span>
              <span className="comp-new">340+ объектов, логотипы клиентов, кейсы</span>
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
                <li>Дизайн от $800</li>
                <li>Вёрстка от $1200</li>
                <li>SEO-настройка от $500</li>
                <li>Контент от $300</li>
              </ul>
            </div>
            
            <div className="price-our">
              <div className="price-badge">НАШЕ ПРЕДЛОЖЕНИЕ</div>
              <div className="price-main">
                <NixieTubeAdvanced value="650" label="USD" size="large" />
              </div>
              <p className="price-note">Полный цикл: аудит → дизайн → вёрстка → запуск</p>
              <div className="price-gift">
                <Gift size={20} />
                <span>+ Telegram-бот ($300) в подарок</span>
              </div>
            </div>
          </div>
          
          <div className="economy">
            <span>Экономия: </span>
            <strong>70-85%</strong>
          </div>
        </div>
      </section>

      {/* Гарантии */}
      <section className="nw-guarantees">
        <div className="nw-container">
          <h2 className="nw-section-title">ГАРАНТИИ</h2>
          
          <div className="guarantees-grid">
            <div className="guarantee-card">
              <Clock size={32} />
              <h3>СРОКИ</h3>
              <p>30 дней. За каждую неделю просрочки — скидка 10%</p>
            </div>
            <div className="guarantee-card">
              <Check size={32} />
              <h3>КАЧЕСТВО</h3>
              <p>Безграничные правки до полного утверждения</p>
            </div>
            <div className="guarantee-card">
              <Users size={32} />
              <h3>РЕЗУЛЬТАТ</h3>
              <p>Если сайт не понравится — возврат предоплаты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="nw-contacts">
        <div className="nw-container">
          <h2 className="nw-section-title">НАЧНЁМ СЕГОДНЯ?</h2>
          <p className="contacts-text">
            Обсудим ваш проект. Покажу примеры работ. Подготовлю прототип бесплатно.
          </p>
          
          <div className="contacts-info">
            <div className="contact-item">
              <Phone size={24} />
              <span>+375 (29) 615-56-72</span>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>г. Минск, ул. М. Лынькова, 85</span>
            </div>
          </div>
          
          <button className="cta-button">
            ОБСУДИТЬ РЕДИЗАЙН
          </button>
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

        /* Audit */
        .nw-audit {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .audit-grid {
          display: grid;
          gap: 20px;
        }

        .audit-card {
          background: var(--surface);
          border-radius: 12px;
          padding: 24px;
          border-left: 4px solid var(--gri-glow);
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .audit-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .audit-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          opacity: 0.6;
        }

        .audit-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
        }

        .audit-block {
          margin-bottom: 12px;
          padding: 12px;
          border-radius: 8px;
        }

        .audit-block.current {
          background: rgba(255, 200, 100, 0.1);
        }

        .audit-block.problem {
          background: rgba(255, 100, 100, 0.1);
        }

        .audit-block.solution {
          background: rgba(74, 222, 128, 0.1);
        }

        .block-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .audit-block.current .block-label {
          color: #ffc864;
        }

        .audit-block.problem .block-label {
          color: #ff6464;
        }

        .audit-block.solution .block-label {
          color: var(--accent-green);
        }

        .audit-block p {
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

        .structure-result {
          padding: 12px;
          background: rgba(74, 222, 128, 0.1);
          border-radius: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--accent-green);
        }

        .structure-result strong {
          font-weight: 700;
        }

        /* Scope */
        .nw-scope {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .scope-timeline {
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

        .phase-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .phase-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
        }

        .phase-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
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

        .gift-banner {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0.05) 100%);
          border: 2px solid var(--accent-green);
          border-radius: 16px;
        }

        .gift-banner svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .gift-banner h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
          margin: 0 0 8px 0;
        }

        .gift-banner p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
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

        .comp-header {
          display: grid;
          grid-template-columns: 1.5fr 2fr 2fr;
          gap: 16px;
          padding: 16px 24px;
          background: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .comp-row {
          display: grid;
          grid-template-columns: 1.5fr 2fr 2fr;
          gap: 16px;
          padding: 16px 24px;
          border-top: 1px solid var(--grid-lines);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          align-items: center;
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

        .economy {
          text-align: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .economy strong {
          color: var(--accent-green);
          font-size: 32px;
        }

        /* Guarantees */
        .nw-guarantees {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .guarantees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .guarantee-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow: 6px 6px 12px var(--shadow-dark), -2px -2px 8px var(--shadow-light);
        }

        .guarantee-card svg {
          color: var(--gri-glow);
          margin-bottom: 16px;
        }

        .guarantee-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .guarantee-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Contacts */
        .nw-contacts {
          padding: 80px 0 120px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          text-align: center;
        }

        .contacts-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 32px auto;
        }

        .contacts-info {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
        }

        .contact-item svg {
          color: var(--gri-glow);
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
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 154, 77, 0.5), 0 0 60px rgba(255, 154, 77, 0.4);
        }

        @media (max-width: 768px) {
          .comp-header,
          .comp-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .contacts-info {
            flex-direction: column;
            gap: 16px;
          }

          .gift-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
