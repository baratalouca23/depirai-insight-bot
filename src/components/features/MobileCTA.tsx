import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function MobileCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show after scrolling past hero
      if (currentScrollY > heroHeight * 0.8) {
        setIsVisible(true);
        
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsVisible(false);
      }
      
      // Hide near footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight) {
          setIsVisible(false);
        }
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isHidden ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-background/95 backdrop-blur-lg border-t border-border p-4 shadow-lg">
        <Button 
          size="lg" 
          className="w-full btn-glow text-base font-semibold"
          asChild
        >
          <a href="#contact">
            {t.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  );
}
