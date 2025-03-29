
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Award, Clock, Users, Globe, Check } from "lucide-react";
import Stats from "@/components/Stats";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Martin",
      role: "Directrice & Conseillère en Immigration",
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      bio: "Spécialiste en immigration avec plus de 15 ans d'expérience dans l'accompagnement des candidats à l'immigration.",
    },
    {
      name: "Thomas Dubois",
      role: "Conseiller en Formation",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      bio: "Expert en développement professionnel et en création de parcours de formation personnalisés.",
    },
    {
      name: "Lucie Bernard",
      role: "Coach Professionnelle",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      bio: "Coach certifiée spécialisée dans l'accompagnement des transitions professionnelles et le développement personnel.",
    },
    {
      name: "Pierre Moreau",
      role: "Conseiller en Recrutement",
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      bio: "Spécialiste du recrutement international avec une expertise particulière dans les secteurs de la technologie et de la santé.",
    },
  ];

  const values = [
    {
      icon: <Users size={24} className="text-brand-600" />,
      title: t('expertise'),
      description: t('expertise_description'),
    },
    {
      icon: <Award size={24} className="text-brand-600" />,
      title: t('excellence'),
      description: t('excellence_description'),
    },
    {
      icon: <Globe size={24} className="text-brand-600" />,
      title: t('inclusivity'),
      description: t('inclusivity_description'),
    },
    {
      icon: <Clock size={24} className="text-brand-600" />,
      title: t('efficiency'),
      description: t('efficiency_description'),
    },
  ];

  const stats = [
    { value: "10+", label: t('years_experience') },
    { value: "1500+", label: t('satisfied_clients') },
    { value: "95%", label: t('success_rate') },
    { value: "25+", label: t('destination_countries') },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about_migrapro')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about_description')}
            </p>
          </div>
          
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1280&auto=format&fit=crop" 
                alt="L'équipe MigraPro" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('our_mission')}</h2>
              <p className="text-gray-600 mb-4">
                {t('mission_text1')}
              </p>
              <p className="text-gray-600">
                {t('mission_text2')}
              </p>
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('our_vision')}</h2>
              <p className="text-gray-600 mb-4">
                {t('vision_text1')}
              </p>
              <p className="text-gray-600">
                {t('vision_text2')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Stats
          title={t('migrapro_numbers')}
          description={t('numbers_description')}
          stats={stats}
        />

        {/* Our Values */}
        <div className="max-w-5xl mx-auto my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('our_values')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('values_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 flex">
                <div className="mr-4 mt-1">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="max-w-5xl mx-auto my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('our_team')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('team_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-brand-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-brand-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('ready_to_start_with_us')}</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('contact_team')}
            </p>
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link to="/contact">
                {t('contact_us')} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
