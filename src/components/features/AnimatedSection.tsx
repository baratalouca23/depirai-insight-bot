import { ReactNode, useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur' | 'parallax-up' | 'parallax-fade';
  delay?: number;
  parallaxSpeed?: number;
}

export function AnimatedSection({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0,
  parallaxSpeed = 0.1
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const isParallax = animation === 'parallax-up' || animation === 'parallax-fade';

  useEffect(() => {
    if (!isParallax) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (progress - 0.5) * parallaxSpeed * 100;
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isParallax, parallaxSpeed]);

  const animationClasses = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-left': '-translate-x-8 opacity-0',
    'fade-right': 'translate-x-8 opacity-0',
    'scale': 'scale-95 opacity-0',
    'blur': 'blur-sm opacity-0',
    'parallax-up': 'translate-y-12 opacity-0',
    'parallax-fade': 'opacity-0',
  };

  const visibleClasses = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'scale': 'scale-100 opacity-100',
    'blur': 'blur-0 opacity-100',
    'parallax-up': 'translate-y-0 opacity-100',
    'parallax-fade': 'opacity-100',
  };

  const parallaxStyle = isParallax && isVisible ? {
    transform: `translateY(${parallaxOffset}px)`,
    willChange: 'transform' as const,
  } : {};

  return (
    <div
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...parallaxStyle
      }}
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

export function ParallaxSection({ 
  children, 
  className,
  speed = 0.15,
  fadeIn = true
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [opacity, setOpacity] = useState(fadeIn ? 0 : 1);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setOpacity(1);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Parallax offset
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const parallaxOffset = (scrollProgress - 0.5) * speed * 200;
        setOffset(parallaxOffset);

        // Fade in effect
        if (fadeIn) {
          const fadeProgress = Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.3));
          setOpacity(Math.max(0, fadeProgress));
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, fadeIn]);

  return (
    <div
      ref={sectionRef}
      className={cn('transition-opacity duration-500', className)}
      style={{ 
        transform: `translateY(${offset}px)`,
        opacity,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
