import { Construction, Zap, Factory, Cog, Building, Tractor } from "lucide-react";

const industries = [
  { icon: Construction, title: "Крановое оборудование", featured: true },
  { icon: Zap, title: "Энергетика", featured: false },
  { icon: Factory, title: "Металлургия", featured: false },
  { icon: Cog, title: "Машиностроение", featured: false },
  { icon: Building, title: "ЖКХ", featured: false },
  { icon: Tractor, title: "Агропром", featured: false }
];

export function SolutionsSection() {
  return (
    <section className="solutions-section">
      <div className="section-container">
        <h2 className="section-title">ОТРАСЛЕВЫЕ РЕШЕНИЯ</h2>
        
        <div className="solutions-grid">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div 
                key={idx} 
                className={`solution-card ${industry.featured ? 'featured' : ''}`}
              >
                <div className="solution-icon">
                  <Icon size={industry.featured ? 64 : 40} />
                </div>
                <h3 className="solution-title">{industry.title}</h3>
                <div className="solution-glow"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solutions-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
        }

        .solutions-section::before {
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

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .solution-card {
          position: relative;
          padding: 32px 24px;
          background: var(--surface);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 200px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .solution-card.featured {
          grid-column: span 2;
          grid-row: span 2;
          min-height: 400px;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .solution-card:hover .solution-glow {
          opacity: 1;
        }

        .solution-card:hover .solution-icon {
          color: var(--gri-glow);
          transform: scale(1.1);
        }

        .solution-icon {
          color: var(--text-secondary);
          transition: all 0.3s;
          position: relative;
          z-index: 2;
        }

        .solution-title {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .solution-card.featured .solution-title {
          font-size: 24px;
        }

        .solution-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.2) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .solution-card.featured {
            grid-column: span 2;
            grid-row: span 1;
            min-height: 250px;
          }
        }

        @media (max-width: 640px) {
          .solutions-section {
            padding: 80px 20px;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .solution-card.featured {
            grid-column: span 1;
            grid-row: span 1;
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}