import React, { useState } from 'react';
import { Accessibility, X, Check, Type, BookOpen, Zap, Contrast, Eye, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Separator } from '@/components/ui/separator';

export function AccessibilityMenu() {
  const { t } = useLanguage();
  const {
    isDyslexicFont,
    toggleDyslexicFont,
    isHighContrast,
    toggleHighContrast,
    colorBlindMode,
    setColorBlindMode,
    fontSize,
    setFontSize,
    isReadingMode,
    toggleReadingMode,
    isReducedMotion,
    toggleReducedMotion,
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colorBlindOptions = [
    { value: 'normal', label: t.accessibility.normal },
    { value: 'protanopia', label: t.accessibility.protanopia },
    { value: 'deuteranopia', label: t.accessibility.deuteranopia },
    { value: 'tritanopia', label: t.accessibility.tritanopia },
  ] as const;

  const fontSizeOptions = [
    { value: 'normal', label: 'A', size: 'text-sm' },
    { value: 'large', label: 'A', size: 'text-base' },
    { value: 'larger', label: 'A', size: 'text-lg' },
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
        className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-muted hover:scale-110 transition-all duration-300 group"
        aria-label={t.accessibility.title}
        aria-expanded={isOpen}
      >
        <Accessibility className="h-4 w-4 md:h-5 md:w-5 text-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div
          className="fixed bottom-32 left-4 md:bottom-20 md:left-6 z-50 w-[calc(100vw-2rem)] max-w-80 bg-card/95 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_-8px_hsl(var(--foreground)/0.15)] border border-border p-5 animate-scale-in origin-bottom-left max-h-[70vh] overflow-y-auto"
          role="dialog"
          aria-label={t.accessibility.title}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
              <Accessibility className="h-4 w-4 text-primary" />
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
            {/* Font Size */}
            <div className="space-y-2">
              <Label className="text-sm flex items-center gap-2">
                <Type className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.fontSize || 'Tamanho da Fonte'}
              </Label>
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
                {fontSizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFontSize(option.value)}
                    className={`flex-1 flex items-center justify-center py-2 rounded-md font-medium transition-all ${option.size} ${
                      fontSize === option.value
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    aria-label={`Tamanho ${option.value}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Separator className="my-3" />

            {/* Reading Mode */}
            <div className="flex items-center justify-between">
              <Label htmlFor="reading-mode" className="text-sm flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.readingMode || 'Modo Leitura'}
              </Label>
              <Switch
                id="reading-mode"
                checked={isReadingMode}
                onCheckedChange={toggleReadingMode}
              />
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <Label htmlFor="reduced-motion" className="text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.reducedMotion || 'Reduzir Animações'}
              </Label>
              <Switch
                id="reduced-motion"
                checked={isReducedMotion}
                onCheckedChange={toggleReducedMotion}
              />
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <Label htmlFor="high-contrast" className="text-sm flex items-center gap-2">
                <Contrast className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.highContrast}
              </Label>
              <Switch
                id="high-contrast"
                checked={isHighContrast}
                onCheckedChange={toggleHighContrast}
              />
            </div>

            {/* Dyslexic Font */}
            <div className="flex items-center justify-between">
              <Label htmlFor="dyslexic-font" className="text-sm flex items-center gap-2">
                <Type className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.dyslexicFont}
              </Label>
              <Switch
                id="dyslexic-font"
                checked={isDyslexicFont}
                onCheckedChange={toggleDyslexicFont}
              />
            </div>

            <Separator className="my-3" />

            {/* Color Blind Mode */}
            <div className="space-y-2">
              <Label className="text-sm flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                {t.accessibility.colorBlind}
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {colorBlindOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setColorBlindMode(option.value)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
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

            {/* Reset Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4"
              onClick={() => {
                setFontSize('normal');
                setColorBlindMode('normal');
                if (isHighContrast) toggleHighContrast();
                if (isDyslexicFont) toggleDyslexicFont();
                if (isReadingMode) toggleReadingMode();
                if (isReducedMotion) toggleReducedMotion();
              }}
            >
              {t.accessibility.reset || 'Restaurar Padrão'}
            </Button>
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
