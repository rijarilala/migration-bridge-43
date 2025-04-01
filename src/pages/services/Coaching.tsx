
import { useTranslation } from "react-i18next";
import ServicePage from "@/components/ServicePage";
import { Map, FileEdit, MessageCircle, UserPlus, Compass } from "lucide-react";

const Coaching = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Map size={24} />,
      title: t("servicePages.coaching.features.0.title"),
      description: t("servicePages.coaching.features.0.description")
    },
    {
      icon: <FileEdit size={24} />,
      title: t("servicePages.coaching.features.1.title"),
      description: t("servicePages.coaching.features.1.description")
    },
    {
      icon: <MessageCircle size={24} />,
      title: t("servicePages.coaching.features.2.title"),
      description: t("servicePages.coaching.features.2.description")
    },
    {
      icon: <UserPlus size={24} />,
      title: t("servicePages.coaching.features.3.title"),
      description: t("servicePages.coaching.features.3.description")
    },
    {
      icon: <Compass size={24} />,
      title: t("servicePages.coaching.features.4.title"),
      description: t("servicePages.coaching.features.4.description")
    }
  ];

  return (
    <ServicePage
      title={t("servicePages.coaching.title")}
      subtitle={t("servicePages.coaching.subtitle")}
      description={t("servicePages.coaching.description")}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t("servicePages.coaching.cta")}
    />
  );
};

export default Coaching;
