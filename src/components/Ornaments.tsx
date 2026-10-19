import React from 'react';

export const Crest: React.FC<{ className?: string }> = ({ className = 'w-24 h-auto' }) => (
  <img
    src="/orn/crest.svg"
    alt=""
    aria-hidden="true"
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_2px_8px_rgba(217,177,90,0.35)] ${className}`}
  />
);

export const Divider: React.FC<{ className?: string }> = ({ className = 'w-64 max-w-full h-auto' }) => (
  <div className="flex items-center justify-center my-4 select-none pointer-events-none">
    <img
      src="/orn/divider.svg"
      alt=""
      aria-hidden="true"
      className={`filter drop-shadow-[0_1px_4px_rgba(217,177,90,0.25)] ${className}`}
    />
  </div>
);

export const Corner: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}> = ({ position, className = 'w-16 h-16 sm:w-24 sm:h-24' }) => {
  const transform = {
    tl: '',
    tr: 'scale-x-[-1]',
    bl: 'scale-y-[-1]',
    br: 'scale-x-[-1] scale-y-[-1]'
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`absolute select-none pointer-events-none opacity-80 ${transform} ${className}`}
    >
      <img
        src="/orn/corner.svg"
        alt=""
        className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(217,177,90,0.3)]"
      />
    </div>
  );
};

/**
 * Pure SVG Butterfly - 100% reliable inline rendering with gold gradient and antenna
 */
export const Butterfly: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 100 80"
    className={`inline-block select-none pointer-events-none animate-float ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bfly-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9c7124" />
        <stop offset="25%" stopColor="#d9b15a" />
        <stop offset="50%" stopColor="#fbefc0" />
        <stop offset="75%" stopColor="#d9b15a" />
        <stop offset="100%" stopColor="#9c7124" />
      </linearGradient>
    </defs>
    {/* Left Wing */}
    <g transform="translate(100 0) scale(-1 1)">
      <path
        d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z"
        fill="url(#bfly-grad)"
        fillOpacity="0.95"
      />
      <path
        d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z"
        fill="url(#bfly-grad)"
        fillOpacity="0.8"
      />
      <path
        d="M53 39 C64 30 76 20 90 13 M56 39 C68 36 80 33 92 24 M54 44 C62 52 70 58 78 64 M53 46 C57 56 61 64 66 70"
        fill="none"
        stroke="#5a4113"
        strokeWidth="0.8"
        strokeOpacity="0.55"
      />
      <circle cx="86" cy="15" r="1.6" fill="#fff6d8" opacity="0.85" />
      <circle cx="90" cy="22" r="1.1" fill="#fff6d8" opacity="0.75" />
    </g>
    {/* Right Wing */}
    <g>
      <path
        d="M51 38 C58 14 82 1 94 10 C103 18 92 33 75 39 C66 42 57 41 51 40 Z"
        fill="url(#bfly-grad)"
        fillOpacity="0.95"
      />
      <path
        d="M51 42 C62 44 80 50 81 62 C82 74 66 76 59 66 C54 59 51 51 51 42 Z"
        fill="url(#bfly-grad)"
        fillOpacity="0.8"
      />
      <path
        d="M53 39 C64 30 76 20 90 13 M56 39 C68 36 80 33 92 24 M54 44 C62 52 70 58 78 64 M53 46 C57 56 61 64 66 70"
        fill="none"
        stroke="#5a4113"
        strokeWidth="0.8"
        strokeOpacity="0.55"
      />
      <circle cx="86" cy="15" r="1.6" fill="#fff6d8" opacity="0.85" />
      <circle cx="90" cy="22" r="1.1" fill="#fff6d8" opacity="0.75" />
    </g>
    {/* Body & Antennae */}
    <ellipse cx="50" cy="44" rx="2.4" ry="13" fill="url(#bfly-grad)" />
    <path
      d="M49 32 C46 22 42 16 37 12 M51 32 C54 22 58 16 63 12"
      fill="none"
      stroke="url(#bfly-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="37" cy="12" r="1.5" fill="url(#bfly-grad)" />
    <circle cx="63" cy="12" r="1.5" fill="url(#bfly-grad)" />
  </svg>
);

