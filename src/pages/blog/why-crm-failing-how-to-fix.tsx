import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Share2, Bookmark, AlertTriangle, CheckCircle, Users, BarChart3 } from 'lucide-react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect } from 'react';

const WhyCRMFailing = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('blog-article', 'Why Your CRM is Failing (And How to Fix It)');
  }, [trackPageView]);

  return (
    <>
      <SEO 
        title="Why Your CRM is Failing (And How to Fix It)"
        description="Most businesses treat CRM as a contact database. Here's how to turn it into your growth engine with proven frameworks and real-world case studies."
        canonical="/blog/why-crm-failing-how-to-fix"
        ogImage="/blog/crm-failure-fix.jpg"
      />
      
      <div className="pt-12">
        {/* Article Header */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Link to="/blog" className="text-accent hover:text-accent-dark transition-colors">
                  ← Back to Blog
                </Link>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Automation</span>
              </div>
              
              <h1 className="text-heading-1 mb-8">
                Why Your CRM is Failing (And How to Fix It)
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  <span>Save</span>
                </div>
              </div>
              
              <p className="text-subheading text-muted-foreground">
                Most businesses treat CRM as a contact database. Here's how to turn it into your growth engine.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Hook */}
              <div className="card-premium bg-gradient-subtle border-accent/20 p-8 mb-12">
                <p className="text-xl font-semibold text-primary mb-4">
                  "Your CRM isn't broken. You're using it wrong."
                </p>
                <p className="text-muted-foreground">
                  After analyzing 500+ CRM implementations across Africa, we discovered that 78% of businesses 
                  treat their CRM like an expensive contact book. Here's how to transform it into your growth engine.
                </p>
              </div>

              <h2>The 5 CRM Failure Patterns We See Everywhere</h2>
              
              <p>
                Most CRM failures follow predictable patterns. Understanding these is the first step to fixing them:
              </p>

              <h3>1. The Data Silo Syndrome</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-red-700">
                      Customer data scattered across spreadsheets, emails, WhatsApp, and sticky notes. 
                      Your CRM becomes just another place to lose information.
                    </p>
                  </div>
                </div>
              </div>

              <h3>2. The User Adoption Crisis</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-red-700">
                      Your team logs in once, gets overwhelmed by complexity, and goes back to their old ways. 
                      CRM becomes a $50,000 paperweight.
                    </p>
                  </div>
                </div>
              </div>

              <h3>3. The Process Misalignment</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-red-700">
                      CRM workflows don't match how your team actually works. You're forcing square pegs into round holes.
                    </p>
                  </div>
                </div>
              </div>

              <h3>4. The Vanity Metrics Trap</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-red-700">
                      Tracking leads created instead of deals closed. Measuring activity instead of outcomes. 
                      Data that looks good but doesn't drive growth.
                    </p>
                  </div>
                </div>
              </div>

              <h3>5. The Integration Nightmare</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">The Problem</h4>
                    <p className="text-red-700">
                      CRM doesn't talk to your email, website, or accounting system. Manual data entry becomes 
                      a full-time job for someone.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Case Study: The Real Estate Agency That Got It Right</h2>
              
              <p>
                Let's look at a real transformation. A Lagos real estate agency went from 20% CRM usage 
                to 95% in 90 days. Here's how:
              </p>

              <h3>Before: The Chaos</h3>
              <ul>
                <li>Customer inquiries scattered across WhatsApp, email, and phone calls</li>
                <li>Agents using personal spreadsheets to track leads</li>
                <li>No visibility into sales pipeline or conversion rates</li>
                <li>Duplicate follow-ups and missed opportunities</li>
                <li>Management flying blind on performance metrics</li>
              </ul>

              <h3>After: The System</h3>
              <ul>
                <li>All customer touchpoints captured in one place</li>
                <li>Automated lead scoring and routing</li>
                <li>Real-time pipeline visibility for management</li>
                <li>Automated follow-up sequences</li>
                <li>Data-driven performance tracking</li>
              </ul>

              <h3>The Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card-premium text-center">
                  <div className="text-3xl font-bold text-accent mb-2">+180%</div>
                  <div className="text-muted-foreground">Lead Conversion Rate</div>
                </div>
                <div className="card-premium text-center">
                  <div className="text-3xl font-bold text-accent mb-2">-60%</div>
                  <div className="text-muted-foreground">Time Spent on Admin</div>
                </div>
                <div className="card-premium text-center">
                  <div className="text-3xl font-bold text-accent mb-2">+250%</div>
                  <div className="text-muted-foreground">Revenue Growth</div>
                </div>
              </div>

              <h2>The CRM Success Framework: People → Process → Technology</h2>
              
              <p>
                Most businesses start with technology and wonder why it fails. The successful ones 
                follow this order:
              </p>

              <h3>Step 1: People (Weeks 1-2)</h3>
              <div className="card-premium bg-green-50 border-green-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Focus on Adoption</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• Get buy-in from your team before implementing</li>
                      <li>• Choose CRM champions who will drive adoption</li>
                      <li>• Provide comprehensive training, not just software demos</li>
                      <li>• Make CRM usage part of performance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Step 2: Process (Weeks 3-6)</h3>
              <div className="card-premium bg-blue-50 border-blue-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Map Your Workflows</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Document your current sales process</li>
                      <li>• Identify bottlenecks and inefficiencies</li>
                      <li>• Design ideal workflows</li>
                      <li>• Create standard operating procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Step 3: Technology (Weeks 7-12)</h3>
              <div className="card-premium bg-purple-50 border-purple-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Configure and Integrate</h4>
                    <ul className="text-purple-700 space-y-2">
                      <li>• Customize CRM to match your processes</li>
                      <li>• Integrate with existing tools</li>
                      <li>• Set up automation rules</li>
                      <li>• Create dashboards and reports</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Your 90-Day CRM Transformation Plan</h2>
              
              <h3>Days 1-30: Foundation</h3>
              <ul>
                <li><strong>Week 1:</strong> Team training and buy-in sessions</li>
                <li><strong>Week 2:</strong> Process mapping and workflow design</li>
                <li><strong>Week 3:</strong> Data cleanup and migration</li>
                <li><strong>Week 4:</strong> Basic CRM configuration</li>
              </ul>

              <h3>Days 31-60: Implementation</h3>
              <ul>
                <li><strong>Week 5:</strong> Go-live with core features</li>
                <li><strong>Week 6:</strong> Integration setup</li>
                <li><strong>Week 7:</strong> Automation rules implementation</li>
                <li><strong>Week 8:</strong> Performance monitoring and optimization</li>
              </ul>

              <h3>Days 61-90: Optimization</h3>
              <ul>
                <li><strong>Week 9:</strong> Advanced features rollout</li>
                <li><strong>Week 10:</strong> Reporting and analytics setup</li>
                <li><strong>Week 11:</strong> Team feedback and refinements</li>
                <li><strong>Week 12:</strong> Full system optimization</li>
              </ul>

              <h2>Advanced Strategies: Beyond Basic CRM</h2>
              
              <h3>AI Integration</h3>
              <p>
                Modern CRMs can predict which leads are most likely to convert, suggest next best actions, 
                and even write follow-up emails. This isn't science fiction—it's available today.
              </p>

              <h3>Automation Workflows</h3>
              <p>
                Set up automated sequences that nurture leads, follow up on proposals, and escalate 
                high-value opportunities. Your CRM should work while you sleep.
              </p>

              <h3>Predictive Analytics</h3>
              <p>
                Use historical data to forecast sales, identify at-risk customers, and optimize 
                your sales process. Data-driven decisions beat gut feelings every time.
              </p>

              <h2>Metrics That Actually Matter</h2>
              
              <p>
                Stop tracking vanity metrics. Here's what to measure instead:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-premium">
                  <h4 className="font-semibold mb-3 text-red-600">❌ Vanity Metrics</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Leads created</li>
                    <li>• Emails sent</li>
                    <li>• Calls made</li>
                    <li>• Activities logged</li>
                  </ul>
                </div>
                <div className="card-premium">
                  <h4 className="font-semibold mb-3 text-green-600">✅ Growth Metrics</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Lead conversion rate</li>
                    <li>• Sales cycle length</li>
                    <li>• Customer lifetime value</li>
                    <li>• Revenue per lead</li>
                  </ul>
                </div>
              </div>

              <h2>The Bottom Line</h2>
              
              <p>
                Your CRM isn't failing because it's a bad tool. It's failing because you're treating 
                it like a contact book instead of a growth engine.
              </p>

              <p>
                Fix the people and process issues first. Then let technology amplify your success. 
                The businesses that get this right don't just survive—they dominate their markets.
              </p>

              {/* CTA Section */}
              <div className="card-premium bg-accent/5 border-accent/30 p-8 mt-12">
                <h3 className="text-heading-3 mb-4">Ready to Fix Your CRM?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a free CRM audit and discover exactly what's holding back your sales growth. 
                  We'll show you how to transform your CRM into a revenue-generating machine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary">
                    Get Free CRM Audit
                  </Link>
                  <Link to="/case-studies" className="btn-secondary">
                    View Success Stories
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <h2 className="text-heading-2 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="card-premium">
                <h3 className="text-xl font-semibold mb-3">
                  <Link to="/blog/automation-for-non-technical-founders" className="hover:text-accent transition-colors">
                    Automation for Non-Technical Founders
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  You don't need to code to automate your business. Here's how to build systems that work while you sleep.
                </p>
                <Link to="/blog/automation-for-non-technical-founders" className="text-accent font-semibold">
                  Read More →
                </Link>
              </article>

              <article className="card-premium">
                <h3 className="text-xl font-semibold mb-3">
                  <Link to="/blog/lead-generation-system-that-works" className="hover:text-accent transition-colors">
                    The $10K Lead Generation System That Works
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step breakdown of the lead generation infrastructure that consistently generates qualified prospects.
                </p>
                <Link to="/blog/lead-generation-system-that-works" className="text-accent font-semibold">
                  Read More →
                </Link>
              </article>

              <article className="card-premium">
                <h3 className="text-xl font-semibold mb-3">
                  <Link to="/blog/proposalagent-case-study-faster-proposals" className="hover:text-accent transition-colors">
                    ProposalAgent Case Study: 80% Faster Proposals
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Real estate agency cuts proposal time from 3 days to 30 minutes using voice-to-proposal automation.
                </p>
                <Link to="/blog/proposalagent-case-study-faster-proposals" className="text-accent font-semibold">
                  Read More →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyCRMFailing;
