
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { FileCheck, Users, BarChart, Globe, Briefcase } from "lucide-react";

const Immigration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Test d'éligibilité",
      description: "Évaluez vos chances d'immigration grâce à notre formulaire interactif.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Préparation du dossier",
      description: "Assistance personnalisée pour préparer et vérifier votre dossier d'immigration.",
      icon: <Users size={24} />,
    },
    {
      title: "Suivi des procédures",
      description: "Suivez l'avancement de vos démarches administratives en temps réel.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Intégration locale",
      description: "Conseils sur la culture locale, les lois et les ressources pour vous aider à vous intégrer.",
      icon: <Globe size={24} />,
    },
    {
      title: "Insertion professionnelle",
      description: "Assistance pour la recherche d'emploi dans votre pays d'accueil.",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <ServicePage 
      title="Services d'Immigration"
      subtitle="Des solutions personnalisées pour faciliter votre parcours d'immigration et votre intégration dans votre pays d'accueil."
      description="Nous vous accompagnons à chaque étape de votre processus d'immigration, de l'évaluation initiale à l'intégration réussie dans votre nouveau pays."
      features={features}
      imageSrc="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/eligibility"
      ctaText="Tester mon éligibilité"
    />
  );
};

export default Immigration;
