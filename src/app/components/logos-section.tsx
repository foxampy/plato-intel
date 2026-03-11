export function LogosSection() {
  // Логотипы производителей в виде текста (можно заменить на реальные изображения)
  const logos = [
    { name: "ABB", glow: true },
    { name: "SCHNEIDER", glow: true },
    { name: "SIEMENS", glow: true },
    { name: "LEGRAND", glow: false },
    { name: "EATON", glow: true },
    { name: "CHINT", glow: false },
    { name: "IEK", glow: false },
    { name: "TDM", glow: false },
    { name: "EKF", glow: true },
    { name: "КЭАЗ", glow: false },
    { name: "КОНТАКТОР", glow: false },
    { name: "ЭТАЛ", glow: false }
  ];

  return (
    <section className="logos-section">
      <div className="section-container">
        <h2 className="section-title">ПРОИЗВОДИТЕЛИ С КОТОРЫМИ МЫ РАБОТАЕМ</h2>
        
        <div className="logos-grid">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className={`logo-card ${logo.glow ? 'featured' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="logo-display">
                <div className={`logo-text ${logo.glow ? 'nixie-glow' : ''}`}>
                  {logo.name}
                </div>
                {logo.glow && <div className="logo-backlight"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logos-section {
          padding: 120px 5%;
          background: var(--background-primary);
          position: relative;
          overflow: hidden;
        }

        .logos-section::before {
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

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          align-items: center;
        }

        .logo-card {
          position: relative;
          padding: 32px 24px;
          background: var(--surface);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 120px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: logo-appear 0.6s ease-out forwards;
        }

        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light);
        }

        .logo-card.featured {
          border: 1px solid rgba(255, 154, 77, 0.2);
        }

        .logo-card.featured:hover {
          border-color: rgba(255, 154, 77, 0.5);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 30px rgba(255, 154, 77, 0.2);
        }

        .logo-display {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          text-align: center;
          position: relative;
          z-index: 2;
          transition: all 0.3s;
        }

        .logo-text.nixie-glow {
          font-family: 'Nixie One', cursive;
          color: #ffd7a8;
          text-shadow: 
            0 0 5px #ffaa00,
            0 0 10px #ff8800,
            0 0 15px #ff6600;
        }

        .logo-card:hover .logo-text.nixie-glow {
          text-shadow: 
            0 0 8px #ffaa00,
            0 0 15px #ff8800,
            0 0 25px #ff6600,
            0 0 35px #ff4400;
        }

        .logo-backlight {
          position: absolute;
          inset: -20px;
          background: radial-gradient(
            circle at center,
            rgba(255, 154, 77, 0.15) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .logo-card.featured:hover .logo-backlight {
          opacity: 1;
          animation: backlight-pulse 2s infinite;
        }

        @keyframes logo-appear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backlight-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .logos-section {
            padding: 80px 20px;
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .logo-text {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .logos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
