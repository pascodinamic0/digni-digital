import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    company: "Healthcare Clinic",
    industry: "Healthcare",
    challenge: "Manual appointment booking leading to 40% no-shows and lost revenue",
    approach: "Automated booking system with SMS reminders and ProposalAgent for treatment plans",
    results: {
      metric1: { value: "85%", label: "Reduction in no-shows" },
      metric2: { value: "3x", label: "Faster proposal creation" },
      metric3: { value: "$50k", label: "Additional monthly revenue" }
    },
    timeline: "6 weeks",
    bgColor: "from-emerald/10 to-emerald/5"
  },
  {
    id: 2,
    company: "Real Estate Agency",
    industry: "Real Estate",
    challenge: "Agents spending 5+ hours per property proposal, losing deals to faster competitors",
    approach: "Implemented ProposalAgent for instant property proposals and automated follow-up sequences",
    results: {
      metric1: { value: "90%", label: "Faster proposal delivery" },
      metric2: { value: "40%", label: "Higher close rate" },
      metric3: { value: "25", label: "More deals per month" }
    },
    timeline: "4 weeks",
    bgColor: "from-accent/10 to-accent/5"
  },
  {
    id: 3,
    company: "Digital Agency",
    industry: "Marketing",
    challenge: "Inconsistent proposal quality and pricing leading to 60% rejection rate",
    approach: "Standardized proposal templates in ProposalAgent with dynamic pricing models",
    results: {
      metric1: { value: "75%", label: "Increase in acceptance rate" },
      metric2: { value: "60%", label: "Time saved on proposals" },
      metric3: { value: "$100k", label: "Annual revenue increase" }
    },
    timeline: "3 weeks",
    bgColor: "from-primary/10 to-primary/5"
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6 scroll-reveal">
            Proof that transformation works.
          </h2>
          <p className="text-subheading max-w-3xl mx-auto scroll-reveal">
            Real businesses, real results, real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`relative group overflow-hidden bg-gradient-to-br ${study.bgColor} border-l-4 border-primary rounded-2xl p-6 cursor-pointer scroll-reveal shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
            >
              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {study.timeline}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                  {study.challenge}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{study.results.metric1.value}</div>
                    <div className="text-xs text-muted-foreground">{study.results.metric1.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{study.results.metric2.value}</div>
                    <div className="text-xs text-muted-foreground">{study.results.metric2.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{study.results.metric3.value}</div>
                    <div className="text-xs text-muted-foreground">{study.results.metric3.label}</div>
                  </div>
                </div>

                {selectedCase === study.id && (
                  <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
                    <h4 className="font-semibold text-sm mb-2">Our Approach:</h4>
                    <p className="text-sm text-muted-foreground">
                      {study.approach}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-accent font-medium">Click to expand</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/case-studies" 
            className="btn-primary"
            data-cta="primary" 
            data-entity="case-studies"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;