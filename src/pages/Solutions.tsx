import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Link } from 'react-router-dom';
import { Rocket, Settings, Users, Search, Wrench, TrendingUp, CheckCircle } from 'lucide-react';

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
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Business Transformation & Growth Infrastructure",
          "provider": {
            "@type": "Organization",
            "name": "Digni Digital LLC"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Transformation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lead Generation & Growth",
                  "description": "End-to-end lead generation infrastructure"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Operational Efficiency",
                  "description": "CRM implementation, workflow automation, and process optimization"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Customer Experience Transformation",
                  "description": "Journey mapping, messaging automation, and retention systems"
                }
              }
            ]
          }
        }}
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

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-1 mb-6 scroll-reveal">
              Comprehensive Growth Infrastructure
            </h2>
            <p className="text-subheading max-w-3xl mx-auto scroll-reveal">
              We don't just fix problems. We build complete systems that transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Rocket,
                title: "Lead Generation & Growth",
                problem: "Struggling to attract quality leads consistently?",
                solution: "We build comprehensive lead generation engines: optimized websites, conversion funnels, targeted advertising, and SEO strategies.",
                impact: "Predictable pipeline of qualified prospects flowing into your business every month."
              },
              {
                icon: Settings,
                title: "Operational Efficiency",
                problem: "Manual processes eating up your team's time?",
                solution: "Custom CRM systems, automated workflows, seamless integrations, and real-time analytics dashboards.",
                impact: "10x productivity increase and error-free operations that scale with your growth."
              },
              {
                icon: Users,
                title: "Customer Experience Transformation",
                problem: "Losing clients due to poor experience?",
                solution: "End-to-end customer journey mapping, personalized messaging systems, and retention automation.",
                impact: "Higher customer satisfaction, increased lifetime value, and powerful referral engines."
              }
            ].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  className="relative group overflow-hidden bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-medium text-destructive">Problem:</span>
                        <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.problem}</p>
                      </div>
                      
                      <div>
                        <span className="font-medium text-primary">Solution:</span>
                        <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.solution}</p>
                      </div>
                      
                      <div>
                        <span className="font-medium text-success">Impact:</span>
                        <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Step Process */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-4">Our Proven Process</h2>
            <p className="text-body-large max-w-2xl mx-auto text-muted-foreground">
              From diagnosis to transformation and ongoing optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Diagnose',
                description: 'Strategic audit reveals hidden opportunities and bottlenecks limiting growth.'
              },
              {
                icon: Wrench,
                title: 'Transform',
                description: 'Custom systems implementation with hands-on change management.'
              },
              {
                icon: TrendingUp,
                title: 'Scale',
                description: 'Ongoing optimization and strategic partnership for sustainable growth.'
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="relative group overflow-hidden bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-heading-3 mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="text-body-large text-muted-foreground group-hover:text-foreground transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-2 mb-6">Partnership, Not Projects</h2>
              <p className="text-body-large mb-8 text-muted-foreground">
                We don't disappear after launch. We become your long-term growth partner, 
                continuously optimizing and evolving your systems as your business scales.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "White-Glove Service",
                    description: "Dedicated team treating your business like our own"
                  },
                  {
                    title: "Deep Integration",
                    description: "We learn your industry, customers, and competitive landscape"
                  },
                  {
                    title: "Proactive Optimization",
                    description: "Continuous improvement based on data and market changes"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-heading-3 mb-6">Partnership Outcomes</h3>
              <ul className="space-y-4">
                {[
                  "65% average revenue increase within 12 months",
                  "3x improvement in lead conversion rates",
                  "50% reduction in operational overhead",
                  "95% client retention and satisfaction",
                  "Predictable, scalable growth infrastructure"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link to="/case-studies" className="btn-primary mt-8 w-full">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="container-max text-center relative z-10">
          <h2 className="text-heading-1 mb-8">
            Ready to Build Your Growth Engine?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Stop chasing quick fixes. Start building the growth infrastructure that transforms chaos into predictable success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/book" className="btn-accent shadow-glow hover:scale-105 transition-all duration-300">
              Book a Strategy Session
            </Link>
            <Link to="/case-studies" className="btn-secondary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;