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
    <section id="about" className="section-padding bg-muted/30" aria-labelledby="about-title">
      <div className="section-container">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2 id="about-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.about.title}
          </h2>
          <p className="text-primary font-medium mb-2">{t.about.subtitle}</p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{t.about.description}</p>
        </header>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member) => {
            const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
            const IconComponent = member.icon;
            return (
              <article key={member.id} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-200">
                {/* Avatar */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <LazyImage
                    src={member.image}
                    alt={`Foto de ${memberInfo.name}`}
                    containerClassName="w-full h-full rounded-full overflow-hidden"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <IconComponent className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {memberInfo.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">{memberInfo.role}</p>
                  
                  <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{member.experience}</span>
                    <span>·</span>
                    <span>{member.focus}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{memberInfo.bio}</p>
                </div>

                {/* Certifications */}
                <ul className="flex flex-wrap justify-center gap-1.5 mb-4" aria-label="Certificações">
                  {member.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1"
                    >
                      <Award className="h-3 w-3" aria-hidden="true" />
                      {cert}
                    </li>
                  ))}
                </ul>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conectar com ${memberInfo.name} no LinkedIn`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>Conectar no LinkedIn</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
