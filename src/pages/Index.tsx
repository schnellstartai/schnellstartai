import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MetricChip } from '@/components/MetricChip';
import { AIResourceCalculator } from '@/components/AIResourceCalculator';
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
      title: "Einführung in KI",
      description: "Team-Workshop"
    },
    {
      icon: Cog,
      title: "Workflow-Automation",
      description: "n8n, Supabase, Bexio, Shopware"
    },
    {
      icon: Users,
      title: "Coaching & Schulung",
      description: "Praxisnahe Begleitung"
    },
    {
      icon: MessageSquare,
      title: "Webinare",
      description: "CH/EU verfügbar"
    }
  ];

  const techStack = [
    {
      icon: Cpu,
      title: "Azure AI & OpenAI",
      description: "Wir hosten modernste KI-Modelle wie GPT-5, GPT-4.1, GPT-4o (Text, Bild, Audio) sowie spezialisierte Reasoning-Modelle (o-Serie). Über den Azure Model Catalog stehen zudem Llama 3, Mistral, Cohere, DeepSeek, NVIDIA und viele weitere Partner-Modelle zur Verfügung."
    },
    {
      icon: Settings,
      title: "n8n – sicher gehostet",
      description: "Unsere Automationsworkflows laufen in einer eigenen Azure-Umgebung. Dadurch bleiben alle Daten innerhalb eines geschützten Systems – FADP-konform, verschlüsselt und skalierbar."
    },
    {
      icon: Database,
      title: "PostgreSQL / Supabase",
      description: "Wir setzen auf lokale PostgreSQL-Datenbanken oder Supabase-Cloud-Lösungen – je nach Kundenbedarf, von On-Premises bis skalierbarer SaaS-Architektur."
    },
    {
      icon: TrendingUp,
      title: "ERP- & Buchhaltungsintegrationen",
      description: "Bexio, Abacus, Sage und weitere Schweizer Lösungen werden nahtlos angebunden. Damit automatisieren wir Finanzprozesse vom Beleg bis zum Reporting."
    },
    {
      icon: Globe,
      title: "Shop-Integrationen",
      description: "Egal ob Shopware, Shopify oder andere Plattformen – wir verbinden Ihr E-Commerce mit Buchhaltung, ERP oder CRM für durchgängige Abläufe."
    },
    {
      icon: Cloud,
      title: "APIs & Cloud-Services",
      description: "Microsoft 365, Google Workspace, individuelle APIs – wir integrieren bestehende Systeme sicher und effizient."
    }
  ];

  const faqs = [
    {
      question: "DSG/DSGVO-konform",
      answer: "Ja – Mit Datensparsamkeit, CH/EU-Hosting und AV-Verträgen für maximale Sicherheit."
    },
    {
      question: "Welche Tools nutzt ihr?",
      answer: "Nur stabile Lösungen wie n8n, OpenAI/Anthropic, Supabase, Bexio und Shopware."
    },
    {
      question: "Wie starten wir?",
      answer: "Kurzes Erstgespräch, gefolgt von Workshop, kleinem Pilot, Review und Rollout."
    }
  ];

  return (
    <div className="min-h-screen home-bg relative">
      <Header />
      
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700 ${
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
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-fade-in text-white">
                 {t('pages.index.hero.title')}
               </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance animate-fade-in">
                {t('pages.index.hero.subtitle')}
              </p>
             
             <div className="flex justify-center mb-12">
                <Link to="/contact" aria-label={t('pages.index.hero.cta')}>
                  <Button variant="brand" className="hover-scale bg-brand-yellow text-black hover:bg-brand-yellow/90">
                    {t('pages.index.hero.cta')}
                  </Button>
               </Link>
             </div>

            <div className="flex items-center justify-center space-x-2 text-white/80">
              <CheckCircle size={16} className="text-brand-yellow" />
              <span className="text-sm font-medium">{t('pages.index.hero.note')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Start Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pages.index.steps.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <CardTitle className="text-xl">Beispiel: Rechnungseingang → n8n → Bexio</CardTitle>
                <ArrowRight className="w-5 h-5 text-accent animate-pulse" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">−65% Klicks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Automatische Erkennung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Direkte Bexio-Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Revisionssicher</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailliertes Case Study */}
      <section className="py-16 bg-muted/50" id="case-study">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wie funktioniert Automatisierung konkret?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Am Beispiel Rechnungsverarbeitung: Von der E-Mail bis zur Buchhaltung – vollautomatisch
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20 mb-12">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Automatische Rechnungsverarbeitung</CardTitle>
                  <CardDescription className="text-base">
                    Eingehende Rechnungen werden automatisch erkannt, verarbeitet und in Bexio erfasst
                  </CardDescription>
                </div>
                <MetricChip metric="−65% Arbeitszeit" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">E-Mail empfangen</h4>
                  <p className="text-sm text-muted-foreground">Rechnung kommt per E-Mail an</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">KI analysiert</h4>
                  <p className="text-sm text-muted-foreground">Automatische Datenextraktion aus PDF</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">n8n verarbeitet</h4>
                  <p className="text-sm text-muted-foreground">Workflow prüft und kategorisiert</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brand-black">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Bexio Eintrag</h4>
                  <p className="text-sm text-muted-foreground">Rechnung wird automatisch erfasst</p>
                </div>
              </div>
              
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-center">Konkrete Vorteile für Ihr Unternehmen</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">Zeitersparnis</h5>
                      <p className="text-sm text-muted-foreground">Keine manuelle Dateneingabe mehr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">Fehlerreduktion</h5>
                      <p className="text-sm text-muted-foreground">Tippfehler gehören der Vergangenheit an</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <h5 className="font-medium">Compliance</h5>
                      <p className="text-sm text-muted-foreground">Revisionssicher und nachvollziehbar</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Erfolgsgeschichten aus der Praxis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schweizer KMU teilen ihre Erfahrungen mit KI-Automatisierung
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
                    <CardTitle className="text-2xl mb-2">Selbständige Treuhand-Expertin spart 50% Zeit</CardTitle>
                    <CardDescription className="text-lg">
                      Dank KI-Integration: Automatisierte Reports und fehlerfreie Rechnungsstellung
                    </CardDescription>
                  </div>
                  <MetricChip metric="−50% Zeitaufwand" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Die Herausforderung</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Als selbständige Treuhänderin war ich täglich mit repetitiven Aufgaben beschäftigt: 
                      Rechnungen manuell erfassen, Reports zusammenstellen, Daten zwischen verschiedenen 
                      Systemen übertragen. Das kostete mich wertvolle Zeit, die ich lieber für die Beratung 
                      meiner Mandanten eingesetzt hätte."
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-4">Die Lösung</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">Automatische Rechnungserkennung und -erfassung</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">KI-gestützte Report-Generierung aus Rohdaten</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1" />
                        <span className="text-sm">Direkte Integration in bestehende Buchhaltungssoftware</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Die Resultate</h4>
                    <div className="bg-background/50 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">50%</div>
                          <div className="text-sm text-muted-foreground">weniger Zeit für Reports</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">0</div>
                          <div className="text-sm text-muted-foreground">manuelle Eingabefehler</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">+30%</div>
                          <div className="text-sm text-muted-foreground">mehr Zeit für Beratung</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent mb-1">100%</div>
                          <div className="text-sm text-muted-foreground">nachvollziehbar</div>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-brand-yellow/30 pl-4 italic text-muted-foreground">
                      "Ich kann mich jetzt auf das konzentrieren, was ich am besten kann: 
                      meine Mandanten beraten. Die KI übernimmt die Routine – fehlerfrei und zuverlässig."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="brand" className="hover-scale">
                Ihre Erfolgsgeschichte beginnt hier
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Resource Calculator */}
      <AIResourceCalculator />

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Praxiserprobte Lösungen für Schweizer KMU</h2>
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
                Alle Services ansehen
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Tech-Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nur stabile Technologien – sicher, flexibel und 100% FADP-konform
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
              <span className="text-sm font-medium">Schweizer Datenschutz (FADP) und EU-DSGVO konform</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufige Fragen: Direkte Antworten auf die wichtigsten Punkte</h2>
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
                  Alle FAQ ansehen
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
              Lassen Sie uns Ihren ersten Prozess automatisieren
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Kostenloses Erstgespräch mit konkreten Lösungsvorschlägen und messbaren Ergebnissen.
            </p>
            <Link to="/contact">
              <Button variant="brand" className="hover-scale">
                Jetzt Termin vereinbaren
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