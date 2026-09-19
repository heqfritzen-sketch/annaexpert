import React, { useState } from 'react';
import { MapPin, Instagram, MessageCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const FooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EXPERT_DATA.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="rodape-section" className="pt-10 pb-28 sm:pb-12 px-4 sm:px-6 bg-[#070F1E] text-white border-t border-white/10">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Expert Branding */}
        <h3 className="text-xl font-bold font-serif-display text-white tracking-wide">
          {EXPERT_DATA.fullName}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
          {EXPERT_DATA.specialties}
        </p>

        {/* Location Info Box */}
        <div className="w-full my-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white">
                {EXPERT_DATA.location.address} - {EXPERT_DATA.location.floor}
              </p>
              <p className="text-[11px] text-slate-300">
                {EXPERT_DATA.location.city} - {EXPERT_DATA.location.state} • CEP {EXPERT_DATA.location.cep}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="copy-address-btn"
              onClick={handleCopyAddress}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white transition-colors"
              title="Copiar endereço completo"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>

            <a
              id="google-maps-link"
              href={EXPERT_DATA.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-[#DC2626]/20 hover:bg-[#DC2626]/30 text-xs text-[#FCA5A5] font-medium transition-colors"
            >
              <span>Ver no Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Social and Direct Links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            id="instagram-link"
            href={EXPERT_DATA.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/90 border border-white/10 transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#E1306C]" />
            <span>{EXPERT_DATA.instagram.handle}</span>
          </a>

          <a
            id="footer-whatsapp-link"
            href={EXPERT_DATA.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC2626]/20 hover:bg-[#DC2626]/30 text-xs text-[#FCA5A5] border border-[#DC2626]/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#DC2626]" />
            <span>(41) 99128-3538</span>
          </a>
        </div>

        {/* Discreet footer disclaimer & copyright */}
        <div className="text-[11px] text-white/40 space-y-1">
          <p>© {new Date().getFullYear()} Dra. Anny Caroline • Todos os direitos reservados.</p>
          <p>
            Atendimento odontológico individualizado em São José dos Pinhais - PR.
          </p>
        </div>
      </div>
    </footer>
  );
};
