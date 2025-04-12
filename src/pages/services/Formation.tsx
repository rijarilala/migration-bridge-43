
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
      title: "CV Professionnel à la Canadienne",
      description: "Nous concevons des CV modernes, clairs et efficaces, respectant les normes canadiennes. Chaque CV est personnalisé selon votre profil.",
      icon: <FileEdit size={24} />,
      benefits: [
        "Mettez en valeur vos compétences",
        "Attirez l'attention des recruteurs",
        "Passez les filtres des logiciels de sélection (ATS)"
      ]
    },
    {
      title: "Lettre de motivation sur mesure",
      description: "Votre lettre de motivation est un outil essentiel pour démontrer votre motivation, votre connaissance de l'entreprise et la valeur que vous pouvez apporter.",
      icon: <PenTool size={24} />,
      benefits: []
    },
    {
      title: "Optimisation de votre profil LinkedIn",
      description: "Un bon profil LinkedIn est souvent la clé pour décrocher des opportunités. Nous vous aidons à le rendre professionnel et attractif pour les recruteurs canadiens.",
      icon: <Linkedin size={24} />,
      benefits: []
    },
    {
      title: "Correction et traduction",
      description: "Tous vos documents peuvent être corrigés, traduits ou adaptés (français ↔ anglais) pour vous assurer une candidature claire, sans fautes, et culturellement adaptée.",
      icon: <Languages size={24} />,
      benefits: []
    },
  ];

  const workshopFeatures = [
    {
      title: "Coaching emploi",
      description: "Bénéficiez d'un accompagnement personnalisé pour identifier les bonnes offres, adapter vos candidatures et approcher les recruteurs efficacement.",
      icon: <Users size={24} />,
      benefits: []
    },
    {
      title: "Simulations d'entretiens",
      description: "Préparez vos entretiens grâce à des mises en situation réalistes avec retour détaillé. Apprenez à répondre aux questions types posées par les employeurs canadiens.",
      icon: <Target size={24} />,
      benefits: []
    },
    {
      title: "Formation à la culture professionnelle canadienne",
      description: "Comprenez les codes du monde du travail au Canada : ponctualité, communication, gestion du temps, relations hiérarchiques... Un véritable atout pour réussir.",
      icon: <Building size={24} />,
      benefits: []
    },
  ];

  const packages = [
    {
      title: "Pack \"Candidat prêt à postuler\"",
      features: [
        "CV + Lettre de motivation",
        "Coaching entretien",
        "Suivi personnalisé"
      ]
    },
    {
      title: "Pack \"Immigration professionnelle\"",
      features: [
        "Formation culture professionnelle",
        "LinkedIn optimisé",
        "Accompagnement à la recherche d'emploi"
      ]
    },
    {
      title: "Express \"CV & LM en 48h\"",
      features: [
        "Pour les candidatures urgentes",
        "Service rapide et efficace"
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
        title="Services de Formation"
        subtitle="Maximisez vos chances de réussir votre projet professionnel au Canada"
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
                Boostez votre carrière au Canada
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Vous souhaitez travailler au Canada mais ne savez pas par où commencer pour créer un CV percutant ou réussir un entretien d'embauche ?
              </p>
              <p className="text-lg text-gray-600">
                Notre cabinet vous propose des services de formation sur mesure pour vous aider à structurer votre candidature, valoriser vos compétences et vous adapter aux attentes du marché canadien.
              </p>
            </div>
          </div>
        </div>

        {/* CV & Lettres de motivation Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="company-section-title mb-4">Services professionnels</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex flex-col items-center justify-center">
              ✍️ Création de CV & Lettres de Motivation
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
              🧑‍🏫 Ateliers et Coaching Individuel
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
              🧩 Nos formules
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
              🎯 Pourquoi choisir notre accompagnement ?
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Approche personnalisée et humaine</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Formateurs expérimentés, spécialisés dans l'emploi au Canada</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRight className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Suivi continu jusqu'à la réussite</h3>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Idéal pour les nouveaux arrivants et professionnels en reconversion</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <CTA 
        title="Prêt à booster votre profil ?"
        description="Prenez un rendez-vous gratuit pour évaluer vos besoins et recevoir un devis personnalisé pour votre projet professionnel au Canada."
        buttonText="Demander un devis"
        buttonLink="/contact"
        secondaryButtonText="Télécharger notre guide gratuit"
        secondaryButtonLink="#"
      />
    </div>
  );
};

export default Formation;
