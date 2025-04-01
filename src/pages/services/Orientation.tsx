
import { useTranslation } from "react-i18next";
import ServicePage from "@/components/ServicePage";
import { BarChart2, Layers, Search, BookOpen, ClipboardList } from "lucide-react";

const Orientation = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BarChart2 size={24} />,
      title: t("servicePages.orientation.features.0.title"),
      description: t("servicePages.orientation.features.0.description")
    },
    {
      icon: <Layers size={24} />,
      title: t("servicePages.orientation.features.1.title"),
      description: t("servicePages.orientation.features.1.description")
    },
    {
      icon: <Search size={24} />,
      title: t("servicePages.orientation.features.2.title"),
      description: t("servicePages.orientation.features.2.description")
    },
    {
      icon: <BookOpen size={24} />,
      title: t("servicePages.orientation.features.3.title"),
      description: t("servicePages.orientation.features.3.description")
    },
    {
      icon: <ClipboardList size={24} />,
      title: t("servicePages.orientation.features.4.title"),
      description: t("servicePages.orientation.features.4.description")
    }
  ];

  return (
    <ServicePage
      title={t("servicePages.orientation.title")}
      subtitle={t("servicePages.orientation.subtitle")}
      description={t("servicePages.orientation.description")}
      features={features}
      imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText={t("servicePages.orientation.cta")}
    />
  );
};

export default Orientation;
