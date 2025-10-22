import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  ArrowRight,
  Building2,
  Users,
  Award,
  Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-accent-foreground font-heading font-bold text-xl">D</span>
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl">Digni Digital</h2>
                  <p className="text-primary-foreground/70 text-sm">Premium Digital Solutions</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed max-w-md">
                We don't just build systems. We build reputations, customer trust, and long-term growth engines that transform businesses.
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">500+</div>
                  <div className="text-xs text-primary-foreground/70">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">98%</div>
                  <div className="text-xs text-primary-foreground/70">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-xs text-primary-foreground/70">Support</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Solutions & Products */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Solutions */}
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-accent" />
                    Solutions
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Lead Generation Engine
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Client Engagement System
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Scaling Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Digital Transformation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Products
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/products/proposalagent" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="flex items-center gap-2">
                          ProposalAgent
                          <span className="badge-new !bg-accent !text-accent-foreground text-xs px-2 py-1">NEW</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        View All Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group">
                        <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Blog & Insights
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter & Contact */}
            <div className="lg:col-span-4">
              {/* Newsletter Signup */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  Stay Updated
                </h3>
                <p className="text-primary-foreground/70 mb-4 text-sm">
                  Get the latest insights on digital transformation and business growth.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
                  />
                  <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-6">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Get In Touch
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-sm">hello@dignidigital.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-sm">Schedule a Call</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">30 N Gould St Ste R</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">Sheridan, WY 82801</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground/80">
                    <Globe className="h-4 w-4 text-accent" />
                    <span className="text-sm">www.digni-digital.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full bg-accent hover:bg-accent-dark text-accent-foreground">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2025 Digni Digital LLC. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="text-primary-foreground/60 hover:text-accent transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;