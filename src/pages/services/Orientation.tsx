
import { useEffect } from "react";
import { Briefcase, BookOpen, Users, Award, Compass, FileText, Target, BarChart } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ComparisonSection from "@/components/ComparisonSection";

const Orientation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Bilan de compétences",
      description: "Évaluez vos compétences, valeurs et aspirations pour mieux définir votre projet professionnel au Canada.",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Tests d'orientation et d'aptitude",
      description: "Des outils psychométriques et tests de personnalité pour identifier vos aptitudes et domaines de prédilection.",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Conseil en reconversion professionnelle",
      description: "Un accompagnement sur mesure pour vous aider à définir votre nouvelle trajectoire professionnelle au Canada.",
      icon: <Compass size={24} />,
    },
    {
      title: "Plan d'action concret",
      description: "Développement d'un plan d'action détaillé pour atteindre vos objectifs professionnels étape par étape.",
      icon: <Award size={24} />,
    },
  ];

  const withoutAccompanimentItems = [
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Confusion dans le choix de carrière et les opportunités au Canada"
    },
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Méconnaissance de l'équivalence des diplômes et compétences"
    },
    {
      icon: <CheckCircle className="text-red-600" />,
      text: "Absence de stratégie claire pour votre projet professionnel"
    }
  ];

  const withAccompanimentItems = [
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Vision claire de votre parcours professionnel au Canada"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Connaissance précise des opportunités adaptées à votre profil"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Plan d'action structuré et adapté au marché canadien"
    }
  ];

  const orientationServices = [
    {
      icon: <FileText size={24} />,
      title: "Analyse de parcours",
      description: "Évaluation détaillée de votre formation, expérience et compétences transférables au marché canadien."
    },
    {
      icon: <Target size={24} />,
      title: "Identification d'objectifs",
      description: "Définition de vos objectifs professionnels à court et long terme en fonction de vos priorités."
    },
    {
      icon: <BarChart size={24} />,
      title: "Étude de marché personnalisée",
      description: "Analyse des tendances et opportunités dans votre secteur d'activité au Canada."
    },
    {
      icon: <Users size={24} />,
      title: "Validation du projet",
      description: "Confirmation de la viabilité de votre projet professionnel et ajustements si nécessaire."
    }
  ];

  const orientationPackages = [
    {
      title: "Bilan Express",
      features: [
        "1 séance d'analyse de parcours (2h)",
        "Rapport de synthèse",
        "Recommandations générales"
      ],
      price: "À partir de 150$"
    },
    {
      title: "Orientation Complète",
      features: [
        "3 séances d'orientation (6h)",
        "Tests d'aptitude et d'intérêts",
        "Plan de développement détaillé"
      ],
      price: "À partir de 300$"
    },
    {
      title: "Reconversion Professionnelle",
      features: [
        "5 séances d'accompagnement",
        "Étude de marché personnalisée",
        "Plan d'action et formation"
      ],
      price: "À partir de 450$"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Use ServicePage component for the main hero section */}
      <ServicePage
        title="Conseil & Orientation Professionnelle"
        subtitle="Trouvez votre voie et développez tout votre potentiel professionnel au Canada"
        description="Notre service de conseil et d'orientation professionnelle vous aide à faire le point sur vos compétences, identifier vos aspirations et vous guider vers le parcours qui vous correspond le mieux."
        features={features}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
        ctaLink="/contact"
        ctaText="Prendre rendez-vous"
      />
      
      {/* Additional content specific to orientation */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Notre démarche */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Notre démarche</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Comment nous vous guidons
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {orientationServices.map((service, index) => (
              <Card key={index} className="border-gray-100 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Comparaison</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Pourquoi choisir notre accompagnement ?
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
            <span className="company-section-title mb-4">Nos formules</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              Programmes d'orientation
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orientationPackages.map((pkg, index) => (
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
                      <Link to="/contact">Demander un devis</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom pricing section */}
        <PricingSection />
      </div>
    </div>
  );
};

export default Orientation;
