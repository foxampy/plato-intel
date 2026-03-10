import { useState } from "react";
import { Factory, Settings, Barcode } from "lucide-react";

interface Position {
  label: string;
  angle: number;
  icon: string;
}

const positions: Position[] = [
  { label: "ПО ПРОИЗВОДИТЕЛЮ", angle: 0, icon: "factory" },
  { label: "ПО НАЗНАЧЕНИЮ", angle: 45, icon: "gear" },
  { label: "ПО АРТИКУЛУ", angle: 90, icon: "barcode" }
];

export function RotarySwitch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "factory":
        return <Factory size={20} />;
      case "gear":
        return <Settings size={20} />;
      case "barcode":
        return <Barcode size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="rotary-switch-wrapper">
      <div className="switch-label">РЕЖИМ ОТОБРАЖЕНИЯ</div>
      
      <div className="switch-container">
        <div 
          className="knob"
          style={{ transform: `rotate(${positions[activeIndex].angle}deg)` }}
        >
          <div className="knob-indicator"></div>
          <div className="knob-ridges">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="ridge" />
            ))}
          </div>
        </div>
        
        <div className="positions">
          {positions.map((pos, idx) => (
            <button
              key={idx}
              className={`position ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              style={{ transform: `rotate(${pos.angle}deg) translateY(-80px)` }}
            >
              <div style={{ transform: `rotate(-${pos.angle}deg)` }}>
                {getIcon(pos.icon)}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="position-label">{positions[activeIndex].label}</div>

      <style>{`
        .rotary-switch-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .switch-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .switch-container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .knob {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--surface) 0%, var(--surface-highlight) 100%);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -4px -4px 12px var(--shadow-light);
          position: relative;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .knob-indicator {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 20px;
          background: var(--gri-glow);
          border-radius: 3px;
          box-shadow: 0 0 10px var(--gri-core);
        }

        .knob-ridges {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
        }

        .ridge {
          position: absolute;
          width: 2px;
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          top: 0;
          left: 50%;
          transform-origin: 50% 50px;
          transform: translateX(-50%) rotate(calc(var(--i) * 22.5deg));
        }

        .ridge:nth-child(1) { --i: 0; }
        .ridge:nth-child(2) { --i: 1; }
        .ridge:nth-child(3) { --i: 2; }
        .ridge:nth-child(4) { --i: 3; }
        .ridge:nth-child(5) { --i: 4; }
        .ridge:nth-child(6) { --i: 5; }
        .ridge:nth-child(7) { --i: 6; }
        .ridge:nth-child(8) { --i: 7; }
        .ridge:nth-child(9) { --i: 8; }
        .ridge:nth-child(10) { --i: 9; }
        .ridge:nth-child(11) { --i: 10; }
        .ridge:nth-child(12) { --i: 11; }
        .ridge:nth-child(13) { --i: 12; }
        .ridge:nth-child(14) { --i: 13; }
        .ridge:nth-child(15) { --i: 14; }
        .ridge:nth-child(16) { --i: 15; }

        .positions {
          position: absolute;
          inset: 0;
        }

        .position {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          border-radius: 50%;
          background: var(--surface);
          border: 2px solid var(--grid-lines);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .position:hover {
          border-color: var(--text-primary);
          color: var(--text-primary);
        }

        .position.active {
          border-color: var(--accent-green);
          color: var(--accent-green);
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
        }

        .position-label {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          color: var(--text-primary);
          min-height: 20px;
        }
      `}</style>
    </div>
  );
}
