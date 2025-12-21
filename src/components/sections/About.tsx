import React, { useState } from 'react';
import { Linkedin, Award, Server, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import diegoPhoto from '@/assets/diego.jpeg';
import emersonPhoto from '@/assets/emerson.jpeg';

export function About() {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const team = [
    {
      id: 'diego',
      image: diegoPhoto,
      linkedin: 'https://www.linkedin.com/in/diegocmoreira/',
      certifications: ['Linux HA', 'Hardening', 'DevOps'],
      experience: '16 anos',
      icon: Server,
      focus: 'TCO & Infraestrutura',
    },
    {
      id: 'emerson',
      image: emersonPhoto,
      linkedin: 'https://www.linkedin.com/in/emerson-rs-vieira/',
      certifications: ['Power BI', 'LGPD', 'Excel Avançado'],
      experience: '15+ anos',
      icon: BarChart3,
      focus: 'BI & Governança',
    },
  ];

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="about" className="section-padding bg-muted/30" aria-labelledby="about-title">
      <div className="section-container">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2 id="about-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t.about.title}
          </h2>
          <p className="text-base md:text-lg text-primary font-semibold mb-2">{t.about.subtitle}</p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{t.about.description}</p>
        </header>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {team.map((member) => {
            const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
            const IconComponent = member.icon;
            return (
              <article
                key={member.id}
                className="card-minimal hover-lift group"
              >
                {/* Avatar with Icon Badge */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5 md:mb-6">
                  <div className={`w-full h-full rounded-full ${!loadedImages[member.id] ? 'img-loading' : ''}`}>
                    <img
                      src={member.image}
                      alt={`Foto de ${memberInfo.name}`}
                      className={`w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all ${loadedImages[member.id] ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(member.id)}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
                    <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
                    {memberInfo.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm md:text-base mb-1">{memberInfo.role}</p>
                  <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-3 md:mb-4">
                    {member.experience} experiência • {member.focus}
                  </span>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-5 leading-relaxed">{memberInfo.bio}</p>
                </div>

                {/* Certifications */}
                <ul className="flex flex-wrap justify-center gap-2 mb-4 md:mb-5" aria-label="Certificações">
                  {member.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-muted text-muted-foreground font-medium flex items-center gap-1"
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
                  className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium text-sm md:text-base focus-ring"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  Conectar no LinkedIn
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
