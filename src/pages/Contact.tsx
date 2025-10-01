import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const { trackPageView } = useAnalytics();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    trackPageView('contact', 'Contact - Digni Digital LLC');
  }, [trackPageView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us - Let's Start Your Transformation"
        description="Ready to transform your business? Get in touch with Digni Digital LLC for strategic consultation, product support, or partnership opportunities."
      />
    <div className="pt-12">
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">Get in Touch</h1>
          <p className="text-subheading max-w-3xl mx-auto">
            Ready to transform your business? Have questions about our services or products? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium">
              <h2 className="text-heading-3 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name *</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject *</label>
                  <select 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option>General Inquiry</option>
                    <option>Consultation Request</option>
                    <option>Product Support</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center" data-cta="contact-form" data-entity="contact">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-heading-3 mb-8">Let's Start a Conversation</h3>
                <p className="text-body-large mb-8">
                  Whether you're looking to transform your business infrastructure or explore our products, 
                  we're here to help you achieve your growth goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <p className="text-muted-foreground">hello@dignidigital.com</p>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Schedule a Call</h4>
                    <p className="text-muted-foreground">Book a free consultation</p>
                    <p className="text-sm text-muted-foreground">Available Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Reach</h4>
                    <p className="text-muted-foreground">Africa-based, globally connected</p>
                    <p className="text-sm text-muted-foreground">Serving clients across emerging markets</p>
                  </div>
                </div>
              </div>

              <div className="card-premium bg-muted border-accent/20">
                <h4 className="font-semibold mb-4">Prefer to Book Directly?</h4>
                <p className="text-muted-foreground mb-6">
                  Skip the form and schedule a free strategy session right now. 
                  We'll discuss your goals and how we can help.
                </p>
                <Link 
                  to="/book"
                  className="btn-primary w-full justify-center"
                  data-cta="book-consultation" data-entity="contact"
                >
                  Book Free Consultation
                </Link>
              </div>

              <div className="card-premium bg-accent/5 border-accent/30 mt-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-accent" />
                  Prefer to Try a Product First?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Not ready for a consultation? Explore our products and see the kind of solutions we build.
                </p>
                <Link 
                  to="/products"
                  className="btn-secondary w-full justify-center"
                  data-cta="explore-products" data-entity="contact"
                >
                  Explore Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;