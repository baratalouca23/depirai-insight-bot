import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './button';
import logo from '@/assets/logo.png';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Depirai" className="h-8 w-auto" />
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@depirai.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5542988911463"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-foreground mb-3 text-sm">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Pirai do Sul - PR
              </li>
              <li>
                <a 
                  href="mailto:contato@depirai.com" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  contato@depirai.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5542988911463" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +55 42 98891-1463
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Depirai. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
