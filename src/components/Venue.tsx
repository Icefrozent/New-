import React from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider } from './Ornaments';
import { downloadCalendarEvent } from '../utils/calendar';
import { MapPin, ExternalLink, Calendar, Phone } from 'lucide-react';

interface VenueProps {
  lang: Language;
}

export const Venue: React.FC<VenueProps> = ({ lang }) => {
  const t = i18n[lang];

  return (
    <section id="venue" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Paper Cream Card */}
      <article className="paper-cream paper-border-inner rounded-2xl p-6 sm:p-12 text-center shadow-2xl relative overflow-hidden">
        {/* Crest */}
        <div className="flex justify-center mb-3">
          <Crest className="w-16 sm:w-20 h-auto" />
        </div>

        <span className="font-moul text-xs sm:text-sm text-amber-900/70 tracking-widest block uppercase">
          {t.venueKicker}
        </span>

        <h2 className="font-moul text-2xl sm:text-3xl text-amber-950 foil mt-1">
          {weddingData.venue.nameKm}
        </h2>

        <p className="font-serif italic text-sm text-amber-900/80 mt-0.5">
          {weddingData.venue.nameEn}
        </p>

        {/* Address */}
        <div className="my-3 max-w-lg mx-auto flex items-center justify-center gap-2 text-amber-950 font-kh text-sm sm:text-base">
          <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
          <span>{weddingData.venue.addressKm}</span>
        </div>

        {/* Date & Time Highlights */}
        <div className="bg-[#525a2d]/20 border border-amber-800/20 rounded-xl p-4 my-5 max-w-md mx-auto space-y-1">
          <div className="font-moul text-sm sm:text-base text-amber-950">
            {weddingData.date.weekdayKm} {weddingData.date.solarDateKm}
          </div>
          <div className="font-kh text-xs sm:text-sm text-amber-900/80">
            {weddingData.date.timeKm}
          </div>
          <div className="font-kh text-xs text-amber-800/70">
            {weddingData.date.lunarKm}
          </div>
        </div>

        {/* 1. Illustrated Line Map Card matching video 01:23 */}
        <div className="my-6 max-w-xl mx-auto rounded-xl overflow-hidden border border-amber-900/25 bg-[#fbf6ea] p-4 sm:p-6 shadow-md">
          <span className="font-serif italic text-xs uppercase tracking-widest text-amber-900/60 block mb-3 text-center">
            {lang === 'km' ? 'ផែនទីទិសដៅមកកាន់គេហដ្ឋាន' : 'Illustrated Route Map'}
          </span>
          <div className="w-full flex items-center justify-center">
            <img
              src="/orn/line-map.svg"
              alt="Roadmap to wedding house"
              className="w-full max-h-[380px] object-contain filter drop-shadow"
            />
          </div>
        </div>

        {/* 2. Family Contacts Dial Buttons matching video 01:25 */}
        <div className="my-6">
          <span className="font-moul text-xs text-amber-900/70 uppercase tracking-wider block mb-3">
            {lang === 'km' ? 'ទំនាក់ទំនងសាកសួរព័ត៌មាន' : 'Contact Phone Numbers'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:0967717278"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3d461f] text-amber-100 border border-amber-300/40 text-xs sm:text-sm font-semibold hover:bg-[#4d5828] transition-all shadow-md group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>096 7 717 278</span>
            </a>
            <a
              href="tel:070895623"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3d461f] text-amber-100 border border-amber-300/40 text-xs sm:text-sm font-semibold hover:bg-[#4d5828] transition-all shadow-md group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>070 895 623</span>
            </a>
          </div>
        </div>

        {/* 3. Embedded Google Maps Container */}
        <div className="relative rounded-xl overflow-hidden border border-amber-900/20 shadow-inner my-6 aspect-[16/10] sm:aspect-[21/9]">
          <iframe
            src={weddingData.venue.mapsEmbedUrl}
            title="Google Map Location"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Actions: Open in Google Maps + Add to Calendar (.ics) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <a
            href={weddingData.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d9b15a] text-[#120f0b] font-semibold text-xs sm:text-sm hover:bg-[#e7c97a] transition-all shadow-md hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t.openMap}</span>
          </a>

          <button
            onClick={downloadCalendarEvent}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1b200e] text-amber-200 border border-amber-300/30 text-xs sm:text-sm hover:bg-[#283015] transition-all shadow-md hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>{t.addCalendar}</span>
          </button>
        </div>
      </article>
    </section>
  );
};
