import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { 
  Clipboard, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  MessageCircle, 
  BarChart3,
  Users,
  Calendar,
  Shield,
  Download,
  FileText,
  Globe
} from 'lucide-react';
import PilotSignupForm from '@/components/PilotSignupForm';

const OnePercentDaily = () => {
  const { trackPageView, trackCTAClick } = useAnalytics();

  useEffect(() => {
    trackPageView('onepercent-daily', 'OnePercent Daily — Daily Plans, Red Flags, and Auto Reports');
  }, [trackPageView]);

  const howItWorksSteps = [
    {
      icon: Clipboard,
      title: 'Plan by 10:00',
      titleFr: 'Planifier avant 10h',
      description: 'Each team member lists 1–3 priorities before the cutoff.',
      descriptionFr: 'Chaque membre liste 1–3 priorités avant l\'heure limite.',
      detail: 'Simple WhatsApp prompt or web form. Team knows what matters before the day gets messy.'
    },
    {
      icon: CheckCircle,
      title: 'Finish by 17:00',
      titleFr: 'Terminer avant 17h',
      description: 'Mark done or write a short reason if something slipped; add proof when needed.',
      descriptionFr: 'Valider le fait ou expliquer tout retard; ajouter une preuve si nécessaire.',
      detail: 'Quick end-of-day check-in. Honest status, no judgment. Just track what happened and why.'
    },
    {
      icon: BarChart3,
      title: 'Report automatically',
      titleFr: 'Rapports automatiques',
      description: 'Red items carry over and notify the right manager. Weekly and monthly reports are generated for you.',
      descriptionFr: 'Les éléments en retard notifient le bon manager. Rapports hebdo et mensuels automatiques.',
      detail: 'No spreadsheets, no manual compiling. System sends manager summary every morning and full reports on schedule.'
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Team cutoff planning',
      description: 'Configurable by department—set your own daily deadline'
    },
    {
      icon: CheckCircle,
      title: '1–3 daily tasks',
      description: 'Focus on what matters. Track done/not-done with reasons or proof'
    },
    {
      icon: AlertTriangle,
      title: 'Red list & escalation',
      description: 'Owner → manager → dept head notification chain'
    },
    {
      icon: Clock,
      title: 'Department time limits',
      description: 'Fair, business-hours-aware SLAs per task type'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp prompts',
      description: 'Lightweight web app alternative. Works where your team already is'
    },
    {
      icon: Users,
      title: 'Manager morning summary',
      description: 'One-screen view: who planned, who\'s late, where to help'
    },
    {
      icon: FileText,
      title: 'Weekly & monthly reports',
      description: 'Auto-generated PDF/CSV—zero manual work'
    },
    {
      icon: Globe,
      title: 'EN/FR, time-zone aware',
      description: 'Bilingual interface, audit log, and full data exports'
    }
  ];

  const benefits = [
    {
      title: 'Fewer status meetings',
      description: 'Manager gets daily summary. Team focuses on work, not updates.',
      icon: Users
    },
    {
      title: 'Faster unblocking',
      description: 'Red flags surface early. Fix issues before they grow.',
      icon: AlertTriangle
    },
    {
      title: 'Clear daily focus',
      description: '1–3 tasks = real priorities. No endless lists, just what counts.',
      icon: Clipboard
    },
    {
      title: 'Trusted reporting',
      description: 'Month-end reports ready to go. No manual work, no scrambling.',
      icon: BarChart3
    }
  ];

  const industries = [
    { name: 'Hospitality', icon: Users },
    { name: 'Construction', icon: Shield },
    { name: 'Logistics', icon: Clock },
    { name: 'Clinics', icon: CheckCircle },
    { name: 'Schools', icon: FileText },
    { name: 'Retail', icon: BarChart3 },
    { name: 'Agencies', icon: Globe }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      description: 'Up to 20 users',
      features: [
        'Team cutoff planning',
        'Red list & basic SLAs',
        'WhatsApp + web access',
        'Weekly reports',
        'Email support'
      ],
      cta: 'Start a 4-week pilot'
    },
    {
      name: 'Growth',
      price: '$5',
      period: '/user/mo',
      description: 'Minimum $149/mo',
      features: [
        'Everything in Starter',
        'Advanced task types',
        'Monthly reports (PDF/CSV)',
        'Multi-department setup',
        'Priority support'
      ],
      cta: 'Start a 4-week pilot',
      popular: true
    },
    {
      name: 'Plus',
      price: '$8',
      period: '/user/mo',
      description: 'Advanced teams',
      features: [
        'Everything in Growth',
        'Advanced SLAs',
        'SSO integration',
        'Multi-site rollups',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'Does it work for multi-day tasks?',
      answer: 'Yes. Create a parent task with daily slices. If a slice misses, it turns red and notifies the manager.'
    },
    {
      question: 'Will this feel like surveillance?',
      answer: 'No. No screen tracking or keylogging. Only what staff enter. Proof can be required per task type—your choice.'
    },
    {
      question: 'Can we set our own time limits?',
      answer: 'Yes. Per department and task type, with business hours and holidays factored in.'
    },
    {
      question: 'Do we need WhatsApp?',
      answer: 'Recommended for adoption. Web and email work too. Most teams find WhatsApp easiest.'
    },
    {
      question: 'Languages?',
      answer: 'English and French at launch. Interface adapts to user preference.'
    }
  ];

  return (
    <>
      <SEO 
        title="OnePercent Daily — Daily Plans, Red Flags, and Auto Reports"
        description="Plan by 10:00, finish by 17:00. Red flags for delays, manager summaries, and automatic monthly reports."
        keywords="daily task app for teams, red list tasks, SLA task tracking, WhatsApp task check-ins, daily cutoff planning"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "OnePercent Daily",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Daily plans before 10:00. Done by 17:00. Red flags for delays. Automatic reports.",
          "offers": [
            {
              "@type": "Offer",
              "price": "99",
              "priceCurrency": "USD",
              "name": "Starter Plan"
            },
            {
              "@type": "Offer",
              "price": "5",
              "priceCurrency": "USD",
              "name": "Growth Plan (per user)"
            },
            {
              "@type": "Offer",
              "price": "8",
              "priceCurrency": "USD",
              "name": "Plus Plan (per user)"
            }
          ]
        }}
      />

      <div className="pt-12">
        {/* Hero Section - Bilingual */}
        <section className="section-padding bg-gradient-subtle relative overflow-hidden">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-heading-1 mb-4">OnePercent Daily</h1>
                <p className="text-subheading mb-8 text-primary">
                  Daily plans. Red flags. Real progress.
                </p>
                
                {/* English Version */}
                <div className="mb-8 p-6 bg-card rounded-xl border border-border">
                  <p className="text-xl font-semibold mb-4">
                    Daily plans before 10:00. Done by 17:00. Red flags for delays. Automatic reports.
                  </p>
                  <p className="text-body-large">
                    Every workday your team lists 1–3 priorities before the cutoff. At day's end, they mark what's done and add a short reason if something slipped. Misses turn red and notify the right manager. Weekly and monthly reports are automatic.
                  </p>
                </div>

                {/* French Version */}
                <div className="mb-8 p-6 bg-muted rounded-xl border border-border">
                  <p className="text-xl font-semibold mb-4">
                    Plans quotidiens avant 10h. Fait avant 17h. Alertes en retard. Rapports automatiques.
                  </p>
                  <p className="text-body-large">
                    Chaque jour, l'équipe liste 1–3 priorités avant l'heure limite. En fin de journée, elle valide l'avancement et explique tout retard. Les éléments non terminés passent en rouge et notifient le bon manager. Les rapports hebdo et mensuels sont automatiques.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#pilot-signup"
                    className="btn-primary"
                    onClick={() => trackCTAClick('start-pilot-hero', 'hero')}
                  >
                    Start a 4-week pilot
                  </a>
                  <Link 
                    to="/blog/daily-cutoff-red-list-sla" 
                    className="btn-secondary"
                  >
                    See a 2-minute demo
                  </Link>
                </div>
              </div>

              {/* Timeline Visual */}
              <div className="relative">
                <div className="bg-card rounded-2xl shadow-premium-lg p-8 border border-border">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                        <Clock className="w-8 h-8 text-success" />
                      </div>
                      <div>
                        <p className="font-semibold">Plan by 10:00</p>
                        <p className="text-sm text-muted-foreground">List 1–3 priorities</p>
                      </div>
                    </div>
                    
                    <div className="h-12 w-0.5 bg-border ml-8" />
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Done by 17:00</p>
                        <p className="text-sm text-muted-foreground">Mark complete or explain</p>
                      </div>
                    </div>
                    
                    <div className="h-12 w-0.5 bg-border ml-8" />
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-destructive" />
                      </div>
                      <div>
                        <p className="font-semibold">Red tomorrow if missed</p>
                        <p className="text-sm text-muted-foreground">Auto-notify manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-heading-2 mb-6">Built for Ops-Heavy Teams</h2>
              <p className="text-subheading max-w-3xl mx-auto">
                20–200 staff. Routine daily work. Need visibility without more meetings.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {industries.map((industry) => (
                <div key={industry.name} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto mb-3">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{industry.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-heading-2 mb-6">How It Works</h2>
              <p className="text-subheading max-w-3xl mx-auto">
                Plan → Finish → Report. Three simple steps, daily discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="card-premium text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-heading-3 mb-2">{step.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{step.titleFr}</p>
                  <p className="text-lg font-semibold text-primary mb-4">{step.description}</p>
                  <p className="text-body-large">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red List & SLAs */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-heading-2 mb-6">Red List & SLAs</h2>
                <h3 className="text-heading-3 mb-4 text-destructive">Make carryovers visible.</h3>
                <p className="text-body-large mb-6">
                  Set fair time limits per department and task type. When an item exceeds the limit, the system flags it and escalates to the right manager—using your business hours and holidays.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive mt-1" />
                    <div>
                      <p className="font-semibold">Owner → Manager → Dept Head</p>
                      <p className="text-sm text-muted-foreground">Automatic escalation chain when tasks exceed time limits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Business-hours aware</p>
                      <p className="text-sm text-muted-foreground">SLAs respect weekends, holidays, and your working schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success mt-1" />
                    <div>
                      <p className="font-semibold">Fair and flexible</p>
                      <p className="text-sm text-muted-foreground">Configure per department and task type—your rules, your way</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium bg-destructive/5 border-destructive/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                    <span className="font-medium">Task #127</span>
                    <span className="badge-new bg-destructive text-destructive-foreground">2 days overdue</span>
                  </div>
                  <div className="pl-8 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      <span className="text-muted-foreground">Owner notified: Day 1</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      <span className="text-muted-foreground">Manager alerted: Day 2</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                      <span className="font-semibold">Dept Head escalation: Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manager Summary */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-heading-2 mb-6">Manager Summary</h2>
              <p className="text-subheading max-w-3xl mx-auto">
                Start the day with one screen that shows who planned, who's late, and where to intervene.
              </p>
            </div>

            <div className="card-premium max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-3xl font-bold text-success">18</p>
                  <p className="text-sm text-muted-foreground">Planned on time</p>
                </div>
                <div className="text-center p-4 bg-warning/10 rounded-lg">
                  <p className="text-3xl font-bold text-warning">3</p>
                  <p className="text-sm text-muted-foreground">Late to plan</p>
                </div>
                <div className="text-center p-4 bg-destructive/10 rounded-lg">
                  <p className="text-3xl font-bold text-destructive">2</p>
                  <p className="text-sm text-muted-foreground">Red list items</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Reassign, approve extensions (with reason), or remove blockers in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-heading-2 mb-6">Everything You Need</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="card-premium text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card-premium text-center">
                  <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-heading-2 mb-6">Simple, Fair Pricing</h2>
              <p className="text-subheading max-w-2xl mx-auto">
                Start small. Scale as you grow. Annual discount: −15%
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
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{tier.description}</p>

                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-sm text-left">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={tier.cta === 'Contact Sales' ? '/book' : '#pilot-signup'}
                      className={tier.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                      onClick={() => trackCTAClick(`pricing-${tier.name.toLowerCase()}`, 'pricing')}
                    >
                      {tier.cta}
                    </a>
                  </div>
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

        {/* Trust Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="card-premium">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Full Data Export</h3>
                <p className="text-sm text-muted-foreground">CSV, PDF, JSON—your data, your way</p>
              </div>
              <div className="card-premium">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Comprehensive Audit Log</h3>
                <p className="text-sm text-muted-foreground">Every change tracked and timestamped</p>
              </div>
              <div className="card-premium">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">No tracking, no surveillance—just work</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilot Signup */}
        <section id="pilot-signup" className="section-padding bg-primary text-primary-foreground">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-heading-2 mb-6">Start a 4-week pilot</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                See if daily discipline makes your team 1% better. No long-term commitment—just real results.
              </p>
            </div>
            
            <PilotSignupForm />
          </div>
        </section>

        {/* Cross-Links */}
        <section className="section-padding bg-muted">
          <div className="container-max text-center">
            <h3 className="text-heading-3 mb-8">Related Resources</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog/daily-cutoff-red-list-sla"
                className="btn-secondary"
              >
                Read: Why Daily Cut-Offs Beat Long Meetings
              </Link>
              <Link 
                to="/products/proposalagent"
                className="btn-ghost"
              >
                See also: ProposalAgent
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnePercentDaily;
