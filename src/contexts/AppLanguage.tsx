import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import deTranslations from '@/translations/de.json';
import enTranslations from '@/translations/en.json';

type Language = 'de' | 'en';

interface AppLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppLanguageContext = createContext<AppLanguageContextType | undefined>(undefined);

const translations = {
  de: deTranslations,
  en: enTranslations
};

interface AppLanguageProviderProps {
  children: ReactNode;
}

export function AppLanguageProvider({ children }: AppLanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) {
        setLanguageState('en');
      } else {
        setLanguageState('de');
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
    
    if (!value && language === 'en') {
      value = translations.de;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  return (
    <AppLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </AppLanguageContext.Provider>
  );
}

export function useAppLanguage() {
  const context = useContext(AppLanguageContext);
  if (context === undefined) {
    throw new Error('useAppLanguage must be used within an AppLanguageProvider');
  }
  return context;
}