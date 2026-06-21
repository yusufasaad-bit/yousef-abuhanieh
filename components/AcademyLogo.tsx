import React from 'react';

interface AcademyLogoProps {
  className?: string;
  height?: number;
}

export const AcademyLogo: React.FC<AcademyLogoProps> = ({ className = '', height = 48 }) => {
  // Proportional width for a 1:1 aspect ratio logo icon + layout spacing
  const iconSize = height;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} dir="rtl">
      {/* Crisp High-Fidelity SVG Icon matching the uploaded logo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        <defs>
          {/* Blue gradient for the left leg of A and the swoosh */}
          <linearGradient id="alfaBlueGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Golden/Orange gradient for the right leg of A and center sphere */}
          <linearGradient id="alfaOrangeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>

          {/* Black gradient for the graduation cap */}
          <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          {/* Gold gradient for the tassel */}
          <linearGradient id="tasselGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* Left Leg of A: Beautiful curved 3D dynamic stroke in blue */}
          <path
            d="M 52 35 C 44 35 34 50 28 65 C 23 78 20 86 18 90 L 34 90 C 37 83 42 70 48 56 C 53 43 56 35 52 35 Z"
            fill="url(#alfaBlueGrad)"
          />

          {/* Right Leg of A: Dynamic overlapping gradient stroke in orange/yellow */}
          <path
            d="M 55 52 L 72 52 L 86 90 L 69 90 Z"
            fill="url(#alfaOrangeGrad)"
          />

          {/* Center ring base support in white */}
          <circle cx="53" cy="50" r="14" fill="white" />
          
          {/* White ring overlay */}
          <circle cx="53" cy="50" r="11" stroke="white" strokeWidth="3" fill="none" />
          
          {/* Inner Orange Sphere inside the ring */}
          <circle cx="53" cy="50" r="8" fill="url(#alfaOrangeGrad)" />

          {/* Graduation Cap (resting on top of Left Blue Leg) */}
          {/* Mortarboard Diamond base */}
          <path
            d="M 64 12 L 88 24 L 64 36 L 40 24 Z"
            fill="url(#capGrad)"
            stroke="#1F2937"
            strokeWidth="0.5"
          />
          {/* Cap Skull Underneath */}
          <path
            d="M 50 25 L 50 29 C 50 32 56 34 64 34 C 72 34 78 32 78 29 L 78 25"
            fill="#111827"
          />
          {/* Golden Tassel Button & Thread */}
          <circle cx="64" cy="24" r="1.5" fill="url(#tasselGrad)" />
          <path
            d="M 64 24 Q 56 26 55 33"
            stroke="url(#tasselGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Golden Hanging Tassel Fringe */}
          <path
            d="M 55 33 L 53.5 39 L 56.5 39 Z"
            fill="url(#tasselGrad)"
          />

          {/* Dynamic swoosh wrap starting from bottom-left to bottom-right */}
          <path
            d="M 20 82 Q 53 64 86 82 Q 94 79 97 85 Q 81 72 20 82"
            fill="url(#alfaBlueGrad)"
          />

          {/* Star sparkle accent on the tail of swoosh */}
          <path
            d="M 94 66 L 95.5 70 L 99 71 L 95.5 72 L 94 76 L 92.5 72 L 89 71 L 92.5 70 Z"
            fill="#2563EB"
          />
        </g>
      </svg>

      {/* Styled Arabic text next to the logo */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1">
          <span className="text-xl font-black text-emerald-500 font-['Noto_Sans_Arabic'] tracking-wide">
            أكاديمية
          </span>
          <span className="text-xl font-black text-blue-500 font-['Noto_Sans_Arabic'] tracking-wide">
            الفريد
          </span>
        </div>
        <span className="text-[10px] font-medium text-slate-400 font-['Noto_Sans_Arabic'] tracking-wider opacity-90">
          لإنتاج الأفلام
        </span>
      </div>
    </div>
  );
};
