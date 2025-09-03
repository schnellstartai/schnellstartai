import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    privacy: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Datenschutz bestätigen",
        description: "Bitte bestätigen Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns binnen 24 Stunden bei Ihnen.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const topics = [
    "KI-Workshop anfragen",
    "Workflow-Automation", 
    "Coaching & Schulung",
    "Webinar buchen",
    "Allgemeine Anfrage"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-brand-black" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Vielen Dank!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihre Nachricht wurde erfolgreich gesendet. 
                Wir melden uns binnen 24 Stunden bei Ihnen.
              </p>
              <Button 
                variant="brand" 
                onClick={() => setIsSubmitted(false)}
                className="mr-4"
              >
                Weitere Nachricht senden
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Lassen Sie uns sprechen. Kostenlos, unverbindlich und konkret.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Calendly Booking Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">30min Termin buchen</CardTitle>
                <CardDescription>
                  Direkt in unseren Kalender - kostenlos und unverbindlich
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/schnellstart-info/30min" 
                     style={{ minWidth: '320px', height: '630px' }}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                
                <div className="mt-6 p-4 bg-brand-yellow/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Oder kontaktieren Sie uns direkt:</strong> Nutzen Sie gerne auch das Kontaktformular unten oder schreiben Sie direkt an info@schnellstart.ai
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                <CardDescription>
                  Wir antworten normalerweise binnen 24 Stunden
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Firma</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Firmenname"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ihre.email@firma.ch"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+41 xx xxx xx xx"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="topic">Thema *</Label>
                    <Select required onValueChange={(value) => handleInputChange('topic', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie ein Thema" />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                    />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed">
                      Ich stimme der Verarbeitung meiner Daten gemäss{' '}
                      <a href="/datenschutz" className="text-accent hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu. *
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="brand" 
                    size="lg" 
                    className="w-full"
                    disabled={!formData.privacy}
                  >
                    <Send className="mr-2" size={16} />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Direktkontakt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                       <a 
                        href="mailto:info@schnellstart.ai"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@schnellstart.ai
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">Nach Terminvereinbarung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Standort</p>
                      <p className="text-muted-foreground">Frauenfeld, Schweiz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Verfügbarkeit</p>
                      <p className="text-muted-foreground">Schweizweit vor Ort</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-brand-yellow/5 border-brand-yellow/20">
                <CardHeader>
                  <CardTitle className="text-xl">Kostenloses Erstgespräch</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>30 Minuten unverbindlich</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Konkrete Lösungsvorschläge</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Realistische Einschätzung</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Keine Verkaufs-Tricks</span>
                    </li>
                  </ul>
                  <a 
                    href="https://calendly.com/schnellstart-info/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="brand" className="w-full">
                      Jetzt 30min Termin buchen
                    </Button>
                  </a>
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

export default Contact;