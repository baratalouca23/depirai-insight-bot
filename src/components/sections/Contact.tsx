import React, { useState } from 'react';
import { Send, MapPin, Mail, Loader2, CheckCircle2 } from 'lucide-react';
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

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  company: z.string().trim().min(1, 'Empresa é obrigatória').max(100),
  kpi: z.string().min(1, 'Selecione um objetivo'),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000),
});

interface FormData {
  name: string;
  email: string;
  company: string;
  kpi: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  kpi?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  kpi: '',
  message: '',
};

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref: infoRef, isVisible: infoVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useIntersectionObserver({ threshold: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleKpiChange = (value: string) => {
    setFormData((prev) => ({ ...prev, kpi: value }));
    if (errors.kpi) {
      setErrors((prev) => ({ ...prev, kpi: undefined }));
    }
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
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Erro de validação',
        description: 'Por favor, corrija os campos destacados.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree (free form backend)
      const response = await fetch('https://formspree.io/f/xpwpvgqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          kpi: formData.kpi,
          message: formData.message,
          _subject: `Nova mensagem de ${formData.name} - ${formData.company}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: '✅ Mensagem enviada!',
          description: 'Entraremos em contato em breve.',
        });
        setFormData(initialFormData);
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Piraí do Sul - PR' },
    { icon: Mail, label: 'contato@depirai.com', href: 'mailto:contato@depirai.com' },
  ];

  const kpiOptions = [
    { value: 'tco', label: t.contact.form.kpiOptions.tco },
    { value: 'revenue', label: t.contact.form.kpiOptions.revenue },
    { value: 'data', label: t.contact.form.kpiOptions.data },
    { value: 'security', label: t.contact.form.kpiOptions.security },
    { value: 'other', label: t.contact.form.kpiOptions.other },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div 
            ref={infoRef}
            className={cn(
              "space-y-8 transition-all duration-700",
              infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Fale Conosco
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.contact.subtitle}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground hover:text-primary transition-colors font-medium">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="card-minimal">
              <TechLogos title="Tecnologias que utilizamos:" />
            </div>
          </div>

          {/* Form */}
          <div 
            ref={formRef}
            className={cn(
              "card-minimal bg-card transition-all duration-700 delay-200",
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">{t.contact.form.name} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">{t.contact.form.email} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joao@empresa.com"
                    className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">{t.contact.form.company} *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sua Empresa S.A."
                    className={errors.company ? 'border-destructive focus-visible:ring-destructive' : ''}
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kpi" className="text-sm font-medium">{t.contact.form.kpi} *</Label>
                  <Select value={formData.kpi} onValueChange={handleKpiChange}>
                    <SelectTrigger className={errors.kpi ? 'border-destructive focus:ring-destructive' : ''}>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      {kpiOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.kpi && <p className="text-xs text-destructive">{errors.kpi}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">{t.contact.form.message} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva seu projeto ou desafio..."
                  className={errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full btn-glow h-12 text-base font-medium" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Enviado!
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão protegidos e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
