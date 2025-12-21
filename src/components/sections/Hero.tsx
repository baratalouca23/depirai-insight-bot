import React from 'react';
import { ArrowRight, Server, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: '50+', label: t.hero.stats.clients, icon: Server },
    { value: '40%', label: t.hero.stats.reduction, icon: BarChart3 },
    { value: '99.9%', label: t.hero.stats.uptime, icon: Shield },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 
            id="hero-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-in-up leading-tight"
          >
            {t.hero.title}{' '}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-up delay-100">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 animate-fade-in-up delay-200">
            <Button size="lg" className="btn-glow text-base md:text-lg px-6 md:px-8 w-full sm:w-auto" asChild>
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto" asChild>
              <a href="#portfolio">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 animate-fade-in-up delay-300"
            role="list"
            aria-label="Estatísticas principais"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-minimal flex flex-col items-center hover-lift"
                role="listitem"
              >
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3" aria-hidden="true" />
                <span className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
