import React, { useState, useCallback } from 'react';
import { ExternalLink, Star, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioCases, PortfolioCase } from '@/data/portfolio';
import { LazyImage } from '@/components/ui/LazyImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { Lightbox } from '@/components/ui/Lightbox';

type FilterType = 'all' | 'infra' | 'data';

export function Portfolio() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'infra', label: t.portfolio.filters.infra },
    { key: 'data', label: t.portfolio.filters.data },
  ];

  const filteredCases = filter === 'all'
    ? portfolioCases
    : portfolioCases.filter((c) => c.category === filter);

  const sortedCases = [...filteredCases].sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));

  const lightboxImages = sortedCases.map(item => ({
    src: item.image,
    alt: `Projeto ${item.title} - ${item.company}`,
    title: `${item.title} - ${item.company}`
  }));

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  }, [lightboxImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages.length]);

  return (
    <section id="portfolio" className="section-padding" aria-labelledby="portfolio-title">
      <div className="section-container">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-10 transition-all duration-500",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-primary text-sm font-medium mb-3">Portfólio</p>
          <h2 id="portfolio-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.portfolio.title}
          </h2>
          <p className="text-muted-foreground">{t.portfolio.subtitle}</p>
        </header>

        {/* Filters */}
        <nav className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Filtrar projetos">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.key)}
              className="rounded-full text-sm"
              aria-pressed={filter === f.key}
            >
              {f.label}
            </Button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedCases.map((item: PortfolioCase, index) => (
            <article
              key={item.id}
              className={cn(
                "group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-sm",
                item.premium && 'ring-1 ring-primary/30',
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: gridVisible ? `${index * 50}ms` : '0ms' }}
            >
              {/* Premium Badge */}
              {item.premium && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-primary text-primary-foreground gap-1 text-xs">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Premium
                  </Badge>
                </div>
              )}

              {/* Image */}
              <button 
                className="relative h-44 overflow-hidden w-full cursor-zoom-in"
                onClick={() => openLightbox(index)}
                aria-label={`Ver imagem do projeto ${item.title}`}
              >
                <LazyImage
                  src={item.image}
                  alt={`Projeto ${item.title} - ${item.company}`}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-200 flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </button>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category === 'infra' ? t.portfolio.filters.infra : t.portfolio.filters.data}
                  </Badge>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description[language]}
                </p>

                {/* KPIs */}
                <ul className="flex flex-wrap gap-1.5 mb-4" aria-label="Indicadores">
                  {item.kpis.map((kpi, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 rounded bg-muted text-xs"
                    >
                      <span className="text-muted-foreground">{kpi.label}:</span>{' '}
                      <span className="text-primary font-medium">{kpi.value}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-1 mb-4" aria-label="Tecnologias">
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
                <Button variant="ghost" size="sm" className="w-full text-sm" asChild>
                  <a 
                    href={item.url || '#contact'} 
                    target={item.url ? '_blank' : undefined}
                    rel={item.url ? 'noopener noreferrer' : undefined}
                  >
                    {item.url ? 'Ver Projeto' : t.portfolio.viewCase}
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <Lightbox
          images={lightboxImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>
    </section>
  );
}
