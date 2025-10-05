import { Link } from 'react-router-dom';
import { Mic, ArrowRight, ExternalLink, Clock, Zap, Shield } from 'lucide-react';

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4 scroll-reveal">
            Our Products
          </div>
          <h2 className="text-heading-1 mb-6 scroll-reveal">
            We don't just consult — we build SaaS that solves real problems.
          </h2>
          <p className="text-subheading max-w-3xl mx-auto scroll-reveal">
            Powerful, affordable tools for every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Product: ProposalAgent */}
          <div className="lg:col-span-2">
            <div className="card-hover-lift bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 scroll-reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Mic className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">ProposalAgent</h3>
                    <span className="badge-new">NEW</span>
                  </div>
                  <p className="text-accent font-semibold">
                    Speak. We structure. You send. Proposals in minutes — not days.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Turn voice notes into client-ready proposals. Record your brief, we auto-structure it with problem definition, objectives, scope, timeline, and pricing — all branded and ready to send.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">10x Faster</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Brand Ready</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.voicetoproposal.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                  data-cta="primary" 
                  data-entity="products-preview"
                >
                  Try ProposalAgent
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.voicetoproposal.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  data-cta="secondary" 
                  data-entity="products-preview"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Coming Soon Products */}
          <div className="space-y-6">
            <div className="card-premium scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-lg">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">CRM Lite</h4>
                  <span className="badge-coming-soon">COMING SOON</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Simple, powerful customer relationship management for small businesses.
              </p>
            </div>

            <div className="card-premium scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-lg">I</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Invoice AI</h4>
                  <span className="badge-coming-soon">COMING SOON</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Automated invoicing and payment tracking that actually works.
              </p>
            </div>

            <div className="card-premium scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Social Assistant</h4>
                  <span className="badge-coming-soon">COMING SOON</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered social media management and content creation.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors scroll-reveal"
            data-cta="tertiary" 
            data-entity="products-preview"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground italic scroll-reveal">
              "Even if you can't hire us directly, you can still grow with our tools."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;