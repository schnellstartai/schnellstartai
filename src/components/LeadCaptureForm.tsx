import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle2, Lock, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const formSchema = z.object({
  name: z.string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(100, "Name darf maximal 100 Zeichen lang sein")
    .trim(),
  email: z.string()
    .email("Ungültige E-Mail-Adresse")
    .max(255, "E-Mail darf maximal 255 Zeichen lang sein")
    .trim()
});

type FormData = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent('Anforderung: Swiss AI Guide');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nHallo,\nich möchte den kostenlosen "Swiss AI Guide: Build & Scale Your Company with AI" anfordern.\n\nBeste Grüsse,\n${data.name}`
    );
    
    const mailtoLink = `mailto:info@schnellstart.ai?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-white border-2 border-brand-yellow/30">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-black mb-2">
                {t('pages.leitfaden.form.success_title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('pages.leitfaden.form.success_message')}
              </p>
              <p className="text-sm text-gray-600">
                {t('pages.leitfaden.form.fallback')}{' '}
                <a 
                  href="mailto:info@schnellstart.ai" 
                  className="text-accent hover:underline font-medium"
                >
                  {t('pages.leitfaden.form.email_link')}
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-glow border-2 border-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl text-brand-black">
          {t('pages.leitfaden.final_cta.button')}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {t('pages.leitfaden.form.privacy')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('pages.leitfaden.form.name_label')}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t('pages.leitfaden.form.name_placeholder')} 
                      {...field} 
                      className="border-gray-300 focus:border-brand-yellow"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('pages.leitfaden.form.email_label')}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input 
                        type="email"
                        placeholder={t('pages.leitfaden.form.email_placeholder')} 
                        {...field}
                        className="pl-10 border-gray-300 focus:border-brand-yellow"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Lock className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span>{t('pages.leitfaden.form.privacy')}</span>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-brand-yellow text-brand-black hover:bg-brand-yellow/90 text-lg font-semibold h-12"
            >
              {t('pages.leitfaden.form.submit')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
