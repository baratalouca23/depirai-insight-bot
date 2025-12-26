import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ColorBlindMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  colorBlindMode: ColorBlindMode;
  setColorBlindMode: (mode: ColorBlindMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [colorBlindMode, setColorBlindMode] = useState<ColorBlindMode>('normal');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle('dyslexic-font', isDyslexicFont);
  }, [isDyslexicFont]);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
  }, [isHighContrast]);

  useEffect(() => {
    document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (colorBlindMode !== 'normal') {
      document.body.classList.add(colorBlindMode);
    }
  }, [colorBlindMode]);

  const toggleTheme = () => {
    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transition');
    
    setTheme(t => t === 'light' ? 'dark' : 'light');
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 500);
  };
  const toggleDyslexicFont = () => setIsDyslexicFont(v => !v);
  const toggleHighContrast = () => setIsHighContrast(v => !v);

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
