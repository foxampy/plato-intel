// Страница в стиле советских плакатов и конструктивизма
// Вдохновлено работами Родченко, Лисицкого, плакатами 1920-30-х годов

import { useState, useEffect } from "react";

export function SovietConstructivismPage() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slogans = [
    "ЭЛЕКТРИФИКАЦИЯ ВСЕЙ СТРАНЫ",
    "МЕТАЛЛ — ЭТО СИЛА",
    "ТРУД СДЕЛАЛ ИЗ ОБЕЗЬЯНЫ ЧЕЛОВЕКА",
    "ВПЕРЁД, К НОВЫМ ПОБЕДАМ"
  ];

  return (
    <div className={`soviet-page ${glitchActive ? 'glitch' : ''}`}>
      {/* Геометрический фон с диагоналями */}
      <div className="soviet-bg">
        <div className="diag-line d1"></div>
        <div className="diag-line d2"></div>
        <div className="diag-line d3"></div>
        <div className="vert-line v1"></div>
        <div className="vert-line v2"></div>
        <div className="circle-frame"></div>
      </div>

      {/* Шапка с лозунгом */}
      <header className="soviet-header">
        <div className="red-block"></div>
        <div className="black-bar"></div>
        <h1 className="soviet-main-title">
          <span className="word-red">ПЛАТО</span>
          <span className="dash">—</span>
          <span className="word-black">ИНТЕЛ</span>
        </h1>
        <div className="slogan-banner">
          <div className="slogan-text">{slogans[0]}</div>
        </div>
      </header>

      {/* Геройский блок с фотомонтажем */}
      <section className="soviet-hero">
        <div className="hero-grid">
          <div className="hero-text-block">
            <h2 className="hero-title">
              <span className="line1">20 ЛЕТ</span>
              <span className="line2">НА СТРАЖЕ</span>
              <span className="line3">ПРОМЫШЛЕННОСТИ</span>
            </h2>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">340+</span>
                <span className="stat-label">ОБЪЕКТОВ</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">12</span>
                <span className="stat-label">МЕСЯЦЕВ</span>
              </div>
            </div>
          </div>
          <div className="hero-image-block">
            <div className="machine-silhouette"></div>
            <div className="red-triangle"></div>
            <div className="yellow-circle"></div>
          </div>
        </div>
        <div className="diagonal-stripe"></div>
      </section>

      {/* Плакат с продуктами */}
      <section className="soviet-products">
        <div className="poster-header">
          <div className="poster-num">01</div>
          <h3 className="poster-title">АВТОМАТИЧЕСКИЕ ВЫКЛЮЧАТЕЛИ</h3>
        </div>
        <div className="products-grid-constructivist">
          <div className="product-card-soviet">
            <div className="product-image-placeholder">
              <div className="machine-geometry"></div>
            </div>
            <div className="product-info-slanted">
              <span className="product-name">ВА-57-35</span>
              <span className="product-spec">1600А</span>
            </div>
            <div className="red-corner"></div>
          </div>
          <div className="product-card-soviet">
            <div className="product-image-placeholder">
              <div className="machine-geometry"></div>
            </div>
            <div className="product-info-slanted">
              <span className="product-name">ВА-55-41</span>
              <span className="product-spec">1000А</span>
            </div>
            <div className="yellow-corner"></div>
          </div>
          <div className="product-card-soviet featured">
            <div className="featured-banner">НОВИНКА</div>
            <div className="product-image-placeholder">
              <div className="machine-geometry large"></div>
            </div>
            <div className="product-info-slanted">
              <span className="product-name">ВА-99-63</span>
              <span className="product-spec">6300А</span>
            </div>
            <div className="black-corner"></div>
          </div>
        </div>
      </section>

      {/* Плакат с призывом */}
      <section className="soviet-cta-poster">
        <div className="cta-poster-bg">
          <div className="red-diagonal"></div>
          <div className="black-shape"></div>
        </div>
        <div className="cta-content">
          <h2 className="cta-title-soviet">
            <span className="cta-word">ЗАЯВКУ</span>
            <span className="cta-word">ПОДАЛ</span>
            <span className="cta-word">—</span>
            <span className="cta-word">ОБОРУДОВАНИЕ</span>
            <span className="cta-word">ПОЛУЧИЛ</span>
          </h2>
          <div className="cta-subtitle">
            ДОСТАВКА ЗА 24 ЧАСА ПО ВСЕЙ РЕСПУБЛИКЕ
          </div>
          <button className="soviet-button">
            <span className="btn-text">ОФОРМИТЬ ЗАЯВКУ</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Плакат производителей */}
      <section className="soviet-manufacturers">
        <h3 className="section-title-soviet">
          <span className="title-line">СОЮЗНЫЕ</span>
          <span className="title-line red">ПРОИЗВОДИТЕЛИ</span>
        </h3>
        <div className="manufacturers-construct">
          {['ABB', 'SIEMENS', 'SCHNEIDER', 'EATON', 'LEGRAND', 'КЭАЗ'].map((name, idx) => (
            <div key={idx} className="manufacturer-block" style={{ '--delay': idx * 0.1 + 's' } as React.CSSProperties}>
              <div className="mfg-number">{String(idx + 1).padStart(2, '0')}</div>
              <div className="mfg-name">{name}</div>
              <div className="mfg-bar"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Футер с геометрией */}
      <footer className="soviet-footer">
        <div className="footer-geometry">
          <div className="footer-red-block"></div>
          <div className="footer-black-bar"></div>
        </div>
        <div className="footer-content">
          <div className="footer-contact">
            <span className="contact-label">ТЕЛЕФОН:</span>
            <span className="contact-value">+375 (29) 615-56-72</span>
          </div>
          <div className="footer-slogan">
            ТРУД — ДЕЛО ЧЕСТИ!
          </div>
        </div>
      </footer>

      <style>{`
        .soviet-page {
          min-height: 100vh;
          background: #f5f0e8;
          color: #1a1a1a;
          font-family: 'Bebas Neue', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Фон с геометрией */
        .soviet-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .diag-line {
          position: absolute;
          height: 2px;
          background: #e8e0d0;
          transform-origin: left center;
        }

        .d1 { width: 150%; top: 20%; left: -25%; transform: rotate(-15deg); }
        .d2 { width: 150%; top: 60%; left: -25%; transform: rotate(10deg); }
        .d3 { width: 150%; top: 80%; left: -25%; transform: rotate(-5deg); }

        .vert-line {
          position: absolute;
          width: 2px;
          height: 100%;
          background: #e8e0d0;
        }

        .v1 { left: 15%; }
        .v2 { right: 15%; }

        .circle-frame {
          position: absolute;
          width: 400px;
          height: 400px;
          border: 2px solid #e8e0d0;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.3;
        }

        /* Шапка */
        .soviet-header {
          position: relative;
          padding: 40px 5%;
          z-index: 1;
          border-bottom: 4px solid #1a1a1a;
        }

        .red-block {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: #cc0000;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          z-index: -1;
        }

        .black-bar {
          position: absolute;
          top: 50%;
          right: 0;
          width: 45%;
          height: 40px;
          background: #1a1a1a;
          transform: translateY(-50%);
        }

        .soviet-main-title {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 0;
          font-size: clamp(48px, 8vw, 96px);
          letter-spacing: 0.15em;
          position: relative;
          z-index: 1;
        }

        .word-red {
          color: #f5f0e8;
          text-shadow: 4px 4px 0 #1a1a1a;
        }

        .dash {
          color: #ffcc00;
          font-size: 1.2em;
        }

        .word-black {
          color: #1a1a1a;
        }

        .slogan-banner {
          margin-top: 20px;
          background: #1a1a1a;
          display: inline-block;
          padding: 12px 40px;
          transform: skewX(-15deg);
        }

        .slogan-text {
          color: #ffcc00;
          font-size: 18px;
          letter-spacing: 0.3em;
          transform: skewX(15deg);
        }

        /* Герой */
        .soviet-hero {
          position: relative;
          padding: 80px 5%;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0 0 40px 0;
        }

        .hero-title span {
          font-size: clamp(48px, 7vw, 84px);
          letter-spacing: 0.1em;
          line-height: 0.95;
        }

        .line1 {
          color: #cc0000;
          transform: translateX(-20px);
        }

        .line2 {
          color: #1a1a1a;
          padding-left: 40px;
          border-left: 8px solid #ffcc00;
        }

        .line3 {
          color: #cc0000;
          font-size: 0.8em !important;
          letter-spacing: 0.2em !important;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-size: 48px;
          color: #cc0000;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .stat-label {
          font-size: 14px;
          letter-spacing: 0.2em;
          color: #1a1a1a;
        }

        .hero-image-block {
          position: relative;
          height: 400px;
        }

        .machine-silhouette {
          position: absolute;
          width: 80%;
          height: 70%;
          background: #1a1a1a;
          clip-path: polygon(20% 0%, 80% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%);
          top: 15%;
          left: 10%;
        }

        .machine-silhouette::before {
          content: '';
          position: absolute;
          width: 60%;
          height: 60%;
          background: #333;
          top: 20%;
          left: 20%;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .red-triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 80px solid transparent;
          border-right: 80px solid transparent;
          border-bottom: 140px solid #cc0000;
          bottom: 0;
          left: -20px;
          z-index: -1;
        }

        .yellow-circle {
          position: absolute;
          width: 120px;
          height: 120px;
          background: #ffcc00;
          border-radius: 50%;
          top: 20px;
          right: 20px;
          mix-blend-mode: multiply;
        }

        .diagonal-stripe {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: repeating-linear-gradient(
            45deg,
            #cc0000,
            #cc0000 20px,
            #1a1a1a 20px,
            #1a1a1a 40px
          );
        }

        /* Продукты */
        .soviet-products {
          padding: 80px 5%;
          position: relative;
          z-index: 1;
          background: #1a1a1a;
          clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
          margin: -40px 0;
        }

        .poster-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .poster-num {
          font-size: 72px;
          color: #ffcc00;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .poster-title {
          font-size: 32px;
          color: #f5f0e8;
          letter-spacing: 0.15em;
          margin: 0;
        }

        .products-grid-constructivist {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card-soviet {
          position: relative;
          background: #f5f0e8;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .product-image-placeholder {
          width: 100%;
          height: 70%;
          background: #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .machine-geometry {
          width: 60%;
          height: 60%;
          background: #444;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .machine-geometry.large {
          width: 80%;
          height: 80%;
          background: #cc0000;
        }

        .product-info-slanted {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #f5f0e8;
          padding: 20px;
          transform: skewY(-3deg);
          transform-origin: bottom left;
        }

        .product-name {
          display: block;
          font-size: 24px;
          color: #1a1a1a;
          letter-spacing: 0.1em;
        }

        .product-spec {
          display: block;
          font-size: 14px;
          color: #cc0000;
          letter-spacing: 0.2em;
        }

        .red-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-top: 60px solid #cc0000;
        }

        .yellow-corner {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-right: 60px solid transparent;
          border-top: 60px solid #ffcc00;
        }

        .black-corner {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          border-left: 80px solid transparent;
          border-bottom: 80px solid #1a1a1a;
        }

        .featured-banner {
          position: absolute;
          top: 20px;
          left: -40px;
          background: #cc0000;
          color: #f5f0e8;
          padding: 8px 50px;
          font-size: 12px;
          letter-spacing: 0.2em;
          transform: rotate(-45deg);
          z-index: 2;
        }

        /* CTA Плакат */
        .soviet-cta-poster {
          position: relative;
          padding: 120px 5%;
          margin-top: 40px;
          overflow: hidden;
        }

        .cta-poster-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .red-diagonal {
          position: absolute;
          width: 150%;
          height: 60%;
          background: #cc0000;
          transform: rotate(-10deg);
          top: 20%;
          left: -25%;
        }

        .black-shape {
          position: absolute;
          width: 40%;
          height: 100%;
          background: #1a1a1a;
          right: 0;
          top: 0;
          clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cta-title-soviet {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin: 0 0 30px 0;
        }

        .cta-word {
          font-size: clamp(32px, 5vw, 56px);
          letter-spacing: 0.1em;
          padding: 10px 20px;
        }

        .cta-word:nth-child(odd) {
          background: #f5f0e8;
          color: #1a1a1a;
          transform: rotate(-2deg);
        }

        .cta-word:nth-child(even) {
          background: #1a1a1a;
          color: #ffcc00;
          transform: rotate(2deg);
        }

        .cta-subtitle {
          font-size: 18px;
          letter-spacing: 0.3em;
          color: #f5f0e8;
          margin-bottom: 40px;
          text-shadow: 2px 2px 0 #1a1a1a;
        }

        .soviet-button {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: 24px 48px;
          background: #ffcc00;
          border: none;
          cursor: pointer;
          transform: skewX(-10deg);
          transition: all 0.3s;
        }

        .soviet-button:hover {
          transform: skewX(-10deg) scale(1.05);
          box-shadow: 10px 10px 0 #1a1a1a;
        }

        .btn-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #1a1a1a;
          transform: skewX(10deg);
        }

        .btn-arrow {
          font-size: 32px;
          color: #cc0000;
          transform: skewX(10deg);
          font-weight: 700;
        }

        /* Производители */
        .soviet-manufacturers {
          padding: 80px 5%;
          background: #f5f0e8;
        }

        .section-title-soviet {
          display: flex;
          flex-direction: column;
          margin: 0 0 40px 0;
        }

        .title-line {
          font-size: clamp(40px, 6vw, 72px);
          letter-spacing: 0.1em;
          line-height: 0.9;
        }

        .title-line.red {
          color: #cc0000;
          padding-left: 60px;
          border-left: 12px solid #1a1a1a;
        }

        .manufacturers-construct {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .manufacturer-block {
          position: relative;
          padding: 30px;
          background: #1a1a1a;
          clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0% 100%);
          animation: slideIn 0.6s ease-out backwards;
          animation-delay: var(--delay);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        .mfg-number {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 48px;
          color: #333;
          font-weight: 700;
        }

        .mfg-name {
          font-size: 24px;
          color: #f5f0e8;
          letter-spacing: 0.1em;
        }

        .mfg-bar {
          position: absolute;
          bottom: 20px;
          left: 30px;
          width: 40px;
          height: 4px;
          background: #cc0000;
        }

        /* Футер */
        .soviet-footer {
          position: relative;
          padding: 60px 5%;
          background: #1a1a1a;
          overflow: hidden;
        }

        .footer-geometry {
          position: absolute;
          inset: 0;
        }

        .footer-red-block {
          position: absolute;
          width: 60%;
          height: 100%;
          background: #cc0000;
          clip-path: polygon(0 0, 80% 0%, 60% 100%, 0% 100%);
        }

        .footer-black-bar {
          position: absolute;
          width: 100%;
          height: 20px;
          background: #ffcc00;
          top: 50%;
          transform: translateY(-50%) rotate(-2deg);
        }

        .footer-content {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-label {
          font-size: 14px;
          color: #f5f0e8;
          letter-spacing: 0.2em;
        }

        .contact-value {
          font-size: 24px;
          color: #ffcc00;
          letter-spacing: 0.1em;
        }

        .footer-slogan {
          font-size: 32px;
          color: #f5f0e8;
          letter-spacing: 0.15em;
          text-shadow: 3px 3px 0 #cc0000;
        }

        /* Glitch эффект */
        .glitch .soviet-main-title {
          animation: glitch 0.1s;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(2px, 2px); }
        }

        @media (max-width: 768px) {
          .hero-grid,
          .products-grid-constructivist,
          .manufacturers-construct {
            grid-template-columns: 1fr;
          }

          .soviet-main-title {
            flex-direction: column;
            gap: 10px;
          }

          .red-block {
            width: 100%;
            clip-path: none;
          }

          .footer-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
