import React from 'react';
import { Sparkles, MapPin, ShieldCheck, Star } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';
import { WhatsAppButton } from './WhatsAppButton';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Subtle warm luxury backdrop illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-gradient-to-b from-[#FEE2E2]/40 via-[#E2E8F0]/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Top credibility pill */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/5 border border-[#0F172A]/10 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
          <span>Invisalign Doctor • São José dos Pinhais</span>
        </div>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A192F] leading-[1.15] mb-3 font-serif-display"
        >
          Dra. Anny Caroline
        </h1>

        {/* Subheadline oriented to benefit, aesthetics & safety */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-lg mb-6 font-normal"
        >
          Transforme seu sorriso com a tecnologia dos alinhadores invisíveis e um{' '}
          <strong className="font-semibold text-[#0A192F]">atendimento 100% exclusivo comigo</strong>,{' '}
          do primeiro escaneamento ao resultado final.
        </p>

        {/* Expert Hero Image Card */}
        <div id="hero-expert-photo-container" className="relative w-full max-w-sm mx-auto mb-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-neutral-100">
            <img
              src={EXPERT_DATA.heroImage}
              alt="Dra. Anny Caroline - Dentista e Invisalign Doctor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />

            {/* Gradient bottom overlay for contrast */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/40 to-transparent flex flex-col justify-end p-4 text-left text-white" />

            {/* Float badge over image */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white drop-shadow-md">
              <div>
                <p className="font-bold text-sm tracking-wide flex items-center gap-1.5 text-white">
                  <span>Dra. Anny Caroline</span>
                  <span className="w-2 h-2 rounded-full bg-[#DC2626] inline-block" />
                </p>
                <p className="text-xs text-white/85">Invisalign Doctor • Ortodontia</p>
              </div>

              <div className="bg-white/95 text-[#0A192F] px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm backdrop-blur-xs">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>Primeira Avaliação Grátis</span>
              </div>
            </div>
          </div>

          {/* Floating trust guarantee mini-pill */}
          <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 text-left">
            <div className="w-7 h-7 rounded-full bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#0A192F] leading-none">Sem compromisso</p>
              <p className="text-[10px] text-[#64748B] leading-tight">Avaliação honesta</p>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="w-full max-w-md">
          <WhatsAppButton
            id="hero-cta-button"
            text="Agendar primeira consulta gratuita no WhatsApp"
            subtext="Resposta rápida • Sem compromisso"
            size="large"
          />
        </div>

        {/* Location & Quick Authority bar */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-[#64748B] pt-2">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
            Rua Alcídio Viana, 916 - 4º andar (Sala 403)
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <span className="font-medium text-[#0A192F]">São José dos Pinhais - PR</span>
        </div>
      </div>
    </section>
  );
};
