import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MetricChip } from '@/components/MetricChip';

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
  
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/01260b90-8d60-44bb-9796-0cd3cbce3751.png';
    img.onload = () => setHeroImageLoaded(true);
  }, []);

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
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700 pt-16 ${
        heroImageLoaded 
          ? 'hero-bg-loaded' 
          : 'bg-gradient-to-br from-brand-yellow/20 via-brand-black/5 to-accent/10'
      }`}>
        {heroImageLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
            style={{backgroundImage: 'url(/lovable-uploads/01260b90-8d60-44bb-9796-0cd3cbce3751.png)'}}
          />
        )}
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
          
          {/* Example Box */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg sm:text-xl">{t('pages.index.steps.example.title')}</CardTitle>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{t('pages.index.steps.example.benefits.clicks')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{t('pages.index.steps.example.benefits.recognition')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{t('pages.index.steps.example.benefits.integration')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>{t('pages.index.steps.example.benefits.audit')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailliertes Case Study */}
      <section className="py-12 sm:py-16 bg-muted/50" id="case-study">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('pages.index.case_study.title')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              {t('pages.index.case_study.subtitle')}
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20 mb-12">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{t('pages.index.case_study.process.title')}</CardTitle>
                  <CardDescription className="text-base">
                    {t('pages.index.case_study.process.description')}
                  </CardDescription>
                </div>
                <MetricChip metric={t('pages.index.case_study.process.metric')} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.index.case_study.steps.email.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('pages.index.case_study.steps.email.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.index.case_study.steps.ai.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('pages.index.case_study.steps.ai.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.index.case_study.steps.n8n.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('pages.index.case_study.steps.n8n.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">{t('pages.index.case_study.steps.bexio.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('pages.index.case_study.steps.bexio.description')}</p>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-center">{t('pages.index.case_study.benefits.title')}</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">{t('pages.index.case_study.benefits.time_saving.title')}</h5>
                      <p className="text-sm text-muted-foreground">{t('pages.index.case_study.benefits.time_saving.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">{t('pages.index.case_study.benefits.error_reduction.title')}</h5>
                      <p className="text-sm text-muted-foreground">{t('pages.index.case_study.benefits.error_reduction.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">{t('pages.index.case_study.benefits.compliance.title')}</h5>
                      <p className="text-sm text-muted-foreground">{t('pages.index.case_study.benefits.compliance.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="py-16 lg:py-24" id="erfolgsgeschichten">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.success_stories.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pages.index.success_stories.subtitle')}
            </p>
          </header>
          
          <article className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-brand-black" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{t('pages.index.success_stories.story.title')}</CardTitle>
                    <CardDescription className="text-lg">
                      {t('pages.index.success_stories.story.subtitle')}
                    </CardDescription>
                  </div>
                  <MetricChip metric={t('pages.index.success_stories.story.metric')} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.success_stories.story.challenge.title')}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t('pages.index.success_stories.story.challenge.description')}
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.success_stories.story.solution.title')}</h4>
                    <div className="space-y-3">
                      {[
                        t('pages.index.success_stories.story.solution.items.0'),
                        t('pages.index.success_stories.story.solution.items.1'),
                        t('pages.index.success_stories.story.solution.items.2')
                      ].map((item: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-1" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">{t('pages.index.success_stories.story.results.title')}</h4>
                    <div className="bg-background/50 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">{t('pages.index.success_stories.story.results.metrics.time.value')}</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.success_stories.story.results.metrics.time.label')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">{t('pages.index.success_stories.story.results.metrics.errors.value')}</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.success_stories.story.results.metrics.errors.label')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">{t('pages.index.success_stories.story.results.metrics.consulting.value')}</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.success_stories.story.results.metrics.consulting.label')}</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">{t('pages.index.success_stories.story.results.metrics.traceability.value')}</div>
                          <div className="text-sm text-muted-foreground">{t('pages.index.success_stories.story.results.metrics.traceability.label')}</div>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-brand-yellow/30 pl-4 italic text-muted-foreground">
                      {t('pages.index.success_stories.story.quote')}
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="consultation" className="hover-scale">
                {t('pages.index.success_stories.cta')}
                <ArrowRight className="ml-2" size={16} />
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-yellow/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {t('pages.index.cta.ready_title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
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