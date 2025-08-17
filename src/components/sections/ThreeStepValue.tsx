import { Search, Wrench, TrendingUp } from 'lucide-react';

const ThreeStepValue = () => {
  const steps = [
    {
      icon: Search,
      title: 'Diagnose',
      description: 'We uncover hidden bottlenecks.'
    },
    {
      icon: Wrench,
      title: 'Transform',
      description: 'We design modern systems.'
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'You grow on autopilot.'
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-heading-3 mb-4">{step.title}</h3>
              <p className="text-body-large">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepValue;