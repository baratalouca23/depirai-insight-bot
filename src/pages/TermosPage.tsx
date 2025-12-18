import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="section-container max-w-4xl">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="font-display text-4xl font-bold text-foreground">
                Termos de Serviço
              </h1>
            </div>
            <p className="text-muted-foreground">
              Última atualização: Dezembro 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e utilizar os serviços da Depirai, você concorda com estes Termos de Serviço. 
                  Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Depirai oferece serviços de consultoria e desenvolvimento em Tecnologia da Informação, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Infraestrutura de servidores Linux (HA, hardening, monitoramento)</li>
                  <li>Business Intelligence e dashboards (Power BI, ETL)</li>
                  <li>Desenvolvimento web fullstack (React, PHP, Node.js)</li>
                  <li>Consultoria em redução de TCO e governança de TI</li>
                  <li>Segurança da informação e conformidade LGPD</li>
                  <li>Cloud computing e DevOps (AWS, Azure, Kubernetes)</li>
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
