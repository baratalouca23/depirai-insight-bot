import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/ui/LazyImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'CTO',
    company: 'TechLogística',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: {
      pt: 'A Depirai reduziu nosso TCO em 42% em apenas 6 meses. A migração para Linux HA foi impecável e o suporte é excepcional.',
      en: 'Depirai reduced our TCO by 42% in just 6 months. The Linux HA migration was flawless and support is exceptional.',
      es: 'Depirai redujo nuestro TCO en un 42% en solo 6 meses. La migración a Linux HA fue impecable y el soporte es excepcional.',
    },
  },
  {
    id: 2,
    name: 'Ana Rodrigues',
    role: 'Diretora Financeira',
    company: 'Indústria Paraná',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: {
      pt: 'Os dashboards Power BI transformaram nossa tomada de decisão. Agora temos visibilidade total do ROI em tempo real.',
      en: 'Power BI dashboards transformed our decision making. Now we have full ROI visibility in real time.',
      es: 'Los dashboards de Power BI transformaron nuestra toma de decisiones. Ahora tenemos visibilidad total del ROI en tiempo real.',
    },
  },
  {
    id: 3,
    name: 'Roberto Mendes',
    role: 'Gerente de TI',
    company: 'Grupo Comercial Sul',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    quote: {
      pt: 'Passamos de 95% para 99.9% de uptime após a implementação. A equipe técnica é altamente qualificada e proativa.',
      en: 'We went from 95% to 99.9% uptime after implementation. The technical team is highly qualified and proactive.',
      es: 'Pasamos del 95% al 99.9% de uptime después de la implementación. El equipo técnico es altamente calificado y proactivo.',
    },
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: carouselRef, isVisible: carouselVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection('right');
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setDirection('right');
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection('left');
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const titles = {
    pt: { title: 'O que nossos clientes dizem', subtitle: 'Resultados reais de empresas que confiam em nós' },
    en: { title: 'What our clients say', subtitle: 'Real results from companies that trust us' },
    es: { title: 'Lo que dicen nuestros clientes', subtitle: 'Resultados reales de empresas que confían en nosotros' },
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/20 relative overflow-hidden" aria-labelledby="testimonials-title">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        {/* Floating quotes */}
        <Quote className="absolute top-20 left-[10%] h-12 w-12 text-primary/5 rotate-12" />
        <Quote className="absolute bottom-20 right-[15%] h-16 w-16 text-primary/5 -rotate-12" />
        <Sparkles className="absolute top-1/3 right-[5%] h-8 w-8 text-primary/10 animate-pulse" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-10 md:mb-16 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4" />
            Depoimentos
          </span>
          <h2 id="testimonials-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {titles[language].title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">{titles[language].subtitle}</p>
        </header>

        {/* Testimonial Carousel with 3D effect */}
        <div 
          ref={carouselRef}
          className={cn(
            "relative max-w-5xl mx-auto transition-all duration-700",
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ perspective: '1500px' }}
        >
          <div className="relative h-[400px] md:h-[350px]">
            {testimonials.map((testimonial, index) => {
              const offset = index - current;
              const isActive = index === current;
              const isPrev = offset === -1 || (current === 0 && index === testimonials.length - 1);
              const isNext = offset === 1 || (current === testimonials.length - 1 && index === 0);
              
              return (
                <article
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-out",
                    !isActive && !isPrev && !isNext && "opacity-0 pointer-events-none"
                  )}
                  style={{
                    transform: isActive 
                      ? 'translateX(0) scale(1) rotateY(0deg)' 
                      : isPrev 
                        ? 'translateX(-60%) scale(0.85) rotateY(15deg)' 
                        : isNext 
                          ? 'translateX(60%) scale(0.85) rotateY(-15deg)'
                          : 'translateX(0) scale(0.7)',
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                    zIndex: isActive ? 10 : 5,
                    filter: isActive ? 'none' : 'blur(1px)',
                  }}
                >
                  <div className={cn(
                    "h-full bg-card rounded-3xl p-6 md:p-10 shadow-2xl border border-border text-center transition-all duration-500",
                    isActive && "shadow-primary/10 border-primary/20"
                  )}>
                    {/* Decorative gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Quote Icon */}
                    <div className="relative inline-flex items-center justify-center mb-4 md:mb-6">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-150" />
                      <Quote className="relative h-8 w-8 md:h-10 md:w-10 text-primary" aria-hidden="true" />
                    </div>
                    
                    {/* Quote Text */}
                    <blockquote className="text-base md:text-xl text-foreground mb-6 md:mb-8 leading-relaxed font-medium">
                      "{testimonial.quote[language]}"
                    </blockquote>
                    
                    {/* Rating with animation */}
                    <div className="flex justify-center gap-1.5 mb-5" aria-label={`${testimonial.rating} de 5 estrelas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary transition-transform hover:scale-125" 
                          style={{ animationDelay: `${i * 100}ms` }}
                          aria-hidden="true" 
                        />
                      ))}
                    </div>
                    
                    {/* Author with enhanced styling */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-sm opacity-50" />
                        <LazyImage
                          src={testimonial.avatar}
                          alt={`Foto de ${testimonial.name}`}
                          containerClassName="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-background"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <cite className="font-display font-bold text-foreground not-italic text-base md:text-lg block">
                          {testimonial.name}
                        </cite>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation with enhanced styling */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-11 w-11 md:h-12 md:w-12 rounded-full focus-ring border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Enhanced dots */}
            <div className="flex gap-3" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={current === index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > current ? 'right' : 'left');
                    setCurrent(index);
                  }}
                  className={cn(
                    "relative h-3 rounded-full transition-all duration-500 focus-ring",
                    current === index 
                      ? 'w-8 bg-primary' 
                      : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                >
                  {current === index && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-11 w-11 md:h-12 md:w-12 rounded-full focus-ring border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span className={cn(
                "w-2 h-2 rounded-full transition-colors",
                isAutoPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground"
              )} />
              {isAutoPlaying ? 'Auto-play ativo' : 'Auto-play pausado'}
            </button>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Depirai",
          "review": testimonials.map(t => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": t.rating,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": t.name
            },
            "reviewBody": t.quote.pt
          }))
        })
      }} />
    </section>
  );
}
