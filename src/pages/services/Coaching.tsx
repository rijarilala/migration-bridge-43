
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { MessageSquare, Users, Target } from "lucide-react";

const Coaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Préparation aux entretiens d'embauche",
      description: "Des conseils pratiques et des simulations pour réussir vos entretiens professionnels.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Ateliers de coaching",
      description: "Sessions interactives pour développer vos compétences en communication et gestion du stress.",
      icon: <Users size={24} />,
    },
    {
      title: "Coaching personnalisé",
      description: "Un accompagnement sur-mesure pour atteindre vos objectifs professionnels.",
      icon: <Target size={24} />,
    },
  ];

  return (
    <ServicePage 
      title="Services de Coaching"
      subtitle="Développez votre potentiel et préparez-vous efficacement pour réussir dans votre parcours professionnel."
      description="Nos coachs certifiés vous accompagnent dans le développement de vos compétences et la préparation aux défis professionnels."
      features={features}
      imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText="Prendre rendez-vous"
    />
  );
};

export default Coaching;
