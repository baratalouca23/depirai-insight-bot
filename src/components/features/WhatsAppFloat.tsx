import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5542988911463';
const DEFAULT_MESSAGE = 'Olá, preciso de mais informações!';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in hidden sm:block">
          <div className="bg-card text-foreground text-sm px-4 py-2 rounded-lg shadow-lg border border-border whitespace-nowrap">
            Fale conosco pelo WhatsApp
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-card border-r border-b border-border rotate-45" aria-hidden="true" />
          </div>
        </div>
      )}
      
      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 animate-scale-in"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
      </a>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
