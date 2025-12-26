import { useEffect, useState } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg transition-all duration-500 group",
        "bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50",
        "hover:shadow-xl hover:shadow-primary/20 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle
          className="text-border/50"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="24"
          cx="28"
          cy="28"
        />
        <circle
          className="text-primary transition-all duration-300"
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="24"
          cx="28"
          cy="28"
          style={{
            strokeDasharray: `${2 * Math.PI * 24}`,
            strokeDashoffset: `${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`,
          }}
        />
      </svg>
      
      {/* Icon with animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ChevronUp className="h-5 w-5 text-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5" />
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
    </button>
  );
}
