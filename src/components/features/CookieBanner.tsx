import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-card border-t border-border shadow-card-hover animate-fade-in-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {t.cookie.message}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t.cookie.decline}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {t.cookie.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
