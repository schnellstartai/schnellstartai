import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, Clock, DollarSign, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIResourceCalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    employees: '',
    manualHours: '',
    hourlyRate: '',
  });
  
  const [results, setResults] = useState<{
    weeklyLoss: number;
    monthlyLoss: number;
    yearlyLoss: number;
    potentialSavings: number;
    timeSaved: number;
  } | null>(null);

  const handleCalculate = () => {
    const employees = parseInt(formData.employees) || 0;
    const manualHours = parseFloat(formData.manualHours) || 0;
    const hourlyRate = parseFloat(formData.hourlyRate) || 50; // Default Swiss rate

    // Calculate potential savings (conservative 40-65% automation rate)
    const automationRate = 0.5; // 50% average
    const weeklyLoss = employees * manualHours * hourlyRate;
    const potentialSavings = weeklyLoss * automationRate;
    const monthlyLoss = weeklyLoss * 4.33; // Average weeks per month
    const yearlyLoss = weeklyLoss * 52;
    const timeSaved = employees * manualHours * automationRate;

    setResults({
      weeklyLoss,
      monthlyLoss,
      yearlyLoss,
      potentialSavings,
      timeSaved,
    });
  };

  const isCalculateDisabled = !formData.industry || !formData.employees || !formData.manualHours;

  const industries = [
    'Treuhand & Buchhaltung',
    'Handel & E-Commerce',
    'Dienstleistung',
    'Handwerk & Bau',
    'Gesundheitswesen',
    'Beratung',
    'IT & Software',
    'Gastronomie',
    'Immobilien',
    'Andere'
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-yellow/5 to-accent/5" id="potential-rechner">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-brand-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KI-Potential Rechner</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie in 2 Minuten, wie viel Zeit und Geld KI-Automatisierung in Ihrem Unternehmen einsparen kann
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="border-brand-yellow/20">
              <CardHeader>
                <CardTitle className="text-xl">Beschreiben Sie Ihr Unternehmen</CardTitle>
                <CardDescription>
                  Alle Angaben sind vertraulich und werden nicht gespeichert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="industry">Branche</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie Ihre Branche" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="employees">Anzahl Mitarbeiter</Label>
                  <Input
                    id="employees"
                    type="number"
                    min="1"
                    max="500"
                    placeholder="z.B. 5"
                    value={formData.employees}
                    onChange={(e) => setFormData(prev => ({ ...prev, employees: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="manualHours">Stunden pro Woche für manuelle Admin-Aufgaben</Label>
                  <Input
                    id="manualHours"
                    type="number"
                    min="1"
                    max="40"
                    step="0.5"
                    placeholder="z.B. 8"
                    value={formData.manualHours}
                    onChange={(e) => setFormData(prev => ({ ...prev, manualHours: e.target.value }))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Rechnungen erfassen, Reports erstellen, Daten übertragen, etc.
                  </p>
                </div>

                <div>
                  <Label htmlFor="hourlyRate">Durchschnittlicher Stundenlohn (CHF)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    min="20"
                    max="200"
                    placeholder="z.B. 65"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: e.target.value }))}
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={isCalculateDisabled}
                  className="w-full"
                  variant="brand"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Potential berechnen
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl">Ihr KI-Automatisierung Potential</CardTitle>
                <CardDescription>
                  Basierend auf konservativen 50% Automatisierungsrate
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!results ? (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Füllen Sie das Formular aus, um Ihr Potential zu sehen</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">{results.timeSaved.toFixed(1)}h</div>
                        <div className="text-sm text-muted-foreground">Zeit pro Woche gespart</div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center">
                        <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">CHF {results.potentialSavings.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Wöchentliche Einsparung</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-brand-yellow/10 to-accent/10 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-center">Ihr Jahres-Einsparpotential</h4>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-black mb-2">
                          CHF {(results.potentialSavings * 52).toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">
                          Diese Ressourcen können Sie produktiver einsetzen
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="text-sm">Automatisierung von Rechnungsverarbeitung</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="text-sm">KI-gestützte Report-Generierung</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="text-sm">Workflow-Automatisierung mit n8n</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link to="/contact">
                        <Button variant="brand" className="w-full hover-scale">
                          Kostenloses Beratungsgespräch vereinbaren
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {results && (
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                <strong>Wichtiger Hinweis:</strong> Die Berechnungen basieren auf Durchschnittswerten und dienen der groben Orientierung. 
                In einem kostenlosen Beratungsgespräch analysieren wir gemeinsam Ihre spezifischen Prozesse und erstellen 
                eine massgeschneiderte Lösung für Ihr Unternehmen.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};