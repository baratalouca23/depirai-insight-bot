import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
}

export function ImageSkeleton({
  src,
  alt,
  className,
  containerClassName,
  skeletonClassName,
  ...props
}: ImageSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse',
            skeletonClassName
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Erro ao carregar</span>
        </div>
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
