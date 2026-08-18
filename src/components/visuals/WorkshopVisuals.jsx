const aboutVisuals = {
  prototype: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="44" height="64" rx="6" stroke="#c9a88a" strokeWidth="1.2" fill="rgba(201,168,138,0.1)" />
      <rect x="16" y="18" width="28" height="4" rx="2" fill="#c9a88a" opacity="0.5" />
      <rect x="16" y="28" width="20" height="3" rx="1.5" fill="#989590" opacity="0.4" />
      <rect x="68" y="8" width="44" height="64" rx="6" stroke="#8ba4b4" strokeWidth="1.2" fill="rgba(139,164,180,0.1)" />
      <rect x="76" y="18" width="28" height="20" rx="3" stroke="#8ba4b4" strokeWidth="0.8" fill="rgba(139,164,180,0.08)" />
      <path d="M56 40 L68 40" stroke="#9aab8f" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#9aab8f" />
        </marker>
      </defs>
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <circle cx="60" cy="40" r="28" stroke="#8ba4b4" strokeWidth="1.2" fill="rgba(139,164,180,0.08)" />
      <circle cx="60" cy="40" r="8" fill="#8ba4b4" opacity="0.4" />
      <circle cx="32" cy="28" r="6" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.15)" />
      <circle cx="88" cy="28" r="6" stroke="#9aab8f" strokeWidth="1" fill="rgba(154,171,143,0.15)" />
      <circle cx="32" cy="52" r="6" stroke="#9aab8f" strokeWidth="1" fill="rgba(154,171,143,0.15)" />
      <circle cx="88" cy="52" r="6" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.15)" />
      <path d="M38 30 L52 36 M82 30 L68 36 M38 50 L52 44 M82 50 L68 44" stroke="#989590" strokeWidth="0.8" opacity="0.5" />
    </svg>
  ),
  ship: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="20" y="20" width="80" height="48" rx="8" stroke="#9aab8f" strokeWidth="1.2" fill="rgba(154,171,143,0.08)" />
      <rect x="28" y="28" width="64" height="8" rx="2" fill="#9aab8f" opacity="0.3" />
      <rect x="28" y="42" width="40" height="4" rx="2" fill="#989590" opacity="0.3" />
      <rect x="28" y="50" width="24" height="12" rx="4" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.1)" />
      <path d="M88 56 L104 48 L104 64 Z" fill="#8ba4b4" opacity="0.5" />
    </svg>
  ),
  designer: (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
      <rect x="16" y="12" width="88" height="56" rx="10" stroke="#c9a88a" strokeWidth="1.2" fill="rgba(201,168,138,0.06)" />
      <circle cx="40" cy="36" r="12" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.12)" />
      <path d="M56 30 Q72 36 56 48" stroke="#8ba4b4" strokeWidth="1.2" fill="none" />
      <rect x="68" y="28" width="28" height="20" rx="4" stroke="#9aab8f" strokeWidth="1" fill="rgba(154,171,143,0.1)" />
    </svg>
  ),
};

export function AboutVisual({ type }) {
  return <div className="card-visual">{aboutVisuals[type]}</div>;
}

