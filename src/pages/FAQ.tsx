
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  
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
  
  // Filter FAQ items based on search query
  const filteredCategories = searchQuery.length > 2 
    ? categories.filter(category => 
        groupedFAQs[category].some(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : categories;

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
            
            {/* Language indicator */}
            <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <span className="font-medium text-gray-600">{t('currentLanguage')}: </span>
              <span className="text-brand-600 font-semibold">
                {i18n.language === 'fr' ? 'Français' : 'English'}
              </span>
            </div>
            
            {/* Search input */}
            <div className="mt-6">
              <input
                type="text"
                placeholder={t('faq.searchPlaceholder')}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="space-y-10">
              {filteredCategories.map((category) => (
                <div key={category} className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-brand-600 mb-6">{category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {groupedFAQs[category]
                      .filter(item => 
                        searchQuery.length <= 2 || 
                        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${category}-${index}`} 
                          className="border rounded-lg p-2 hover:border-brand-300 transition-colors"
                        >
                          <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-brand-600 hover:no-underline">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pt-2">
                            <div className="prose prose-sm max-w-none">
                              {item.answer}
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Dialog>
                                <DialogTrigger className="text-brand-600 text-sm hover:text-brand-700 flex items-center">
                                  {t('faq.readMore')}
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle className="text-lg font-semibold">{item.question}</DialogTitle>
                                  </DialogHeader>
                                  <div className="prose max-w-none py-4">
                                    {item.answer}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">{t('faq.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
