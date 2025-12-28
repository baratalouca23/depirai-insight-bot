export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    clients: {
      title: 'Empresas que confiam em nós',
    },
    nav: {
      services: 'Serviços',
      portfolio: 'Portfólio',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      badge: 'Desenvolvimento Web Fullstack',
      title: 'Criamos experiências digitais',
      titleHighlight: 'e sistemas inteligentes',
      subtitle: 'Desenvolvimento Web Fullstack focado em performance e usabilidade. Transformamos suas ideias em soluções digitais que geram resultados.',
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
      subtitle: 'Soluções completas para transformar seu negócio digital',
      categories: {
        development: {
          title: 'Desenvolvimento',
          subtitle: 'Soluções digitais sob medida',
          items: [
            {
              title: 'Sites Institucionais',
              problem: 'Sua empresa não é encontrada online ou seu site atual não gera credibilidade?',
              solution: 'Sites profissionais otimizados para SEO que posicionam sua marca e captam clientes.',
              features: ['Design responsivo', 'SEO otimizado', 'Performance máxima', 'Integração WhatsApp'],
            },
            {
              title: 'Landing Pages',
              problem: 'Suas campanhas de marketing não convertem em vendas?',
              solution: 'Páginas de conversão focadas em transformar visitantes em leads qualificados.',
              features: ['Alta conversão', 'A/B Testing', 'Formulários inteligentes', 'Analytics integrado'],
            },
            {
              title: 'Sistemas Web',
              problem: 'Processos manuais consomem tempo e geram erros na sua operação?',
              solution: 'Sistemas customizados que automatizam processos e aumentam produtividade.',
              features: ['Painéis admin', 'Automação', 'Relatórios', 'Integrações API'],
            },
            {
              title: 'Aplicativos',
              problem: 'Seus clientes precisam de acesso mobile mas você não tem presença no celular?',
              solution: 'Apps mobile e web apps que levam seu negócio para o bolso do cliente.',
              features: ['iOS e Android', 'PWA', 'Push notifications', 'Offline first'],
            },
          ],
        },
        infrastructure: {
          title: 'Infraestrutura & TI',
          subtitle: 'Segurança e performance para sua operação',
          items: [
            {
              title: 'Servidores Cloud/On-Premise',
              problem: 'Servidores instáveis causam downtime e perda de vendas?',
              solution: 'Infraestrutura Linux HA com 99.9% uptime e redução de até 40% no TCO.',
              features: ['Clusters HA/DR', 'Backup automatizado', 'Monitoramento 24/7', 'Escalabilidade'],
            },
            {
              title: 'Redes e Conectividade',
              problem: 'Rede lenta, quedas frequentes e falta de segurança?',
              solution: 'Configuração profissional de redes com firewall e VPN para operação segura.',
              features: ['Firewall avançado', 'VPN corporativa', 'Wi-Fi empresarial', 'QoS otimizado'],
            },
            {
              title: 'Suporte Técnico',
              problem: 'Problemas de TI travam sua equipe e você não tem suporte confiável?',
              solution: 'Suporte remoto e presencial com SLA garantido para manter sua operação rodando.',
              features: ['SLA definido', 'Suporte remoto', 'Atendimento presencial', 'Gestão de ativos'],
            },
          ],
        },
        security: {
          title: 'CSTV & Segurança',
          subtitle: 'Proteção completa para seu patrimônio',
          items: [
            {
              title: 'Câmeras e Monitoramento',
              problem: 'Preocupado com segurança física do seu negócio ou residência?',
              solution: 'Sistemas de CFTV com acesso remoto e integração com alarmes.',
              features: ['Câmeras HD/4K', 'Acesso remoto', 'Gravação cloud', 'Detecção movimento'],
            },
            {
              title: 'Segurança Digital',
              problem: 'Ataques hackers, vazamento de dados e multas LGPD?',
              solution: 'Hardening, firewall e políticas de segurança para proteger seus dados.',
              features: ['Hardening CIS', 'Fail2ban/UFW', 'Backup criptografado', 'Auditoria LGPD'],
            },
            {
              title: 'Consultoria Técnica',
              problem: 'Não sabe por onde começar para proteger sua empresa?',
              solution: 'Diagnóstico completo e plano de ação para elevar sua maturidade em segurança.',
              features: ['Assessment', 'Plano de ação', 'Treinamento', 'Documentação'],
            },
          ],
        },
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
      subtitle: '31+ anos de experiência combinada em TI enterprise',
      description: 'A Depirai nasceu da união de dois profissionais seniores de Piraí do Sul, PR, com mais de 31 anos de experiência combinada em infraestrutura e inteligência de dados para projetos enterprise.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Especialista Infraestrutura',
          bio: '16 anos em TI, suporte estratégico multinacional. Especialista em Linux HA, Hardening, redução de TCO. Experiência em Indústria, Engenharia, Logística e CDs. Gestão de crises e liderança técnica.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'Especialista BI & Dados',
          bio: '15+ anos em TI, suporte remoto e telefônico. Power BI Avançado, Excel, Analista BI. Certificado em LGPD e Segurança da Informação. Futuro Economista. Foco em ETL, Governança e Dashboards ROI.',
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
      fontSize: 'Tamanho da Fonte',
      readingMode: 'Modo Leitura',
      reducedMotion: 'Reduzir Animações',
      reset: 'Restaurar Padrão',
    },
    cookie: {
      message: 'Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.',
      accept: 'Aceitar',
      decline: 'Recusar',
    },
  },
  en: {
    clients: {
      title: 'Companies that trust us',
    },
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Fullstack Web Development',
      title: 'We create digital experiences',
      titleHighlight: 'and intelligent systems',
      subtitle: 'Fullstack Web Development focused on performance and usability. We transform your ideas into digital solutions that deliver results.',
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
      subtitle: 'Complete solutions to transform your digital business',
      categories: {
        development: {
          title: 'Development',
          subtitle: 'Custom digital solutions',
          items: [
            {
              title: 'Institutional Websites',
              problem: 'Your company is not found online or your current website lacks credibility?',
              solution: 'Professional SEO-optimized websites that position your brand and capture clients.',
              features: ['Responsive design', 'SEO optimized', 'Maximum performance', 'WhatsApp integration'],
            },
            {
              title: 'Landing Pages',
              problem: 'Your marketing campaigns are not converting into sales?',
              solution: 'Conversion-focused pages that transform visitors into qualified leads.',
              features: ['High conversion', 'A/B Testing', 'Smart forms', 'Integrated analytics'],
            },
            {
              title: 'Web Systems',
              problem: 'Manual processes consume time and generate errors in your operation?',
              solution: 'Custom systems that automate processes and increase productivity.',
              features: ['Admin panels', 'Automation', 'Reports', 'API integrations'],
            },
            {
              title: 'Applications',
              problem: 'Your clients need mobile access but you have no mobile presence?',
              solution: 'Mobile and web apps that bring your business to your clients pocket.',
              features: ['iOS and Android', 'PWA', 'Push notifications', 'Offline first'],
            },
          ],
        },
        infrastructure: {
          title: 'Infrastructure & IT',
          subtitle: 'Security and performance for your operation',
          items: [
            {
              title: 'Cloud/On-Premise Servers',
              problem: 'Unstable servers cause downtime and lost sales?',
              solution: 'Linux HA infrastructure with 99.9% uptime and up to 40% TCO reduction.',
              features: ['HA/DR Clusters', 'Automated backup', '24/7 Monitoring', 'Scalability'],
            },
            {
              title: 'Networks and Connectivity',
              problem: 'Slow network, frequent drops and lack of security?',
              solution: 'Professional network configuration with firewall and VPN for secure operation.',
              features: ['Advanced firewall', 'Corporate VPN', 'Enterprise Wi-Fi', 'Optimized QoS'],
            },
            {
              title: 'Technical Support',
              problem: 'IT problems freeze your team and you have no reliable support?',
              solution: 'Remote and on-site support with guaranteed SLA to keep your operation running.',
              features: ['Defined SLA', 'Remote support', 'On-site service', 'Asset management'],
            },
          ],
        },
        security: {
          title: 'CCTV & Security',
          subtitle: 'Complete protection for your assets',
          items: [
            {
              title: 'Cameras and Monitoring',
              problem: 'Worried about physical security of your business or residence?',
              solution: 'CCTV systems with remote access and alarm integration.',
              features: ['HD/4K Cameras', 'Remote access', 'Cloud recording', 'Motion detection'],
            },
            {
              title: 'Digital Security',
              problem: 'Hacker attacks, data leaks and LGPD fines?',
              solution: 'Hardening, firewall and security policies to protect your data.',
              features: ['CIS Hardening', 'Fail2ban/UFW', 'Encrypted backup', 'LGPD Audit'],
            },
            {
              title: 'Technical Consulting',
              problem: 'Dont know where to start to protect your company?',
              solution: 'Complete diagnosis and action plan to elevate your security maturity.',
              features: ['Assessment', 'Action plan', 'Training', 'Documentation'],
            },
          ],
        },
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
      subtitle: '31+ years of combined enterprise IT experience',
      description: 'Depirai was born from the union of two senior professionals from Piraí do Sul, PR, with over 31 years of combined experience in infrastructure and data intelligence for enterprise projects.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Infrastructure Specialist',
          bio: '16 years in IT, multinational strategic support. Linux HA, Hardening, TCO reduction specialist. Experience in Industry, Engineering, Logistics and DCs. Crisis management and technical leadership.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'BI & Data Specialist',
          bio: '15+ years in IT, remote and phone support. Advanced Power BI, Excel, BI Analyst. LGPD and Information Security certified. Future Economist. Focus on ETL, Governance and ROI Dashboards.',
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
      fontSize: 'Font Size',
      readingMode: 'Reading Mode',
      reducedMotion: 'Reduce Motion',
      reset: 'Reset to Default',
    },
    cookie: {
      message: 'We use cookies to improve your experience. By continuing, you agree to our privacy policy.',
      accept: 'Accept',
      decline: 'Decline',
    },
  },
  es: {
    clients: {
      title: 'Empresas que confían en nosotros',
    },
    nav: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Desarrollo Web Fullstack',
      title: 'Creamos experiencias digitales',
      titleHighlight: 'y sistemas inteligentes',
      subtitle: 'Desarrollo Web Fullstack enfocado en rendimiento y usabilidad. Transformamos tus ideas en soluciones digitales que generan resultados.',
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
      subtitle: 'Soluciones completas para transformar tu negocio digital',
      categories: {
        development: {
          title: 'Desarrollo',
          subtitle: 'Soluciones digitales a medida',
          items: [
            {
              title: 'Sitios Institucionales',
              problem: '¿Tu empresa no se encuentra online o tu sitio actual no genera credibilidad?',
              solution: 'Sitios profesionales optimizados para SEO que posicionan tu marca y captan clientes.',
              features: ['Diseño responsivo', 'SEO optimizado', 'Rendimiento máximo', 'Integración WhatsApp'],
            },
            {
              title: 'Landing Pages',
              problem: '¿Tus campañas de marketing no convierten en ventas?',
              solution: 'Páginas de conversión enfocadas en transformar visitantes en leads calificados.',
              features: ['Alta conversión', 'A/B Testing', 'Formularios inteligentes', 'Analytics integrado'],
            },
            {
              title: 'Sistemas Web',
              problem: '¿Los procesos manuales consumen tiempo y generan errores en tu operación?',
              solution: 'Sistemas personalizados que automatizan procesos y aumentan la productividad.',
              features: ['Paneles admin', 'Automatización', 'Reportes', 'Integraciones API'],
            },
            {
              title: 'Aplicaciones',
              problem: '¿Tus clientes necesitan acceso móvil pero no tienes presencia en celular?',
              solution: 'Apps móviles y web apps que llevan tu negocio al bolsillo del cliente.',
              features: ['iOS y Android', 'PWA', 'Push notifications', 'Offline first'],
            },
          ],
        },
        infrastructure: {
          title: 'Infraestructura & TI',
          subtitle: 'Seguridad y rendimiento para tu operación',
          items: [
            {
              title: 'Servidores Cloud/On-Premise',
              problem: '¿Servidores inestables causan downtime y pérdida de ventas?',
              solution: 'Infraestructura Linux HA con 99.9% uptime y reducción de hasta 40% en TCO.',
              features: ['Clusters HA/DR', 'Backup automatizado', 'Monitoreo 24/7', 'Escalabilidad'],
            },
            {
              title: 'Redes y Conectividad',
              problem: '¿Red lenta, caídas frecuentes y falta de seguridad?',
              solution: 'Configuración profesional de redes con firewall y VPN para operación segura.',
              features: ['Firewall avanzado', 'VPN corporativa', 'Wi-Fi empresarial', 'QoS optimizado'],
            },
            {
              title: 'Soporte Técnico',
              problem: '¿Problemas de TI paralizan tu equipo y no tienes soporte confiable?',
              solution: 'Soporte remoto y presencial con SLA garantizado para mantener tu operación funcionando.',
              features: ['SLA definido', 'Soporte remoto', 'Atención presencial', 'Gestión de activos'],
            },
          ],
        },
        security: {
          title: 'CCTV & Seguridad',
          subtitle: 'Protección completa para tu patrimonio',
          items: [
            {
              title: 'Cámaras y Monitoreo',
              problem: '¿Preocupado con la seguridad física de tu negocio o residencia?',
              solution: 'Sistemas de CCTV con acceso remoto e integración con alarmas.',
              features: ['Cámaras HD/4K', 'Acceso remoto', 'Grabación cloud', 'Detección movimiento'],
            },
            {
              title: 'Seguridad Digital',
              problem: '¿Ataques hackers, filtración de datos y multas LGPD?',
              solution: 'Hardening, firewall y políticas de seguridad para proteger tus datos.',
              features: ['Hardening CIS', 'Fail2ban/UFW', 'Backup encriptado', 'Auditoría LGPD'],
            },
            {
              title: 'Consultoría Técnica',
              problem: '¿No sabes por dónde empezar para proteger tu empresa?',
              solution: 'Diagnóstico completo y plan de acción para elevar tu madurez en seguridad.',
              features: ['Assessment', 'Plan de acción', 'Capacitación', 'Documentación'],
            },
          ],
        },
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
      subtitle: '31+ años de experiencia combinada en TI enterprise',
      description: 'Depirai nació de la unión de dos profesionales senior de Piraí do Sul, PR, con más de 31 años de experiencia combinada en infraestructura e inteligencia de datos para proyectos enterprise.',
      team: {
        diego: {
          name: 'Diego C. Moreira',
          role: 'Especialista Infraestructura',
          bio: '16 años en TI, soporte estratégico multinacional. Especialista en Linux HA, Hardening, reducción de TCO. Experiencia en Industria, Ingeniería, Logística y CDs. Gestión de crisis y liderazgo técnico.',
        },
        emerson: {
          name: 'Emerson Vieira',
          role: 'Especialista BI & Datos',
          bio: '15+ años en TI, soporte remoto y telefónico. Power BI Avanzado, Excel, Analista BI. Certificado en LGPD y Seguridad de la Información. Futuro Economista. Enfoque en ETL, Gobernanza y Dashboards ROI.',
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
      fontSize: 'Tamaño de Fuente',
      readingMode: 'Modo Lectura',
      reducedMotion: 'Reducir Animaciones',
      reset: 'Restaurar por Defecto',
    },
    cookie: {
      message: 'Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra política de privacidad.',
      accept: 'Aceptar',
      decline: 'Rechazar',
    },
  },
};

export type Translations = typeof translations.pt;
