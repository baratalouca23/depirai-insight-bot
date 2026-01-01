import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const animationClasses = {
    'fade-up': 'translate-y-6 opacity-0',
    'fade-left': '-translate-x-6 opacity-0',
    'fade-right': 'translate-x-6 opacity-0',
    'scale': 'scale-95 opacity-0',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'scale': 'scale-100 opacity-100',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  fadeIn?: boolean;
}

// Simplified ParallaxSection - just fade in, no parallax transform for performance
export function ParallaxSection({ 
  children, 
  className,
  fadeIn = true
}: ParallaxSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-opacity duration-500 ease-out motion-reduce:transition-none',
        fadeIn ? (isVisible ? 'opacity-100' : 'opacity-0') : '',
        className
      )}
    >
      {children}
    </div>
  );
}
