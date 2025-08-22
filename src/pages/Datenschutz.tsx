import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Server, Mail } from 'lucide-react';

const Datenschutz = () => {
  const sections = [
    {
      icon: Shield,
      title: "Grundsätze",
      content: [
        "Wir verarbeiten Ihre Daten nur, soweit dies für die Erbringung unserer Dienstleistungen erforderlich ist.",
        "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben, es sei denn, Sie haben ausdrücklich zugestimmt.",
        "Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten."
      ]
    },
    {
      icon: Lock,
      title: "Rechtsgrundlagen",
      content: [
        "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO / Art. 31 DSG)",
        "Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO / Art. 31 DSG)",
        "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO / Art. 31 DSG)"
      ]
    },
    {
      icon: Server,
      title: "Datenverarbeitung",
      content: [
        "Website-Hosting: Server in der Schweiz oder EU",
        "E-Mail-Verkehr: Verschlüsselung nach aktuellem Stand der Technik",
        "KI-Services: Nur DSGVO-konforme Anbieter (OpenAI Europe, Anthropic)",
        "Auftragsverarbeitung: AV-Verträge mit allen Dienstleistern"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>
            
            <div className="mb-12 p-6 bg-accent/5 rounded-xl border border-accent/10">
              <p className="text-muted-foreground leading-relaxed">
                <strong>Kurz & klar:</strong> Wir nehmen Datenschutz ernst. Diese Erklärung zeigt transparent, 
                wie wir mit Ihren Daten umgehen – konform mit DSG (Schweiz) und DSGVO (EU).
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              {sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="w-5 h-5 mr-3 text-accent" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Welche Daten erfassen wir?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Kontaktformular</h4>
                    <p>Name, E-Mail, Firma, Telefon (optional), Nachricht</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Website-Nutzung</h4>
                    <p>IP-Adresse, Browser-Typ, Zugriffszeiten (Server-Logfiles)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cookies</h4>
                    <p>Nur technisch notwendige Cookies, keine Tracking-Cookies</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ihre Rechte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Auskunft:</strong> Welche Daten haben wir über Sie?</p>
                  <p><strong>Berichtigung:</strong> Falsche Daten korrigieren lassen</p>
                  <p><strong>Löschung:</strong> Daten löschen lassen (soweit rechtlich möglich)</p>
                  <p><strong>Einschränkung:</strong> Verarbeitung einschränken</p>
                  <p><strong>Übertragbarkeit:</strong> Daten in maschinenlesbarem Format erhalten</p>
                  <p><strong>Widerspruch:</strong> Der Verarbeitung widersprechen</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  Kontakt bei Datenschutzfragen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Verantwortliche Stelle</h4>
                    <p className="text-muted-foreground text-sm">
                      schnellstart.ai<br />
                      [Adresse]<br />
                      8500 Frauenfeld, Schweiz<br />
                      <a href="mailto:datenschutz@swissfinanceai.ch" className="text-accent hover:underline">
                        datenschutz@swissfinanceai.ch
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Beschwerderecht</h4>
                    <p className="text-muted-foreground text-sm">
                      Bei Beschwerden können Sie sich an den Eidgenössischen 
                      Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) oder 
                      die zuständige EU-Aufsichtsbehörde wenden.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 p-6 bg-muted/30 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong>Stand:</strong> Januar 2025 · 
                <strong>Letzte Aktualisierung:</strong> 22. August 2025 · 
                Diese Datenschutzerklärung kann bei Änderungen unserer Services aktualisiert werden. 
                Die aktuelle Version finden Sie immer auf unserer Website.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;