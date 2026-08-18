import { useRef, useState } from "react";

const HOTSPOTS = [
  { id: "design", label: "Design" },
  { id: "ai", label: "AI" },
  { id: "code", label: "Code" },
];

const CAPTIONS = {
  design: "Start with frames & layout",
  ai: "AI bridges design → code",
  code: "Ship a working prototype",
};

export function HeroIllustration() {
  const [active, setActive] = useState("ai");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wrapRef = useRef(null);

  function handlePointerMove(e) {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -8 });
  }

  function handlePointerLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={wrapRef}
      className="hero-visual-wrap"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="visual hero-visual"
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <g className="hero-deco hero-deco-1">
          <circle cx="340" cy="52" r="20" stroke="#c9a88a" strokeWidth="1" fill="none" opacity="0.4" />
        </g>
        <g className="hero-deco hero-deco-2">
          <circle cx="48" cy="260" r="12" stroke="#9aab8f" strokeWidth="1" fill="none" opacity="0.35" />
        </g>

        <g className={`hero-stage hero-design ${active === "design" ? "is-active" : ""}`}>
          <rect x="24" y="40" width="140" height="100" rx="12" className="hero-frame" />
          <rect x="36" y="56" width="48" height="6" rx="3" fill="#c9a88a" opacity="0.5" className="hero-line hero-line-1" />
          <rect x="36" y="70" width="80" height="4" rx="2" fill="#989590" opacity="0.4" className="hero-line hero-line-2" />
          <rect x="36" y="80" width="64" height="4" rx="2" fill="#989590" opacity="0.3" className="hero-line hero-line-3" />
          <rect x="36" y="100" width="56" height="24" rx="6" stroke="#9aab8f" strokeWidth="1" fill="rgba(154,171,143,0.1)" />
        </g>

        <path
          d="M168 90 Q210 70 252 90"
          className="hero-flow-path"
          stroke="#8ba4b4"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
        />

        <g className={`hero-stage hero-ai ${active === "ai" ? "is-active" : ""}`}>
          <circle cx="210" cy="78" r="14" className="hero-ai-ring" />
          <circle cx="210" cy="78" r="22" className="hero-ai-glow" />
          <text x="210" y="82" textAnchor="middle" fill="#8ba4b4" fontSize="10" fontFamily="monospace">
            AI
          </text>
        </g>

        <g className={`hero-stage hero-code ${active === "code" ? "is-active" : ""}`}>
          <rect x="256" y="40" width="140" height="100" rx="12" className="hero-frame hero-frame-code" />
          <rect x="268" y="56" width="116" height="68" rx="4" fill="rgba(139,164,180,0.06)" stroke="#8ba4b4" strokeWidth="0.8" opacity="0.6" />
          <path d="M276 68h20M276 76h32M276 84h24" stroke="#8ba4b4" strokeWidth="1" opacity="0.4" className="hero-code-lines" />
        </g>

        <g className="hero-ship-row">
          <rect x="64" y="180" width="292" height="100" rx="16" stroke="#9aab8f" strokeWidth="1.5" fill="rgba(154,171,143,0.06)" />
          <rect x="80" y="196" width="80" height="68" rx="8" fill="rgba(201,168,138,0.12)" stroke="#c9a88a" strokeWidth="1" className="hero-ship-card hero-ship-1" />
          <rect x="172" y="196" width="80" height="68" rx="8" fill="rgba(139,164,180,0.1)" stroke="#8ba4b4" strokeWidth="1" className="hero-ship-card hero-ship-2" />
          <rect x="264" y="196" width="80" height="68" rx="8" fill="rgba(154,171,143,0.1)" stroke="#9aab8f" strokeWidth="1" className="hero-ship-card hero-ship-3" />
        </g>
      </svg>

      <div className="hero-visual-controls" role="group" aria-label="Workflow steps">
        {HOTSPOTS.map((spot) => (
          <button
            key={spot.id}
            type="button"
            aria-pressed={active === spot.id}
            className={`hero-visual-pill ${active === spot.id ? "is-active" : ""}`}
            onClick={() => setActive(spot.id)}
          >
            {spot.label}
          </button>
        ))}
      </div>

      <p className="hero-visual-caption" aria-live="polite">
        {CAPTIONS[active]}
      </p>
    </div>
  );
}
