import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section-enhanced">
      {/* Enhanced Background with CSS */}
      <div className="hero-background" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-[1]" />
      
      {/* Content Container */}
      <div className="relative z-10 container-max text-center px-6">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Headline with Staggered Animation */}
          <h1 className="text-hero mb-6 bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent hero-headline animate-fade-in leading-tight">
            We Build Growth Infrastructures That Turn Chaos Into Clients.
          </h1>
          
          {/* Enhanced Subtext */}
          <p className="text-subheading mb-8 max-w-3xl mx-auto text-foreground/90 hero-subtext animate-fade-in leading-relaxed">
            Outdated systems, scattered tools, missed opportunities — gone. Digni Digital transforms how you generate, engage, and convert clients.
          </p>
          
          {/* Trust Indicator */}
          <div className="mb-12 hero-trust animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">Trusted by 50+ growth-focused businesses</p>
            <div className="flex justify-center items-center gap-2 opacity-60">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span className="text-xs text-muted-foreground">Strategic partnerships since 2019</span>
            </div>
          </div>
          
          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-ctas animate-fade-in">
            <Link 
              to="/book" 
              className="btn-primary-pulse group relative overflow-hidden"
              data-cta="primary" 
              data-entity="hero"
              aria-label="Book a consultation"
            >
              Book a Consultation
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
            <Link 
              to="/products" 
              className="btn-secondary group"
              data-cta="secondary" 
              data-entity="hero"
              aria-label="Explore our products"
            >
              Explore Our Products
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Purpose */}
      <div className="hero-floating-elements">
        <div className="floating-element floating-element-1 bg-gradient-to-br from-accent/20 to-primary/20" />
        <div className="floating-element floating-element-2 bg-gradient-to-br from-emerald/20 to-secondary/20" />
        <div className="floating-element floating-element-3 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="floating-element floating-element-4 bg-gradient-to-br from-secondary/20 to-emerald/20" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 scroll-indicator animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;