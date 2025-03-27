
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { Search, Filter, Briefcase } from "lucide-react";

const Recrutement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Liste des offres d'emploi",
      description: "Consultez notre plateforme d'offres d'emploi régulièrement mise à jour dans différents secteurs.",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Recherche personnalisée",
      description: "Bénéficiez de notre expertise pour trouver les offres qui correspondent à votre profil et vos aspirations.",
      icon: <Search size={24} />,
    },
    {
      title: "Filtrage des offres",
      description: "Utilisez nos outils pour filtrer les offres selon vos critères spécifiques.",
      icon: <Filter size={24} />,
    },
  ];

  return (
    <ServicePage 
      title="Services de Recrutement"
      subtitle="Trouvez l'emploi qui vous correspond grâce à notre plateforme de recrutement spécialisée."
      description="Notre équipe vous aide à naviguer dans le marché de l'emploi et à trouver des opportunités adaptées à votre profil et à vos ambitions."
      features={features}
      imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1024&auto=format&fit=crop"
      ctaLink="/contact"
      ctaText="Voir les offres d'emploi"
    />
  );
};

export default Recrutement;
