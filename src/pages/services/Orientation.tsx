
import { Briefcase, BookOpen, Users, Award } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import PricingSection from "@/components/PricingSection";

const Orientation = () => {
  const features = [
    {
      title: "Bilan de compétences",
      description: "Évaluez vos compétences, valeurs et aspirations pour mieux définir votre projet professionnel.",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Tests d'orientation",
      description: "Des outils psychométriques et tests de personnalité pour identifier vos aptitudes et préférences.",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Coaching individualisé",
      description: "Un accompagnement sur mesure pour vous aider à faire les meilleurs choix pour votre carrière.",
      icon: <Users size={24} />,
    },
    {
      title: "Plan d'action concret",
      description: "Développement d'un plan d'action détaillé pour atteindre vos objectifs professionnels.",
      icon: <Award size={24} />,
    },
  ];

  return (
    <>
      <ServicePage
        title="Conseil & Orientation Professionnelle"
        subtitle="Trouvez votre voie et développez tout votre potentiel professionnel"
        description="Notre service de conseil et d'orientation professionnelle vous aide à faire le point sur vos compétences, identifier vos aspirations et vous guider vers le parcours qui vous correspond le mieux."
        features={features}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        ctaLink="/contact"
        ctaText="Prendre rendez-vous"
      />
      
      <PricingSection />
    </>
  );
};

export default Orientation;
