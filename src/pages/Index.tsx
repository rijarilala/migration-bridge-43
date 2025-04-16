
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, MapPin, FileText, CheckCircle, XCircle, Clock, Shield, Star, Award, FileEdit, MessageSquare } from "lucide-react";
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

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Services mis à jour selon la nouvelle structure
  const services = [
    {
      title: "Conseil & Orientation Professionnelle",
      description: "Diagnostic de profil, bilan de compétences et plan de carrière personnalisé pour votre réussite professionnelle.",
      icon: <GraduationCap size={24} />,
      link: "/services/orientation"
    },
    {
      title: "Coaching & Formation CV / LM / Entretien",
      description: "Notre Pack Réussite Pro combine formation e-learning et coaching personnalisé pour maximiser vos chances.",
      icon: <FileText size={24} />,
      link: "/services/formation"
    },
    {
      title: "Immigration & Accompagnement (Canada)",
      description: "Accompagnement complet pour votre projet d'immigration au Canada : de l'évaluation à l'installation.",
      icon: <MapPin size={24} />,
      link: "/services/immigration"
    },
    {
      title: "Recrutement",
      description: "Notre service de mise en relation avec des employeurs canadiens sera bientôt disponible.",
      icon: <Briefcase size={24} />,
      link: "/services/recrutement"
    }
  ];

  // Pack Réussite Pro features
  const featuresPackReussitePro = [
    {
      icon: <FileEdit size={24} />,
      title: "CV aux normes internationales",
      description: "Apprenez à créer un CV professionnel adapté aux standards canadiens et malgaches qui attire l'attention des recruteurs."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Lettre de motivation percutante",
      description: "Maîtrisez l'art de la lettre de motivation avec notre formation sur la structuration et la personnalisation efficace."
    },
    {
      icon: <Users size={24} />,
      title: "Coaching entretien d'embauche",
      description: "Préparez-vous aux entretiens avec des simulations personnalisées et des retours d'experts pour réussir avec confiance."
    }
  ];

  // Immigration Canada features
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
      <Hero
        title="Votre avenir professionnel commence ici"
        subtitle="Conseil, formation et accompagnement pour l'immigration au Canada et le développement professionnel à Madagascar"
        imageSrc="/lovable-uploads/c1574abf-376b-429f-bd07-8dcd9fa1fad1.png"
        ctaText="Découvrir nos services"
        scrollToId="services-section"
      />
      
      <AboutSection />

      {/* Nouvelle section Pack Réussite Pro */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-3">
              Notre offre phare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pack Réussite Pro</h2>
            <p className="text-xl text-gray-600">CV + Lettre de Motivation + Coaching Entretien</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {featuresPackReussitePro.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services/formation">Je choisis ce pack</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="services-section" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme complète de services conçus pour vous accompagner dans votre projet professionnel et d'immigration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir MigraPro ?</h2>
            <p className="text-xl font-medium text-primary mb-4">Les avantages de notre accompagnement</p>
          </div>
          
          <ComparisonSection 
            withoutMembershipTitle="Sans MigraPro"
            withMembershipTitle="Avec MigraPro"
            withoutMembershipItems={comparisonData.withoutMembership}
            withMembershipItems={comparisonData.withMembership}
            ctaText="Tester mon éligibilité"
            ctaLink="/eligibility"
          />
        </div>
      </section>

      <FeatureSection
        title="Immigration Canada simplifiée"
        subtitle="Notre équipe d'experts vous guide à travers le processus d'immigration complexe, en vous offrant un accompagnement sur mesure."
        features={featuresImmigration}
        imageSrc="/lovable-uploads/1590250c-c1f2-40ec-843d-faf8fb969a38.png"
      />

      <Stats
        title="Notre impact en chiffres"
        description="Des résultats qui parlent d'eux-mêmes. Découvrez comment nous avons aidé des milliers de personnes à réaliser leurs projets d'immigration et d'évolution professionnelle."
        stats={stats}
      />

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
              <Link to="/testimonials">Voir plus de témoignages</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Pack Réussite Pro"
        subtitle="Alliez formation et coaching pour maximiser vos chances professionnelles au Canada et à Madagascar."
        features={featuresPackReussitePro}
        imageSrc="/lovable-uploads/24c7fcdb-ae47-4783-842b-28c941fd2134.png"
        reversed={true}
      />

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
