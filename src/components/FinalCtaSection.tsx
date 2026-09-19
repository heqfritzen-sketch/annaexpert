import React from 'react';
import { CalendarCheck, ShieldCheck, Clock, Award } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';
import { WhatsAppButton } from './WhatsAppButton';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="cta-final-section" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[#E2E8F0]">
      <div className="max-w-xl mx-auto text-center">
        {/* Floating doctor mini badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5 text-[#DC2626]" />
          <span>Atendimento Individual e Personalizado</span>
        </div>

        {/* Strong Decision Headline */}
        <h2
          id="final-cta-headline"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A192F] tracking-tight mb-3 font-serif-display leading-[1.2]"
        >
          O sorriso confiante que você deseja está a{' '}
          <span className="text-[#DC2626] underline decoration-[#DC2626]/40 decoration-wavy underline-offset-4">
            uma mensagem de distância
          </span>
          .
        </h2>

        <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-md mx-auto mb-6">
          Dê o primeiro passo hoje mesmo. Reserve seu horário de avaliação diretamente comigo no WhatsApp.
        </p>

        {/* Scarcity / Quality assurance pill */}
        <div className="p-4 rounded-2xl bg-[#0A192F]/5 border border-[#0A192F]/10 text-left mb-6 flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#334155]">
            <p className="font-bold text-[#0A192F]">Atendimento exclusivo e individual</p>
            <p className="text-[#64748B] mt-0.5">
              Como realizo todo o atendimento pessoalmente, as vagas semanais são limitadas para garantir tempo de qualidade a cada paciente.
            </p>
          </div>
        </div>

        {/* Final WhatsApp CTA */}
        <div className="w-full max-w-md mx-auto">
          <WhatsAppButton
            id="final-cta-button"
            text="Agendar minha consulta no WhatsApp"
            subtext="Resposta rápida • Atendimento humanizado • São José dos Pinhais"
            size="large"
          />
        </div>

        {/* Reassurance footer */}
        <div className="mt-5 flex items-center justify-center gap-4 text-xs text-[#64748B]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
            Atendimento transparente
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CalendarCheck className="w-3.5 h-3.5 text-[#DC2626]" />
            Agendamento flexível
          </span>
        </div>
      </div>
    </section>
  );
};
