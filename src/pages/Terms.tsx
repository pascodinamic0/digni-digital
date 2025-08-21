import { Link } from 'react-router-dom';
import { FileText, Scale, Users, Shield } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: 'Service Agreement',
      content: [
        'Consulting services are provided based on agreed project scope and timelines',
        'Product access (like ProposalAgent) is subject to subscription terms and usage limits',
        'We reserve the right to modify services with reasonable notice to clients',
        'Client cooperation and timely feedback are essential for project success'
      ]
    },
    {
      icon: Scale,
      title: 'Payment & Billing',
      content: [
        'Consulting fees are due according to agreed payment schedules',
        'Product subscriptions are billed monthly or annually as selected',
        'Refunds for consulting work are evaluated case-by-case based on deliverables',
        'Product subscriptions may offer pro-rated refunds within 30 days'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'Custom solutions developed for clients remain their property upon full payment',
        'Our methodology, processes, and proprietary tools remain our intellectual property',
        'Product software and underlying technology are licensed, not sold',
        'Clients grant us permission to use anonymized case studies for marketing'
      ]
    },
    {
      icon: Shield,
      title: 'Limitations & Liability',
      content: [
        'Services are provided "as is" with no guarantees of specific business outcomes',
        'Our liability is limited to the total amount paid for services',
        'We are not responsible for client implementation failures or external factors',
        'Both parties agree to attempt resolution through good faith negotiation first'
      ]
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max text-center">
          <h1 className="text-heading-1 mb-8">
            Terms of Service
          </h1>
          <p className="text-subheading max-w-4xl mx-auto mb-8">
            These terms govern our relationship and ensure clear expectations for both 
            consulting services and product usage.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 15, 2024 • Effective immediately
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-heading-2 mb-8 text-center">Service Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Consulting Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategic consulting, systems implementation, and digital transformation projects.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Custom scoped projects</li>
                  <li>• Ongoing partnerships</li>
                  <li>• Implementation support</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-premium border border-border">
                <h3 className="font-semibold mb-3 text-primary">Product Subscriptions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  SaaS products like ProposalAgent with subscription-based access and support.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Monthly or annual billing</li>
                  <li>• Usage-based features</li>
                  <li>• Support and updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Terms */}
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

      {/* Additional Terms */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-heading-2 mb-8">Additional Terms</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card-premium">
                <h3 className="text-heading-3 mb-4">Confidentiality</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    All business information shared during consultations and project work 
                    is treated as confidential and protected under non-disclosure agreements.
                  </p>
                  <p>
                    We may use anonymized case studies and general lessons learned for 
                    marketing purposes, but never specific client details.
                  </p>
                  <p>
                    Client data in our products is encrypted and access-controlled 
                    according to our privacy policy.
                  </p>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-heading-3 mb-4">Termination</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Either party may terminate consulting agreements with 30 days written notice 
                    unless otherwise specified in project contracts.
                  </p>
                  <p>
                    Product subscriptions can be cancelled anytime, with access continuing 
                    until the end of the current billing period.
                  </p>
                  <p>
                    Upon termination, we will provide data export for products and 
                    final deliverables for consulting work.
                  </p>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-heading-3 mb-4">Governing Law</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    These terms are governed by the laws of the jurisdiction where 
                    Digni Digital LLC is registered.
                  </p>
                  <p>
                    Disputes will be resolved through binding arbitration before 
                    litigation, except for intellectual property matters.
                  </p>
                  <p>
                    International clients agree to jurisdiction in our primary 
                    business location for legal matters.
                  </p>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-heading-3 mb-4">Updates & Changes</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    We may update these terms periodically to reflect service changes 
                    or legal requirements.
                  </p>
                  <p>
                    Significant changes will be communicated via email at least 
                    30 days before taking effect.
                  </p>
                  <p>
                    Continued use of services after changes indicates acceptance 
                    of updated terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-heading-2 mb-8">Questions About These Terms?</h2>
            <p className="text-body-large text-muted-foreground mb-8">
              We believe in transparent relationships. If you have questions about these terms 
              or need clarification on any aspect, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a 
                href="mailto:legal@dignidigital.com"
                className="btn-secondary"
              >
                Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-6">Related Policies</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link to="/book" className="hover:text-accent transition-colors">
                Service Agreements
              </Link>
              <span className="hidden sm:inline">•</span>
              <a href="mailto:legal@dignidigital.com" className="hover:text-accent transition-colors">
                Contract Questions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;