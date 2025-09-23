import { useAppLanguage } from '@/contexts/AppLanguage';

export const useTranslation = () => {
  const { t, language } = useAppLanguage();
  
  return {
    t,
    language,
    isGerman: language === 'de',
    isEnglish: language === 'en'
  };
};