
import { useEffect } from "react";
import ServicePage from "@/components/ServicePage";
import { MessageSquare, Users, Target, Award, Lightbulb, Brain, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/CTA";
import { CheckCircle } from "lucide-react";
import ComparisonSection from "@/components/ComparisonSection";

const Coaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Préparation aux entretiens d'embauche",
      description: "Des simulations personnalisées pour vous faire gagner en confiance et maîtriser les codes des entretiens au Canada.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Ateliers de développement professionnel",
      description: "Sessions interactives pour développer votre communication, votre adaptabilité et votre résilience professionnelle.",
      icon: <Users size={24} />,
    },
    {
      title: "Coaching de carrière personnalisé",
      description: "Un accompagnement sur-mesure pour atteindre vos objectifs professionnels et surmonter les obstacles.",
      icon: <Target size={24} />,
    },
    {
      title: "Décoder la culture professionnelle canadienne",
      description: "Comprenez les habitudes de travail, les normes et les comportements attendus en entreprise au Canada.",
      icon: <Presentation size={24} />,
    },
  ];

  const withoutAccompanimentItems = [
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Stress et manque de préparation aux entretiens"
    },
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Difficulté à comprendre les attentes culturelles des employeurs"
    },
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Manque de confiance et de stratégie de communication"
    }
  ];

  const withAccompanimentItems = [
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Confiance et méthodes éprouvées pour réussir vos entretiens"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Compréhension approfondie des codes professionnels canadiens"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Développement de soft skills essentiels pour votre carrière"
    }
  ];

  const coachingPackages = [
    {
      title: "Pack Entretien",
      features: [
        "2 séances de simulation d'entretien",
        "Feedback personnalisé",
        "Documentation pratique"
      ],
      price: "À partir de 120$"
    },
    {
      title: "Pack Culture Professionnelle",
      features: [
        "3 ateliers de groupe",
        "Outils d'adaptation culturelle",
        "Communauté d'entraide"
      ],
      price: "À partir de 150$"
    },
    {
      title: "Programme Premium",
      features: [
        "5 séances de coaching individuel",
        "Plan d'action personnalisé",
        "Suivi sur 3 mois"
      ],
      price: "À partir de 350$"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Use ServicePage component for the main hero section */}
      <ServicePage 
        title="Services de Coaching Professionnel"
        subtitle="Développez votre potentiel et préparez-vous efficacement pour réussir dans votre parcours professionnel"
        description="Nos coachs certifiés vous accompagnent dans le développement de vos compétences et la préparation aux défis professionnels spécifiques au marché canadien."
        features={features}
        imageSrc="https://images.unsplash.com/photo-1633008808000-ce86bff6c1ed?q=80&w=1024&auto=format&fit=crop"
        ctaLink="/contact"
        ctaText="Prendre rendez-vous"
      />

      {/* Additional content specific to coaching */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Notre approche */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Notre méthode</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Comment nous vous accompagnons
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Évaluation des besoins</h3>
                <p className="text-sm text-gray-600">Identification de vos objectifs et des compétences à développer</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Plan d'action</h3>
                <p className="text-sm text-gray-600">Création d'un programme de coaching sur mesure adapté à vos besoins</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Séances de coaching</h3>
                <p className="text-sm text-gray-600">Accompagnement personnalisé et exercices pratiques pour progresser</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Suivi et ajustement</h3>
                <p className="text-sm text-gray-600">Évaluation continue des progrès et adaptation du programme</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Comparaison</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Pourquoi choisir notre coaching ?
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <ComparisonSection
            withoutMembershipTitle="Sans accompagnement"
            withMembershipTitle="Avec notre accompagnement expert"
            withoutMembershipItems={withoutAccompanimentItems}
            withMembershipItems={withAccompanimentItems}
          />
        </div>

        {/* Packages Section */}
        <div id="packages" className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Nos offres</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Nos programmes de coaching
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coachingPackages.map((pkg, index) => (
              <Card key={index} className="border-primary/20 shadow-lg overflow-hidden">
                <div className="bg-primary/10 px-6 py-4">
                  <h3 className="text-xl font-semibold text-primary text-center">{pkg.title}</h3>
                  <p className="text-center text-sm mt-1 font-medium">{pkg.price}</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="text-accent mt-1 h-5 w-5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <Button asChild className="px-6 py-2">
                      <Link to="/contact">Réserver une séance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <CTA 
        title="Prêt à développer votre potentiel ?"
        description="Réservez un entretien d'évaluation gratuit de 30 minutes pour discuter de vos objectifs professionnels et découvrir comment notre coaching peut vous aider."
        buttonText="Réserver une séance"
        buttonLink="/contact"
        secondaryButtonText="En savoir plus"
        secondaryButtonLink="/faq"
      />
    </div>
  );
};

export default Coaching;
