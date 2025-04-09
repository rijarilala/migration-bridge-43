
import { useEffect } from "react";
import EligibilityForm from "@/components/EligibilityForm";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Check, MapPin, Clock, FileText, Shield, Home } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
      icon: <Shield className="h-5 w-5" />, 
      title: "Évaluation complète",
      description: "Notre système analyse votre profil selon tous les critères d'admissibilité à l'immigration canadienne"
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
      title: "Confidentialité assurée",
      description: "Votre évaluation est strictement confidentielle et vos données sont protégées"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb navigation like the Contact page */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary/80 hover:text-primary">
                  <Home size={16} className="mr-1" />
                  Accueil
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/eligibility" className="text-primary font-medium">
                  Éligibilité
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="company-section-title">Test d'éligibilité</span>
            <h1 className="page-title flex flex-col items-center justify-center">
              Évaluez votre <span className="gradient-text">admissibilité</span>
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Découvrez votre admissibilité à l'immigration canadienne grâce à notre évaluateur rapide et fiable.
              Notre système analyse votre profil et vous donne un résultat instantané.
            </p>
          </motion.div>

          <motion.div 
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Decorative top border like Contact form */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            
            <h2 className="text-xl font-semibold mb-4">Pourquoi évaluer votre admissibilité ?</h2>
            <p className="mb-4">
              Le Canada dispose de multiples voies d'immigration adaptées à différents profils. Notre évaluateur vous aide à :
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Déterminer si vous êtes admissible à l'immigration canadienne</li>
              <li>Comprendre votre potentiel d'immigration</li>
              <li>Connaître les prochaines étapes à suivre</li>
              <li>Économiser du temps et des efforts dans votre processus d'immigration</li>
            </ul>
            <p className="font-medium">
              Notre système analyse en profondeur votre profil selon les critères officiels d'immigration.
            </p>
            
            {/* Decorative elements like in Contact page */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
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
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
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
              
              {/* Decorative elements like in Contact page */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
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
            
            {/* Decorative elements like in Contact page */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
