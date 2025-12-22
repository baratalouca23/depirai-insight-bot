import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
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
    'fade-up': 'translate-y-8 opacity-0',
    'fade-left': '-translate-x-8 opacity-0',
    'fade-right': 'translate-x-8 opacity-0',
    'scale': 'scale-95 opacity-0',
    'blur': 'blur-sm opacity-0',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'scale': 'scale-100 opacity-100',
    'blur': 'blur-0 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
