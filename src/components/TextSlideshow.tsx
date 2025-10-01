import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TextSlideshowProps {
  items: string[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const TextSlideshow = ({ 
  items, 
  autoPlay = true, 
  interval = 3000,
  className = ''
}: TextSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Current Item */}
      <div className="min-h-[60px] flex items-center">
        <div 
          key={currentIndex}
          className="flex items-start gap-3 animate-fade-in"
        >
          <ChevronRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <p className="text-xl lg:text-2xl text-foreground/90">
            {items[currentIndex]}
          </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-accent' 
                : 'w-4 bg-border hover:bg-accent/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons (optional) */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={goToNext}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default TextSlideshow;
