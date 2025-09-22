export const useTranslation = () => {
  return {
    t: (key: string) => key,
    language: 'de' as 'de' | 'en',
    isGerman: true,
    isEnglish: false
  };
};