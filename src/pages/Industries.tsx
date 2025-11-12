import { useEffect } from 'react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  Heart, 
  Megaphone, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Transform property proposals and client management with automated systems that close deals faster.",
    challenges: [
      "Time-consuming property proposals",
      "Manual follow-up processes",
      "Inconsistent marketing materials"
    ],
    solutions: [
      "Instant property proposals with ProposalAgent",
      "Automated client nurturing sequences",
      "Professional branding systems"
    ],
    caseStudy: "85% faster proposal delivery, 40% higher close rates"
  },
  {
    icon: Stethoscope,
    name: "Clinics",
    description: "Streamline patient onboarding, treatment proposals, and appointment management for better care delivery.",
    challenges: [
      "Manual appointment scheduling",
      "Paper-based treatment plans",
      "Patient communication gaps"
    ],
    solutions: [
      "Automated booking systems with SMS reminders",
      "Digital treatment proposals via ProposalAgent",
      "Patient portal integrations"
    ],
    caseStudy: "60% reduction in no-shows, 3x faster treatment proposals"
  },
  {
    icon: GraduationCap,
    name: "Private Schools",
    description: "Modernize enrollment processes, parent communication, and administrative efficiency.",
    challenges: [
      "Complex enrollment procedures",
      "Parent communication inefficiencies",
      "Manual administrative tasks"
    ],
    solutions: [
      "Digital enrollment proposals and contracts",
      "Automated parent communication systems",
      "Student information management"
    ],
    caseStudy: "50% faster enrollment process, 90% parent satisfaction"
  },
  {
    icon: Heart,
    name: "NGOs",
    description: "Amplify your impact with donor management systems and automated grant proposal generation.",
    challenges: [
      "Time-intensive grant writing",
      "Donor relationship management",
      "Impact reporting complexity"
    ],
    solutions: [
      "Grant proposal automation with ProposalAgent",
      "Donor CRM and communication systems",
      "Impact measurement dashboards"
    ],
    caseStudy: "70% faster grant proposals, 200% increase in funding"
  },
  {
    icon: Megaphone,
    name: "Agencies",
    description: "Scale your agency with standardized proposal processes and client management automation.",
    challenges: [
      "Inconsistent proposal quality",
      "Manual client reporting",
      "Project management chaos"
    ],
    solutions: [
      "Standardized proposal templates in ProposalAgent",
      "Automated client reporting systems",
      "Project workflow automation"
    ],
    caseStudy: "75% increase in proposal acceptance, 60% time savings"
  },
  {
    icon: Sparkles,
    name: "Medspas",
    description: "Enhance client experience with professional treatment proposals and automated booking systems.",
    challenges: [
      "Manual consultation processes",
      "Treatment plan complexity",
      "Client retention issues"
    ],
    solutions: [
      "Digital treatment proposals with ProposalAgent",
      "Automated appointment reminders",
      "Client journey optimization"
    ],
    caseStudy: "45% increase in treatment acceptance, 80% client retention"
  }
];

const Industries = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('industries', 'Industries - Digni Digital LLC');
  }, [trackPageView]);

  return (
    <>
      <SEO 
        title="Industry Solutions - Specialized Systems for Your Sector"
        description="Specialized insight and systems that fit the way you work. From real estate to healthcare, we build industry-specific solutions that drive growth."
      />

      {/* Hero Section */}
      <section className="hero-section-enhanced !min-h-[70vh]">
        <div className="hero-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-[1]" />
        
        <div className="relative z-10 container-max text-center px-6">
          <h1 className="text-hero mb-6 bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent leading-tight">
            Specialized insight. Systems that fit the way you work.
          </h1>
          <p className="text-subheading mb-8 max-w-3xl mx-auto text-foreground/90 leading-relaxed">
            Every industry has unique challenges. We build solutions that understand your specific needs and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/book" 
              className="btn-primary"
              data-cta="primary" 
              data-entity="industries-hero"
            >
              Discuss Your Industry
            </Link>
            <Link 
              to="/case-studies" 
              className="btn-secondary"
              data-cta="secondary" 
              data-entity="industries-hero"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
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
                    
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {industry.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {industry.description}
                    </p>

                  {/* Common Challenges */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-destructive">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-destructive mt-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Solutions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-primary">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study Result */}
                  <div className="bg-success/10 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-sm mb-2 text-success">Real Results:</h4>
                    <p className="text-sm text-muted-foreground">{industry.caseStudy}</p>
                  </div>

                  {/* ProposalAgent CTA */}
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Create {industry.name.toLowerCase()} proposals in minutes with ProposalAgent.
                    </p>
                    <Link 
                      to="/products/proposalagent" 
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                      data-cta="tertiary" 
                      data-entity={`industries-${industry.name.toLowerCase()}`}
                    >
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-6 scroll-reveal">
            Don't see your industry? We adapt.
          </h2>
          <p className="text-subheading mb-8 max-w-2xl mx-auto scroll-reveal">
            Every business is unique. We build custom solutions that fit your specific industry needs and growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/book" 
              className="btn-primary"
              data-cta="primary" 
              data-entity="industries-cta"
            >
              Discuss Your Needs
            </Link>
            <Link 
              to="/solutions" 
              className="btn-secondary"
              data-cta="secondary" 
              data-entity="industries-cta"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;