import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  '/': 'Início',
  '/servicos': 'Serviços',
  '/portfolio': 'Portfólio',
  '/sobre': 'Sobre',
  '/contato': 'Contato',
  '/privacidade': 'Privacidade',
  '/termos': 'Termos',
};

export function Breadcrumbs() {
  const location = useLocation();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null;

  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
    >
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-primary transition-colors"
        aria-label="Ir para página inicial"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Início</span>
      </Link>
      
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;
        const name = routeNames[path] || segment;

        return (
          <React.Fragment key={path}>
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
            {isLast ? (
              <span className="text-foreground font-medium" aria-current="page">
                {name}
              </span>
            ) : (
              <Link to={path} className="hover:text-primary transition-colors">
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
