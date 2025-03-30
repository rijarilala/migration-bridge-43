
import { useEffect } from "react";
import EligibilityForm from "@/components/EligibilityForm";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Lock, Shield, Clock, CheckCircle } from "lucide-react";

const Eligibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const immigrationStats = [
    { value: "350k+", label: "Immigrants acceptés par année" },
    { value: "60+", label: "Programmes d'immigration" },
    { value: "89%", label: "Taux de succès avec accompagnement" },
    { value: "6-12", label: "Mois de délai de traitement" },
  ];

  const benefits = [
    { 
      icon: <Lock className="h-5 w-5" />, 
      title: "Évaluation multi-programmes",
      description: "Notre système analyse votre profil selon les trois principaux programmes d'immigration canadiens"
    },
    { 
      icon: <Shield className="h-5 w-5" />, 
      title: "Résultat fiable",
      description: "Obtenez une réponse claire sur votre admissibilité basée sur les critères officiels d'immigration"
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      title: "Résultats instantanés",
      description: "Recevez votre évaluation en quelques minutes seulement"
    },
    { 
      icon: <CheckCircle className="h-5 w-5" />, 
      title: "Confidentiel",
      description: "Vos informations sont traitées de manière confidentielle et sécurisée"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Vérifiez votre <span className="gradient-text">admissibilité</span> à l'immigration canadienne
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre système d'évaluation analyse votre profil selon les programmes Entrée Express, 
              PSTQ (Québec) et Programme des Candidats Provinciaux pour déterminer votre éligibilité.
            </p>
          </motion.div>

          <Stats 
            title="L'Immigration au Canada en Chiffres" 
            description="Le Canada accueille chaque année des centaines de milliers d'immigrants dans le cadre de ses différents programmes."
            stats={immigrationStats} 
          />

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mt-16 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <h2 className="text-2xl font-serif font-bold mb-6">Notre système d'évaluation exclusif</h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Notre critère d'éligibilité :</strong> Vous êtes considéré comme admissible 
                  si votre profil correspond aux critères d'au moins un des trois programmes d'immigration canadiens.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl rotate-2 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=700" 
                alt="Immigration au Canada" 
                className="relative rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 md:p-8 mt-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <EligibilityForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
