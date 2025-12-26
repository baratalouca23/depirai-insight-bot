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
        'relative inline-flex items-center rounded-full transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        s.toggle,
        isDark 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_0_20px_hsl(var(--primary)/0.3)]' 
          : 'bg-gradient-to-r from-amber-400 to-orange-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]',
        className
      )}
    >
      {/* Stars (visible in dark mode) */}
      <div className={cn(
        'absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500',
        isDark ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-2.5 left-4 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1.5 left-3 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-500" />
      </div>

      {/* Clouds (visible in light mode) */}
      <div className={cn(
        'absolute inset-0 overflow-hidden rounded-full transition-opacity duration-500',
        isDark ? 'opacity-0' : 'opacity-100'
      )}>
        <div className="absolute top-1 right-2 w-2 h-1 bg-white/60 rounded-full" />
        <div className="absolute bottom-1.5 right-3 w-1.5 h-0.5 bg-white/40 rounded-full" />
      </div>

      {/* Toggle Circle */}
      <span
        className={cn(
          'absolute left-0.5 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ease-out',
          s.circle,
          isDark ? s.translate : 'translate-x-0'
        )}
      >
        {/* Sun Icon */}
        <Sun 
          className={cn(
            'absolute text-amber-500 transition-all duration-300',
            s.icon,
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          )}
        />
        {/* Moon Icon */}
        <Moon 
          className={cn(
            'absolute text-indigo-600 transition-all duration-300',
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
        'relative h-9 w-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group',
        className
      )}
    >
      {/* Background glow */}
      <div className={cn(
        'absolute inset-0 rounded-lg transition-all duration-500',
        isDark 
          ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100' 
          : 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100'
      )} />

      {/* Sun Icon */}
      <Sun 
        className={cn(
          'absolute h-5 w-5 text-amber-500 transition-all duration-500',
          isDark 
            ? 'opacity-0 rotate-90 scale-0' 
            : 'opacity-100 rotate-0 scale-100 group-hover:rotate-[20deg]'
        )}
      />
      
      {/* Moon Icon */}
      <Moon 
        className={cn(
          'absolute h-5 w-5 text-indigo-400 transition-all duration-500',
          isDark 
            ? 'opacity-100 rotate-0 scale-100 group-hover:-rotate-12' 
            : 'opacity-0 -rotate-90 scale-0'
        )}
      />

      {/* Rays animation for sun */}
      {!isDark && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-1 bg-amber-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-12px)`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
}