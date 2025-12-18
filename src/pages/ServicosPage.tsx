import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Server, BarChart3, Shield, Code, Mail, Database, Cloud, Settings, Cpu } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
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
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em infraestrutura TI e Business Intelligence para transformar seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Responsável: <span className="text-primary font-medium">{service.responsible}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h2>
            <p className="text-muted-foreground mb-6">
              Fale com nossos especialistas e receba uma consultoria gratuita
            </p>
            <Button asChild size="lg">
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
