import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
  decimals?: number;
}

export function useCountUp({ 
  end, 
  duration = 2000, 
  startOnMount = false,
  decimals = 0 
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const hasStarted = useRef(false);

  const start = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    
    const startTime = performance.now();
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (end - startValue) * easeOut;
      setCount(Number(currentValue.toFixed(decimals)));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsComplete(true);
      }
    };
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount]);

  return { count, start, isComplete };
}
