import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Digni Digital transformed our lead generation system. We're now fully booked for 3 months.",
      author: "Dr. Sarah Mitchell",
      role: "Medical Practice Owner",
      rating: 5
    },
    {
      quote: "Voice-to-Proposal cut our proposal time from days to minutes. Game changer.",
      author: "Marcus Johnson",
      role: "Consulting Firm CEO",
      rating: 5
    },
    {
      quote: "Finally, a team that builds systems, not just delivers projects. Outstanding results.",
      author: "Prof. Amara Okafor",
      role: "Harvard Fellow",
      rating: 5
    }
  ];

  const partners = [
    "Harvard University",
    "NGO Alliance Africa",
    "TechBridge SME",
    "Growth Partners LLC"
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