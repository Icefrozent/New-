import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { WaxSealImg, Crest, Butterfly, Corner } from './Ornaments';
import { playPaperRustle, playChime, startAmbientMusic } from '../utils/audio';

interface EnvelopeGateProps {
  lang: Language;
  onOpenComplete: () => void;
}

export const EnvelopeGate: React.FC<EnvelopeGateProps> = ({ lang, onOpenComplete }) => {
  const [openingState, setOpeningState] = useState<
    | 'idle'
    | 'pressed'
    | 'seal-lifting'
    | 'flap-opening'
    | 'card-extracting'
    | 'trifold-unfolding'
    | 'entering'
    | 'completed'
  >('idle');
  const [pointerTilt, setPointerTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const t = i18n[lang];

  // Mouse tilt on desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    if (openingState !== 'idle') return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 8;
    const y = (e.clientY / innerHeight - 0.5) * -8;
    setPointerTilt({ x, y });
  };

  const handleOpen = () => {
    if (openingState !== 'idle') return;

    // Start sound and paper rustle
    playPaperRustle();
    startAmbientMusic();

    // Trigger seal press
    setOpeningState('pressed');

    // Confetti burst from seal
    confetti({
      particleCount: 36,
      spread: 75,
      origin: { y: 0.52 },
      colors: ['#fbefc0', '#d9b15a', '#9c7124', '#ffffff'],
      disableForReducedMotion: true
    });

    // Step 1: Lift wax seal
    setTimeout(() => {
      setOpeningState('seal-lifting');
      playPaperRustle();
    }, 400);

    // Step 2: 3D flap folds back 180 degrees
    setTimeout(() => {
      setOpeningState('flap-opening');
    }, 1200);

    // Step 3: Card drawn out of pocket
    setTimeout(() => {
      setOpeningState('card-extracting');
      playChime(523.25, 2.5);
    }, 2400);

    // Step 4: Trifold unfolds Left and Right flaps in full 3D! (As seen in video 00:06 - 00:09)
    setTimeout(() => {
      setOpeningState('trifold-unfolding');
      playPaperRustle();
      playChime(659.25, 2.2);
    }, 3600);

    // Step 5: Card glides forward into main screen
    setTimeout(() => {
      setOpeningState('entering');
    }, 5500);

    // Step 6: Finished, reveal cover hero
    setTimeout(() => {
      setOpeningState('completed');
      onOpenComplete();
    }, 6700);
  };

  if (openingState === 'completed') return null;

  const flapClipPath =
    'polygon(0% 0%, 100% 0%, 100% 10%, 94.7% 12.8%, 88.9% 18.5%, 83.3% 25.5%, 77.8% 33.5%, 72.2% 41.8%, 66.7% 50.2%, 61.1% 58.5%, 55.6% 67.2%, 50% 75%, 44.4% 67.2%, 38.9% 58.5%, 33.3% 50.2%, 27.8% 41.8%, 22.2% 33.5%, 16.7% 25.5%, 11.1% 18.5%, 5.3% 12.8%, 0% 10%)';

  const isTrifoldOpen = openingState === 'trifold-unfolding' || openingState === 'entering';
  const isExtracted =
    openingState === 'card-extracting' ||
    openingState === 'trifold-unfolding' ||
    openingState === 'entering';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        openingState === 'entering' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#101309' }}
    >
      {/* Background: Blurred couple photo + ambient vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/hero_wedding_couple_1792338260569.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-md brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#120f0b]/70 to-[#120f0b]/95" />
        <div className="absolute inset-0 bg-pattern opacity-30" />
      </div>

      {/* Top Header Blessing Text above envelope */}
      <div
        className={`relative z-10 text-center mb-3 sm:mb-5 px-4 transition-all duration-700 ${
          openingState !== 'idle' ? 'opacity-25 -translate-y-4' : 'opacity-100'
        }`}
      >
        <span className="font-moul text-amber-200/95 text-lg sm:text-2xl tracking-normal block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {t.kicker}
        </span>
        <span className="font-serif tracking-[0.25em] text-xs sm:text-sm text-amber-100/70 uppercase mt-0.5 block">
          {t.weddingInvitation}
        </span>
      </div>

      {/* 3D Envelope Stage */}
      <div
        className="relative z-20 perspective-stage flex items-center justify-center w-full px-4"
        style={{
          transform: `rotateY(${pointerTilt.x}deg) rotateX(${pointerTilt.y}deg)`,
          transition: openingState === 'idle' ? 'transform 0.15s ease-out' : 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Envelope Container: Entire envelope is clickable when idle */}
        <div
          onClick={openingState === 'idle' ? handleOpen : undefined}
          className={`relative w-[320px] sm:w-[410px] h-[320px] sm:h-[410px] preserve-3d transition-all duration-1000 ${
            openingState === 'idle' ? 'cursor-pointer hover:scale-[1.015]' : ''
          } ${
            openingState === 'entering'
              ? 'translate-y-96 scale-90 opacity-0'
              : isExtracted
              ? 'translate-y-24 scale-95 opacity-80'
              : ''
          }`}
        >
          {/* 1. Envelope Back Panel */}
          <div
            className="absolute inset-0 rounded-xl paper-olive shadow-2xl preserve-3d z-0"
            style={{
              boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.75), 0 24px 60px rgba(0,0,0,0.85)'
            }}
          />

          {/* 2. Trifold Invitation Card (Unfolds 3 panels in full 3D as in video 00:06 - 00:09) */}
          <div
            className={`absolute inset-x-3.5 top-3.5 h-[300px] sm:h-[385px] rounded-lg paper-cream paper-border-inner shadow-2xl z-10 transition-all duration-1000 preserve-3d ${
              openingState === 'entering'
                ? '-translate-y-20 scale-[1.3] shadow-[0_35px_80px_rgba(0,0,0,0.95)] z-50'
                : openingState === 'card-extracting'
                ? '-translate-y-52 -rotate-1 scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-40'
                : isTrifoldOpen
                ? '-translate-y-48 scale-[1.08] sm:scale-[1.12] shadow-[0_30px_70px_rgba(0,0,0,0.95)] z-40'
                : 'translate-y-0'
            }`}
          >
            {/* Center Panel Content */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-between text-center select-none z-10">
              <div className="scale-75 -mt-1">
                <Crest className="w-14 sm:w-16 h-auto" />
              </div>

              <div className="my-auto space-y-1">
                <div className="text-xs sm:text-sm font-moul text-amber-900/80">
                  {t.guestHonor}
                </div>
                <div className="font-moul text-xl sm:text-2xl foil leading-relaxed pt-1 pb-0.5">
                  {weddingData.couple.groom.shortKm} &amp; {weddingData.couple.bride.shortKm}
                </div>
                <div className="font-serif italic text-xs sm:text-sm text-amber-900/80">
                  {weddingData.couple.groom.en} &amp; {weddingData.couple.bride.en}
                </div>
                <div className="text-xs text-amber-950/80 font-kh pt-2">
                  {weddingData.date.solarDateKm}
                </div>
                <div className="text-[11px] text-amber-900/70 font-kh">
                  {weddingData.date.lunarKm}
                </div>
              </div>

              <div className="w-full flex items-center justify-center border-t border-amber-900/20 pt-2 text-[11px] text-amber-900/80 font-kh">
                <span>{weddingData.venue.nameKm}</span>
              </div>
            </div>

            {/* Trifold Left Flap: Unfolds to the left (-180deg) */}
            <div
              className={`absolute inset-y-0 left-0 w-1/2 origin-left preserve-3d transition-transform duration-1000 z-20 ${
                isTrifoldOpen ? 'rotate-y-[-180deg]' : 'rotate-y-0'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              {/* Outer Face of Left Flap (Cream paper with corner kbach) */}
              <div
                className="absolute inset-0 paper-cream border-r border-amber-900/20 p-3 backface-hidden shadow-lg flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Corner position="tl" className="top-1 left-1 w-10 h-10 opacity-70" />
                <Corner position="bl" className="bottom-1 left-1 w-10 h-10 opacity-70" />
                <span className="font-serif italic text-[11px] text-amber-900/50 uppercase tracking-widest">
                  Invitation
                </span>
              </div>

              {/* Inner Face of Left Flap: Programme Summary (Seen when unfolded) */}
              <div
                className="absolute inset-0 paper-cream p-3 sm:p-4 text-left border-l border-amber-900/20 overflow-hidden flex flex-col justify-between"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div>
                  <span className="font-moul text-[10px] text-amber-900/80 block uppercase border-b border-amber-900/20 pb-1">
                    កម្មវិធីសង្ខេប
                  </span>
                  <div className="mt-2 space-y-1.5 text-[9px] sm:text-[10px] font-kh text-amber-950/90 leading-tight">
                    <p className="font-semibold text-amber-900">ថ្ងៃសៅរ៍ ទី១៤ វិច្ឆិកា</p>
                    <p>• ០៤:០០ រសៀល សូត្រមន្ត</p>
                    <p>• ០៦:៣០ ល្ងាច ពិសាអាហារ</p>
                    <p className="font-semibold text-amber-900 pt-1">ថ្ងៃអាទិត្យ ទី១៥ វិច្ឆិកា</p>
                    <p>• ០៧:០០ ព្រឹក ហែជំនូន</p>
                    <p>• ០៨:០០ ព្រឹក បំពាក់ចិញ្ចៀន</p>
                    <p>• ០៨:៣០ ព្រឹក កាត់សក់</p>
                    <p>• ០៤:៣០ រសៀល ពិសារភោជនាហារ</p>
                  </div>
                </div>
                <Corner position="bl" className="bottom-1 left-1 w-8 h-8 opacity-40" />
              </div>
            </div>

            {/* Trifold Right Flap: Unfolds to the right (180deg) */}
            <div
              className={`absolute inset-y-0 right-0 w-1/2 origin-right preserve-3d transition-transform duration-1000 z-20 ${
                isTrifoldOpen ? 'rotate-y-180' : 'rotate-y-0'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              {/* Outer Face of Right Flap (Cream paper with corner kbach) */}
              <div
                className="absolute inset-0 paper-cream border-l border-amber-900/20 p-3 backface-hidden shadow-lg flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Corner position="tr" className="top-1 right-1 w-10 h-10 opacity-70" />
                <Corner position="br" className="bottom-1 right-1 w-10 h-10 opacity-70" />
                <span className="font-serif italic text-[11px] text-amber-900/50 uppercase tracking-widest">
                  R &amp; T
                </span>
              </div>

              {/* Inner Face of Right Flap: Illustrated Mini Map & Contacts (Seen when unfolded) */}
              <div
                className="absolute inset-0 paper-cream p-2.5 sm:p-3 text-center border-r border-amber-900/20 overflow-hidden flex flex-col justify-between"
                style={{
                  transform: 'rotateY(-180deg)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="flex flex-col h-full justify-between items-center w-full">
                  <span className="font-moul text-[11px] sm:text-xs text-amber-900/90 block uppercase border-b border-amber-900/20 pb-1 w-full text-center">
                    ផែនទី &amp; ទំនាក់ទំនង
                  </span>

                  {/* Illustrated Route Map fitted to panel */}
                  <div className="flex-1 w-full my-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="/orn/line-map.svg"
                      alt="Mini Roadmap"
                      className="w-full h-full max-h-[230px] sm:max-h-[290px] object-contain filter drop-shadow opacity-95"
                    />
                  </div>

                  {/* Contact phone numbers at bottom */}
                  <div className="w-full pt-1.5 border-t border-amber-900/20 text-[10px] sm:text-[11px] font-kh text-amber-950 font-semibold flex items-center justify-center gap-2 sm:gap-3">
                    <span>096 7 717 278</span>
                    <span>•</span>
                    <span>070 895 623</span>
                  </div>
                </div>
                <Corner position="br" className="bottom-1 right-1 w-8 h-8 opacity-40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 3. Front Pocket Panels */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20">
            {/* Left pocket fold */}
            <div
              className="absolute inset-y-0 left-0 w-full paper-olive shadow-[2px_0_12px_rgba(0,0,0,0.4)]"
              style={{
                clipPath: 'polygon(0 0, 54% 54%, 0 100%)',
                filter: 'brightness(0.95)'
              }}
            />
            {/* Right pocket fold */}
            <div
              className="absolute inset-y-0 right-0 w-full paper-olive shadow-[-2px_0_12px_rgba(0,0,0,0.4)]"
              style={{
                clipPath: 'polygon(100% 0, 46% 54%, 100% 100%)',
                filter: 'brightness(0.95)'
              }}
            />
            {/* Bottom pocket fold */}
            <div
              className="absolute inset-x-0 bottom-0 h-full paper-olive shadow-[0_-4px_16px_rgba(0,0,0,0.45)]"
              style={{
                clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
                filter: 'brightness(1.02)'
              }}
            />

            {/* Bottom-left corner debossed floral kbach */}
            <Corner position="bl" className="bottom-2 left-2 w-14 h-14 sm:w-16 sm:h-16 opacity-75" />

            {/* Bottom-right corner debossed floral kbach */}
            <Corner position="br" className="bottom-2 right-2 w-14 h-14 sm:w-16 sm:h-16 opacity-75" />

            {/* Centered couple name and date in gold foil on bottom pocket under wax seal */}
            <div className="absolute bottom-2.5 sm:bottom-3 inset-x-0 text-center font-kh text-[11px] sm:text-xs text-amber-200/75 tracking-[0.18em]">
              {weddingData.couple.groom.shortKm} &amp; {weddingData.couple.bride.shortKm} · ១៥ · ១១ · ២០២៦
            </div>
          </div>

          {/* 4. Top Flap */}
          <div
            className={`absolute inset-x-0 top-0 h-[68%] origin-top preserve-3d transition-transform duration-1000 ${
              openingState === 'idle' || openingState === 'pressed' || openingState === 'seal-lifting'
                ? 'rotate-x-0 z-30'
                : 'rotate-x-[-180deg] z-0'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Flap Outer Front */}
            <div
              className="absolute inset-0 paper-olive flex flex-col items-center justify-start pt-3 preserve-3d backface-hidden overflow-hidden"
              style={{
                clipPath: flapClipPath,
                boxShadow: '0 12px 24px rgba(0,0,0,0.6)',
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Botanical Scalloped Border Overlay along flap edges */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <img
                  src="/orn/flap.svg"
                  alt=""
                  className="w-full h-full object-contain object-top"
                />
              </div>

              {/* Centered Monogram Lockup matching Pic 1 (above wax seal) */}
              <div className="relative w-full max-w-[270px] sm:max-w-[310px] flex flex-col items-center justify-center mt-1 sm:mt-2.5 z-10">
                {/* Top Center: Mini Gold Crest */}
                <div className="mb-0.5 scale-90">
                  <Crest className="w-10 sm:w-12 h-auto" />
                </div>

                {/* Interlocking Monogram Container */}
                <div className="relative w-full h-[74px] sm:h-[84px] flex items-center justify-center">
                  {/* Fluttering Butterfly above Bride */}
                  <div className="absolute -top-1.5 right-6 sm:right-8 animate-butterfly pointer-events-none z-20">
                    <Butterfly className="w-6 sm:w-7 h-6 sm:h-7 filter drop-shadow-[0_0_8px_rgba(251,239,192,0.8)]" />
                  </div>

                  {/* Central Flourish Ribbon with Heart */}
                  <svg
                    viewBox="0 0 240 80"
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M 35 54 C 70 65, 105 24, 120 44 C 135 64, 170 20, 205 32"
                      fill="none"
                      stroke="url(#g-foil)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      className="opacity-90"
                    />
                    <circle cx="120" cy="44" r="3.5" fill="url(#g-foil)" />
                    {/* Delicate Gold Heart */}
                    <path
                      d="M 120 40 C 117 36, 112 37, 112 41 C 112 45, 120 50, 120 50 C 120 50, 128 45, 128 41 C 128 37, 123 36, 120 40 Z"
                      fill="#d9b15a"
                      transform="translate(0, -6)"
                    />
                  </svg>

                  {/* Groom Name in Moul gold foil on left of center */}
                  <div className="absolute top-0.5 left-5 sm:left-7 text-left z-10">
                    <span className="font-moul text-xl sm:text-2xl foil pt-1 pb-0.5 block leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      {weddingData.couple.groom.shortKm}
                    </span>
                  </div>

                  {/* Bride Name in Moul gold foil on right of center */}
                  <div className="absolute bottom-0.5 right-5 sm:right-7 text-right z-10">
                    <span className="font-moul text-xl sm:text-2xl foil pt-1 pb-0.5 block leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                      {weddingData.couple.bride.shortKm}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flap Inner Lining */}
            <div
              className="absolute inset-0 paper-lining flex flex-col items-center justify-center p-4 preserve-3d"
              style={{
                clipPath: flapClipPath,
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden'
              }}
            >
              <Crest className="w-14 sm:w-16 h-auto opacity-70" />
            </div>
          </div>

          {/* 5. Gold Wax Seal from Pic 2 positioned in the center with expanded hit area */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
            className={`absolute left-1/2 -translate-x-1/2 top-[47%] -translate-y-1/2 z-40 cursor-pointer select-none transition-all duration-700 p-4 sm:p-6 -m-4 sm:-m-6 ${
              openingState === 'idle'
                ? 'hover:scale-105 active:scale-95 animate-pulse-gold'
                : openingState === 'pressed'
                ? 'scale-90 brightness-110'
                : openingState === 'seal-lifting'
                ? 'scale-125 -translate-y-24 opacity-70 rotate-12 shadow-[0_30px_50px_rgba(0,0,0,0.85)]'
                : 'scale-75 translate-x-32 -translate-y-36 opacity-0 pointer-events-none'
            }`}
            title={t.tapSeal}
          >
            {/* The Gold Wax Seal from Pic 2 */}
            <div className="relative w-22 sm:w-26 h-22 sm:h-26 flex items-center justify-center">
              <WaxSealImg className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Hint to Tap Seal */}
      <div
        className={`relative z-20 mt-6 sm:mt-8 text-center transition-opacity duration-500 ${
          openingState === 'idle' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handleOpen}
          type="button"
          className="inline-flex flex-col items-center gap-1 group px-4 py-2"
        >
          <span className="font-moul text-sm sm:text-base foil group-hover:scale-105 transition-transform">
            {t.tapSeal}
          </span>
          <span className="text-xs text-amber-100/60 font-serif tracking-wider uppercase">
            {t.tapSealSub}
          </span>
        </button>
      </div>
    </div>
  );
};
