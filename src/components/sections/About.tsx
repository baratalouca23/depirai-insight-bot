import React from 'react';
import { Linkedin, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const team = [
    {
      id: 'diego',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      certifications: ['Red Hat RHCE', 'AWS Solutions Architect', 'CKA'],
    },
    {
      id: 'emerson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      certifications: ['Microsoft PL-300', 'Azure Data Engineer', 'Databricks'],
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{t.about.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.description}</p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member) => {
              const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
              return (
                <div
                  key={member.id}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border card-hover text-center"
                >
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={memberInfo.name}
                      className="w-full h-full rounded-full object-cover ring-4 ring-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {memberInfo.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">{memberInfo.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{memberInfo.bio}</p>

                  {/* Certifications */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {member.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
