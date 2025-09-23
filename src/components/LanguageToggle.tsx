import { Button } from '@/components/ui/button';
import { useAppLanguage } from '@/contexts/AppLanguage';

export const LanguageToggle = () => {
  const { language, setLanguage } = useAppLanguage();

  const handleLanguageChange = (newLang: 'de' | 'en') => {
    console.log('Language changing from', language, 'to', newLang);
    setLanguage(newLang);
  };

  return (
    <div className="flex items-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLanguageChange('de')}
        className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-all ${
          language === 'de'
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-400'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        DE
      </Button>
      <div className="w-px h-4 bg-white/20" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-all ${
          language === 'en'
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-400'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </Button>
    </div>
  );
};