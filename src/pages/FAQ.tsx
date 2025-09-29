import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Settings, Users, Headphones } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      category: "Datenschutz & Compliance",
      icon: Shield,
      questions: [
        {
          question: "Ist das DSG/DSGVO-konform?",
          answer: "Ja, absolut. Wir arbeiten nur mit Anbietern, die DSG/DSGVO-konforme Lösungen anbieten. Alle Daten werden in der Schweiz oder EU verarbeitet. Wir erstellen für jedes Projekt eine Datenschutz-Folgenabschätzung und bieten AV-Verträge an."
        },
        {
          question: "Wo werden die Daten verarbeitet?",
          answer: "Standardmässig nutzen wir Server in der Schweiz (Supabase) oder EU (OpenAI Europe). Für besonders sensible Daten können wir auch On-Premise-Lösungen implementieren."
        },
        {
          question: "Wer hat Zugriff auf unsere Daten?",
          answer: "Nur autorisierte Personen Ihres Unternehmens. Wir implementieren rollenbasierte Zugriffskontrolle und verschlüsselte Übertragung. Unsere Techniker haben nur temporären Zugriff für Wartungsarbeiten."
        }
      ]
    },
    {
      category: "Technologie & Tools",
      icon: Settings,
      questions: [
        {
          question: "Welche Tools nutzt ihr?",
          answer: "Wir setzen auf bewährte Tools: n8n für Workflow-Automation, OpenAI/Anthropic für KI-Features, PostgreSQL/Supabase für Datenbanken (lokal oder Cloud), plus Integrationen zu Swiss Accounting Platforms (Bexio, Swiss21, Sage, Abacus, SAP) und E-Commerce Automationen. Alles enterprise-ready und wartbar."
        },
        {
          question: "Sind die Lösungen skalierbar?",
          answer: "Ja, wir bauen von Anfang an skalierbar. n8n und Supabase wachsen mit Ihrem Unternehmen mit. Bei grösserem Volumen können wir auf dedizierte Server umstellen."
        },
        {
          question: "Was passiert, wenn ein Tool nicht mehr verfügbar ist?",
          answer: "Wir setzen nur auf Tools mit starker Marktposition. Sollte dennoch ein Tool eingestellt werden, migrieren wir Ihre Workflows auf alternative Lösungen – das ist in unserem Support enthalten."
        }
      ]
    },
    {
      category: "Prozess & Zusammenarbeit",
      icon: Users,
      questions: [
        {
          question: "Wie starten wir?",
          answer: "Ganz einfach: 1) Kostenloses 30-Min-Gespräch, 2) Workshop zum Kennenlernen und ersten Use Case identifizieren, 3) Kleiner Pilot-Prozess, 4) Review und Rollout. Wir fangen immer klein an."
        },
        {
          question: "Wie lange dauert eine Umsetzung?",
          answer: "Ein erster Pilot-Prozess meist 1-2 Wochen. Komplexere Workflows 4-8 Wochen. Wir arbeiten iterativ – Sie sehen schnell erste Ergebnisse."
        },
        {
          question: "Müssen wir vorher KI-Experten werden?",
          answer: "Nein, das ist unser Job. Wir erklären alles verständlich und schulen Ihr Team so weit nötig. Sie bleiben Experten für Ihr Business, wir kümmern uns um die Technik."
        },
        {
          question: "Können wir die Workflows später selbst anpassen?",
          answer: "Ja, das ist das Ziel. n8n ist benutzerfreundlich und wir dokumentieren alles. Nach dem initialen Setup können technisch versierte Mitarbeiter kleinere Anpassungen selbst machen."
        }
      ]
    },
    {
      category: "Support & Wartung",
      icon: Headphones,
      questions: [
        {
          question: "Was ist mit Support?",
          answer: "Wir begleiten Sie, bis es im Alltag sitzt. Das beinhaltet: 30 Tage E-Mail-Support nach jedem Workshop, monatliche Check-ins in der ersten 3 Monaten, und verfügbare Wartungsverträge für laufende Betreuung."
        },
        {
          question: "Was kostet laufender Support?",
          answer: "Das hängt vom Umfang ab. Grundmonitoring und kleinere Anpassungen ab CHF 200/Monat. Für komplexe Setups oder SLA-Garantien entsprechend mehr. Alles transparent kalkuliert."
        },
        {
          question: "Bietet ihr auch Schulungen an?",
          answer: "Ja, sowohl einmalige Workshops als auch laufende Schulungen. Von KI-Grundlagen für Führungskräfte bis zu technischen Deep-Dives für IT-Teams. Online oder vor Ort in der ganzen Schweiz."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen subpage-bg">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/faq-background.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white">
              Häufige Fragen
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
              Direkte Antworten auf die wichtigsten Punkte
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-black" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-xl px-6 py-2 shadow-soft hover:shadow-glow transition-all"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold text-lg">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              {t('cta_sections.faq.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              {t('cta_sections.faq.description')}
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

export default FAQ;