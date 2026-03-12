import { NixieTubeAdvanced } from "../components/nixie-tube-advanced";
import { 
  Search, GitCompare, Bot, MessageSquare, Package, User, 
  ChevronRight, BarChart3, Clock, CheckCircle2, TrendingUp,
  Users, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "УМНЫЙ ПОИСК",
    description: "Галетный переключатель: по производителю, назначению, артикулу"
  },
  {
    icon: GitCompare,
    title: "СРАВНЕНИЕ",
    description: "До 4 товаров одновременно. Характеристики в таблице"
  },
  {
    icon: Bot,
    title: "ИИ-КОНСУЛЬТАНТ",
    description: "Обучен на документации. Работает 24/7"
  },
  {
    icon: MessageSquare,
    title: "TELEGRAM-БОТ",
    description: "Каталог в мессенджере. Уведомления о заказах"
  },
  {
    icon: Package,
    title: "СОПУТСТВУЮЩИЕ",
    description: "Расходники, альтернативы, готовые решения"
  },
  {
    icon: User,
    title: "ЛИЧНЫЙ КАБИНЕТ",
    description: "История заказов, избранное, документы"
  }
];

const targetAudience = [
  {
    role: "ИНЖЕНЕР-ЭЛЕКТРИК",
    needs: "Быстрый поиск по артикулу, точные характеристики, сравнение аналогов"
  },
  {
    role: "ГЛАВНЫЙ ИНЖЕНЕР",
    needs: "Проверка поставщика, портфолио проектов, рекомендации"
  },
  {
    role: "СНАБЖЕНЕЦ",
    needs: "Цены, наличие на складе, сроки поставки"
  }
];

const stages = [
  {
    title: "ЭТАП 1: ФУНДАМЕНТ",
    duration: "2 месяца",
    items: [
      { name: "Новый сайт в уникальном стиле", effect: "SEO-ready, 8+ страниц, адаптив" },
      { name: "ИИ-менеджер 24/7", effect: "Обучен на товарах, интегрирован в CRM" },
      { name: "Телеграм-бот с каталогом", effect: "Дублирует сайт, рассылки, уведомления" },
      { name: "CRM-система", effect: "Клиенты, сделки, задачи, аналитика" },
      { name: "Система сопутствующих товаров", effect: "Апселл, кросс-селл, бандлы" }
    ]
  },
  {
    title: "ЭТАП 2: РАЗВИТИЕ",
    duration: "постоянно",
    items: [
      { name: "Автоматизированное SEO", effect: "Рост трафика 20-30%/год без ручного труда" },
      { name: "Сквозная аналитика", effect: "Понимание ROI каждого канала" }
    ]
  }
];

const benefits = [
  { icon: Users, text: "ИИ отвечает на вопросы — менеджер только на сложное" },
  { icon: CheckCircle2, text: "Все заявки в CRM со статусами и напоминаниями" },
  { icon: BarChart3, text: "Полная аналитика: источник → страница → заявка → сделка" },
  { icon: Clock, text: "ИИ работает 24/7, клиент получает ответ мгновенно" }
];

const forecast = [
  { label: "ВИЗИТОВ/МЕС", before: "600", after: "1200", growth: "+100%" },
  { label: "КОНВЕРСИЯ", before: "0.5%", after: "2.5%", growth: "+400%" },
  { label: "ЗАЯВОК/МЕС", before: "3", after: "30", growth: "+900%" },
  { label: "СРЕДНИЙ ЧЕК", before: "500", after: "625", growth: "+25%" }
];

const pricing = {
  market: {
    min: "8500",
    max: "19500",
    items: [
      "Сайт с каталогом: 3,000-8,000",
      "ИИ-чат-бот: 1,200-2,000",
      "Telegram-бот: 800-1,500",
      "CRM-система: 2,000-5,000",
      "Аналитика: 1,500-3,000"
    ]
  },
  our: {
    price: "6900",
    prepay: "2070",
    support: "400"
  }
};

