import { useState, useEffect } from 'react';
import deTranslations from '@/translations/de.json';
import enTranslations from '@/translations/en.json';

export type Language = 'de' | 'en';

const translations = {
  de: deTranslations,
  en: enTranslations
};

export function useSimpleI18n() {
  const [language, setLanguageState] = useState<Language>('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Always default to German for Swiss audience
      setLanguageState('de');
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

  return {
    language,
    setLanguage,
    t,
    isGerman: language === 'de',
    isEnglish: language === 'en'
  };
}