import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Briefcase, FolderOpen, Users, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setIsVisible(true);
  }, [location.pathname]);

  const navigationSuggestions = [
    { icon: Home, label: "Início", path: "/", description: "Voltar para a página inicial" },
    { icon: Briefcase, label: "Serviços", path: "/servicos", description: "Conheça nossos serviços" },
    { icon: FolderOpen, label: "Portfólio", path: "/portfolio", description: "Veja nossos projetos" },
    { icon: Users, label: "Sobre", path: "/sobre", description: "Saiba mais sobre nós" },
    { icon: Mail, label: "Contato", path: "/contato", description: "Entre em contato" },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <div 
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative inline-block mb-8">
            <span className="text-[10rem] md:text-[14rem] font-bold leading-none bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent animate-gradient-text">
              404
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10" />
          </div>
        </div>

        {/* Message */}
        <div 
          className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Oops! Página não encontrada
          </h1>
          <p className="text-muted-foreground text-lg mb-2 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <p className="text-muted-foreground/60 text-sm mb-8">
            Caminho: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </div>

        {/* Back button */}
        <div 
          className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Button asChild size="lg" className="mb-12 group">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar para o início
            </Link>
          </Button>
        </div>

        {/* Navigation suggestions */}
        <div 
          className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-muted-foreground text-sm mb-6">Ou navegue para uma dessas páginas:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {navigationSuggestions.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{item.label}</span>
                  <span className="text-xs text-muted-foreground text-center hidden md:block">
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-lg h-40 bg-gradient-to-t from-primary/5 to-transparent blur-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default NotFound;
