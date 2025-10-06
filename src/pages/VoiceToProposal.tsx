import { Link } from 'react-router-dom';
import { Mic, FileText, Zap, ExternalLink, CheckCircle, Star } from 'lucide-react';

const VoiceToProposal = () => {
  const steps = [
    {
      icon: Mic,
      title: 'Record',
      description: 'Speak your brief; we auto-transcribe.',
      detail: 'Just hit record and speak naturally. Our AI captures every detail and converts your voice to structured text.'
    },
    {
      icon: FileText,
      title: 'Structure',
      description: 'AI maps to your chosen template.',
      detail: 'Choose from industry-specific templates. AI organizes your content into Problem, Objectives, Scope, Approach, Timeline, and Pricing.'
    },
    {
      icon: Zap,
      title: 'Deliver',
      description: 'Export branded PDF, share link, or push to CRM.',
      detail: 'One-click export with your branding. Share instantly or sync with your existing CRM workflows.'
    }
  ];

  const features = [
    {
      category: 'Industry-Ready Templates',
      items: ['Clinics & Healthcare', 'Real Estate', 'Schools & Education', 'NGOs & Non-Profits', 'Medical Spas', 'Dental Practices', 'Roofing & Construction']
    },
    {
      category: 'Auto-Branding',
      items: ['Your Logo Integration', 'Custom Color Schemes', 'Typography Matching', 'Professional Cover Pages']
    },
    {
      category: 'CRM & Workflow Integration',
      items: ['GoHighLevel Sync', 'n8n Automation', 'Make.com Workflows', 'Zapier Connections']
    },
    {
      category: 'Collaboration & Security',
      items: ['Team Comments', 'Version Control', 'Role-Based Access', 'Encryption & Audit Logs']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for freelancers and small businesses',
      features: ['5 proposals/month', 'Core templates', 'PDF export', 'Basic branding'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$79/month',
      description: 'For growing teams and agencies',
      features: ['Unlimited proposals', 'All templates', 'CRM integrations', 'Advanced branding', 'Team collaboration'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$149/month',
      description: 'Enterprise-ready with advanced features',
      features: ['Everything in Pro', 'SSO integration', 'Custom templates', 'Priority support', 'Advanced analytics'],
      cta: 'Contact Sales'
    }
  ];

  const integrations = [
    'GoHighLevel', 'n8n', 'Make.com', 'Zapier', 'Google Drive'
  ];

  const faqs = [
    {
      question: 'Can I export to PDF?',
      answer: 'Yes, with full branding customization including your logo, colors, and typography.'
    },
    {
      question: 'Does it work with GoHighLevel?',
      answer: 'Absolutely. Create contacts and opportunities automatically, with full two-way sync.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use encryption at rest and in transit, plus role-based access and comprehensive audit logs.'
    },
    {
      question: 'Do you support French?',
      answer: 'Yes, bilingual proposals are fully supported for French and English markets.'
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-heading-1 mb-6">ProposalAgent</h1>
              <p className="text-subheading mb-8">
                Turn voice notes into client-ready proposals. Structured, branded, and ready to send.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <a 
                  href="https://proposalagent.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Try Free on ProposalAgent.io <ExternalLink className="w-4 h-4" />
                </a>
                <Link to="/book" className="btn-secondary">
                  Talk to Sales
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Animated Waveform */}
              <div className="bg-white rounded-2xl shadow-premium-lg p-8 relative overflow-hidden">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Mic className="w-10 h-10 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex items-end justify-center space-x-2 mb-6">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-accent rounded-full"
                      style={{
                        width: '4px',
                        height: `${20 + Math.sin(i) * 15}px`,
                        animation: `pulse 2s infinite ${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Recording: "I need a proposal for..."</p>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="card-premium bg-destructive/5 border-destructive/20">
              <h3 className="text-heading-3 mb-4 text-destructive">Proposals take too long.</h3>
              <p className="text-body-large text-muted-foreground">
                You lose momentum. Details get messy. Deals stall while you're stuck formatting documents instead of closing business.
              </p>
            </div>

            <div className="card-premium bg-success/5 border-success/20">
              <h3 className="text-heading-3 mb-4 text-success">Now: capture the idea, we do the heavy lifting.</h3>
              <p className="text-body-large text-muted-foreground">
                Record your thoughts. Get a structured, on-brand proposal in minutes. Send it while the conversation is still fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">How It Works</h2>
            <p className="text-subheading max-w-3xl mx-auto">
              Three simple steps to transform your voice into professional proposals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-heading-3 mb-4">{step.title}</h3>
                <p className="text-lg font-semibold text-primary mb-4">{step.description}</p>
                <p className="text-body-large">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">Everything You Need to Create Professional Proposals</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.category} className="card-premium">
                <h3 className="text-heading-3 mb-6">{feature.category}</h3>
                <div className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-subheading max-w-2xl mx-auto">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`card-premium relative ${tier.popular ? 'border-accent scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-heading-3 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://proposalagent.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              All plans include 24/7 support and regular updates. Need a custom plan? 
              <Link to="/book" className="text-accent hover:text-accent-dark font-semibold ml-1">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-6">Seamless Integrations</h2>
          <p className="text-subheading mb-12 max-w-2xl mx-auto">
            Two-way sync and simple triggers for your existing workflow stack.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {integrations.map((integration) => (
              <div 
                key={integration}
                className="flex items-center justify-center px-6 py-4 bg-white rounded-xl shadow-premium border border-border hover:shadow-premium-md transition-all"
              >
                <span className="font-semibold text-primary">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card-premium">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-heading-2 mb-8">
            Ready to Transform Your Proposal Process?
          </h2>
          <p className="text-subheading mb-12 max-w-3xl mx-auto opacity-90">
            Join hundreds of professionals who've already cut their proposal time from days to minutes.
          </p>
          <a 
            href="https://proposalagent.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent shadow-glow hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default VoiceToProposal;