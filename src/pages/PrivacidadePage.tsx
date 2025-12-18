import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export default function PrivacidadePage() {
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
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="font-display text-4xl font-bold text-foreground">
                Política de Privacidade
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
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Depirai, sediada em Piraí do Sul - PR, está comprometida em proteger sua privacidade. 
                  Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                  pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Dados Coletados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Coletamos as seguintes informações:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Dados de identificação:</strong> Nome, email, telefone, empresa</li>
                  <li><strong>Dados de navegação:</strong> IP, cookies, páginas visitadas</li>
                  <li><strong>Dados de comunicação:</strong> Mensagens enviadas via formulário ou chat</li>
                  <li><strong>Dados de uso:</strong> Interações com nossos serviços e conteúdos</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Finalidade do Tratamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Responder solicitações e fornecer orçamentos</li>
                  <li>Prestar serviços de consultoria e suporte técnico</li>
                  <li>Enviar comunicações relevantes sobre nossos serviços</li>
                  <li>Melhorar a experiência do usuário em nosso site</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Base Legal</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O tratamento de dados é realizado com base em: consentimento do titular, 
                  execução de contrato, cumprimento de obrigação legal, e legítimo interesse 
                  (quando não prejudica os direitos do titular).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>Prestadores de serviço essenciais (hospedagem, email)</li>
                  <li>Autoridades competentes, quando exigido por lei</li>
                  <li>Parceiros, mediante seu consentimento expresso</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Cookies e Tecnologias</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li><strong>Cookies essenciais:</strong> Funcionamento básico do site</li>
                  <li><strong>Cookies de análise:</strong> Google Analytics (anonimizado)</li>
                  <li><strong>Cookies de funcionalidade:</strong> Preferências de idioma e tema</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação</li>
                  <li>Revogar consentimento a qualquer momento</li>
                  <li>Solicitar portabilidade dos dados</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
                  criptografia SSL/TLS, controle de acesso, backups seguros e monitoramento contínuo.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas ou 
                  conforme exigido por lei. Após esse período, os dados são anonimizados ou excluídos.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Encarregado de Dados (DPO)</h2>
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">Emerson Vieira</p>
                  <p className="text-muted-foreground text-sm mb-4">Encarregado de Proteção de Dados</p>
                  <a 
                    href="mailto:contato@depirai.com" 
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    contato@depirai.com
                  </a>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">11. Alterações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente. 
                  Alterações significativas serão comunicadas através do site ou email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
