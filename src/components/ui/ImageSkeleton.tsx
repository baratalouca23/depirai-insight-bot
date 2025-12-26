import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface ImageSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  showIcon?: boolean;
}

export function ImageSkeleton({
  src,
  alt,
  className,
  containerClassName,
  skeletonClassName,
  showIcon = true,
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
            'absolute inset-0 bg-muted',
            skeletonClassName
          )}
        >
          {/* Shimmer effect */}
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
            <ImageIcon className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
            <span className="text-muted-foreground text-xs">Erro ao carregar</span>
          </div>
        </div>
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-500 ease-out',
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

// Skeleton variants for different content types
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-2xl bg-card border border-border/50 overflow-hidden', className)}>
      {/* Image skeleton */}
      <div className="relative h-48 bg-muted">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent animate-shimmer"
          style={{ backgroundSize: '200% 100%' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-10 w-10 text-muted-foreground/30" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-4 bg-muted rounded-full w-1/4 animate-pulse" />
        <div className="h-6 bg-muted rounded-full w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded-full w-full animate-pulse" />
          <div className="h-3 bg-muted rounded-full w-5/6 animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-muted rounded-full w-16 animate-pulse" />
          <div className="h-6 bg-muted rounded-full w-20 animate-pulse" />
          <div className="h-6 bg-muted rounded-full w-14 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-2xl bg-card border border-border/50 p-6', className)}>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-muted rounded-full w-32 animate-pulse" />
          <div className="h-3 bg-muted rounded-full w-24 animate-pulse" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded-full w-full animate-pulse" />
        <div className="h-3 bg-muted rounded-full w-full animate-pulse" />
        <div className="h-3 bg-muted rounded-full w-3/4 animate-pulse" />
      </div>
    </div>
  );
}

export function SectionHeaderSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('text-center max-w-2xl mx-auto mb-12', className)}>
      <div className="h-8 bg-muted rounded-full w-32 mx-auto mb-4 animate-pulse" />
      <div className="h-10 bg-muted rounded-full w-2/3 mx-auto mb-4 animate-pulse" />
      <div className="h-4 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
    </div>
  );
}
