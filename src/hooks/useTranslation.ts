import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = () => {
  const { t, language } = useLanguage();
  
  return {
    t,
    language,
    isGerman: true, // Simplified for debugging
    isEnglish: false // Simplified for debugging
  };
};