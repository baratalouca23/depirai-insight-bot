import React from 'react';
import { 
  HelpCircle, 
  TrendingDown, 
  Building2, 
  Clock, 
  Headphones, 
  Shield, 
  Calendar,
  Sparkles,
  MessageCircleQuestion
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqIcons = [TrendingDown, Building2, Clock, Headphones, Shield, Calendar];

const faqData = {
  pt: {
    title: 'Perguntas Frequentes',
    subtitle: 'Tire suas dúvidas sobre nossos serviços',
    items: [
      {
        question: 'Como funciona a redução de TCO de até 40%?',
        answer: 'Analisamos toda sua infraestrutura atual, identificamos gargalos e desperdícios, e implementamos soluções Linux HA que eliminam licenciamentos caros, reduzem downtime e otimizam recursos. O resultado é uma economia média de 40% no custo total de propriedade.'
      },
      {
        question: 'Vocês atendem empresas de qual porte?',
        answer: 'Atendemos desde pequenas empresas com 10 funcionários até grandes corporações com milhares de colaboradores. Nossas soluções são escaláveis e personalizadas para cada realidade de negócio.'
      },
      {
        question: 'Qual o prazo médio de implementação?',
        answer: 'Depende do escopo do projeto. Projetos de infraestrutura Linux HA levam de 2 a 8 semanas. Dashboards Power BI podem ser entregues em 1 a 4 semanas. Sites e landing pages entre 1 a 3 semanas.'
      },
      {
        question: 'Oferecem suporte após a implementação?',
        answer: 'Sim! Oferecemos planos de suporte com SLA definido, monitoramento 24/7 e atendimento remoto e presencial. Nosso time está sempre disponível para garantir a continuidade da sua operação.'
      },
      {
        question: 'Como garantem a segurança dos dados?',
        answer: 'Implementamos hardening CIS, firewalls, backups criptografados e políticas de segurança alinhadas com LGPD. Realizamos auditorias periódicas e mantemos documentação completa de compliance.'
      },
      {
        question: 'Posso agendar uma consultoria gratuita?',
        answer: 'Claro! Oferecemos uma consultoria inicial gratuita onde analisamos suas necessidades e apresentamos um diagnóstico preliminar. Entre em contato pelo formulário ou WhatsApp para agendar.'
      },
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Clear your doubts about our services',
    items: [
      {
        question: 'How does the up to 40% TCO reduction work?',
        answer: 'We analyze your entire current infrastructure, identify bottlenecks and waste, and implement Linux HA solutions that eliminate expensive licensing, reduce downtime and optimize resources. The result is an average 40% savings in total cost of ownership.'
      },
      {
        question: 'What size companies do you serve?',
        answer: 'We serve from small companies with 10 employees to large corporations with thousands of employees. Our solutions are scalable and customized for each business reality.'
      },
      {
        question: 'What is the average implementation time?',
        answer: 'It depends on the project scope. Linux HA infrastructure projects take 2 to 8 weeks. Power BI dashboards can be delivered in 1 to 4 weeks. Websites and landing pages between 1 to 3 weeks.'
      },
      {
        question: 'Do you offer support after implementation?',
        answer: 'Yes! We offer support plans with defined SLA, 24/7 monitoring and remote and on-site service. Our team is always available to ensure the continuity of your operation.'
      },
      {
        question: 'How do you ensure data security?',
        answer: 'We implement CIS hardening, firewalls, encrypted backups and security policies aligned with LGPD. We perform periodic audits and maintain complete compliance documentation.'
      },
      {
        question: 'Can I schedule a free consultation?',
        answer: 'Of course! We offer a free initial consultation where we analyze your needs and present a preliminary diagnosis. Contact us through the form or WhatsApp to schedule.'
      },
    ]
  },
  es: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Aclara tus dudas sobre nuestros servicios',
    items: [
      {
        question: '¿Cómo funciona la reducción de TCO de hasta el 40%?',
        answer: 'Analizamos toda su infraestructura actual, identificamos cuellos de botella y desperdicios, e implementamos soluciones Linux HA que eliminan licencias costosas, reducen el downtime y optimizan recursos. El resultado es un ahorro promedio del 40% en el costo total de propiedad.'
      },
      {
        question: '¿Qué tamaño de empresas atienden?',
        answer: 'Atendemos desde pequeñas empresas con 10 empleados hasta grandes corporaciones con miles de colaboradores. Nuestras soluciones son escalables y personalizadas para cada realidad de negocio.'
      },
      {
        question: '¿Cuál es el tiempo promedio de implementación?',
        answer: 'Depende del alcance del proyecto. Los proyectos de infraestructura Linux HA toman de 2 a 8 semanas. Los dashboards de Power BI se pueden entregar en 1 a 4 semanas. Sitios web y landing pages entre 1 a 3 semanas.'
      },
      {
        question: '¿Ofrecen soporte después de la implementación?',
        answer: '¡Sí! Ofrecemos planes de soporte con SLA definido, monitoreo 24/7 y atención remota y presencial. Nuestro equipo siempre está disponible para garantizar la continuidad de su operación.'
      },
      {
        question: '¿Cómo garantizan la seguridad de los datos?',
        answer: 'Implementamos hardening CIS, firewalls, backups encriptados y políticas de seguridad alineadas con LGPD. Realizamos auditorías periódicas y mantenemos documentación completa de compliance.'
      },
      {
        question: '¿Puedo agendar una consulta gratis?',
        answer: '¡Claro! Ofrecemos una consulta inicial gratuita donde analizamos sus necesidades y presentamos un diagnóstico preliminar. Contáctenos a través del formulario o WhatsApp para agendar.'
      },
    ]
  }
};

export function FAQ() {
  const { language } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.1 });

  const content = faqData[language];

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden" aria-labelledby="faq-title">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <MessageCircleQuestion className="h-4 w-4" />
            FAQ
          </span>
          <h2 id="faq-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {content.title}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">{content.subtitle}</p>
        </header>

        {/* FAQ Items with Accordion */}
        <div 
          ref={contentRef}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3 md:space-y-4">
            {content.items.map((item, index) => {
              const IconComponent = faqIcons[index] || HelpCircle;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "group bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 data-[state=open]:border-primary/50 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10"
                  )}
                  style={{ 
                    transitionDelay: contentVisible ? `${index * 80}ms` : '0ms',
                    animationDelay: `${index * 80}ms`
                  }}
                >
                  <AccordionTrigger 
                    className="w-full flex items-center gap-4 p-4 md:p-5 text-left hover:no-underline focus-ring [&[data-state=open]>div>.icon-wrapper]:bg-primary [&[data-state=open]>div>.icon-wrapper]:text-primary-foreground [&[data-state=open]>div>.icon-wrapper]:scale-110"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="icon-wrapper flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-sm md:text-base text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden">
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pl-[4.5rem] md:pl-[5.25rem]">
                      <div className="relative">
                        <Sparkles className="absolute -left-6 top-0 h-4 w-4 text-primary/40" />
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* CTA */}
        <div 
          className={cn(
            "text-center mt-10 md:mt-12 transition-all duration-700 delay-500",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            {language === 'pt' ? 'Ainda tem dúvidas?' : language === 'es' ? '¿Todavía tienes dudas?' : 'Still have questions?'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <HelpCircle className="h-4 w-4" />
            {language === 'pt' ? 'Fale Conosco' : language === 'es' ? 'Contáctenos' : 'Contact Us'}
          </a>
        </div>
      </div>

      {/* Schema.org FAQPage Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": content.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })
      }} />
    </section>
  );
}
