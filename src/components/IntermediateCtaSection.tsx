import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const IntermediateCtaSection: React.FC = () => {
  return (
    <section id="cta-intermediario-section" className="py-12 sm:py-14 px-4 sm:px-6 bg-[#FAF9F6]">
      <div className="max-w-xl mx-auto text-center">
        {/* Objection breaker card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0A192F] to-[#060E1A] text-white shadow-xl relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#DC2626]/25 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FCA5A5] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento Exclusivo • Sem Compromisso</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 font-serif-display">
            Ainda com dúvidas se o Invisalign ou o tratamento é para você?
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md mx-auto mb-6">
            Você não precisa tomar nenhuma decisão agora. Agende uma conversa comigo, venha tomar um café no consultório e descubra exatamente o que pode ser feito pelo seu sorriso.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-white/85 mb-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#EF4444]" />
              Avaliação 100% individual
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#EF4444]" />
              Esclarecimento de valores
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#EF4444]" />
              Sem nenhuma obrigação
            </span>
          </div>

          <div className="w-full max-w-md mx-auto">
            <WhatsAppButton
              id="intermediate-cta-button"
              text="Falar com a Dra. Anny no WhatsApp"
              subtext="Atendimento rápido e humanizado"
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
