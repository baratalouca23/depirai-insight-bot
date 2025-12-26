import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
  placeholderClassName?: string;
  showIcon?: boolean;
  blurOnLoad?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  placeholderClassName,
  showIcon = true,
  blurOnLoad = true,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', containerClassName)}
    >
      {/* Skeleton placeholder with enhanced shimmer */}
      {!isLoaded && !hasError && (
        <div 
          className={cn(
            'absolute inset-0 bg-gradient-to-br from-muted to-muted/80',
            placeholderClassName
          )}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent skeleton-shimmer" />
          
          {/* Pulsing circles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
          </div>
          
          {/* Center icon with animation */}
          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <ImageIcon className="h-8 w-8 text-muted-foreground/30 animate-pulse" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Error state with animation */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <div className="relative inline-block">
              <ImageIcon className="h-6 w-6 text-muted-foreground/50 mx-auto mb-1" />
              <div className="absolute inset-0 bg-destructive/10 rounded-full blur-lg" />
            </div>
            <span className="text-muted-foreground text-xs block mt-2">Erro ao carregar</span>
          </div>
        </div>
      )}
      
      {/* Image - only render when in view with blur transition */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            'transition-all duration-700 ease-out',
            isLoaded 
              ? 'opacity-100 blur-0 scale-100' 
              : blurOnLoad 
                ? 'opacity-0 blur-sm scale-105' 
                : 'opacity-0',
            className
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
}
