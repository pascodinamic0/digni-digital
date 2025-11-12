import { useState } from 'react';
import { Calendar, Clock, Video, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';

const Book = () => {
  const { trackFormSubmission, trackClick } = useAnalytics();
  const [selectedService, setSelectedService] = useState<string>('consultation');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'consultation',
      name: 'Free Strategy Consultation',
      duration: '30 minutes',
      icon: MessageSquare,
      description: 'Discuss your business challenges and explore potential solutions',
      color: 'from-primary to-accent'
    },
    {
      id: 'demo',
      name: 'Product Demo',
      duration: '45 minutes',
      icon: Video,
      description: 'See ProposalAgent and our tools in action with a personalized walkthrough',
      color: 'from-accent to-emerald'
    },
    {
      id: 'technical',
      name: 'Technical Deep Dive',
      duration: '60 minutes',
      icon: Phone,
      description: 'In-depth technical discussion with our engineering team',
      color: 'from-emerald to-primary'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission('booking_form', true);
    setIsSubmitted(true);
    
    // In production, this would integrate with a calendar API
    console.log('Booking submitted:', { ...formData, selectedService, selectedTime });
  };

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Booking Confirmed - Thank You"
          description="Your consultation has been scheduled. We look forward to speaking with you."
        />
        <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-heading-1 mb-6">
              You're All Set! 🎉
            </h1>
            <p className="text-body-large mb-8">
              We've received your booking request and will send a confirmation email shortly with:
            </p>
            <div className="bg-card rounded-xl p-8 mb-8 text-left">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Calendar invite with video meeting link</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Meeting agenda and preparation materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Direct contact information for your consultant</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="btn-primary">
                Return Home
              </a>
              <a href="/products" className="btn-secondary">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Book a Consultation - Schedule Your Free Strategy Session"
        description="Schedule a free consultation with Digni Digital. Discuss your business challenges, see product demos, or dive deep into technical solutions."
      />
      
      <div className="bg-gradient-subtle py-20">
        <div className="container-max px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-heading-1 mb-6 animate-fade-in">
              Book Your Free Consultation
            </h1>
            <p className="text-body-large animate-fade-in" style={{ animationDelay: '100ms' }}>
              Choose a time that works for you. No commitment required, just a conversation about 
              how we can help transform your business.
            </p>
          </div>

          {/* Service Selection */}
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-heading-3 mb-8 text-center">What would you like to discuss?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service.id);
                    trackClick(`service_${service.id}`, 'booking_form');
                  }}
                  className={`relative group overflow-hidden bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-xl transition-all duration-500 text-left ${
                    selectedService === service.id 
                      ? 'ring-2 ring-accent shadow-glow' 
                      : 'hover:ring-1 hover:ring-border hover:-translate-y-1'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-premium-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-4">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Select Your Preferred Time
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'border-accent bg-accent/10 text-accent font-medium'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    What would you like to discuss? (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Tell us about your business challenges, goals, or specific questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={!selectedTime}
                    className="btn-accent flex-1 justify-center shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="btn-ghost flex-1 justify-center"
                  >
                    Go Back
                  </button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By booking, you agree to our{' '}
                  <a href="/terms" className="text-accent hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Free Consultation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">No</div>
              <p className="text-sm text-muted-foreground">Obligations or Commitments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;