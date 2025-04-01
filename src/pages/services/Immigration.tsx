
import { useTranslation } from "react-i18next";
import ServicePage from "@/components/ServicePage";
import { FileCheck, Users, FileText, MessageSquare, Home } from "lucide-react";

const Immigration = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FileCheck size={24} />,
      title: t("servicePages.immigration.features.0.title"),
      description: t("servicePages.immigration.features.0.description")
    },
    {
      icon: <FileText size={24} />,
      title: t("servicePages.immigration.features.1.title"),
      description: t("servicePages.immigration.features.1.description")
    },
    {
      icon: <FileText size={24} />,
      title: t("servicePages.immigration.features.2.title"),
      description: t("servicePages.immigration.features.2.description")
    },
    {
      icon: <MessageSquare size={24} />,
      title: t("servicePages.immigration.features.3.title"),
      description: t("servicePages.immigration.features.3.description")
    },
    {
      icon: <Home size={24} />,
      title: t("servicePages.immigration.features.4.title"),
      description: t("servicePages.immigration.features.4.description")
    }
  ];

  return (
    <ServicePage
      title={t("servicePages.immigration.title")}
      subtitle={t("servicePages.immigration.subtitle")}
      description={t("servicePages.immigration.description")}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1550941532-8918b4c61319?q=80&w=1470&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t("servicePages.immigration.cta")}
    />
  );
};

export default Immigration;
