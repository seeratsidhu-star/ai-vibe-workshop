export function Sparkle({
  className = "",
  size = 16,
  ariaHidden = true,
  style,
}) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <path d="M8 0l1.2 4.8L14 6l-4.8 1.2L8 12 6.8 7.2 2 6l4.8-1.2L8 0z" />
    </svg>
  );
}

export function FortuneCookieIllustration({ cracked = false, className = "" }) {
  if (cracked) {
    return (
      <svg
        className={`fortune-cookie-svg is-cracked ${className}`}
        viewBox="0 0 200 120"
        aria-hidden="true"
      >
        <g className="cookie-half cookie-half-left">
          <path
            d="M20 60 C20 30 50 15 80 25 C95 30 100 45 95 60 C90 78 70 90 45 85 C30 82 20 72 20 60 Z"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="2.5"
          />
          <path
            d="M35 55 C45 48 60 50 70 58"
            fill="none"
            stroke="#EAB308"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <g className="cookie-half cookie-half-right">
          <path
            d="M180 60 C180 30 150 15 120 25 C105 30 100 45 105 60 C110 78 130 90 155 85 C170 82 180 72 180 60 Z"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="2.5"
          />
          <path
            d="M165 55 C155 48 140 50 130 58"
            fill="none"
            stroke="#EAB308"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <g className="fortune-slip" transform="translate(68, 38)">
          <rect
            x="0"
            y="0"
            width="64"
            height="44"
            rx="3"
            fill="#FFF7ED"
            stroke="#D97706"
            strokeWidth="1.2"
          />
          <line x1="8" y1="14" x2="56" y2="14" stroke="#D97706" strokeWidth="1" opacity="0.35" />
          <line x1="8" y1="22" x2="48" y2="22" stroke="#D97706" strokeWidth="1" opacity="0.35" />
          <line x1="8" y1="30" x2="52" y2="30" stroke="#D97706" strokeWidth="1" opacity="0.35" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={`fortune-cookie-svg ${className}`}
      viewBox="0 0 200 120"
      aria-hidden="true"
    >
      <ellipse cx="100" cy="95" rx="52" ry="8" fill="#CA8A04" opacity="0.15" />
      <path
        d="M30 62 C30 38 55 18 100 22 C145 18 170 38 170 62 C170 82 140 98 100 98 C60 98 30 82 30 62 Z"
        fill="#FACC15"
        stroke="#CA8A04"
        strokeWidth="2.5"
      />
      <path
        d="M100 28 C100 28 88 42 82 58 C76 74 82 88 100 92 C118 88 124 74 118 58 C112 42 100 28 100 28 Z"
        fill="none"
        stroke="#EAB308"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55 58 C70 50 85 52 95 62"
        fill="none"
        stroke="#EAB308"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M145 58 C130 50 115 52 105 62"
        fill="none"
        stroke="#EAB308"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <g className="cookie-sparkle cookie-sparkle-a" transform="translate(148, 18)">
        <path
          d="M7 0l1 3.5L11.5 4.5 8.5 7.5 9.5 12 7 9.5 4.5 12 5.5 7.5 2.5 4.5 7 3.5 7 0z"
          fill="#FACC15"
        />
      </g>
      <g className="cookie-sparkle cookie-sparkle-b" transform="translate(162, 8) scale(0.75)">
        <path
          d="M7 0l1 3.5L11.5 4.5 8.5 7.5 9.5 12 7 9.5 4.5 12 5.5 7.5 2.5 4.5 7 3.5 7 0z"
          fill="#FACC15"
        />
      </g>
    </svg>
  );
}
