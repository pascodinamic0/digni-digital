import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield } from 'lucide-react';

const Book = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Strategic Audit',
      description: 'We\'ll identify the top 3 bottlenecks holding back your growth'
    },
    {
      icon: Clock,
      title: '90-Day Roadmap',
      description: 'Walk away with a clear, actionable plan for the next 90 days'
    },
    {
      icon: Shield,
      title: 'No Pressure, No Pitch',
      description: 'This is about understanding your business, not selling you something'
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-heading-1 mb-8">
              Your Business, Transformed in 90 Days.
            </h1>
            <p className="text-subheading mb-12">
              Start with a free consultation. Walk away with clarity and a roadmap — no fluff, no pressure, just actionable insights that drive real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="card-premium text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-heading-3 mb-4">{benefit.title}</h3>
                <p className="text-body-large">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Form Info */}
              <div>
                <h2 className="text-heading-2 mb-8">
                  Book Your Free Strategy Session
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent-foreground">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Discovery Call (30 minutes)</h4>
                      <p className="text-muted-foreground">We'll understand your business, challenges, and growth goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent-foreground">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Strategic Analysis</h4>
                      <p className="text-muted-foreground">We'll identify key bottlenecks and opportunity areas.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent-foreground">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Custom Roadmap</h4>
                      <p className="text-muted-foreground">You'll receive a tailored 90-day action plan.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-accent/20">
                  <h4 className="font-semibold mb-4 text-primary">What to Expect</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Deep-dive into your current systems and processes</li>
                    <li>• Identification of your biggest growth blockers</li>
                    <li>• Custom recommendations based on your industry</li>
                    <li>• Clear next steps with timelines and priorities</li>
                    <li>• Optional discussion of how we can help implement</li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Embedded Booking Form */}
              <div className="card-premium bg-white">
                <div className="text-center mb-8">
                  <h3 className="text-heading-3 mb-4">Schedule Your Session</h3>
                  <p className="text-muted-foreground">Choose a time that works best for you</p>
                </div>

                {/* Placeholder for GoHighLevel booking form */}
                <div className="bg-gradient-subtle rounded-xl p-12 text-center border border-border">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Booking Form Integration</h4>
                  <p className="text-muted-foreground mb-6">
                    This section will contain the embedded GoHighLevel booking form for seamless appointment scheduling.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground italic">
                      [GoHighLevel Booking Widget will be embedded here]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-heading-3 mb-8">Trusted by Leaders Across Industries</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Businesses Transformed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <div className="text-3xl font-bold text-emerald mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h4 className="font-semibold mb-4 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-emerald" />
                Your Privacy is Protected
              </h4>
              <p className="text-sm text-muted-foreground">
                All consultation discussions are confidential. We respect your business privacy 
                and will never share your information without explicit permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Prefer to Try a Product First?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Not ready for a full consultation? Start by exploring our products and see 
            the kind of solutions we build to eliminate business friction.
          </p>
          <Link 
            to="/products" 
            className="btn-accent shadow-glow hover:scale-105 transition-all duration-300"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Book;