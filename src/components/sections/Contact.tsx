import React, { useState, useId, useMemo } from 'react';
import { Send, MapPin, Mail, Loader2, CheckCircle2, AlertCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { TechLogos } from '@/components/ui/TechLogos';
import { z } from 'zod';
import { brazilianStates, getCitiesByState } from '@/data/brazilianCities';

// Validation schema with i18n messages
const createContactSchema = (lang: string) => z.object({
  name: z.string().trim()
    .min(2, lang === 'pt' ? 'Nome deve ter pelo menos 2 caracteres' : 'Name must have at least 2 characters')
    .max(100, lang === 'pt' ? 'Nome muito longo' : 'Name too long'),
  email: z.string().trim()
    .email(lang === 'pt' ? 'Email inválido' : 'Invalid email')
    .max(255),
  company: z.string().trim()
    .min(1, lang === 'pt' ? 'Empresa é obrigatória' : 'Company is required')
    .max(100),
  state: z.string().min(1, lang === 'pt' ? 'Selecione um estado' : 'Select a state'),
  city: z.string().min(1, lang === 'pt' ? 'Selecione uma cidade' : 'Select a city'),
  kpi: z.string().min(1, lang === 'pt' ? 'Selecione um objetivo' : 'Select an objective'),
  message: z.string().trim()
    .min(10, lang === 'pt' ? 'Mensagem deve ter pelo menos 10 caracteres' : 'Message must have at least 10 characters')
    .max(1000),
});

interface FormData {
  name: string;
  email: string;
  company: string;
  state: string;
  city: string;
  kpi: string;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  state?: string;
  city?: string;
  kpi?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  state: '',
  city: '',
  kpi: '',
  message: '',
  honeypot: '',
};

export function Contact() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref: infoRef, isVisible: infoVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  // Unique IDs for accessibility
  const formId = useId();
  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const companyErrorId = `${formId}-company-error`;
  const stateErrorId = `${formId}-state-error`;
  const cityErrorId = `${formId}-city-error`;
  const kpiErrorId = `${formId}-kpi-error`;
  const messageErrorId = `${formId}-message-error`;

  const contactSchema = createContactSchema(language);

  // Get cities for selected state
  const availableCities = useMemo(() => {
    return formData.state ? getCitiesByState(formData.state) : [];
  }, [formData.state]);

  const validateField = (name: keyof FormErrors, value: string): string | undefined => {
    const partialData = { ...formData, [name]: value };
    const result = contactSchema.safeParse(partialData);
    if (!result.success) {
      const error = result.error.errors.find(e => e.path[0] === name);
      return error?.message;
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name as keyof FormErrors, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormErrors, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleKpiChange = (value: string) => {
    setFormData((prev) => ({ ...prev, kpi: value }));
    setTouched((prev) => ({ ...prev, kpi: true }));
    const error = validateField('kpi', value);
    setErrors((prev) => ({ ...prev, kpi: error }));
  };

  const handleStateChange = (value: string) => {
    setFormData((prev) => ({ ...prev, state: value, city: '' })); // Reset city when state changes
    setTouched((prev) => ({ ...prev, state: true }));
    const error = validateField('state', value);
    setErrors((prev) => ({ ...prev, state: error, city: undefined }));
  };

  const handleCityChange = (value: string) => {
    setFormData((prev) => ({ ...prev, city: value }));
    setTouched((prev) => ({ ...prev, city: true }));
    const error = validateField('city', value);
    setErrors((prev) => ({ ...prev, city: error }));
  };

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setTouched({ name: true, email: true, company: true, state: true, city: true, kpi: true, message: true });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      return;
    }
    
    if (!validateForm()) {
      toast({
        title: language === 'pt' ? 'Erro de validação' : 'Validation error',
        description: language === 'pt' ? 'Por favor, corrija os campos destacados.' : 'Please fix the highlighted fields.',
        variant: 'destructive',
      });
      // Focus first error field
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        document.getElementById(firstError)?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwpvgqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          state: formData.state,
          city: formData.city,
          kpi: formData.kpi,
          message: formData.message,
          _subject: `Nova mensagem de ${formData.name} - ${formData.company}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: language === 'pt' ? '✅ Mensagem enviada!' : '✅ Message sent!',
          description: language === 'pt' ? 'Entraremos em contato em breve.' : 'We will contact you soon.',
        });
        setFormData(initialFormData);
        setTouched({});
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch {
      toast({
        title: language === 'pt' ? 'Erro ao enviar' : 'Error sending',
        description: language === 'pt' ? 'Tente novamente ou entre em contato pelo WhatsApp.' : 'Try again or contact us via WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Piraí do Sul - PR', ariaLabel: 'Localização: Piraí do Sul, Paraná' },
    { icon: Mail, label: 'contato@depirai.com', href: 'mailto:contato@depirai.com', ariaLabel: 'Email: contato@depirai.com' },
  ];

  const kpiOptions = [
    { value: 'tco', label: t.contact.form.kpiOptions.tco },
    { value: 'revenue', label: t.contact.form.kpiOptions.revenue },
    { value: 'data', label: t.contact.form.kpiOptions.data },
    { value: 'security', label: t.contact.form.kpiOptions.security },
    { value: 'other', label: t.contact.form.kpiOptions.other },
  ];

  const ErrorMessage = ({ id, message }: { id: string; message?: string }) => {
    if (!message) return null;
    return (
      <p id={id} className="flex items-center gap-1 text-xs text-destructive mt-1" role="alert">
        <AlertCircle className="h-3 w-3" aria-hidden="true" />
        {message}
      </p>
    );
  };

  return (
    <section 
      id="contact" 
      className="section-padding bg-muted/20"
      aria-labelledby="contact-title"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div 
            ref={infoRef}
            className={cn(
              "space-y-6 transition-opacity duration-300",
              infoVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <header>
              <h2 
                id="contact-title"
                className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
              >
                {t.contact.title}
              </h2>
              <p className="text-muted-foreground">{t.contact.subtitle}</p>
            </header>

            <address className="not-italic space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-foreground hover:text-primary transition-colors text-sm focus-ring rounded"
                      aria-label={item.ariaLabel}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground text-sm" aria-label={item.ariaLabel}>
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </address>

            {/* Trust Badges */}
            <div className="p-4 rounded-lg border border-border bg-card">
              <TechLogos title={language === 'pt' ? 'Tecnologias que utilizamos:' : 'Technologies we use:'} />
            </div>
          </div>

          {/* Form */}
          <div 
            ref={formRef}
            className={cn(
              "p-6 rounded-lg border border-border bg-card transition-opacity duration-300",
              formVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              aria-label={language === 'pt' ? 'Formulário de contato' : 'Contact form'}
              noValidate
            >
              {/* Honeypot - hidden from users, visible to bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="honeypot">
                  Deixe este campo vazio
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">
                    {t.contact.form.name} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="João Silva"
                    className={cn("h-9", errors.name && 'border-destructive focus-visible:ring-destructive')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? nameErrorId : undefined}
                    aria-required="true"
                    autoComplete="name"
                  />
                  <ErrorMessage id={nameErrorId} message={errors.name} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">
                    {t.contact.form.email} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="joao@empresa.com"
                    className={cn("h-9", errors.email && 'border-destructive focus-visible:ring-destructive')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? emailErrorId : undefined}
                    aria-required="true"
                    autoComplete="email"
                  />
                  <ErrorMessage id={emailErrorId} message={errors.email} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm">
                    {t.contact.form.company} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Sua Empresa S.A."
                    className={cn("h-9", errors.company && 'border-destructive focus-visible:ring-destructive')}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? companyErrorId : undefined}
                    aria-required="true"
                    autoComplete="organization"
                  />
                  <ErrorMessage id={companyErrorId} message={errors.company} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="kpi" className="text-sm">
                    {t.contact.form.kpi} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Select value={formData.kpi} onValueChange={handleKpiChange}>
                    <SelectTrigger 
                      id="kpi"
                      className={cn("h-9", errors.kpi && 'border-destructive focus-visible:ring-destructive')}
                      aria-invalid={!!errors.kpi}
                      aria-describedby={errors.kpi ? kpiErrorId : undefined}
                      aria-required="true"
                    >
                      <SelectValue placeholder={language === 'pt' ? 'Selecione...' : 'Select...'} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {kpiOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage id={kpiErrorId} message={errors.kpi} />
                </div>
              </div>

              {/* State and City Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="state" className="text-sm">
                    {language === 'pt' ? 'Estado' : 'State'} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Select value={formData.state} onValueChange={handleStateChange}>
                    <SelectTrigger 
                      id="state"
                      className={cn("h-9", errors.state && 'border-destructive focus-visible:ring-destructive')}
                      aria-invalid={!!errors.state}
                      aria-describedby={errors.state ? stateErrorId : undefined}
                      aria-required="true"
                    >
                      <SelectValue placeholder={language === 'pt' ? 'Selecione o estado...' : 'Select state...'} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50 max-h-60">
                      {brazilianStates.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage id={stateErrorId} message={errors.state} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city" className="text-sm">
                    {language === 'pt' ? 'Cidade' : 'City'} <span aria-hidden="true">*</span>
                    <span className="sr-only">(obrigatório)</span>
                  </Label>
                  <Select 
                    value={formData.city} 
                    onValueChange={handleCityChange}
                    disabled={!formData.state}
                  >
                    <SelectTrigger 
                      id="city"
                      className={cn("h-9", errors.city && 'border-destructive focus-visible:ring-destructive')}
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? cityErrorId : undefined}
                      aria-required="true"
                    >
                      <SelectValue placeholder={
                        !formData.state 
                          ? (language === 'pt' ? 'Selecione o estado primeiro' : 'Select state first')
                          : (language === 'pt' ? 'Selecione a cidade...' : 'Select city...')
                      } />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50 max-h-60">
                      {availableCities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <ErrorMessage id={cityErrorId} message={errors.city} />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm">
                  {t.contact.form.message} <span aria-hidden="true">*</span>
                  <span className="sr-only">(obrigatório)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  placeholder={language === 'pt' ? 'Descreva seu projeto ou desafio...' : 'Describe your project or challenge...'}
                  className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? messageErrorId : undefined}
                  aria-required="true"
                />
                <ErrorMessage id={messageErrorId} message={errors.message} />
              </div>

              <Button 
                type="submit" 
                className="w-full h-10" 
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>{t.contact.form.sending}</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span>{language === 'pt' ? 'Enviado!' : 'Sent!'}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.form.submit}</span>
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {language === 'pt' ? 'Seus dados estão protegidos conforme LGPD.' : 'Your data is protected under LGPD.'}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Schema.org ContactPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contato - Depirai",
          "description": t.contact.subtitle,
          "url": "https://depirai.com/#contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Depirai",
            "email": "contato@depirai.com",
            "telephone": "+55-42-98891-1463",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Piraí do Sul",
              "addressRegion": "PR",
              "addressCountry": "BR"
            }
          }
        })
      }} />
    </section>
  );
}
