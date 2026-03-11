import { Send } from "lucide-react";

export function TelegramWidget() {
  return (
    <div className="telegram-widget">
      <a 
        href="https://t.me/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="telegram-link"
      >
        <div className="telegram-icon">
          <Send size={20} />
        </div>
        <div className="telegram-text">
          <div className="telegram-title">Личный менеджер</div>
          <div className="telegram-subtitle">Telegram</div>
        </div>
      </a>

      <style>{`
        .telegram-widget {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 1000;
          animation: widget-appear 0.5s ease-out;
        }

        .telegram-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: var(--surface);
          border: 1px solid rgba(255, 154, 77, 0.3);
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 
            6px 6px 12px var(--shadow-dark),
            -2px -2px 8px var(--shadow-light),
            0 0 30px rgba(255, 154, 77, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .telegram-link:hover {
          transform: translateY(-3px);
          box-shadow: 
            8px 8px 16px var(--shadow-dark),
            -3px -3px 12px var(--shadow-light),
            0 0 40px rgba(255, 154, 77, 0.3);
          border-color: var(--gri-glow);
        }

        .telegram-link:active {
          transform: translateY(0);
        }

        .telegram-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: radial-gradient(
            circle,
            rgba(255, 154, 77, 0.2) 0%,
            transparent 70%
          );
          border-radius: 50%;
          color: #ffd7a8;
          filter: drop-shadow(0 0 8px #ffaa00) 
                  drop-shadow(0 0 12px #ff8800);
          animation: icon-pulse 3s infinite ease-in-out;
        }

        .telegram-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .telegram-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-transform: uppercase;
          line-height: 1;
        }

        .telegram-subtitle {
          font-family: 'PT Sans', sans-serif;
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1;
        }

        @keyframes widget-appear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes icon-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 8px #ffaa00) 
                    drop-shadow(0 0 12px #ff8800);
          }
          50% { 
            filter: drop-shadow(0 0 12px #ffaa00) 
                    drop-shadow(0 0 20px #ff8800)
                    drop-shadow(0 0 28px #ff6600);
          }
        }

        @media (max-width: 640px) {
          .telegram-widget {
            bottom: 20px;
            right: 20px;
          }

          .telegram-link {
            padding: 10px 16px;
            gap: 8px;
          }

          .telegram-icon {
            width: 36px;
            height: 36px;
          }

          .telegram-title {
            font-size: 12px;
          }

          .telegram-subtitle {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
