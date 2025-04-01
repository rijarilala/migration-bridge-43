
import { useTranslation } from "react-i18next";
import ServicePage from "@/components/ServicePage";
import { BookOpen, Award, Briefcase, PieChart, Layers } from "lucide-react";

const Formation = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BookOpen size={24} />,
      title: t("servicePages.formation.features.0.title"),
      description: t("servicePages.formation.features.0.description")
    },
    {
      icon: <Award size={24} />,
      title: t("servicePages.formation.features.1.title"),
      description: t("servicePages.formation.features.1.description")
    },
    {
      icon: <Briefcase size={24} />,
      title: t("servicePages.formation.features.2.title"),
      description: t("servicePages.formation.features.2.description")
    },
    {
      icon: <PieChart size={24} />,
      title: t("servicePages.formation.features.3.title"),
      description: t("servicePages.formation.features.3.description")
    },
    {
      icon: <Layers size={24} />,
      title: t("servicePages.formation.features.4.title"),
      description: t("servicePages.formation.features.4.description")
    }
  ];

  return (
    <ServicePage
      title={t("servicePages.formation.title")}
      subtitle={t("servicePages.formation.subtitle")}
      description={t("servicePages.formation.description")}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t("servicePages.formation.cta")}
    />
  );
};

export default Formation;
