import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TechGridProps {
  className?: string;
}

export function TechGrid({ className }: TechGridProps) {
  // Generate random binary strings
  const binaryStrings = useMemo(() => 
    [...Array(6)].map(() => ({
      content: [...Array(20)].map(() => Math.random() > 0.5 ? '1' : '0').join(''),
      left: `${Math.random() * 90}%`,
      animationDuration: `${15 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.03 + Math.random() * 0.02,
    })), []
  );

  // Generate floating particles
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      size: 2 + Math.random() * 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 4}s`,
    })), []
  );

  // Generate hex codes
  const hexCodes = useMemo(() => 
    [...Array(4)].map(() => ({
      content: `0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toUpperCase()}`,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      animationDelay: `${Math.random() * 8}s`,
    })), []
  );

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Animated grid lines */}
      <div className="absolute inset-0 tech-grid opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Binary rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {binaryStrings.map((binary, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-primary/10 font-mono text-xs animate-binary-fall whitespace-nowrap"
            style={{
              left: binary.left,
              animationDuration: binary.animationDuration,
              animationDelay: binary.animationDelay,
              opacity: binary.opacity,
            }}
          >
            {binary.content}
          </div>
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-primary/20 animate-float-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDuration: particle.animationDuration,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>
      
      {/* Floating tech nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30 animate-tech-pulse"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {/* Node connection lines */}
            <div 
              className="absolute w-16 h-px bg-gradient-to-r from-primary/20 to-transparent origin-left"
              style={{ transform: `rotate(${45 + i * 15}deg)` }}
            />
          </div>
        ))}
      </div>
      
      {/* Hex codes floating */}
      <div className="absolute inset-0">
        {hexCodes.map((hex, i) => (
          <span
            key={`hex-${i}`}
            className="absolute font-mono text-[10px] text-primary/10 animate-hex-float"
            style={{
              left: hex.left,
              top: hex.top,
              animationDelay: hex.animationDelay,
            }}
          >
            {hex.content}
          </span>
        ))}
      </div>
      
      {/* Subtle scanning line */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>
      
      {/* Corner circuit patterns */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent animate-corner-pulse" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/30 to-transparent animate-corner-pulse" />
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-primary/20 animate-tech-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-30" style={{ animationDelay: '1s' }}>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/30 to-transparent animate-corner-pulse" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-primary/30 to-transparent animate-corner-pulse" />
        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-primary/20 animate-tech-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
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
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
    </div>
  );
}
