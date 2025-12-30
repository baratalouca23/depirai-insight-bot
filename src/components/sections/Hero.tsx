import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const stats = [
    { value: 50, suffix: '+', label: t.hero.stats.clients, icon: Zap },
    { value: 40, suffix: '%', label: t.hero.stats.reduction, icon: Clock },
    { value: 99.9, suffix: '%', decimals: 1, label: t.hero.stats.uptime, icon: Shield },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-[95vh] flex items-center pt-20 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Interactive spotlight background */}
      <div 
        className="absolute inset-0 hero-bg-enhanced pointer-events-none" 
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`
        }}
      />
      
      {/* Cyber grid overlay */}
      <div 
        className="absolute inset-0 cyber-grid opacity-50 dark:opacity-30"
        aria-hidden="true" 
      />
      
      {/* Morphing blobs */}
      <div 
        className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-primary/[0.06] dark:bg-primary/[0.1] morphing-blob blur-[100px]"
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-primary/[0.05] dark:bg-primary/[0.08] morphing-blob blur-[80px]"
        style={{ animationDelay: '-5s' }}
        aria-hidden="true" 
      />
      
      {/* Holographic overlay */}
      <div 
        className="absolute inset-0 holographic opacity-30 dark:opacity-20"
        aria-hidden="true" 
      />
      
      {/* Floating decorative elements with glow */}
      <div 
        className="absolute top-32 left-[12%] w-20 h-20 border border-primary/20 dark:border-primary/40 rounded-full animate-float neon-box opacity-60"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-40 right-[15%] w-12 h-12 border border-primary/15 dark:border-primary/30 rotate-45 animate-float neon-box opacity-40"
        style={{ animationDelay: '-2s' }}
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 right-[8%] w-3 h-3 bg-primary/40 dark:bg-primary/60 rounded-full animate-pulse-glow"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 left-[8%] w-4 h-4 bg-primary/30 dark:bg-primary/50 rounded-full animate-pulse-glow"
        style={{ animationDelay: '-1s' }}
        aria-hidden="true" 
      />
      
      {/* Electric lines */}
      <div className="absolute top-1/3 left-0 right-0 electric-line" style={{ animationDelay: '0s' }} aria-hidden="true" />
      <div className="absolute top-2/3 left-0 right-0 electric-line" style={{ animationDelay: '-1.5s' }} aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with radar ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold mb-10 animate-fade-in radar-ping backdrop-blur-sm border border-primary/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* Title with glitch effect */}
          <h1 
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.05] tracking-tight"
          >
            <span className="animate-fade-in inline-block">{t.hero.title}{' '}</span>
            <span 
              className="gradient-morph inline-block animate-fade-in glitch-text text-glow"
              data-text={t.hero.titleHighlight}
              style={{ animationDelay: '0.2s' }}
            >
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle with reveal effect */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in text-reveal" style={{ animationDelay: '0.3s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in stagger-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="xl" variant="glow" className="px-10 group" asChild>
              <a href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Button>
            <Button size="xl" variant="neon" className="px-10" asChild>
              <a href="#portfolio">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          {/* Stats with neon cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in"
            role="list"
            aria-label="Estatísticas principais"
            style={{ animationDelay: '0.5s' }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 group neon-box"
                  role="listitem"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Icon className="h-6 w-6 mx-auto mb-3 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground block gradient-morph">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                      duration={2500}
                    />
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground mt-2 block">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced scroll hint */}
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
