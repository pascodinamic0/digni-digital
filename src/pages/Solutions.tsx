import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Link } from 'react-router-dom';
import { Rocket, Settings, Users, Globe } from 'lucide-react';

const Solutions = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('solutions', 'Solutions - Digni Digital LLC');
  }, [trackPageView]);

  return (
    <>
      <SEO 
        title="Solutions - We Don't Sell Services. We Build Growth Engines."
        description="Transform your business with our comprehensive growth solutions: lead generation, operational efficiency, customer experience, and global expansion systems."
      />

      <section className="hero-section-enhanced !min-h-[70vh]">
        <div className="hero-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-[1]" />
        
        <div className="relative z-10 container-max text-center px-6">
          <h1 className="text-hero mb-6 bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent leading-tight">
            We Don't Sell Services. We Build Growth Engines.
          </h1>
          <p className="text-subheading mb-8 max-w-3xl mx-auto text-foreground/90 leading-relaxed">
            Systematic transformation that turns your biggest business challenges into your competitive advantages.
          </p>
          <Link to="/book" className="btn-primary">Start Your Transformation</Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-6">Ready to Build Your Growth Engine?</h2>
          <Link to="/book" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
};

export default Solutions;