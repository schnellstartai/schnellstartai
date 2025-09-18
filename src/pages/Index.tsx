import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MetricChip } from '@/components/MetricChip';
import { OptimizedHeroImage } from '@/components/OptimizedHeroImage';
import { LazySection } from '@/components/LazySection';
import ctaBackground from '@/assets/cta-background.png';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Cog, 
  GraduationCap, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Shield,
  Database,
  Cloud,
  Cpu,
  Settings,
  Globe
} from 'lucide-react';

const Index = () => {
  // Fixed: Removed AIResourceCalculator component completely
  const { t } = useTranslation();
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const startSteps = [
    {
      icon: Users,
      title: t('pages.index.steps.workshop.title'),
      description: t('pages.index.steps.workshop.description')
    },
    {
      icon: Cog,
      title: t('pages.index.steps.process.title'),
      description: t('pages.index.steps.process.description')
    },
    {
      icon: TrendingUp,
      title: t('pages.index.steps.profit.title'),
      description: t('pages.index.steps.profit.description')
    }
  ];

  const services = [
    {
      icon: GraduationCap,
      title: t('pages.index.services.introduction.title'),
      description: t('pages.index.services.introduction.description')
    },
    {
      icon: Cog,
      title: t('pages.index.services.automation.title'),
      description: t('pages.index.services.automation.description')
    },
    {
      icon: Users,
      title: t('pages.index.services.coaching.title'),
      description: t('pages.index.services.coaching.description')
    },
    {
      icon: MessageSquare,
      title: t('pages.index.services.webinars.title'),
      description: t('pages.index.services.webinars.description')
    }
  ];

  const techStack = [
    {
      icon: Cpu,
      title: t('pages.index.tech_stack.technologies.azure.title'),
      description: t('pages.index.tech_stack.technologies.azure.description')
    },
    {
      icon: Settings,
      title: t('pages.index.tech_stack.technologies.n8n.title'),
      description: t('pages.index.tech_stack.technologies.n8n.description')
    },
    {
      icon: Database,
      title: t('pages.index.tech_stack.technologies.database.title'),
      description: t('pages.index.tech_stack.technologies.database.description')
    },
    {
      icon: TrendingUp,
      title: t('pages.index.tech_stack.technologies.erp.title'),
      description: t('pages.index.tech_stack.technologies.erp.description')
    },
    {
      icon: Globe,
      title: t('pages.index.tech_stack.technologies.ecommerce.title'),
      description: t('pages.index.tech_stack.technologies.ecommerce.description')
    },
    {
      icon: Cloud,
      title: t('pages.index.tech_stack.technologies.apis.title'),
      description: t('pages.index.tech_stack.technologies.apis.description')
    }
  ];

  const faqs = [
    {
      question: t('pages.index.faqs.compliance.question'),
      answer: t('pages.index.faqs.compliance.answer')
    },
    {
      question: t('pages.index.faqs.tools.question'),
      answer: t('pages.index.faqs.tools.answer')
    },
    {
      question: t('pages.index.faqs.start.question'),
      answer: t('pages.index.faqs.start.answer')
    }
  ];

  return (
    <div className="min-h-screen home-bg relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <OptimizedHeroImage 
          onImageLoad={() => setHeroImageLoaded(true)}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6 animate-fade-in text-white leading-tight">
                 {t('pages.index.hero.title')}
               </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 text-balance animate-fade-in leading-relaxed px-2">
                {t('pages.index.hero.subtitle')}
              </p>
             
             <div className="flex justify-center mb-8 sm:mb-12 px-4">
                <Link to="/contact" aria-label={t('pages.index.hero.cta')}>
                  <Button variant="consultation" className="hover-scale text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                    {t('pages.index.hero.cta')}
                  </Button>
                </Link>
             </div>

            <div className="flex items-center justify-center space-x-2 text-white/80 px-4">
              <CheckCircle size={14} className="text-brand-yellow sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium text-center">{t('pages.index.hero.note')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Start Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('pages.index.steps.title')}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {startSteps.map((step, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-brand-black" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      {/* Testphase Section */}
      <section className="py-8 lg:py-12" id="testphase">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="text-center mb-16 -mt-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.testphase.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pages.index.testphase.subtitle')}
            </p>
          </header>
          
          <article className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-brand-black" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{t('pages.index.testphase.card.title')}</CardTitle>
                    <CardDescription className="text-lg">
                      {t('pages.index.testphase.card.description')}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.testphase.achievements.title')}</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">{t('pages.index.testphase.achievements.workshops')}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">{t('pages.index.testphase.achievements.pilots')}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">{t('pages.index.testphase.achievements.automation')}</span>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.testphase.focus.title')}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t('pages.index.testphase.focus.description')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.testphase.success.title')}</h4>
                    <div className="bg-background/50 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">15+</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.testphase.metrics.workshops')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">8</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.testphase.metrics.partners')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">100%</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.testphase.metrics.compliance')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">Schweiz</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.testphase.metrics.hosting')}</div>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-brand-yellow/30 pl-4 italic text-muted-foreground">
                      "{t('pages.index.testphase.quote')}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="consultation" className="hover-scale text-lg px-8 py-6 h-auto">
                {t('common.free_consultation_cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('pages.index.services_overview.title')}
          </h2>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.services_preview.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-black" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="brand">
                {t('pages.index.services_preview.cta')}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.tech_stack.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pages.index.tech_stack.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <Card key={index} className="group hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 bg-brand-yellow/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                    <tech.icon className="w-7 h-7 text-brand-black" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Shield size={16} className="text-accent" />
              <span className="text-sm font-medium">{t('pages.index.tech_stack.compliance')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.faq_teaser.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/faq">
                <Button variant="brand">
                  {t('pages.index.faq_teaser.cta')}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${ctaBackground})`}}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
              {t('pages.index.cta.ready_title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 text-balance">
              {t('pages.index.cta.ready_subtitle')}
            </p>
            <Link to="/contact">
              <Button variant="consultation" className="hover-scale">
                {t('pages.index.cta.ready_button')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;