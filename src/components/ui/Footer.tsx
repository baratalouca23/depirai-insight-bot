import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display font-bold text-2xl text-primary">
              Depirai
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@depirai.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5542988911463"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/servicos" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link to="/termos" className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.links.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Depirai. {t.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Powered by <span className="text-primary font-medium">Gemini AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
