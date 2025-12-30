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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, index) => {
                  const ServiceIcon = serviceIcons[key][index] || categoryIcons[key];
                  return (
                    <article
                      key={index}
                      className={cn(
                        "group bg-card/80 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-7 border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col h-full neon-box relative overflow-hidden",
                        contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      )}
                      style={{ 
                        transitionDelay: contentVisible ? `${index * 80}ms` : '0ms'
                      }}
                    >
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                      
                      {/* Service icon with enhanced effects */}
                      <div className="relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                        <ServiceIcon className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" aria-hidden="true" />
                        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" aria-hidden="true" />
                      </div>

                      {/* Title with gradient on hover */}
                      <h3 className="relative font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Problem */}
                      <p className="relative text-sm text-muted-foreground italic mb-3 opacity-80">
                        "{service.problem}"
                      </p>

                      {/* Solution */}
                      <p className="relative text-foreground/90 text-sm mb-5 leading-relaxed">
                        {service.solution}
                      </p>

                      {/* Features with stagger animation */}
                      <ul className="relative space-y-2.5 mb-6 flex-grow" aria-label="Recursos inclusos">
                        {service.features.map((feature, i) => (
                          <li 
                            key={i} 
                            className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                              <CheckCircle className="h-3 w-3 text-primary" aria-hidden="true" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA with enhanced styling */}
                      <Button 
                        variant="outline" 
                        size="default" 
                        className="relative w-full mt-auto group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300" 
                        asChild
                      >
                        <a href="#contact" className="group/btn">
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
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
