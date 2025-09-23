import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppLanguage } from '@/contexts/AppLanguage';
import { LanguageToggle } from '@/components/LanguageToggle';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useAppLanguage();

  const navItems = [
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.faq'), href: '/faq' },
    { label: t('nav.about'), href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-black/80 via-brand-black/85 to-brand-black/80 backdrop-blur-xl border-b border-brand-yellow/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] supports-[backdrop-filter]:bg-brand-black/60">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 via-transparent to-brand-yellow/5 rounded-lg"></div>
          {/* Brand */}
          <Link to="/" className="flex items-center group relative z-10">
            <span className="font-semibold text-white group-hover:text-brand-yellow leading-none text-2xl lg:text-3xl transition-all duration-300 group-hover:scale-105 drop-shadow-lg">
              Schnellstart.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white/90 hover:text-brand-yellow font-medium leading-none text-base transition-all duration-300 hover:scale-105 relative group"
              >
                <span className="relative z-10 drop-shadow-sm">{item.label}</span>
                <div className="absolute inset-0 bg-brand-yellow/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </Link>
            ))}
            
            {/* Language Toggle */}
            <div className="relative">
              <LanguageToggle />
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center relative z-10">
            <a 
              href="https://calendly.com/schnellstart-info/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                variant="brand" 
                className="font-medium px-6 py-2.5 text-base hover-scale relative overflow-hidden"
              >
                <span className="relative z-10">{t('nav.book_appointment')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow via-brand-yellow/90 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-yellow transition-all duration-300 hover:scale-110 relative z-10 hover:bg-brand-yellow/10 rounded-lg backdrop-blur-sm"
            aria-label={isMobileMenuOpen ? t('nav.close_menu') : t('nav.open_menu')}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-yellow/20 bg-gradient-to-b from-brand-black/95 to-brand-black/90 backdrop-blur-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/5 to-transparent"></div>
            <div className="px-4 py-4 space-y-4 relative z-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-white/90 hover:text-brand-yellow transition-all duration-300 font-medium hover:translate-x-2 hover:bg-brand-yellow/10 px-3 py-2 rounded-lg backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="pt-2 pb-2">
                <LanguageToggle />
              </div>
              
              <a 
                href="https://calendly.com/schnellstart-info/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group"
              >
                <Button variant="brand" className="w-full hover-scale relative overflow-hidden">
                  <span className="relative z-10">{t('nav.book_appointment')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow via-brand-yellow/90 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};