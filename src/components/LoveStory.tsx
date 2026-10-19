import React, { useRef, useState, useEffect } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

interface LoveStoryProps {
  lang: Language;
}

export const LoveStory: React.FC<LoveStoryProps> = ({ lang }) => {
  const t = i18n[lang];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Expanded gallery filmstrip photos with tall portrait proportions matching Pic 3 & 4
  const storyFrames = [
    {
      num: '០១',
      titleKm: 'ប្រាសាទអង្គរវត្ត',
      titleEn: 'Angkor Wat Sanctuary',
      src: '/src/assets/images/couple_temple_sunset_1792339703938.jpg'
    },
    {
      num: '០២',
      titleKm: 'ភាពកក់ក្តៅពេលដើរលេង',
      titleEn: 'Strolling Hand in Hand',
      src: '/src/assets/images/couple_cozy_portrait_1792338261618.jpg'
    },
    {
      num: '០៣',
      titleKm: 'ស្នាមញញឹមក្រោមពន្លឺរាត្រី',
      titleEn: 'Laughter Under Fairy Lights',
      src: '/src/assets/images/couple_fairylights_candid_1792339703772.jpg'
    },
    {
      num: '០៤',
      titleKm: 'ដើមឈើចំណាស់ & ធម្មជាតិ',
      titleEn: 'Beneath the Sacred Rain Tree',
      src: '/src/assets/images/hero_wedding_couple_1792338260569.jpg'
    },
    {
      num: '០៥',
      titleKm: 'ពិធីសូត្រមន្តប្រពៃណី',
      titleEn: 'Sacred Ceremony Blessing',
      src: '/src/assets/images/couple_ceremony_1792338260996.jpg'
    },
    {
      num: '០៦',
      titleKm: 'បណ្តែតប្រទីបស្រះឈូក',
      titleEn: 'Lotus Pond Lanterns',
      src: '/src/assets/images/couple_lotus_pond_1792338261309.jpg'
    }
  ];

  // Auto-run slideshow every 2s as requested by user
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storyFrames.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, storyFrames.length]);

  // Smooth scroll container to target card when activeIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetCard = container.children[activeIndex] as HTMLElement;
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - container.offsetLeft - 24;
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : storyFrames.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % storyFrames.length);
  };

  return (
    <section id="story" className="relative py-20 sm:py-24 px-4 sm:px-8 overflow-hidden bg-[#242b14]">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
        {/* Left Side: Pinned Intro Typography */}
        <div className="lg:w-1/4 shrink-0 text-left space-y-3">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-amber-300/80 block">
            {lang === 'km' ? 'ពីការចាប់ផ្តើម ដល់ពេលអនាគត' : 'FROM BEGINNING TO ETERNITY'}
          </span>
          <h2 className="font-moul text-3xl sm:text-4xl text-amber-100 foil leading-snug">
            ដំណើររឿង<br />នៃស្នេហា
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-amber-200/70 pt-1">
            {lang === 'km' ? 'គ្រប់អនុស្សាវរីយ៍ដែលបានឆ្លងកាត់ជាមួយគ្នា' : 'Cherished moments on our path to forever'}
          </p>

          {/* Slideshow Controls (Play/Pause & Prev/Next & 2s speed badge) */}
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-kh text-amber-200/80">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-amber-400/20 text-amber-200 hover:bg-amber-400/35 transition-colors border border-amber-300/30"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-amber-400/20 text-amber-200 hover:bg-amber-400/35 transition-colors border border-amber-300/30"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-2 rounded-full bg-amber-400/20 text-amber-200 hover:bg-amber-400/35 transition-colors border border-amber-300/30"
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              title={isPaused ? 'Resume 2s slideshow' : 'Pause 2s slideshow'}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <span className="text-[11px] uppercase tracking-wider text-amber-200/70 font-serif border border-amber-300/25 rounded-full px-2.5 py-0.5 bg-[#171b0b]/60">
              {isPaused ? (lang === 'km' ? 'ផ្អាក' : 'Paused') : 'Auto 2s'}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="pt-2 flex items-center gap-1.5">
            {storyFrames.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-6 bg-amber-300 shadow-[0_0_8px_rgba(251,239,192,0.8)]'
                    : 'w-1.5 bg-amber-400/30 hover:bg-amber-400/60'
                }`}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Horizontal Filmstrip Track with Tall Photo Boxes running every 2s */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          className="lg:w-3/4 w-full flex items-center gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin scrollbar-thumb-amber-600/30 select-none"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {storyFrames.map((frame, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-[460px] sm:h-[510px] md:h-[540px] bg-[#161a0c] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 transition-all duration-700 flex flex-col cursor-pointer ${
                  isActive
                    ? 'border-amber-300 ring-4 ring-amber-300/30 scale-[1.02] shadow-[0_25px_60px_rgba(217,177,90,0.4)]'
                    : 'border-amber-300/30 opacity-85 hover:opacity-100 hover:border-amber-300/60'
                }`}
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Photo Box: Tall vertical portrait */}
                <div className="relative w-full h-[85%] overflow-hidden bg-black/40">
                  <img
                    src={frame.src}
                    alt={lang === 'km' ? frame.titleKm : frame.titleEn}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120f0b]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Active 2s pulse badge */}
                  {isActive && !isPaused && (
                    <div className="absolute top-3 right-3 bg-[#120f0b]/80 backdrop-blur-sm border border-amber-300/40 rounded-full px-2.5 py-0.5 text-[10px] font-serif text-amber-200">
                      ● 2s
                    </div>
                  )}
                </div>

                {/* Caption Line underneath: Number + Khmer title */}
                <div className="h-[15%] px-4 sm:px-5 flex items-center justify-between text-amber-200/95 font-kh text-xs sm:text-sm bg-[#13160a] border-t border-amber-300/20">
                  <div className="flex items-center gap-2.5">
                    <span className="font-serif font-bold text-base sm:text-lg text-amber-400">{frame.num}</span>
                    <span className="font-moul text-xs sm:text-sm foil truncate">{lang === 'km' ? frame.titleKm : frame.titleEn}</span>
                  </div>
                  <span className="font-serif italic text-xs text-amber-200/60 hidden sm:inline truncate max-w-[120px]">
                    {frame.titleEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
