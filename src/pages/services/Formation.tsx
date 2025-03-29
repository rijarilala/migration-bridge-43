
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { FileEdit, PenTool, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Formation = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: t('custom_cv'),
      description: t('cv_custom_description'),
      icon: <FileEdit size={24} />,
    },
    {
      title: t('cover_letter'),
      description: t('cover_letter_description'),
      icon: <PenTool size={24} />,
    },
    {
      title: t('training_offers'),
      description: t('training_offers_description'),
      icon: <GraduationCap size={24} />,
    },
  ];

  return (
    <ServicePage 
      title={t('training_services')}
      subtitle={t('training_subtitle')}
      description={t('training_description')}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t('request_quote')}
    />
  );
};

export default Formation;
