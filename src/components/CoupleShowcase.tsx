import React from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider, Butterfly } from './Ornaments';

interface CoupleShowcaseProps {
  lang: Language;
}

export const CoupleShowcase: React.FC<CoupleShowcaseProps> = ({ lang }) => {
  const t = i18n[lang];

  // Groom Info Block
  const groomBlock = (
    <div className="space-y-1">
      <span className="text-[11px] sm:text-xs uppercase font-serif tracking-[0.2em] text-amber-300/80 block">
        {t.groomLabel}
      </span>
      <h3 className="font-moul text-xl sm:text-2xl md:text-3xl foil pt-1 pb-0.5 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {weddingData.couple.groom.km}
      </h3>
      <p className="font-serif italic text-sm sm:text-base md:text-lg text-amber-200/85">
        {weddingData.couple.groom.en}
      </p>
      <div className="pt-1.5 sm:pt-2">
        <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-wider text-amber-200/50 block">
          {t.sonOf}
        </span>
        <p className="font-kh text-[11px] sm:text-xs md:text-sm text-amber-100/90 leading-relaxed mt-0.5">
          {weddingData.parents.groom.father.km}
          <br />
          និង {weddingData.parents.groom.mother.km}
        </p>
      </div>
    </div>
  );

  // Bride Info Block
  const brideBlock = (
    <div className="space-y-1">
      <span className="text-[11px] sm:text-xs uppercase font-serif tracking-[0.25em] text-amber-300/80 block">
        {t.brideLabel}
      </span>
      <h3 className="font-moul text-xl sm:text-2xl md:text-3xl foil pt-1 pb-0.5 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {weddingData.couple.bride.km}
      </h3>
      <p className="font-serif italic text-sm sm:text-base md:text-lg text-amber-200/85">
        {weddingData.couple.bride.en}
      </p>
      <div className="pt-1.5 sm:pt-2">
        <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-wider text-amber-200/50 block">
          {t.daughterOf}
        </span>
        <p className="font-kh text-[11px] sm:text-xs md:text-sm text-amber-100/90 leading-relaxed mt-0.5">
          {weddingData.parents.bride.father.km}
          <br />
          និង {weddingData.parents.bride.mother.km}
        </p>
      </div>
    </div>
  );

  // Scalloped Photo Frame with Ampersand Medallion & Butterfly
  const photoBlock = (
    <div className="flex justify-center my-2 md:my-0">
      <div className="relative shrink-0">
        <div className="scallop-frame w-52 h-68 sm:w-64 sm:h-80 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <img
            src="/src/assets/images/couple_cozy_portrait_1792338261618.jpg"
            alt="Rithy and Thida Portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Central Golden Ampersand Medallion */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#30371a] border-2 border-amber-300/50 rounded-full w-11 h-11 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.8)] z-20">
          <span className="font-script text-2xl text-amber-200 leading-none">&amp;</span>
        </div>

        {/* Fluttering Golden Butterfly */}
        <div className="absolute -top-4 -right-4 animate-butterfly z-20 pointer-events-none">
          <Butterfly className="w-8 h-8 filter drop-shadow-[0_0_8px_rgba(251,239,192,0.9)]" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="couple" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-pattern opacity-15 pointer-events-none" />

      {/* Chapter Heading */}
      <div className="text-center mb-10 sm:mb-12 relative z-10">
        <Crest className="w-16 h-auto mx-auto mb-2 opacity-80" />
        <span className="font-moul text-xs sm:text-sm text-amber-300/80 uppercase tracking-widest block">
          {t.coupleKicker}
        </span>
        <h2 className="font-moul text-2xl sm:text-3xl foil mt-1">
          {weddingData.couple.groom.shortKm} <span className="font-script text-3xl sm:text-4xl text-amber-300">&amp;</span> {weddingData.couple.bride.shortKm}
        </h2>
        <Divider className="w-48 sm:w-64" />
      </div>

      {/* 1. Desktop Layout (3 Columns: Groom Left - Photo Center - Bride Right) */}
      <div className="relative z-10 hidden md:grid md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
        <div className="md:col-span-4 text-right">
          {groomBlock}
        </div>
        <div className="md:col-span-4">
          {photoBlock}
        </div>
        <div className="md:col-span-4 text-left">
          {brideBlock}
        </div>
      </div>

      {/* 2. Mobile Layout (Photo Center on top, Bride Left & Groom Right on ONE LINE underneath, matching Pic 3) */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:hidden w-full max-w-lg mx-auto">
        {/* Scalloped Photo */}
        {photoBlock}

        {/* Both Names on ONE Line in 2 Columns: Bride Left & Groom Right as requested in Pic 3 */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full pt-4 border-t border-amber-300/20 text-center">
          {/* Left Column: Bride (កូនស្រីនាម ធីដា) */}
          <div className="px-1">
            {brideBlock}
          </div>

          {/* Right Column: Groom (កូនប្រុសនាម រិទ្ធី) */}
          <div className="px-1 border-l border-amber-300/20">
            {groomBlock}
          </div>
        </div>
      </div>
    </section>
  );
};
