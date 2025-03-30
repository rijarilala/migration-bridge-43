
import { useEffect } from "react";
import { FileCheck, Users, BarChart, Globe, Briefcase, Check, Shield, Clock, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Immigration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Conseils d'experts certifiés",
      description: "Accès illimité à des consultants réglementés en immigration qui vous guident à chaque étape de votre processus.",
      icon: <Users size={24} />,
    },
    {
      title: "Protection contre les refus",
      description: "Remboursement à 100% si votre visa est refusé. Notre priorité est votre réussite.",
      icon: <Shield size={24} />,
    },
    {
      title: "Traitement accéléré",
      description: "Évitez les délais et les erreurs grâce à notre soutien juridique d'experts et nos partenariats avec des institutions canadiennes.",
      icon: <Clock size={24} />,
    },
    {
      title: "Préparation linguistique",
      description: "Cours de français et d'anglais + préparation aux tests de langue officiels (TCF, TEF, IELTS).",
      icon: <Globe size={24} />,
    },
    {
      title: "Opportunités professionnelles",
      description: "Accès à des offres d'emploi et assistance pour créer un CV adapté aux standards canadiens.",
      icon: <Briefcase size={24} />,
    },
  ];

  const membershipBenefits = [
    "Rencontres avec des consultants réglementés",
    "Événements VIP en personne",
    "Services de recrutement",
    "Conférences en ligne",
    "Cours de français et d'anglais",
    "Traitement accéléré des visas",
    "Assistance personnalisée pour votre dossier",
    "Création de CV canadien",
    "Préparation aux tests de langue",
    "Avantages exclusifs pour les membres"
  ];

  const processSteps = [
    {
      title: "Inscrivez-vous gratuitement",
      description: "Commencez avec un essai gratuit de 7 jours et explorez nos services premium sans engagement."
    },
    {
      title: "Recevez une invitation par e-mail",
      description: "Après votre inscription, vous recevrez les détails d'accès pour commencer."
    },
    {
      title: "Commencez votre essai gratuit",
      description: "Activez votre période d'essai et profitez immédiatement des avantages exclusifs."
    },
    {
      title: "Passez à l'adhésion à vie",
      description: "Vous aimez l'expérience ? Optez pour un accès à vie en payant une seule fois !"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous facilitons votre immigration avec la meilleure solution !
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez le plus grand réseau de services canadiens et accédez à des services illimités pour réussir votre projet d'immigration.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/eligibility">
                  Profitez d'un essai GRATUIT de 7 jours
                </Link>
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pourquoi choisir notre réseau d'adhésion ?</h2>
                <div className="space-y-4 my-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 text-brand-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-4">
                  <Link to="/eligibility">
                    Tester mon admissibilité
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1534330207526-2b865c075c5c?q=80&w=1024&auto=format&fit=crop"
                  alt="Famille heureuse arrivant au Canada"
                  className="w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                />
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Quels sont les enjeux ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Without Membership */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Sans adhésion</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Papiers administratifs accablants et confusion juridique sans accompagnement d'expert.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Délais manqués et opportunités perdues en raison du manque de soutien.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Risques accrus de rejet de visa, de retards ou d'erreurs coûteuses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✕</span>
                    <span>Risque d'être victime d'arnaques à l'immigration, mettant en péril votre avenir au Canada.</span>
                  </li>
                </ul>
              </div>

              {/* With Membership */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Avec une adhésion</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><Check size={16} /></span>
                    <span>Des avocats experts en immigration canadienne vous accompagnent à chaque étape.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><Check size={16} /></span>
                    <span>Remboursement à 100% si votre visa est refusé—votre succès est notre priorité.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><Check size={16} /></span>
                    <span>Gagnez du temps et évitez les complications inutiles dans votre demande.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><Check size={16} /></span>
                    <span>Emménagez au Canada avec confiance, clarté et un soutien total.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Membership Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-6 md:p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Découvrez nos avantages d'adhésion</h2>
              <p className="text-gray-600">Nous sommes le plus grand réseau offrant des services canadiens illimités à nos membres.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {membershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="mr-3 text-primary"><Check size={20} /></span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link to="/eligibility">
                  Profitez de 7 jours GRATUIT
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">7,865+</div>
              <div className="text-gray-600">Approbations de visa pour le Canada</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Garantie de remboursement</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support et assistance</div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">Processus d'inscription</h2>
            <p className="text-center text-gray-600 mb-8">Commencez votre voyage avec un essai gratuit de 7 jours avant de vous engager à devenir membre complet.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-full">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4 font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-[-90deg] md:rotate-0">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link to="/eligibility">
                  Commencer mon essai gratuit
                </Link>
              </Button>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à simplifier votre voyage vers le Canada?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ne laissez pas les complexités de l'immigration vous arrêter. Rejoignez notre réseau dès aujourd'hui et profitez des services canadiens illimités!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/eligibility">
                Profitez de 7 jours GRATUIT
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
