import React, { useState } from 'react';
import { weddingData } from '../data/wedding';
import { i18n, Language } from '../data/i18n';
import { NameLogo, Crest, Divider } from './Ornaments';
import { Check, Copy, Send, MessageCircle, Share2 } from 'lucide-react';

interface FinaleProps {
  lang: Language;
}

export const Finale: React.FC<FinaleProps> = ({ lang }) => {
  const t = i18n[lang];
  const [copiedLink, setCopiedLink] = useState(false);

  const defaultPublicUrl = 'https://ais-pre-pjzd6bjmak4eoy77htivi2-435906857137.asia-southeast1.run.app';
  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? defaultPublicUrl
        : window.location.href.split('#')[0]
      : defaultPublicUrl;

  const shareCaption = `សិរីសួស្តីអាពាហ៍ពិពាហ៍ · ${weddingData.couple.groom.en} & ${weddingData.couple.bride.en}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `សិរីសួស្តីអាពាហ៍ពិពាហ៍ · ${weddingData.couple.groom.km} & ${weddingData.couple.bride.km}`,
          text: shareCaption,
          url: currentUrl
        });
        return;
      } catch {
        // Fallback to copy link
      }
    }
    handleCopyLink();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <footer id="finale" className="relative py-24 px-4 sm:px-6 text-center overflow-hidden">
      {/* Background with pattern and dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c08] via-[#1b200e]/80 to-[#120f0b] pointer-events-none" />
      <div className="absolute inset-0 bg-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Row of 7 Sacred Blessing Candles that flicker and glow */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Flame */}
              <div
                className="w-2 sm:w-2.5 h-3.5 sm:h-4 bg-gradient-to-t from-amber-400 via-amber-200 to-white rounded-full animate-candle filter drop-shadow-[0_0_10px_#ffb65c]"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
              {/* Golden Candle Base */}
              <div className="w-1.5 h-6 sm:h-8 bg-amber-700/60 rounded-sm mt-0.5" />
            </div>
          ))}
        </div>

        {/* Section Heading: សូមអរគុណ */}
        <span className="font-moul text-xs text-amber-300/80 tracking-widest block uppercase">
          {t.thanksKicker}
        </span>

        <h2 className="font-moul text-3xl sm:text-5xl foil my-2">
          {t.thanks}
        </h2>

        <p className="font-kh text-sm sm:text-base text-amber-100/90 leading-loose max-w-lg mx-auto my-3 px-2">
          {t.thanksLine}
        </p>

        <Divider className="w-48 sm:w-64 my-6" />

        {/* Share Buttons for Telegram, Messenger, Facebook, Copy Link */}
        <div className="w-full max-w-lg my-6">
          <span className="font-moul text-xs text-amber-300/80 block uppercase mb-4 tracking-wider">
            {lang === 'km' ? 'ចែករំលែកធៀបការទៅកាន់មិត្តភក្តិ' : 'Share Invitation with Friends'}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareCaption)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#229ed9]/15 border border-[#229ed9]/40 hover:bg-[#229ed9]/25 text-white transition-all group"
            >
              <Send className="w-5 h-5 text-[#229ed9] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-amber-100/60 font-serif mt-1">{t.shareVia}</span>
              <span className="text-xs font-semibold text-white">Telegram</span>
            </a>

            {/* Messenger */}
            <a
              href={`https://www.facebook.com/dialog/send?link=${encodeURIComponent(currentUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0099ff]/15 border border-[#0099ff]/40 hover:bg-[#0099ff]/25 text-white transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-[#0099ff] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-amber-100/60 font-serif mt-1">{t.shareVia}</span>
              <span className="text-xs font-semibold text-white">Messenger</span>
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#1877f2]/15 border border-[#1877f2]/40 hover:bg-[#1877f2]/25 text-white transition-all group"
            >
              <Share2 className="w-5 h-5 text-[#1877f2] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] text-amber-100/60 font-serif mt-1">{t.shareVia}</span>
              <span className="text-xs font-semibold text-white">Facebook</span>
            </a>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              type="button"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-400/15 border border-amber-400/40 hover:bg-amber-400/25 text-white transition-all group"
            >
              {copiedLink ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-300 font-serif mt-1">{t.copied}</span>
                  <span className="text-xs font-semibold text-emerald-300">Done</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-amber-100/60 font-serif mt-1">{t.copyLinkSmall}</span>
                  <span className="text-xs font-semibold text-amber-200">{t.copyLink}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Closing Monogram Logo */}
        <div className="my-8">
          <NameLogo
            groom={weddingData.couple.groom.shortKm}
            bride={weddingData.couple.bride.shortKm}
            className="scale-90"
          />
        </div>

        {/* Mandatory Footer Credit */}
        <div className="pt-8 border-t border-amber-300/10 text-xs text-amber-200/50 space-y-1">
          <p>
            {weddingData.couple.groom.km} &amp; {weddingData.couple.bride.km} · 2026
          </p>
          <p>
            <a
              href="https://somethphay.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition-colors underline decoration-amber-400/30 underline-offset-4"
            >
              {t.footerCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
