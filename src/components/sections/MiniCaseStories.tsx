import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const MiniCaseStories = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cases = [
    {
      front: {
        title: "Medical Practice",
        challenge: "Losing 40% of leads to slow follow-up"
      },
      back: {
        approach: "Automated CRM + SMS sequences",
        result: "90% lead retention, 200% revenue growth"
      }
    },
    {
      front: {
        title: "Real Estate Agency",
        challenge: "Proposals taking 3 days, deals stalling"
      },
      back: {
        approach: "Voice-to-Proposal implementation",
        result: "Same-day proposals, 60% faster closings"
      }
    },
    {
      front: {
        title: "Consulting Firm",
        challenge: "Manual reporting, no client insights"
      },
      back: {
        approach: "Custom dashboard + automation",
        result: "5x faster reporting, predictable revenue"
      }
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 mb-6">
            From chasing clients to fully booked calendars.
          </h2>
          <p className="text-subheading max-w-2xl mx-auto">
            Real transformations from businesses just like yours. Click each card to see the full story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="relative h-80 cursor-pointer group"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className={`card-flip h-full ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white to-muted/30 p-8 flex flex-col justify-center">
                  <h3 className="text-heading-3 mb-4 text-primary">{caseStudy.front.title}</h3>
                  <div className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                    Challenge
                  </div>
                  <p className="text-body-large mb-8">{caseStudy.front.challenge}</p>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all">
                    <span>See the solution</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-hero text-white p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="text-sm font-medium opacity-90 mb-2 uppercase tracking-wide">
                      Our Approach
                    </div>
                    <p className="text-lg mb-6">{caseStudy.back.approach}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium opacity-90 mb-2 uppercase tracking-wide">
                      Result
                    </div>
                    <p className="text-xl font-semibold">{caseStudy.back.result}</p>
                  </div>

                  <button 
                    className="mt-6 text-accent-light hover:text-accent transition-colors font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedCard(null);
                    }}
                  >
                    ← Back to challenge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCaseStories;