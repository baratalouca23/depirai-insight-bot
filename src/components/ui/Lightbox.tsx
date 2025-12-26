import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LightboxProps {
  images: { src: string; alt: string; title?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
    }
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização de imagem em tela cheia"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-foreground hover:bg-foreground/10 rounded-full w-12 h-12"
        onClick={onClose}
        aria-label="Fechar lightbox"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation - Previous */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10 rounded-full w-12 h-12 hidden md:flex"
          onClick={onPrev}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}

      {/* Navigation - Next */}
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10 rounded-full w-12 h-12 hidden md:flex"
          onClick={onNext}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}

      {/* Image container */}
      <div 
        className="relative z-10 max-w-[90vw] max-h-[85vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image info */}
        {currentImage.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent rounded-b-lg">
            <p className="text-foreground font-medium text-center">{currentImage.title}</p>
          </div>
        )}
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full">
          <span className="text-foreground text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Mobile swipe indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:hidden">
          {images.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex 
                  ? "bg-primary w-4" 
                  : "bg-foreground/30"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface LightboxTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function LightboxTrigger({ children, onClick, className }: LightboxTriggerProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative group cursor-zoom-in focus-ring rounded-lg overflow-hidden",
        className
      )}
      aria-label="Abrir imagem em tela cheia"
    >
      {children}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn className="h-8 w-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
      </div>
    </button>
  );
}
