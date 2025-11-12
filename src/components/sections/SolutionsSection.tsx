import { Link } from 'react-router-dom';
import { Rocket, Settings, Users, TrendingUp } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    title: "Lead Generation & Growth",
    problem: "Struggling to attract quality leads consistently?",
    solution: "We build comprehensive lead generation engines: optimized websites, conversion funnels, targeted advertising, and SEO strategies.",
    impact: "Predictable pipeline of qualified prospects flowing into your business every month."
  },
  {
    icon: Settings,
    title: "Operational Efficiency",
    problem: "Manual processes eating up your team's time?",
    solution: "Custom CRM systems, automated workflows, seamless integrations, and real-time analytics dashboards.",
    impact: "10x productivity increase and error-free operations that scale with your growth."
  },
  {
    icon: Users,
    title: "Customer Experience Transformation",
    problem: "Losing clients due to poor experience?",
    solution: "End-to-end customer journey mapping, personalized messaging systems, and retention automation.",
    impact: "Higher customer satisfaction, increased lifetime value, and powerful referral engines."
  }
];

const SolutionsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6 scroll-reveal">
            Our Solutions
          </h2>
          <p className="text-subheading max-w-3xl mx-auto scroll-reveal">
            We don't just fix problems. We build growth engines that transform your entire business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
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
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="font-medium text-destructive">Problem:</span>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.problem}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-primary">Solution:</span>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.solution}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium text-success">Impact:</span>
                      <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors duration-300">{solution.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/solutions" 
              className="btn-primary"
              data-cta="primary" 
              data-entity="solutions"
            >
              Explore Our Solutions
            </Link>
            <Link 
              to="/book" 
              className="btn-secondary"
              data-cta="secondary" 
              data-entity="solutions"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;