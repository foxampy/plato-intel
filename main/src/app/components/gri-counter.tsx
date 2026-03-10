import { useEffect, useState } from "react";

interface GRICounterProps {
  value: string;
  label: string;
  delay?: number;
}

export function GRICounter({ value, label, delay = 0 }: GRICounterProps) {
  const [isIgnited, setIsIgnited] = useState(false);
  const digits = value.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIgnited(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="gri-counter-wrapper">
      <div className="gri-tube-container">
        {digits.map((digit, idx) => (
          <div 
            key={idx} 
            className={`gri-tube ${isIgnited ? 'ignited' : ''}`}
            style={{ animationDelay: `${delay + idx * 100}ms` }}
          >
            <div className="gri-digit">{digit}</div>
            <div className="gri-glow"></div>
            <div className="gri-flicker"></div>
          </div>
        ))}
      </div>
      <div className="gri-label">{label}</div>
      
      <style>{`
        .gri-counter-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          background: var(--surface);
          border-radius: 12px;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light);
          position: relative;
        }

        .gri-tube-container {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .gri-tube {
          position: relative;
          width: 48px;
          height: 64px;
          background: linear-gradient(135deg, #1a1d26 0%, #2d313c 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            inset 4px 4px 8px rgba(0,0,0,0.4),
            inset -2px -2px 6px rgba(255,255,255,0.03);
          overflow: hidden;
        }

        .gri-digit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 32px;
          font-weight: 700;
          color: var(--gri-glow);
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          text-shadow: 
            0 0 10px var(--gri-core),
            0 0 20px var(--gri-core),
            0 0 30px var(--gri-dim);
        }

        .gri-tube.ignited .gri-digit {
          opacity: 1;
          transform: scale(1);
          animation: flicker 3s infinite;
        }

        .gri-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 107, 53, 0.3) 0%,
            rgba(139, 58, 26, 0.1) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.5s;
        }

        .gri-tube.ignited .gri-glow {
          opacity: 1;
          animation: pulse 4s infinite;
        }

        .gri-flicker {
          position: absolute;
          inset: 0;
          background: var(--gri-glow);
          opacity: 0;
          mix-blend-mode: screen;
        }

        .gri-tube.ignited .gri-flicker {
          animation: cathode-flicker 2.5s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.97; }
          75% { opacity: 0.98; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes cathode-flicker {
          0%, 90%, 100% { opacity: 0; }
          92% { opacity: 0.15; }
          94% { opacity: 0; }
          96% { opacity: 0.1; }
        }

        .gri-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
