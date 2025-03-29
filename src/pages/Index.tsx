
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, MapPin, FileText } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeatureSection from "@/components/FeatureSection";
import CTA from "@/components/CTA";
import Stats from "@/components/Stats";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: t('immigration'),
      description: t('immigration_description'),
      icon: <MapPin size={24} />,
      link: "/services/immigration"
    },
    {
      title: t('formation'),
      description: t('formation_description'),
      icon: <FileText size={24} />,
      link: "/services/formation"
    },
    {
      title: t('coaching'),
      description: t('coaching_description'),
      icon: <Users size={24} />,
      link: "/services/coaching"
    },
    {
      title: t('orientation'),
      description: t('orientation_description'),
      icon: <GraduationCap size={24} />,
      link: "/services/orientation"
    },
    {
      title: t('recrutement'),
      description: t('recrutement_description'),
      icon: <Briefcase size={24} />,
      link: "/services/recrutement"
    }
  ];

  const featuresImmigration = [
    {
      icon: <FileText size={24} />,
      title: t('file_preparation'),
      description: t('file_description')
    },
    {
      icon: <MapPin size={24} />,
      title: t('procedure_follow'),
      description: t('procedure_description')
    },
    {
      icon: <Users size={24} />,
      title: t('local_integration'),
      description: t('local_description')
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
    { value: "10k+", label: t('clients_helped') },
    { value: "95%", label: t('satisfaction_rate') },
    { value: "85%", label: t('accepted_files') },
    { value: "30+", label: t('expertise_countries') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero
        title={t('hero_title')}
        subtitle={t('hero_subtitle')}
        ctaText={t('cta_eligibility')}
        ctaLink="/eligibility"
        secondaryCtaText={t('cta_services')}
        secondaryCtaLink="/services"
        imageSrc="https://images.unsplash.com/photo-1524569970261-f3b491d7933b?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('our_services')}</h2>
            <p className="text-lg text-gray-600">
              {t('services_description')}
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
        title={t('immigration_simplified')}
        subtitle={t('immigration_subtitle')}
        features={featuresImmigration}
        imageSrc="https://images.unsplash.com/photo-1529386084422-5aded8767727?auto=format&fit=crop&w=1000&q=80"
      />

      {/* Stats section */}
      <Stats
        title={t('our_impact')}
        description={t('impact_description')}
        stats={stats}
      />

      {/* Testimonials section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonials_title')}</h2>
            <p className="text-lg text-gray-600">
              {t('testimonials_description')}
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
            <Button asChild variant="outline">
              <Link to="/testimonials">{t('more_testimonials')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature section - Career coaching */}
      <FeatureSection
        title={t('develop_career')}
        subtitle={t('career_subtitle')}
        features={[
          {
            icon: <Briefcase size={24} />,
            title: t('interview_prep'),
            description: t('interview_description')
          },
          {
            icon: <FileText size={24} />,
            title: t('cv_letter'),
            description: t('cv_description')
          },
          {
            icon: <GraduationCap size={24} />,
            title: t('skills_assessment'),
            description: t('skills_description')
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&w=1000&q=80"
        reversed={true}
      />

      {/* CTA section */}
      <CTA
        title={t('ready_to_start')}
        description={t('cta_description')}
        buttonText={t('cta_eligibility')}
        buttonLink="/eligibility"
        secondaryButtonText={t('contact_us')}
        secondaryButtonLink="/contact"
      />
    </div>
  );
};

export default Index;
