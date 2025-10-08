import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold">D</span>
              </div>
              <div className="font-heading font-semibold text-lg">
                Digni Digital LLC
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              At Digni Digital LLC, we don't just build systems. We build reputations, customer trust, and long-term growth engines.
            </p>
            <div className="text-sm text-primary-foreground/70 mb-4">
              
              
            </div>
            <div className="text-sm text-primary-foreground/60">
              © 2024 Digni Digital LLC. All rights reserved.
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Lead Generation Engine
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Client Engagement System
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Scaling Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/proposalagent" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2">
                  ProposalAgent
                  <span className="badge-new !bg-accent !text-accent-foreground text-xs">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Contact - Collapsible */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="resources" className="border-primary-foreground/20">
                <AccordionTrigger className="font-heading font-semibold text-primary-foreground hover:text-primary-foreground/80 hover:no-underline py-3">
                  Resources & More
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-2">
                    <div>
                      <h4 className="font-heading font-semibold mb-3 text-sm">Resources</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                            About
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-3 text-sm">Legal</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                            Terms of Service
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-3 text-sm">Contact</h4>
                      <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;