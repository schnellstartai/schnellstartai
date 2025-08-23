import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MetricChip } from '@/components/MetricChip';
import { Link } from 'react-router-dom';
import { Zap, Target, TrendingUp, Users, Cog, GraduationCap, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
const Index = () => {
  const startSteps = [{
    icon: Users,
    title: "Workshop",
    description: "2–4 Stunden Einführung mit echten Use Cases aus Schweizer KMU."
  }, {
    icon: Cog,
    title: "Prozess",
    description: "Einen Prozess klar definieren und sauber automatisieren – zugeschnitten auf Ihr Business."
  }, {
    icon: TrendingUp,
    title: "Gewinn",
    description: "Messbare Zeit- oder Kosteneinsparungen, die sich direkt auf Ihren Erfolg auswirken."
  }];
  const services = [{
    icon: GraduationCap,
    title: "Einführung in KI",
    description: "Team-Workshop"
  }, {
    icon: Cog,
    title: "Workflow-Automation",
    description: "n8n, Supabase, Bexio, Shopware"
  }, {
    icon: Users,
    title: "Coaching & Schulung",
    description: "Praxisnahe Begleitung"
  }, {
    icon: MessageSquare,
    title: "Webinare",
    description: "CH/EU verfügbar"
  }];
  const faqs = [{
    question: "Ist das DSG/DSGVO-konform?",
    answer: "Ja – Mit Datensparsamkeit, CH/EU-Hosting und AV-Verträgen für maximale Sicherheit."
  }, {
    question: "Welche Tools nutzt ihr?",
    answer: "Nur stabile Lösungen wie n8n, OpenAI/Anthropic, Supabase, Bexio und Shopware."
  }, {
    question: "Wie starten wir?",
    answer: "Kurzes Erstgespräch, gefolgt von Workshop, kleinem Pilot, Review und Rollout."
  }];
  return <div className="min-h-screen home-bg relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden hero-bg-alps">
        <div className="absolute inset-0 home-spotlight" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-fade-in">Sparen Sie bis zu 65%
Zeit mit KI   
Ist Ihr Alltag bereit dafür?</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in">
              Wir zeigen Schweizer KMU, wie Künstliche Intelligenz Abläufe vereinfacht, Prozesse automatisiert und den Alltag effizienter macht. Praxisnah, verständlich und 100% DSG-konform – direkt in der Schweiz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                  Kostenlosen Workshop anfragen
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                  Mehr erfahren
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <CheckCircle size={16} className="text-accent" />
              <span className="text-sm font-medium">Webinar oder vor Ort in der Schweiz – Flexible Optionen für Ihr Team.</span>
            </div>
          </div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-brand-yellow/10 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-40 right-16 w-4 h-4 bg-accent/10 rounded-full animate-pulse delay-1000 opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-brand-yellow/10 rounded-full animate-pulse delay-2000 opacity-25" />
      </section>

      {/* How We Start Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So starten wir: Drei klare Schritte zum messbaren Erfolg</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {startSteps.map((step, index) => <Card key={index} className="text-center hover-scale">
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
              </Card>)}
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

      {/* Mini Case Study */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Rechnungseingang → n8n → Bexio</CardTitle>
                  <CardDescription className="text-base">
                    65% weniger Klicks und schnellere Freigabe. Stabil und revisionssicher.
                  </CardDescription>
                </div>
                <MetricChip metric="−65% Klicks" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Automatische Erkennung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span>Direkte Bexio-Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Revisionssicher</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Praxiserprobte Lösungen für Schweizer KMU</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <Card key={index} className="text-center group hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-black" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="brand" size="lg">
                Alle Services ansehen
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
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
              {faqs.map((faq, index) => <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="text-center">
              <Link to="/faq">
                <Button variant="brand" size="lg">
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
              <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                Jetzt Termin vereinbaren
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;