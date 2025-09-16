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

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "KI verstehen & nutzen",
      duration: "2–4 Stunden",
      description: "Workshop für Teams und Führungskräfte – ohne Fachchinesisch",
      features: [
        "KI-Basics in einfacher Sprache erklärt",
        "Schweizer Datenschutz (FADP/DSG) verständlich gemacht",
        "Live-Beispiele aus dem Alltag Ihres Betriebs",
        "Sofort anwendbare Tipps für Ihr Team"
      ],
      price: "CHF 1'200 (Fixpreis)",
      realBenefit: "Ihr Team versteht KI und kann sie sicher nutzen"
    },
    {
      icon: Cog,
      title: "Abläufe automatisieren",
      duration: "Projekt-basiert",
      description: "Wiederkehrende Aufgaben übernimmt die KI – Sie haben mehr Zeit fürs Wesentliche",
      features: [
        "Rechnungen automatisch verarbeiten und weiterleiten",
        "Kundendaten zwischen Systemen synchronisieren",
        "E-Mails sortieren und Antworten vorschlagen",
        "Berichte automatisch erstellen lassen",
        "Wartung und Support inbegriffen"
      ],
      price: "Ab CHF 3'000 (Paket)",
      realBenefit: "Sparen Sie 5-10 Stunden pro Woche für wichtigere Aufgaben"
    },
    {
      icon: Users,
      title: "Laufende Begleitung",
      duration: "Monatlich",
      description: "Ihr persönlicher KI-Coach – damit alles reibungslos läuft",
      features: [
        "Monatliche Optimierungen Ihrer Abläufe",
        "Schnelle Hilfe bei Fragen oder Problemen",
        "Neue KI-Möglichkeiten für Ihr Unternehmen",
        "Schulungen für neue Mitarbeitende"
      ],
      price: "CHF 800/Monat",
      realBenefit: "Kontinuierliche Verbesserung ohne eigene IT-Abteilung"
    },
    {
      icon: MessageSquare,
      title: "Webinare & Vor-Ort Termine",
      duration: "Flexibel",
      description: "Schweizweit verfügbar – Online oder bei Ihnen im Betrieb",
      features: [
        "Massgeschneidert für Ihre Branche",
        "Interaktive Workshops mit echten Beispielen",
        "Alle Unterlagen zum Mitnehmen",
        "Aufzeichnung für spätere Verwendung"
      ],
      price: "Ab CHF 800",
      realBenefit: "Flexible Weiterbildung genau dann, wenn Sie Zeit haben"
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
              KI einfach erklärt, konkret umgesetzt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
              Wir machen KI verständlich für Ihr Team und automatisieren Ihre Abläufe – ohne komplizierte Technik. 
              Schweizer Qualität, Datenschutz inbegriffen.
            </p>
            <Link to="/contact" aria-label="Kostenloses Beratungsgespräch anfragen">
              <Button variant="consultation" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                Kostenloses Beratungsgespräch →
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
                <div className="text-sm text-muted-foreground">Schweizer Hosting</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">FADP</div>
                <div className="text-sm text-muted-foreground">Datenschutz konform</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm text-muted-foreground">Zeitersparnis typisch</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-muted-foreground">Zufriedene KMU</div>
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
                        Ihr Nutzen: {service.realBenefit}
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

      {/* Success Story */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So profitieren Schweizer KMU bereits</h2>
              <p className="text-xl text-muted-foreground">
                Echte Ergebnisse von echten Unternehmen
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Sandra M., Treuhandbüro Zürich</CardTitle>
                        <CardDescription>15 Mitarbeitende, 60+ Mandanten</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-muted-foreground italic border-l-2 border-muted pl-4">
                      "Früher verbrachte ich Stunden mit Rechnungsberichten und manueller Eingabe. 
                      Jetzt macht das die KI automatisch – und ohne Fehler."
                    </blockquote>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">50%</div>
                        <div className="text-sm text-muted-foreground">weniger Zeit für Reports</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">0</div>
                        <div className="text-sm text-muted-foreground">manuelle Fehler</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2 text-primary">Konkret automatisiert:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rechnungen scannen und in Bexio erfassen</li>
                        <li>• Monatliche Reports automatisch erstellen</li>
                        <li>• Mandanten-Updates per E-Mail verschicken</li>
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
                      Warum Schweizer KMU uns vertrauen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Schweizer Werte</div>
                        <div className="text-xs text-muted-foreground">Zuverlässigkeit und Qualität stehen im Mittelpunkt</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Verständliche Erklärungen</div>
                        <div className="text-xs text-muted-foreground">Kein Fachchinesisch, sondern klare Kommunikation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Langfristige Partnerschaft</div>
                        <div className="text-xs text-muted-foreground">Wir begleiten Sie auch nach der Umsetzung</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">Transparente Preise</div>
                        <div className="text-xs text-muted-foreground">Fixpreise ohne versteckte Kosten</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was Sie von uns erwarten können</h2>
              <p className="text-xl text-muted-foreground">
                Vollumfängliche Betreuung – von der ersten Idee bis zur fertigen Lösung
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-accent" />
                    Das ist für Sie inklusive
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
                    Auch danach für Sie da
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Die Technik dahinter</h2>
              <p className="text-xl text-muted-foreground">
                Bewährte Schweizer und internationale Standards – sicher und zuverlässig
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
                      <h3 className="font-semibold text-lg mb-2">Schweizer Datenschutz garantiert</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Alle Daten bleiben in der Schweiz. FADP/DSG-konform, verschlüsselt und auditierbar. 
                        Ihre Geschäftsdaten sind bei uns sicher.
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
                      <h3 className="font-semibold text-lg mb-2">Transparente Preisgestaltung</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Workshops ab CHF 1'200 (Fixpreis). Automation-Projekte als Paket ab CHF 3'000. 
                        Monatliche Betreuung ab CHF 800. Alle Preise exkl. MwSt.
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
              Lassen Sie uns gemeinsam Ihr Potenzial entdecken
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Kostenloses 30-Minuten Gespräch – wir schauen uns Ihre aktuellen Abläufe an 
              und zeigen Ihnen konkrete Möglichkeiten auf.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Kennenlernen</h3>
                <p className="text-sm text-muted-foreground">Erzählen Sie uns von Ihren täglichen Herausforderungen</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Potenzial aufzeigen</h3>
                <p className="text-sm text-muted-foreground">Wir zeigen konkrete Automatisierungsmöglichkeiten</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Nächste Schritte</h3>
                <p className="text-sm text-muted-foreground">Gemeinsam definieren wir den optimalen Weg</p>
              </div>
            </div>
            
            <Link to="/contact">
              <Button variant="brand" size="lg" className="text-lg px-8 py-6 h-auto hover-scale">
                Jetzt kostenloses Gespräch buchen
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Keine Verpflichtungen ✓ Konkrete Tipps inklusive ✓ Schweizweit verfügbar
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;