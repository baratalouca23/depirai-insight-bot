import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ColorBlindMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
type FontSize = 'normal' | 'large' | 'larger';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  colorBlindMode: ColorBlindMode;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  isReadingMode: boolean;
  toggleReadingMode: () => void;
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('normal');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedFontSize = localStorage.getItem('fontSize') as FontSize | null;
    const savedReadingMode = localStorage.getItem('readingMode') === 'true';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const savedDyslexicFont = localStorage.getItem('dyslexicFont') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedColorBlindMode = localStorage.getItem('colorBlindMode') as ColorBlindMode | null;
    
    // Theme: check saved, then system preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    // Reduced motion: check saved, then system preference
    if (savedReducedMotion) {
      setIsReducedMotion(true);
    } else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
    }
    
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedReadingMode) setIsReadingMode(true);
    if (savedDyslexicFont) setIsDyslexicFont(true);
    if (savedHighContrast) setIsHighContrast(true);
    if (savedColorBlindMode) setColorBlindMode(savedColorBlindMode);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle('dyslexic-font', isDyslexicFont);
    localStorage.setItem('dyslexicFont', String(isDyslexicFont));
  }, [isDyslexicFont]);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
    localStorage.setItem('highContrast', String(isHighContrast));
  }, [isHighContrast]);

  useEffect(() => {
    document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (colorBlindMode !== 'normal') {
      document.body.classList.add(colorBlindMode);
    }
    localStorage.setItem('colorBlindMode', colorBlindMode);
  }, [colorBlindMode]);

  useEffect(() => {
    document.body.classList.remove('font-size-normal', 'font-size-large', 'font-size-larger');
    document.body.classList.add(`font-size-${fontSize}`);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.toggle('reading-mode', isReadingMode);
    localStorage.setItem('readingMode', String(isReadingMode));
  }, [isReadingMode]);

  useEffect(() => {
    document.body.classList.toggle('reduced-motion', isReducedMotion);
    localStorage.setItem('reducedMotion', String(isReducedMotion));
  }, [isReducedMotion]);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition');
    setTheme(t => t === 'light' ? 'dark' : 'light');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 500);
  };
  const toggleDyslexicFont = () => setIsDyslexicFont(v => !v);
  const toggleHighContrast = () => setIsHighContrast(v => !v);
  const toggleReadingMode = () => setIsReadingMode(v => !v);
  const toggleReducedMotion = () => setIsReducedMotion(v => !v);

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
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
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
