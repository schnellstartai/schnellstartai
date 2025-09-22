import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = () => {
  const { t, language } = useLanguage();
  
  return {
    t,
    language,
    isGerman: language === 'de',
    isEnglish: language === 'en'
  };
};