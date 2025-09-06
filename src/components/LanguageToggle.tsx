import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-all ${
          language === 'de'
            ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        DE
      </Button>
      <div className="w-px h-4 bg-white/20" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-all ${
          language === 'en'
            ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </Button>
    </div>
  );
};