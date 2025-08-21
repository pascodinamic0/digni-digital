import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-border z-50">
        {/* Announcement Bar */}
        <div className="bg-gradient-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
          <span>✨ Trusted by Businesses Across Africa & Beyond</span>
        </div>

      <nav className="container-max section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">D</span>
            </div>
            <div className="font-heading font-semibold text-xl text-primary">
              Digni Digital LLC
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/solutions" className="nav-link">Solutions</Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="nav-link flex items-center gap-1">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-premium-lg rounded-xl border border-border p-4 animate-fade-in">
                  <Link 
                    to="/products/proposalagent"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="badge-new">NEW</div>
                    <div>
                      <div className="font-semibold">ProposalAgent</div>
                      <div className="text-sm text-muted-foreground">Speak. We structure. You send.</div>
                    </div>
                  </Link>
                  <Link 
                    to="/products"
                    className="block p-3 rounded-lg hover:bg-muted transition-colors text-accent font-medium"
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/industries" className="nav-link">Industries</Link>
            <Link to="/case-studies" className="nav-link">Case Studies</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            <Link to="/book" className="btn-primary">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/solutions" className="nav-link">Solutions</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/products/proposalagent" className="nav-link ml-4 flex items-center gap-2">
                <div className="badge-new">NEW</div>
                ProposalAgent
              </Link>
              <Link to="/industries" className="nav-link">Industries</Link>
              <Link to="/case-studies" className="nav-link">Case Studies</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/book" className="btn-primary justify-center mt-4">
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;