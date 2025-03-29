
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { Compass, BarChart2, BookOpen } from "lucide-react";

const Orientation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Conseil en orientation professionnelle",
      description: "Accompagnement personnalisé pour définir votre parcours professionnel idéal.",
      icon: <Compass size={24} />,
    },
    {
      title: "Analyse des compétences et du marché",
      description: "Évaluation de vos compétences et identification des secteurs porteurs sur le marché du travail.",
      icon: <BarChart2 size={24} />,
    },
    {
      title: "Bilan de compétences",
      description: "Un diagnostic complet de vos aptitudes, motivations et aspirations professionnelles.",
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <ServicePage 
      title="Conseil et Orientation Professionnelle"
      subtitle="Trouvez votre voie professionnelle grâce à nos services de conseil et d'orientation personnalisés."
      description="Nos conseillers vous aident à faire le point sur vos compétences, à identifier vos aspirations et à définir un plan d'action concret pour votre avenir professionnel."
      features={features}
      imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText="Demander un rendez-vous"
    />
  );
};

export default Orientation;
