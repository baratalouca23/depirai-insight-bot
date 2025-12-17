import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
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

interface FormData {
  name: string;
  email: string;
  company: string;
  kpi: string;
  message: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKpiChange = (value: string) => {
    setFormData((prev) => ({ ...prev, kpi: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (demo mode)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: '✅ ' + t.contact.form.success.split('!')[0] + '!',
      description: t.contact.form.success.split('!')[1]?.trim() || '',
    });

    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, label: 'São Paulo, Brasil' },
    { icon: Mail, label: 'contato@depirai.com' },
    { icon: Phone, label: '+55 (11) 99999-9999' },
  ];

  const kpiOptions = [
    { value: 'tco', label: t.contact.form.kpiOptions.tco },
    { value: 'revenue', label: t.contact.form.kpiOptions.revenue },
    { value: 'data', label: t.contact.form.kpiOptions.data },
    { value: 'security', label: t.contact.form.kpiOptions.security },
    { value: 'other', label: t.contact.form.kpiOptions.other },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t.contact.subtitle}</p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-10 p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground mb-4">Tecnologias que utilizamos:</p>
              <div className="flex flex-wrap gap-3">
                {['Linux', 'AWS', 'Azure', 'Power BI', 'Kubernetes', 'Terraform'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-background text-sm font-medium text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="joao@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">{t.contact.form.company}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Sua Empresa S.A."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kpi">{t.contact.form.kpi}</Label>
                  <Select value={formData.kpi} onValueChange={handleKpiChange}>
                    <SelectTrigger>
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
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Descreva seu projeto ou desafio..."
                />
              </div>

              <Button type="submit" className="w-full btn-glow" disabled={isSubmitting}>
                {isSubmitting ? (
                  t.contact.form.sending
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
