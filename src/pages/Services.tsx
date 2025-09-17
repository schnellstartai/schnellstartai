import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Cog, 
  GraduationCap, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Target,
  Lightbulb,
  Star,
  MapPin,
  Award,
  TrendingUp,
  Handshake,
  Heart
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: GraduationCap,
      title: t('pages.services.service_cards.ai_understand.title'),
      duration: t('pages.services.service_cards.ai_understand.duration'),
      description: t('pages.services.service_cards.ai_understand.description'),
      features: t('pages.services.service_cards.ai_understand.features'),
      price: t('pages.services.service_cards.ai_understand.price'),
      realBenefit: t('pages.services.service_cards.ai_understand.benefit')
    },
    {
      icon: Cog,
      title: t('pages.services.service_cards.automate_processes.title'),
      duration: t('pages.services.service_cards.automate_processes.duration'),
      description: t('pages.services.service_cards.automate_processes.description'),
      features: t('pages.services.service_cards.automate_processes.features'),
      price: t('pages.services.service_cards.automate_processes.price'),
      realBenefit: t('pages.services.service_cards.automate_processes.benefit')
    },
    {
      icon: Users,
      title: t('pages.services.service_cards.ongoing_support.title'),
      duration: t('pages.services.service_cards.ongoing_support.duration'),
      description: t('pages.services.service_cards.ongoing_support.description'),
      features: t('pages.services.service_cards.ongoing_support.features'),
      price: t('pages.services.service_cards.ongoing_support.price'),
      realBenefit: t('pages.services.service_cards.ongoing_support.benefit')
    },
    {
      icon: MessageSquare,
      title: t('pages.services.service_cards.webinars_onsite.title'),
      duration: t('pages.services.service_cards.webinars_onsite.duration'),
      description: t('pages.services.service_cards.webinars_onsite.description'),
      features: t('pages.services.service_cards.webinars_onsite.features'),
      price: t('pages.services.service_cards.webinars_onsite.price'),
      realBenefit: t('pages.services.service_cards.webinars_onsite.benefit')
    }
  ];

  const included = [
    "Vorbereitung und Analyse",
    "Alle Workshop-Materialien", 
    "Praktische Übungen",
    "Follow-up Dokumentation",
    "30 Tage E-Mail Support",
    "Aufzeichnung (bei Webinaren)"
  ];

  const tools = [
    { name: "n8n", description: "Low-Code Automation Platform" },
    { name: "OpenAI/Anthropic", description: "Enterprise-grade KI APIs" },
    { name: "Supabase", description: "Moderne PostgreSQL Datenbank" },
    { name: "Bexio", description: "Schweizer Business Software" },
    { name: "Shopware", description: "E-Commerce Integration" }
  ];

  return (
    <div className="min-h-screen subpage-bg">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/services-header-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white">
              {t('pages.services.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
              {t('pages.services.hero.subtitle')}
            </p>
            <Link to="/contact" aria-label="Kostenloses Beratungsgespräch anfragen">
              <Button variant="consultation" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                {t('pages.services.hero.cta_button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">{t('pages.services.trust_indicators.swiss_hosting')}</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">FADP</div>
                <div className="text-sm text-muted-foreground">{t('pages.services.trust_indicators.data_protection')}</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm text-muted-foreground">{t('pages.services.trust_indicators.time_savings')}</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-muted-foreground">{t('pages.services.trust_indicators.satisfied_sme')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-brand-black" />
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock size={14} className="mr-1" />
                        {service.duration}
                      </div>
                      <div className="font-medium text-accent mt-1">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">
                        {t('common.your_benefit')}: {service.realBenefit}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testphase & Workshops */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-[0.08] w-1/3 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/165c17fc-1508-4c0d-8dd0-80ff58edee85.png)'
          }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.services.test_phase.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('pages.services.test_phase.subtitle')}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{t('pages.services.test_phase.workshop_title')}</CardTitle>
                        <CardDescription>{t('pages.services.test_phase.workshop_subtitle')}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-muted-foreground italic border-l-2 border-muted pl-4">
                      "{t('pages.services.test_phase.quote')}"
                    </blockquote>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-sm text-muted-foreground">{t('pages.services.test_phase.workshops_conducted')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">8</div>
                        <div className="text-sm text-muted-foreground">{t('pages.services.test_phase.partner_companies')}</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2 text-primary">{t('pages.services.test_phase.what_developed')}</h4>
                      <ul className="text-sm space-y-1">
                        <li>• KI-Workshops für verschiedene Branchen</li>
                        <li>• Datenschutz-konforme Automatisierungen</li>
                        <li>• Pilotprojekte mit echten Unternehmen</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Handshake className="w-5 h-5 mr-2 text-primary" />
                      {t('cta_sections.services.test_phase.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{t('cta_sections.services.test_phase.exclusive_access')}</div>
                        <div className="text-xs text-muted-foreground">{t('cta_sections.services.test_phase.exclusive_description')}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{t('pages.services.test_phase.benefits.co_creation')}</div>
                        <div className="text-xs text-muted-foreground">{t('pages.services.test_phase.benefits.co_creation_desc')}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{t('pages.services.test_phase.benefits.discounted_rates')}</div>
                        <div className="text-xs text-muted-foreground">{t('pages.services.test_phase.benefits.discounted_rates_desc')}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{t('pages.services.test_phase.benefits.swiss_quality')}</div>
                        <div className="text-xs text-muted-foreground">{t('pages.services.test_phase.benefits.swiss_quality_desc')}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.services.what_expect.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('pages.services.what_expect.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-accent" />
                    {t('pages.services.what_expect.included_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Array.isArray(included) && included.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-accent" />
                    {t('pages.services.what_expect.after_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {Array.isArray(included) && included.slice(3).map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden">
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-[0.05] w-1/4 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/4dad2f94-656e-4cf7-8fb6-cdb75ce390eb.png)'
          }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.services.tech_stack.title')}</h2>
              <p className="text-xl text-muted-foreground">
                {t('pages.services.tech_stack.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('pages.services.tech_stack.swiss_data_protection')}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('pages.services.tech_stack.swiss_data_protection_desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('pages.services.tech_stack.transparent_pricing')}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('pages.services.tech_stack.transparent_pricing_desc')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/d8acca43-46df-4e42-bd1e-6e4d1d1875e3.png)'
          }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {t('pages.services.final_cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              {t('pages.services.final_cta.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('pages.services.final_cta.step1_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.services.final_cta.step1_desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('pages.services.final_cta.step2_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.services.final_cta.step2_desc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('pages.services.final_cta.step3_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.services.final_cta.step3_desc')}</p>
              </div>
            </div>
            
            <Link to="/contact">
              <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                {t('pages.services.final_cta.button')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t('pages.services.final_cta.benefits')}
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;