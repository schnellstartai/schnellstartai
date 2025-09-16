import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  // Placeholder blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      slug: "ki-fuer-kmu-einfuehrung",
      title: "KI für KMU: Ein praktischer Einstieg ohne Buzzwords",
      excerpt: "Wie Schweizer KMU KI konkret nutzen können, ohne in die Hype-Falle zu tappen. Mit echten Beispielen und realistischen Erwartungen.",
      date: "2025-01-15",
      readTime: "8 Min.",
      category: "Grundlagen",
      featured: true
    },
    {
      slug: "bexio-n8n-automation",
      title: "Bexio + n8n: Rechnungen automatisch verarbeiten",
      excerpt: "Schritt-für-Schritt Anleitung: Wie Sie eingehende Rechnungen automatisch in Bexio erfassen und zur Freigabe weiterleiten.",
      date: "2025-01-10",
      readTime: "12 Min.",
      category: "Tutorial"
    },
    {
      slug: "datenschutz-ki-schweiz",
      title: "Datenschutz und KI: Was Schweizer Unternehmen wissen müssen",
      excerpt: "DSG-konforme KI-Nutzung: Rechtliche Grundlagen, praktische Tipps und Checkliste für die Implementierung.",
      date: "2025-01-05",
      readTime: "10 Min.",
      category: "Compliance"
    }
  ];

  const categories = ["Alle", "Grundlagen", "Tutorial", "Compliance", "Case Studies"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/blog-header-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white">
              Blog – Praxis, Guides, Beispiele
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
              Konkrete Anleitungen, echte Case Studies und praktische Tipps 
              für KI und Automation in Schweizer KMU.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Alle" ? "brand" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Featured Post */}
          {blogPosts.find(post => post.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Empfohlen</h2>
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brand-yellow/5 to-accent/5 border-brand-yellow/20">
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-brand-yellow text-brand-black px-2 py-1 rounded-md font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('de-CH')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4">{blogPosts[0].title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <Button variant="brand" size="lg">
                      Artikel lesen
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="bg-muted px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('de-CH')}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Lesen
                        <ArrowRight className="ml-2" size={14} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State for More Posts */}
          <div className="text-center mt-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mehr Content folgt</h3>
            <p className="text-muted-foreground mb-6 text-balance">
              Wir arbeiten an weiteren Artikeln, Tutorials und Case Studies. 
              Abonnieren Sie unseren Newsletter für Updates.
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Newsletter abonnieren
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;