
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Award, Clock, Users, Globe, Check } from "lucide-react";
import Stats from "@/components/Stats";

const About = () => {
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
      title: "Expertise",
      description: "Une équipe de professionnels qualifiés dans leurs domaines respectifs, offrant des conseils basés sur une expérience solide et une connaissance approfondie.",
    },
    {
      icon: <Award size={24} className="text-brand-600" />,
      title: "Excellence",
      description: "Un engagement constant envers la qualité et l'excellence dans tous nos services, avec un souci du détail et une attention particulière aux besoins de chaque client.",
    },
    {
      icon: <Globe size={24} className="text-brand-600" />,
      title: "Inclusivité",
      description: "Une approche inclusive qui respecte la diversité culturelle et s'adapte aux besoins spécifiques de chaque personne, quelle que soit son origine.",
    },
    {
      icon: <Clock size={24} className="text-brand-600" />,
      title: "Efficacité",
      description: "Des processus optimisés et une communication claire pour vous faire gagner du temps et faciliter vos démarches à chaque étape.",
    },
  ];

  const stats = [
    { value: "10+", label: "Années d'expérience" },
    { value: "1500+", label: "Clients satisfaits" },
    { value: "95%", label: "Taux de réussite" },
    { value: "25+", label: "Pays de destination" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À Propos de MigraPro
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MigraPro accompagne les particuliers et les professionnels dans leurs projets d'immigration, 
              de formation et de développement de carrière depuis plus de 10 ans.
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Mission</h2>
              <p className="text-gray-600 mb-4">
                Faciliter l'accès à de nouvelles opportunités professionnelles et personnelles pour nos clients, 
                en leur fournissant un accompagnement personnalisé et des outils adaptés à leurs besoins spécifiques.
              </p>
              <p className="text-gray-600">
                Nous nous engageons à simplifier les démarches complexes liées à l'immigration et au développement 
                professionnel, en offrant un service humain, efficace et de qualité.
              </p>
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Vision</h2>
              <p className="text-gray-600 mb-4">
                Être reconnu comme un partenaire de confiance pour tous ceux qui souhaitent réaliser leurs projets 
                d'immigration et de développement professionnel, en France et à l'international.
              </p>
              <p className="text-gray-600">
                Nous aspirons à créer un monde où les frontières ne sont plus des obstacles aux ambitions 
                professionnelles et où chacun peut développer pleinement son potentiel.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Stats
          title="MigraPro en Chiffres"
          description="Des résultats concrets qui témoignent de notre expertise et de notre engagement envers nos clients."
          stats={stats}
        />

        {/* Our Values */}
        <div className="max-w-5xl mx-auto my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos actions et font partie intégrante de notre culture d'entreprise.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés et expérimentés, dédiés à la réussite de vos projets.
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prêt à commencer votre projet avec nous ?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez notre équipe dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
            </p>
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link to="/contact">
                Nous contacter <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
