import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '5542988911463';
const DEFAULT_MESSAGE = 'Olá, preciso de mais informações!';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="bg-card text-foreground text-sm px-4 py-2 rounded-lg shadow-lg border border-border whitespace-nowrap">
            Fale conosco pelo WhatsApp
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-card border-r border-b border-border rotate-45" />
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
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 animate-scale-in"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </div>
  );
}
