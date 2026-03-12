// Страница в стиле промышленного гигантизма
// Вдохновлено работами фотографов индустриальной эпохи и современным концепт-артом

import { useEffect, useRef } from "react";

export function IndustrialGigantismPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Анимация частиц пыли/искр
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 160, 60, ${p.opacity})`;
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="gigantism-page">
      {/* Canvas для анимации частиц */}
      <canvas ref={canvasRef} className="particles-canvas" />
      
      {/* Слой с дымкой/туманом */}
      <div className="fog-layer">
        <div className="fog-band f1"></div>
        <div className="fog-band f2"></div>
        <div className="fog-band f3"></div>
      </div>

      {/* Навигация — интегрирована в дизайн */}
      <nav className="giant-nav">
        <div className="nav-rust-bar"></div>
        <div className="nav-content">
          <div className="nav-logo">
            <div className="gear-icon">
              <div className="gear-center"></div>
              <div className="gear-teeth"></div>
            </div>
            <span className="logo-text">PLATO-INTEL</span>
          </div>
          <div className="nav-links">
            <span className="nav-link">КАТАЛОГ</span>
            <span className="nav-link">ПРОЕКТЫ</span>
            <span className="nav-link">КОНТАКТЫ</span>
          </div>
        </div>
        <div className="nav-oil-drip"></div>
      </nav>

      {/* Герой — Гигантская турбина/двигатель */}
      <section className="giant-hero">
        <div className="hero-background">
          {/* Слои глубины */}
          <div className="bg-layer bg-far">
            <div className="industrial-silhouette">
              <div className="chimney c1"></div>
              <div className="chimney c2"></div>
              <div className="chimney c3"></div>
              <div className="factory-roof"></div>
              <div className="crane-structure"></div>
            </div>
          </div>
          <div className="bg-layer bg-mid">
            <div className="turbine-housing">
              <div className="housing-panel h1"></div>
              <div className="housing-panel h2"></div>
              <div className="housing-panel h3"></div>
              <div className="rivet-row">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="rivet"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Центральный объект — вращающийся ротор */}
        <div className="hero-centerpiece">
          <div className="turbine-assembly">
            <div className="rotor-main">
              <div className="rotor-shaft"></div>
              <div className="blade-container">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="turbine-blade"
                    style={{ '--angle': i * 45 + 'deg' } as React.CSSProperties}
                  >
                    <div className="blade-inner"></div>
                    <div className="blade-detail"></div>
                  </div>
                ))}
              </div>
              <div className="rotor-center">
                <div className="center-bolt"></div>
              </div>
            </div>
            <div className="stator-ring">
              <div className="ring-segment s1"></div>
              <div className="ring-segment s2"></div>
              <div className="ring-segment s3"></div>
              <div className="ring-segment s4"></div>
            </div>
          </div>
        </div>

        {/* Текст поверх */}
        <div className="hero-text-overlay">
          <h1 className="giant-title">
            <span className="title-line t1">ЭЛЕКТРОТЕХНИКА</span>
            <span className="title-line t2">ПРОМЫШЛЕННОГО</span>
            <span className="title-line t3">МАСШТАБА</span>
          </h1>
          <div className="hero-stats-giant">
            <div className="giant-stat">
              <span className="stat-glow-num">340+</span>
              <span className="stat-label-giant">ОБЪЕКТОВ</span>
            </div>
            <div className="stat-separator"></div>
            <div className="giant-stat">
              <span className="stat-glow-num">20</span>
              <span className="stat-label-giant">ЛЕТ РАБОТЫ</span>
            </div>
          </div>
        </div>

        {/* Эффект масла/конденсата */}
        <div className="oil-sheen"></div>
      </section>

      {/* Секция с деталями — макро */}
      <section className="macro-section">
        <div className="macro-header">
          <div className="section-line"></div>
          <h2 className="macro-title">ДЕТАЛИ, ОПРЕДЕЛЯЮЩИЕ НАДЁЖНОСТЬ</h2>
          <div className="section-line"></div>
        </div>

        <div className="macro-grid">
          {/* Карточка 1 — Автоматический выключатель */}
          <div className="macro-card">
            <div className="macro-visual">
              <div className="breaker-housing">
                <div className="housing-texture"></div>
                <div className="warning-stripe"></div>
                <div className="terminal-block">
                  <div className="terminal t1"></div>
                  <div className="terminal t2"></div>
                  <div className="terminal t3"></div>
                </div>
                <div className="arc-chamber">
                  <div className="chamber-coil"></div>
                </div>
                <div className="operating-mechanism">
                  <div className="lever-arm"></div>
                  <div className="spring-assembly"></div>
                </div>
              </div>
              <div className="scale-indicator">
                <span>1:1</span>
              </div>
            </div>
            <div className="macro-info">
              <h3>ВА-99-63</h3>
              <p className="spec-text">Номинальный ток: 6300А</p>
              <p className="spec-text">Напряжение: до 1140В</p>
              <div className="detail-tags">
                <span className="tag">Медные контакты</span>
                <span className="tag">Дуговая камера</span>
                <span className="tag">Термомагнитный расцепитель</span>
              </div>
            </div>
          </div>

          {/* Карточка 2 — Контактор */}
          <div className="macro-card">
            <div className="macro-visual">
              <div className="contactor-body">
                <div className="coil-housing">
                  <div className="coil-windings"></div>
                  <div className="magnetic-core"></div>
                </div>
                <div className="contact-block">
                  <div className="main-contact c1"></div>
                  <div className="main-contact c2"></div>
                  <div className="aux-contact"></div>
                </div>
                <div className="mounting-rail">
                  <div className="rail-screw s1"></div>
                  <div className="rail-screw s2"></div>
                </div>
              </div>
            </div>
            <div className="macro-info">
              <h3>КТИ-5263</h3>
              <p className="spec-text">Номинальный ток: 630А</p>
              <p className="spec-text">Категория применения: AC-3</p>
              <div className="detail-tags">
                <span className="tag">Серебряные контакты</span>
                <span className="tag">Бесшумная работа</span>
                <span className="tag">Монтаж на DIN-рейку</span>
              </div>
            </div>
          </div>

          {/* Карточка 3 — Реле */}
          <div className="macro-card">
            <div className="macro-visual">
              <div className="relay-unit">
                <div className="relay-base">
                  <div className="pin-row">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="pin"></div>
                    ))}
                  </div>
                </div>
                <div className="relay-body">
                  <div className="led-indicator"></div>
                  <div className="test-button"></div>
                  <div className="relay-coil-visual"></div>
                </div>
              </div>
            </div>
            <div className="macro-info">
              <h3>РЭК77/3</h3>
              <p className="spec-text">Ток: 10А</p>
              <p className="spec-text">Переключающих контактов: 3</p>
              <div className="detail-tags">
                <span className="tag">LED-индикация</span>
                <span className="tag">Тест-кнопка</span>
                <span className="tag">Защита IP20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция масштаба — сравнение с человеком */}
      <section className="scale-section">
        <div className="scale-backdrop">
          <div className="industrial-hall">
            <div className="hall-pillar p1"></div>
            <div className="hall-pillar p2"></div>
            <div className="hall-pillar p3"></div>
            <div className="overhead-crane">
              <div className="crane-girder"></div>
              <div className="crane-trolley"></div>
            </div>
          </div>
        </div>
        
        <div className="scale-content">
          <h2 className="scale-title">МАСШТАБ, КОТОРЫЙ ВИДНО</h2>
          <p className="scale-desc">
            Каждое устройство проектируется для работы в условиях, 
            где отказ оборудования недопустим
          </p>
          
          <div className="scale-comparison">
            <div className="human-silhouette">
              <div className="human-head"></div>
              <div className="human-body"></div>
              <div className="human-legs"></div>
              <span className="scale-label">180 см</span>
            </div>
            <div className="equipment-silhouette">
              <div className="equip-base"></div>
              <div className="equip-main"></div>
              <div className="equip-top"></div>
              <span className="scale-label">240 см</span>
            </div>
          </div>
        </div>
      </section>

      {/* Футер — индустриальный */}
      <footer className="giant-footer">
        <div className="footer-metal">
          <div className="metal-texture"></div>
          <div className="weld-seam w1"></div>
          <div className="weld-seam w2"></div>
        </div>
        <div className="footer-content-giant">
          <div className="footer-brand">
            <div className="brand-emblem">
              <div className="emblem-gear"></div>
            </div>
            <div className="brand-text">
              <span className="brand-name">PLATO-INTEL</span>
              <span className="brand-tagline">ЭЛЕКТРОТЕХНИКА С 2003</span>
            </div>
          </div>
          <div className="footer-contact-giant">
            <div className="contact-item">
              <span className="contact-icon">⚡</span>
              <span className="contact-text">+375 (29) 615-56-72</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⚙</span>
              <span className="contact-text">info@plato-intel.by</span>
            </div>
          </div>
        </div>
        <div className="footer-rust-bottom"></div>
      </footer>

      <style>{`
        .gigantism-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #1a1c20 0%, #2a2d33 50%, #1a1c20 100%);
          color: #c9cdd3;
          font-family: 'Bebas Neue', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Canvas с частицами */
        .particles-canvas {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
        }

        /* Слой тумана */
        .fog-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        .fog-band {
          position: absolute;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(200, 200, 200, 0.05) 50%, 
            transparent 100%
          );
          animation: fogMove 20s linear infinite;
        }

        .f1 { top: 20%; animation-delay: 0s; }
        .f2 { top: 50%; animation-delay: -7s; }
        .f3 { top: 80%; animation-delay: -14s; }

        @keyframes fogMove {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        /* Навигация */
        .giant-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: linear-gradient(180deg, 
            rgba(26, 28, 32, 0.95) 0%, 
            rgba(26, 28, 32, 0.8) 100%
          );
          backdrop-filter: blur(10px);
          border-bottom: 2px solid #3a3d42;
        }

        .nav-rust-bar {
          height: 4px;
          background: linear-gradient(90deg, 
            #8b4513 0%, 
            #a0522d 20%, 
            #8b4513 40%, 
            #654321 60%, 
            #8b4513 100%
          );
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 5%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .gear-icon {
          width: 40px;
          height: 40px;
          position: relative;
          animation: rotateSlow 20s linear infinite;
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .gear-center {
          position: absolute;
          width: 16px;
          height: 16px;
          background: #7a7a7a;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid #4a4a4a;
        }

        .gear-teeth {
          position: absolute;
          inset: 0;
          background: repeating-conic-gradient(
            from 0deg,
            #7a7a7a 0deg 15deg,
            transparent 15deg 30deg
          );
          border-radius: 50%;
        }

        .logo-text {
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #e8e8e8;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          letter-spacing: 0.1em;
          color: #9a9da3;
          cursor: pointer;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #ff9a4d;
        }

        .nav-oil-drip {
          position: absolute;
          bottom: -10px;
          left: 10%;
          width: 3px;
          height: 15px;
          background: linear-gradient(180deg, #4a4a4a 0%, transparent 100%);
          opacity: 0.5;
        }

        /* Герой */
        .giant-hero {
          position: relative;
          height: 100vh;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bg-layer {
          position: absolute;
          inset: 0;
        }

        .bg-far {
          opacity: 0.3;
        }

        .industrial-silhouette {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
        }

        .chimney {
          position: absolute;
          bottom: 0;
          width: 60px;
          background: linear-gradient(90deg, #1a1c20 0%, #2a2d33 50%, #1a1c20 100%);
          border: 2px solid #3a3d42;
        }

        .c1 { left: 10%; height: 200px; }
        .c2 { left: 15%; height: 280px; width: 80px; }
        .c3 { right: 10%; height: 180px; }

        .factory-roof {
          position: absolute;
          bottom: 100px;
          left: 5%;
          right: 5%;
          height: 100px;
          background: #1f2126;
          clip-path: polygon(0 100%, 10% 0%, 90% 0%, 100% 100%);
        }

        .crane-structure {
          position: absolute;
          top: 20%;
          right: 5%;
          width: 200px;
          height: 300px;
          border-left: 8px solid #2a2d33;
          border-top: 8px solid #2a2d33;
        }

        .bg-mid {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .turbine-housing {
          position: absolute;
          width: 80%;
          max-width: 1000px;
          height: 60%;
          border: 4px solid #3a3d42;
          border-radius: 20px;
          background: linear-gradient(180deg, 
            rgba(42, 45, 51, 0.5) 0%, 
            rgba(26, 28, 32, 0.8) 100%
          );
        }

        .housing-panel {
          position: absolute;
          height: 100%;
          width: 30%;
          border-right: 2px solid #3a3d42;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            rgba(255, 154, 77, 0.05) 20px,
            rgba(255, 154, 77, 0.05) 21px
          );
        }

        .h1 { left: 0; }
        .h2 { left: 30%; }
        .h3 { left: 60%; border-right: none; }

        .rivet-row {
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          display: flex;
          justify-content: space-around;
        }

        .rivet {
          width: 12px;
          height: 12px;
          background: radial-gradient(circle at 30% 30%, #6a6a6a, #3a3a3a);
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        /* Центральный объект */
        .hero-centerpiece {
          position: relative;
          z-index: 10;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .turbine-assembly {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .rotor-main {
          position: absolute;
          inset: 0;
          animation: rotateTurbine 10s linear infinite;
        }

        @keyframes rotateTurbine {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .rotor-shaft {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7a7a7a 0%, #4a4a4a 100%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 
            0 0 30px rgba(255, 154, 77, 0.3),
            inset 0 0 20px rgba(0,0,0,0.5);
          z-index: 5;
        }

        .blade-container {
          position: absolute;
          inset: 0;
        }

        .turbine-blade {
          position: absolute;
          width: 200px;
          height: 60px;
          top: 50%;
          left: 50%;
          transform-origin: left center;
          transform: rotate(var(--angle)) translateX(30px);
        }

        .blade-inner {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            #3a3d42 0%, 
            #5a5d63 30%, 
            #7a7d83 50%, 
            #5a5d63 70%, 
            #3a3d42 100%
          );
          clip-path: polygon(0 50%, 15% 0%, 100% 20%, 100% 80%, 15% 100%);
          box-shadow: 
            0 4px 8px rgba(0,0,0,0.5),
            inset 0 0 20px rgba(255, 154, 77, 0.1);
        }

        .blade-detail {
          position: absolute;
          width: 80%;
          height: 30%;
          top: 35%;
          left: 10%;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.2) 10px,
            rgba(0,0,0,0.2) 11px
          );
        }

        .rotor-center {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 4px solid #5a5d63;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }

        .center-bolt {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #7a7a7a;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
        }

        .stator-ring {
          position: absolute;
          inset: 20px;
          border: 8px solid #3a3d42;
          border-radius: 50%;
        }

        .ring-segment {
          position: absolute;
          width: 100%;
          height: 25%;
          border-bottom: 2px solid #5a5d63;
        }

        .s1 { top: 0; }
        .s2 { top: 25%; }
        .s3 { top: 50%; }
        .s4 { top: 75%; }

        /* Текст */
        .hero-text-overlay {
          position: absolute;
          z-index: 20;
          text-align: center;
          pointer-events: none;
        }

        .giant-title {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0 0 60px 0;
        }

        .title-line {
          font-size: clamp(48px, 8vw, 96px);
          letter-spacing: 0.15em;
          line-height: 0.9;
          text-shadow: 
            0 0 40px rgba(255, 154, 77, 0.3),
            0 4px 8px rgba(0,0,0,0.8);
        }

        .t1 { color: #e8e8e8; }
        .t2 { color: #ff9a4d; font-size: 0.7em !important; }
        .t3 { color: #c9cdd3; font-size: 1.1em !important; }

        .hero-stats-giant {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
        }

        .giant-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-glow-num {
          font-size: 72px;
          color: #ff9a4d;
          text-shadow: 
            0 0 20px rgba(255, 154, 77, 0.5),
            0 0 40px rgba(255, 154, 77, 0.3);
          letter-spacing: 0.05em;
        }

        .stat-label-giant {
          font-size: 16px;
          letter-spacing: 0.2em;
          color: #9a9da3;
          margin-top: 8px;
        }

        .stat-separator {
          width: 2px;
          height: 80px;
          background: linear-gradient(180deg, transparent, #3a3d42, transparent);
        }

        .oil-sheen {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(30, 30, 35, 0.5) 50%,
            rgba(20, 20, 25, 0.8) 100%
          );
          z-index: 15;
        }

        /* Секция макро */
        .macro-section {
          position: relative;
          padding: 120px 5%;
          z-index: 10;
          background: linear-gradient(180deg, 
            rgba(20, 20, 25, 0.9) 0%, 
            #1a1c20 100%
          );
        }

        .macro-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 80px;
        }

        .section-line {
          flex: 1;
          max-width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff9a4d, transparent);
        }

        .macro-title {
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: 0.15em;
          color: #e8e8e8;
          text-align: center;
          text-shadow: 0 0 20px rgba(255, 154, 77, 0.2);
        }

        .macro-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .macro-card {
          background: linear-gradient(135deg, 
            rgba(42, 45, 51, 0.8) 0%, 
            rgba(26, 28, 32, 0.9) 100%
          );
          border: 1px solid #3a3d42;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .macro-card:hover {
          border-color: #ff9a4d;
          box-shadow: 0 0 30px rgba(255, 154, 77, 0.2);
        }

        .macro-visual {
          position: relative;
          height: 300px;
          background: linear-gradient(135deg, #2a2d33 0%, #1a1c20 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #3a3d42;
        }

        .scale-indicator {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          padding: 4px 12px;
          font-size: 12px;
          color: #9a9da3;
          letter-spacing: 0.1em;
        }

        /* Визуал автомата */
        .breaker-housing {
          position: relative;
          width: 200px;
          height: 240px;
          background: linear-gradient(135deg, #4a4d52 0%, #2a2d33 100%);
          border-radius: 4px;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.5),
            inset 0 0 20px rgba(0,0,0,0.3);
        }

        .housing-texture {
          position: absolute;
          inset: 10px;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            rgba(0,0,0,0.1) 4px,
            rgba(0,0,0,0.1) 5px
          );
        }

        .warning-stripe {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 20px;
          background: repeating-linear-gradient(
            45deg,
            #ffcc00,
            #ffcc00 10px,
            #1a1a1a 10px,
            #1a1a1a 20px
          );
        }

        .terminal-block {
          position: absolute;
          top: 50px;
          left: 20px;
          right: 20px;
          display: flex;
          justify-content: space-around;
        }

        .terminal {
          width: 30px;
          height: 40px;
          background: linear-gradient(180deg, #8b7355 0%, #5a4a3a 100%);
          border-radius: 4px 4px 0 0;
          border: 2px solid #3a3a3a;
        }

        .arc-chamber {
          position: absolute;
          top: 100px;
          left: 30px;
          right: 30px;
          height: 60px;
          background: linear-gradient(180deg, #3a3d42 0%, #1a1c20 100%);
          border-radius: 4px;
          border: 1px solid #5a5d63;
        }

        .chamber-coil {
          position: absolute;
          inset: 10px;
          background: repeating-linear-gradient(
            90deg,
            #4a4d52,
            #4a4d52 3px,
            transparent 3px,
            transparent 6px
          );
        }

        .operating-mechanism {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        .lever-arm {
          width: 60px;
          height: 20px;
          background: linear-gradient(90deg, #5a5d63 0%, #7a7d83 50%, #5a5d63 100%);
          border-radius: 10px;
          border: 2px solid #3a3d42;
        }

        .macro-info {
          padding: 24px;
        }

        .macro-info h3 {
          font-size: 24px;
          letter-spacing: 0.1em;
          color: #ff9a4d;
          margin: 0 0 16px 0;
        }

        .spec-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: #9a9da3;
          margin: 4px 0;
        }

        .detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .tag {
          padding: 4px 12px;
          background: rgba(255, 154, 77, 0.1);
          border: 1px solid rgba(255, 154, 77, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #ff9a4d;
          letter-spacing: 0.05em;
        }

        /* Секция масштаба */
        .scale-section {
          position: relative;
          padding: 120px 5%;
          min-height: 600px;
          overflow: hidden;
        }

        .scale-backdrop {
          position: absolute;
          inset: 0;
          opacity: 0.3;
        }

        .industrial-hall {
          position: relative;
          height: 100%;
        }

        .hall-pillar {
          position: absolute;
          bottom: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(90deg, #1a1c20 0%, #2a2d33 50%, #1a1c20 100%);
          border: 2px solid #3a3d42;
        }

        .p1 { left: 10%; }
        .p2 { left: 50%; transform: translateX(-50%); }
        .p3 { right: 10%; }

        .overhead-crane {
          position: absolute;
          top: 20%;
          left: 5%;
          right: 5%;
          height: 60px;
        }

        .crane-girder {
          width: 100%;
          height: 20px;
          background: linear-gradient(180deg, #3a3d42 0%, #1a1c20 100%);
          border: 1px solid #5a5d63;
        }

        .crane-trolley {
          position: absolute;
          width: 80px;
          height: 40px;
          background: #2a2d33;
          border: 2px solid #5a5d63;
          top: 20px;
          left: 30%;
        }

        .scale-content {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .scale-title {
          font-size: clamp(32px, 5vw, 48px);
          letter-spacing: 0.1em;
          color: #e8e8e8;
          margin-bottom: 16px;
          text-shadow: 0 0 30px rgba(255, 154, 77, 0.3);
        }

        .scale-desc {
          font-family: 'PT Sans', sans-serif;
          font-size: 18px;
          color: #9a9da3;
          max-width: 600px;
          margin: 0 auto 60px auto;
          line-height: 1.6;
        }

        .scale-comparison {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 100px;
        }

        .human-silhouette {
          position: relative;
          width: 60px;
          height: 180px;
        }

        .human-head {
          width: 24px;
          height: 24px;
          background: #5a5d63;
          border-radius: 50%;
          margin: 0 auto;
        }

        .human-body {
          width: 40px;
          height: 80px;
          background: #4a4d52;
          margin: 4px auto 0;
          border-radius: 8px 8px 0 0;
        }

        .human-legs {
          width: 40px;
          height: 70px;
          background: #3a3d42;
          margin: 0 auto;
        }

        .equipment-silhouette {
          position: relative;
          width: 120px;
          height: 240px;
        }

        .equip-base {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40px;
          background: #3a3d42;
          border-radius: 4px;
        }

        .equip-main {
          position: absolute;
          bottom: 40px;
          left: 10px;
          right: 10px;
          height: 160px;
          background: linear-gradient(180deg, #4a4d52 0%, #2a2d33 100%);
          border-radius: 4px;
          border: 2px solid #5a5d63;
        }

        .equip-top {
          position: absolute;
          top: 0;
          left: 20px;
          right: 20px;
          height: 40px;
          background: #5a5d63;
          border-radius: 4px 4px 0 0;
        }

        .scale-label {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: #ff9a4d;
          letter-spacing: 0.1em;
        }

        /* Футер */
        .giant-footer {
          position: relative;
          padding: 60px 5%;
          background: #141416;
          border-top: 4px solid #3a3d42;
        }

        .footer-metal {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, 
            #3a3d42 0%, 
            #5a5d63 20%, 
            #3a3d42 40%, 
            #7a7d83 60%, 
            #3a3d42 100%
          );
        }

        .metal-texture {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(0,0,0,0.2) 50px,
            rgba(0,0,0,0.2) 52px
          );
        }

        .weld-seam {
          position: absolute;
          width: 100px;
          height: 4px;
          background: #8b7355;
          border-radius: 2px;
          top: 2px;
        }

        .w1 { left: 20%; }
        .w2 { right: 20%; }

        .footer-content-giant {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .brand-emblem {
          width: 60px;
          height: 60px;
          border: 3px solid #ff9a4d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emblem-gear {
          width: 40px;
          height: 40px;
          border: 2px solid #ff9a4d;
          border-radius: 50%;
          border-style: dashed;
          animation: rotateSlow 10s linear infinite;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #e8e8e8;
        }

        .brand-tagline {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: #9a9da3;
        }

        .footer-contact-giant {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          font-size: 16px;
        }

        .contact-text {
          font-size: 16px;
          letter-spacing: 0.1em;
          color: #c9cdd3;
        }

        .footer-rust-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, 
            #8b4513 0%, 
            #a0522d 30%, 
            #8b4513 60%, 
            #654321 100%
          );
        }

        @media (max-width: 768px) {
          .hero-centerpiece {
            transform: scale(0.6);
          }

          .hero-stats-giant {
            flex-direction: column;
            gap: 30px;
          }

          .stat-separator {
            width: 100px;
            height: 2px;
          }

          .scale-comparison {
            flex-direction: column;
            align-items: center;
          }

          .footer-content-giant {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
