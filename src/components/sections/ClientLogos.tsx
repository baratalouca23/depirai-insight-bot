import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const clients = [
  { name: 'TechCorp', industry: 'Tecnologia' },
  { name: 'LogiSul', industry: 'Logística' },
  { name: 'IndústriaMax', industry: 'Indústria' },
  { name: 'DataFlow', industry: 'Dados' },
  { name: 'SecureNet', industry: 'Segurança' },
  { name: 'CloudPro', industry: 'Cloud' },
];

export function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
      <div className="section-container">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          {t.clients?.title || 'Empresas que confiam em nós'}
        </p>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 hover:bg-background transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <span className="font-display text-lg font-bold text-foreground/70 group-hover:text-primary transition-colors">
                  {client.name}
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
