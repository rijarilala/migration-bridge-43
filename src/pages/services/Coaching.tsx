
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { MessageSquare, Users, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Coaching = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: t('interview_preparation'),
      description: t('interview_preparation_description'),
      icon: <MessageSquare size={24} />,
    },
    {
      title: t('coaching_workshops'),
      description: t('workshops_description'),
      icon: <Users size={24} />,
    },
    {
      title: t('personalized_coaching'),
      description: t('personalized_coaching_description'),
      icon: <Target size={24} />,
    },
  ];

  return (
    <ServicePage 
      title={t('coaching_services')}
      subtitle={t('coaching_subtitle')}
      description={t('coaching_description')}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t('make_appointment')}
      accentColor="brown"
    />
  );
};

export default Coaching;
