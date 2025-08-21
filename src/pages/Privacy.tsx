import { Link } from 'react-router-dom';
import { Shield, Eye, Database, Lock } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Contact information (name, email, phone) when you reach out or book consultations',
        'Business information shared during strategy sessions and project work',
        'Website usage data through analytics tools to improve our services',
        'Payment information processed securely through third-party providers'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'Provide consulting services and develop custom solutions for your business',
        'Communicate about projects, updates, and relevant business insights',
        'Improve our services and develop new products like ProposalAgent',
        'Comply with legal obligations and protect our legitimate business interests'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security & Protection',
      content: [
        'All data is encrypted in transit and at rest using industry-standard protocols',
        'Access to client information is restricted to authorized team members only',
        'Regular security audits and updates to protect against threats',
        'Secure backup systems ensure data availability and integrity'
      ]
    },
    {
      icon: Shield,
      title: 'Your Rights & Control',
      content: [
        'Request access to, correction of, or deletion of your personal information',
        'Opt out of marketing communications at any time',
        'Data portability - receive your data in a structured, commonly used format',
        'Lodge complaints with relevant data protection authorities'
      ]
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            Privacy Policy
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-8">
            Your privacy and data security are fundamental to how we operate. This policy explains 
            how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 15, 2024
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-heading-2 mb-8 text-center">Our Privacy Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Transparency First</h3>
                <p className="text-sm text-muted-foreground">
                  We clearly explain what data we collect, why we collect it, and how we use it.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Minimal Collection</h3>
                <p className="text-sm text-muted-foreground">
                  We only collect information necessary to provide our services effectively.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Strong Security</h3>
                <p className="text-sm text-muted-foreground">
                  Industry-standard encryption and security measures protect your data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Your Control</h3>
                <p className="text-sm text-muted-foreground">
                  You have rights over your data and can exercise them at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <div 
                key={section.title}
                className="card-premium"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-heading-3 mb-4">{section.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-2 mb-8">Cookie Policy</h2>
            <div className="card-premium">
              <h3 className="text-heading-3 mb-4">How We Use Cookies</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Required for basic website functionality, including security and navigation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                  <p className="text-muted-foreground text-sm">
                    Used to deliver relevant advertisements and measure campaign effectiveness.
                  </p>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    You can control cookie preferences in your browser settings. Disabling certain cookies 
                    may impact website functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 mb-8">Questions About Privacy?</h2>
            <p className="text-body-large text-muted-foreground mb-8">
              We're committed to transparency. If you have questions about our privacy practices 
              or want to exercise your data rights, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a 
                href="mailto:privacy@dignidigital.com"
                className="btn-secondary"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Legal Framework</h3>
            <p className="text-sm opacity-90 mb-6">
              This privacy policy complies with applicable data protection laws including GDPR, 
              CCPA, and local African data protection regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/contact" className="hover:text-accent transition-colors">
                Data Protection Officer
              </Link>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:legal@dignidigital.com" className="hover:text-accent transition-colors">
                Legal Inquiries
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;