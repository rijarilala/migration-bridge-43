
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FileEdit, 
  PenTool, 
  GraduationCap, 
  Linkedin, 
  Languages, 
  Users, 
  Target, 
  Building, 
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import FormationFeatureCard from "@/components/formation/FormationFeatureCard";
import ComparisonSection from "@/components/ComparisonSection";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Formation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const features = [
    {
      title: "Un CV aux normes canadiennes",
      description: "Nous réalisons des CV sur mesure, clairs et adaptés à votre secteur d'activité, en respectant les standards attendus par les employeurs au Canada.",
      icon: <FileEdit size={24} />,
      benefits: [
        "L'objectif : mettre en valeur vos compétences",
        "Vous rendre visible auprès des recruteurs"
      ]
    },
    {
      title: "Une lettre de motivation percutante",
      description: "Nous rédigeons des lettres personnalisées, ciblées et convaincantes, qui mettent en avant votre valeur ajoutée pour chaque poste visé.",
      icon: <PenTool size={24} />,
      benefits: []
    },
    {
      title: "Profil LinkedIn professionnel",
      description: "Nous optimisons votre présence en ligne pour qu'elle reflète votre profil de façon cohérente, claire et professionnelle.",
      icon: <Linkedin size={24} />,
      benefits: []
    },
    {
      title: "Correction & traduction",
      description: "Pour des documents sans fautes, prêts à être utilisés en français ou en anglais, selon vos besoins.",
      icon: <Languages size={24} />,
      benefits: []
    },
  ];

  const workshopFeatures = [
    {
      title: "Préparation à la recherche d'emploi",
      description: "Apprenez à cibler les bonnes opportunités, à adapter votre candidature et à aborder les recruteurs avec confiance.",
      icon: <Users size={24} />,
      benefits: []
    },
    {
      title: "Simulations d'entretiens",
      description: "Entraînez-vous dans des conditions réelles et bénéficiez de conseils pour répondre aux attentes des employeurs canadiens.",
      icon: <Target size={24} />,
      benefits: []
    },
    {
      title: "Décoder la culture professionnelle",
      description: "Comprenez les habitudes de travail, les normes et les comportements attendus en entreprise au Canada pour faciliter votre intégration.",
      icon: <Building size={24} />,
      benefits: []
    },
  ];

  const packages = [
    {
      title: "Pack \"Prêt à postuler\"",
      features: [
        "CV + Lettre",
        "Préparation à l'entretien",
        "Suivi personnalisé"
      ]
    },
    {
      title: "Pack \"Immigration Pro\"",
      features: [
        "Culture d'entreprise",
        "LinkedIn optimisé",
        "Stratégie de recherche"
      ]
    },
    {
      title: "Service express",
      features: [
        "CV & lettre de motivation livrés sous 48h",
        "Pour les candidatures urgentes"
      ]
    }
  ];

  const withoutAccompanimentItems = [
    {
      icon: <XCircle className="text-red-600" />,
      text: "CV générique qui ne répond pas aux attentes des recruteurs canadiens"
    },
    {
      icon: <XCircle className="text-red-600" />,
      text: "Lettres de motivation standard qui n'attirent pas l'attention"
    },
    {
      icon: <XCircle className="text-red-600" />,
      text: "Méconnaissance des codes d'entretien canadiens"
    },
    {
      icon: <XCircle className="text-red-600" />,
      text: "Profil LinkedIn incomplet ou mal optimisé"
    }
  ];

  const withAccompanimentItems = [
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "CV personnalisé répondant aux standards canadiens et optimisé pour les ATS"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Lettres de motivation percutantes et adaptées à chaque emploi"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Préparation complète aux entretiens avec simulations réalistes"
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      text: "Profil LinkedIn optimisé pour attirer les recruteurs canadiens"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Accompagnement en Formation Professionnelle"
        subtitle="Donnez un nouvel élan à votre parcours vers le Canada"
        ctaText="Découvrir nos formules"
        ctaLink="#packages"
        secondaryCtaText="Demander un devis"
        secondaryCtaLink="/contact"
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1024&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Breadcrumb navigation */}
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
              <BreadcrumbLink href="/services" className="text-primary/80 hover:text-primary">
                Services
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services/formation" className="text-primary font-medium">
                Formation
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-100">
              <span className="company-section-title">Nos Services de Formation</span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 gradient-text">
                Donnez un nouvel élan à votre parcours vers le Canada
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Vous envisagez une carrière au Canada ? Nos services de formation sont conçus pour vous préparer efficacement à intégrer le marché du travail canadien.
              </p>
              <p className="text-lg text-gray-600">
                Nous vous aidons à structurer vos candidatures, à vous démarquer et à vous adapter aux exigences locales.
              </p>
            </div>
          </div>
        </div>

        {/* CV & Lettres de motivation Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Services professionnels</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              ✍️ CV & Lettres de Motivation
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <FormationFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                benefits={feature.benefits}
              />
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Développez vos compétences</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              🧑‍🏫 Ateliers et Coaching
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {workshopFeatures.map((feature, index) => (
              <FormationFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                benefits={feature.benefits}
              />
            ))}
          </div>
        </div>

        {/* Comparison Section */}
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
        <div id="packages" className="mb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Nos offres</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              🧩 Formules disponibles
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="border-primary/20 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 px-6 py-4">
                  <h3 className="text-xl font-semibold text-primary text-center">{pkg.title}</h3>
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
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 rounded-full">
                      <Link to="/contact">
                        Demander un devis
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Nos avantages</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              ✅ Nos atouts
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Accompagnement individualisé</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Méthode claire et efficace</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRight className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Expertise en immigration et en insertion professionnelle</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Services adaptés à tous les profils</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <CTA 
        title="Envie de commencer ?"
        description="Réservez un entretien gratuit pour évaluer vos besoins et recevoir un devis personnalisé pour votre projet professionnel au Canada."
        buttonText="Demander un devis"
        buttonLink="/contact"
        secondaryButtonText="Télécharger notre mini-guide"
        secondaryButtonLink="#"
      />
    </div>
  );
};

export default Formation;
