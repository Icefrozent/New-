import React from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider, Butterfly } from './Ornaments';

interface FormalInvitationProps {
  lang: Language;
}

export const FormalInvitation: React.FC<FormalInvitationProps> = ({ lang }) => {
  const t = i18n[lang];

  return (
    <section id="formal-invitation" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Paper Cream Card with Inner Debossed Border */}
      <article className="paper-cream paper-border-inner rounded-2xl p-6 sm:p-12 text-center relative overflow-hidden">
        {/* Top Crest */}
        <div className="flex justify-center mb-4">
          <Crest className="w-20 sm:w-28 h-auto" />
        </div>

        {/* Parents Section: Two Columns (Groom's Parents & Bride's Parents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-6 text-center border-b border-amber-900/15 pb-8">
          {/* Groom's Parents */}
          <div className="space-y-1">
            <span className="font-moul text-xs sm:text-sm text-amber-900/70 block tracking-normal uppercase">
              {t.groomParents}
            </span>
            <div className="font-moul text-base sm:text-lg text-amber-950 leading-loose pt-1">
              {weddingData.parents.groom.father.km}
              <br />
              និង{weddingData.parents.groom.mother.km}
            </div>
            <div className="font-serif italic text-xs sm:text-sm text-amber-900/75">
              {weddingData.parents.groom.father.en} &amp; {weddingData.parents.groom.mother.en}
            </div>
          </div>

          {/* Bride's Parents */}
          <div className="space-y-1">
            <span className="font-moul text-xs sm:text-sm text-amber-900/70 block tracking-normal uppercase">
              {t.brideParents}
            </span>
            <div className="font-moul text-base sm:text-lg text-amber-950 leading-loose pt-1">
              {weddingData.parents.bride.father.km}
              <br />
              និង{weddingData.parents.bride.mother.km}
            </div>
            <div className="font-serif italic text-xs sm:text-sm text-amber-900/75">
              {weddingData.parents.bride.father.en} &amp; {weddingData.parents.bride.mother.en}
            </div>
          </div>
        </div>

        {/* Cordially Invite & Sacred Blessing Prose */}
        <div className="max-w-2xl mx-auto my-6 space-y-4">
          <h2 className="font-moul text-lg sm:text-2xl text-amber-950 foil leading-relaxed">
            {t.guestHonor}
          </h2>

          <p className="font-kh text-sm sm:text-base text-amber-950/90 leading-loose text-justify sm:text-center px-2">
            {t.blessingText}
          </p>
        </div>

        <Divider className="w-48 sm:w-72" />

        {/* The Couple Profile with Scalloped Photo Frame */}
        <div className="my-8 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Groom Profile */}
          <div className="flex-1 text-center md:text-right order-2 md:order-1">
            <span className="font-moul text-xs sm:text-sm text-amber-900/70 block">
              {t.groomLabel}
            </span>
            <h3 className="font-moul text-2xl sm:text-3xl foil pt-1.5 pb-1">
              {weddingData.couple.groom.km}
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-amber-900/80">
              {weddingData.couple.groom.en}
            </p>
            <p className="font-kh text-xs text-amber-950/70 mt-1">
              {t.sonOf} {weddingData.parents.groom.father.km} និង {weddingData.parents.groom.mother.km}
            </p>
          </div>

          {/* Central Arch / Scallop Photo of the Couple */}
          <div className="relative shrink-0 order-1 md:order-2 my-2">
            <div className="scallop-frame w-48 h-64 sm:w-56 sm:h-72">
              <img
                src="/src/assets/images/couple_cozy_portrait_1792338261618.jpg"
                alt="Rithy and Thida"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Elegant Golden Ampersand Medallion */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3a4120] border border-amber-300/40 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <span className="font-script text-2xl text-amber-200">&amp;</span>
            </div>
            {/* Fluttering butterfly */}
            <div className="absolute -top-3 -right-3 animate-butterfly">
              <Butterfly className="w-7 h-7" />
            </div>
          </div>

          {/* Bride Profile */}
          <div className="flex-1 text-center md:text-left order-3">
            <span className="font-moul text-xs sm:text-sm text-amber-900/70 block">
              {t.brideLabel}
            </span>
            <h3 className="font-moul text-2xl sm:text-3xl foil pt-1.5 pb-1">
              {weddingData.couple.bride.km}
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-amber-900/80">
              {weddingData.couple.bride.en}
            </p>
            <p className="font-kh text-xs text-amber-950/70 mt-1">
              {t.daughterOf} {weddingData.parents.bride.father.km} និង {weddingData.parents.bride.mother.km}
            </p>
          </div>
        </div>

        {/* Wedding Date on Card Footing */}
        <div className="border-t border-dashed border-amber-900/25 pt-6 mt-8">
          <div className="font-moul text-base sm:text-lg text-amber-950 leading-relaxed">
            {weddingData.date.solarDateKm}
          </div>
          <div className="font-kh text-xs sm:text-sm text-amber-900/80 mt-1">
            {weddingData.date.lunarKm}
          </div>
          <div className="font-serif italic text-xs sm:text-sm text-amber-900/70 mt-1">
            {weddingData.date.solarDateEn}
          </div>
        </div>
      </article>
    </section>
  );
};
