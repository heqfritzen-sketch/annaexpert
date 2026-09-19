import React from 'react';
import { Camera, ZoomIn, Heart } from 'lucide-react';
import { EXPERT_DATA, ExpertPhoto, ResultImage } from '../data/expertData';

interface BehindTheScenesSectionProps {
  onOpenLightbox: (item: ResultImage) => void;
}

export const BehindTheScenesSection: React.FC<BehindTheScenesSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="bastidores-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Mais Provas & Bastidores</span>
          </div>
          <h2
            id="bastidores-headline"
            className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight font-serif-display"
          >
            Cuidado e dedicação em cada detalhe
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-1.5 max-w-md mx-auto">
            Um ambiente seguro, privativo e com tecnologia de ponta para cuidar da saúde e beleza do seu sorriso.
          </p>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXPERT_DATA.expertPhotos.map((photo, index) => (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              onClick={() =>
                onOpenLightbox({
                  id: photo.id,
                  url: photo.url,
                  title: photo.caption,
                  category: photo.tag,
                })
              }
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#E2E8F0] transition-all cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#0A192F]/80 text-white backdrop-blur-xs">
                    {photo.tag}
                  </span>
                </div>

                {/* Tap to zoom prompt */}
                <div className="absolute inset-0 bg-[#0A192F]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#0A192F] text-xs font-semibold shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>Ver em alta resolução</span>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent p-3.5 text-white">
                  <p className="text-xs sm:text-sm font-medium leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert statement highlight */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#DC2626]/10 flex items-center justify-center shrink-0 text-[#DC2626]">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-[#334155] font-medium leading-tight">
              &ldquo;O seu sorriso é o seu cartão de visitas mais valioso. Merece um atendimento cuidadoso e respeitoso.&rdquo;
            </p>
            <p className="text-[11px] font-bold text-[#0A192F] mt-0.5">
              — Dra. Anny Caroline, Dentista
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
