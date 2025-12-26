import React from 'react';
import { ImageIcon } from 'lucide-react';

export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
        </div>
        <span className="text-muted-foreground text-sm animate-pulse">Carregando...</span>
      </div>
    </div>
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4">
      <div className="max-w-4xl w-full text-center space-y-6">
        {/* Badge skeleton */}
        <div className="h-8 bg-muted rounded-full w-40 mx-auto animate-pulse" />
        
        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="h-12 bg-muted rounded-full w-3/4 mx-auto animate-pulse" />
          <div className="h-12 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
        </div>
        
        {/* Subtitle skeleton */}
        <div className="h-5 bg-muted rounded-full w-2/3 mx-auto animate-pulse" />
        
        {/* Buttons skeleton */}
        <div className="flex justify-center gap-4 pt-4">
          <div className="h-12 bg-muted rounded-lg w-40 animate-pulse" />
          <div className="h-12 bg-muted/50 rounded-lg w-36 animate-pulse" />
        </div>
        
        {/* Stats skeleton */}
        <div className="flex justify-center gap-8 pt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-2">
              <div className="h-8 bg-muted rounded-full w-16 mx-auto animate-pulse" />
              <div className="h-3 bg-muted rounded-full w-20 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section skeleton with cards
export function SectionSkeleton({ cardCount = 3 }: { cardCount?: number }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="h-8 bg-muted rounded-full w-32 mx-auto mb-4 animate-pulse" />
          <div className="h-10 bg-muted rounded-full w-2/3 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
        </div>
        
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cardCount }).map((_, i) => (
            <div 
              key={i} 
              className="rounded-2xl bg-card border border-border/50 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial section skeleton
export function TestimonialsSkeleton() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="h-8 bg-muted rounded-full w-32 mx-auto mb-4 animate-pulse" />
          <div className="h-10 bg-muted rounded-full w-1/2 mx-auto animate-pulse" />
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="rounded-2xl bg-card border border-border/50 p-6"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}

// Full page skeleton combining all sections
export function FullPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="h-8 bg-muted rounded-lg w-32 animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-muted rounded-full w-16 animate-pulse" />
            ))}
          </div>
          <div className="h-10 bg-muted rounded-lg w-28 animate-pulse" />
        </div>
      </header>
      
      <main className="pt-16">
        <HeroSkeleton />
        <SectionSkeleton cardCount={3} />
        <SectionSkeleton cardCount={3} />
        <TestimonialsSkeleton />
      </main>
    </div>
  );
}
