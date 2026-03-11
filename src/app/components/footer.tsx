export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span className="logo-text">PLATO-INTEL</span>
            <span className="logo-domain">.by</span>
          </div>
          <p className="footer-description">
            Надёжный поставщик электротехнического оборудования для промышленности с 2003 года
          </p>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">КАТАЛОГ</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Автоматические выключатели</a></li>
            <li><a href="#" className="footer-link">Магнитные пускатели</a></li>
            <li><a href="#" className="footer-link">Контакторы</a></li>
            <li><a href="#" className="footer-link">Гидротолкатели</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">УСЛУГИ</h4>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Подбор оборудования</a></li>
            <li><a href="#" className="footer-link">Доставка по РБ и СНГ</a></li>
            <li><a href="#" className="footer-link">Гарантийное обслуживание</a></li>
            <li><a href="#" className="footer-link">Техническая поддержка</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-heading">КОНТАКТЫ</h4>
          <ul className="footer-links">
            <li className="footer-link">г. Минск, ул. Промышленная, 15</li>
            <li><a href="tel:+375291234567" className="footer-link">+375 (29) 123-45-67</a></li>
            <li><a href="mailto:info@plato-intel.by" className="footer-link">info@plato-intel.by</a></li>
            <li className="footer-link">Пн-Пт: 9:00 - 18:00</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-copyright">
            © 2003-2026 PLATO-INTEL.BY — Все права защищены
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--background-primary);
          border-top: 1px solid var(--grid-lines);
          position: relative;
        }

        .site-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--grid-lines) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-lines) 1px, transparent 1px);
          background-size: 8.333% 100%, 100% 8.333%;
          opacity: 0.2;
          pointer-events: none;
        }

        .footer-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 5%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .logo-domain {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          color: var(--gri-glow);
        }

        .footer-description {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .footer-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-transform: uppercase;
          margin: 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.3s;
        }

        a.footer-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--grid-lines);
          position: relative;
        }

        .footer-bottom .footer-container {
          padding: 24px 5%;
          display: block;
        }

        .footer-copyright {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-secondary);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
            padding: 40px 20px;
            gap: 32px;
          }

          .footer-bottom .footer-container {
            padding: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
