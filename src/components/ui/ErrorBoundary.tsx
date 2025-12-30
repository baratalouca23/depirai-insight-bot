import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="relative mx-auto w-20 h-20">
              <div className="absolute inset-0 bg-destructive/20 rounded-full animate-ping" />
              <div className="relative w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                Algo deu errado
              </h2>
              <p className="text-muted-foreground text-sm">
                Ocorreu um erro inesperado. Tente recarregar a página ou voltar ao início.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-muted/50 rounded-lg p-4">
                <summary className="cursor-pointer text-sm font-medium text-foreground">
                  Detalhes do erro
                </summary>
                <pre className="mt-2 text-xs text-muted-foreground overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleRetry} variant="default" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                Tentar novamente
              </Button>
              <Button onClick={this.handleGoHome} variant="outline" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Voltar ao início
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Compact inline error fallback
export function InlineError({ message, onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="flex items-center justify-center p-6 rounded-lg bg-destructive/5 border border-destructive/20">
      <div className="flex flex-col items-center gap-3 text-center">
        <AlertTriangle className="h-6 w-6 text-destructive" />
        <p className="text-sm text-muted-foreground">
          {message || 'Erro ao carregar conteúdo'}
        </p>
        {onRetry && (
          <Button onClick={onRetry} variant="ghost" size="sm">
            <RefreshCw className="mr-2 h-3 w-3" />
            Tentar novamente
          </Button>
        )}
      </div>
    </div>
  );
}
