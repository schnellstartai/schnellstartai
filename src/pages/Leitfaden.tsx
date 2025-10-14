import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  GraduationCap, Settings, Shield, Database, Globe, 
  Users, TrendingUp, Target, CheckCircle, Linkedin 
} from 'lucide-react';

export default function Leitfaden() {
  const { t } = useTranslation();

  const chapters = [
    { icon: GraduationCap, titleKey: 'chapter1', color: 'red' },
    { icon: Settings, titleKey: 'chapter2', color: 'orange' },
    { icon: Shield, titleKey: 'chapter3', color: 'green' },
    { icon: Database, titleKey: 'chapter4', color: 'red' },
    { icon: Globe, titleKey: 'chapter5', color: 'orange' },
    { icon: Users, titleKey: 'chapter6', color: 'green' },
    { icon: TrendingUp, titleKey: 'chapter7', color: 'red' },
    { icon: Target, titleKey: 'chapter8', color: 'orange' },
    { icon: CheckCircle, titleKey: 'chapter9', color: 'green' }
  ];

  const experts = [
    {
      name: 'Florian Witschi',
      role: t('pages.leitfaden.authors.florian'),
      linkedin: 'https://www.linkedin.com/in/florian-witschi/'
    },
    {
      name: 'Lukas Huber',
      role: t('pages.leitfaden.authors.lukas'),
      linkedin: null
    },
    {
      name: 'David Streuli',
      role: t('pages.leitfaden.authors.david'),
      linkedin: null
    },
    {
      name: 'Dev Roy',
      role: t('pages.leitfaden.authors.dev'),
      linkedin: null
    }
  ];

  const faqItems = [
    { key: 'q1', question: t('pages.leitfaden.faq.q1.question'), answer: t('pages.leitfaden.faq.q1.answer') },
    { key: 'q2', question: t('pages.leitfaden.faq.q2.question'), answer: t('pages.leitfaden.faq.q2.answer') },
    { key: 'q3', question: t('pages.leitfaden.faq.q3.question'), answer: t('pages.leitfaden.faq.q3.answer') },
    { key: 'q4', question: t('pages.leitfaden.faq.q4.question'), answer: t('pages.leitfaden.faq.q4.answer') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/9fb46982-914e-427a-8217-1c13109b3807.png" 
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black/90 via-brand-black/85 to-brand-black/80" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <Badge className="bg-brand-yellow text-brand-black border-0 px-6 py-2 text-lg font-bold">
              {t('pages.leitfaden.hero.badge')}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t('pages.leitfaden.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('pages.leitfaden.hero.subtitle')}
            </p>

            {/* Feature Bullets */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center gap-3 text-white/90 text-left">
                  <CheckCircle className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="font-medium">{t(`pages.leitfaden.hero.features.${num - 1}`)}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 text-white/80 text-sm">
              <span>🇨🇭 Swiss Quality</span>
              <span>•</span>
              <span>✅ FADP-konform</span>
              <span>•</span>
              <span>📘 50+ Seiten</span>
            </div>

            {/* Email Form */}
            <div className="max-w-xl mx-auto pt-8">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('pages.leitfaden.whats_inside.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pages.leitfaden.whats_inside.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {chapters.map(({ icon: Icon, titleKey, color }, index) => (
              <Card 
                key={index}
                className={`glass-box-${color} hover:scale-105 transition-all duration-300 border-0`}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center mb-4 icon-glow-${color}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-brand-black">
                    {t(`pages.leitfaden.chapters.${titleKey}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {t(`pages.leitfaden.chapters.${titleKey}.description`)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('pages.leitfaden.authors.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pages.leitfaden.authors.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {experts.map((expert, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl font-bold text-brand-black">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-brand-black text-center">
                    {expert.name}
                  </CardTitle>
                  {expert.linkedin && (
                    <div className="flex justify-center mt-2">
                      <a 
                        href={expert.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0077B5] hover:text-[#0077B5]/80 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {expert.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Badge */}
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 border-brand-yellow/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-brand-yellow mx-auto mb-3" />
                <CardTitle className="text-lg text-brand-black mb-2">
                  {t('pages.leitfaden.authors.community')}
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Kollektives Wissen von 100+ Praktikern
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('pages.leitfaden.social_proof.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-brand-yellow mb-2">15+</div>
                <p className="text-gray-700">{t('pages.leitfaden.social_proof.workshops')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-brand-yellow mb-2">8</div>
                <p className="text-gray-700">{t('pages.leitfaden.social_proof.partners')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-brand-yellow mb-2">100%</div>
                <p className="text-gray-700">{t('pages.leitfaden.social_proof.compliance')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-brand-yellow mb-2">🇨🇭</div>
                <p className="text-gray-700">Swiss Hosting & Support</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-brand-yellow/30">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 italic text-center leading-relaxed">
                  "{t('pages.leitfaden.social_proof.testimonial')}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              {t('pages.leitfaden.faq.title')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.key} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-brand-black">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-yellow/10 via-white to-brand-yellow/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black">
              {t('pages.leitfaden.final_cta.title')}
            </h2>
            <p className="text-xl text-gray-700">
              {t('pages.leitfaden.final_cta.subtitle')}
            </p>

            {/* Repeat Email Form */}
            <div className="max-w-xl mx-auto pt-4">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
