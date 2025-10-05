import { useEffect, useState } from 'react';
import { X, Sparkles, ExternalLink } from 'lucide-react';

interface ExitIntentModalProps {
  enabled?: boolean;
}

const ExitIntentModal = ({ enabled = true }: ExitIntentModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!enabled || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving through top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay before enabling exit intent to avoid annoying early triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds after page load

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card rounded-2xl shadow-premium-lg max-w-lg mx-4 p-8 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Headline */}
          <h3 className="text-heading-3 mb-4">
            Wait! Try ProposalAgent Free
          </h3>

          {/* Description */}
          <p className="text-body-large mb-6">
            Before you go, see how ProposalAgent can transform your proposal process. 
            <strong className="text-foreground"> Turn voice into client-ready proposals in minutes.</strong>
          </p>

          {/* Benefits */}
          <ul className="text-left text-sm space-y-2 mb-8 bg-muted rounded-xl p-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              <span>No credit card required to start</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              <span>Create your first proposal in under 5 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              <span>Industry templates for instant setup</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://proposalagent.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex-1 justify-center shadow-glow"
              data-cta="exit-intent-trial" 
              data-entity="products"
            >
              Try Free Now
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="btn-ghost flex-1 justify-center"
            >
              Maybe Later
            </button>
          </div>

          {/* Trust Note */}
          <p className="text-xs text-muted-foreground mt-6">
            Join hundreds of businesses already using ProposalAgent
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
