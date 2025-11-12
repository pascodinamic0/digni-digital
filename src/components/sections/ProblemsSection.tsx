import { useState, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Users, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: "Leads leak due to disconnected tools",
    description: "Your CRM, website, and sales process don't talk to each other. Prospects fall through the cracks."
  },
  {
    icon: TrendingDown,
    title: "Slow, manual processes stall growth",
    description: "Time wasted on repetitive tasks means missed opportunities and frustrated teams."
  },
  {
    icon: Users,
    title: "Poor customer journeys cause churn",
    description: "Confusing touchpoints and inconsistent messaging drive potential clients away."
  },
  {
    icon: BarChart3,
    title: "No visibility: decisions without data",
    description: "Flying blind without proper analytics means you can't optimize what you can't measure."
  }
];

const ProblemsSection = () => {
  const [currentProblem, setCurrentProblem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProblem((prev) => (prev + 1) % problems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6 scroll-reveal">
            The Problems We Solve
          </h2>
          <p className="text-subheading max-w-3xl mx-auto scroll-reveal">
            Every day you delay fixing these issues, you're leaving money on the table
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="relative group overflow-hidden bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-destructive/3 to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-destructive/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-destructive transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Text slideshow */}
        <div className="md:hidden">
          <div className="card-premium text-center min-h-[300px] flex flex-col justify-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              {(() => {
                const Icon = problems[currentProblem].icon;
                return <Icon className="w-8 h-8 text-destructive" />;
              })()}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {problems[currentProblem].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {problems[currentProblem].description}
            </p>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2">
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProblem(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProblem ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;