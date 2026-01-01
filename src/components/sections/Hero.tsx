import React from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: 50, suffix: '+', label: t.hero.stats.clients, icon: Zap },
    { value: 40, suffix: '%', label: t.hero.stats.reduction, icon: Clock },
    { value: 99.9, suffix: '%', decimals: 1, label: t.hero.stats.uptime, icon: Shield },
  ];

  return (
    <section 
      className="relative min-h-[95vh] flex items-center pt-20 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Simple gradient background */}
      <div 
        className="absolute inset-0 hero-bg-enhanced pointer-events-none" 
        aria-hidden="true"
      />
      
      {/* Subtle gradient orbs - static, no animation */}
      <div 
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.05] dark:bg-primary/[0.08] rounded-full blur-[100px]"
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-60 -left-60 w-[400px] h-[400px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[80px]"
        aria-hidden="true" 
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold mb-10 animate-fade-in backdrop-blur-sm border border-primary/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.05] tracking-tight animate-fade-in"
          >
            {t.hero.title}{' '}
            <span className="gradient-text">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.15s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <Button size="xl" className="px-10 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button size="xl" variant="outline" className="px-10 hover:bg-primary/5" asChild>
              <a href="#portfolio">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in"
            role="list"
            aria-label="Estatísticas principais"
            style={{ animationDelay: '0.35s' }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group"
                  role="listitem"
                >
                  <Icon className="h-6 w-6 mx-auto mb-3 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground block">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                      duration={2000}
                    />
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground mt-2 block">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
