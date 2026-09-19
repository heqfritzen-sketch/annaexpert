import React from 'react';
import { ZoomIn, Sparkles, AlertCircle } from 'lucide-react';
import { EXPERT_DATA, ResultImage } from '../data/expertData';

interface ResultsGallerySectionProps {
  onOpenLightbox: (item: ResultImage) => void;
}

export const ResultsGallerySection: React.FC<ResultsGallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="resultados-section" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF9F6]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A]/5 text-[#0F172A] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Casos Reais</span>
          </div>
          <h2
            id="resultados-headline"
            className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight font-serif-display"
          >
            Resultados Reais
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-1 max-w-md mx-auto">
            Veja a evolução e o impacto de um tratamento ortodôntico e estético planejado com precisão. Toque na imagem para ampliar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div id="results-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EXPERT_DATA.resultsGallery.map((item, index) => (
            <div
              key={item.id || index}
              id={`result-card-${index}`}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#E2E8F0] transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#0A192F]/80 text-white backdrop-blur-xs shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover/Touch prompt to zoom */}
                <div className="absolute inset-0 bg-[#0A192F]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#0A192F] text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-[#DC2626]" />
                    <span>Toque para ampliar</span>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-3.5 flex items-center justify-between border-t border-[#F1F5F9]">
                <div>
                  <h3 className="text-sm font-bold text-[#0A192F] leading-snug">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-[#64748B] mt-0.5 line-clamp-1">{item.description}</p>
                  )}
                </div>
                <button
                  type="button"
                  className="p-1.5 rounded-full text-[#0A192F] bg-[#0A192F]/5 group-hover:bg-[#DC2626]/15 group-hover:text-[#DC2626] transition-colors"
                  aria-label={`Ampliar ${item.title}`}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discreet required disclaimer */}
        <div className="mt-5 text-center flex items-center justify-center gap-1.5 text-xs text-[#64748B]">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 opacity-75 text-[#DC2626]" />
          <span>Resultados podem variar de pessoa para pessoa. Cada anatomia e resposta biológica é única.</span>
        </div>
      </div>
    </section>
  );
};
