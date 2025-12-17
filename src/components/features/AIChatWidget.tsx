import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-open after 5 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: t.chat.greeting,
        },
      ]);
    }
  }, [isOpen, t.chat.greeting]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (requires Cloud for real Gemini integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const aiResponse = generateDemoResponse(userMessage.content);
    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
      },
    ]);
    setIsLoading(false);
  };

  const generateDemoResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('tco') || input.includes('custo')) {
      return 'Excelente pergunta! Na Depirai, já ajudamos empresas como o Grupo MSSG a reduzir o TCO em até 40%. Nosso approach inclui otimização de licenças, automação e migração para arquiteturas mais eficientes. Posso agendar uma consultoria gratuita para analisarmos seu cenário?';
    }
    
    if (input.includes('power bi') || input.includes('dados') || input.includes('dashboard')) {
      return 'Power BI é uma das nossas especialidades! O Emerson Vieira, nosso Head de Dados, tem mais de 10 anos de experiência em projetos de BI enterprise. Desenvolvemos dashboards com governança, ETL automatizado e integração com diversas fontes. Qual é o principal desafio de dados da sua empresa?';
    }
    
    if (input.includes('infraestrutura') || input.includes('linux') || input.includes('servidor')) {
      return 'Infraestrutura Linux HA é o core da Depirai! Diego C. Moreira, nosso Head de Infra, possui certificações Red Hat e AWS. Implementamos clusters de alta disponibilidade com uptime de 99.99%. Você está enfrentando problemas de disponibilidade ou performance?';
    }
    
    if (input.includes('consultoria') || input.includes('agendar') || input.includes('reunião')) {
      return 'Ótimo! Vou direcionar você para o formulário de contato onde pode escolher o melhor horário. A consultoria inicial é gratuita e dura cerca de 30 minutos. Clique no botão "Contato" no menu para agendar!';
    }

    return 'Interessante! Como consultor da Depirai, posso ajudar com redução de TCO em infraestrutura Linux ou implementação de soluções de dados com Power BI. Qual desses temas é mais relevante para sua empresa?';
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Abrir chat com O Designer"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-card-hover border border-border overflow-hidden transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[500px] max-h-[calc(100vh-100px)]'
      }`}
      role="dialog"
      aria-label="Chat com O Designer"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm">
              {t.chat.title}
            </h3>
            <p className="text-xs text-muted-foreground">{t.chat.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? 'Expandir chat' : 'Minimizar chat'}
          >
            <div className="w-3 h-0.5 bg-current" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[360px]" role="log" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">{t.chat.thinking}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chat.placeholder}
                disabled={isLoading}
                className="flex-1"
                aria-label="Mensagem"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Powered by Gemini AI
            </p>
          </form>
        </>
      )}
    </div>
  );
}
