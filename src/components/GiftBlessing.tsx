import React, { useState } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { Crest, Divider } from './Ornaments';
import { Copy, Check, Download, QrCode } from 'lucide-react';

interface GiftBlessingProps {
  lang: Language;
}

export const GiftBlessing: React.FC<GiftBlessingProps> = ({ lang }) => {
  const t = i18n[lang];
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <section id="gift" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Crest className="w-16 h-auto mx-auto mb-2 opacity-80" />
        <span className="font-moul text-xs sm:text-sm text-amber-300/80 tracking-widest block uppercase">
          {t.giftKicker}
        </span>
        <h2 className="font-moul text-2xl sm:text-3xl foil mt-1">
          {t.giftTitle}
        </h2>
        <Divider className="w-48 sm:w-64" />
        <p className="font-kh text-xs sm:text-sm text-amber-100/80 max-w-xl mx-auto leading-relaxed mt-2 px-2">
          {t.giftNote}
        </p>
      </div>

      {/* QR Cards: Always visible (no toggle) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {weddingData.gifts.map((gift, idx) => (
          <div
            key={idx}
            className="paper-cream paper-border-inner rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl relative"
          >
            {/* Bank Header Badge */}
            <div className="bg-[#1d2010] border border-amber-300/30 text-amber-200 px-4 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase mb-4 shadow">
              {gift.bank}
            </div>

            {/* Realistic KHQR Payment Box */}
            <div className="relative bg-white p-4 rounded-xl shadow-lg border-2 border-amber-300/60 my-2 w-56 h-56 flex flex-col items-center justify-center">
              {/* KHQR Header Banner */}
              <div className="w-full bg-[#e1251b] text-white py-0.5 rounded text-[10px] font-bold tracking-widest uppercase mb-1">
                KHQR · BAKONG
              </div>

              {/* High-Contrast Styled QR Code Vector */}
              <svg viewBox="0 0 100 100" className="w-36 h-36" aria-label="QR Code">
                {/* QR Finder Corners */}
                <rect x="5" y="5" width="28" height="28" fill="#120f0b" rx="2" />
                <rect x="9" y="9" width="20" height="20" fill="#ffffff" rx="1" />
                <rect x="13" y="13" width="12" height="12" fill="#120f0b" rx="1" />

                <rect x="67" y="5" width="28" height="28" fill="#120f0b" rx="2" />
                <rect x="71" y="9" width="20" height="20" fill="#ffffff" rx="1" />
                <rect x="75" y="13" width="12" height="12" fill="#120f0b" rx="1" />

                <rect x="5" y="67" width="28" height="28" fill="#120f0b" rx="2" />
                <rect x="9" y="71" width="20" height="20" fill="#ffffff" rx="1" />
                <rect x="13" y="75" width="12" height="12" fill="#120f0b" rx="1" />

                {/* QR Data Matrix Dots */}
                <rect x="38" y="10" width="6" height="6" fill="#120f0b" />
                <rect x="48" y="14" width="6" height="6" fill="#120f0b" />
                <rect x="56" y="8" width="6" height="6" fill="#120f0b" />
                <rect x="38" y="24" width="6" height="6" fill="#120f0b" />
                <rect x="48" y="28" width="6" height="6" fill="#120f0b" />
                <rect x="58" y="22" width="6" height="6" fill="#120f0b" />

                {/* Center Heart Embellishment */}
                <circle cx="50" cy="50" r="11" fill="#d9b15a" />
                <path
                  d="M 50 47 C 48 44, 45 45, 45 48 C 45 52, 50 55, 50 55 C 50 55, 55 52, 55 48 C 55 45, 52 44, 50 47 Z"
                  fill="#5c2318"
                />

                <rect x="10" y="42" width="6" height="6" fill="#120f0b" />
                <rect x="22" y="46" width="6" height="6" fill="#120f0b" />
                <rect x="32" y="40" width="6" height="6" fill="#120f0b" />
                <rect x="68" y="44" width="6" height="6" fill="#120f0b" />
                <rect x="80" y="48" width="6" height="6" fill="#120f0b" />

                <rect x="38" y="68" width="6" height="6" fill="#120f0b" />
                <rect x="48" y="74" width="6" height="6" fill="#120f0b" />
                <rect x="58" y="68" width="6" height="6" fill="#120f0b" />
                <rect x="72" y="72" width="6" height="6" fill="#120f0b" />
                <rect x="82" y="66" width="6" height="6" fill="#120f0b" />
                <rect x="68" y="82" width="6" height="6" fill="#120f0b" />
                <rect x="78" y="86" width="6" height="6" fill="#120f0b" />
              </svg>

              <div className="text-[10px] font-mono text-slate-700 tracking-wider mt-1">
                {gift.currency}
              </div>
            </div>

            {/* Account Details */}
            <div className="my-3 space-y-0.5">
              <span className="font-moul text-sm text-amber-950 block">
                {gift.accountName}
              </span>
              <span className="font-mono text-sm text-amber-900 font-bold tracking-wider">
                {gift.accountNumber}
              </span>
            </div>

            {/* Interactive Actions: Copy & Save */}
            <div className="flex gap-2 mt-2 w-full justify-center">
              <button
                onClick={() => copyToClipboard(gift.accountNumber, gift.bank)}
                type="button"
                className="inline-flex items-center gap-1.5 bg-[#3a4120] hover:bg-[#4a542a] text-amber-100 text-xs px-3.5 py-2 rounded-lg font-kh border border-amber-300/30 transition-colors shadow"
              >
                {copiedAccount === gift.bank ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t.copyAccount}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  alert(lang === 'km' ? 'សូមថតអេក្រង់ (Screenshot) ឬរក្សាទុក QR Code នេះ។' : 'Please screenshot or save this QR code to photos.');
                }}
                type="button"
                className="inline-flex items-center gap-1.5 bg-amber-900/10 hover:bg-amber-900/20 text-amber-950 text-xs px-3.5 py-2 rounded-lg font-kh border border-amber-900/20 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>{t.saveQr}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
