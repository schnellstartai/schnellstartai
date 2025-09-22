// Temporarily disabled to resolve React bundling issue
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>Language Provider Disabled</div>;
};

export const useLanguage = () => {
  return {
    language: 'de' as 'de' | 'en',
    setLanguage: (_lang: 'de' | 'en') => {},
    t: (key: string) => key
  };
};