import React, { useState, useEffect } from 'react';
import { weddingData, toKhmerNum } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Divider } from './Ornaments';

interface CountdownProps {
  lang: Language;
}

export const Countdown: React.FC<CountdownProps> = ({ lang }) => {
  const t = i18n[lang];
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(weddingData.date.targetIso).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUnit = (val: number) => {
    const padded = String(val).padStart(2, '0');
    return lang === 'km' ? toKhmerNum(padded) : padded;
  };

  const marqueeBlessings = [
    'សិរីសួស្តី ជ័យមង្គល វិបុលសុខ មហាប្រសើរ',
    '·',
    'ស្រលាញ់គ្នារហូតដល់ចាស់កោងខ្នង',
    '·',
    'សុភមង្គលបរិបូរណ៍ ត្រជាក់ត្រជុំដូចទឹកអង្គរ',
    '·',
    'Love, Joy & Eternity',
    '·'
  ];

  return (
    <section id="countdown" className="relative py-16 px-4 overflow-hidden select-none">
      {/* Slow Blessing Marquee in Background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-10 whitespace-nowrap overflow-hidden select-none z-0">
        <div className="inline-block animate-[marquee_45s_linear_infinite] font-moul text-4xl sm:text-6xl text-amber-200">
          {marqueeBlessings.join(' ')} &nbsp; {marqueeBlessings.join(' ')}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Kicker */}
        <span className="font-moul text-xs sm:text-sm text-amber-300/80 uppercase tracking-widest block mb-6">
          {t.countdownKicker}
        </span>

        {/* 4 Countdown Units */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-xl mx-auto my-6">
          {/* Days */}
          <div className="bg-[#242913]/80 border border-amber-300/20 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-xl flex flex-col items-center">
            <span className="font-moul text-2xl sm:text-5xl foil tracking-normal">
              {formatUnit(timeLeft.days)}
            </span>
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-amber-200/70 mt-1">
              {t.days}
            </span>
          </div>

          {/* Hours */}
          <div className="bg-[#242913]/80 border border-amber-300/20 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-xl flex flex-col items-center">
            <span className="font-moul text-2xl sm:text-5xl foil tracking-normal">
              {formatUnit(timeLeft.hours)}
            </span>
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-amber-200/70 mt-1">
              {t.hours}
            </span>
          </div>

          {/* Minutes */}
          <div className="bg-[#242913]/80 border border-amber-300/20 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-xl flex flex-col items-center">
            <span className="font-moul text-2xl sm:text-5xl foil tracking-normal">
              {formatUnit(timeLeft.minutes)}
            </span>
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-amber-200/70 mt-1">
              {t.minutes}
            </span>
          </div>

          {/* Seconds */}
          <div className="bg-[#242913]/80 border border-amber-300/20 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-xl flex flex-col items-center">
            <span className="font-moul text-2xl sm:text-5xl foil tracking-normal">
              {formatUnit(timeLeft.seconds)}
            </span>
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-amber-200/70 mt-1">
              {t.seconds}
            </span>
          </div>
        </div>

        <Divider className="w-40 sm:w-60 my-6" />

        {/* Date Reminder */}
        <div className="space-y-1">
          <div className="font-moul text-sm sm:text-base text-amber-200/90">
            {weddingData.date.weekdayKm} {weddingData.date.solarDateKm}
          </div>
          <div className="font-kh text-xs text-amber-100/70">
            {weddingData.date.timeKm}
          </div>
        </div>
      </div>
    </section>
  );
};
