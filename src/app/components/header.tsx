import { Phone, Info } from "lucide-react";

type Page = "home" | "about" | "catalog" | "delivery" | "payment" | "contacts";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenInfo: (title: string, description: string) => void;
}

export function Header({ currentPage, onNavigate, onOpenInfo }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-module">
          <div className="logo" onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
            <div className="logo-bulb">
              <svg viewBox="0 0 60 80" className="bulb-svg">
                <defs>
                  <radialGradient id="bulbGlow" cx="50%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#ffd7a8" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ff6600" stopOpacity="0.2" />
                  </radialGradient>
                  <filter id="bulbBlur">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Bulb glass */}
                <ellipse cx="30" cy="35" rx="22" ry="26" fill="url(#bulbGlow)" filter="url(#bulbBlur)" />
                {/* Filament */}
                <path d="M24 35 Q30 20 36 35" stroke="#ff8800" strokeWidth="1.5" fill="none" opacity="0.8" />
                <path d="M26 35 Q30 24 34 35" stroke="#ffaa00" strokeWidth="1" fill="none" opacity="0.6" />
                {/* Base */}
                <rect x="24" y="58" width="12" height="12" fill="#888" rx="1" />
                <rect x="23" y="68" width="14" height="4" fill="#666" rx="0.5" />
                {/* Contact */}
                <circle cx="30" cy="74" r="2" fill="#444" />
              </svg>
            </div>
            <div className="logo-text-container">
              <span className="logo-text">PLATO</span>
              <span className="logo-separator">-</span>
              <span className="logo-subtext">INTEL</span>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <button 
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >
            ГЛАВНАЯ
          </button>
          <button 
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={() => onNavigate("about")}
          >
            О КОМПАНИИ
          </button>
          <button 
            className={`nav-link ${currentPage === "catalog" ? "active" : ""}`}
            onClick={() => onNavigate("catalog")}
          >
            КАТАЛОГ
          </button>
          <button 
            className={`nav-link ${currentPage === "delivery" ? "active" : ""}`}
            onClick={() => onNavigate("delivery")}
          >
            ДОСТАВКА
          </button>
          <button 
            className={`nav-link ${currentPage === "payment" ? "active" : ""}`}
            onClick={() => onNavigate("payment")}
          >
            ОПЛАТА
          </button>
          <button 
            className={`nav-link ${currentPage === "contacts" ? "active" : ""}`}
            onClick={() => onNavigate("contacts")}
          >
            КОНТАКТЫ
          </button>
        </nav>

        <div className="contacts-module">
          <button 
            className="info-button"
            onClick={() => onOpenInfo("Навигация", "Используйте меню для перехода по разделам сайта. Каждый раздел содержит подробную информацию о наших продуктах и услугах.")}
            title="Информация"
          >
            <Info size={20} />
          </button>
          <a href="tel:+375296155672" className="phone-link">
            +375 (29) 615-56-72
          </a>
          <button className="call-button">
            <Phone size={18} />
            <span>ЗВОНОК</span>
          </button>
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: var(--background-secondary);
          box-shadow:
            4px 4px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          z-index: 1000;
          transition: all 0.3s;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 280px 1fr 320px;
          gap: 40px;
          align-items: center;
        }

        .logo-module {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-bulb {
          width: 50px;
          height: 70px;
          flex-shrink: 0;
        }

        .bulb-svg {
          width: 100%;
          height: 100%;
          animation: bulb-pulse 3s infinite ease-in-out;
        }

        @keyframes bulb-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px #ffaa00) drop-shadow(0 0 16px #ff8800);
          }
          50% {
            filter: drop-shadow(0 0 12px #ffaa00) drop-shadow(0 0 24px #ff8800) drop-shadow(0 0 32px #ff6600);
          }
        }

        .logo-text-container {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .logo-separator {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          color: var(--gri-glow);
        }

        .logo-subtext {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.12em;
          color: var(--gri-glow);
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .nav-link {
          padding: 8px 14px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: var(--text-secondary);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 154, 77, 0.1);
        }

        .nav-link.active {
          color: var(--gri-glow);
          background: rgba(255, 154, 77, 0.15);
          box-shadow: 0 0 12px rgba(255, 154, 77, 0.3);
        }

        .contacts-module {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
        }

        .info-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .info-button:hover {
          color: var(--gri-glow);
          border-color: var(--gri-glow);
          box-shadow: 0 0 12px rgba(255, 154, 77, 0.3);
        }

        .phone-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .phone-link:hover {
          color: var(--gri-glow);
        }

        .call-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          border: none;
          border-radius: 8px;
          color: var(--accent-green);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          cursor: pointer;
          box-shadow:
            3px 3px 6px var(--shadow-dark),
            -1px -1px 4px var(--shadow-light);
          transition: all 0.3s;
        }

        .call-button:hover {
          box-shadow:
            2px 2px 4px var(--shadow-dark),
            -1px -1px 3px var(--shadow-light),
            0 0 15px rgba(74, 222, 128, 0.3);
        }

        .call-button:active {
          box-shadow:
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02);
        }

        @media (max-width: 1200px) {
          .header-container {
            grid-template-columns: 240px 1fr auto;
            gap: 20px;
          }

          .nav-link {
            font-size: 12px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 968px) {
          .header-container {
            grid-template-columns: 1fr auto;
            gap: 12px;
          }

          .main-nav {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .site-header {
            height: 56px;
          }
          
          .header-container {
            padding: 0 16px;
            gap: 8px;
          }

          .logo-bulb {
            width: 32px;
            height: 44px;
          }
          
          .logo-text-container {
            gap: 1px;
          }

          .logo-text {
            font-size: 20px;
          }
          
          .logo-separator {
            font-size: 14px;
          }

          .logo-subtext {
            font-size: 14px;
          }
          
          .info-button {
            width: 32px;
            height: 32px;
          }
          
          .info-button svg {
            width: 16px;
            height: 16px;
          }

          .phone-link {
            display: none;
          }

          .call-button {
            padding: 8px 12px;
          }
          
          .call-button span {
            display: none;
          }
          
          .call-button svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </header>
  );
}
