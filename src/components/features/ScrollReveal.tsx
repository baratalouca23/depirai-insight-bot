import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'flip-left'
  | 'slide-up'
  | 'slide-rotate';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const animationStyles: Record<AnimationType, { initial: string; visible: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    initial: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  'zoom-out': {
    initial: 'opacity-0 scale-110',
    visible: 'opacity-100 scale-100',
  },
  'flip-up': {
    initial: 'opacity-0 rotateX-90',
    visible: 'opacity-100 rotateX-0',
  },
  'flip-left': {
    initial: 'opacity-0 rotateY-90',
    visible: 'opacity-100 rotateY-0',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-20',
    visible: 'opacity-100 translate-y-0',
  },
  'slide-rotate': {
    initial: 'opacity-0 translate-y-12 rotate-3',
    visible: 'opacity-100 translate-y-0 rotate-0',
  },
};

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isReducedMotion } = useTheme();

  useEffect(() => {
    if (isReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once, isReducedMotion]);

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? styles.visible : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  );
}

// Stagger container for multiple children
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 100,
  className 
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal delay={index * staggerDelay} key={index}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
