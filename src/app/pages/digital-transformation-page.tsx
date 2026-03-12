import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { 
  Palette, Globe, Database, Bot, Brain, Search, TrendingUp,
  Check, Clock, CreditCard, Award, Shield, ChevronRight
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "РЕБРЕНДИНГ И ВИЗУАЛЬНАЯ АЙДЕНТИКА",
    work: [
      "Разработка трёх концепций визуального стиля",
      "Неоморфизм с тёплыми приборными элементами, ГРИ-индикаторы, галетные переключатели",
      "Конструктивизм с геометрической модульной сеткой, наклонными композициями, массивной типографикой",
      "Ретрофутуризм с иммерсивными индустриальными объектами, ветрогенераторами, конвейерами",
      "Логотипы для каждой концепции, цветовые палитры, типографические системы",
      "Компоненты интерфейса, гайдлайны использования"
    ],
    market: "Студийный брендинг от 2000 до 6000 BYN. Фриланс от 800 до 2500 BYN. Три концепции в студии 4000-7000 BYN.",
    price: "900",
    savings: "55 до 85 процентов",
    duration: "2 недели"
  },
  {
    number: "02",
    icon: Globe,
    title: "ОБНОВЛЕНИЕ САЙТА С НОВЫМИ СТРАНИЦАМИ И ФУНКЦИЯМИ",
    work: [
      "Полная переработка сайта с интеграцией выбранной визуальной концепции",
      "Новостное полотно трёх уровней: нишевые новости отрасли, региональные новости, международные тенденции",
      "Раздел исследований и разработок: техническая документация, обзоры новинок, сравнительные анализы",
      "Блог специалистов: как починить, как выбрать, как проверить, как следить",
      "Все страницы оптимизированы под поисковики и ИИ-чаты",
      "Новая система каталога с умным поиском и фильтрами",
      "Система сопутствующих товаров: расходники, альтернативы премиум-сегмента, увеличенная гарантия",
      "Функция параллельного сравнения до четырёх позиций, сравнение с конкурентами",
      "Адаптивная вёрстка, SEO-структура, админ-панель"
    ],
    market: "Корпоративный сайт с каталогом от 3000 до 8000 BYN. Сложный каталог от 4000 до 10000 BYN. Контентная система от 1000 до 3000 BYN. Система рекомендаций от 1500 до 3000 BYN. Функция сравнения от 800 до 2000 BYN. Итого рынок от 10300 до 26000 BYN.",
    price: "3500",
    savings: "30 до 60 процентов",
    duration: "6-8 недель"
  },
  {
    number: "03",
    icon: Database,
    title: "CRM СКВОЗНАЯ",
    work: [
      "Разработка кастомной CRM",
      "База клиентов с историей взаимодействий",
      "Воронка продаж от контакта до сделки",
      "Управление задачами и напоминаниями",
      "Интеграция с сайтом: автоматическое создание лидов",
      "Интеграция с Telegram-ботом",
      "Уведомления в Telegram о новых заявках, смене статусов, ежедневные сводки",
      "Специальный сайт для доступа к CRM",
      "Разграничение прав доступа, дашборд с показателями"
    ],
    market: "Готовые решения Битрикс24 от 550 BYN плюс подписка. Настройка Битрикс24 от 950 до 1550 BYN. Кастомная разработка CRM от 17900 до 42800 BYN.",
    price: "1500",
    savings: "92 до 96 процентов от кастомной разработки",
    duration: "3-4 недели (параллельно с сайтом)"
  },
  {
    number: "04",
    icon: Bot,
    title: "TELEGRAM-БОТ",
    work: [
      "Многоуровневое меню навигации",
      "Каталог товаров с поиском и фильтрами",
      "ИИ-ассистент для консультаций",
      "Интеграция с CRM: запись пользователя как лида",
      "Воронка продаж внутри бота",
      "Оформление заявки без выхода из мессенджера",
      "Уведомления о статусах заказа",
      "Рассылки новостей и новинок",
      "Реактивация неактивных пользователей"
    ],
    market: "Простой бот-каталог от 600 до 1000 BYN. Бот с админкой от 800 до 1500 BYN. ИИ-бот с интеграциями от 1500 до 2500 BYN. Сложные воронки продаж от 2000 BYN.",
    price: "1000",
    savings: "40 до 60 процентов",
    duration: "2-3 недели"
  },
  {
    number: "05",
    icon: Brain,
    title: "ИИ-МЕНЕДЖЕР",
    work: [
      "Разработка чат-интерфейса для сайта",
      "Интеграция языковой модели GPT-4 или аналог",
      "Обучение на каталоге товаров plato-intel",
      "Обучение на технической документации",
      "Обучение на типовых вопросах и ответах",
      "Подключение к общей информации рынка электротехники",
      "Контекстное понимание запросов",
      "Передача сложных вопросов человеку с полной историей диалога",
      "Дообучение на основе чатов с реальными клиентами по мере работы"
    ],
    market: "Простой чат-бот без ИИ от 400 до 800 BYN. ИИ-ассистент базовый от 1200 до 2000 BYN. ИИ с интеграцией в CRM и обучением на документации от 2000 до 3500 BYN. Корпоративные решения от 5000 BYN.",
    price: "1800",
    savings: "35 до 50 процентов",
    duration: "2-3 недели (параллельно с ботом)"
  },
  {
    number: "06",
    icon: Search,
    title: "СИСТЕМА ПОИСКА ТЕНДЕРОВ И ЛИДОВ",
    work: [
      "Парсинг государственных закупок Беларуси",
      "Парсинг тендеров СНГ по ключевым словам",
      "Мониторинг аварий на промышленных объектах через открытые источники",
      "Выявление потенциальных заказчиков, нуждающихся в срочной замене оборудования",
      "Анализ публикаций о модернизации предприятий",
      "Формирование списка топ-менеджеров предприятий, периодически нуждающихся в электротехнике",
      "Автоматическая сводка потенциальных сделок",
      "Интеграция с CRM для создания задач менеджерам"
    ],
    market: "Готовые сервисы мониторинга тендеров от 100 до 300 USD в месяц. Разработка кастомного парсера от 2000 до 5000 BYN. Системы сквозного анализа рынка от 3000 BYN.",
    price: "1200",
    savings: "40 до 70 процентов. Окупаемость за счёт одной дополнительной сделки",
    duration: "2 недели"
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "НАСТРОЙКА SEO И ПОДГОТОВКА К ПРОДВИЖЕНИЮ",
    work: [
      "Техническая оптимизация сайта: структура, скорость, мобильная версия",
      "Базовая настройка семантического ядра",
      "Интеграция Яндекс.Метрика, Google Analytics",
      "Настройка целей и событий",
      "Подключение Яндекс.Вебмастер, Google Search Console",
      "Поиск и подбор SEO-специалиста для ежемесячной работы",
      "Проверка качества его работы, контроль выполнения задач",
      "Корректировка стратегии"
    ],
    market: "Разовый технический аудит от 500 до 800 BYN. Базовая настройка SEO от 700 до 1200 BYN. SEO-специалист на аутсорс от 600 до 1300 BYN в месяц. Координация от 300 до 500 BYN в месяц.",
    price: "800",
    priceMonthly: "400 за контроль + 600-800 специалисту",
    monthlyTotal: "1000-1200",
    savings: "30 до 50 процентов от агентских цен",
    duration: "1-2 недели"
  }
];

