import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Über uns', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black shadow-soft">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center group">
            <span className="font-semibold text-white group-hover:text-brand-yellow leading-none text-2xl lg:text-3xl">
              Schnellstart.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white/90 hover:text-brand-yellow font-medium leading-none text-base"
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
                className="font-medium px-6 py-2.5 text-base"
              >
                Workshop anfragen
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-yellow"
            aria-label="Menu öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-brand-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-white/90 hover:text-brand-yellow transition-colors font-medium"
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