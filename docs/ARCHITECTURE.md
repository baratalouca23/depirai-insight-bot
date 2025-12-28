# Depirai - Documentação Técnica

## Arquitetura do Projeto

### Stack Tecnológica
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM v6
- **State**: Context API (Theme, Language)

### Estrutura de Pastas
```
src/
├── assets/          # Imagens e recursos estáticos
├── components/
│   ├── features/    # Componentes funcionais (acessibilidade, animações)
│   ├── sections/    # Seções da página (Hero, Services, etc.)
│   └── ui/          # Componentes base (Button, Input, etc.)
├── contexts/        # Contextos React (Theme, Language)
├── data/            # Dados estáticos (translations, portfolio)
├── hooks/           # Custom hooks
├── lib/             # Utilitários
└── pages/           # Páginas da aplicação
```

---

## Otimizações de Performance

### 1. Code Splitting & Lazy Loading
- **Seções below-the-fold** são carregadas via `React.lazy()`
- **Componentes não-críticos** (AccessibilityMenu, CookieBanner) são lazy loaded
- **Skeleton placeholders** exibidos durante carregamento

```tsx
// src/pages/Index.tsx
const Services = lazy(() => import('@/components/sections/Services'));
```

### 2. Otimização de Fontes
- **Preconnect** para Google Fonts
- **Preload** de CSS de fontes críticas
- **Font-display: swap** via media query trick

```html
<link rel="preload" href="...fonts..." as="style" />
<link rel="stylesheet" href="..." media="print" onload="this.media='all'" />
```

### 3. Build Optimization (Vite)
- **Code splitting automático** por chunks
- **Target ES2020** para bundles menores
- **CSS code splitting** habilitado
- **Vendor chunks** separados (react, react-router)

### 4. Imagens
- **Lazy loading nativo** com `loading="lazy"`
- **Intersection Observer** para carregamento inteligente
- **Componente OptimizedImage** com placeholders

---

## SEO Técnico

### Meta Tags Dinâmicas
Componente `<SEO />` para atualização dinâmica:

```tsx
import { SEO, schemas } from '@/components/SEO';

<SEO 
  title="Página | Depirai"
  description="Descrição..."
  schema={schemas.organization()}
/>
```

### Schema.org Implementados
- **Organization**: Dados da empresa
- **ProfessionalService**: Serviços oferecidos
- **FAQPage**: Perguntas frequentes (gerador disponível)
- **BreadcrumbList**: Navegação estruturada

### Arquivos de Crawler
- `/sitemap.xml` - Mapa do site com prioridades
- `/robots.txt` - Regras de crawling otimizadas

---

## Acessibilidade (WCAG 2.1 AA)

### Recursos Implementados
1. **Skip Link** - Pular para conteúdo principal
2. **ARIA Labels** - Em todos elementos interativos
3. **Roles semânticos** - `role="list"`, `role="dialog"`, etc.
4. **Contraste de cores** - Modo alto contraste disponível
5. **Fonte disléxica** - OpenDyslexic toggle
6. **Redução de movimento** - `prefers-reduced-motion` respeitado
7. **Tamanho de fonte** - 3 níveis configuráveis
8. **Daltonismo** - Filtros para protanopia, deuteranopia, tritanopia
9. **VLibras** - Integração com tradutor de Libras

### Menu de Acessibilidade
Localizado no canto inferior esquerdo, permite:
- Ajuste de tamanho de fonte
- Modo leitura
- Reduzir animações
- Alto contraste
- Fonte disléxica
- Filtros para daltonismo

---

## Internacionalização (i18n)

### Idiomas Suportados
- 🇧🇷 Português (pt-BR) - padrão
- 🇺🇸 Inglês (en)
- 🇪🇸 Espanhol (es)

### Uso
```tsx
const { t, language, setLanguage } = useLanguage();
// t.hero.title, t.nav.home, etc.
```

---

## Temas

### Modos
- **Light** - Padrão claro
- **Dark** - Modo escuro
- **System** - Segue preferência do SO

### Tokens CSS
Definidos em `src/index.css`:
```css
:root {
  --primary: 357 66% 46%;      /* #C1272D */
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  /* ... */
}
```

---

## Segurança (Headers Recomendados)

Para configurar no servidor/CDN:

```nginx
# Nginx example
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://vlibras.gov.br; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" always;

# Compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### Vercel/Netlify
Adicionar `vercel.json` ou `netlify.toml` com headers de segurança.

---

## Deploy

### Lovable (Recomendado)
1. Clique em "Publish" no editor
2. Site disponível em `*.lovable.app`

### Auto-hospedagem
```bash
npm run build
# Arquivos em /dist
```

---

## Monitoramento (Recomendações)

### Performance
- Lighthouse CI
- Web Vitals (CLS, LCP, FID)
- SpeedCurve ou Calibre

### Erros
- Sentry
- LogRocket
- Datadog RUM

### Analytics
- Plausible (privacy-first)
- Google Analytics 4
- Vercel Analytics

---

## Contato & Suporte

- **Site**: https://depirai.com
- **Email**: contato@depirai.com
- **WhatsApp**: +55 42 98891-1463
