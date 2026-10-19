import React from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider } from './Ornaments';

interface WordsInvitationProps {
  lang: Language;
}

export const WordsInvitation: React.FC<WordsInvitationProps> = ({ lang }) => {
  const t = i18n[lang];

  return (
    <section id="words" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* 2-Column Grid on Desktop: Arched Photo on Left, Printed Card on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Arched Pre-Wedding Couple Photo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-t-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-amber-300/40 group">
            <img
              src="/src/assets/images/couple_temple_sunset_1792339703938.jpg"
              alt="Rithy and Thida at ancient temple gateway"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle inner shadow and shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120f0b]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Printed Royal Cream Invitation Card */}
        <article className="md:col-span-7 paper-cream paper-border-inner rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          {/* Top Royal Crest */}
          <div className="flex justify-center mb-3">
            <Crest className="w-16 sm:w-20 h-auto" />
          </div>

          {/* Parents Lineage: 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4 border-b border-amber-900/15 pb-6">
            {/* Groom's Parents */}
            <div className="space-y-0.5">
              <span className="font-moul text-xs text-amber-900/70 block uppercase">
                {t.groomParents}
              </span>
              <div className="font-moul text-sm sm:text-base text-amber-950 leading-loose pt-1">
                {weddingData.parents.groom.father.km}
                <br />
                និង{weddingData.parents.groom.mother.km}
              </div>
              <div className="font-serif italic text-xs text-amber-900/75">
                {weddingData.parents.groom.father.en} &amp; {weddingData.parents.groom.mother.en}
              </div>
            </div>

            {/* Bride's Parents */}
            <div className="space-y-0.5">
              <span className="font-moul text-xs text-amber-900/70 block uppercase">
                {t.brideParents}
              </span>
              <div className="font-moul text-sm sm:text-base text-amber-950 leading-loose pt-1">
                {weddingData.parents.bride.father.km}
                <br />
                និង{weddingData.parents.bride.mother.km}
              </div>
              <div className="font-serif italic text-xs text-amber-900/75">
                {weddingData.parents.bride.father.en} &amp; {weddingData.parents.bride.mother.en}
              </div>
            </div>
          </div>

          {/* Invitation Prose */}
          <div className="my-4 space-y-3">
            <h2 className="font-moul text-lg sm:text-xl text-amber-950 foil leading-relaxed">
              {t.guestHonor}
            </h2>

            <p className="font-kh text-xs sm:text-sm text-amber-950/90 leading-loose text-justify sm:text-center px-1">
              {t.blessingText}
            </p>
          </div>

          <Divider className="w-40 sm:w-56 my-4" />

          {/* Card Footing: Couple Names & Date */}
          <div className="pt-2 flex flex-col items-center">
            <div className="font-moul text-lg sm:text-xl foil">
              {weddingData.couple.groom.shortKm} <span className="text-amber-800 font-serif italic text-sm">&amp;</span> {weddingData.couple.bride.shortKm}
            </div>
            <div className="font-kh text-xs text-amber-950/80 mt-1">
              {weddingData.date.weekdayKm} {weddingData.date.solarDateKm}
            </div>
            <div className="font-kh text-[11px] text-amber-900/70">
              {weddingData.date.lunarKm}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
