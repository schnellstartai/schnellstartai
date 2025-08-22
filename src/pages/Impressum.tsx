import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>
            
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Firmeninformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Firmenname</h3>
                    <p className="text-muted-foreground">schnellstart.ai</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-muted-foreground">
                      [Strasse und Hausnummer]<br />
                      8500 Frauenfeld<br />
                      Schweiz
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Kontakt</h3>
                    <p className="text-muted-foreground">
                      E-Mail: info@swissfinanceai.ch<br />
                      Web: schnellstart.ai
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Handelsregister</h3>
                    <p className="text-muted-foreground">
                      UID: [CHE-xxx.xxx.xxx]<br />
                      Handelsregisteramt: Frauenfeld
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Verantwortliche Personen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Geschäftsführung</h3>
                    <p className="text-muted-foreground">
                      Florian [Nachname] - Workflows & Umsetzung<br />
                      David [Nachname] - LLMs & Automation Pipelines<br />
                      Lukas [Nachname] - Strategie, Finance & Beratung
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Inhaltlich Verantwortlich</h3>
                    <p className="text-muted-foreground">
                      Lukas [Nachname]<br />
                      E-Mail: info@swissfinanceai.ch
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rechtliche Hinweise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Die Informationen auf dieser Website wurden sorgfältig geprüft und werden regelmässig aktualisiert. 
                      Jedoch kann keine Gewähr für die Vollständigkeit, Richtigkeit und letzte Aktualität sämtlicher 
                      Angaben übernommen werden. Dies gilt insbesondere für alle Verbindungen (Links) zu anderen 
                      Websites, auf die direkt oder indirekt verwiesen wird.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Urheberrecht</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Alle auf dieser Website veröffentlichten Inhalte (Bilder, Texte, Audio- und Videodateien) 
                      unterliegen dem Urheberrecht. Eine Vervielfältigung oder Verwendung solcher Grafiken, 
                      Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten 
                      Publikationen ist ohne ausdrückliche Zustimmung nicht gestattet.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Anwendbares Recht</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Für sämtliche Rechtsverhältnisse der Parteien gilt das Recht der Schweiz unter Ausschluss 
                      der Bestimmungen des Internationalen Privatrechts. Ausschliesslicher Gerichtsstand für 
                      alle Streitigkeiten ist Frauenfeld, Schweiz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Impressum;