import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  schema?: object;
}

const DEFAULT_SEO = {
  title: 'Depirai | Desenvolvimento Web Fullstack',
  description: 'Criamos experiências digitais e sistemas inteligentes. Desenvolvimento Web Fullstack focado em performance e usabilidade.',
  keywords: 'desenvolvimento web, fullstack, react, sistemas inteligentes, performance, usabilidade',
  image: 'https://depirai.com/og-image.png',
  url: 'https://depirai.com',
};

export function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = 'website',
  noindex = false,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);

    // Twitter Card
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Schema.org JSON-LD
    if (schema) {
      const existingSchema = document.querySelector('script[data-seo="dynamic-schema"]');
      if (existingSchema) {
        existingSchema.remove();
      }
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-seo', 'dynamic-schema');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup
    return () => {
      const dynamicSchema = document.querySelector('script[data-seo="dynamic-schema"]');
      if (dynamicSchema) {
        dynamicSchema.remove();
      }
    };
  }, [title, description, keywords, image, url, type, noindex, schema]);

  return null;
}

// Pre-built schema generators
export const schemas = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Depirai',
    description: 'Desenvolvimento Web Fullstack focado em performance e usabilidade',
    url: 'https://depirai.com',
    logo: 'https://depirai.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-42-98891-1463',
      contactType: 'sales',
      availableLanguage: ['Portuguese', 'English', 'Spanish'],
    },
  }),

  service: (name: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Depirai',
    },
  }),

  faq: (items: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }),

  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
