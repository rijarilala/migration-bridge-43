
import { useEffect } from "react";
import EligibilityForm from "@/components/EligibilityForm";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Check, MapPin, Clock, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Eligibility = () => {
  const { t } = useLanguage();
  
  const immigrationStats = [
    { value: "350k+", label: t('immigrants_accepted') },
    { value: "60+", label: t('immigration_programs') },
    { value: "89%", label: t('success_rate_with_support') },
    { value: "6-12", label: t('processing_time') },
  ];

  const benefits = [
    { 
      icon: <Check className="h-5 w-5" />, 
      title: t('complete_evaluation'),
      description: t('evaluation_description')
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      title: t('personalized_advice'),
      description: t('advice_description')
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      title: t('instant_results'),
      description: t('results_description')
    },
    { 
      icon: <FileText className="h-5 w-5" />, 
      title: t('detailed_document'),
      description: t('document_description')
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('evaluate_eligibility')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('eligibility_description')}
            </p>
          </motion.div>

          <motion.div 
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">{t('new_pstq')}</h2>
            <p className="mb-4">
              {t('pstq_description')}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>{t('pstq_item1')}</li>
              <li>{t('pstq_item2')}</li>
              <li>{t('pstq_item3')}</li>
            </ul>
            <p className="font-medium">{t('pstq_features')}</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><span className="font-medium">{t('pstq_feature1')}</span></li>
              <li><span className="font-medium">{t('pstq_feature2')}</span></li>
              <li><span className="font-medium">{t('pstq_feature3')}</span></li>
              <li><span className="font-medium">{t('pstq_feature4')}</span></li>
            </ul>
          </motion.div>

          <Stats 
            title={t('immigration_numbers')} 
            description={t('numbers_subtitle')}
            stats={immigrationStats} 
          />

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-16 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <h2 className="text-2xl font-serif font-bold mb-6">{t('why_use_evaluator')}</h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl rotate-2 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=700" 
                alt="Immigration au Canada" 
                className="relative rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 md:p-8 mt-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <EligibilityForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
