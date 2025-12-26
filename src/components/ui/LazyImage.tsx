import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
  placeholderClassName?: string;
  showIcon?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  placeholderClassName,
  showIcon = true,
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
      {/* Skeleton placeholder with shimmer */}
      {!isLoaded && !hasError && (
        <div 
          className={cn(
            'absolute inset-0 bg-muted',
            placeholderClassName
          )}
        >
          {/* Shimmer animation */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent animate-shimmer"
            style={{ backgroundSize: '200% 100%' }}
          />
          {/* Center icon */}
          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
            </div>
          )}
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground/50 mx-auto mb-1" />
            <span className="text-muted-foreground text-xs">Erro</span>
          </div>
        </div>
      )}
      
      {/* Image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            'transition-opacity duration-500 ease-out',
            isLoaded ? 'opacity-100' : 'opacity-0',
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
