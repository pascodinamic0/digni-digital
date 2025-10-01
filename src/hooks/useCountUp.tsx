import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = ''
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            
            const startTime = Date.now();
            const range = end - start;

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              
              const currentCount = start + range * easeOutExpo;
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, start, hasStarted]);

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count: formattedCount, ref: elementRef };
};
