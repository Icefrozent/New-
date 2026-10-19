import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { NameLogo } from './Ornaments';
import { Volume2, VolumeX, Globe } from 'lucide-react';
import { toggleAmbientMusic, isMusicPlaying } from '../utils/audio';

interface TopBarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  showEnvelope: boolean;
  onReopenEnvelope: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onLanguageChange,
  showEnvelope,
  onReopenEnvelope
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const t = i18n[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMusicToggle = () => {
    const playing = toggleAmbientMusic();
    setMusicActive(playing);
  };

  const handleLangToggle = () => {
    onLanguageChange(lang === 'km' ? 'en' : 'km');
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#120f0b]/90 backdrop-blur-md border-b border-amber-300/15 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-[#120f0b]/80 via-[#120f0b]/40 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Zone 1: Small Name Logo top-left */}
        <a
          href="#cover"
          className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
          aria-label="Home"
        >
          <NameLogo
            groom={weddingData.couple.groom.shortKm}
            bride={weddingData.couple.bride.shortKm}
            compact
            className="text-amber-200"
          />
        </a>

        {/* Zone 2: Navigation Links on Desktop */}
        <nav className="hidden md:flex items-center gap-5 text-xs sm:text-sm font-kh text-amber-100/80">
          <a href="#words" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {t.guestHonor}
          </a>
          <a href="#couple" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'គូស្វាមីភរិយា' : 'The Couple'}
          </a>
          <a href="#countdown" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'រាប់ថយក្រោយ' : 'Countdown'}
          </a>
          <a href="#programme" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'កម្មវិធី' : 'Programme'}
          </a>
          <a href="#story" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'ដំណើររឿង' : 'Love Story'}
          </a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'រូបភាព' : 'Gallery'}
          </a>
          <a href="#venue" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'ទីតាំង' : 'Venue'}
          </a>
          <a href="#gift" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            {lang === 'km' ? 'ចំណងដៃ' : 'Gifts'}
          </a>
        </nav>

        {/* Zone 3: Interactive Controls (Language Switch + Music Toggle + Re-open Envelope) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switch: Khmer First */}
          <button
            onClick={handleLangToggle}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-kh bg-[#252c13]/80 hover:bg-[#343d1a] text-amber-200 border border-amber-300/30 transition-colors shadow-sm"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">{lang === 'km' ? 'EN' : 'ខ្មែរ'}</span>
          </button>

          {/* Music Toggle with Animated Sound Bars */}
          <button
            onClick={handleMusicToggle}
            type="button"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-serif bg-[#252c13]/80 hover:bg-[#343d1a] border transition-colors shadow-sm ${
              musicActive
                ? 'text-amber-300 border-amber-400/60 shadow-[0_0_10px_rgba(217,177,90,0.3)]'
                : 'text-amber-100/60 border-amber-300/20'
            }`}
            aria-label="Toggle Music"
            title={musicActive ? t.musicOn : t.musicOff}
          >
            {musicActive ? (
              <div className="flex items-center gap-0.5 h-3.5">
                <span className="w-0.5 h-2.5 bg-amber-300 rounded-full animate-bounce" />
                <span className="w-0.5 h-3.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-0.5 h-1.5 bg-amber-300 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline text-[11px] font-kh">
              {musicActive ? t.musicOn : t.musicOff}
            </span>
          </button>

          {/* Reopen Envelope icon button */}
          {!showEnvelope && (
            <button
              onClick={onReopenEnvelope}
              type="button"
              className="px-2.5 py-1.5 rounded-full text-xs font-kh bg-amber-900/40 hover:bg-amber-900/60 text-amber-200 border border-amber-300/20 transition-colors"
              title={lang === 'km' ? 'មើលធៀបការឡើងវិញ' : 'Replay Envelope'}
            >
              ✉️
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
