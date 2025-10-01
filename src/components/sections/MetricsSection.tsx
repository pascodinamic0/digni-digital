import { useCountUp } from '@/hooks/useCountUp';

const MetricsSection = () => {
  const years = useCountUp({ end: 7, suffix: '+', duration: 2000 });
  const businesses = useCountUp({ end: 100, suffix: '+', duration: 2500 });
  const satisfaction = useCountUp({ end: 95, suffix: '%', duration: 2000 });
  const countries = useCountUp({ end: 12, suffix: '+', duration: 1800 });

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 mb-6">
            Proven Track Record
          </h2>
          <p className="text-subheading opacity-90 max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to client success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center" ref={years.ref}>
            <div className="text-5xl lg:text-6xl font-bold mb-4">{years.count}</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          
          <div className="text-center" ref={businesses.ref}>
            <div className="text-5xl lg:text-6xl font-bold mb-4">{businesses.count}</div>
            <div className="text-lg opacity-90">Businesses Transformed</div>
          </div>
          
          <div className="text-center" ref={satisfaction.ref}>
            <div className="text-5xl lg:text-6xl font-bold mb-4">{satisfaction.count}</div>
            <div className="text-lg opacity-90">Client Satisfaction</div>
          </div>
          
          <div className="text-center" ref={countries.ref}>
            <div className="text-5xl lg:text-6xl font-bold mb-4">{countries.count}</div>
            <div className="text-lg opacity-90">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
