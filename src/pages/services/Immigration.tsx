
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { FileCheck, Users, BarChart, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Immigration = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: t('eligibility_assessment'),
      description: t('assessment_description'),
      icon: <FileCheck size={24} />,
    },
    {
      title: t('file_preparation_title'),
      description: t('file_preparation_description'),
      icon: <Users size={24} />,
    },
    {
      title: t('procedure_tracking'),
      description: t('tracking_description'),
      icon: <BarChart size={24} />,
    },
    {
      title: t('local_integration_title'),
      description: t('local_integration_description'),
      icon: <Globe size={24} />,
    },
    {
      title: t('professional_insertion'),
      description: t('insertion_description'),
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('immigration_services')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('immigration_services_desc')}
            </p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('we_accompany_you')}</h2>
                <div className="space-y-4 my-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 text-brand-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-4">
                  <Link to="/eligibility">
                    {t('test_my_eligibility')}
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1024&auto=format&fit=crop"
                  alt="Famille heureuse arrivant au Canada"
                  className="w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">{t('canadian_immigration_programs')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">{t('express_entry')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('express_entry_description')}</p>
                <div className="text-xs text-gray-500">{t('processing_time_express')}</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">{t('pstq_quebec')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('pstq_quebec_description')}</p>
                <div className="text-xs text-gray-500">{t('processing_time_pstq')}</div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">{t('provincial_nominee')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('provincial_nominee_description')}</p>
                <div className="text-xs text-gray-500">{t('processing_time_provincial')}</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/eligibility">
                  {t('evaluate_eligibility_now')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
