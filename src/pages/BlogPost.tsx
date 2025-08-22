import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app, this would be fetched based on slug
  const post = {
    title: "KI für KMU: Ein praktischer Einstieg ohne Buzzwords",
    excerpt: "Wie Schweizer KMU KI konkret nutzen können, ohne in die Hype-Falle zu tappen.",
    content: `
      <p>Künstliche Intelligenz ist längst kein Zukunftsthema mehr – sie ist heute verfügbar, praktisch nutzbar und für Schweizer KMU durchaus erschwinglich. Trotzdem herrscht oft Unsicherheit: Was ist realistisch machbar? Wo anfangen? Und wie trennt man echten Nutzen von Marketing-Versprechen?</p>

      <h2>Die Realität: KI ist ein Werkzeug, kein Wundermittel</h2>
      
      <p>Vergessen Sie die Bilder von Robotern, die menschliche Arbeit komplett ersetzen. Moderne KI ist viel prosaischer – und gerade deshalb so wertvoll:</p>
      
      <ul>
        <li><strong>Texte verstehen und generieren:</strong> E-Mails kategorisieren, Zusammenfassungen erstellen, erste Entwürfe schreiben</li>
        <li><strong>Daten strukturieren:</strong> Informationen aus Dokumenten extrahieren und in Systeme einpflegen</li>
        <li><strong>Entscheidungen unterstützen:</strong> Muster erkennen, Empfehlungen geben, Anomalien aufspüren</li>
      </ul>

      <h2>Konkrete Anwendungen für KMU</h2>

      <h3>1. Rechnungsverarbeitung</h3>
      <p>Eingehende Rechnungen werden automatisch erfasst, Daten extrahiert und zur Freigabe weitergeleitet. Zeitersparnis: ca. 65% pro Rechnung.</p>

      <h3>2. Kundenanfragen kategorisieren</h3>
      <p>E-Mails werden automatisch an die richtige Abteilung weitergeleitet, Standardantworten vorgeschlagen, Prioritäten gesetzt.</p>

      <h3>3. Angebotserstellung</h3>
      <p>Basierend auf Kundenanfragen werden passende Textbausteine vorgeschlagen und Kalkulationen unterstützt.</p>

      <h2>Was Sie beachten sollten</h2>

      <h3>Datenschutz</h3>
      <p>Alle Lösungen müssen DSG/DSGVO-konform sein. Wir arbeiten nur mit Anbietern, die Schweizer oder EU-Server nutzen und entsprechende Verträge anbieten.</p>

      <h3>Integration</h3>
      <p>KI-Tools müssen nahtlos in bestehende Systeme integriert werden. Insellösungen bringen langfristig mehr Probleme als Nutzen.</p>

      <h3>Kosten</h3>
      <p>Rechnen Sie realistisch: Ein einfacher Prozess kostet in der Implementierung CHF 2'000-5'000, spart aber oft mehrere Stunden pro Woche.</p>

      <h2>Unser Fazit</h2>

      <p>KI für KMU funktioniert am besten, wenn man klein anfängt, konkrete Probleme löst und schrittweise aufbaut. Keine Revolution, sondern kontinuierliche Evolution.</p>

      <p>Interessiert? Sprechen Sie mit uns über Ihren ersten Use Case.</p>
    `,
    author: "Lukas",
    date: "2025-01-15",
    readTime: "8 Min.",
    category: "Grundlagen"
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link to="/blog">
            <Button variant="brand">Zurück zum Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Zurück zum Blog
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-brand-yellow text-brand-black px-3 py-1 rounded-md font-medium">
                {post.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('de-CH')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <span>von {post.author}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Article Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Share Button */}
            <div className="flex items-center justify-between py-6 border-t border-b mb-12">
              <div className="text-sm text-muted-foreground">
                Teilen Sie diesen Artikel
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2" size={14} />
                Teilen
              </Button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-foreground prose-ul:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-br from-brand-yellow/5 to-accent/5 border border-brand-yellow/20 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Interessiert an einer Umsetzung?</h3>
                <p className="text-muted-foreground mb-6 text-balance">
                  Sprechen Sie mit uns über Ihren konkreten Use Case. 
                  Kostenlose Erstberatung, ehrliche Einschätzung.
                </p>
                <Link to="/contact">
                  <Button variant="brand" size="lg">
                    Kostenloses Gespräch buchen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;