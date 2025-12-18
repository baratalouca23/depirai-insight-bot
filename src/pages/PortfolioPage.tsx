import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Server, BarChart3 } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioCases } from '@/data/portfolio';

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'infra', label: 'Infraestrutura' },
  { id: 'data', label: 'BI & Dados' },
];

const responsibleMap: Record<string, string> = {
  mssg: 'Diego Moreira',
  'obra-facil': 'Emerson Vieira',
  'sistema-salao': 'Diego & Emerson',
  'sistema-imobiliario': 'Emerson Vieira',
  marketplace: 'Diego Moreira',
  'c2-rh': 'Emerson Vieira',
  'oseias-bomfim': 'Diego Moreira',
  'g7-eletrica': 'Emerson Vieira',
  sulmed: 'Diego Moreira',
};

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? portfolioCases 
    : portfolioCases.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.portfolio.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {item.category === 'infra' ? 'Infraestrutura' : 'BI & Dados'}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{item.description[language]}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.kpis.map((kpi, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-600 font-medium">
                        {kpi.label}: {kpi.value}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Por: <span className="text-primary font-medium">{responsibleMap[item.id] || 'Diego & Emerson'}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Quer resultados como esses?</h2>
            <p className="text-muted-foreground mb-6">Vamos conversar sobre como podemos transformar seu negócio</p>
            <Button asChild size="lg">
              <Link to="/contato">Iniciar Projeto</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
