import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './button';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Back to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-background"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="font-display font-bold text-2xl text-primary inline-block">
              Depirai
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@depirai.com"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5542988911463"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Guarapuava, PR - Brasil</span>
              </li>
              <li>
                <a 
                  href="mailto:contato@depirai.com" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  contato@depirai.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5542988911463" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  +55 42 98891-1463
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {currentYear} Depirai. {t.footer.rights}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              Powered by <span className="text-primary font-medium">Gemini AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
