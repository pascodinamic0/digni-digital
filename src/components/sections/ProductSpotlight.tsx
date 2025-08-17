import { Link } from 'react-router-dom';
import { Mic, ExternalLink, ArrowRight, Building } from 'lucide-react';

const ProductSpotlight = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="badge-new mb-4">Our Products</div>
          <h2 className="text-heading-2 mb-6">
            We Don't Just Consult — We Build SaaS That Solves Real Problems.
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Meet the tools we use — and ship — to eliminate friction and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voice-to-Proposal - Primary Spotlight */}
          <div className="lg:col-span-1 card-hover-lift bg-gradient-to-br from-white to-muted/50 relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <div className="badge-new">NEW</div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mic className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-heading-3 mb-2">Voice-to-Proposal</h3>
                  <div className="text-sm text-muted-foreground">Transform voice to proposals</div>
                </div>
              </div>
              
              <p className="text-body-large mb-8">
                Speak. We structure. You send. Proposals in minutes — not days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products/voice-to-proposal" 
                  className="btn-secondary flex-1 justify-center"
                >
                  Learn More
                </Link>
                <a 
                  href="https://voice-to-proposal.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 justify-center"
                >
                  Open App <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Animated Waveform */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
              <div className="flex items-end justify-center h-full space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-accent rounded-t"
                    style={{
                      width: '4px',
                      height: `${20 + (i % 3) * 20}px`,
                      animation: `pulse 1.5s infinite ${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Immo-Connect - Coming Soon */}
          <div className="lg:col-span-1 card-premium relative overflow-hidden opacity-75">
            <div className="absolute top-4 left-4">
              <div className="badge-coming-soon">COMING SOON</div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-heading-3 mb-2 text-muted-foreground">Immo-Connect</h3>
                  <div className="text-sm text-muted-foreground">Property discovery platform</div>
                </div>
              </div>
              
              <p className="text-body-large mb-8 text-muted-foreground">
                A modern property discovery experience for emerging markets.
              </p>
              
              <div className="flex justify-center">
                <div className="px-8 py-3 bg-muted rounded-xl text-muted-foreground font-semibold">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;