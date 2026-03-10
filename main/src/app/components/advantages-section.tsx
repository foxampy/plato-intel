import { GRICounter } from "./gri-counter";
import { Warehouse } from "lucide-react";

const advantages = [
  {
    type: "gri",
    value: "20+",
    label: "ЛЕТ ОПЫТА",
    text: "С 2003 года поставляем оборудование для промышленности"
  },
  {
    type: "gri",
    value: "12",
    label: "МЕСЯЦЕВ ГАРАНТИИ",
    text: "Расширенная гарантия на всё оборудование"
  },
  {
    type: "gri",
    value: "340+",
    label: "ПРОЕКТОВ",
    text: "Реализованные поставки для крупнейших предприятий РБ"
  },
  {
    type: "icon",
    label: "НАЛИЧИЕ",
    text: "Склад в Минске, отгрузка в день заказа"
  }
];

export function AdvantagesSection() {
  return (
    <section className="advantages-section">
      <div className="section-container">
        <h2 className="section-title">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        
        <div className="advantages-strip">
          {advantages.map((adv, idx) => (
            <div key={idx} className="advantage-module">
              {adv.type === "gri" ? (
                <div className="gri-wrapper">
                  <GRICounter value={adv.value} label="" delay={idx * 200} />
                </div>
              ) : (
                <div className="icon-wrapper">
                  <Warehouse size={48} />
                </div>
              )}
              <h3 className="advantage-title">{adv.label}</h3>
              <p className="advantage-text">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .advantages-section {
          padding: 120px 5%;
          background: var(--background-primary);
          position: relative;
        }

        .advantages-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.3;
          pointer-events: none;
        }

        .section-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-align: center;
          margin: 0 0 64px 0;
          text-transform: uppercase;
        }

        .advantages-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .advantage-module {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .gri-wrapper {
          margin-bottom: 8px;
        }

        .icon-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          color: var(--gri-glow);
          margin-bottom: 8px;
        }

        .advantage-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .advantage-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          max-width: 280px;
        }

        @media (max-width: 768px) {
          .advantages-section {
            padding: 80px 20px;
          }

          .advantages-strip {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
