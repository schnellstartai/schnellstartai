import { useI18n } from '@/contexts/I18nContext';

export const useTranslation = () => {
  const { t, language } = useI18n();
  
  return {
    t,
    language,
    isGerman: language === 'de',
    isEnglish: language === 'en'
  };
};