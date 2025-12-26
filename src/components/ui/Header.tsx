import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/data/translations';
import { ThemeToggle, ThemeToggleIcon } from './ThemeToggle';
import logo from '@/assets/logo.png';

const languages: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? '#services' : '/servicos', label: t.nav.services, route: '/servicos' },
    { href: isHomePage ? '#portfolio' : '/portfolio', label: t.nav.portfolio, route: '/portfolio' },
    { href: isHomePage ? '#about' : '/sobre', label: t.nav.about, route: '/sobre' },
    { href: isHomePage ? '#contact' : '/contato', label: t.nav.contact, route: '/contato' },
  ];

  const renderNavLink = (link: typeof navLinks[0], onClick?: () => void) => {
    if (isHomePage) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.route}
        to={link.route}
        onClick={onClick}
        className={`text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
          location.pathname === link.route 
            ? 'text-primary after:w-full' 
            : 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full'
        }`}
      >
        {link.label}
      </Link>
    );
  };

  const renderMobileNavLink = (link: typeof navLinks[0]) => {
    if (isHomePage) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="block py-2 text-foreground font-medium"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.route}
        to={link.route}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`block py-2 font-medium ${
          location.pathname === link.route ? 'text-primary' : 'text-foreground'
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.05)] border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Depirai" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderNavLink(link))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Select language"
              className="text-muted-foreground hover:text-foreground h-9 w-9"
            >
              <Globe className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-24 bg-card rounded-lg shadow-card-hover border border-border animate-scale-in origin-top-right">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                      language === lang.code ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle - Desktop */}
          <div className="hidden sm:block">
            <ThemeToggle size="sm" />
          </div>
          
          {/* Theme Toggle - Mobile (icon only) */}
          <div className="sm:hidden">
            <ThemeToggleIcon />
          </div>

          {/* CTA Desktop */}
          <Button className="hidden md:inline-flex" asChild>
            {isHomePage ? (
              <a href="#contact">{t.hero.cta}</a>
            ) : (
              <Link to="/contato">{t.hero.cta}</Link>
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="section-container py-4 space-y-4">
            {navLinks.map((link) => renderMobileNavLink(link))}
            <Button className="w-full" asChild>
              {isHomePage ? (
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.hero.cta}
                </a>
              ) : (
                <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.hero.cta}
                </Link>
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
