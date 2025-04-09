
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, MapPin, FileText, CheckCircle, XCircle, Clock, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeatureSection from "@/components/FeatureSection";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import ComparisonSection from "@/components/ComparisonSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fonction pour gérer le défilement vers le haut lors des clics sur les liens
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  
  const services = [
    {
      title: "Immigration",
      description: "Accompagnement personnalisé pour toutes vos démarches d'immigration et d'intégration dans votre pays d'accueil.",
      icon: <MapPin size={24} />,
      link: "/services/immigration"
    },
    {
      title: "Formation",
      description: "Création de CV et lettres de motivation adaptés aux standards professionnels avec des modèles personnalisés.",
      icon: <FileText size={24} />,
      link: "/services/formation"
    },
    {
      title: "Coaching",
      description: "Préparation aux entretiens d'embauche et développement des compétences professionnelles.",
      icon: <Users size={24} />,
      link: "/services/coaching"
    },
    {
      title: "Orientation Professionnelle",
      description: "Conseil personnalisé pour orienter votre carrière selon vos compétences et le marché du travail.",
      icon: <GraduationCap size={24} />,
      link: "/services/orientation"
    },
    {
      title: "Recrutement",
      description: "Accès aux offres d'emploi et mise en relation avec des entreprises qui recrutent dans votre domaine.",
      icon: <Briefcase size={24} />,
      link: "/services/recrutement"
    }
  ];

  const featuresImmigration = [
    {
      icon: <FileText size={24} />,
      title: "Préparation du dossier",
      description: "Nous vous guidons dans la préparation et la vérification de tous les documents nécessaires pour votre dossier d'immigration."
    },
    {
      icon: <MapPin size={24} />,
      title: "Suivi des procédures",
      description: "Bénéficiez d'un suivi personnalisé de votre dossier avec des mises à jour régulières sur l'avancement de vos démarches."
    },
    {
      icon: <Users size={24} />,
      title: "Intégration locale",
      description: "Nous vous aidons à vous intégrer dans votre pays d'accueil grâce à des conseils culturels et administratifs."
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Immigrée au Canada",
      testimonial: "Grâce à MigraPro, mon processus d'immigration au Canada s'est déroulé sans accroc. Leur équipe m'a accompagnée à chaque étape et je suis maintenant installée à Montréal avec un emploi stable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Thomas Dubois",
      role: "Développeur Web",
      testimonial: "Le coaching professionnel de MigraPro a transformé ma carrière. J'ai gagné en confiance lors des entretiens et j'ai décroché un poste dans une entreprise internationale.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "Amina Benhaddou",
      role: "Ingénieure",
      testimonial: "Leur service de création de CV a fait toute la différence dans ma recherche d'emploi. Mon profil est désormais beaucoup plus visible auprès des recruteurs.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200"
    }
  ];

  const stats = [
    { value: "10k+", label: "Clients accompagnés" },
    { value: "95%", label: "Taux de satisfaction" },
    { value: "85%", label: "Dossiers acceptés" },
    { value: "30+", label: "Pays d'expertise" }
  ];

  const comparisonData = {
    withoutMembership: [
      {
        icon: <XCircle size={20} className="text-red-500" />,
        text: "Papiers administratifs accablants et confusion juridique sans accompagnement d'expert."
      },
      {
        icon: <XCircle size={20} className="text-red-500" />,
        text: "Délais manqués et opportunités perdues en raison du manque de soutien."
      },
      {
        icon: <XCircle size={20} className="text-red-500" />,
        text: "Risques accrus de rejet de visa, de retards ou d'erreurs coûteuses."
      },
      {
        icon: <XCircle size={20} className="text-red-500" />,
        text: "Risque d'être victime d'arnaques à l'immigration, mettant en péril votre avenir au Canada."
      }
    ],
    withMembership: [
      {
        icon: <CheckCircle size={20} className="text-green-500" />,
        text: "Des avocats experts en immigration canadienne vous accompagnent à chaque étape."
      },
      {
        icon: <CheckCircle size={20} className="text-green-500" />,
        text: "Remboursement à 100 % si votre visa est refusé—votre succès est notre priorité."
      },
      {
        icon: <CheckCircle size={20} className="text-green-500" />,
        text: "Gagnez du temps et évitez les complications inutiles dans votre demande."
      },
      {
        icon: <CheckCircle size={20} className="text-green-500" />,
        text: "Emménagez au Canada avec confiance, clarté et un soutien total."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero
        title="Votre partenaire pour un nouveau départ"
        subtitle="MigraPro, basé à Moramanga, Madagascar, est votre partenaire de confiance pour concrétiser votre projet d'immigration et de carrière au Canada. Spécialistes en mobilité internationale et orientation professionnelle, nous accompagnons les particuliers et les professionnels dans toutes les étapes de leur démarche, en mettant à leur disposition une expertise pointue et un suivi personnalisé."
        imageSrc="/lovable-uploads/c1574abf-376b-429f-bd07-8dcd9fa1fad1.png"
        scrollToId="services-section" // Ajouter l'ID de la section
      />
      
      <AboutSection />
      
      {/* Comparison Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prenez 2 minutes pour sécuriser votre avenir</h2>
            <p className="text-xl font-medium text-primary mb-4">Quels sont les enjeux ?</p>
          </div>
          
          <ComparisonSection 
            withoutMembershipTitle="Sans adhésion"
            withMembershipTitle="Avec une adhésion"
            withoutMembershipItems={comparisonData.withoutMembership}
            withMembershipItems={comparisonData.withMembership}
          />
          
          <div className="text-center mt-12">
            <Button asChild size="lg" onClick={handleLinkClick} className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/eligibility">Tester mon éligibilité</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services section - ID ajouté ici */}
      <section id="services-section" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme complète de services conçus pour vous accompagner dans votre projet d'immigration et de développement professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature section - Immigration */}
      <FeatureSection
        title="Immigration simplifiée"
        subtitle="Notre équipe d'experts vous guide à travers le processus d'immigration complexe, en vous offrant un accompagnement sur mesure pour concrétiser votre projet de vie à l'étranger."
        features={featuresImmigration}
        imageSrc="/lovable-uploads/1590250c-c1f2-40ec-843d-faf8fb969a38.png"
      />

      {/* Stats section */}
      <Stats
        title="Notre impact en chiffres"
        description="Des résultats qui parlent d'eux-mêmes. Découvrez comment nous avons aidé des milliers de personnes à réaliser leurs projets d'immigration et d'évolution professionnelle."
        stats={stats}
      />

      {/* Testimonials section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que nos clients disent</h2>
            <p className="text-lg text-gray-600">
              Découvrez les témoignages de personnes qui ont fait confiance à nos services et ont réussi leur projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" onClick={handleLinkClick} className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/#">voir plus de témoignages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature section - Career coaching */}
      <FeatureSection
        title="Développez votre carrière"
        subtitle="Nos services de coaching vous aident à révéler votre potentiel professionnel et à vous démarquer sur le marché du travail concurrentiel."
        features={[
          {
            icon: <Briefcase size={24} />,
            title: "Préparation aux entretiens",
            description: "Des séances de simulation d'entretien personnalisées pour vous aider à gagner en confiance et à maîtriser votre discours."
          },
          {
            icon: <FileText size={24} />,
            title: "CV et Lettre de motivation",
            description: "Création de documents professionnels qui mettent en valeur vos compétences et attirent l'attention des recruteurs."
          },
          {
            icon: <GraduationCap size={24} />,
            title: "Bilan de compétences",
            description: "Évaluation approfondie de vos compétences et identification des opportunités de carrière adaptées à votre profil."
          }
        ]}
        imageSrc="/lovable-uploads/24c7fcdb-ae47-4783-842b-28c941fd2134.png"
        reversed={true}
      />

      {/* CTA section */}
      <CTA
        title="Prêt à démarrer votre projet?"
        description="Faites le premier pas vers votre nouvelle vie. Testez votre éligibilité ou contactez-nous pour un accompagnement personnalisé."
        buttonText="Tester mon éligibilité"
        buttonLink="/eligibility"
        secondaryButtonText="Nous contacter"
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default Index;
