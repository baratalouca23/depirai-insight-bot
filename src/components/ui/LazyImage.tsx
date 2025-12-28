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
      {/* Simple skeleton placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={cn(
            'absolute inset-0 bg-muted animate-pulse',
            placeholderClassName
          )}
        >
          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
            </div>
          )}
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <ImageIcon className="h-5 w-5 text-muted-foreground/40" />
        </div>
      )}
      
      {/* Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            'transition-opacity duration-300',
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
