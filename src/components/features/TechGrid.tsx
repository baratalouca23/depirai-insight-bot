import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TechGridProps {
  className?: string;
}

export function TechGrid({ className }: TechGridProps) {
  // Minimal floating dots - very lightweight
  const dots = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      left: `${15 + i * 14}%`,
      top: `${20 + (i % 3) * 25}%`,
      delay: i * 0.8,
    })), []
  );

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Simple CSS grid pattern - no JS */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Minimal floating dots with CSS animations only */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20 animate-pulse"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: `${dot.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}
      
      {/* Two subtle gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/3 blur-3xl"
        style={{ willChange: 'auto' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/3 blur-3xl"
        style={{ willChange: 'auto' }}
      />
    </div>
  );
}
