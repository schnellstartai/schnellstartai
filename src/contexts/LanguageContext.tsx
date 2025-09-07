import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translation files with error handling
let deTranslations: any = {};
let enTranslations: any = {};

try {
  deTranslations = require('@/translations/de.json');
  enTranslations = require('@/translations/en.json');
} catch (error) {
  console.error('Translation files not found:', error);
  // Fallback translations
  deTranslations = {
    nav: {
      services: "Services",
      blog: "Blog",
      faq: "FAQ",
      about: "Über uns",
      contact: "Kontakt",
      book_appointment: "Termin buchen"
    },
    pages: {
      index: {
        hero: {
          title: "KI-Automatisierung für Unternehmen in Lichtgeschwindigkeit",
          subtitle: "Schweizer KI-Workflows: schnell umgesetzt, klar messbar, datenkonform.",
          cta: "Kostenlose Beratung anfragen →"
        }
      }
    }
  };
  enTranslations = {
    nav: {
      services: "Services",
      blog: "Blog",
      faq: "FAQ",
      about: "About us",
      contact: "Contact",
      book_appointment: "Book appointment"
    },
    pages: {
      index: {
        hero: {
          title: "AI Automation for Companies at Lightspeed",
          subtitle: "Swiss AI workflows: quickly implemented, clearly measurable, data compliant.",
          cta: "Request free consultation →"
        }
      }
    }
  };
}

const translations = {
  de: deTranslations,
  en: enTranslations
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  // Detect browser language on first load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) {
        setLanguageState('en');
      } else {
        setLanguageState('de'); // Default to German
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to German if English translation not found
    if (!value && language === 'en') {
      value = translations.de;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};