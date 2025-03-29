
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { Search, Filter, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Recrutement = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: t('job_listings'),
      description: t('listings_description'),
      icon: <Briefcase size={24} />,
    },
    {
      title: t('custom_search'),
      description: t('search_description'),
      icon: <Search size={24} />,
    },
    {
      title: t('offers_filtering'),
      description: t('filtering_description'),
      icon: <Filter size={24} />,
    },
  ];

  return (
    <ServicePage 
      title={t('recruitment_services')}
      subtitle={t('recruitment_subtitle')}
      description={t('recruitment_description')}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t('view_job_offers')}
    />
  );
};

export default Recrutement;
