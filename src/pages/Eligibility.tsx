
import { useEffect, useRef } from "react";
import EligibilityForm from "@/components/EligibilityForm";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Check, MapPin, Clock, FileText } from "lucide-react";

const Eligibility = () => {
  const immigrationStats = [
    { value: "350k+", label: "Immigrants acceptés par année" },
    { value: "60+", label: "Programmes d'immigration" },
    { value: "89%", label: "Taux de succès avec accompagnement" },
    { value: "6-12", label: "Mois de délai de traitement" },
  ];

  const benefits = [
    { 
      icon: <Check className="h-5 w-5" />, 
      title: "Évaluation complète",
      description: "Notre algorithme analyse votre profil selon tous les programmes canadiens disponibles"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      title: "Conseils personnalisés",
      description: "Recevez des recommandations adaptées à votre situation spécifique"
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      title: "Résultats instantanés",
      description: "Obtenez votre évaluation immédiatement, sans attendre"
    },
    { 
      icon: <FileText className="h-5 w-5" />, 
      title: "Document détaillé",
      description: "Téléchargez votre rapport complet d'éligibilité au format PDF"
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
              Évaluez votre <span className="gradient-text">admissibilité</span> à l'immigration canadienne
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez votre admissibilité aux programmes d'immigration canadiens comme 
              Entrée Express, le Programme des Travailleurs Qualifiés (PRTQ) et le 
              Programme de l'Expérience Québécoise (PEQ).
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
              <h2 className="text-2xl font-serif font-bold mb-6">Pourquoi utiliser notre évaluateur ?</h2>
              
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
