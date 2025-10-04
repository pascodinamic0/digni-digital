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
              "url": "https://proposalagent.io"
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
            href="https://proposalagent.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mx-auto w-fit"
          >
            Try ProposalAgent Free
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-8">
          <div className="card-hover-lift bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                <Mic className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">ProposalAgent</h3>
                <p className="text-accent font-semibold">Speak. We structure. You send. Proposals in minutes — not days.</p>
              </div>
              <span className="badge-new">NEW</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://proposalagent.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Try ProposalAgent <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/products/proposalagent" className="btn-secondary">Learn More</Link>
            </div>
          </div>

          <div className="card-hover-lift bg-gradient-to-br from-destructive/5 to-warning/5 border-2 border-destructive/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-destructive rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-destructive-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">OnePercent Daily</h3>
                <p className="text-destructive font-semibold">Daily plans. Red flags. Real progress.</p>
              </div>
              <span className="badge-new">NEW</span>
            </div>
            <p className="text-muted-foreground mb-4">Cutoff planning · Red list & SLAs · Auto reports · EN/FR · WhatsApp Ready</p>
            <div className="flex gap-4">
              <Link to="/products/onepercent-daily" className="btn-primary">Learn More</Link>
              <Link to="/products/onepercent-daily#pilot-signup" className="btn-secondary">Start a 4-week pilot</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;