const phaseVisuals = [
  (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="16" y="20" width="48" height="40" rx="6" stroke="#c9a88a" strokeWidth="1.2" fill="rgba(201,168,138,0.1)" />
      <circle cx="40" cy="36" r="8" stroke="#8ba4b4" strokeWidth="1" fill="rgba(139,164,180,0.15)" />
      <path d="M28 52h24" stroke="#989590" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="12" y="24" width="24" height="32" rx="4" stroke="#8ba4b4" strokeWidth="1" fill="rgba(139,164,180,0.08)" />
      <rect x="44" y="24" width="24" height="32" rx="4" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.08)" />
      <path d="M36 40h8" stroke="#9aab8f" strokeWidth="1.2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="14" y="18" width="52" height="44" rx="6" stroke="#9aab8f" strokeWidth="1.2" fill="rgba(154,171,143,0.08)" />
      <rect x="22" y="26" width="36" height="6" rx="2" fill="#9aab8f" opacity="0.35" />
      <rect x="22" y="38" width="24" height="4" rx="2" fill="#989590" opacity="0.3" />
      <rect x="22" y="48" width="32" height="8" rx="3" stroke="#8ba4b4" strokeWidth="0.8" fill="rgba(139,164,180,0.1)" />
    </svg>
  ),
  (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M20 56 L40 24 L60 56 Z" stroke="#c9a88a" strokeWidth="1.2" fill="rgba(201,168,138,0.08)" />
      <circle cx="40" cy="48" r="6" fill="#8ba4b4" opacity="0.4" />
      <path d="M28 62h24" stroke="#9aab8f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

export function PhaseVisual({ index }) {
  return <div className="phase-visual">{phaseVisuals[index]}</div>;
}

export function CalendarVisual({ days }) {
  return (
    <div className="calendar-visual" aria-hidden="true">
      {days.map((day) => (
        <div key={day.label} className="calendar-day">
          <div className="calendar-date-block">
            <span className="calendar-month">Aug</span>
            <span className="calendar-day-num">{day.date.match(/\d+/)?.[0]}</span>
          </div>
          <div className="calendar-day-meta">
            <span className="calendar-label">{day.label}</span>
            <span className="calendar-time">{day.time.replace(" IST", "")}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LocationVisual() {
  return (
    <div className="location-visual-row" aria-hidden="true">
      <div className="loc-visual-item">
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 6 C16 6 10 14 10 22 C10 32 24 42 24 42 C24 42 38 32 38 22 C38 14 32 6 24 6Z" stroke="#c9a88a" strokeWidth="1.2" fill="rgba(201,168,138,0.12)" />
          <circle cx="24" cy="22" r="5" fill="#c9a88a" opacity="0.5" />
        </svg>
        <span>Chennai</span>
      </div>
      <div className="loc-visual-divider" />
      <div className="loc-visual-item">
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="22" rx="3" stroke="#8ba4b4" strokeWidth="1.2" fill="rgba(139,164,180,0.1)" />
          <rect x="20" y="34" width="8" height="4" fill="#8ba4b4" opacity="0.4" />
          <rect x="14" y="38" width="20" height="2" rx="1" fill="#989590" opacity="0.4" />
        </svg>
        <span>Virtual</span>
      </div>
    </div>
  );
}

const metaIcons = {
  Dates: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Format: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Audience: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Focus: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  ),
};

export function MetaIcon({ label }) {
  return <span className="meta-icon">{metaIcons[label]}</span>;
}

export function RegisterVisual() {
  return (
    <svg className="register-visual" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="80" stroke="#8ba4b4" strokeWidth="1" fill="rgba(139,164,180,0.05)" opacity="0.6" />
      <circle cx="100" cy="100" r="56" stroke="#c9a88a" strokeWidth="1" fill="rgba(201,168,138,0.06)" opacity="0.5" />
      <rect x="70" y="75" width="60" height="50" rx="8" stroke="#9aab8f" strokeWidth="1.2" fill="rgba(154,171,143,0.1)" />
      <path d="M85 95h30M85 105h20M85 115h25" stroke="#989590" strokeWidth="1" opacity="0.5" />
      <circle cx="130" cy="68" r="10" fill="#c9a88a" opacity="0.35" />
    </svg>
  );
}

export function PhaseTimeline({ items }) {
  return (
    <div className="phase-timeline" role="list" aria-label="Workshop phase timeline">
      {items.map((item, i) => (
        <div
          key={item.number}
          className={`timeline-node ${i < items.length - 1 ? "has-line" : ""}`}
          role="listitem"
        >
          <span className="timeline-dot" aria-hidden="true" />
          <span className="timeline-label">{item.number}</span>
          <span className="timeline-day">{item.dayLabel}</span>
        </div>
      ))}
    </div>
  );
}
