import React from 'react';
import { Linkedin, Award, Server, BarChart3, Users, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import diegoPhoto from '@/assets/diego.jpeg';
import emersonPhoto from '@/assets/emerson.jpeg';
import { AnimatedSection } from '@/components/features/AnimatedSection';
import { LazyImage } from '@/components/ui/LazyImage';
import { ParallaxBackground } from '@/components/features/ParallaxElements';
import { cn } from '@/lib/utils';

export function About() {
  const { t } = useLanguage();

  const team = [
    {
      id: 'diego',
      image: diegoPhoto,
      linkedin: 'https://www.linkedin.com/in/diegocmoreira/',
      certifications: ['Linux HA', 'Hardening', 'DevOps'],
      experience: '16 anos',
      icon: Server,
      focus: 'TCO & Infraestrutura',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'emerson',
      image: emersonPhoto,
      linkedin: 'https://www.linkedin.com/in/emerson-rs-vieira/',
      certifications: ['Power BI', 'LGPD', 'Excel Avançado'],
      experience: '15+ anos',
      icon: BarChart3,
      focus: 'BI & Governança',
      color: 'from-primary to-orange-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden" aria-labelledby="about-title">
      <ParallaxBackground variant="mesh" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <Sparkles className="absolute top-1/4 left-[15%] h-6 w-6 text-primary/20 animate-pulse" />
        <Sparkles className="absolute bottom-1/3 right-[20%] h-8 w-8 text-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <header className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Quem Somos
            </span>
            <h2 id="about-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              {t.about.title}
            </h2>
            <p className="text-base md:text-lg text-primary font-semibold mb-2">{t.about.subtitle}</p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{t.about.description}</p>
          </header>
        </AnimatedSection>

        {/* Team Cards with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => {
            const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
            const IconComponent = member.icon;
            return (
              <AnimatedSection
                key={member.id}
                animation={index === 0 ? 'fade-left' : 'fade-right'}
                delay={index * 150}
              >
                <article className="group relative">
                  {/* Gradient border effect */}
                  <div className={cn(
                    "absolute -inset-0.5 rounded-3xl bg-gradient-to-r opacity-0 blur transition-all duration-500 group-hover:opacity-75",
                    member.color
                  )} />
                  
                  <div className="relative bg-card rounded-3xl p-6 md:p-8 border border-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </div>

                    {/* Avatar with animated ring */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6">
                      {/* Animated ring */}
                      <div className={cn(
                        "absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow",
                        member.color
                      )} style={{ animationDuration: '8s' }} />
                      <div className="absolute inset-1 rounded-full bg-card" />
                      
                      <LazyImage
                        src={member.image}
                        alt={`Foto de ${memberInfo.name}`}
                        containerClassName="absolute inset-2 rounded-full overflow-hidden"
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Icon badge */}
                      <div className={cn(
                        "absolute -bottom-1 -right-1 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-br",
                        member.color
                      )}>
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center relative z-10">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {memberInfo.name}
                      </h3>
                      <p className="text-primary font-semibold text-sm md:text-base mb-2">{memberInfo.role}</p>
                      
                      {/* Experience badge */}
                      <div className="inline-flex items-center gap-2 text-xs bg-muted px-4 py-1.5 rounded-full mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                        <span className="font-semibold text-foreground">{member.experience}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-muted-foreground">{member.focus}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{memberInfo.bio}</p>
                    </div>

                    {/* Certifications with hover effects */}
                    <ul className="flex flex-wrap justify-center gap-2 mb-6" aria-label="Certificações">
                      {member.certifications.map((cert, i) => (
                        <li
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium flex items-center gap-1.5 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default group-hover:translate-y-0"
                          style={{ 
                            transitionDelay: `${i * 75}ms`,
                            transform: 'translateY(0)'
                          }}
                        >
                          <Award className="h-3 w-3" aria-hidden="true" />
                          {cert}
                        </li>
                      ))}
                    </ul>

                    {/* LinkedIn Button with enhanced design */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Conectar com ${memberInfo.name} no LinkedIn`}
                      className={cn(
                        "relative flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group/btn",
                        "bg-gradient-to-r text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]",
                        member.color
                      )}
                    >
                      <Linkedin className="h-5 w-5 group-hover/btn:scale-110 transition-transform" aria-hidden="true" />
                      <span>Conectar no LinkedIn</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
