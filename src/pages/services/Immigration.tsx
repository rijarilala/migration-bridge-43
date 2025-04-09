
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { FileCheck, Users, BarChart, Globe, Briefcase, CheckCircle2, HeartHandshake, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { toast } from "sonner";

const Immigration = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToEligibility = () => {
    if (currentUser) {
      navigate("/eligibility");
      window.scrollTo(0, 0);
    } else {
      toast.error("Vous devez être connecté pour accéder au test d'éligibilité");
      navigate("/login");
    }
  };

  const features = [
    {
      title: "Évaluation d'admissibilité",
      description: "Évaluez vos chances d'immigration canadienne grâce à notre formulaire interactif basé sur les critères des programmes officiels.",
      icon: <FileCheck size={24} />,
    },
    {
      title: "Préparation du dossier",
      description: "Assistance personnalisée pour préparer et vérifier votre dossier d'immigration selon les exigences de chaque programme.",
      icon: <Users size={24} />,
    },
    {
      title: "Suivi des procédures",
      description: "Suivez l'avancement de vos démarches administratives en temps réel et recevez des alertes aux étapes clés.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Intégration locale",
      description: "Conseils sur la culture canadienne, les lois et les ressources pour vous aider à vous intégrer dans votre province d'accueil.",
      icon: <Globe size={24} />,
    },
    {
      title: "Insertion professionnelle",
      description: "Assistance pour la recherche d'emploi et la reconnaissance des qualifications dans votre nouvelle communauté.",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services d'Immigration Canadienne
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions personnalisées pour faciliter votre parcours d'immigration 
              et votre intégration dans les différentes provinces du Canada.
            </p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nous vous accompagnons à chaque étape de votre processus d'immigration, de l'évaluation initiale à l'intégration réussie dans votre province canadienne.</h2>
                <div className="space-y-4 my-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 text-brand-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button onClick={handleNavigateToEligibility} className="mt-4">
                  {currentUser ? "Tester mon admissibilité" : "Se connecter pour tester mon admissibilité"}
                </Button>
              </div>
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1024&auto=format&fit=crop"
                  alt="Famille heureuse arrivant au Canada"
                  className="w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Nos services d'accompagnement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <div className="text-primary mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Évaluation personnalisée</h3>
                <p className="text-sm text-gray-600">Analyse complète de votre profil par des experts en immigration pour identifier les meilleures options disponibles.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <div className="text-primary mb-3">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Support continu</h3>
                <p className="text-sm text-gray-600">Accompagnement personnalisé tout au long du processus avec un conseiller dédié à votre dossier.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                <div className="text-primary mb-3">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Formation préparatoire</h3>
                <p className="text-sm text-gray-600">Sessions informatives sur la vie au Canada, le marché du travail et les différences culturelles pour faciliter votre adaptation.</p>
              </div>
            </div>
            <div className="text-center mt-8">
            <Button onClick={handleNavigateToEligibility} variant="outline">
                {currentUser ? "Évaluer mon admissibilité maintenant" : "Se connecter pour évaluer mon admissibilité"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
