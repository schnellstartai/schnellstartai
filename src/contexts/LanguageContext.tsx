import React from 'react';
import deTranslations from '@/translations/de.json';
import enTranslations from '@/translations/en.json';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: deTranslations,
  en: enTranslations
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = React.useState<Language>('de');

  // Detect browser language on first load
  React.useEffect(() => {
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

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  }, []);

  const t = React.useCallback((key: string): string => {
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
  }, [language]);

  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};