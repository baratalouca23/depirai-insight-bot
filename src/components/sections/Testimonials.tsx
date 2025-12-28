import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: carouselRef, isVisible: carouselVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const titles = {
    pt: { title: 'O que nossos clientes dizem', subtitle: 'Resultados reais de empresas que confiam em nós' },
    en: { title: 'What our clients say', subtitle: 'Real results from companies that trust us' },
    es: { title: 'Lo que dicen nuestros clientes', subtitle: 'Resultados reales de empresas que confían en nosotros' },
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/20" aria-labelledby="testimonials-title">
      <div className="section-container">
        {/* Header */}
        <header 
          ref={headerRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-10 transition-all duration-500",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-primary text-sm font-medium mb-3">Depoimentos</p>
          <h2 id="testimonials-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {titles[language].title}
          </h2>
          <p className="text-muted-foreground">{titles[language].subtitle}</p>
        </header>

        {/* Testimonial Carousel */}
        <div 
          ref={carouselRef}
          className={cn(
            "relative max-w-3xl mx-auto transition-all duration-500",
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-xl p-8 border border-border text-center">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" aria-hidden="true" />
                    
                    {/* Quote Text */}
                    <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                      "{testimonial.quote[language]}"
                    </blockquote>
                    
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-5" aria-label={`${testimonial.rating} de 5 estrelas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-primary text-primary" 
                          aria-hidden="true" 
                        />
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      <LazyImage
                        src={testimonial.avatar}
                        alt={`Foto de ${testimonial.name}`}
                        containerClassName="w-12 h-12 rounded-full overflow-hidden"
                        className="w-full h-full object-cover"
                      />
                      <div className="text-left">
                        <cite className="font-semibold text-foreground not-italic block">
                          {testimonial.name}
                        </cite>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={current === index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    current === index 
                      ? 'w-6 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
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
