# Bilingual Development Guidelines

## 🌍 Language Implementation Command

**CRITICAL: For all future development, ALWAYS implement features with BOTH German and English content from the start. Never create single-language content.**

### Development Workflow
1. **Plan**: Before coding, define translation keys needed
2. **Implement**: Use `t('key.path')` for ALL user-facing text  
3. **Translate**: Add both DE and EN versions to translation files
4. **Test**: Verify both languages work correctly
5. **Review**: Ensure no hard-coded text remains

### Translation Key Structure
```json
{
  "section": {
    "subsection": {
      "element": "Translation text"
    }
  }
}
```

### Usage in Components
```tsx
import { useTranslation } from '@/hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
};
```

### File Structure
```
src/
├── translations/
│   ├── de.json (German translations)
│   └── en.json (English translations)
├── contexts/
│   └── LanguageContext.tsx
├── hooks/
│   └── useTranslation.ts
└── components/
    └── LanguageToggle.tsx
```

### Quality Checklist
- [ ] All user-facing text uses `t()` function
- [ ] Both DE and EN translations exist
- [ ] Language toggle works on all pages
- [ ] No hard-coded German or English text
- [ ] SEO meta tags are translated
- [ ] Form labels and error messages translated
- [ ] Navigation items translated
- [ ] Button labels translated

### Future Development Rules
1. **No Hard-coded Text**: Never put German or English text directly in JSX
2. **Translation First**: Add translation keys before implementing UI
3. **Both Languages**: Always provide DE and EN versions
4. **Test Both**: Always test language switching functionality
5. **SEO Ready**: Include meta tags, alt texts, and structured data in both languages

## Implementation Status
✅ Language Context and Provider
✅ Language Toggle Component  
✅ Header Navigation (bilingual)
✅ Translation Infrastructure
⏳ Page Content Migration (In Progress)
⏳ Footer Component
⏳ Forms and Components  
⏳ SEO Meta Tags
⏳ URL Structure for Languages

## Next Steps
1. Migrate Index page content to use translations
2. Update Footer component 
3. Implement bilingual routing (/en/ prefix)
4. Add SEO meta tag translations
5. Migrate remaining pages (Services, About, Contact, etc.)