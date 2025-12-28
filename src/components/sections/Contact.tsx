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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div 
            ref={infoRef}
            className={cn(
              "space-y-6 transition-opacity duration-300",
              infoVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t.contact.title}
              </h2>
              <p className="text-muted-foreground">{t.contact.subtitle}</p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-foreground hover:text-primary transition-colors text-sm">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-foreground text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="p-4 rounded-lg border border-border bg-card">
              <TechLogos title="Tecnologias que utilizamos:" />
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">{t.contact.form.name} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    className={cn("h-9", errors.name && 'border-destructive')}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">{t.contact.form.email} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joao@empresa.com"
                    className={cn("h-9", errors.email && 'border-destructive')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm">{t.contact.form.company} *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sua Empresa S.A."
                    className={cn("h-9", errors.company && 'border-destructive')}
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="kpi" className="text-sm">{t.contact.form.kpi} *</Label>
                  <Select value={formData.kpi} onValueChange={handleKpiChange}>
                    <SelectTrigger className={cn("h-9", errors.kpi && 'border-destructive')}>
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

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm">{t.contact.form.message} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descreva seu projeto ou desafio..."
                  className={errors.message ? 'border-destructive' : ''}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full h-10" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Enviado!
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão protegidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
