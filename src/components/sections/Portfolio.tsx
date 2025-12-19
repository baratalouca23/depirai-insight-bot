import React, { useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioCases, PortfolioCase } from '@/data/portfolio';

type FilterType = 'all' | 'infra' | 'data';

export function Portfolio() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'infra', label: t.portfolio.filters.infra },
    { key: 'data', label: t.portfolio.filters.data },
  ];

  const filteredCases = filter === 'all'
    ? portfolioCases
    : portfolioCases.filter((c) => c.category === filter);

  // Sort premium cases first
  const sortedCases = [...filteredCases].sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));

  return (
    <section id="portfolio" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.portfolio.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.key)}
              className="rounded-full"
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCases.map((item: PortfolioCase) => (
            <article
              key={item.id}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.08)] border border-border/50 transition-all duration-300 hover:shadow-[0_8px_24px_-8px_hsl(var(--foreground)/0.12)] hover:-translate-y-1 ${
                item.premium ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {/* Premium Badge */}
              {item.premium && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-primary text-primary-foreground gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Premium
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category === 'infra' ? t.portfolio.filters.infra : t.portfolio.filters.data}
                  </Badge>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description[language]}
                </p>

                {/* KPIs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.kpis.map((kpi, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 rounded bg-muted text-xs font-medium"
                    >
                      <span className="text-muted-foreground">{kpi.label}:</span>{' '}
                      <span className="text-primary">{kpi.value}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-0.5">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="w-full group/btn" asChild>
                  <a href="#contact">
                    {t.portfolio.viewCase}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
