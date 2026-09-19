import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

interface WhatsAppButtonProps {
  id: string;
  text?: string;
  subtext?: string;
  size?: 'normal' | 'large';
  fullWidth?: boolean;
  className?: string;
  showPulse?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  id,
  text = EXPERT_DATA.whatsapp.buttonText,
  subtext,
  size = 'large',
  fullWidth = true,
  className = '',
  showPulse = true,
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      <a
        id={id}
        href={EXPERT_DATA.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center gap-3 font-semibold rounded-2xl transition-all duration-300 transform active:scale-[0.98] ${
          fullWidth ? 'w-full' : 'w-auto px-6'
        } ${
          size === 'large'
            ? 'py-4 px-6 text-base sm:text-lg bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-[0_8px_24px_rgba(220,38,38,0.35)] hover:shadow-[0_12px_28px_rgba(220,38,38,0.48)]'
            : 'py-3.5 px-5 text-sm sm:text-base bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-[0_6px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_8px_24px_rgba(220,38,38,0.42)]'
        } ${showPulse ? 'pulse-whatsapp' : ''}`}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white group-hover:scale-110 transition-transform">
          <MessageCircle className="w-5 h-5 fill-current" />
        </span>
        <span className="tracking-tight text-center leading-tight">{text}</span>
        <ArrowRight className="w-5 h-5 opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all ml-auto sm:ml-0" />
      </a>

      {subtext && (
        <p className="mt-2.5 text-xs text-[#64748B] text-center font-medium flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-ping" />
          {subtext}
        </p>
      )}
    </div>
  );
};
