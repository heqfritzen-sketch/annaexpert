import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 280px
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-4 inset-x-4 z-40 sm:bottom-6 sm:right-6 sm:left-auto max-w-md mx-auto sm:max-w-none animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none"
    >
      <a
        id="floating-whatsapp-btn"
        href={EXPERT_DATA.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl bg-[#DC2626] text-white font-bold shadow-[0_10px_25px_rgba(220,38,38,0.5)] border border-[#EF4444] hover:bg-[#B91C1C] active:scale-[0.98] transition-all pulse-whatsapp"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-xs uppercase tracking-wider font-extrabold text-white/80">
              1ª Consulta Gratuita
            </span>
            <span className="block text-sm font-black text-white">
              Agendar no WhatsApp
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold bg-white/20 px-2.5 py-1 rounded-lg text-white">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Falar Agora</span>
        </div>
      </a>
    </div>
  );
};
