import { Link } from 'react-router-dom';
import { Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

const PartnershipApproach = () => {
  const approaches = [
    {
      icon: Shield,
      title: 'White-Glove Service',
      description: 'Dedicated account management with direct access to our senior team. Your success is our priority.'
    },
    {
      icon: Users,
      title: 'Deep Integration',
      description: 'We embed with your team, understand your culture, and adapt our approach to your unique needs.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Partnership',
      description: 'Not just projects. Sustainable growth partnerships that evolve with your business.'
    }
  ];

  const outcomes = [
    'Average 3x revenue growth within 12 months',
    '90% reduction in operational bottlenecks',
    '5x faster proposal-to-close cycles',
    '100% client retention on strategic partnerships'
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-heading-2 mb-8">
              Partnership, Not Projects
            </h2>
            <p className="text-body-large mb-8">
              We don't just deliver solutions and disappear. We partner with high-performing organizations for the long haul, ensuring sustainable growth through strategic systems and ongoing optimization.
            </p>
            
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div 
                  key={approach.title}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <approach.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{approach.title}</h4>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link 
                to="/about" 
                className="btn-secondary"
              >
                Learn About Our Approach
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="card-premium bg-white relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-heading-3 mb-4">Partnership Outcomes</h3>
                <p className="text-muted-foreground">Results from our strategic partnerships</p>
              </div>
              
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link 
                  to="/case-studies" 
                  className="text-accent hover:text-accent-dark font-semibold transition-colors"
                >
                  View Case Studies →
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipApproach;