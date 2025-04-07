
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const { currentUser } = useAuth();

  const pricingPlans = [
    {
      title: "Consultation initiale",
      description: "Évaluation de votre parcours et de vos objectifs professionnels",
      features: [
        "Analyse de votre CV",
        "Évaluation de votre parcours",
        "Identification des objectifs",
        "Recommandations personnalisées"
      ],
      price: "150 000 MGA",
      duration: "1 session (1h30)"
    },
    {
      title: "Programme complet",
      description: "Accompagnement personnalisé pour votre orientation professionnelle",
      featured: true,
      features: [
        "3 sessions de coaching individuelles",
        "Tests d'aptitudes et de personnalité",
        "Plan de carrière détaillé",
        "Accompagnement sur 1 mois",
        "Suivi par email illimité"
      ],
      price: "450 000 MGA",
      duration: "3 sessions + suivi"
    },
    {
      title: "Coaching entreprise",
      description: "Solutions pour les entreprises et les professionnels",
      features: [
        "Sessions pour équipes de 5 personnes max",
        "Évaluation des compétences collectives",
        "Stratégies de développement professionnel",
        "Rapport détaillé et recommandations"
      ],
      price: "950 000 MGA",
      duration: "Programme sur mesure"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const planVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
            Nos tarifs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos offres de services d'orientation professionnelle adaptées à vos besoins.
          </p>
          
          {!currentUser && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg max-w-xl mx-auto">
              <p className="flex items-center justify-center text-blue-700">
                <Lock size={18} className="mr-2" />
                <span>Connectez-vous pour voir nos tarifs détaillés en Ariary (MGA).</span>
              </p>
              <Button asChild className="mt-3">
                <Link to="/login">Se connecter</Link>
              </Button>
            </div>
          )}
        </div>
        
        {currentUser ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                variants={planVariants}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                  plan.featured ? 'border-primary' : 'border-gray-100'
                } h-full flex flex-col relative`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 translate-y-3">
                      Populaire
                    </div>
                  </div>
                )}
                <div className={`p-6 ${plan.featured ? 'bg-primary/5' : ''}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-end mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{plan.duration}</p>
                </div>
                <div className="p-6 border-t border-gray-100 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.featured ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">Demander un rendez-vous</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="p-10 bg-gray-100 rounded-xl flex flex-col items-center justify-center min-h-[300px]">
            <Lock size={48} className="text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">Contenu réservé</h3>
            <p className="text-gray-500 text-center max-w-md">
              Les informations tarifaires détaillées sont accessibles uniquement aux utilisateurs connectés.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
