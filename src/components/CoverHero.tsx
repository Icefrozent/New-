import React from 'react';
import { weddingData, toKhmerNum } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Corner, NameLogo } from './Ornaments';
import { AmbientFlyingParticles } from './AmbientFlyingParticles';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

interface CoverHeroProps {
  lang: Language;
  onExploreClick: () => void;
}

export const CoverHero: React.FC<CoverHeroProps> = ({ lang, onExploreClick }) => {
  const t = i18n[lang];

  return (
    <section
      id="cover"
      className="relative w-full min-h-[100svh] flex flex-col justify-between items-center text-center overflow-hidden px-4 py-8 sm:py-12 select-none"
    >
      {/* Background: Darkened Pre-Wedding Couple Photo with layered scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/hero_wedding_couple_1792338260569.jpg"
          alt="Rithy and Thida Pre-wedding"
          className="w-full h-full object-cover object-[center_45%] filter brightness-[0.38] contrast-[1.05] saturate-[0.9]"
        />
        {/* Cinematic Vignette and radial golden glow */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#120f0b]/60 to-[#120f0b]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120f0b]/80 via-transparent to-[#120f0b]" />
        <div className="absolute inset-0 bg-pattern opacity-25" />
      </div>

      {/* Floating Golden Fireflies and Flying Butterflies */}
      <AmbientFlyingParticles />

      {/* 4 Corner Ornaments */}
      <Corner position="tl" className="top-3 left-3 sm:top-6 sm:left-6 w-14 h-14 sm:w-24 sm:h-24 z-10" />
      <Corner position="tr" className="top-3 right-3 sm:top-6 sm:right-6 w-14 h-14 sm:w-24 sm:h-24 z-10" />
      <Corner position="bl" className="bottom-3 left-3 sm:bottom-6 sm:left-6 w-14 h-14 sm:w-24 sm:h-24 z-10" />
      <Corner position="br" className="bottom-3 right-3 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-24 sm:h-24 z-10" />

      {/* Top Header Group: Crest + Blessing */}
      <div className="relative z-10 flex flex-col items-center pt-8 sm:pt-4">
        <Crest className="w-16 sm:w-20 h-auto mb-2 opacity-95" />
        <span className="font-moul text-base sm:text-xl foil tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {t.kicker}
        </span>
        <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-amber-100/70 mt-0.5">
          {t.weddingInvitation}
        </span>
      </div>

      {/* Middle Center Group: Animated Name Logo + Invitation Honor */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center max-w-xl">
        {/* Animated Name Logo in Moulpali gold foil with butterfly and flourish */}
        <div className="my-2">
          <NameLogo
            groom={weddingData.couple.groom.shortKm}
            bride={weddingData.couple.bride.shortKm}
            className="scale-100 sm:scale-110 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* English Names */}
        <div className="font-serif italic text-lg sm:text-2xl text-amber-100/90 tracking-wide mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {weddingData.couple.groom.en} <span className="font-script text-2xl sm:text-3xl text-amber-300">&amp;</span> {weddingData.couple.bride.en}
        </div>

        {/* Cordially Invite You */}
        <div className="mt-3">
          <span className="font-moul text-xs sm:text-sm text-amber-200/90 tracking-wider">
            {t.guestHonor}
          </span>
        </div>

        {/* Date Row: 4-Column Chips matching Pic 1 (ថ្ងៃ | ទី | ខែ | ឆ្នាំ) */}
        <div className="w-full max-w-[440px] my-3.5 border-y border-amber-300/50 grid grid-cols-4 bg-[#0e0c08]/50 backdrop-blur-md rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {/* 1. Day */}
          <div className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 border-r border-amber-300/30">
            <small className="text-[11px] font-kh text-amber-200/70 uppercase tracking-wider">
              {lang === 'km' ? 'ថ្ងៃ' : 'Day'}
            </small>
            <b className="font-moul text-sm sm:text-base text-amber-100 font-normal mt-0.5 leading-snug drop-shadow">
              {lang === 'km' ? weddingData.date.weekdayKm : weddingData.date.weekdayEn}
            </b>
          </div>

          {/* 2. Date */}
          <div className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 border-r border-amber-300/30">
            <small className="text-[11px] font-kh text-amber-200/70 uppercase tracking-wider">
              {lang === 'km' ? 'ទី' : 'Date'}
            </small>
            <b className="font-moul text-base sm:text-lg text-amber-100 font-normal mt-0.5 leading-snug drop-shadow">
              {lang === 'km' ? '១៥' : '15'}
            </b>
          </div>

          {/* 3. Month */}
          <div className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 border-r border-amber-300/30">
            <small className="text-[11px] font-kh text-amber-200/70 uppercase tracking-wider">
              {lang === 'km' ? 'ខែ' : 'Month'}
            </small>
            <b className="font-moul text-sm sm:text-base text-amber-100 font-normal mt-0.5 leading-snug drop-shadow">
              {lang === 'km' ? 'វិច្ឆិកា' : 'Nov'}
            </b>
          </div>

          {/* 4. Year */}
          <div className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1">
            <small className="text-[11px] font-kh text-amber-200/70 uppercase tracking-wider">
              {lang === 'km' ? 'ឆ្នាំ' : 'Year'}
            </small>
            <b className="font-moul text-sm sm:text-base text-amber-100 font-normal mt-0.5 leading-snug drop-shadow">
              {lang === 'km' ? '២០២៦' : '2026'}
            </b>
          </div>
        </div>

        {/* Khmer Lunar Date */}
        <div className="mt-2 text-xs sm:text-sm text-amber-200/80 font-kh max-w-md px-2">
          {lang === 'km' ? weddingData.date.lunarKm : weddingData.date.lunarEn}
        </div>

        {/* Venue Summary */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-100/70 font-kh">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{weddingData.venue.nameKm} · {weddingData.venue.addressKm}</span>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 pt-2 flex flex-col items-center">
        <button
          onClick={onExploreClick}
          className="group flex flex-col items-center gap-1 text-xs text-amber-200/70 hover:text-amber-100 transition-colors"
        >
          <span className="font-kh text-[11px] tracking-wider uppercase opacity-80 group-hover:opacity-100">
            {t.scrollDown}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-300" />
        </button>
      </div>
    </section>
  );
};
