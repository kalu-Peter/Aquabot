import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import aquabotLogo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const solid = isScrolled || isMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={aquabotLogo} alt="AquaBot" className="h-10 sm:h-12 w-auto rounded-md shadow-sm" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors ${solid ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              About Us
            </Link>
            <button
              onClick={() => scrollToSection('solution')}
              className={`transition-colors ${solid ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className={`transition-colors ${solid ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className={`transition-colors ${solid ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              Community
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${solid ? 'hover:bg-accent text-foreground' : 'hover:bg-white/10 text-white'}`}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About Us
              </Link>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Community
              </button>
              <Button 
                variant="default" 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;