export const LotusIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 120 120"
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_2px_12px_rgba(255,182,92,0.6)] ${className}`}
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lotus-g-foil" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbefc0" />
        <stop offset="35%" stopColor="#d9b15a" />
        <stop offset="70%" stopColor="#9c7124" />
        <stop offset="100%" stopColor="#d9b15a" />
      </linearGradient>
    </defs>
    <g stroke="url(#lotus-g-foil)" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M60 18 C73 38 73 70 60 90 C47 70 47 38 60 18 Z" fill="rgba(251,239,192,0.35)"/>
      <path d="M60 90 C40 82 26 62 28 38 C42 46 54 62 60 90 Z" fill="rgba(217,177,90,0.25)"/>
      <path d="M60 90 C80 82 94 62 92 38 C78 46 66 62 60 90 Z" fill="rgba(217,177,90,0.25)"/>
      <path d="M60 92 C34 94 14 80 8 62 C26 61 46 71 60 92 Z" fill="rgba(217,177,90,0.18)"/>
      <path d="M60 92 C86 94 106 80 112 62 C94 61 74 71 60 92 Z" fill="rgba(217,177,90,0.18)"/>
      <path d="M18 104 Q60 94 102 104" fill="none"/>
      <path d="M34 112 Q60 106 86 112" fill="none"/>
    </g>
  </svg>
);

/**
 * Authentic Gold Wax Seal component matching Pic 2
 * Self-contained SVG with gold poured edge, stitched circular rim, and embossed crest
 */
export const WaxSealImg: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 140 140"
    className={`select-none pointer-events-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)] ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="wax-body" cx="38%" cy="32%" r="75%">
        <stop offset="0%" stopColor="#fff0c4" />
        <stop offset="25%" stopColor="#e7c97a" />
        <stop offset="60%" stopColor="#b98c35" />
        <stop offset="90%" stopColor="#8a631e" />
        <stop offset="100%" stopColor="#5a3d0f" />
      </radialGradient>
      <radialGradient id="wax-inner" cx="42%" cy="38%" r="65%">
        <stop offset="0%" stopColor="#d4aa52" />
        <stop offset="55%" stopColor="#aa7e2a" />
        <stop offset="100%" stopColor="#704e14" />
      </radialGradient>
      <linearGradient id="emboss-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff5d6" />
        <stop offset="40%" stopColor="#e8c772" />
        <stop offset="70%" stopColor="#b8882e" />
        <stop offset="100%" stopColor="#7d5516" />
      </linearGradient>
    </defs>

    {/* Poured uneven wax outer edge */}
    <path
      d="M127.5 70 L127.9 75.7 L130 81.9 L131.3 88.6 L129.2 94.5 L124.5 99.1 L119.7 103.2 L116 107.7 L111.9 111.9 L106.7 114.8 L101.4 117 L97.1 120.7 L93.1 125.8 L88.2 129.9 L82.1 130.7 L75.8 129.3 L70 128.5 L64.2 129.1 L58.2 129.3 L52.5 127.6 L47.2 125.2 L41.3 123.7 L34.9 122.5 L29.7 119.1 L26.9 113.1 L25.5 106.5 L23.2 101.3 L19.4 97.1 L15.8 92.5 L13.7 87.1 L12.1 81.5 L9.5 76 L6.8 70 L6.9 63.8 L10.3 58.1 L14.2 53.1 L16.2 47.7 L17 41.7 L19 35.9 L23 31.4 L27.5 27.5 L31.6 23.2 L35.9 19 L41.6 16.9 L48.1 17.1 L53.9 16.9 L58.9 14.1 L64.1 10.1 L70 7.8 L76.1 8.2 L82 9.5 L88.1 10.4 L94 12.2 L98.7 16.2 L102.2 21.8 L106 26.2 L111.3 28.7 L117.1 31.3 L121.2 35.8 L123.1 41.6 L124.5 47.4 L126.8 52.8 L128.7 58.3 L128.6 64.2 Z"
      fill="url(#wax-body)"
    />

    {/* Inner circular pressed disc */}
    <circle cx="70" cy="70" r="44" fill="url(#wax-inner)" />
    <circle cx="70" cy="70" r="44" fill="none" stroke="#5a3d0f" strokeWidth="1.2" strokeOpacity="0.6" />
    <circle cx="70" cy="70" r="41" fill="none" stroke="#ffe7a3" strokeWidth="0.8" strokeOpacity="0.4" />
    {/* Stitched ring */}
    <circle
      cx="70"
      cy="70"
      r="37.5"
      fill="none"
      stroke="#f6dfa1"
      strokeWidth="1.2"
      strokeDasharray="2 3.2"
      strokeOpacity="0.75"
    />

    {/* Center Auspicious Embossed Medallion / Crest (From Pic 2) */}
    <g transform="translate(70, 72)">
      {/* Base arch */}
      <path d="M -24 10 C -12 6, 12 6, 24 10 C 18 13, -18 13, -24 10 Z" fill="url(#emboss-gold)" />
      {/* Small center dot */}
      <circle cx="0" cy="-21" r="1.6" fill="url(#emboss-gold)" />
      {/* Center tall flame leaf */}
      <path d="M 0 6 C -4 -4, -1 -12, 0 -18 C 3 -13, 8 -7, 6 0 C 4 4, 1 5, 0 6 Z" fill="url(#emboss-gold)" />
      {/* Center-left leaf */}
      <path d="M -2 7 C -8 1, -12 -8, -6 -15 C -2 -11, -2 -5, -2 7 Z" fill="url(#emboss-gold)" />
      {/* Center-right leaf */}
      <path d="M 2 7 C 8 1, 12 -8, 6 -15 C 2 -11, 2 -5, 2 7 Z" fill="url(#emboss-gold)" />
      {/* Outer-left scrolled leaf */}
      <path d="M -6 8 C -14 5, -20 -3, -16 -10 C -12 -7, -11 -2, -6 8 Z" fill="url(#emboss-gold)" />
      {/* Outer-right scrolled leaf */}
      <path d="M 6 8 C 14 5, 20 -3, 16 -10 C 12 -7, 11 -2, 6 8 Z" fill="url(#emboss-gold)" />
      {/* Bottom curls */}
      <path d="M -16 6 C -20 7, -22 3, -18 1 C -15 0, -14 4, -16 6 Z" fill="url(#emboss-gold)" />
      <path d="M 16 6 C 20 7, 22 3, 18 1 C 15 0, 14 4, 16 6 Z" fill="url(#emboss-gold)" />
    </g>
  </svg>
);

