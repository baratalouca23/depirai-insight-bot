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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCases.map((item: PortfolioCase, index) => (
            <article
              key={item.id}
              className={cn(
                "group bg-card/80 dark:bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-400 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative",
                item.premium && 'ring-2 ring-primary/40 shadow-lg shadow-primary/10',
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: gridVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Premium Badge with glow */}
              {item.premium && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground gap-1.5 text-xs px-3 py-1 shadow-lg shadow-primary/30 animate-pulse-glow">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Premium
                  </Badge>
                </div>
              )}

              {/* Image with enhanced hover */}
              <button 
                className="relative h-48 overflow-hidden w-full cursor-zoom-in group/img"
                onClick={() => openLightbox(index)}
                aria-label={`Ver imagem do projeto ${item.title}`}
              >
                <LazyImage
                  src={item.image}
                  alt={`Projeto ${item.title} - ${item.company}`}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform scale-50 group-hover/img:scale-100 shadow-lg">
                    <ZoomIn className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </button>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs px-2.5 py-0.5 bg-primary/10 text-primary border-0">
                    {item.category === 'infra' ? t.portfolio.filters.infra : t.portfolio.filters.data}
                  </Badge>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-3">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                  {item.description[language]}
                </p>

                {/* KPIs with enhanced styling */}
                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Indicadores">
                  {item.kpis.map((kpi, i) => (
                    <li
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-muted/50 text-xs border border-border/50 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      <span className="text-muted-foreground">{kpi.label}:</span>{' '}
                      <span className="text-primary font-semibold">{kpi.value}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies with neon effect */}
                <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Tecnologias">
                  {item.technologies.slice(0, 3).map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground px-2.5 py-1 rounded-full border border-border/50 bg-background/50 group-hover:border-primary/30 group-hover:text-foreground/80 transition-all duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                  {item.technologies.length > 3 && (
                    <li className="text-xs text-primary/70 px-2.5 py-1 font-medium">
                      +{item.technologies.length - 3}
                    </li>
                  )}
                </ul>

                {/* CTA with enhanced styling */}
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300" asChild>
                  <a 
                    href={item.url || '#contact'} 
                    target={item.url ? '_blank' : undefined}
                    rel={item.url ? 'noopener noreferrer' : undefined}
                    className="group/btn"
                  >
                    {item.url ? 'Ver Projeto' : t.portfolio.viewCase}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
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
