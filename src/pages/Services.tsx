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
  Lightbulb
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Einführung in KI",
      duration: "2–4 Stunden",
      description: "Workshop für Teams und Führungskräfte",
      features: [
        "KI-Grundlagen ohne Technik-Jargon",
        "Risiken und Datenschutz (DSG/DSGVO)",
        "Live-Demos mit echten Use Cases",
        "Sofort umsetzbare Empfehlungen"
      ],
      price: "Fixpreis Workshop"
    },
    {
      icon: Cog,
      title: "Workflow-Automation",
      duration: "Projekt-basiert",
      description: "Stabile, wartbare Automation-Pipelines",
      features: [
        "n8n Low-Code Workflows",
        "OpenAI/Anthropic Integration",
        "Supabase Datenbank-Anbindung",
        "Bexio & Shopware Konnektoren",
        "Monitoring und Wartung"
      ],
      price: "Paket nach Aufwand"
    },
    {
      icon: Users,
      title: "Coaching & Schulung",
      duration: "Laufend",
      description: "Team-fit und Best Practices",
      features: [
        "Change Management",
        "Best Practice Reviews",
        "Kontinuierliche Verbesserung",
        "Team-spezifisches Training"
      ],
      price: "Monatliche Betreuung"
    },
    {
      icon: MessageSquare,
      title: "Webinare & On-site",
      duration: "Flexibel",
      description: "Schweizweit verfügbar",
      features: [
        "Online oder vor Ort",
        "Branchen-spezifische Inhalte",
        "Interaktive Sessions",
        "Aufzeichnungen verfügbar"
      ],
      price: "Ab CHF 800"
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Services – Workshops, Workflows, Coaching
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Wir starten schlank: 1 Workshop, 1 Prozess, 1 messbarer Gewinn. 
              Danach skalieren wir nur, was wirkt.
            </p>
            <Link to="/contact">
              <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto">
                Kostenloses Beratungsgespräch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
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
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was ist inklusive?</h2>
              <p className="text-xl text-muted-foreground">
                Vollumfängliche Betreuung von der Analyse bis zur Umsetzung
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-accent" />
                    Workshop-Paket
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {included.slice(0, 3).map((item, index) => (
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
                    Follow-up Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {included.slice(3).map((item, index) => (
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Technologie</h2>
              <p className="text-xl text-muted-foreground">
                Nur bewährte Tools, die stabil und wartbar sind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-accent/5 rounded-xl border border-accent/10">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Preisgestaltung</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Workshops haben einen Fixpreis (ab CHF 1'200 für 4h). Automation-Projekte 
                    werden als Paket geschätzt. Coaching ist monatlich buchbar. 
                    Alle Preise verstehen sich exkl. MwSt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Kostenloses 30-Minuten Gespräch zum Kennenlernen und ersten Einschätzung.
            </p>
            <Link to="/contact">
              <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto">
                Termin vereinbaren
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

export default Services;