import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResultsGallerySection } from './components/ResultsGallerySection';
import { TrustPillarsSection } from './components/TrustPillarsSection';
import { IntermediateCtaSection } from './components/IntermediateCtaSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BehindTheScenesSection } from './components/BehindTheScenesSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { ResultImage } from './data/expertData';

export default function App() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<ResultImage | null>(null);

  const handleOpenLightbox = (item: ResultImage) => {
    setActiveLightboxImage(item);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxImage(null);
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#FAF9F6] text-[#0F172A] flex flex-col selection:bg-[#DC2626]/20 selection:text-[#991B1B]">
      {/* Main Single Page Container - Mobile First Focus */}
      <main className="flex-1 w-full max-w-2xl mx-auto bg-white shadow-xs border-x border-[#E2E8F0]">
        {/* 1. HERO (primeira dobra) */}
        <HeroSection />

        {/* 2. BLOCO "QUEM SOU EU" (autoridade pessoal) */}
        <AboutSection />

        {/* 3. BLOCO "RESULTADOS REAIS" (prova visual forte) */}
        <ResultsGallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 4. BLOCO "POR QUE CONFIAR EM MIM?" */}
        <TrustPillarsSection />

        {/* 5. CTA INTERMEDIÁRIO (repetir CTA quebrando objeção) */}
        <IntermediateCtaSection />

        {/* 6. BLOCO "COMO FUNCIONA A PRIMEIRA CONSULTA" (3 passos) */}
        <HowItWorksSection />

        {/* 7. BLOCO "MAIS PROVAS" (expert + bastidores) */}
        <BehindTheScenesSection onOpenLightbox={handleOpenLightbox} />

        {/* 8. CTA FINAL (decisão e vagas da semana) */}
        <FinalCtaSection />

        {/* 9. RODAPÉ SIMPLES */}
        <FooterSection />
      </main>

      {/* Persistent Floating WhatsApp CTA for Mobile */}
      <FloatingWhatsApp />

      {/* Lightbox for zooming real results and expert photos */}
      <LightboxModal
        isOpen={Boolean(activeLightboxImage)}
        imageUrl={activeLightboxImage?.url || null}
        title={activeLightboxImage?.title}
        category={activeLightboxImage?.category}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
