import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Truck, Factory, Database, ShieldCheck, Cloud } from 'lucide-react';

const clients = [
  { name: 'TechCorp', industry: 'Tecnologia', icon: Building2 },
  { name: 'LogiSul', industry: 'Logística', icon: Truck },
  { name: 'IndústriaMax', industry: 'Indústria', icon: Factory },
  { name: 'DataFlow', industry: 'Dados', icon: Database },
  { name: 'SecureNet', industry: 'Segurança', icon: ShieldCheck },
  { name: 'CloudPro', industry: 'Cloud', icon: Cloud },
];

export function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30 border-y border-border/50">
      <div className="section-container">
        <div className="text-center mb-8">
          <p className="text-xs text-primary font-medium uppercase tracking-widest mb-2">
            Parceiros
          </p>
          <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
            {t.clients?.title || 'Empresas que confiam em nós'}
          </h3>
        </div>
        
        {/* Logo Grid with animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {client.industry}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
