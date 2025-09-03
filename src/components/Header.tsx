import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Set scrolled state
          setIsScrolled(currentScrollY > 20);
          
          // Handle visibility based on scroll direction
          if (currentScrollY <= 0) {
            // Always show at top
            setIsVisible(true);
          } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
            // Scrolling up and past initial threshold - show header
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY + 10 && currentScrollY > 150) {
            // Scrolling down with hysteresis and past threshold - hide header
            setIsVisible(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Über uns', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled ? 'glass shadow-soft backdrop-blur-md bg-background/80' : 'bg-transparent'
    } ${
      isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group">
            <div className={`rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'w-8 h-8 lg:w-10 lg:h-10' : 'w-10 h-10 lg:w-12 lg:h-12'
            }`}>
              <img 
                src="/lovable-uploads/ad0b8697-6b9c-456a-90c1-f84046dce7b3.png" 
                alt="schnellstart.ai logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'
            }`}>schnellstart.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center transition-all duration-300 ${
            isScrolled ? 'space-x-6' : 'space-x-8'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-white hover:text-brand-yellow transition-all duration-200 font-medium ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button 
                variant="brand" 
                size={isScrolled ? "default" : "lg"}
                className="transition-all duration-300"
              >
                Workshop anfragen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-yellow transition-colors"
            aria-label="Menu öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/20 bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-foreground hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="brand" className="w-full">
                  Workshop anfragen
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};