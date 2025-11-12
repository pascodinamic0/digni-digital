import { Link } from 'react-router-dom';
import { Mic, ExternalLink, ArrowRight, Zap } from 'lucide-react';

const InnovationLab = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="badge-new mb-4">Innovation Lab</div>
          <h2 className="text-heading-2 mb-6">
            We Build The Tools We Use
          </h2>
          <p className="text-subheading max-w-2xl mx-auto">
            Our proprietary solutions are born from real client needs. Tested, refined, and proven in the field.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group overflow-hidden bg-gradient-to-br from-white to-muted/50 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="absolute top-4 left-4">
                <div className="badge-new">Featured</div>
              </div>
              
              <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Mic className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-heading-3 mb-1">Voice-to-Proposal</h3>
                      <div className="text-sm text-muted-foreground">AI-Powered Proposal Generation</div>
                    </div>
                  </div>
                  
                  <p className="text-body-large mb-6">
                    Speak your brief, get a structured, branded proposal in minutes. 
                    The same tool our team uses to accelerate client delivery.
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
                      Try It Free <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <div className="inline-flex flex-col gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-premium-md">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="text-2xl font-bold text-primary">5x</span>
                      </div>
                      <div className="text-lg font-semibold mb-1">Faster Proposals</div>
                      <div className="text-sm text-muted-foreground">Days to minutes</div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Used by 500+ professionals across 12 industries
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Waveform */}
            <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10">
              <div className="flex items-end justify-center h-full space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-accent rounded-t"
                    style={{
                      width: '3px',
                      height: `${15 + (i % 3) * 15}px`,
                      animation: `pulse 1.5s infinite ${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
          >
            View all solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;