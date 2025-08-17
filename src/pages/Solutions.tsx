import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart3, ArrowRight, Mic } from 'lucide-react';

const Solutions = () => {
  const systems = [
    {
      icon: TrendingUp,
      title: 'Lead Generation Engine',
      description: 'Websites, funnels, ads, SEO, automation — everything you need to attract and capture high-quality leads consistently.',
      features: ['High-converting landing pages', 'Multi-channel ad campaigns', 'SEO optimization', 'Lead scoring & qualification']
    },
    {
      icon: Users,
      title: 'Client Engagement System',
      description: 'CRM, email/SMS nurturing, appointment automation — turn leads into loyal clients with systematic engagement.',
      features: ['Advanced CRM setup', 'Automated nurture sequences', 'Appointment booking', 'Client communication flows']
    },
    {
      icon: BarChart3,
      title: 'Scaling Infrastructure',
      description: 'Analytics, reporting, process automation — the backbone that supports sustainable, predictable growth.',
      features: ['Custom dashboards', 'Performance tracking', 'Process automation', 'Growth forecasting']
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            We Don't Sell Services. We Build Growth Engines.
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-12">
            Stop patching problems with quick fixes. Start building the integrated systems that transform chaos into predictable client acquisition and sustainable growth.
          </p>
          <div className="inline-flex items-center gap-4 bg-white rounded-xl p-6 shadow-premium">
            <div className="text-2xl font-bold text-primary">Outcome:</div>
            <div className="text-xl text-muted-foreground">More clients. Less chaos. Predictable revenue.</div>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <div 
                key={system.title}
                className="group relative overflow-hidden"
              >
                <div className="card-hover-lift h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <system.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-heading-3">{system.title}</h3>
                  </div>
                  
                  <p className="text-body-large mb-8">{system.description}</p>
                  
                  <div className="space-y-3">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Integration Callout */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="card-premium bg-gradient-to-br from-white to-muted/50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="badge-new">Built by Us</div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Mic className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-heading-3">Voice-to-Proposal</h3>
                    <div className="text-sm text-muted-foreground">Streamline proposal creation</div>
                  </div>
                </div>
                
                <p className="text-body-large mb-6">
                  Voice-to-Proposal streamlines proposal creation for faster deal cycles. 
                  Speak your brief, get a structured, branded proposal in minutes — not days.
                </p>
                
                <Link 
                  to="/products/voice-to-proposal"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
                >
                  Learn more about Voice-to-Proposal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="flex-1 lg:text-right">
                <div className="bg-white rounded-xl p-6 shadow-premium-md">
                  <div className="text-3xl font-bold text-primary mb-2">5x</div>
                  <div className="text-lg font-semibold mb-2">Faster Proposals</div>
                  <div className="text-muted-foreground">From days to minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Let's Design Your Growth Engine
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Every business is unique. That's why we start with a comprehensive audit of your current systems, identify the bottlenecks, and design a custom growth infrastructure that scales with your ambitions.
          </p>
          <Link 
            to="/book" 
            className="btn-accent shadow-glow hover:scale-105 transition-all duration-300"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;