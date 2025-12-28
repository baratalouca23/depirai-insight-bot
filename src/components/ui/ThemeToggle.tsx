import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ThemeToggle({ className, size = 'md' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const sizes = {
    sm: {
      toggle: 'w-12 h-6',
      circle: 'w-5 h-5',
      icon: 'h-3 w-3',
      translate: 'translate-x-6',
    },
    md: {
      toggle: 'w-14 h-7',
      circle: 'w-6 h-6',
      icon: 'h-3.5 w-3.5',
      translate: 'translate-x-7',
    },
    lg: {
      toggle: 'w-16 h-8',
      circle: 'w-7 h-7',
      icon: 'h-4 w-4',
      translate: 'translate-x-8',
    },
  };

  const s = sizes[size];

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      aria-pressed={isDark}
      className={cn(
        'relative inline-flex items-center rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background border',
        s.toggle,
        isDark 
          ? 'bg-muted border-border' 
          : 'bg-muted border-border',
        className
      )}
    >
      {/* Toggle Circle */}
      <span
        className={cn(
          'absolute left-0.5 flex items-center justify-center rounded-full bg-primary shadow-sm transition-all duration-300 ease-out',
          s.circle,
          isDark ? s.translate : 'translate-x-0'
        )}
      >
        {/* Sun Icon */}
        <Sun 
          className={cn(
            'absolute text-primary-foreground transition-all duration-300',
            s.icon,
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          )}
        />
        {/* Moon Icon */}
        <Moon 
          className={cn(
            'absolute text-primary-foreground transition-all duration-300',
            s.icon,
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          )}
        />
      </span>
    </button>
  );
}

// Simple icon toggle for compact spaces
export function ThemeToggleIcon({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      aria-pressed={isDark}
      className={cn(
        'relative h-9 w-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-muted border border-transparent hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group',
        className
      )}
    >
      {/* Sun Icon */}
      <Sun 
        className={cn(
          'absolute h-5 w-5 text-primary transition-all duration-300',
          isDark 
            ? 'opacity-0 rotate-90 scale-0' 
            : 'opacity-100 rotate-0 scale-100 group-hover:rotate-[20deg]'
        )}
      />
      
      {/* Moon Icon */}
      <Moon 
        className={cn(
          'absolute h-5 w-5 text-primary transition-all duration-300',
          isDark 
            ? 'opacity-100 rotate-0 scale-100 group-hover:-rotate-12' 
            : 'opacity-0 -rotate-90 scale-0'
        )}
      />
    </button>
  );
}