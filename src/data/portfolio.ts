// Portfolio images - local optimized assets
import infraBancaria from '@/assets/portfolio/infra-bancaria.jpg';
import saasFinanceiro from '@/assets/portfolio/saas-financeiro.jpg';
import pwaSalao from '@/assets/portfolio/pwa-salao.jpg';
import crmImobiliario from '@/assets/portfolio/crm-imobiliario.jpg';
import marketplace from '@/assets/portfolio/marketplace.jpg';
import leadRh from '@/assets/portfolio/lead-rh.jpg';
import buscaLegal from '@/assets/portfolio/busca-legal.jpg';
import b2bEletrica from '@/assets/portfolio/b2b-eletrica.jpg';
import healthtech from '@/assets/portfolio/healthtech.jpg';
import devotoConectado from '@/assets/portfolio/devoto-conectado.jpg';

export interface PortfolioCase {
  id: string;
  title: string;
  company: string;
  category: 'infra' | 'data';
  description: {
    pt: string;
    en: string;
    es: string;
  };
  kpis: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  premium?: boolean;
  image: string;
  url?: string;
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: 'mssg',
    title: 'Site Institucional Mecânica Industrial',
    company: 'Grupo MSSG',
    category: 'infra',
    description: {
      pt: 'Site institucional para empresa de mecânica industrial com catálogo de serviços e formulário de contato.',
      en: 'Institutional website for industrial mechanics company with service catalog and contact form.',
      es: 'Sitio institucional para empresa de mecánica industrial con catálogo de servicios y formulario de contacto.',
    },
    kpis: [
      { label: 'Performance', value: '95+' },
      { label: 'Responsivo', value: '100%' },
      { label: 'SEO', value: 'Otimizado' },
    ],
    technologies: ['React', 'Tailwind', 'SEO', 'Performance'],
    premium: true,
    image: infraBancaria,
  },
  {
    id: 'obra-facil',
    title: 'SaaS Financeiro',
    company: 'Obra Fácil',
    category: 'data',
    description: {
      pt: 'Plataforma de gestão financeira com dashboards Power BI integrados e automação de relatórios para construtoras.',
      en: 'Financial management platform with integrated Power BI dashboards and report automation for construction companies.',
      es: 'Plataforma de gestión financiera con dashboards Power BI integrados y automatización de informes para constructoras.',
    },
    kpis: [
      { label: 'Eficiência', value: '+60%' },
      { label: 'Relatórios', value: 'Auto' },
      { label: 'ROI', value: '8 meses' },
    ],
    technologies: ['Power BI', 'Azure', 'SQL Server', 'Python'],
    image: saasFinanceiro,
    url: 'https://obrafacil.depirai.com.br/',
  },
  {
    id: 'sistema-salao',
    title: 'PWA Gestão de Salões',
    company: 'Sistema Salão',
    category: 'data',
    description: {
      pt: 'Progressive Web App para gestão de salões de beleza com agendamentos, financeiro e relatórios em tempo real.',
      en: 'Progressive Web App for beauty salon management with scheduling, financial and real-time reporting.',
      es: 'Progressive Web App para gestión de salones de belleza con agendamientos, financiero e informes en tiempo real.',
    },
    kpis: [
      { label: 'Usuários', value: '+5000' },
      { label: 'Conversão', value: '+35%' },
      { label: 'NPS', value: '92' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'PWA'],
    image: pwaSalao,
    url: 'https://cobaia.latinux.com.br/projetos/salao/',
  },
  {
    id: 'sistema-imobiliario',
    title: 'CRM Imobiliário',
    company: 'Sistema Imobiliário',
    category: 'data',
    description: {
      pt: 'CRM completo para imobiliárias com integração de portais, automação de follow-up e analytics de vendas.',
      en: 'Complete CRM for real estate agencies with portal integration, follow-up automation and sales analytics.',
      es: 'CRM completo para inmobiliarias con integración de portales, automatización de seguimiento y analytics de ventas.',
    },
    kpis: [
      { label: 'Leads', value: '+80%' },
      { label: 'Tempo Venda', value: '-30%' },
      { label: 'Conversão', value: '+45%' },
    ],
    technologies: ['Python', 'PostgreSQL', 'Power BI', 'API REST'],
    image: crmImobiliario,
    url: 'https://cobaia.latinux.com.br/projetos/imobiliaria/',
  },
  {
    id: 'marketplace',
    title: 'E-commerce Marketplace',
    company: 'Marketplace',
    category: 'infra',
    description: {
      pt: 'Infraestrutura escalável para marketplace B2B com processamento de milhares de transações diárias.',
      en: 'Scalable infrastructure for B2B marketplace processing thousands of daily transactions.',
      es: 'Infraestructura escalable para marketplace B2B con procesamiento de miles de transacciones diarias.',
    },
    kpis: [
      { label: 'TPS', value: '10k+' },
      { label: 'Latência', value: '<50ms' },
      { label: 'Custo', value: '-50%' },
    ],
    technologies: ['AWS', 'Docker', 'Redis', 'ElasticSearch'],
    image: marketplace,
    url: 'https://cobaia.latinux.com.br/projetos/marketplace/',
  },
  {
    id: 'c2-rh',
    title: 'Lead Generation RH',
    company: 'C2 RH',
    category: 'data',
    description: {
      pt: 'Sistema de captação e qualificação de leads para consultoria de RH com automação de nurturing.',
      en: 'Lead capture and qualification system for HR consulting with nurturing automation.',
      es: 'Sistema de captación y calificación de leads para consultoría de RRHH con automatización de nurturing.',
    },
    kpis: [
      { label: 'CAC', value: '-55%' },
      { label: 'MQL', value: '+120%' },
      { label: 'Pipeline', value: '3x' },
    ],
    technologies: ['HubSpot', 'Power BI', 'Zapier', 'Google Ads'],
    image: leadRh,
    url: 'https://c2rh.com.br/',
  },
  {
    id: 'oseias-bomfim',
    title: 'Sistema Imobiliário',
    company: 'Oséias Bomfim',
    category: 'data',
    description: {
      pt: 'Sistema web completo para corretor de imóveis com gestão de imóveis, clientes e agendamentos.',
      en: 'Complete web system for real estate broker with property, client and scheduling management.',
      es: 'Sistema web completo para corredor de inmuebles con gestión de propiedades, clientes y agendamientos.',
    },
    kpis: [
      { label: 'Imóveis', value: '500+' },
      { label: 'Conversão', value: '+45%' },
      { label: 'Agilidade', value: '+60%' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'API REST'],
    image: buscaLegal,
    url: 'https://oseiasbomfimcorretor.com.br/',
  },
  {
    id: 'g7-eletrica',
    title: 'Site Manutenção Elétrica',
    company: 'G7 Elétrica',
    category: 'infra',
    description: {
      pt: 'Site institucional para empresa de manutenção elétrica com catálogo de serviços, orçamentos e atendimento.',
      en: 'Institutional website for electrical maintenance company with service catalog, quotes and customer support.',
      es: 'Sitio institucional para empresa de mantenimiento eléctrico con catálogo de servicios, presupuestos y atención.',
    },
    kpis: [
      { label: 'Performance', value: '90+' },
      { label: 'Mobile', value: '100%' },
      { label: 'SEO', value: 'Top 10' },
    ],
    technologies: ['React', 'Tailwind', 'SEO', 'Performance'],
    image: b2bEletrica,
    url: 'https://g7manutencaoeletrica.com.br/',
  },
  {
    id: 'sulmed',
    title: 'HealthTech Platform',
    company: 'Sulmed',
    category: 'infra',
    description: {
      pt: 'Infraestrutura HIPAA-compliant para plataforma de telemedicina com alta disponibilidade e segurança de dados sensíveis.',
      en: 'HIPAA-compliant infrastructure for telemedicine platform with high availability and sensitive data security.',
      es: 'Infraestructura HIPAA-compliant para plataforma de telemedicina con alta disponibilidad y seguridad de datos sensibles.',
    },
    kpis: [
      { label: 'Compliance', value: '100%' },
      { label: 'Uptime', value: '99.95%' },
      { label: 'LGPD', value: 'Compliant' },
    ],
    technologies: ['AWS', 'Docker', 'PostgreSQL', 'Encryption'],
    image: healthtech,
    url: 'https://sulmedocupacional.com.br/',
  },
];
