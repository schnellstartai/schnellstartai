import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type ScrollState = 'top' | 'scrolled-visible' | 'hidden';

export const Header = () => {
  const [scrollState, setScrollState] = useState<ScrollState>('top');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY <= 30) {
            // At top - show full header
            setScrollState('top');
          } else {
            // Past threshold - check scroll direction
            if (currentScrollY < lastScrollY) {
              // Scrolling up - show compact header
              setScrollState('scrolled-visible');
            } else if (currentScrollY > lastScrollY) {
              // Scrolling down - hide header
              setScrollState('hidden');
            }
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

  // Derived states for cleaner logic
  const isScrolled = scrollState !== 'top';
  const isVisible = scrollState !== 'hidden';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled ? 'glass shadow-soft backdrop-blur-md bg-background/80' : 'bg-transparent'
    } ${
      isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
    }`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-18'
        }`}>
          {/* Brand */}
          <Link to="/" className="flex items-center group">
            <span className={`font-semibold text-white transition-all duration-300 group-hover:text-brand-yellow leading-none ${
              isScrolled ? 'text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'
            }`}>Schnellstart.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center transition-all duration-300 ${
            isScrolled ? 'space-x-7' : 'space-x-8'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-white/90 hover:text-brand-yellow transition-all duration-200 font-medium leading-none ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button 
                variant="brand" 
                size={isScrolled ? "sm" : "default"}
                className={`transition-all duration-300 font-medium ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2.5 text-base'
                }`}
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