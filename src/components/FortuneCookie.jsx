import { useCallback, useState } from "react";
import { randomFortune } from "../data/fortunes";
import {
  FortuneCookieIllustration,
  Sparkle,
} from "./visuals/FortuneCookieIllustration";

const DECOR_SPARKLES = [
  { top: "18%", left: "22%", size: 14, rotate: 12, delay: 0 },
  { top: "24%", left: "78%", size: 18, rotate: -18, delay: 0.4 },
  { top: "42%", left: "14%", size: 12, rotate: 45, delay: 0.8 },
  { top: "38%", left: "86%", size: 16, rotate: -30, delay: 1.2 },
  { top: "58%", left: "18%", size: 10, rotate: -8, delay: 0.6 },
  { top: "52%", left: "82%", size: 14, rotate: 22, delay: 1.0 },
  { top: "72%", left: "28%", size: 12, rotate: -42, delay: 1.4 },
  { top: "68%", left: "74%", size: 16, rotate: 8, delay: 0.2 },
];

export default function FortuneCookie() {
  const [phase, setPhase] = useState("idle");
  const [fortune, setFortune] = useState("");

  const crackCookie = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("cracking");
    setFortune(randomFortune());

    window.setTimeout(() => {
      setPhase("revealed");
    }, 650);
  }, [phase]);

  const reset = useCallback(() => {
    setPhase("idle");
    setFortune("");
  }, []);

  const isCracked = phase === "cracking" || phase === "revealed";

  return (
    <div className="fortune-page">
      <div className="fortune-glow" aria-hidden="true" />

      {DECOR_SPARKLES.map((sparkle, index) => (
        <Sparkle
          key={index}
          className="fortune-decor-sparkle"
          size={sparkle.size}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            transform: `rotate(${sparkle.rotate}deg)`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      <main className="fortune-main">
        <button
          type="button"
          className={`fortune-cookie-btn ${phase === "cracking" ? "is-cracking" : ""} ${phase === "revealed" ? "is-revealed" : ""}`}
          onClick={crackCookie}
          disabled={phase !== "idle"}
          aria-label={
            phase === "revealed"
              ? "Fortune revealed"
              : "Tap the fortune cookie to crack it open"
          }
        >
          <FortuneCookieIllustration cracked={isCracked} />
        </button>

        <h1 className="fortune-title">Fortune Cookie</h1>

        {phase === "revealed" ? (
          <div className="fortune-reveal" aria-live="polite">
            <p className="fortune-message">{fortune}</p>
            <button type="button" className="fortune-pill" onClick={reset}>
              <Sparkle size={14} ariaHidden />
              <span>Crack another</span>
              <Sparkle size={14} ariaHidden />
            </button>
          </div>
        ) : (
          <>
            <p className="fortune-subtitle">Tap the cookie to crack it open!</p>
            <div className="fortune-pill fortune-pill-static" aria-hidden="true">
              <Sparkle size={14} />
              <span>Magic awaits inside</span>
              <Sparkle size={14} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
