import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, Clock, DollarSign, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

export const AIResourceCalculator = () => {
  const { t } = useTranslation();
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
    'Treuhand / Buchhaltung',
    'Rechtsberatung',
    'Unternehmensberatung',
    'IT-Services',
    'Personalwesen',
    'Marketing / Vertrieb',
    'Immobilien',
    'Gesundheitswesen',
    'Bildung',
    'Andere'
  ].map(industry => t(`pages.index.calculator.form.industry.options.${industry}`) || industry).filter(Boolean);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-brand-yellow/5 to-accent/5" id="potential-rechner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-brand-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('pages.index.calculator.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            {t('pages.index.calculator.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Input Form */}
            <Card className="border-brand-yellow/20">
              <CardHeader>
                <CardTitle className="text-xl">{t('pages.index.calculator.form.title')}</CardTitle>
                <CardDescription>
                  {t('pages.index.calculator.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="industry">{t('pages.index.calculator.form.industry.label')}</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('pages.index.calculator.form.industry.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry: string) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="employees">{t('pages.index.calculator.form.employees.label')}</Label>
                  <Input
                    id="employees"
                    type="number"
                    min="1"
                    max="500"
                    placeholder={t('pages.index.calculator.form.employees.placeholder')}
                    value={formData.employees}
                    onChange={(e) => setFormData(prev => ({ ...prev, employees: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="manualHours">{t('pages.index.calculator.form.manual_hours.label')}</Label>
                  <Input
                    id="manualHours"
                    type="number"
                    min="1"
                    max="40"
                    step="0.5"
                    placeholder={t('pages.index.calculator.form.manual_hours.placeholder')}
                    value={formData.manualHours}
                    onChange={(e) => setFormData(prev => ({ ...prev, manualHours: e.target.value }))}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('pages.index.calculator.form.manual_hours.help')}
                  </p>
                </div>

                <div>
                  <Label htmlFor="hourlyRate">{t('pages.index.calculator.form.hourly_rate.label')}</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    min="20"
                    max="200"
                    placeholder={t('pages.index.calculator.form.hourly_rate.placeholder')}
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: e.target.value }))}
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={isCalculateDisabled}
                  className="w-full text-sm sm:text-base py-3 sm:py-4"
                  variant="brand"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  {t('pages.index.calculator.form.calculate_button')}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl">{t('pages.index.calculator.results.title')}</CardTitle>
                <CardDescription>
                  {t('pages.index.calculator.results.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!results ? (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>{t('pages.index.calculator.results.empty_state')}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-background/50 rounded-lg p-3 sm:p-4 text-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-accent">{results.timeSaved.toFixed(1)}h</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{t('pages.index.calculator.results.time_saved')}</div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3 sm:p-4 text-center">
                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-accent">CHF {results.potentialSavings.toLocaleString()}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{t('pages.index.calculator.results.weekly_savings')}</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-brand-yellow/10 to-accent/10 rounded-lg p-4 sm:p-6">
                      <h4 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">{t('pages.index.calculator.results.yearly_title')}</h4>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-brand-black mb-2">
                          CHF {(results.potentialSavings * 52).toLocaleString()}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-2">
                          {t('pages.index.calculator.results.yearly_subtitle')}
                        </div>
                      </div>
                    </div>

                      <div className="space-y-2 sm:space-y-3">
                      {[
                        t('pages.index.calculator.results.features.0'),
                        t('pages.index.calculator.results.features.1'),
                        t('pages.index.calculator.results.features.2')
                      ].map((feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5" />
                          <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 sm:pt-4">
                      <Link to="/contact">
                        <Button variant="consultation" className="w-full hover-scale text-sm sm:text-base py-3 sm:py-4">
                          {t('pages.index.calculator.results.cta')}
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
                {t('pages.index.calculator.disclaimer')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};