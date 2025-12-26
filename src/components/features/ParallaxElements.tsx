import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxLayerProps {
  children?: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ParallaxLayer({ 
  children, 
  speed = 0.5, 
  className = '', 
  direction = 'up' 
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolled = windowHeight - rect.top;
        const parallaxOffset = scrolled * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${-offset}px)`;
      case 'down': return `translateY(${offset}px)`;
      case 'left': return `translateX(${-offset}px)`;
      case 'right': return `translateX(${offset}px)`;
      default: return `translateY(${-offset}px)`;
    }
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ transform: getTransform(), willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

interface ParallaxBackgroundProps {
  variant?: 'orbs' | 'gradient' | 'mesh';
  className?: string;
}

export function ParallaxBackground({ variant = 'orbs', className = '' }: ParallaxBackgroundProps) {
  if (variant === 'orbs') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        <ParallaxLayer speed={0.1} direction="down" className="absolute top-0 right-0">
          <div className="w-64 md:w-96 h-64 md:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.15} direction="up" className="absolute bottom-0 left-0">
          <div className="w-48 md:w-72 h-48 md:h-72 bg-accent/10 dark:bg-accent/15 rounded-full blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.08} direction="right" className="absolute top-1/2 left-1/3">
          <div className="w-32 md:w-48 h-32 md:h-48 bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl" />
        </ParallaxLayer>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        <ParallaxLayer speed={0.05} direction="down">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        </ParallaxLayer>
      </div>
    );
  }

  if (variant === 'mesh') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        <ParallaxLayer speed={0.12} direction="down" className="absolute -top-20 -right-20">
          <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.08} direction="up" className="absolute -bottom-20 -left-20">
          <div className="w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} direction="left" className="absolute top-1/3 right-1/4">
          <div className="w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
        </ParallaxLayer>
      </div>
    );
  }

  return null;
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  containerClassName?: string;
}

export function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.1, 
  className = '',
  containerClassName = ''
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const parallaxOffset = (progress - 0.5) * speed * 100;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <img 
        src={src} 
        alt={alt} 
        className={className}
        style={{ 
          transform: `translateY(${offset}px) scale(1.1)`,
          willChange: 'transform'
        }}
      />
    </div>
  );
}
