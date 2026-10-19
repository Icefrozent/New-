import React, { useState, useEffect, useCallback } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider } from './Ornaments';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = i18n[lang];
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'traditional' | 'modern'>('all');

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % weddingData.gallery.length : null));
  }, []);

  const prevPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev - 1 + weddingData.gallery.length) % weddingData.gallery.length : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, nextPhoto, prevPhoto]);

  const filteredPhotos = weddingData.gallery.filter((item) => {
    if (activeFilter === 'traditional') return item.id === 1 || item.id === 3 || item.id === 6;
    if (activeFilter === 'modern') return item.id === 2 || item.id === 4 || item.id === 5;
    return true;
  });

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background embellishment */}
      <div className="absolute inset-0 bg-pattern opacity-15 pointer-events-none" />

      <div className="text-center mb-8 relative z-10">
        <Crest className="w-16 h-auto mx-auto mb-2 opacity-80" />
        <span className="font-moul text-xs sm:text-sm text-amber-300/80 tracking-widest block uppercase">
          {t.galleryKicker}
        </span>
        <h2 className="font-moul text-2xl sm:text-3xl foil mt-1">
          {t.galleryTitle}
        </h2>
        <Divider className="w-48 sm:w-64" />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-kh transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-[#d9b15a] text-[#120f0b] font-semibold shadow-[0_0_12px_rgba(217,177,90,0.4)]'
                : 'bg-[#252c13]/70 text-amber-200/80 hover:bg-[#343d1a] border border-amber-300/20'
            }`}
          >
            {lang === 'km' ? 'ទាំងអស់ (៦ សន្លឹក)' : 'All Photos (6)'}
          </button>
          <button
            onClick={() => setActiveFilter('traditional')}
            className={`px-4 py-1.5 rounded-full text-xs font-kh transition-all duration-300 ${
              activeFilter === 'traditional'
                ? 'bg-[#d9b15a] text-[#120f0b] font-semibold shadow-[0_0_12px_rgba(217,177,90,0.4)]'
                : 'bg-[#252c13]/70 text-amber-200/80 hover:bg-[#343d1a] border border-amber-300/20'
            }`}
          >
            {lang === 'km' ? 'សម្លៀកបំពាក់ប្រពៃណី' : 'Traditional Attire'}
          </button>
          <button
            onClick={() => setActiveFilter('modern')}
            className={`px-4 py-1.5 rounded-full text-xs font-kh transition-all duration-300 ${
              activeFilter === 'modern'
                ? 'bg-[#d9b15a] text-[#120f0b] font-semibold shadow-[0_0_12px_rgba(217,177,90,0.4)]'
                : 'bg-[#252c13]/70 text-amber-200/80 hover:bg-[#343d1a] border border-amber-300/20'
            }`}
          >
            {lang === 'km' ? 'សម័យទំនើប & រាត្រី' : 'Modern & Evening'}
          </button>
        </div>
      </div>

      {/* Masonry / Photo Grid with silky hover animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
        {filteredPhotos.map((item) => {
          const originalIndex = weddingData.gallery.findIndex((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => openLightbox(originalIndex)}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-amber-300/25 bg-[#1b200e] shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.8)] hover:border-amber-400/60"
            >
              <div className={`w-full overflow-hidden ${item.aspect}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Shimmer / Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120f0b]/90 via-[#120f0b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-300 font-serif uppercase tracking-wider block">
                      Rithy &amp; Thida
                    </span>
                    <h4 className="font-moul text-xs sm:text-sm text-amber-100 leading-snug">
                      {lang === 'km' ? item.titleKm : item.titleEn}
                    </h4>
                  </div>
                  <div className="p-2 rounded-full bg-amber-400/20 text-amber-300 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={prevPhoto}
            className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={weddingData.gallery[selectedPhotoIndex].src}
              alt={weddingData.gallery[selectedPhotoIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-amber-300/30"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h4 className="font-moul text-base sm:text-lg text-amber-200">
                {lang === 'km'
                  ? weddingData.gallery[selectedPhotoIndex].titleKm
                  : weddingData.gallery[selectedPhotoIndex].titleEn}
              </h4>
              <p className="text-xs text-amber-100/60 font-serif mt-1">
                {selectedPhotoIndex + 1} / {weddingData.gallery.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
