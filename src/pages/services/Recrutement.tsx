
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Rocket, Calendar, Bell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Recrutement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-secondary/20 to-background/0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Banner annonçant le service à venir */}
          <div className="bg-primary/10 rounded-lg p-3 mb-8 flex items-center justify-center">
            <Bell className="text-primary mr-2" />
            <p className="text-primary font-medium">Nouveau service en préparation</p>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 gradient-text">
              Service de Recrutement <span className="text-primary">Bientôt Disponible</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Notre plateforme de recrutement spécialisée arrive très bientôt pour vous aider à trouver l'emploi qui vous correspond au Canada.
            </p>
          </div>

          <div className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 md:p-8 mb-12 overflow-hidden relative">
            {/* Élément décoratif */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Rocket className="mr-2 text-primary" size={28} />
                  En cours de développement
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Notre équipe travaille actuellement sur la création d'une plateforme complète qui vous permettra de:
                </p>
                
                <div className="space-y-4 my-6">
                  <div className="flex items-start p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="mr-4 text-primary flex-shrink-0 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Star size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Offres d'emploi exclusives</h3>
                      <p className="text-gray-600">Accédez à des opportunités professionnelles validées et exclusives au Canada.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="mr-4 text-primary flex-shrink-0 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Mise en relation avec des employeurs</h3>
                      <p className="text-gray-600">Bénéficiez de notre réseau d'entreprises canadiennes en recherche de talents.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/contact">
                      Être informé(e) du lancement
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Soyez parmi les premiers à accéder à notre plateforme de recrutement
                  </p>
                </div>
              </div>
              
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl rotate-2 blur-sm"></div>
                  <img
                    src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1024&auto=format&fit=crop"
                    alt="Service de recrutement à venir"
                    className="relative w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl flex items-end justify-center p-6">
                    <p className="text-white text-sm md:text-base font-medium">
                      Lancement prévu très prochainement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section d'inscription à la notification */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Restez informé(e)</h3>
            <p className="text-gray-600 mb-6">
              Laissez-nous vos coordonnées pour être averti(e) dès le lancement de notre service de recrutement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/contact" className="flex items-center">
                  <Bell size={18} className="mr-2" />
                  M'inscrire aux notifications
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/">
                  Explorer d'autres services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recrutement;
