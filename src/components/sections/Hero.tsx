import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: 50, suffix: '+', label: t.hero.stats.clients },
    { value: 40, suffix: '%', label: t.hero.stats.reduction },
    { value: 99.9, suffix: '%', decimals: 1, label: t.hero.stats.uptime },
  ];

  return (
    <section 
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 hero-bg-enhanced" aria-hidden="true" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true" 
      />
      
      {/* Primary glow - top right */}
      <div 
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/[0.06] dark:bg-primary/[0.08] rounded-full blur-[100px]"
        aria-hidden="true" 
      />
      
      {/* Secondary glow - bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[80px]"
        aria-hidden="true" 
      />
      
      {/* Accent glow - center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-primary/[0.02] dark:via-primary/[0.04] to-transparent blur-[60px]"
        aria-hidden="true" 
      />
      
      {/* Decorative geometric shapes */}
      <div 
        className="absolute top-20 left-[15%] w-16 h-16 border border-primary/10 dark:border-primary/20 rounded-full"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-32 right-[20%] w-8 h-8 border border-primary/10 dark:border-primary/15 rotate-45"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-[10%] w-2 h-2 bg-primary/20 dark:bg-primary/30 rounded-full"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 left-[10%] w-3 h-3 bg-primary/15 dark:bg-primary/25 rounded-full"
        aria-hidden="true" 
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-fade-in"
          >
            {t.hero.title}{' '}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 animate-fade-in">
            <Button size="lg" className="btn-glow px-8" asChild>
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="#portfolio">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats - Clean grid */}
          <div 
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in"
            role="list"
            aria-label="Estatísticas principais"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                role="listitem"
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground block">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals || 0}
                    duration={2000}
                  />
                </span>
                <span className="text-xs md:text-sm text-muted-foreground mt-1 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
