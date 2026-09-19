import React from 'react';
import { UserCheck, ShieldCheck, Sparkles, Clock, FileCheck, MapPin } from 'lucide-react';
import { EXPERT_DATA } from '../data/expertData';

export const TrustPillarsSection: React.FC = () => {
  // Mapping icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#DC2626]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#DC2626]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#DC2626]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#DC2626]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#DC2626]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#DC2626]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  return (
    <section id="confianca-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F1F5F9]/60 border-y border-[#E2E8F0]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Segurança & Transparência</span>
          </div>
          <h2
            id="confianca-headline"
            className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight font-serif-display"
          >
            Por que confiar em mim?
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-1 max-w-md mx-auto">
            Mais do que tecnologia, um compromisso genuíno com a sua saúde e o seu bem-estar.
          </p>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {EXPERT_DATA.trustPillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#DC2626]/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-3">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#0A192F] leading-snug mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
