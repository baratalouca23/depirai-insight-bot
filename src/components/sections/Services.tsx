import React, { useState } from 'react';
import { 
  Code, Server, Shield, Megaphone, CheckCircle, ArrowRight,
  Globe, MousePointerClick, Settings, Target, Users, Search,
  Cloud, Network, Headphones, Lock, Camera, FileSearch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type CategoryKey = 'development' | 'marketing' | 'infrastructure' | 'security';

export function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('development');
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.1 });

  const categoryIcons = {
    development: Code,
    marketing: Megaphone,
    infrastructure: Server,
    security: Shield,
  };

  // Ícones específicos para cada serviço por categoria
  const serviceIcons = {
    development: [Globe, MousePointerClick, Settings],
    marketing: [Target, Users, Search],
    infrastructure: [Cloud, Network, Headphones],
    security: [Lock, Camera, FileSearch],
  };

  const categories = Object.entries(t.services.categories) as [CategoryKey, typeof t.services.categories.development][];

  return (
    <section id="services" className="section-padding bg-muted/30" aria-labelledby="services-title">
      <div className="section-container">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-10 md:mb-12 transition-all duration-500",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-primary text-sm font-medium mb-3">Soluções</p>
          <h2 id="services-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground">{t.services.subtitle}</p>
        </header>

        {/* Category Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Categorias de serviços">
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
                  'flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 text-sm focus-ring',
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
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
                'transition-opacity duration-300',
                activeCategory === key ? 'block' : 'hidden'
              )}
            >
              <p className="text-center text-muted-foreground mb-8">{category.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((service, index) => {
                  const ServiceIcon = serviceIcons[key][index] || categoryIcons[key];
                  return (
                    <article
                      key={index}
                      className={cn(
                        "bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-sm",
                        contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ 
                        transitionDelay: contentVisible ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      {/* Service specific icon */}
                      <div className="mb-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ServiceIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>

                      {/* Problem */}
                      <p className="text-sm text-muted-foreground italic mb-3">
                        {service.problem}
                      </p>

                      {/* Solution */}
                      <p className="text-foreground text-sm mb-4">
                        {service.solution}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-5" aria-label="Recursos inclusos">
                        {service.features.map((feature, i) => (
                          <li 
                            key={i} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-sm" 
                        asChild
                      >
                        <a href="#contact">
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
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
