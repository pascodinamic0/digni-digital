import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Digni Digital didn't just consult. They transformed our entire business model. Revenue increased 300% in 8 months.",
      author: "Dr. Sarah Mitchell",
      role: "CEO, Premier Medical Group",
      rating: 5
    },
    {
      quote: "True strategic partners. They built systems that scale and provided ongoing optimization. Best investment we've made.",
      author: "Marcus Johnson",
      role: "Managing Director, Growth Ventures",
      rating: 5
    },
    {
      quote: "Exceptional depth of expertise combined with hands-on implementation. They deliver what others only promise.",
      author: "Prof. Amara Okafor",
      role: "Harvard Business School Fellow",
      rating: 5
    }
  ];

  const partners = [
    "Harvard Business School",
    "McKinsey Alumni Network",
    "African Development Bank",
    "TechStars Portfolio"
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wide">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className="px-6 py-3 bg-white rounded-lg shadow-sm border border-border"
              >
                <span className="font-semibold text-primary">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-premium text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-body-large mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;