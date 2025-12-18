import React from 'react';
import { Linkedin, Award, Server, BarChart3, Shield, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import diegoPhoto from '@/assets/diego.jpeg';
import emersonPhoto from '@/assets/emerson.jpeg';

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

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-primary font-semibold mb-2">{t.about.subtitle}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.about.description}</p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => {
            const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
            const IconComponent = member.icon;
            return (
              <div
                key={member.id}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Avatar with Icon Badge */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={memberInfo.name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {memberInfo.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{memberInfo.role}</p>
                  <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                    {member.experience} experiência • {member.focus}
                  </span>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{memberInfo.bio}</p>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {member.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium flex items-center gap-1"
                    >
                      <Award className="h-3 w-3" />
                      {cert}
                    </span>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${memberInfo.name}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                >
                  <Linkedin className="h-5 w-5" />
                  Conectar no LinkedIn
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
