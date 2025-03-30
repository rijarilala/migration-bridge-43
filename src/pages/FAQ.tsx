
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ items are now pulled from translations
  const faqItems: FAQItem[] = [
    // Immigration
    {
      question: t('faq.immigration.q1'),
      answer: t('faq.immigration.a1'),
      category: t('services.immigration'),
    },
    {
      question: t('faq.immigration.q2'),
      answer: t('faq.immigration.a2'),
      category: t('services.immigration'),
    },
    {
      question: t('faq.immigration.q3'),
      answer: t('faq.immigration.a3'),
      category: t('services.immigration'),
    },
    // Formation
    {
      question: t('faq.formation.q1'),
      answer: t('faq.formation.a1'),
      category: t('services.training'),
    },
    {
      question: t('faq.formation.q2'),
      answer: t('faq.formation.a2'),
      category: t('services.training'),
    },
    // Coaching
    {
      question: t('faq.coaching.q1'),
      answer: t('faq.coaching.a1'),
      category: t('services.coaching'),
    },
    {
      question: t('faq.coaching.q2'),
      answer: t('faq.coaching.a2'),
      category: t('services.coaching'),
    },
    // Orientation
    {
      question: t('faq.orientation.q1'),
      answer: t('faq.orientation.a1'),
      category: t('services.professionalOrientation'),
    },
    {
      question: t('faq.orientation.q2'),
      answer: t('faq.orientation.a2'),
      category: t('services.professionalOrientation'),
    },
    // Recrutement
    {
      question: t('faq.recruitment.q1'),
      answer: t('faq.recruitment.a1'),
      category: t('services.recruitment'),
    },
    {
      question: t('faq.recruitment.q2'),
      answer: t('faq.recruitment.a2'),
      category: t('services.recruitment'),
    },
  ];

  // Group FAQ items by category
  const groupedFAQs = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  const categories = Object.keys(groupedFAQs);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet>
        <title>{t('navigation.faq')} | MigraPro</title>
      </Helmet>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('faq.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('faq.description')}
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category} className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-brand-600 mb-6">{category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {groupedFAQs[category].map((item, index) => (
                    <AccordionItem key={index} value={`item-${category}-${index}`} className="border rounded-lg p-2">
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-brand-600 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
