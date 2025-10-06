import { Link } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';

const FullWidthCTA = () => {
  const { trackCTAClick } = useAnalytics();
  
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container-max text-center relative z-10">
        <h2 className="text-heading-1 mb-8">
          Your next 90 days could be your breakthrough. Let's map it out.
        </h2>
        <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
          Stop chasing quick fixes. Start building the growth infrastructure that transforms chaos into predictable client acquisition.
        </p>
        <Link 
          to="/book" 
          onClick={() => trackCTAClick('book_consultation', 'full_width_cta')}
          className="btn-accent shadow-glow hover:scale-105 transition-all duration-300"
          data-cta="primary" 
          data-entity="full-width-cta"
        >
          Book My Consultation
        </Link>
      </div>
    </section>
  );
};

export default FullWidthCTA;