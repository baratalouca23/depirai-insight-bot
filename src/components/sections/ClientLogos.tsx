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
    <section className="py-10 md:py-12 bg-muted/20 border-y border-border">
      <div className="section-container">
        <p className="text-center text-xs text-muted-foreground mb-6 uppercase tracking-wide">
          {t.clients?.title || 'Empresas que confiam em nós'}
        </p>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors duration-200"
            >
              <div className="text-center">
                <span className="font-medium text-sm text-foreground/80">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
