import React, { useState, useCallback } from 'react';
import { ExternalLink, Star, ZoomIn, TrendingUp, Users, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioCases, PortfolioCase } from '@/data/portfolio';
import { LazyImage } from '@/components/ui/LazyImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { Lightbox } from '@/components/ui/Lightbox';

type FilterType = 'all' | 'infra' | 'data';

// Consistent icon mapping for KPIs
const kpiIcons: Record<string, React.ReactNode> = {
  'Performance': <Zap className="h-3 w-3" />,
  'Eficiência': <TrendingUp className="h-3 w-3" />,
  'Usuários': <Users className="h-3 w-3" />,
  'Conversão': <TrendingUp className="h-3 w-3" />,
  'NPS': <Award className="h-3 w-3" />,
  'ROI': <TrendingUp className="h-3 w-3" />,
  'Leads': <Users className="h-3 w-3" />,
  'TPS': <Zap className="h-3 w-3" />,
  'Compliance': <Award className="h-3 w-3" />,
  'Uptime': <Zap className="h-3 w-3" />,
};

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
    <section id="portfolio" className="section-padding bg-muted/30" aria-labelledby="portfolio-title">
      <div className="section-container">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-12 transition-all duration-500",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/30 text-primary bg-primary/5">
            Portfólio
          </Badge>
          <h2 id="portfolio-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-muted-foreground text-lg">{t.portfolio.subtitle}</p>
        </header>

        {/* Filters */}
        <nav className="flex flex-wrap justify-center gap-2 mb-12" aria-label="Filtrar projetos">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full text-sm px-6 transition-all duration-300",
                filter === f.key 
                  ? "shadow-lg shadow-primary/25" 
                  : "hover:border-primary/50 hover:bg-primary/5"
              )}
              aria-pressed={filter === f.key}
            >
              {f.label}
            </Button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCases.map((item: PortfolioCase, index) => (
            <article
              key={item.id}
              className={cn(
                "group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 relative flex flex-col h-full",
                item.premium && 'ring-1 ring-primary/30',
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: gridVisible ? `${index * 80}ms` : '0ms' }}
            >
              {/* Premium Badge */}
              {item.premium && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground gap-1.5 text-xs px-3 py-1.5 shadow-lg shadow-primary/30 font-semibold">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Premium
                  </Badge>
                </div>
              )}

              {/* Image */}
              <button 
                className="relative aspect-[16/10] overflow-hidden w-full cursor-zoom-in group/img flex-shrink-0"
                onClick={() => openLightbox(index)}
                aria-label={`Ver imagem do projeto ${item.title}`}
              >
                <LazyImage
                  src={item.image}
                  alt={`Projeto ${item.title} - ${item.company}`}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform scale-75 group-hover/img:scale-100 shadow-xl">
                    <ZoomIn className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </button>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge 
                    variant="secondary" 
                    className="text-xs px-3 py-1 font-medium bg-muted border border-border/50 text-foreground/80"
                  >
                    {item.category === 'infra' ? t.portfolio.filters.infra : t.portfolio.filters.data}
                  </Badge>
                </div>

                {/* Title & Company */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">{item.company}</p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed flex-grow">
                  {item.description[language]}
                </p>

                {/* KPIs - Standardized Grid */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {item.kpis.slice(0, 3).map((kpi, i) => (
                    <div
                      key={i}
                      className="px-3 py-2.5 rounded-xl bg-muted/50 border border-border/50 text-center group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-muted-foreground">
                          {kpiIcons[kpi.label] || <TrendingUp className="h-3 w-3" />}
                        </span>
                      </div>
                      <p className="text-primary font-bold text-sm">{kpi.value}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{kpi.label}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground px-2.5 py-1 rounded-full border border-border/50 bg-background/80 group-hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-xs text-primary font-medium px-2.5 py-1">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full rounded-xl group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium" 
                    asChild
                  >
                    <a 
                      href={item.url || '#contact'} 
                      target={item.url ? '_blank' : undefined}
                      rel={item.url ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center gap-2"
                    >
                      {item.url ? 'Ver Projeto' : t.portfolio.viewCase}
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
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
