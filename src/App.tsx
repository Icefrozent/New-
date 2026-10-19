import React, { useState } from 'react';
import { Language } from './data/i18n';
import { EnvelopeGate } from './components/EnvelopeGate';
import { TopBar } from './components/TopBar';
import { CoverHero } from './components/CoverHero';
import { WordsInvitation } from './components/WordsInvitation';
import { CoupleShowcase } from './components/CoupleShowcase';
import { Countdown } from './components/Countdown';
import { Programme } from './components/Programme';
import { LoveStory } from './components/LoveStory';
import { CandlelightPond } from './components/CandlelightPond';
import { Gallery } from './components/Gallery';
import { Venue } from './components/Venue';
import { GiftBlessing } from './components/GiftBlessing';
import { Finale } from './components/Finale';

export default function App() {
  const [lang, setLang] = useState<Language>('km');
  const [showEnvelope, setShowEnvelope] = useState<boolean>(true);

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false);
  };

  const handleReopenEnvelope = () => {
    setShowEnvelope(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const el = document.getElementById('words');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#120f0b] text-[#f5efdd] overflow-x-hidden">
      {/* 1. Envelope Opening Gate Screen */}
      {showEnvelope && (
        <EnvelopeGate lang={lang} onOpenComplete={handleEnvelopeComplete} />
      )}

      {/* 2. Top Navigation Bar */}
      <TopBar
        lang={lang}
        onLanguageChange={setLang}
        showEnvelope={showEnvelope}
        onReopenEnvelope={handleReopenEnvelope}
      />

      {/* Main Wedding Invitation Stream */}
      <main className="relative w-full overflow-hidden">
        {/* 1. Cover Hero */}
        <CoverHero lang={lang} onExploreClick={handleExploreClick} />

        {/* 2. Words & Parents Formal Invitation Card */}
        <WordsInvitation lang={lang} />

        {/* 3. The Couple Showcase (Scalloped Frame & 3-Column Profile) */}
        <CoupleShowcase lang={lang} />

        {/* 4. Auspicious Day Countdown */}
        <Countdown lang={lang} />

        {/* Traditional Ceremony Programme */}
        <Programme lang={lang} />

        {/* Love Story Milestones */}
        <LoveStory lang={lang} />

        {/* Candlelight & Lotus Reflection Pond */}
        <CandlelightPond lang={lang} />

        {/* Pre-Wedding Memories Gallery */}
        <Gallery lang={lang} />

        {/* Venue, Embedded Google Map & Calendar */}
        <Venue lang={lang} />

        {/* Wedding Gifts (KHQR) */}
        <GiftBlessing lang={lang} />

        {/* Finale, Candles, Share & Gratitude */}
        <Finale lang={lang} />
      </main>
    </div>
  );
}
