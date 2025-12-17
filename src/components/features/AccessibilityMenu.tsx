import React, { useState } from 'react';
import { Accessibility, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export function AccessibilityMenu() {
  const { t } = useLanguage();
  const {
    isDyslexicFont,
    toggleDyslexicFont,
    isHighContrast,
    toggleHighContrast,
    colorBlindMode,
    setColorBlindMode,
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colorBlindOptions = [
    { value: 'normal', label: t.accessibility.normal },
    { value: 'protanopia', label: t.accessibility.protanopia },
    { value: 'deuteranopia', label: t.accessibility.deuteranopia },
    { value: 'tritanopia', label: t.accessibility.tritanopia },
  ] as const;

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted transition-colors"
        aria-label={t.accessibility.title}
        aria-expanded={isOpen}
      >
        <Accessibility className="h-5 w-5 text-foreground" />
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div
          className="fixed bottom-20 left-6 z-50 w-72 bg-card rounded-xl shadow-card-hover border border-border p-4"
          role="dialog"
          aria-label={t.accessibility.title}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-foreground">
              {t.accessibility.title}
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Dyslexic Font */}
            <div className="flex items-center justify-between">
              <Label htmlFor="dyslexic-font" className="text-sm">
                {t.accessibility.dyslexicFont}
              </Label>
              <Switch
                id="dyslexic-font"
                checked={isDyslexicFont}
                onCheckedChange={toggleDyslexicFont}
              />
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="text-sm">
                {t.accessibility.highContrast}
              </Label>
              <Switch
                id="high-contrast"
                checked={isHighContrast}
                onCheckedChange={toggleHighContrast}
              />
            </div>

            {/* Color Blind Mode */}
            <div className="space-y-2">
              <Label className="text-sm">{t.accessibility.colorBlind}</Label>
              <div className="grid grid-cols-2 gap-2">
                {colorBlindOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setColorBlindMode(option.value)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      colorBlindMode === option.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {option.label}
                    {colorBlindMode === option.value && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SVG Filters for Color Blindness */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.567, 0.433, 0, 0, 0
                      0.558, 0.442, 0, 0, 0
                      0, 0.242, 0.758, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.625, 0.375, 0, 0, 0
                      0.7, 0.3, 0, 0, 0
                      0, 0.3, 0.7, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix
              type="matrix"
              values="0.95, 0.05, 0, 0, 0
                      0, 0.433, 0.567, 0, 0
                      0, 0.475, 0.525, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
