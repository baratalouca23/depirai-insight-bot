import React, { useState } from 'react';
import { ExternalLink, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioCases, PortfolioCase } from '@/data/portfolio';
import { LazyImage } from '@/components/ui/LazyImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { ParallaxBackground } from '@/components/features/ParallaxElements';

type FilterType = 'all' | 'infra' | 'data';

export function Portfolio() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'infra', label: t.portfolio.filters.infra },
    { key: 'data', label: t.portfolio.filters.data },
  ];

  const filteredCases = filter === 'all'
    ? portfolioCases
    : portfolioCases.filter((c) => c.category === filter);

  const sortedCases = [...filteredCases].sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" aria-labelledby="portfolio-title">
      <ParallaxBackground variant="gradient" />
      
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
            <Briefcase className="h-4 w-4" />
            Portfólio
          </span>
          <h2 id="portfolio-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">{t.portfolio.subtitle}</p>
        </header>

        {/* Filters */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12" aria-label="Filtrar projetos">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.key)}
              className="rounded-full text-xs md:text-sm focus-ring"
              aria-pressed={filter === f.key}
            >
              {f.label}
            </Button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {sortedCases.map((item: PortfolioCase, index) => (
            <article
              key={item.id}
              className={cn(
                `group relative bg-card rounded-2xl overflow-hidden shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.08)] border border-border/50 transition-all duration-500 hover:shadow-[0_8px_24px_-8px_hsl(var(--foreground)/0.12)] hover:-translate-y-1`,
                item.premium ? 'ring-2 ring-primary/50' : '',
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Premium Badge */}
              {item.premium && (
                <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                  <Badge className="bg-primary text-primary-foreground gap-1 text-xs">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Premium
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={`Projeto ${item.title} - ${item.company}`}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category === 'infra' ? t.portfolio.filters.infra : t.portfolio.filters.data}
                  </Badge>
                </div>

                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">{item.company}</p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                  {item.description[language]}
                </p>

                {/* KPIs */}
                <ul className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4" aria-label="Indicadores de resultado">
                  {item.kpis.map((kpi, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 rounded bg-muted text-xs font-medium"
                    >
                      <span className="text-muted-foreground">{kpi.label}:</span>{' '}
                      <span className="text-primary">{kpi.value}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-1 mb-3 md:mb-4" aria-label="Tecnologias utilizadas">
                  {item.technologies.slice(0, 3).map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border"
                    >
                      {tech}
                    </li>
                  ))}
                  {item.technologies.length > 3 && (
                    <li className="text-xs text-muted-foreground px-2 py-0.5">
                      +{item.technologies.length - 3}
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="w-full group/btn focus-ring text-xs md:text-sm" asChild>
                  <a href="#contact">
                    {t.portfolio.viewCase}
                    <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
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
