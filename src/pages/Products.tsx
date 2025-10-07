import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Link } from 'react-router-dom';
import { Mic, ExternalLink } from 'lucide-react';
import ExitIntentModal from '@/components/ExitIntentModal';

const Products = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('products', 'Products - Digni Digital LLC');
  }, [trackPageView]);

  return (
    <>
      <SEO 
        title="Products - Affordable, Scalable Tools That Remove Bottlenecks"
        description="Powerful SaaS tools for every stage of growth. From ProposalAgent to CRM Lite, we build solutions that solve real business problems."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Digni Digital Products",
          "description": "Business automation and productivity tools",
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "ProposalAgent",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "url": "https://www.voicetoproposal.ai"
            }
          ]
        }}
      />
      
      <ExitIntentModal enabled={true} />

      <section className="hero-section-enhanced !min-h-[70vh]">
        <div className="hero-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-[1]" />
        
        <div className="relative z-10 container-max text-center px-6">
          <h1 className="text-hero mb-6 bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent leading-tight">
            Affordable, scalable tools that remove bottlenecks instantly.
          </h1>
          <p className="text-subheading mb-8 max-w-3xl mx-auto text-foreground/90 leading-relaxed">
            Even if you can't hire us directly, you can still grow with our tools.
          </p>
          <a 
            href="https://www.voicetoproposal.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mx-auto w-fit"
          >
            Try ProposalAgent Free
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-muted/20">
        <div className="container-max space-y-12">
          {/* ProposalAgent Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-premium-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mic className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="badge-new shadow-glow">NEW</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    ProposalAgent
                  </h3>
                  <p className="text-xl text-accent font-semibold mb-4">
                    Speak. We structure. You send. Proposals in minutes, not days.
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    Transform your voice into professional, client-ready proposals instantly. No more hours of typing and formatting.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.voicetoproposal.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 shadow-glow group/btn"
                >
                  Try ProposalAgent 
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.voicetoproposal.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* OnePercent Daily Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-card border border-destructive/20 hover:border-destructive/40 transition-all duration-500 hover:shadow-premium-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-destructive to-warning rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-destructive-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="badge-new shadow-glow">NEW</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-destructive transition-colors">
                    OnePercent Daily
                  </h3>
                  <p className="text-xl text-destructive font-semibold mb-4">
                    Daily plans. Red flags. Real progress.
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    Stay on top of your projects with daily cutoff planning, red list tracking, and automated reporting.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Cutoff planning', 'Red list & SLAs', 'Auto reports', 'EN/FR', 'WhatsApp Ready'].map((feature) => (
                      <span key={feature} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground border border-border">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products/onepercent-daily" 
                  className="btn-primary flex items-center justify-center"
                >
                  Learn More
                </Link>
                <Link 
                  to="/products/onepercent-daily#pilot-signup" 
                  className="btn-secondary flex items-center justify-center"
                >
                  Start a 4-week pilot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;