/**
 * Animated Khmer Monogram Logo (ឡូហ្គោឈ្មោះ) matching Pic 1
 * Groom name top-left, bride name bottom-right in Moulpali gold foil,
 * crowned by a gold crest, butterfly above bride, joined by flourish with heart.
 */
export const NameLogo: React.FC<{
  groom: string;
  bride: string;
  compact?: boolean;
  className?: string;
}> = ({ groom, bride, compact = false, className = '' }) => {
  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 font-moul tracking-normal select-none ${className}`}>
        <span className="foil pt-1 pb-0.5 text-base sm:text-lg">{groom}</span>
        <span className="text-amber-200/80 font-serif text-sm italic">&amp;</span>
        <span className="foil pt-1 pb-0.5 text-base sm:text-lg">{bride}</span>
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Mini Gold Crest crowning the logo */}
      <div className="mb-[-2px] relative z-10 scale-90">
        <Crest className="w-14 sm:w-16 h-auto" />
      </div>

      {/* Interlocking Monogram Container */}
      <div className="relative w-64 sm:w-72 h-28 sm:h-32 flex items-center justify-center">
        {/* Floating butterfly above bride */}
        <div className="absolute top-1 right-8 animate-butterfly pointer-events-none z-20">
          <Butterfly className="w-6 sm:w-7 h-6 sm:h-7 filter drop-shadow-[0_0_8px_rgba(251,239,192,0.8)]" />
        </div>

        {/* Flourish SVG Ribbon Curve */}
        <svg
          viewBox="0 0 260 100"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          aria-hidden="true"
        >
          <path
            d="M 35 70 C 85 82, 115 20, 130 50 C 145 80, 175 18, 225 28"
            fill="none"
            stroke="url(#g-foil)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="opacity-90"
          />
          <circle cx="130" cy="50" r="4.5" fill="url(#g-foil)" />
          {/* Subtle Heart motif in center */}
          <path
            d="M 130 46 C 127 42, 122 43, 122 47 C 122 52, 130 56, 130 56 C 130 56, 138 52, 138 47 C 138 43, 133 42, 130 46 Z"
            fill="#d9b15a"
            opacity="0.9"
            transform="translate(0, -6)"
          />
        </svg>

        {/* Groom short name top-left in Moul */}
        <div className="absolute top-2 left-6 text-left z-10">
          <span className="font-moul text-2xl sm:text-3xl foil pt-1.5 pb-1 block leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {groom}
          </span>
        </div>

        {/* Bride short name bottom-right in Moul */}
        <div className="absolute bottom-2 right-6 text-right z-10">
          <span className="font-moul text-2xl sm:text-3xl foil pt-1.5 pb-1 block leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {bride}
          </span>
        </div>
      </div>
    </div>
  );
};
