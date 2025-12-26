import React, { useState } from 'react';
import { ArrowRight, Server, BarChart3, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useScrollY } from '@/hooks/useParallax';
import { ParticleBackground, GradientOrbs } from '@/components/features/ParticleBackground';
import { TypeWriter } from '@/components/ui/TypeWriter';

export function Hero() {
  const { t } = useLanguage();
  const scrollY = useScrollY();
  const parallaxOffset = scrollY * 0.3;
  const [titleComplete, setTitleComplete] = useState(false);

  const stats = [
    { value: 50, suffix: '+', label: t.hero.stats.clients, icon: Server },
    { value: 40, suffix: '%', label: t.hero.stats.reduction, icon: BarChart3 },
    { value: 99.9, suffix: '%', decimals: 1, label: t.hero.stats.uptime, icon: Shield },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      
      {/* Interactive Particle Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleBackground 
          particleCount={40}
          speed={0.4}
          connectionDistance={100}
          interactive={true}
        />
      </div>

      {/* Gradient Orbs */}
      <GradientOrbs className="opacity-60" />
      
      {/* Parallax Blur Elements */}
      <div 
        className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transition-transform duration-100" 
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl transition-transform duration-100" 
        style={{ transform: `translateY(${-parallaxOffset * 0.3}px)` }}
        aria-hidden="true" 
      />
      {/* Additional dark mode ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden dark:block bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"
        style={{ transform: `translate(-50%, calc(-50% + ${parallaxOffset * 0.2}px))` }}
        aria-hidden="true" 
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8 animate-fade-in hover:bg-primary/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 
            id="hero-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}
          >
            <TypeWriter 
              text={t.hero.title}
              speed={60}
              delay={300}
              cursor={!titleComplete}
              onComplete={() => setTitleComplete(true)}
            />{' '}
            <span 
              className={`gradient-text text-glow inline-block transition-all duration-500 ${
                titleComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards', opacity: 0 }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards', opacity: 0 }}
          >
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            role="list"
            aria-label="Estatísticas principais"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards', opacity: 0 }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-minimal flex flex-col items-center hover-lift group relative overflow-hidden"
                role="listitem"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative mb-2 md:mb-3">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
                  </div>
                  <span className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                      duration={2500}
                    />
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{stat.label}</span>
                </div>
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
