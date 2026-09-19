import React from 'react';
import { CheckCircle2, Award, HeartHandshake, Eye } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-sou-eu-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-xl mx-auto">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Autoridade & Cuidado Pessoal</span>
          </div>
          <h2
            id="about-headline"
            className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight font-serif-display"
          >
            Quem sou eu
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-1">
            Muito prazer! Conheça quem estará ao seu lado em cada etapa do seu tratamento.
          </p>
        </div>

        {/* Expert photo in context */}
        <div className="mb-6 relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[4/4.5] bg-neutral-200">
          <img
            src={EXPERT_DATA.secondaryExpertImage}
            alt="Dra. Anny Caroline no consultório"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A192F]/85 via-[#0A192F]/45 to-transparent p-4 text-white">
            <p className="font-bold text-base flex items-center gap-2">
              Dra. Anny Caroline
              <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-[#DC2626]/20 text-[#FCA5A5] border border-[#DC2626]/40">
                Invisalign Doctor
              </span>
            </p>
            <p className="text-xs text-white/80 mt-0.5">
              Consultório exclusivo em São José dos Pinhais - PR
            </p>
          </div>
        </div>

        {/* 1st Person Narrative - direct, warm, human, not corporate */}
        <div className="space-y-4 text-[#334155] text-base leading-relaxed">
          <p>
            Acredito que cuidar do seu sorriso não precisa ser um processo doloroso, impessoal ou assustador.
            Muitas pessoas deixam de realizar o sonho de ter dentes alinhados por receio de aparelhos metálicos desconfortáveis ou por terem passado por clínicas onde cada dia eram atendidas por um profissional diferente.
          </p>
          <p>
            No meu consultório, o conceito é outro:{' '}
            <strong className="text-[#0A192F] font-bold">
              eu cuido pessoalmente de você do início ao fim
            </strong>. Você terá meu WhatsApp direto, meu acompanhamento minucioso em cada alinhador e a certeza de um planejamento digital de ponta.
          </p>
        </div>

        {/* Bullets with personal differentiators */}
        <div className="mt-6 pt-5 border-t border-[#E2E8F0] space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0A192F]">Atendimento 100% individualizado</h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Sem trocas de dentista ou consultas apressadas. Dedico o tempo necessário para você.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0A192F]">Invisalign Doctor Certificada</h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Tecnologia para alinhar seus dentes de forma praticamente invisível, sem machucar bochechas ou gengivas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0A192F]">Visualização 3D do seu resultado</h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Você descobre como seu sorriso pode ficar antes mesmo de iniciar o tratamento ortodôntico.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0A192F]">Ambiente calmo e acolhedor</h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Espaço planejado para você se sentir à vontade, sem pressa e com cafezinho sempre fresco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
