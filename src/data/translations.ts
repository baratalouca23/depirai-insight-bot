export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: {
      services: 'Serviços',
      portfolio: 'Portfólio',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      badge: 'Engenharia de Receita & Infraestrutura TI',
      title: 'Transformamos sua',
      titleHighlight: 'Infraestrutura em Receita',
      subtitle: 'Consultoria especializada em Linux HA e Power BI para empresas que buscam redução de TCO e receita previsível.',
      cta: 'Agende Consultoria Gratuita',
      ctaSecondary: 'Ver Portfólio',
      stats: {
        clients: 'Clientes Atendidos',
        reduction: 'Redução TCO Média',
        uptime: 'Uptime Garantido',
      },
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções enterprise que entregam resultados mensuráveis',
      infrastructure: {
        title: 'Infraestrutura Linux HA',
        description: 'Alta disponibilidade, hardening de segurança e otimização de custos com Diego C. Moreira.',
        features: ['Clusters HA/DR', 'Hardening CIS', 'Automação DevOps', 'Monitoramento 24/7'],
      },
      data: {
        title: 'Engenharia de Dados',
        description: 'Power BI, ETL e governança de dados com Emerson Vieira para decisões baseadas em dados.',
        features: ['Dashboards Power BI', 'Pipelines ETL', 'Data Governance', 'KPI Tracking'],
      },
    },
    portfolio: {
      title: 'Cases de Sucesso',
      subtitle: 'Resultados comprovados em empresas de todos os portes',
      filters: {
        all: 'Todos',
        infra: 'Infraestrutura',
        data: 'Dados',
      },
      viewCase: 'Ver Case',
    },
    about: {
      title: 'Quem Somos',
      subtitle: 'Uma equipe de especialistas dedicados ao seu sucesso',
      description: 'A Depirai nasceu da união de profissionais seniores em infraestrutura e dados, com mais de 15 anos de experiência combinada em projetos enterprise.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Head de Infraestrutura',
          bio: 'Especialista em Linux HA, DevOps e segurança com certificações Red Hat e AWS.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'Head de Dados',
          bio: 'Engenheiro de dados sênior, especialista em Power BI e arquitetura de data warehouse.',
        },
      },
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Agende uma consultoria gratuita e descubra como podemos ajudar',
      form: {
        name: 'Nome Completo',
        email: 'E-mail Corporativo',
        company: 'Empresa',
        kpi: 'Principal Desafio',
        kpiOptions: {
          tco: 'Redução de TCO',
          revenue: 'Receita Previsível',
          data: 'Governança de Dados',
          security: 'Segurança & Compliance',
          other: 'Outro',
        },
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        error: 'Erro ao enviar. Tente novamente.',
      },
    },
    footer: {
      description: 'Engenharia de Receita & Infraestrutura TI para empresas que buscam resultados.',
      rights: 'Todos os direitos reservados.',
      links: {
        privacy: 'Privacidade',
        terms: 'Termos',
      },
    },
    chat: {
      title: 'O Designer',
      subtitle: 'Consultor IA',
      placeholder: 'Digite sua mensagem...',
      greeting: 'Olá! Sou O Designer, consultor virtual da Depirai. Como posso ajudar sua empresa hoje?',
      thinking: 'Analisando...',
    },
    accessibility: {
      title: 'Acessibilidade',
      dyslexicFont: 'Fonte para Dislexia',
      highContrast: 'Alto Contraste',
      colorBlind: 'Daltonismo',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
    cookie: {
      message: 'Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.',
      accept: 'Aceitar',
      decline: 'Recusar',
    },
  },
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Revenue Engineering & IT Infrastructure',
      title: 'Transform your',
      titleHighlight: 'Infrastructure into Revenue',
      subtitle: 'Specialized consulting in Linux HA and Power BI for companies seeking TCO reduction and predictable revenue.',
      cta: 'Schedule Free Consultation',
      ctaSecondary: 'View Portfolio',
      stats: {
        clients: 'Clients Served',
        reduction: 'Average TCO Reduction',
        uptime: 'Guaranteed Uptime',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Enterprise solutions that deliver measurable results',
      infrastructure: {
        title: 'Linux HA Infrastructure',
        description: 'High availability, security hardening and cost optimization with Diego C. Moreira.',
        features: ['HA/DR Clusters', 'CIS Hardening', 'DevOps Automation', '24/7 Monitoring'],
      },
      data: {
        title: 'Data Engineering',
        description: 'Power BI, ETL and data governance with Emerson Vieira for data-driven decisions.',
        features: ['Power BI Dashboards', 'ETL Pipelines', 'Data Governance', 'KPI Tracking'],
      },
    },
    portfolio: {
      title: 'Success Cases',
      subtitle: 'Proven results in companies of all sizes',
      filters: {
        all: 'All',
        infra: 'Infrastructure',
        data: 'Data',
      },
      viewCase: 'View Case',
    },
    about: {
      title: 'About Us',
      subtitle: 'A team of specialists dedicated to your success',
      description: 'Depirai was born from the union of senior professionals in infrastructure and data, with over 15 years of combined experience in enterprise projects.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Head of Infrastructure',
          bio: 'Linux HA, DevOps and security specialist with Red Hat and AWS certifications.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'Head of Data',
          bio: 'Senior data engineer, Power BI and data warehouse architecture specialist.',
        },
      },
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Schedule a free consultation and discover how we can help',
      form: {
        name: 'Full Name',
        email: 'Corporate Email',
        company: 'Company',
        kpi: 'Main Challenge',
        kpiOptions: {
          tco: 'TCO Reduction',
          revenue: 'Predictable Revenue',
          data: 'Data Governance',
          security: 'Security & Compliance',
          other: 'Other',
        },
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! We will contact you soon.',
        error: 'Error sending. Please try again.',
      },
    },
    footer: {
      description: 'Revenue Engineering & IT Infrastructure for results-driven companies.',
      rights: 'All rights reserved.',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
    chat: {
      title: 'The Designer',
      subtitle: 'AI Consultant',
      placeholder: 'Type your message...',
      greeting: "Hello! I'm The Designer, Depirai's virtual consultant. How can I help your company today?",
      thinking: 'Analyzing...',
    },
    accessibility: {
      title: 'Accessibility',
      dyslexicFont: 'Dyslexic Font',
      highContrast: 'High Contrast',
      colorBlind: 'Color Blindness',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
    cookie: {
      message: 'We use cookies to improve your experience. By continuing, you agree to our privacy policy.',
      accept: 'Accept',
      decline: 'Decline',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ingeniería de Ingresos & Infraestructura TI',
      title: 'Transformamos tu',
      titleHighlight: 'Infraestructura en Ingresos',
      subtitle: 'Consultoría especializada en Linux HA y Power BI para empresas que buscan reducción de TCO e ingresos predecibles.',
      cta: 'Agendar Consulta Gratis',
      ctaSecondary: 'Ver Portafolio',
      stats: {
        clients: 'Clientes Atendidos',
        reduction: 'Reducción TCO Promedio',
        uptime: 'Uptime Garantizado',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones enterprise que entregan resultados medibles',
      infrastructure: {
        title: 'Infraestructura Linux HA',
        description: 'Alta disponibilidad, hardening de seguridad y optimización de costos con Diego C. Moreira.',
        features: ['Clusters HA/DR', 'Hardening CIS', 'Automatización DevOps', 'Monitoreo 24/7'],
      },
      data: {
        title: 'Ingeniería de Datos',
        description: 'Power BI, ETL y gobernanza de datos con Emerson Vieira para decisiones basadas en datos.',
        features: ['Dashboards Power BI', 'Pipelines ETL', 'Gobernanza de Datos', 'Seguimiento KPI'],
      },
    },
    portfolio: {
      title: 'Casos de Éxito',
      subtitle: 'Resultados comprobados en empresas de todos los tamaños',
      filters: {
        all: 'Todos',
        infra: 'Infraestructura',
        data: 'Datos',
      },
      viewCase: 'Ver Caso',
    },
    about: {
      title: 'Quiénes Somos',
      subtitle: 'Un equipo de especialistas dedicados a tu éxito',
      description: 'Depirai nació de la unión de profesionales senior en infraestructura y datos, con más de 15 años de experiencia combinada en proyectos enterprise.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Head de Infraestructura',
          bio: 'Especialista en Linux HA, DevOps y seguridad con certificaciones Red Hat y AWS.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'Head de Datos',
          bio: 'Ingeniero de datos senior, especialista en Power BI y arquitectura de data warehouse.',
        },
      },
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Agenda una consulta gratis y descubre cómo podemos ayudarte',
      form: {
        name: 'Nombre Completo',
        email: 'Email Corporativo',
        company: 'Empresa',
        kpi: 'Desafío Principal',
        kpiOptions: {
          tco: 'Reducción de TCO',
          revenue: 'Ingresos Predecibles',
          data: 'Gobernanza de Datos',
          security: 'Seguridad & Compliance',
          other: 'Otro',
        },
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
        error: 'Error al enviar. Intenta de nuevo.',
      },
    },
    footer: {
      description: 'Ingeniería de Ingresos & Infraestructura TI para empresas orientadas a resultados.',
      rights: 'Todos los derechos reservados.',
      links: {
        privacy: 'Privacidad',
        terms: 'Términos',
      },
    },
    chat: {
      title: 'El Diseñador',
      subtitle: 'Consultor IA',
      placeholder: 'Escribe tu mensaje...',
      greeting: '¡Hola! Soy El Diseñador, consultor virtual de Depirai. ¿Cómo puedo ayudar a tu empresa hoy?',
      thinking: 'Analizando...',
    },
    accessibility: {
      title: 'Accesibilidad',
      dyslexicFont: 'Fuente para Dislexia',
      highContrast: 'Alto Contraste',
      colorBlind: 'Daltonismo',
      normal: 'Normal',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia',
    },
    cookie: {
      message: 'Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra política de privacidad.',
      accept: 'Aceptar',
      decline: 'Rechazar',
    },
  },
};

export type Translations = typeof translations.pt;
