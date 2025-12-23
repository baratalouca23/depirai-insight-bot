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
      className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_-4px_hsl(var(--foreground)/0.1)] animate-fade-in"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center flex-shrink-0">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center sm:text-left max-w-md">
            {t.cookie.message}
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button variant="ghost" size="sm" onClick={handleDecline} className="text-muted-foreground hover:text-foreground">
            {t.cookie.decline}
          </Button>
          <Button size="sm" onClick={handleAccept} className="shadow-sm">
            {t.cookie.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
