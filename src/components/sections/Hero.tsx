import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-abstract.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1
        }}
      />
      
      <div className="relative z-10 container-max text-center px-6">
        <div className="max-w-5xl mx-auto fade-in">
          <h1 className="text-hero mb-8 bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
            We Build Growth Infrastructures That Turn Chaos Into Clients.
          </h1>
          
          <p className="text-subheading mb-12 max-w-3xl mx-auto">
            Outdated systems, scattered tools, missed opportunities — gone. Digni Digital LLC transforms how you generate, engage, and convert clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/book" className="btn-primary-pulse">
              Book a Consultation
            </Link>
            <Link to="/products" className="btn-secondary">
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-emerald/10 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
    </section>
  );
};

export default Hero;