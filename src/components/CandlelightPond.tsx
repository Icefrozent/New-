import React, { useState, useRef } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { LotusIcon } from './Ornaments';
import { playChime } from '../utils/audio';

interface CandlelightPondProps {
  lang: Language;
}

interface FloatingLantern {
  id: number;
  x: number;
  y: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const CandlelightPond: React.FC<CandlelightPondProps> = ({ lang }) => {
  const t = i18n[lang];
  const pondRef = useRef<HTMLDivElement>(null);
  const [lanterns, setLanterns] = useState<FloatingLantern[]>([
    { id: 1, x: 28, y: 72 },
    { id: 2, x: 74, y: 68 },
    { id: 3, x: 50, y: 80 }
  ]);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handlePondClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pondRef.current) return;
    const rect = pondRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Trigger soft bell chime
    playChime(659.25, 2.0);

    // Add ripple
    const rippleId = Date.now();
    setRipples((prev) => [...prev.slice(-6), { id: rippleId, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 2000);

    // Add floating lotus lantern
    const lanternId = rippleId + 1;
    setLanterns((prev) => [...prev.slice(-8), { id: lanternId, x, y }]);
  };

  return (
    <section
      id="pond"
      ref={pondRef}
      onClick={handlePondClick}
      className="relative w-full min-h-[85svh] flex flex-col justify-between items-center text-center overflow-hidden cursor-pointer select-none py-12 px-4"
    >
      {/* Background: Lotus Pond photo with glowing floating candle lanterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/couple_lotus_pond_1792338261309.jpg"
          alt="Tranquil lotus pond at night with candle lanterns"
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#120f0b]/50 to-[#120f0b]/85" />
      </div>

      {/* Water Ripples Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full border-2 border-amber-300/60 pointer-events-none"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              width: '80px',
              height: '80px',
              transform: 'translate(-50%, -50%)',
              animation: 'waterRipple 1.8s cubic-bezier(0.2, 0.8, 0.4, 1) forwards'
            }}
          />
        ))}

        {/* Floating Lotus Lanterns */}
        {lanterns.map((lantern) => (
          <div
            key={lantern.id}
            className="absolute pointer-events-none transition-all duration-1000 animate-float"
            style={{
              left: `${lantern.x}%`,
              top: `${lantern.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative flex flex-col items-center">
              {/* Golden Candle Flame Glow */}
              <div className="w-2.5 h-3.5 bg-amber-300 rounded-full animate-candle filter drop-shadow-[0_0_12px_#ffb65c] -mb-1" />
              {/* Lotus Blossom */}
              <LotusIcon className="w-10 sm:w-12 h-10 sm:h-12" />
            </div>
          </div>
        ))}
      </div>

      {/* Header Info */}
      <div className="relative z-20 max-w-xl mx-auto">
        <span className="font-moul text-xs sm:text-sm text-amber-200/90 tracking-widest block uppercase drop-shadow">
          {t.pondKicker}
        </span>
        <h2 className="font-moul text-2xl sm:text-4xl foil mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          {weddingData.couple.groom.shortKm} <span className="font-script text-3xl sm:text-5xl text-amber-300">&amp;</span> {weddingData.couple.bride.shortKm}
        </h2>
        <p className="font-serif italic text-sm text-amber-100/80 mt-1">
          {t.pondTitle}
        </p>
      </div>

      {/* Interactive Floating Lotus Cue at Bottom */}
      <div className="relative z-20 mt-auto bg-[#120f0b]/70 backdrop-blur-md border border-amber-300/30 rounded-full px-5 py-2.5 shadow-xl max-w-md">
        <p className="font-kh text-xs sm:text-sm text-amber-200/90">
          ✨ {t.pondHint}
        </p>
      </div>
    </section>
  );
};
