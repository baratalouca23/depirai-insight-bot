import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MapPin, Mail, MessageCircle, Clock } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { AnimatedSection } from '@/components/features/AnimatedSection';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const services = [
  { value: 'fullstack', label: 'Desenvolvimento Fullstack' },
  { value: 'servers', label: 'Servidores Linux HA' },
  { value: 'email', label: 'Servidores de Email' },
  { value: 'bi', label: 'Power BI & Dashboards' },
  { value: 'security', label: 'Segurança & Hardening' },
  { value: 'database', label: 'Banco de Dados' },
  { value: 'cloud', label: 'Cloud & DevOps' },
  { value: 'automation', label: 'Automação TI' },
  { value: 'consulting', label: 'Consultoria TCO' },
];

const whatsappContacts = [
  { name: 'Emerson', phone: '5542988911463', display: '(42) 98891-1463', focus: 'BI & Dados' },
  { name: 'Diego', phone: '5542999814284', display: '(42) 99981-4284', focus: 'Infraestrutura' },
];

export default function ContatoPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: '✅ Mensagem enviada!',
      description: 'Entraremos em contato em até 24h.',
    });

    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Breadcrumbs />

          {/* Header */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t.contact.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-muted-foreground">Piraí do Sul - PR</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:contato@depirai.com" className="text-primary hover:underline">
                      contato@depirai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Atendimento</p>
                    <p className="text-muted-foreground">Seg-Sex: 8h às 18h | Atendemos Brasil remoto</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Buttons */}
              <div className="mb-8">
                <p className="text-sm font-medium text-foreground mb-3">Fale direto pelo WhatsApp:</p>
                <div className="space-y-3">
                  {whatsappContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`https://wa.me/${contact.phone}?text=Olá ${contact.name}, vim pelo site Depirai!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5" />
                        <span>{contact.name}</span>
                        <span className="text-green-200 text-sm">({contact.focus})</span>
                      </div>
                      <span className="text-sm">{contact.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground mb-4">Tecnologias que dominamos:</p>
                <div className="flex flex-wrap gap-2">
                  {['Linux', 'AWS', 'Azure', 'Power BI', 'Kubernetes', 'Terraform', 'React', 'PostgreSQL'].map((tech) => (
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
              <h2 className="font-display text-xl font-bold text-foreground mb-6">
                Solicitar Orçamento
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
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
                    <Label htmlFor="email">Email *</Label>
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
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(42) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Sua Empresa S.A."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Serviço de Interesse *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
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

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
