import React from 'react';
import { ImageIcon, Code, Zap, Database } from 'lucide-react';

// Shimmer overlay component
function ShimmerOverlay() {
  return (
    <div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent animate-shimmer"
      style={{ backgroundSize: '200% 100%' }}
    />
  );
}

// Pulse dot indicator
function PulseIndicator() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 bg-primary/60 rounded-full animate-pulse" />
      <span className="h-2 w-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
      <span className="h-2 w-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo placeholder */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Code className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
        </div>
        
        {/* Loading text with dots */}
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-sm font-medium">Carregando</span>
          <PulseIndicator />
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary/60 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}

// Hero section skeleton with enhanced animations
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20 px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-4xl w-full text-center space-y-8 relative">
        {/* Badge skeleton */}
        <div className="relative inline-block">
          <div className="h-8 bg-primary/10 rounded-full w-48 mx-auto overflow-hidden">
            <ShimmerOverlay />
          </div>
        </div>
        
        {/* Title skeleton with stagger */}
        <div className="space-y-4">
          <div className="relative h-14 bg-muted/80 rounded-2xl w-4/5 mx-auto overflow-hidden animate-fade-in">
            <ShimmerOverlay />
          </div>
          <div 
            className="relative h-14 bg-muted/60 rounded-2xl w-3/5 mx-auto overflow-hidden animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <ShimmerOverlay />
          </div>
        </div>
        
        {/* Subtitle skeleton */}
        <div 
          className="relative h-5 bg-muted/40 rounded-full w-2/3 mx-auto overflow-hidden animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <ShimmerOverlay />
        </div>
        
        {/* Buttons skeleton */}
        <div 
          className="flex justify-center gap-4 pt-4 animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <div className="relative h-12 bg-primary/20 rounded-xl w-44 overflow-hidden">
            <ShimmerOverlay />
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <Zap className="h-4 w-4 text-primary/40" />
              <div className="h-3 w-20 bg-primary/20 rounded-full" />
            </div>
          </div>
          <div className="relative h-12 bg-muted/30 rounded-xl w-36 overflow-hidden border border-border/50">
            <ShimmerOverlay />
          </div>
        </div>
        
        {/* Stats skeleton */}
        <div 
          className="flex justify-center gap-12 pt-8 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          {[
            { icon: Database, delay: '0ms' },
            { icon: Code, delay: '100ms' },
            { icon: Zap, delay: '200ms' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="text-center space-y-3"
              style={{ animationDelay: item.delay }}
            >
              <div className="relative h-10 w-20 mx-auto bg-muted/60 rounded-lg overflow-hidden">
                <ShimmerOverlay />
                <div className="absolute inset-0 flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-muted-foreground/30" />
                </div>
              </div>
              <div className="h-3 bg-muted/40 rounded-full w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section skeleton with cards - enhanced
export function SectionSkeleton({ cardCount = 3 }: { cardCount?: number }) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="relative inline-block mb-4">
            <div className="h-6 bg-primary/10 rounded-full w-28 overflow-hidden">
              <ShimmerOverlay />
            </div>
          </div>
          <div className="relative h-10 bg-muted/60 rounded-2xl w-2/3 mx-auto mb-4 overflow-hidden">
            <ShimmerOverlay />
          </div>
          <div className="relative h-4 bg-muted/30 rounded-full w-1/2 mx-auto overflow-hidden">
            <ShimmerOverlay />
          </div>
        </div>
        
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cardCount }).map((_, i) => (
            <div 
              key={i} 
              className="rounded-2xl bg-card border border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image skeleton with icon */}
              <div className="relative h-48 bg-muted/50">
                <ShimmerOverlay />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div className="h-5 w-16 bg-background/80 rounded-full" />
                </div>
              </div>
              
              {/* Content skeleton */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-4 bg-primary/10 rounded-full w-20 overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                  <PulseIndicator />
                </div>
                <div className="relative h-6 bg-muted/60 rounded-lg w-4/5 overflow-hidden">
                  <ShimmerOverlay />
                </div>
                <div className="space-y-2">
                  <div className="relative h-3 bg-muted/30 rounded-full w-full overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                  <div className="relative h-3 bg-muted/20 rounded-full w-5/6 overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                </div>
                {/* Tags */}
                <div className="flex gap-2 pt-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 w-14 bg-muted/20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial section skeleton - enhanced
export function TestimonialsSkeleton() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="relative inline-block mb-4">
            <div className="h-6 bg-primary/10 rounded-full w-32 overflow-hidden">
              <ShimmerOverlay />
            </div>
          </div>
          <div className="relative h-10 bg-muted/60 rounded-2xl w-1/2 mx-auto overflow-hidden">
            <ShimmerOverlay />
          </div>
        </div>
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="rounded-2xl bg-card border border-border/50 p-6 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="h-4 w-4 bg-yellow-500/20 rounded" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="space-y-2 mb-6">
                <div className="relative h-3 bg-muted/40 rounded-full w-full overflow-hidden">
                  <ShimmerOverlay />
                </div>
                <div className="relative h-3 bg-muted/30 rounded-full w-full overflow-hidden">
                  <ShimmerOverlay />
                </div>
                <div className="relative h-3 bg-muted/20 rounded-full w-3/4 overflow-hidden">
                  <ShimmerOverlay />
                </div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="relative h-12 w-12 rounded-full bg-muted overflow-hidden">
                  <ShimmerOverlay />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="relative h-4 bg-muted/50 rounded-full w-28 overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                  <div className="relative h-3 bg-muted/30 rounded-full w-20 overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact section skeleton
export function ContactSkeleton() {
  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info side */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative h-8 bg-muted/60 rounded-xl w-48 overflow-hidden">
              <ShimmerOverlay />
            </div>
            <div className="relative h-4 bg-muted/30 rounded-full w-64 overflow-hidden">
              <ShimmerOverlay />
            </div>
            
            {/* Contact items */}
            <div className="space-y-4 pt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg" />
                  <div className="relative h-4 bg-muted/30 rounded-full w-32 overflow-hidden">
                    <ShimmerOverlay />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form side */}
          <div 
            className="rounded-2xl bg-card border border-border/50 p-6 space-y-4 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-muted/30 rounded w-16" />
                  <div className="relative h-10 bg-muted/20 rounded-lg overflow-hidden border border-border/30">
                    <ShimmerOverlay />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-muted/30 rounded w-20" />
              <div className="relative h-24 bg-muted/20 rounded-lg overflow-hidden border border-border/30">
                <ShimmerOverlay />
              </div>
            </div>
            <div className="relative h-11 bg-primary/20 rounded-lg overflow-hidden">
              <ShimmerOverlay />
            </div>
          </div>
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
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary/20 rounded-lg" />
            <div className="h-5 bg-muted rounded-lg w-24" />
          </div>
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="relative h-4 bg-muted/50 rounded-full w-16 overflow-hidden"
              >
                <ShimmerOverlay />
              </div>
            ))}
          </div>
          <div className="relative h-10 bg-primary/20 rounded-lg w-28 overflow-hidden">
            <ShimmerOverlay />
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        <HeroSkeleton />
        <SectionSkeleton cardCount={3} />
        <SectionSkeleton cardCount={3} />
        <TestimonialsSkeleton />
        <ContactSkeleton />
      </main>
    </div>
  );
}
