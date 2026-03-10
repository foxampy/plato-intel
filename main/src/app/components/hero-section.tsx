import { GRICounter } from "./gri-counter";
import { NeomorphButton } from "./neomorph-button";
import { RotarySwitch } from "./rotary-switch";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="grid-overlay"></div>
      
      <div className="hero-container">
        <div className="left-module">
          <h1 className="hero-headline">
            ЭЛЕКТРОТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ ДЛЯ ПРОМЫШЛЕННОСТИ
          </h1>
          
          <p className="hero-subheadline">
            Реле, пускатели, контакторы, гидротолкатели — поставки по РБ и СНГ
          </p>
          
          <div className="gri-counters">
            <GRICounter value="20+" label="ЛЕТ НА РЫНКЕ" delay={200} />
            <GRICounter value="12" label="МЕСЯЦЕВ ГАРАНТИИ" delay={400} />
            <GRICounter value="340+" label="ЗАКРЫТЫХ ПРОЕКТОВ" delay={600} />
          </div>
          
          <div className="cta-buttons">
            <NeomorphButton variant="primary">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </NeomorphButton>
            <NeomorphButton variant="secondary">
              СКАЧАТЬ КАТАЛОГ
            </NeomorphButton>
          </div>
        </div>
        
        <div className="right-module">
          <div className="product-silhouette">
            <svg viewBox="0 0 300 400" className="silhouette-svg">
              <defs>
                <radialGradient id="bgGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="var(--gri-dim)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect fill="url(#bgGlow)" width="300" height="400" />
              
              {/* Контур гидротолкателя */}
              <path 
                d="M100,50 L200,50 L200,120 L220,120 L220,200 L200,200 L200,350 L100,350 L100,200 L80,200 L80,120 L100,120 Z"
                fill="none"
                stroke="var(--gri-glow)"
                strokeWidth="2"
                opacity="0.3"
                className="device-outline"
              />
              
              {/* Индикаторы */}
              <circle cx="150" cy="85" r="8" fill="var(--gri-core)" className="indicator pulse" />
              <circle cx="150" cy="150" r="6" fill="var(--accent-green)" className="indicator pulse" />
              <circle cx="150" cy="180" r="6" fill="var(--gri-core)" opacity="0.5" className="indicator pulse" />
              
              {/* Детали корпуса */}
              <rect x="120" y="250" width="60" height="80" fill="none" stroke="var(--gri-glow)" strokeWidth="1" opacity="0.2" />
              <line x1="140" y1="250" x2="140" y2="330" stroke="var(--grid-lines)" strokeWidth="1" />
              <line x1="160" y1="250" x2="160" y2="330" stroke="var(--grid-lines)" strokeWidth="1" />
            </svg>
          </div>
          
          <RotarySwitch />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding: 100px 5%;
          background: var(--background-primary);
          overflow: hidden;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.4;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 60px;
          align-items: center;
        }

        .left-module {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .hero-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          line-height: 1.2;
          text-transform: uppercase;
          margin: 0;
        }

        .hero-subheadline {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .gri-counters {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          margin-top: 16px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 16px;
        }

        .right-module {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
        }

        .product-silhouette {
          width: 100%;
          max-width: 300px;
        }

        .silhouette-svg {
          width: 100%;
          height: auto;
        }

        .device-outline {
          animation: outline-pulse 4s infinite;
        }

        .indicator {
          animation: indicator-blink 2s infinite;
        }

        .indicator:nth-child(3) {
          animation-delay: 0.3s;
        }

        .indicator:nth-child(4) {
          animation-delay: 0.6s;
        }

        @keyframes outline-pulse {
          0%, 100% { opacity: 0.3; stroke: var(--gri-glow); }
          50% { opacity: 0.5; stroke: var(--gri-core); }
        }

        @keyframes indicator-blink {
          0%, 80%, 100% { opacity: 1; }
          85%, 95% { opacity: 0.3; }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          
          .right-module {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 80px 20px;
          }

          .gri-counters {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
