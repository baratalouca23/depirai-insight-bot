import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Award, Server, BarChart3, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import diegoPhoto from '@/assets/diego.jpeg';
import emersonPhoto from '@/assets/emerson.jpeg';

const team = [
  {
    id: 'diego',
    image: diegoPhoto,
    linkedin: 'https://www.linkedin.com/in/diegocmoreira/',
    whatsapp: '5542999814284',
    certifications: ['Linux HA', 'Hardening', 'DevOps', 'Kubernetes', 'AWS'],
    experience: '16 anos',
    icon: Server,
    focus: 'TCO & Infraestrutura',
    location: 'Piraí do Sul - PR',
    timeline: [
      { year: '2009', event: 'Início carreira TI - Suporte Técnico' },
      { year: '2012', event: 'Especialização Linux Server' },
      { year: '2015', event: 'Liderança equipes multinacional' },
      { year: '2018', event: 'Arquiteto de Infraestrutura' },
      { year: '2022', event: 'Co-fundador Depirai' },
    ],
  },
  {
    id: 'emerson',
    image: emersonPhoto,
    linkedin: 'https://www.linkedin.com/in/emerson-rs-vieira/',
    whatsapp: '5542988911463',
    certifications: ['Power BI', 'LGPD', 'Excel Avançado', 'ETL', 'Governança'],
    experience: '15+ anos',
    icon: BarChart3,
    focus: 'BI & Governança',
    location: 'Piraí do Sul - PR',
    timeline: [
      { year: '2008', event: 'Início carreira TI - Suporte' },
      { year: '2013', event: 'Analista de Dados' },
      { year: '2017', event: 'Especialista Power BI' },
      { year: '2020', event: 'Certificação LGPD' },
      { year: '2022', event: 'Co-fundador Depirai' },
    ],
  },
];

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.about.title}
            </h1>
            <p className="text-lg text-primary font-semibold mb-2">{t.about.subtitle}</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{t.about.description}</p>
            
            {/* Combined Experience Counter */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">31+</span>
              <span className="text-muted-foreground">anos de experiência combinada</span>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member) => {
              const memberInfo = t.about.team[member.id as 'diego' | 'emerson'];
              const IconComponent = member.icon;
              
              return (
                <div
                  key={member.id}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={memberInfo.name}
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        {memberInfo.name}
                      </h2>
                      <p className="text-primary font-semibold">{memberInfo.role}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <MapPin className="h-4 w-4" />
                        {member.location}
                      </div>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mt-2">
                        {member.experience} experiência • {member.focus}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{memberInfo.bio}</p>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Certificações & Especialidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Trajetória</h4>
                    <div className="space-y-2">
                      {member.timeline.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <span className="text-primary font-bold w-12">{item.year}</span>
                          <span className="w-2 h-2 rounded-full bg-primary/50" />
                          <span className="text-muted-foreground">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                    <a
                      href={`https://wa.me/${member.whatsapp}?text=Olá ${memberInfo.name.split(' ')[0]}, vim pelo site Depirai!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all font-medium"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Company Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sobre a Depirai
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A Depirai nasceu da união de dois profissionais apaixonados por tecnologia, 
              com mais de 31 anos de experiência combinada em infraestrutura TI e Business Intelligence. 
              Nossa missão é democratizar o acesso a soluções de alta qualidade, 
              ajudando empresas de todos os tamanhos a reduzir custos (TCO) e aumentar sua eficiência operacional.
            </p>
            <Button asChild size="lg">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