const marketComparison = [
  { service: "Ребрендинг три концепции", market: "4000-7000", our: "900", saving: "77-87%" },
  { service: "Сайт с каталогом, блогом, сравнением", market: "10300-26000", our: "3500", saving: "66-86%" },
  { service: "CRM кастомная", market: "17900-42800", our: "1500", saving: "92-96%" },
  { service: "Бот с ИИ", market: "2000-3500", our: "1000", saving: "50-71%" },
  { service: "ИИ-менеджер", market: "2000-3500", our: "1800", saving: "10-48%" },
  { service: "Система мониторинга", market: "2000-5000", our: "1200", saving: "40-76%" },
  { service: "SEO-настройка", market: "1200-2000", our: "800", saving: "33-60%" }
];

const timeline = [
  { weeks: "1-2", task: "Ребрендинг: три концепции, выбор финальной" },
  { weeks: "3-10", task: "Разработка сайта, всех страниц, каталога, функций (параллельно CRM)" },
  { weeks: "8-10", task: "ИИ-менеджер, бот, интеграции" },
  { weeks: "10-12", task: "Система поиска тендеров, SEO-настройка, тестирование, запуск" }
];

const paymentOptions = [
  {
    title: "Помесячный",
    items: [
      { month: "Месяц 1", price: "3500", desc: "Ребрендинг, старт сайта, CRM" },
      { month: "Месяц 2", price: "3600", desc: "Продолжение сайта, ИИ, бот" },
      { month: "Месяц 3", price: "3600", desc: "Система тендеров, SEO, запуск" }
    ]
  },
  {
    title: "По этапам",
    items: [
      { month: "Предоплата", price: "3500", desc: "Старт проекта" },
      { month: "По завершении сайта", price: "3600", desc: "Сайт и CRM готовы" },
      { month: "По запуску", price: "3600", desc: "Вся система запущена" }
    ]
  }
];

