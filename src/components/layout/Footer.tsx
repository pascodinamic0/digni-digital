import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
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
              At Digni Digital LLC, we don't just build systems — we build reputations, customer trust, and long-term growth engines.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 Digni Digital LLC. All rights reserved.
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/solutions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Lead Generation Engine
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Client Engagement System
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
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
                <Link 
                  to="/products/proposalagent" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  ProposalAgent
                  <span className="badge-new !bg-accent !text-accent-foreground text-xs">NEW</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>

            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <Link 
              to="/contact" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <Link 
            to="/book" 
            className="btn-accent"
          >
            Start Your Transformation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;