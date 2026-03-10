import { Phone } from "lucide-react";
import { BurgerMenu } from "./burger-menu";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-module">
          <div className="logo">
            <span className="logo-text">PLATO-INTEL</span>
            <span className="logo-domain">.by</span>
          </div>
        </div>

        <div className="search-module">
          <input
            type="text"
            placeholder="Поиск по каталогу..."
            className="search-input"
          />
        </div>

        <div className="contacts-module">
          <a href="tel:+375291234567" className="phone-link">
            +375 (29) 123-45-67
          </a>
          <button className="call-button">
            <Phone size={18} />
            <span>ЗВОНОК</span>
          </button>
          <BurgerMenu onNavigate={onNavigate} />
        </div>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
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
          grid-template-columns: 250px 1fr 300px;
          gap: 40px;
          align-items: center;
        }

        .logo-module {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .logo-domain {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          color: var(--gri-glow);
        }

        .search-module {
          display: flex;
          align-items: center;
        }

        .search-input {
          width: 100%;
          height: 44px;
          padding: 0 20px;
          background: var(--surface);
          border: 1px solid var(--grid-lines);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          transition: all 0.3s;
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02);
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--accent-green);
          box-shadow: 
            inset 2px 2px 4px rgba(0,0,0,0.3),
            inset -1px -1px 3px rgba(255,255,255,0.02),
            0 0 0 2px rgba(74, 222, 128, 0.2);
        }

        .contacts-module {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: flex-end;
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

        @media (max-width: 1024px) {
          .header-container {
            grid-template-columns: auto 1fr auto;
            gap: 20px;
          }

          .phone-link {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .site-header {
            height: 64px;
          }

          .header-container {
            grid-template-columns: 1fr auto;
            gap: 12px;
          }

          .search-module {
            display: none;
          }

          .call-button span {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