const benefits = [
  "Уникальный бренд, узнаваемый и запоминающийся",
  "Сайт, который продаёт без участия менеджеров 24 часа в сутки",
  "ИИ-консультант, знающий весь каталог",
  "CRM, не теряющая ни одной заявки",
  "Telegram-канал дополнительных продаж",
  "Система поиска тендеров и лидов, работающая автоматически",
  "Прозрачная аналитика, понимание что работает",
  "Экономия 15-20 часов в неделю времени менеджеров",
  "Рост заявок в 5-10 раз за год",
  "Окупаемость инвестиций 2-3 месяца"
];

export function DigitalTransformationPage() {
  const totalPrice = services.reduce((sum, s) => sum + parseInt(s.price), 0);

  return (
    <div className="digital-page">
      {/* Hero */}
      <section className="dt-hero">
        <div className="dt-container">
          <div className="dt-hero-badge">FOXAMPY LAB</div>
          <h1 className="dt-hero-title">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h1>
          <h2 className="dt-hero-subtitle">Цифровая трансформация plato-intel.by</h2>
          <p className="dt-hero-date">Дата: Март 2026</p>
        </div>
      </section>

      {/* Services */}
      <section className="dt-services">
        <div className="dt-container">
          {services.map((service, idx) => (
            <div key={idx} className="dt-service-card">
              <div className="dt-service-header">
                <div className="dt-service-number">{service.number}</div>
                <div className="dt-service-icon">
                  <service.icon size={32} />
                </div>
                <h3 className="dt-service-title">{service.title}</h3>
              </div>
              
              <div className="dt-service-content">
                <div className="dt-service-block">
                  <h4>ЧТО ДЕЛАЮ</h4>
                  <ul>
                    {service.work.map((item, i) => (
                      <li key={i}><ChevronRight size={14} /> {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="dt-service-info">
                  <div className="dt-info-block dt-market">
                    <h4>РЫНОК РБ</h4>
                    <p>{service.market}</p>
                  </div>
                  
                  <div className="dt-info-block dt-price">
                    <h4>МОЯ ЦЕНА</h4>
                    <div className="dt-price-value">
                      <NixieTubeAdvanced value={service.price} label="BYN" size="small" />
                    </div>
                    {service.priceMonthly && (
                      <p className="dt-monthly">Ежемесячно: {service.priceMonthly} BYN</p>
                    )}
                    <p className="dt-savings">Экономия: {service.savings}</p>
                  </div>
                  
                  <div className="dt-info-block dt-duration">
                    <h4>СРОК</h4>
                    <p><Clock size={16} /> {service.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Total */}
      <section className="dt-total">
        <div className="dt-container">
          <h2 className="dt-section-title">ИТОГО РАЗОВЫЕ РАБОТЫ</h2>
          <div className="dt-total-grid">
            {services.map((service, idx) => (
              <div key={idx} className="dt-total-item">
                <span className="dt-total-name">{service.title}</span>
                <span className="dt-total-price">{service.price} BYN</span>
              </div>
            ))}
          </div>
          <div className="dt-total-final">
            <div className="dt-total-label">ИТОГО</div>
            <div className="dt-total-amount">
              <NixieTubeAdvanced value={totalPrice.toString()} label="BYN" size="large" />
            </div>
            <div className="dt-total-usd">~3210 USD</div>
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="dt-comparison">
        <div className="dt-container">
          <h2 className="dt-section-title">СРАВНЕНИЕ С РЫНКОМ</h2>
          <div className="dt-comparison-table">
            <div className="dt-table-header">
              <span>УСЛУГА</span>
              <span>РЫНОК</span>
              <span>МОЯ ЦЕНА</span>
              <span>ЭКОНОМИЯ</span>
            </div>
            {marketComparison.map((row, idx) => (
              <div key={idx} className="dt-table-row">
                <span>{row.service}</span>
                <span>{row.market}</span>
                <span className="dt-our-price">{row.our} BYN</span>
                <span className="dt-saving">{row.saving}</span>
              </div>
            ))}
          </div>
          <div className="dt-total-saving">
            <span>Общая экономия: </span>
            <strong>70-85%</strong>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="dt-timeline">
        <div className="dt-container">
          <h2 className="dt-section-title">СРОКИ РЕАЛИЗАЦИИ</h2>
          <div className="dt-timeline-content">
            <div className="dt-timeline-track">
              {timeline.map((item, idx) => (
                <div key={idx} className="dt-timeline-item">
                  <div className="dt-timeline-weeks">Недели {item.weeks}</div>
                  <div className="dt-timeline-dot"></div>
                  <div className="dt-timeline-task">{item.task}</div>
                </div>
              ))}
            </div>
            <div className="dt-timeline-total">
              <Clock size={24} />
              <span>Общий срок: 3 месяца</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="dt-payment">
        <div className="dt-container">
          <h2 className="dt-section-title">УСЛОВИЯ ОПЛАТЫ</h2>
          <div className="dt-payment-grid">
            {paymentOptions.map((option, idx) => (
              <div key={idx} className="dt-payment-card">
                <h3>Вариант: {option.title}</h3>
                <div className="dt-payment-items">
                  {option.items.map((item, i) => (
                    <div key={i} className="dt-payment-item">
                      <span className="dt-payment-month">{item.month}</span>
                      <span className="dt-payment-price">{item.price} BYN</span>
                      <span className="dt-payment-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="dt-benefits">
        <div className="dt-container">
          <h2 className="dt-section-title">ЧТО ПОЛУЧАЕТ КЛИЕНТ</h2>
          <div className="dt-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="dt-benefit-card">
                <Check size={20} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="dt-additional">
        <div className="dt-container">
          <h2 className="dt-section-title">ДОПОЛНИТЕЛЬНО</h2>
          <div className="dt-additional-grid">
            <div className="dt-additional-card">
              <Shield size={32} />
              <h3>Финальный аудит безопасности</h3>
              <p>Приглашение специалиста один раз перед запуском. Проверка уязвимостей, нагрузочное тестирование, проверка защиты данных.</p>
              <div className="dt-additional-price">600-900 BYN (опционально)</div>
            </div>
            <div className="dt-additional-card">
              <Award size={32} />
              <h3>SEO-специалист на постоянной основе</h3>
              <p>Я нахожу и контролирую. Оплата напрямую специалисту 600-800 BYN/мес, мой контроль 400 BYN/мес. Можно отказаться от контроля после первых трёх месяцев.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dt-cta">
        <div className="dt-container">
          <p className="dt-cta-text">
            Готов обсудить детали и начать работу
          </p>
          <button className="dt-cta-button">
            ОБСУДИТЬ ПРОЕКТ
          </button>
        </div>
      </section>

      <style>{`
        .digital-page {
          background: var(--background-primary);
        }

        .dt-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .dt-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 48px 0;
          text-transform: uppercase;
        }

        /* Hero */
        .dt-hero {
          padding: 100px 0 60px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          text-align: center;
        }

        .dt-hero-badge {
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

        .dt-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
        }

        .dt-hero-subtitle {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(20px, 3vw, 28px);
          letter-spacing: 0.06em;
          color: var(--gri-glow);
          margin: 0 0 16px 0;
        }

        .dt-hero-date {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Services */
        .dt-services {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-service-card {
          background: var(--surface);
          border-radius: 16px;
          margin-bottom: 32px;
          overflow: hidden;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          border: 1px solid rgba(255, 154, 77, 0.1);
        }

        .dt-service-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 32px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border-bottom: 1px solid var(--grid-lines);
        }

        .dt-service-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          opacity: 0.6;
        }

        .dt-service-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          color: var(--gri-glow);
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
        }

        .dt-service-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
          flex: 1;
        }

        .dt-service-content {
          padding: 32px;
        }

        .dt-service-block h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          margin: 0 0 16px 0;
        }

        .dt-service-block ul {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 8px;
        }

        .dt-service-block li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .dt-service-block li svg {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .dt-service-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--grid-lines);
        }

        .dt-info-block {
          padding: 20px;
          background: var(--background-primary);
          border-radius: 12px;
        }

        .dt-info-block h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin: 0 0 12px 0;
        }

        .dt-market p {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .dt-price {
          text-align: center;
          background: linear-gradient(135deg, rgba(255,154,77,0.1) 0%, var(--background-primary) 100%);
          border: 1px solid rgba(255, 154, 77, 0.3);
        }

        .dt-price-value {
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
        }

        .dt-monthly {
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0 0 8px 0;
        }

        .dt-savings {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--accent-green);
          margin: 0;
          font-weight: 700;
        }

        .dt-duration p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dt-duration svg {
          color: var(--gri-glow);
        }

        /* Total */
        .dt-total {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-total-grid {
          display: grid;
          gap: 12px;
          margin-bottom: 32px;
        }

        .dt-total-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--surface);
          border-radius: 8px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
        }

        .dt-total-name {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .dt-total-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: var(--text-primary);
          font-weight: 700;
        }

        .dt-total-final {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 2px solid var(--gri-glow);
          border-radius: 16px;
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 40px rgba(255, 154, 77, 0.2);
        }

        .dt-total-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .dt-total-amount {
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
        }

        .dt-total-usd {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
        }

        /* Comparison */
        .dt-comparison {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-comparison-table {
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 16px;
          padding: 20px 24px;
          background: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .dt-table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 16px;
          padding: 16px 24px;
          border-top: 1px solid var(--grid-lines);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          align-items: center;
        }

        .dt-our-price {
          color: var(--gri-glow);
          font-weight: 700;
        }

        .dt-saving {
          color: var(--accent-green);
          font-weight: 700;
        }

        .dt-total-saving {
          text-align: center;
          margin-top: 32px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .dt-total-saving strong {
          color: var(--accent-green);
          font-size: 32px;
        }

        /* Timeline */
        .dt-timeline {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-timeline-content {
          background: var(--surface);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-timeline-track {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 32px;
        }

        .dt-timeline-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .dt-timeline-weeks {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          min-width: 100px;
          text-align: right;
        }

        .dt-timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--gri-glow);
          box-shadow: 0 0 10px var(--gri-glow);
        }

        .dt-timeline-task {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          flex: 1;
        }

        .dt-timeline-total {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          background: var(--background-primary);
          border-radius: 12px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .dt-timeline-total svg {
          color: var(--gri-glow);
        }

        /* Payment */
        .dt-payment {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-payment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .dt-payment-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-payment-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
          text-align: center;
        }

        .dt-payment-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dt-payment-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px;
          background: var(--background-primary);
          border-radius: 8px;
        }

        .dt-payment-month {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .dt-payment-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          color: var(--gri-glow);
          font-weight: 700;
        }

        .dt-payment-desc {
          font-family: 'PT Sans', sans-serif;
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Benefits */
        .dt-benefits {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }

        .dt-benefit-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            4px 4px 8px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
        }

        .dt-benefit-card svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        /* Additional */
        .dt-additional {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .dt-additional-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-additional-card svg {
          color: var(--gri-glow);
          margin-bottom: 16px;
        }

        .dt-additional-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .dt-additional-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .dt-additional-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--gri-glow);
          font-weight: 700;
        }

        /* CTA */
        .dt-cta {
          padding: 80px 0 120px;
          background: linear-gradient(135deg, var(--background-secondary) 0%, var(--background-primary) 100%);
          text-align: center;
        }

        .dt-cta-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 20px;
          color: var(--text-secondary);
          margin: 0 0 32px 0;
        }

        .dt-cta-button {
          padding: 20px 48px;
          background: var(--gri-glow);
          border: none;
          border-radius: 12px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          cursor: pointer;
          box-shadow: 
            0 8px 24px rgba(255, 154, 77, 0.4),
            0 0 40px rgba(255, 154, 77, 0.3);
          transition: all 0.3s;
        }

        .dt-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 12px 32px rgba(255, 154, 77, 0.5),
            0 0 60px rgba(255, 154, 77, 0.4);
        }

        @media (max-width: 968px) {
          .dt-service-info {
            grid-template-columns: 1fr;
          }

          .dt-table-header,
          .dt-table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .dt-table-header span:not(:first-child),
          .dt-table-row span:not(:first-child) {
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .dt-container {
            padding: 0 16px;
          }

          .dt-service-content {
            padding: 20px;
          }

          .dt-service-header {
            padding: 20px;
          }

          .dt-service-block ul {
            grid-template-columns: 1fr;
          }

          .dt-timeline-content {
            padding: 24px;
          }

          .dt-timeline-weeks {
            min-width: auto;
            text-align: left;
            font-size: 12px;
          }

          .dt-benefit-card {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
