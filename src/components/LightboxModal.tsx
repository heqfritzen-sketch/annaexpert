import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title?: string;
  category?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  category,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      id="lightbox-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div
        id="lightbox-container"
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#0A192F] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 text-white">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-[#DC2626]" />
            <span className="text-sm font-medium text-white/90">
              {title || 'Visualização do Resultado'}
            </span>
            {category && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#DC2626]/20 text-[#FCA5A5] font-medium ml-2 border border-[#DC2626]/30">
                {category}
              </span>
            )}
          </div>
          <button
            id="close-lightbox-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center p-2 sm:p-4 bg-black/60 max-h-[75vh] overflow-auto">
          <img
            src={imageUrl}
            alt={title || 'Resultado clínico'}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        <div className="p-3 bg-[#0A192F] text-center border-t border-white/5">
          <p className="text-xs text-white/60">
            Dra. Anny Caroline • Resultados clínicos reais (podem variar de acordo com cada paciente)
          </p>
        </div>
      </div>
    </div>
  );
};
