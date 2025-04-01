
import { useTranslation } from "react-i18next";
import ServicePage from "@/components/ServicePage";
import { Users, Network, Calendar, FileText, MapPin } from "lucide-react";

const Recrutement = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users size={24} />,
      title: t("servicePages.recruitment.features.0.title"),
      description: t("servicePages.recruitment.features.0.description")
    },
    {
      icon: <Network size={24} />,
      title: t("servicePages.recruitment.features.1.title"),
      description: t("servicePages.recruitment.features.1.description")
    },
    {
      icon: <Calendar size={24} />,
      title: t("servicePages.recruitment.features.2.title"),
      description: t("servicePages.recruitment.features.2.description")
    },
    {
      icon: <FileText size={24} />,
      title: t("servicePages.recruitment.features.3.title"),
      description: t("servicePages.recruitment.features.3.description")
    },
    {
      icon: <MapPin size={24} />,
      title: t("servicePages.recruitment.features.4.title"),
      description: t("servicePages.recruitment.features.4.description")
    }
  ];

  return (
    <ServicePage
      title={t("servicePages.recruitment.title")}
      subtitle={t("servicePages.recruitment.subtitle")}
      description={t("servicePages.recruitment.description")}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1470&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t("servicePages.recruitment.cta")}
    />
  );
};

export default Recrutement;
