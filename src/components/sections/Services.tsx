import React, { useState } from 'react';
import { Code, Server, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
    <section id="services" className="section-padding bg-muted/30" aria-labelledby="services-title">
      <div className="section-container">
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
                {category.items.map((service, index) => (
                  <article
                    key={index}
                    className={cn(
                      "group relative bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border card-hover overflow-hidden transition-all duration-500",
                      contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ 
                      transitionDelay: contentVisible ? `${index * 100}ms` : '0ms'
                    }}
                  >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryColors[key]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    aria-hidden="true"
                  />

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-pulse" />
                  </div>

                  <div className="relative z-10">
                    {/* Service number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Problem */}
                    <div className="mb-3 md:mb-4">
                      <p className="text-xs md:text-sm text-muted-foreground italic">
                        {service.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <p className="text-foreground mb-3 md:mb-4 text-xs md:text-sm">
                      {service.solution}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 md:space-y-2 mb-5 md:mb-6" aria-label="Recursos inclusos">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-foreground group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button variant="outline" size="sm" className="group/btn w-full text-xs md:text-sm focus-ring hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                      <a href="#contact">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
