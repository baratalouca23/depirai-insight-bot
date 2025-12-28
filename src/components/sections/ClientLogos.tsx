import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Briefcase, Award, Users, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Projetos Entregues', icon: Briefcase },
  { value: '31+', label: 'Anos de Experiência', icon: Award },
  { value: '100%', label: 'Clientes Satisfeitos', icon: Users },
];

export function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30 border-y border-border/50">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-xs text-primary font-medium uppercase tracking-widest mb-2">
            Resultados
          </p>
          <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
            Números que comprovam nossa entrega
          </h3>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
