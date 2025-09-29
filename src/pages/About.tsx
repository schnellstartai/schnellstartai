import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Target, Shield, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';


const About = () => {
  const { t } = useTranslation();
  const team = [
    {
      name: "Florian",
      role: "Workflows & Umsetzung",
      description: "10+ Jahre Erfahrung in Prozessoptimierung und Automation. Spezialist für n8n, Supabase und nahtlose System-Integrationen.",
      linkedin: "https://www.linkedin.com/in/florian-witschi/",
      website: "https://www.florianwitschi.ch/"
    },
    {
      name: "Lukas",
      role: "Strategie, Finance & Beratung", 
      description: "Business-Stratege mit Finance-Hintergrund. 15+ Jahre KMU-Beratung, spezialisiert auf ROI-orientierte KI-Implementierung.",
      linkedin: "https://www.linkedin.com/in/financeai",
      website: "https://www.swissfinanceai.ch/"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Klarheit",
      description: "Keine Buzzwords. Keine übertriebenen Versprechen. Wir sprechen klar über Möglichkeiten und Grenzen von KI."
    },
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Datenschutz und Compliance sind nicht optional. Schweizer Standards, europäische Werte, transparente Prozesse."
    },
    {
      icon: TrendingUp,
      title: "Messbarer Nutzen",
      description: "Jedes Projekt muss sich rechnen. Wir definieren klare KPIs und messen den Erfolg gemeinsam mit Ihnen."
    }
  ];

  return (
    <div className="min-h-screen subpage-bg">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/about-header-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white">
              Über uns – Team & Haltung
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
              Wir sind ein kleines Team mit einer klaren Mission: 
              KI praktisch und sicher für Schweizer KMU nutzbar machen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/9fb46982-914e-427a-8217-1c13109b3807.png"
                alt="Unser Team - Florian und Lukas"
                className="mx-auto max-w-3xl w-full h-auto"
              />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground text-balance">
              Zwei Experten, eine Vision: KI die funktioniert
            </p>
          </div>
        </div>
      </section>

      {/* Team Descriptions Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Linkedin size={16} />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    {member.website && (
                      <a 
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        <span className="text-sm font-medium">Website</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Wie wir arbeiten und was uns wichtig ist
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-brand-black" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Switzerland Focus */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Warum Schweiz?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">KMU-Verständnis</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Wir kennen die Schweizer KMU-Landschaft. Regulatorische Anforderungen, 
                      Branchenbesonderheiten und die Mentalität "erst denken, dann handeln" 
                      sind uns vertraut.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Lokale Präsenz</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Workshops vor Ort, persönlicher Support und direkter Draht. 
                      Wir sind in der ganzen Schweiz unterwegs – von Basel bis Chur, 
                      von Genf bis St. Gallen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Schweizer Standards</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Qualität, Präzision und Verlässlichkeit. Wir bauen Lösungen, 
                      die funktionieren – heute und in fünf Jahren. Keine Quick Fixes, 
                      sondern solide Grundlagen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Finance-Fokus</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Unser Background in Finance und Controlling hilft uns, 
                      KI-Projekte wirtschaftlich zu bewerten und ROI-orientiert 
                      zu implementieren.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {t('cta_sections.about.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              {t('cta_sections.about.description')}
            </p>
            <Link to="/contact">
              <Button variant="consultation" className="text-lg px-8 py-6 h-auto">
                {t('common.free_consultation_cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;