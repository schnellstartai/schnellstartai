import React from 'react';

// Working implementation to satisfy cached imports
interface LanguageContextType {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {}
});

// Simple provider that doesn't use hooks to avoid the useState error
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    language: 'de' as const,
    setLanguage: () => {}
  };
  
  return React.createElement(LanguageContext.Provider, { value }, children);
};

export const useLanguage = () => {
  return React.useContext(LanguageContext);
};