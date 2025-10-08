import { Link } from 'react-router-dom';
import { Mic, ArrowRight, ExternalLink, Clock, Zap, Shield } from 'lucide-react';

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-3 scroll-reveal">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">
            We don't just consult. We build SaaS that solves real problems.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto scroll-reveal">
            Powerful, affordable tools for every stage of growth.
          </p>
        </div>

        {/* Featured Product - Compact */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-primary/20 p-6 md:p-8 mb-6 group hover:border-primary/40 transition-all scroll-reveal">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 badge-new text-xs px-2 py-0.5">NEW</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">ProposalAgent</h3>
                  <p className="text-accent font-semibold text-sm mb-2">
                    Speak. We structure. You send. Proposals in minutes.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Turn voice notes into client-ready proposals with AI-powered structuring.
                  </p>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  <a 
                    href="https://www.voicetoproposal.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-4 py-2 flex items-center gap-1.5 whitespace-nowrap"
                    data-cta="primary" 
                    data-entity="products-preview"
                  >
                    Try Free
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://www.voicetoproposal.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 whitespace-nowrap"
                    data-cta="secondary" 
                    data-entity="products-preview"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">10x Faster</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">Brand Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon - Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card-premium p-4 scroll-reveal group hover:border-accent/30 transition-all">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-muted-foreground font-bold">C</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-1">CRM Lite</h4>
                <span className="badge-coming-soon text-xs px-2 py-0.5">SOON</span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Simple, powerful customer relationship management.
            </p>
          </div>

          <div className="card-premium p-4 scroll-reveal group hover:border-accent/30 transition-all">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-muted-foreground font-bold">I</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-1">Invoice AI</h4>
                <span className="badge-coming-soon text-xs px-2 py-0.5">SOON</span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Automated invoicing and payment tracking.
            </p>
          </div>

          <div className="card-premium p-4 scroll-reveal group hover:border-accent/30 transition-all">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-muted-foreground font-bold">S</span>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-foreground text-sm mb-1">Social Assistant</h4>
                <span className="badge-coming-soon text-xs px-2 py-0.5">SOON</span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              AI-powered social media management.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors scroll-reveal text-sm"
            data-cta="tertiary" 
            data-entity="products-preview"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-muted-foreground italic text-sm mt-4 scroll-reveal">
            "Even if you can't hire us directly, you can still grow with our tools."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;