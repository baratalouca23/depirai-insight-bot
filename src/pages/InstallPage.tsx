import React from 'react';
import { Download, Share, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWAInstall, isIOS, isPWA } from '@/hooks/usePWAInstall';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InstallPage() {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const { t } = useLanguage();
  const isIOSDevice = isIOS();
  const isRunningAsPWA = isPWA();

  const handleInstall = async () => {
    await install();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-primary/10 flex items-center justify-center">
            <Smartphone className="w-12 h-12 text-primary" />
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Instalar Depirai
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8">
            Acesse nosso app diretamente da sua tela inicial, mesmo offline.
          </p>

          {/* Status Card */}
          <div className="card-minimal mb-8">
            {isRunningAsPWA || isInstalled ? (
              <div className="flex flex-col items-center gap-4 py-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <div>
                  <h2 className="font-semibold text-xl text-foreground mb-2">
                    App já instalado!
                  </h2>
                  <p className="text-muted-foreground">
                    Você está usando o Depirai como aplicativo.
                  </p>
                </div>
              </div>
            ) : isIOSDevice ? (
              <div className="text-left space-y-4">
                <h2 className="font-semibold text-xl text-foreground flex items-center gap-2">
                  <Share className="w-5 h-5 text-primary" />
                  Como instalar no iPhone/iPad
                </h2>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                    <span>Toque no botão <strong>Compartilhar</strong> (ícone de quadrado com seta) na barra do Safari</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                    <span>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                    <span>Confirme tocando em <strong>"Adicionar"</strong></span>
                  </li>
                </ol>
              </div>
            ) : isInstallable ? (
              <div className="flex flex-col items-center gap-6 py-4">
                <Download className="w-16 h-16 text-primary animate-bounce-subtle" />
                <div>
                  <h2 className="font-semibold text-xl text-foreground mb-2">
                    Pronto para instalar
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Adicione o Depirai à sua tela inicial para acesso rápido.
                  </p>
                  <Button size="lg" onClick={handleInstall} className="btn-glow">
                    <Download className="w-5 h-5 mr-2" />
                    Instalar Agora
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-left space-y-4">
                <h2 className="font-semibold text-xl text-foreground">
                  Instalação disponível no navegador
                </h2>
                <p className="text-muted-foreground">
                  Para instalar, acesse este site pelo navegador Chrome ou Edge no seu dispositivo móvel ou computador.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Dica:</strong> No Chrome, clique no ícone de instalação (⊕) na barra de endereço.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              { title: 'Acesso Rápido', desc: 'Um toque para abrir direto da tela inicial' },
              { title: 'Funciona Offline', desc: 'Acesse conteúdo mesmo sem internet' },
              { title: 'Notificações', desc: 'Receba atualizações importantes' },
            ].map((benefit, i) => (
              <div key={i} className="card-minimal p-4">
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
