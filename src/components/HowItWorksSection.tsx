import React from 'react';
import { CalendarCheck, MessageCircle, HeartHandshake, ArrowDown } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageCircle className="w-5 h-5 text-[#DC2626]" />;
      case 1:
        return <CalendarCheck className="w-5 h-5 text-[#DC2626]" />;
      case 2:
        return <HeartHandshake className="w-5 h-5 text-[#DC2626]" />;
      default:
        return <MessageCircle className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  return (
    <section id="como-funciona-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF9F6] border-t border-[#E2E8F0]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Passo a Passo Simples</span>
          </div>
          <h2
            id="como-funciona-headline"
            className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight font-serif-display"
          >
            Como funciona a primeira consulta
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-1.5 max-w-md mx-auto">
            Um processo direto, seguro e totalmente sem burocracia para você começar com tranquilidade.
          </p>
        </div>

        {/* Steps container */}
        <div className="space-y-4 relative">
          {EXPERT_DATA.steps.map((step, index) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="relative p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-4"
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-[#0A192F]/5 border border-[#0A192F]/10 flex items-center justify-center font-extrabold text-[#0A192F]">
                  {getStepIcon(index)}
                </div>
                <span className="text-[11px] font-bold text-[#64748B] mt-1.5">
                  Passo {step.number}
                </span>
              </div>

              {/* Step text */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#0A192F] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                  {step.description}
                </p>

                {step.highlight && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#DC2626]/10 text-[#991B1B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    {step.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner reinforcing free and no commitment */}
        <div className="mt-6 p-4 rounded-2xl bg-[#0A192F]/5 border border-[#0A192F]/10 text-center">
          <p className="text-xs sm:text-sm font-semibold text-[#0A192F]">
            <span className="text-[#DC2626] mr-1">✓</span> Primeira consulta 100% gratuita e sem nenhum compromisso.
          </p>
          <p className="text-[11px] text-[#64748B] mt-0.5">
            Você só decide dar continuidade se sentir total confiança no plano apresentado.
          </p>
        </div>
      </div>
    </section>
  );
};
