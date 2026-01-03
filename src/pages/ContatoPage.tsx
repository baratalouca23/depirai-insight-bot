import React, { useState, useMemo } from 'react';
import { Send, MapPin, Mail, MessageCircle, Clock, Search } from 'lucide-react';
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
import { brazilianStates, getCitiesByState } from '@/data/brazilianCities';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  city: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  state: '',
  city: '',
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
  const [citySearch, setCitySearch] = useState('');

  // Filter cities by selected state and search term
  const filteredCities = useMemo(() => {
    if (!formData.state) return [];
    const cities = getCitiesByState(formData.state);
    if (!citySearch.trim()) return cities;
    return cities.filter(city => 
      city.label.toLowerCase().includes(citySearch.toLowerCase())
    );
  }, [formData.state, citySearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleStateChange = (value: string) => {
    setFormData((prev) => ({ ...prev, state: value, city: '' }));
    setCitySearch('');
  };

  const handleCityChange = (value: string) => {
    setFormData((prev) => ({ ...prev, city: value }));
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
            <header className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t.contact.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <section aria-labelledby="contact-info-title">
              <h2 id="contact-info-title" className="sr-only">Informações de contato</h2>
              
              {/* Contact Details */}
              <address className="not-italic space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-muted-foreground">Piraí do Sul - PR</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:contato@depirai.com" 
                      className="text-primary hover:underline focus-ring rounded"
                    >
                      contato@depirai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Atendimento</p>
                    <p className="text-muted-foreground">Seg-Sex: 8h às 18h | Atendemos Brasil remoto</p>
                  </div>
                </div>
              </address>

              {/* WhatsApp Buttons */}
              <div className="mb-8">
                <p className="text-sm font-medium text-foreground mb-3">Fale direto pelo WhatsApp:</p>
                <div className="space-y-3">
                  {whatsappContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(`Olá ${contact.name}, vim pelo site Depirai!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors focus-ring"
                      aria-label={`WhatsApp ${contact.name} - ${contact.focus}`}
                    >
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
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
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
                  {['Linux', 'AWS', 'Azure', 'Power BI', 'Kubernetes', 'Terraform', 'React', 'PostgreSQL'].map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 rounded-full bg-background text-sm font-medium text-foreground border border-border"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Form */}
            <section aria-labelledby="form-title">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 id="form-title" className="font-display text-xl font-bold text-foreground mb-6">
                  Solicitar Orçamento
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Formulário de orçamento">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome <span aria-hidden="true">*</span>
                        <span className="sr-only">(obrigatório)</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="João Silva"
                        autoComplete="name"
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span aria-hidden="true">*</span>
                        <span className="sr-only">(obrigatório)</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="joao@empresa.com"
                        autoComplete="email"
                        aria-required="true"
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
                        autoComplete="tel"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Empresa <span aria-hidden="true">*</span>
                        <span className="sr-only">(obrigatório)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Sua Empresa S.A."
                        autoComplete="organization"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* State and City Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Select value={formData.state} onValueChange={handleStateChange}>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Selecione o estado..." />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50 max-h-[300px]">
                          {brazilianStates.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Select 
                        value={formData.city} 
                        onValueChange={handleCityChange}
                        disabled={!formData.state}
                      >
                        <SelectTrigger id="city">
                          <SelectValue placeholder={formData.state ? "Selecione a cidade..." : "Selecione o estado primeiro"} />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border z-50 max-h-[300px]">
                          <div className="px-2 py-2 sticky top-0 bg-card">
                            <div className="relative">
                              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="Buscar cidade..."
                                value={citySearch}
                                onChange={(e) => setCitySearch(e.target.value)}
                                className="pl-8 h-8"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>
                          {filteredCities.length > 0 ? (
                            filteredCities.map((city) => (
                              <SelectItem key={city.value} value={city.value}>
                                {city.label}
                              </SelectItem>
                            ))
                          ) : (
                            <div className="px-2 py-4 text-center text-muted-foreground text-sm">
                              {citySearch ? 'Nenhuma cidade encontrada' : 'Nenhuma cidade disponível'}
                            </div>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Serviço de Interesse <span aria-hidden="true">*</span>
                      <span className="sr-only">(obrigatório)</span>
                    </Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger id="service" aria-required="true">
                        <SelectValue placeholder="Selecione um serviço..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Mensagem <span aria-hidden="true">*</span>
                      <span className="sr-only">(obrigatório)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Descreva seu projeto ou desafio..."
                      aria-required="true"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Schema.org ContactPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contato - Depirai",
          "description": t.contact.subtitle,
          "url": "https://depirai.com/contato",
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
    </div>
  );
}
