import { Zap, Power, Thermometer, Cpu, Gauge, Wrench, Magnet, ToggleLeft } from "lucide-react";

const products = [
  { icon: Zap, title: "Автоматические выключатели" },
  { icon: Power, title: "Магнитные пускатели" },
  { icon: Thermometer, title: "Тепловые реле" },
  { icon: Cpu, title: "Контакторы" },
  { icon: Gauge, title: "Гидротолкатели" },
  { icon: Wrench, title: "Крановые тормоза" },
  { icon: Magnet, title: "Электромагниты" },
  { icon: ToggleLeft, title: "Концевые выключатели" }
];

export function ProductsSection() {
  return (
    <section className="products-section">
      <div className="section-container">
        <h2 className="section-title">КАТАЛОГ ОБОРУДОВАНИЯ</h2>
        
        <div className="products-grid">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div key={idx} className="product-card">
                <div className="product-icon">
                  <Icon size={32} />
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="card-glow"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 120px 5%;
          background: var(--background-secondary);
          position: relative;
        }

        .products-section::before {
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

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .product-card {
          position: relative;
          padding: 40px 24px;
          background: var(--surface);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .product-card:hover .card-glow {
          opacity: 1;
        }

        .product-card:hover .product-icon {
          color: var(--gri-glow);
        }

        .product-icon {
          color: var(--text-secondary);
          transition: color 0.3s;
          position: relative;
          z-index: 2;
        }

        .product-title {
          font-family: 'PT Sans', sans-serif;
          font-size: 16px;
          color: var(--text-primary);
          text-align: center;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.15) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .products-section {
            padding: 80px 20px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
