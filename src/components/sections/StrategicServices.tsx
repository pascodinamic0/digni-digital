import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

const StrategicServices = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Business Development',
      description: 'Strategic planning, market analysis, and growth roadmaps that turn vision into measurable results.',
      features: ['Strategic Planning', 'Market Analysis', 'Growth Roadmaps', 'Competitive Intelligence']
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'End-to-end system modernization that eliminates bottlenecks and accelerates growth.',
      features: ['System Integration', 'Process Automation', 'Digital Infrastructure', 'Change Management']
    },
    {
      icon: Users,
      title: 'Growth Infrastructure',
      description: 'Scalable systems for lead generation, client engagement, and revenue optimization.',
      features: ['Lead Generation Systems', 'CRM Implementation', 'Sales Automation', 'Performance Analytics']
    },
    {
      icon: BarChart3,
      title: 'Strategy Implementation',
      description: 'Turn strategic plans into operational excellence with hands-on implementation support.',
      features: ['Project Management', 'Team Training', 'KPI Tracking', 'Ongoing Optimization']
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 mb-6">
            We Don't Just Consult. We Transform Your Business
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Strategic partnership that goes beyond advice. We build, implement, and scale the systems that drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-hover-lift h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-heading-3 mb-4">{service.title}</h3>
                <p className="text-body-large mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/solutions" 
              className="btn-primary"
            >
              Explore Our Solutions
            </Link>
            <Link 
              to="/book" 
              className="btn-secondary"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;