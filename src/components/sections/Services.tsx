import React, { useState } from 'react';
import { Code, Server, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ParallaxBackground } from '@/components/features/ParallaxElements';

type CategoryKey = 'development' | 'infrastructure' | 'security';

export function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('development');
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.1 });

  const categoryIcons = {
    development: Code,
    infrastructure: Server,
    security: Shield,
  };

  const categoryColors = {
    development: 'from-blue-500/20 to-blue-500/5',
    infrastructure: 'from-primary/20 to-primary/5',
    security: 'from-amber-500/20 to-amber-500/5',
  };

  const categories = Object.entries(t.services.categories) as [CategoryKey, typeof t.services.categories.development][];

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden" aria-labelledby="services-title">
      <ParallaxBackground variant="orbs" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-10 md:mb-12 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Soluções
          </span>
          <h2 id="services-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t.services.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">{t.services.subtitle}</p>
        </header>

        {/* Category Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12" role="tablist" aria-label="Categorias de serviços">
          {categories.map(([key, category]) => {
            const Icon = categoryIcons[key];
            return (
              <button
                key={key}
                role="tab"
                aria-selected={activeCategory === key}
                aria-controls={`panel-${key}`}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base focus-ring',
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                {category.title}
              </button>
            );
          })}
        </nav>

        {/* Active Category Content */}
        <div ref={contentRef}>
          {categories.map(([key, category]) => (
            <div
              key={key}
              id={`panel-${key}`}
              role="tabpanel"
              aria-labelledby={key}
              className={cn(
                'transition-all duration-500',
                activeCategory === key ? 'block' : 'hidden'
              )}
            >
              <p className="text-center text-sm md:text-base text-muted-foreground mb-6 md:mb-8">{category.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.items.map((service, index) => {
                  const Icon = categoryIcons[key];
                  return (
                    <article
                      key={index}
                      className={cn(
                        "group relative bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50",
                        contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      )}
                      style={{ 
                        transitionDelay: contentVisible ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      {/* Shine effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                      </div>

                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${categoryColors[key]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        aria-hidden="true"
                      />

                      {/* Floating icon background */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:rotate-12" aria-hidden="true">
                        <Icon className="w-full h-full text-primary" />
                      </div>

                      {/* Animated corner glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
                      </div>

                      {/* Bottom glow line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" aria-hidden="true" />

                      <div className="relative z-10">
                        {/* Service number badge with pulse effect */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <span className="relative z-10">{String(index + 1).padStart(2, '0')}</span>
                          <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                        </div>

                        {/* Category icon */}
                        <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                        </div>

                        {/* Title with underline animation */}
                        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 relative inline-block">
                          {service.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                        </h3>

                        {/* Problem */}
                        <div className="mb-3 md:mb-4">
                          <p className="text-xs md:text-sm text-muted-foreground italic group-hover:text-muted-foreground/80 transition-colors duration-300">
                            {service.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <p className="text-foreground mb-3 md:mb-4 text-xs md:text-sm">
                          {service.solution}
                        </p>

                        {/* Features with staggered animation */}
                        <ul className="space-y-1.5 md:space-y-2 mb-5 md:mb-6" aria-label="Recursos inclusos">
                          {service.features.map((feature, i) => (
                            <li 
                              key={i} 
                              className="flex items-center gap-2 text-xs md:text-sm text-foreground opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" 
                              style={{ transitionDelay: `${i * 75}ms` }}
                            >
                              <div className="relative">
                                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
                                <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA with enhanced hover */}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group/btn w-full text-xs md:text-sm focus-ring hover:bg-primary hover:text-primary-foreground hover:border-primary relative overflow-hidden" 
                          asChild
                        >
                          <a href="#contact">
                            <span className="relative z-10 flex items-center justify-center w-full">
                              Solicitar Orçamento
                              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" aria-hidden="true" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </a>
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
