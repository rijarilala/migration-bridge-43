
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { FileEdit, PenTool, GraduationCap } from "lucide-react";

const Formation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Création de CV personnalisé",
      description: "Créez un CV professionnel adapté à votre secteur d'activité et à vos compétences.",
      icon: <FileEdit size={24} />,
    },
    {
      title: "Rédaction de lettres de motivation",
      description: "Assistance pour rédiger des lettres de motivation percutantes qui retiennent l'attention des recruteurs.",
      icon: <PenTool size={24} />,
    },
    {
      title: "Sélection d'offres de formation",
      description: "Découvrez des programmes de formation pour améliorer vos compétences professionnelles.",
      icon: <GraduationCap size={24} />,
    },
  ];

  return (
    <ServicePage 
      title="Services de Formation"
      subtitle="Développez vos compétences et optimisez votre présentation professionnelle pour maximiser vos chances de réussite."
      description="Nos experts vous aident à valoriser votre profil professionnel et à acquérir de nouvelles compétences pour atteindre vos objectifs de carrière."
      features={features}
      imageSrc="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText="Demander un devis"
    />
  );
};

export default Formation;