export function DigitalTransformationPage() {
  return (
    <div className="digital-page">
      {/* Hero */}
      <section className="dt-hero">
        <div className="dt-container">
          <div className="dt-hero-badge">КОМПЛЕКСНОЕ РЕШЕНИЕ</div>
          <h1 className="dt-hero-title">ЦИФРОВАЯ ТРАНСФОРМАЦИЯ</h1>
          <p className="dt-hero-text">
            Комплексное обновление цифровой инфраструктуры <strong>ООО «Плато-Интел»</strong>. 
            Не просто сайт — а полная автоматизация: от первого клика клиента до закрытия сделки.
          </p>
          <div className="dt-hero-stats">
            <div className="dt-stat">
              <NixieTubeAdvanced value="6900" label="BYN" size="medium" />
              <span>Полный комплекс</span>
            </div>
            <div className="dt-stat-divider">/</div>
            <div className="dt-stat">
              <NixieTubeAdvanced value="593" label="% ROI" size="medium" />
              <span>Окупаемость 1.7 мес</span>
            </div>
          </div>
        </div>
      </section>

      {/* Концепция */}
      <section className="dt-concept">
        <div className="dt-container">
          <h2 className="dt-section-title">КОНЦЕПЦИЯ: ТЁПЛЫЙ ИНДУСТРИАЛЬНЫЙ НЕОМОРФИЗМ</h2>
          <div className="dt-concept-content">
            <p>
              Современный тактильный дизайн, понятный инженерам 40-50 лет, с узнаваемыми элементами 
              советской инженерии. <strong>Газоразрядные индикаторы (ГРИ)</strong> вызывают ностальгию 
              без слабости, ассоциируются с надёжностью. <strong>Неоморфизм</strong> даёт тактильность 
              и выпуклые панели. <strong>Конструктивизм</strong> обеспечивает структуру, геометрию 
              и промышленную эстетику.
            </p>
          </div>
        </div>
      </section>

      {/* Функции */}
      <section className="dt-features">
        <div className="dt-container">
          <h2 className="dt-section-title">ЧТО УМЕЕТ СИСТЕМА</h2>
          <div className="dt-features-grid">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="dt-feature-card">
                  <div className="dt-feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Целевая аудитория */}
      <section className="dt-audience">
        <div className="dt-container">
          <h2 className="dt-section-title">ДЛЯ КОГО ЭТОТ ПРОЕКТ</h2>
          <div className="dt-audience-grid">
            {targetAudience.map((audience, idx) => (
              <div key={idx} className="dt-audience-card">
                <h3>{audience.role}</h3>
                <p>{audience.needs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Этапы */}
      <section className="dt-stages">
        <div className="dt-container">
          <h2 className="dt-section-title">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2>
          <div className="dt-stages-grid">
            {stages.map((stage, idx) => (
              <div key={idx} className="dt-stage-card">
                <div className="dt-stage-header">
                  <h3>{stage.title}</h3>
                  <span>{stage.duration}</span>
                </div>
                <div className="dt-stage-items">
                  {stage.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="dt-stage-item">
                      <div className="dt-stage-dot"></div>
                      <div>
                        <span className="dt-stage-name">{item.name}</span>
                        <span className="dt-stage-effect">{item.effect}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="dt-benefits">
            <h3>КАК ЭТО РАЗГРУЖАЕТ РАБОТУ</h3>
            <div className="dt-benefits-grid">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="dt-benefit-item">
                    <Icon size={24} />
                    <span>{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Прогноз */}
      <section className="dt-forecast">
        <div className="dt-container">
          <h2 className="dt-section-title">ОЖИДАЕМЫЕ ЭФФЕКТЫ</h2>
          <p className="dt-forecast-subtitle">Прогноз на 12 месяцев работы</p>
          <div className="dt-forecast-grid">
            {forecast.map((item, idx) => (
              <div key={idx} className="dt-forecast-card">
                <div className="dt-forecast-label">{item.label}</div>
                <div className="dt-forecast-values">
                  <span className="dt-forecast-before">{item.before}</span>
                  <ArrowRight size={20} />
                  <span className="dt-forecast-after">{item.after}</span>
                </div>
                <div className="dt-forecast-growth">{item.growth}</div>
              </div>
            ))}
          </div>
          <div className="dt-roi">
            <span>ROI: </span>
            <NixieTubeAdvanced value="593" label="% за год" size="small" />
          </div>
        </div>
      </section>

      {/* Стоимость */}
      <section className="dt-pricing">
        <div className="dt-container">
          <h2 className="dt-section-title">СТОИМОСТЬ ПРОЕКТА</h2>
          <div className="dt-pricing-grid">
            <div className="dt-pricing-card dt-pricing-market">
              <h3>РЫНОК БЕЛАРУСИ</h3>
              <p className="dt-pricing-range">{pricing.market.min} - {pricing.market.max} BYN</p>
              <ul>
                {pricing.market.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dt-pricing-card dt-pricing-our">
              <div className="dt-pricing-badge">НАШЕ ПРЕДЛОЖЕНИЕ</div>
              <h3>ПОЛНЫЙ КОМПЛЕКС</h3>
              <div className="dt-pricing-main">
                <NixieTubeAdvanced value={pricing.our.price} label="BYN" size="large" />
              </div>
              <p className="dt-pricing-saving">Экономия от <strong>40% до 65%</strong></p>
              <ul className="dt-pricing-includes">
                <li><ChevronRight size={16} /> Уникальный дизайн</li>
                <li><ChevronRight size={16} /> Полная автоматизация</li>
                <li><ChevronRight size={16} /> Все включено</li>
              </ul>
            </div>
          </div>

          <div className="dt-pricing-details">
            <div className="dt-detail-card">
              <h4>ПРЕДОПЛАТА 30%</h4>
              <NixieTubeAdvanced value={pricing.our.prepay} label="BYN" size="small" />
              <p>Покрывает дизайн-концепцию и старт работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dt-cta">
        <div className="dt-container">
          <p className="dt-cta-text">
            Оставьте контакт — мы покажем прототип, обсудим детали, подготовим индивидуальное предложение
          </p>
          <button className="dt-cta-button">
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
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
          padding: 100px 0 80px;
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
          font-size: clamp(36px, 6vw, 64px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 24px 0;
        }

        .dt-hero-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 40px;
        }

        .dt-hero-text strong {
          color: var(--text-primary);
        }

        .dt-hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .dt-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .dt-stat span {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .dt-stat-divider {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--grid-lines);
        }

        /* Concept */
        .dt-concept {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-concept-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-concept-content p {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
        }

        .dt-concept-content strong {
          color: var(--gri-glow);
        }

        /* Features */
        .dt-features {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .dt-feature-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 12px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          transition: all 0.3s;
        }

        .dt-feature-card:hover {
          transform: translateY(-4px);
        }

        .dt-feature-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background-primary);
          border-radius: 12px;
          margin: 0 auto 20px;
          color: var(--gri-glow);
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.4);
        }

        .dt-feature-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .dt-feature-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Audience */
        .dt-audience {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .dt-audience-card {
          padding: 32px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: 1px solid rgba(255, 154, 77, 0.2);
          border-radius: 12px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-audience-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--gri-glow);
          margin: 0 0 16px 0;
        }

        .dt-audience-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Stages */
        .dt-stages {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-stages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .dt-stage-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-stage-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--grid-lines);
        }

        .dt-stage-header h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
        }

        .dt-stage-header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--gri-glow);
          padding: 4px 12px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 20px;
        }

        .dt-stage-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dt-stage-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .dt-stage-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gri-glow);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .dt-stage-name {
          display: block;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dt-stage-effect {
          display: block;
          font-family: 'PT Sans', sans-serif;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .dt-benefits {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-benefits h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 24px 0;
        }

        .dt-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .dt-benefit-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--background-primary);
          border-radius: 12px;
        }

        .dt-benefit-item svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .dt-benefit-item span {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Forecast */
        .dt-forecast {
          padding: 80px 0;
          background: var(--background-primary);
        }

        .dt-forecast-subtitle {
          text-align: center;
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-secondary);
          margin: -32px 0 40px 0;
        }

        .dt-forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .dt-forecast-card {
          padding: 32px;
          background: var(--surface);
          border-radius: 12px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-forecast-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .dt-forecast-values {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .dt-forecast-before {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          color: var(--text-secondary);
          text-decoration: line-through;
          opacity: 0.6;
        }

        .dt-forecast-values svg {
          color: var(--gri-glow);
        }

        .dt-forecast-after {
          font-family: 'JetBrains Mono', monospace;
          font-size: 24px;
          color: var(--text-primary);
          font-weight: 700;
        }

        .dt-forecast-growth {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: var(--accent-green);
        }

        .dt-roi {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-roi span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        /* Pricing */
        .dt-pricing {
          padding: 80px 0;
          background: var(--background-secondary);
        }

        .dt-pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .dt-pricing-card {
          padding: 40px;
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-pricing-market h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 16px 0;
        }

        .dt-pricing-range {
          font-family: 'JetBrains Mono', monospace;
          font-size: 24px;
          color: var(--text-secondary);
          text-align: center;
          margin: 0 0 24px 0;
        }

        .dt-pricing-market ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dt-pricing-market li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          padding-left: 20px;
          position: relative;
        }

        .dt-pricing-market li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--text-secondary);
        }

        .dt-pricing-our {
          position: relative;
          border: 2px solid var(--gri-glow);
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
        }

        .dt-pricing-badge {
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

        .dt-pricing-our h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 24px 0;
        }

        .dt-pricing-main {
          display: flex;
          justify-content: center;
          margin: 24px 0;
        }

        .dt-pricing-saving {
          text-align: center;
          padding: 16px;
          background: rgba(255, 154, 77, 0.1);
          border-radius: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
          margin: 0 0 24px 0;
        }

        .dt-pricing-saving strong {
          color: var(--gri-glow);
          font-size: 20px;
        }

        .dt-pricing-includes {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dt-pricing-includes li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
        }

        .dt-pricing-includes li svg {
          color: var(--gri-glow);
        }

        .dt-pricing-details {
          display: flex;
          justify-content: center;
        }

        .dt-detail-card {
          padding: 32px 48px;
          background: var(--surface);
          border-radius: 16px;
          text-align: center;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
        }

        .dt-detail-card h4 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0 0 16px 0;
        }

        .dt-detail-card p {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          margin: 16px 0 0 0;
        }

        /* CTA */
        .dt-cta {
          padding: 80px 0 120px;
          background: var(--background-primary);
          text-align: center;
        }

        .dt-cta-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 32px auto;
        }

        .dt-cta-button {
          padding: 20px 48px;
          background: var(--gri-glow);
          border: none;
          border-radius: 12px;
          color: var(--background-primary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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

        @media (max-width: 768px) {
          .dt-container {
            padding: 0 16px;
          }

          .dt-hero {
            padding: 60px 0;
          }

          .dt-hero-stats {
            flex-direction: column;
            gap: 16px;
          }

          .dt-stat-divider {
            display: none;
          }

          .dt-stages-grid {
            grid-template-columns: 1fr;
          }

          .dt-pricing-grid {
            grid-template-columns: 1fr;
          }

          .dt-benefits-grid {
            grid-template-columns: 1fr;
          }

          .dt-forecast-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
