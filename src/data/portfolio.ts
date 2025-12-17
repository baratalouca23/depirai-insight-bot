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
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: 'mssg',
    title: 'Infraestrutura Bancária HA',
    company: 'Grupo MSSG',
    category: 'infra',
    description: {
      pt: 'Implementação de cluster de alta disponibilidade para operações bancárias críticas, com DR multi-região e compliance PCI-DSS.',
      en: 'Implementation of high availability cluster for critical banking operations, with multi-region DR and PCI-DSS compliance.',
      es: 'Implementación de cluster de alta disponibilidad para operaciones bancarias críticas, con DR multi-región y compliance PCI-DSS.',
    },
    kpis: [
      { label: 'TCO', value: '-40%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'RTO', value: '<15min' },
    ],
    technologies: ['Linux HA', 'Kubernetes', 'PostgreSQL', 'Terraform'],
    premium: true,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  },
  {
    id: 'oseias-bomfim',
    title: 'Busca Rápida Legal',
    company: 'Oséias Bomfim',
    category: 'infra',
    description: {
      pt: 'Sistema de busca otimizado para escritório jurídico com indexação inteligente de documentos legais.',
      en: 'Optimized search system for law firm with intelligent indexing of legal documents.',
      es: 'Sistema de búsqueda optimizado para despacho jurídico con indexación inteligente de documentos legales.',
    },
    kpis: [
      { label: 'Busca', value: '<1s' },
      { label: 'Docs', value: '100k+' },
      { label: 'Produtividade', value: '+40%' },
    ],
    technologies: ['ElasticSearch', 'Python', 'OCR', 'NLP'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
  },
  {
    id: 'g7-eletrica',
    title: 'B2B Conversão Elétrica',
    company: 'G7 Elétrica',
    category: 'data',
    description: {
      pt: 'Plataforma B2B com catálogo inteligente, cotações automatizadas e dashboards de vendas para distribuidora elétrica.',
      en: 'B2B platform with smart catalog, automated quotes and sales dashboards for electrical distributor.',
      es: 'Plataforma B2B con catálogo inteligente, cotizaciones automatizadas y dashboards de ventas para distribuidora eléctrica.',
    },
    kpis: [
      { label: 'Conversão', value: '+90%' },
      { label: 'Ticket', value: '+25%' },
      { label: 'Recompra', value: '+60%' },
    ],
    technologies: ['Magento', 'Power BI', 'SAP', 'API B2B'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
  },
];
