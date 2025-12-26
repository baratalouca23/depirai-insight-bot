import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-border/20 backdrop-blur-sm" />
      
      {/* Progress bar with glow effect */}
      <div
        className="relative h-full bg-gradient-to-r from-primary via-primary/90 to-primary transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      >
        {/* Glow effect at the end */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-primary/60 blur-md rounded-full" />
        
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-50" />
      </div>
      
      {/* Progress indicator dot */}
      {progress > 2 && (
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50 transition-all duration-100"
          style={{ left: `calc(${progress}% - 6px)` }}
        >
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
        </div>
      )}
    </div>
  );
}
