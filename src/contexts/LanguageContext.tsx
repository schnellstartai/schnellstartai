import React from 'react';

// Simple stub to prevent bundler errors
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(React.Fragment, null, children);
};

export const useLanguage = () => ({
  language: 'de' as const,
  setLanguage: () => {}
});