
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { Compass, BarChart2, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Orientation = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: t('career_counseling'),
      description: t('career_counseling_description'),
      icon: <Compass size={24} />,
    },
    {
      title: t('skills_market_analysis'),
      description: t('analysis_description'),
      icon: <BarChart2 size={24} />,
    },
    {
      title: t('skills_assessment_title'),
      description: t('skills_assessment_description'),
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <ServicePage 
      title={t('counseling_orientation')}
      subtitle={t('orientation_subtitle')}
      description={t('orientation_description')}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t('request_appointment')}
    />
  );
};

export default Orientation;
