import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail, ChevronRight } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export default function TermosPage() {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-foreground font-medium">Termos de Serviço</li>
            </ol>
          </nav>

          {/* Header */}
          <div 
            ref={heroRef}
            className={cn(
              "mb-12 transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <FileText className="h-4 w-4" />
              Legal
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Termos de Serviço
            </h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: Dezembro 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section className="card-minimal animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e utilizar os serviços da Depirai, você concorda com estes Termos de Serviço. 
                  Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
                </p>
              </section>

              <section className="card-minimal animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Depirai oferece serviços de consultoria e desenvolvimento em Tecnologia da Informação, incluindo:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Infraestrutura Linux HA
                  </li>
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Desenvolvimento Web
                  </li>
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Consultoria TCO
                  </li>
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Segurança LGPD
                  </li>
                  <li className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cloud & DevOps
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Condições Comerciais</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.1 Orçamentos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Todos os orçamentos são válidos por 30 dias, salvo indicação contrária. 
                      Os valores podem variar de acordo com a complexidade e escopo do projeto.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.2 Pagamento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As condições de pagamento são definidas em contrato específico para cada projeto. 
                      Aceitamos transferência bancária, PIX e boleto bancário.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.3 Prazos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Os prazos de entrega são estimados e podem variar conforme a complexidade do projeto. 
                      Alterações de escopo podem impactar o cronograma acordado.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Obrigações do Cliente</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">O cliente se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Disponibilizar acessos e recursos necessários para execução dos serviços</li>
                  <li>Realizar pagamentos conforme acordado em contrato</li>
                  <li>Comunicar alterações de escopo com antecedência</li>
                  <li>Validar entregas dentro dos prazos estabelecidos</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Obrigações da Depirai</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">A Depirai se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Executar os serviços com diligência e profissionalismo</li>
                  <li>Manter sigilo sobre informações confidenciais do cliente</li>
                  <li>Comunicar proativamente sobre o andamento dos projetos</li>
                  <li>Oferecer suporte técnico durante o período contratado</li>
                  <li>Entregar documentação dos trabalhos realizados</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Após quitação integral do projeto, o cliente detém os direitos sobre os entregáveis 
                  desenvolvidos especificamente para seu projeto. Ferramentas, frameworks e componentes 
                  reutilizáveis permanecem de propriedade da Depirai.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Confidencialidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ambas as partes concordam em manter sigilo sobre informações confidenciais compartilhadas 
                  durante a execução dos serviços, incluindo dados técnicos, comerciais e estratégicos, 
                  pelo período de 5 (cinco) anos após o término do contrato.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Garantia e Suporte</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os serviços incluem garantia de 90 dias para correção de bugs nos entregáveis. 
                  Suporte adicional, melhorias e novas funcionalidades são cobrados separadamente.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Depirai não se responsabiliza por danos indiretos, lucros cessantes ou perdas 
                  consequenciais. Nossa responsabilidade está limitada ao valor total pago pelo 
                  serviço contratado.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Rescisão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qualquer parte pode rescindir o contrato mediante aviso prévio de 30 dias. 
                  Em caso de rescisão, serão devidos os valores proporcionais aos serviços já executados.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Foro</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fica eleito o foro da Comarca de Piraí do Sul - PR para dirimir quaisquer 
                  controvérsias decorrentes destes termos.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">12. Contato</h2>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">Depirai - Engenharia de Receita & Infraestrutura TI</p>
                  <p className="text-muted-foreground text-sm mb-4">Piraí do Sul - PR</p>
                  <a 
                    href="mailto:contato@depirai.com" 
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    contato@depirai.com
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
