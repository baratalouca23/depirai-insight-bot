import React from 'react';
import { cn } from '@/lib/utils';

interface TechGridProps {
  className?: string;
}

export function TechGrid({ className }: TechGridProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Animated grid lines */}
      <div className="absolute inset-0 tech-grid opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Floating tech nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-tech-pulse"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle scanning line */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l border-t border-primary/10 opacity-50 animate-corner-pulse" />
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r border-b border-primary/10 opacity-50 animate-corner-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Data streams */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-data-stream"
          style={{
            top: `${30 + i * 20}%`,
            left: '0',
            right: '0',
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
