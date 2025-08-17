import { Link } from 'react-router-dom';
import { Users, Globe, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const differentiators = [
    {
      icon: Users,
      title: 'Partnership, Not Projects',
      description: 'Long-term growth, not one-offs. We become your strategic transformation partner.'
    },
    {
      icon: Award,
      title: 'Systems, Not Services',
      description: 'Infrastructure that scales. Every solution is built for sustainable, compound growth.'
    },
    {
      icon: Globe,
      title: 'Local Insight, Global Standards',
      description: 'Emerging market expertise combined with world-class delivery and innovation.'
    }
  ];

  const timeline = [
    {
      period: 'Past',
      title: '7+ Years of Transformation',
      description: 'Helped NGOs, SMBs, and entrepreneurs across Africa and beyond scale their impact through strategic digital infrastructure.'
    },
    {
      period: 'Present',
      title: 'Harvard-Trained Innovation',
      description: 'Currently advancing expertise in Entrepreneurship in Emerging Markets at Harvard, bringing cutting-edge insights to every project.'
    },
    {
      period: 'Future',
      title: 'Building the Next Generation',
      description: 'Developing SaaS solutions like Voice-to-Proposal that eliminate friction and accelerate growth for businesses worldwide.'
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            More Than Digital Services — We're Your Transformation Partner.
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-12">
            Founded on the belief that every business deserves growth infrastructure that works. 
            We combine African entrepreneurial spirit with Harvard-level strategic thinking to build systems that scale.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold text-primary mb-4">7+</div>
              <div className="text-xl font-semibold mb-2">Years of Impact</div>
              <div className="text-muted-foreground">Helping NGOs, SMBs, and entrepreneurs scale across Africa and emerging markets</div>
            </div>
            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-accent mb-4">Harvard</div>
              <div className="text-xl font-semibold mb-2">Trained Excellence</div>
              <div className="text-muted-foreground">Advanced training in Entrepreneurship in Emerging Markets</div>
            </div>
            <div className="fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-emerald mb-4">Global</div>
              <div className="text-xl font-semibold mb-2">Vision & Reach</div>
              <div className="text-muted-foreground">African roots, world-class standards, universal impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-subheading max-w-3xl mx-auto">
              We don't just deliver projects. We build relationships, systems, and long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={item.title}
                className="card-hover-lift text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-heading-3 mb-4">{item.title}</h3>
                <p className="text-body-large">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">
              Our Journey: Past, Present & Future
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-accent hidden lg:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={item.period}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="card-premium">
                      <div className="badge-accent mb-4">{item.period}</div>
                      <h3 className="text-heading-3 mb-4">{item.title}</h3>
                      <p className="text-body-large">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10 hidden lg:block" />

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Let's build the growth infrastructure that turns your biggest challenges into your greatest competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/case-studies" className="btn-accent">
              See Our Results <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/book" className="btn-secondary !text-primary-foreground !border-primary-foreground hover:!bg-primary-foreground hover:!text-primary">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;