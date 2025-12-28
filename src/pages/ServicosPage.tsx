import React from 'react';
import { Link } from 'react-router-dom';
import { Server, BarChart3, Shield, Code, Mail, Database, Cloud, Settings, Cpu } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AnimatedSection } from '@/components/features/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const servicesData = [
  {
    icon: Code,
    title: 'Desenvolvimento Fullstack',
    description: 'Aplicações web modernas com React, Vite, TypeScript e PHP para seu negócio.',
    color: 'bg-blue-500/10 text-blue-500',
    features: ['React/Vite/TypeScript', 'APIs RESTful', 'PHP Backend', 'Deploy Automatizado'],
    responsible: 'Diego & Emerson',
  },
  {
    icon: Server,
    title: 'Servidores Linux HA',
    description: 'Alta disponibilidade com clusters redundantes e failover automático.',
    color: 'bg-green-500/10 text-green-500',
    features: ['Linux HA Cluster', 'Load Balancing', 'Failover Automático', '99.9% Uptime'],
    responsible: 'Diego Moreira',
  },
  {
    icon: Mail,
    title: 'Servidores de Email',
    description: 'Email corporativo com Postfix HA, anti-spam e compliance total.',
    color: 'bg-purple-500/10 text-purple-500',
    features: ['Postfix HA', 'Anti-spam Avançado', 'DKIM/SPF/DMARC', 'Backup Automatizado'],
    responsible: 'Diego Moreira',
  },
  {
    icon: BarChart3,
    title: 'Power BI & Dashboards',
    description: 'Dashboards executivos e relatórios ROI com Power BI e ETL automatizado.',
    color: 'bg-orange-500/10 text-orange-500',
    features: ['Power BI Dashboards', 'ETL Automatizado', 'KPIs em Tempo Real', 'Relatórios ROI'],
    responsible: 'Emerson Vieira',
  },
  {
    icon: Shield,
    title: 'Segurança & Hardening',
    description: 'Proteção enterprise com hardening Linux, firewall e compliance LGPD.',
    color: 'bg-red-500/10 text-red-500',
    features: ['Fail2ban/UFW', 'Hardening Linux', 'Auditoria Segurança', 'Compliance LGPD'],
    responsible: 'Diego & Emerson',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'PostgreSQL e MySQL com replicação, backup e otimização de performance.',
    color: 'bg-cyan-500/10 text-cyan-500',
    features: ['PostgreSQL/MySQL', 'Replicação Master-Slave', 'Backup Incremental', 'Otimização Queries'],
    responsible: 'Diego Moreira',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infraestrutura na nuvem com AWS, Azure, Kubernetes e CI/CD.',
    color: 'bg-indigo-500/10 text-indigo-500',
    features: ['AWS/Azure/GCP', 'Terraform IaC', 'Kubernetes', 'CI/CD Pipelines'],
    responsible: 'Diego Moreira',
  },
  {
    icon: Settings,
    title: 'Automação TI',
    description: 'Automação de processos com Ansible, scripts e monitoramento 24/7.',
    color: 'bg-amber-500/10 text-amber-500',
    features: ['Ansible Playbooks', 'Scripts Bash/Python', 'Monitoramento Zabbix', 'Alertas 24/7'],
    responsible: 'Diego Moreira',
  },
  {
    icon: Cpu,
    title: 'Consultoria TCO',
    description: 'Análise de custos, roadmap tecnológico e governança de TI.',
    color: 'bg-pink-500/10 text-pink-500',
    features: ['Análise TCO', 'Roadmap Tecnológico', 'Governança TI', 'Treinamento Equipes'],
    responsible: 'Diego & Emerson',
  },
];

export default function ServicosPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Breadcrumbs />

          {/* Header */}
          <AnimatedSection animation="fade-up">
            <header className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {language === 'pt' ? 'Nossos Serviços' : language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'pt' 
                  ? 'Soluções completas em infraestrutura TI e Business Intelligence para transformar seu negócio'
                  : language === 'es' 
                    ? 'Soluciones completas en infraestructura TI y Business Intelligence para transformar su negocio'
                    : 'Complete IT infrastructure and Business Intelligence solutions to transform your business'}
              </p>
            </header>
          </AnimatedSection>

          {/* Services Grid */}
          <section aria-label="Lista de serviços">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                  >
                    <article className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-7 w-7" aria-hidden="true" />
                      </div>
                      
                      <h2 className="font-display text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                      
                      <ul className="space-y-2 mb-6" aria-label="Recursos do serviço">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <footer className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Responsável: <span className="text-primary font-medium">{service.responsible}</span>
                        </p>
                      </footer>
                    </article>
                  </AnimatedSection>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center mt-16" aria-labelledby="cta-title">
            <h2 id="cta-title" className="font-display text-2xl font-bold text-foreground mb-4">
              {language === 'pt' ? 'Precisa de uma solução personalizada?' : 'Need a customized solution?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'pt' ? 'Fale com nossos especialistas e receba uma consultoria gratuita' : 'Talk to our specialists and get a free consultation'}
            </p>
            <Button asChild size="lg">
              <Link to="/contato">{language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />

      {/* Schema.org Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Serviços Depirai",
          "itemListElement": servicesData.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Depirai"
              }
            }
          }))
        })
      }} />
    </div>
  );
}
