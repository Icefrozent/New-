import React from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider } from './Ornaments';
import { Clock, Sparkles } from 'lucide-react';

interface ProgrammeProps {
  lang: Language;
}

export const Programme: React.FC<ProgrammeProps> = ({ lang }) => {
  const t = i18n[lang];

  return (
    <section id="programme" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Paper Cream Card with Inner Border */}
      <article className="paper-cream paper-border-inner rounded-2xl p-6 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="text-center mb-8">
          <Crest className="w-16 sm:w-20 h-auto mx-auto mb-2 opacity-90" />
          <h2 className="font-moul text-2xl sm:text-3xl text-amber-950 foil">
            {lang === 'km' ? 'កម្មវិធី' : 'Programme'}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-amber-900/80 mt-1">
            {t.programmeSub}
          </p>
        </div>

        {/* Days Accordion / Timeline Container */}
        <div className="space-y-12 relative">
          {weddingData.programme.map((day, dayIdx) => (
            <div key={dayIdx} className="relative">
              {/* Day Header Banner */}
              <div className="bg-[#464f26] border border-amber-300/30 text-amber-100 rounded-xl px-4 py-2.5 mb-6 text-center shadow-md">
                <h3 className="font-moul text-sm sm:text-base text-amber-200">
                  {lang === 'km' ? day.km : day.en}
                </h3>
              </div>

              {/* Gold Thread Timeline */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-700/30 space-y-4">
                {day.rows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className={`relative group transition-all duration-300 p-2.5 rounded-lg ${
                      row.isHighlight
                        ? 'bg-amber-900/10 border-l-2 border-amber-600 pl-3'
                        : 'hover:bg-amber-900/5'
                    }`}
                  >
                    {/* Glowing golden bead on the thread */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full border-2 border-[#6a6040] ${
                        row.isHighlight ? 'bg-amber-400 shadow-[0_0_8px_#fbefc0]' : 'bg-amber-600/70'
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      {/* Ceremony Title */}
                      <div className="flex items-center gap-2">
                        {row.isHighlight && <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                        <span
                          className={`font-kh text-sm sm:text-base ${
                            row.isHighlight
                              ? 'font-semibold text-amber-950 text-amber-950 font-moul sm:text-base'
                              : 'text-amber-900/90'
                          }`}
                        >
                          {lang === 'km' ? row.km : row.en}
                        </span>
                      </div>

                      {/* Time Badge */}
                      <div className="flex items-center gap-1.5 shrink-0 text-xs sm:text-sm font-medium text-amber-800/80 bg-amber-950/10 px-2.5 py-0.5 rounded-full self-start sm:self-auto font-kh">
                        <Clock className="w-3 h-3 text-amber-700" />
                        <span>
                          {lang === 'km' ? `${row.t} ${row.pkm}` : row.pen}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Divider className="w-48 sm:w-64 my-8" />

        <div className="text-center font-kh text-xs sm:text-sm text-amber-900/80 leading-relaxed max-w-lg mx-auto">
          {weddingData.venue.noteKm}
        </div>
      </article>
    </section>
  );
};
