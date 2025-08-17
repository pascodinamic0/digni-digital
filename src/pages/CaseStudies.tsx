import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const cases = [
    {
      title: 'Medical Practice Transformation',
      client: 'Dr. Sarah Mitchell\'s Family Clinic',
      industry: 'Healthcare',
      challenge: 'Losing 40% of leads due to slow follow-up and manual appointment scheduling',
      approach: [
        'Implemented automated CRM with intelligent lead scoring',
        'Set up SMS and email nurture sequences',
        'Integrated online appointment booking system',
        'Created patient portal for seamless communication'
      ],
      results: {
        leadRetention: '90%',
        revenueGrowth: '200%',
        timeToContact: '< 5 minutes',
        patientSatisfaction: '4.9/5'
      },
      timeline: '90 days',
      testimonial: 'Digni Digital transformed our practice completely. We went from chasing leads to being fully booked 3 months out.',
      featured: true
    },
    {
      title: 'Real Estate Agency Acceleration',
      client: 'Premier Properties LLC',
      industry: 'Real Estate',
      challenge: 'Proposals taking 3 days to create, causing deals to stall and competitors to win',
      approach: [
        'Implemented Voice-to-Proposal for instant property proposals',
        'Created automated lead qualification system',
        'Built custom property showcase funnels',
        'Integrated MLS data with CRM workflows'
      ],
      results: {
        proposalTime: '15 minutes',
        closingRate: '60% faster',
        dealVolume: '+150%',
        agentProductivity: '+300%'
      },
      timeline: '60 days',
      testimonial: 'Voice-to-Proposal alone changed our business. We can create professional proposals while still on the phone with clients.',
      featured: false
    },
    {
      title: 'Consulting Firm Scale-Up',
      client: 'Strategic Growth Partners',
      industry: 'Business Consulting',
      challenge: 'Manual reporting processes and no client performance insights',
      approach: [
        'Built custom analytics dashboard',
        'Automated client reporting workflows',
        'Implemented project management system',
        'Created predictive revenue modeling'
      ],
      results: {
        reportingTime: '5x faster',
        clientRetention: '95%',
        revenueVisibility: '12 months ahead',
        teamEfficiency: '+250%'
      },
      timeline: '120 days',
      testimonial: 'Now we spend time growing client businesses instead of managing spreadsheets. Our revenue became predictable.',
      featured: false
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            Proof That Transformation Works.
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-12">
            Real businesses. Real challenges. Real results. See how we've helped companies 
            transform their growth infrastructure and achieve breakthrough performance.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <div 
                key={index}
                className={`card-premium relative overflow-hidden ${
                  caseStudy.featured ? 'border-accent border-2' : ''
                }`}
              >
                {caseStudy.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="badge-new">Featured Case</div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Case Overview */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                        {caseStudy.industry}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {caseStudy.timeline}
                      </div>
                    </div>

                    <h3 className="text-heading-3 mb-4">{caseStudy.title}</h3>
                    <p className="text-lg font-semibold text-accent mb-6">{caseStudy.client}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-destructive">Challenge</h4>
                      <p className="text-body-large text-muted-foreground">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-primary">Our Approach</h4>
                      <ul className="space-y-2">
                        {caseStudy.approach.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="italic text-lg text-primary border-l-4 border-accent pl-6 mb-6">
                      "{caseStudy.testimonial}"
                    </blockquote>

                    <button
                      onClick={() => setSelectedCase(selectedCase === index ? null : index)}
                      className="btn-secondary"
                    >
                      {selectedCase === index ? 'Hide Full Details' : 'View Full Case Study'}
                    </button>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-muted/50 to-muted rounded-xl p-8">
                    <h4 className="font-semibold mb-6 text-success flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Results Achieved
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(caseStudy.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-2">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedCase === index && (
                  <div className="mt-12 pt-12 border-t border-border animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-semibold mb-6">Implementation Timeline</h4>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Week 1-2: Discovery & Strategy</div>
                              <div className="text-sm text-muted-foreground">Comprehensive audit and strategic planning</div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Week 3-6: System Build</div>
                              <div className="text-sm text-muted-foreground">Core infrastructure development</div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium">Week 7-12: Launch & Optimize</div>
                              <div className="text-sm text-muted-foreground">Go-live, training, and performance optimization</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-6">Key Success Factors</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-emerald" />
                            <span>Strong leadership buy-in and team engagement</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 text-emerald" />
                            <span>Data-driven approach to optimization</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-emerald" />
                            <span>Phased implementation for minimal disruption</span>
                          </div>
                        </div>

                        {caseStudy.title.includes('Real Estate') && (
                          <div className="mt-8 p-4 bg-white rounded-lg border border-accent/20">
                            <p className="text-sm text-muted-foreground mb-2">Success Story Highlight:</p>
                            <p className="font-medium">
                              Created proposals 5× faster using 
                              <Link 
                                to="/products/voice-to-proposal" 
                                className="text-accent hover:text-accent-dark ml-1 underline"
                              >
                                Voice-to-Proposal
                              </Link>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Every transformation starts with a conversation. Let's discuss how we can build 
            the growth infrastructure that takes your business to the next level.
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

export default CaseStudies;