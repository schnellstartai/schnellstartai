import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                  <path d="M24 12L32 28H16L24 12Z" fill="currentColor" className="text-brand-black"/>
                </svg>
              </div>
              <span className="text-lg font-bold">schnellstart.ai</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              KI-Workshops und Automation für Schweizer KMU. 
              Praxisnah, sicher, messbar.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Über uns</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-accent transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-muted-foreground" />
                <a href="mailto:info@schnellstart.ai" className="text-muted-foreground hover:text-accent transition-colors">
                  info@schnellstart.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">Schweizweit verfügbar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin size={16} className="text-muted-foreground" />
                <a 
                  href="https://www.linkedin.com/company/schnellstart-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 schnellstart.ai · Frauenfeld, Schweiz · Made with 💛 for Swiss KMU
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Website developed by{' '}
            <a 
              href="https://otterino.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Otterino
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};