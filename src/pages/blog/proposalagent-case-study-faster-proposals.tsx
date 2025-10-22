import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Share2, Bookmark, TrendingUp, Users, Zap, Target } from 'lucide-react';
import SEO from '@/components/SEO';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useEffect } from 'react';

const ProposalAgentCaseStudy = () => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('blog-article', 'ProposalAgent Case Study: 80% Faster Proposals');
  }, [trackPageView]);

  return (
    <>
      <SEO 
        title="ProposalAgent Case Study: 80% Faster Proposals"
        description="Real estate agency cuts proposal time from 3 days to 30 minutes using voice-to-proposal automation. Detailed case study with metrics and implementation insights."
        canonical="/blog/proposalagent-case-study-faster-proposals"
        ogImage="/blog/proposalagent-case-study.jpg"
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
                <span className="text-sm text-muted-foreground">Case Studies</span>
              </div>
              
              <h1 className="text-heading-1 mb-8">
                ProposalAgent Case Study: 80% Faster Proposals
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 8, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
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
                Real estate agency cuts proposal time from 3 days to 30 minutes using voice-to-proposal automation.
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
                  "From 3 days to 30 minutes: How one real estate agency transformed their proposal process"
                </p>
                <p className="text-muted-foreground">
                  When Lagos-based Prime Properties implemented ProposalAgent, they didn't just speed up proposals—they revolutionized their entire sales process.
                </p>
              </div>

              <h2>The Challenge: Proposal Bottlenecks Killing Sales</h2>
              
              <p>
                Prime Properties was a successful real estate agency with 15 agents and a growing portfolio. 
                But their proposal process was killing their momentum:
              </p>

              <div className="card-premium bg-red-50 border-red-200 p-6 mb-8">
                <h3 className="font-semibold text-red-800 mb-4">The Old Process (3 Days Average)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-800 text-sm font-semibold">1</div>
                    <span className="text-red-700">Agent meets client, takes handwritten notes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-800 text-sm font-semibold">2</div>
                    <span className="text-red-700">Agent returns to office, types up notes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-800 text-sm font-semibold">3</div>
                    <span className="text-red-700">Manager reviews and edits proposal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-800 text-sm font-semibold">4</div>
                    <span className="text-red-700">Proposal formatted and sent to client</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-800 text-sm font-semibold">5</div>
                    <span className="text-red-700">Client reviews (often requests changes)</span>
                  </div>
                </div>
              </div>

              <h3>The Problems This Created</h3>
              <ul>
                <li><strong>Lost Momentum:</strong> By the time proposals arrived, clients had cooled off</li>
                <li><strong>Inconsistent Quality:</strong> Each agent formatted proposals differently</li>
                <li><strong>High Error Rate:</strong> Manual transcription led to mistakes and omissions</li>
                <li><strong>Resource Drain:</strong> Managers spending 40% of time on proposal editing</li>
                <li><strong>Competitive Disadvantage:</strong> Competitors could respond faster</li>
              </ul>

              <h2>The Solution: ProposalAgent Implementation</h2>
              
              <p>
                Prime Properties implemented ProposalAgent in Q3 2023. Here's how the transformation worked:
              </p>

              <h3>Week 1: Setup and Training</h3>
              <div className="card-premium bg-blue-50 border-blue-200 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Implementation Phase</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Customized ProposalAgent templates for real estate</li>
                      <li>• Integrated with existing CRM system</li>
                      <li>• Trained all 15 agents on voice-to-proposal workflow</li>
                      <li>• Set up automated follow-up sequences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>The New Process (30 Minutes Average)</h3>
              <div className="card-premium bg-green-50 border-green-200 p-6 mb-8">
                <h3 className="font-semibold text-green-800 mb-4">The New Process (30 Minutes Average)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">1</div>
                    <span className="text-green-700">Agent meets client, records conversation with ProposalAgent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">2</div>
                    <span className="text-green-700">AI transcribes and structures proposal automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">3</div>
                    <span className="text-green-700">Agent reviews and sends proposal to client</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-800 text-sm font-semibold">4</div>
                    <span className="text-green-700">Automated follow-up sequence begins</span>
                  </div>
                </div>
              </div>

              <h2>The Results: Numbers That Speak</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card-premium text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-2">80%</div>
                  <div className="text-muted-foreground">Faster Proposals</div>
                  <div className="text-sm text-muted-foreground mt-1">3 days → 30 minutes</div>
                </div>
                <div className="card-premium text-center">
                  <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-2">+45%</div>
                  <div className="text-muted-foreground">Close Rate</div>
                  <div className="text-sm text-muted-foreground mt-1">Faster response = more sales</div>
                </div>
                <div className="card-premium text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-2">+60%</div>
                  <div className="text-muted-foreground">Agent Productivity</div>
                  <div className="text-sm text-muted-foreground mt-1">More time for selling</div>
                </div>
                <div className="card-premium text-center">
                  <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-2">-70%</div>
                  <div className="text-muted-foreground">Admin Time</div>
                  <div className="text-sm text-muted-foreground mt-1">Managers focus on strategy</div>
                </div>
              </div>

              <h3>Revenue Impact</h3>
              <div className="card-premium bg-gradient-subtle border-accent/20 p-6 mb-8">
                <h4 className="font-semibold text-primary mb-4">Financial Results (6 Months Post-Implementation)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">+$2.3M</div>
                    <div className="text-muted-foreground">Additional Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">340%</div>
                    <div className="text-muted-foreground">ROI on ProposalAgent</div>
                  </div>
                </div>
              </div>

              <h2>Technical Deep Dive: How Voice-to-Proposal Works</h2>
              
              <p>
                ProposalAgent uses advanced AI to transform conversations into professional proposals. 
                Here's the technical breakdown:
              </p>

              <h3>Step 1: Voice Capture</h3>
              <p>
                Agents use ProposalAgent's mobile app to record client meetings. The system captures:
              </p>
              <ul>
                <li>Client requirements and preferences</li>
                <li>Budget discussions and constraints</li>
                <li>Timeline and urgency factors</li>
                <li>Specific property details and features</li>
              </ul>

              <h3>Step 2: AI Processing</h3>
              <p>
                ProposalAgent's AI engine processes the conversation using:
              </p>
              <ul>
                <li><strong>Natural Language Processing:</strong> Extracts key information and context</li>
                <li><strong>Template Matching:</strong> Identifies proposal type and structure</li>
                <li><strong>Data Enrichment:</strong> Adds market data and comparable properties</li>
                <li><strong>Quality Assurance:</strong> Checks for completeness and accuracy</li>
              </ul>

              <h3>Step 3: Proposal Generation</h3>
              <p>
                The system generates a professional proposal including:
              </p>
              <ul>
                <li>Executive summary tailored to client needs</li>
                <li>Detailed property analysis and recommendations</li>
                <li>Market insights and pricing strategy</li>
                <li>Next steps and timeline</li>
                <li>Professional formatting and branding</li>
              </ul>

              <h2>Implementation Lessons: What Worked, What Didn't</h2>
              
              <h3>What Worked</h3>
              <div className="card-premium bg-green-50 border-green-200 p-6 mb-6">
                <ul className="text-green-700 space-y-2">
                  <li>• <strong>Gradual Rollout:</strong> Started with top performers, then expanded</li>
                  <li>• <strong>Custom Templates:</strong> Tailored ProposalAgent to real estate workflows</li>
                  <li>• <strong>Manager Buy-in:</strong> Leadership championed the change</li>
                  <li>• <strong>Continuous Training:</strong> Regular sessions to improve usage</li>
                  <li>• <strong>Integration:</strong> Connected with existing CRM and email systems</li>
                </ul>
              </div>

              <h3>What Didn't Work</h3>
              <div className="card-premium bg-red-50 border-red-200 p-6 mb-6">
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Resistance to Change:</strong> Some agents initially pushed back</li>
                  <li>• <strong>Technical Issues:</strong> Mobile app had bugs in first week</li>
                  <li>• <strong>Template Limitations:</strong> Initial templates were too generic</li>
                  <li>• <strong>Training Gaps:</strong> Not all agents received equal training</li>
                </ul>
              </div>

              <h3>How We Fixed the Problems</h3>
              <ul>
                <li><strong>Change Management:</strong> Created incentives for early adopters</li>
                <li><strong>Technical Support:</strong> Provided dedicated support during transition</li>
                <li><strong>Template Refinement:</strong> Iterated based on agent feedback</li>
                <li><strong>Additional Training:</strong> Offered one-on-one sessions for struggling agents</li>
              </ul>

              <h2>ROI Analysis: The Numbers Behind the Success</h2>
              
              <h3>Cost Breakdown</h3>
              <div className="card-premium bg-muted p-6 mb-6">
                <h4 className="font-semibold mb-4">ProposalAgent Investment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>ProposalAgent License (15 users)</span>
                    <span className="font-semibold">$2,400/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementation & Training</span>
                    <span className="font-semibold">$5,000 (one-time)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom Integration</span>
                    <span className="font-semibold">$3,000 (one-time)</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total 6-Month Investment</span>
                    <span className="font-semibold">$19,400</span>
                  </div>
                </div>
              </div>

              <h3>Revenue Generated</h3>
              <div className="card-premium bg-accent/5 border-accent/30 p-6 mb-6">
                <h4 className="font-semibold mb-4">Additional Revenue (6 Months)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Additional deals closed (faster response)</span>
                    <span className="font-semibold">$1,800,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Higher deal values (better proposals)</span>
                    <span className="font-semibold">$500,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total Additional Revenue</span>
                    <span className="font-semibold">$2,300,000</span>
                  </div>
                </div>
              </div>

              <h3>ROI Calculation</h3>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-accent mb-2">340% ROI</div>
                <div className="text-muted-foreground">$2,300,000 revenue ÷ $19,400 investment = 118x return</div>
              </div>

              <h2>The Bottom Line</h2>
              
              <p>
                ProposalAgent didn't just speed up proposals—it transformed Prime Properties' entire sales process. 
                By eliminating bottlenecks and improving proposal quality, they increased revenue by $2.3M in six months.
              </p>

              <p>
                The key wasn't just the technology—it was the implementation strategy, change management, 
                and continuous optimization that made the difference.
              </p>

              {/* CTA Section */}
              <div className="card-premium bg-accent/5 border-accent/30 p-8 mt-12">
                <h3 className="text-heading-3 mb-4">Ready to Transform Your Proposal Process?</h3>
                <p className="text-muted-foreground mb-6">
                  See how ProposalAgent can cut your proposal time by 80% and increase your close rate. 
                  Get a free demo tailored to your industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products/proposalagent" className="btn-primary">
                    Try ProposalAgent Free
                  </Link>
                  <Link to="/case-studies" className="btn-secondary">
                    View More Case Studies
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
                  <Link to="/blog/why-crm-failing-how-to-fix" className="hover:text-accent transition-colors">
                    Why Your CRM is Failing (And How to Fix It)
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Most businesses treat CRM as a contact database. Here's how to turn it into your growth engine.
                </p>
                <Link to="/blog/why-crm-failing-how-to-fix" className="text-accent font-semibold">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProposalAgentCaseStudy;
