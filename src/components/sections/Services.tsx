import React, { useState } from 'react';
import { Code, Server, Shield, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

type CategoryKey = 'development' | 'infrastructure' | 'security';

export function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('development');

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
    <section id="services" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(([key, category]) => {
            const Icon = categoryIcons[key];
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300',
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        {categories.map(([key, category]) => (
          <div
            key={key}
            className={cn(
              'transition-all duration-500',
              activeCategory === key ? 'block animate-fade-in' : 'hidden'
            )}
          >
            <p className="text-center text-muted-foreground mb-8">{category.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-6 shadow-card border border-border card-hover overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryColors[key]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    {/* Problem */}
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground italic">
                        {service.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <p className="text-foreground mb-4 text-sm">
                      {service.solution}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button variant="outline" size="sm" className="group/btn w-full" asChild>
                      <a href="#contact">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
