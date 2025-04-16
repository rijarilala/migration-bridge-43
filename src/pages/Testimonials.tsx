
import { useEffect, useState } from "react";
import { Star, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  date?: string;
}

const Testimonials = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Sophie Martin",
      role: "Immigrée au Canada",
      testimonial: "Grâce à MigraPro, mon processus d'immigration au Canada s'est déroulé sans accroc. Leur équipe m'a accompagnée à chaque étape et je suis maintenant installée à Montréal avec un emploi stable. Je recommande vivement leurs services à quiconque souhaite immigrer au Canada sans stress.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
      date: "12 Mars 2024"
    },
    {
      id: "2",
      name: "Thomas Dubois",
      role: "Développeur Web",
      testimonial: "Le coaching professionnel de MigraPro a transformé ma carrière. J'ai gagné en confiance lors des entretiens et j'ai décroché un poste dans une entreprise internationale. Le Pack Réussite Pro est un investissement qui vaut vraiment la peine pour quiconque cherche à améliorer ses perspectives professionnelles.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
      date: "03 Février 2024"
    },
    {
      id: "3",
      name: "Amina Benhaddou",
      role: "Ingénieure",
      testimonial: "Leur service de création de CV a fait toute la différence dans ma recherche d'emploi. Mon profil est désormais beaucoup plus visible auprès des recruteurs. J'ai reçu trois fois plus d'invitations à des entretiens après avoir suivi leurs conseils. La formation en ligne était claire et les retours personnalisés très pertinents.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",
      date: "25 Janvier 2024"
    },
    {
      id: "4",
      name: "Jean Rakoto",
      role: "Enseignant",
      testimonial: "J'ai bénéficié d'un accompagnement de qualité pour mon projet d'immigration au Canada. MigraPro a su me guider efficacement à travers toutes les démarches administratives complexes. Leur expertise m'a permis d'obtenir mon permis de travail plus rapidement que prévu.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
      date: "08 Décembre 2023"
    },
    {
      id: "5",
      name: "Nathalie Randriamihaja",
      role: "Comptable",
      testimonial: "Après avoir suivi le Pack Réussite Pro, j'ai complètement revu ma façon de me présenter professionnellement. Mon CV et ma lettre de motivation sont maintenant beaucoup plus percutants. Le coaching pour les entretiens m'a donné les clés pour valoriser mon parcours. Résultat : j'ai décroché un poste dans un cabinet international.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200",
      date: "15 Novembre 2023"
    },
    {
      id: "6",
      name: "Olivier Ramaroson",
      role: "Ingénieur logiciel",
      testimonial: "Le bilan de compétences réalisé avec MigraPro m'a ouvert les yeux sur mes véritables atouts professionnels. J'ai pu réorienter ma carrière dans une direction qui me correspond davantage. Leur approche personnalisée fait toute la différence.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200",
      date: "22 Octobre 2023"
    }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Témoignage soumis",
      description: "Merci d'avoir partagé votre expérience avec MigraPro. Votre témoignage sera publié après modération.",
      duration: 5000,
    });
    // Reset form
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-secondary/20 to-background/0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Ils ont réussi grâce à <span className="text-primary">MigraPro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de personnes qui ont fait confiance à nos services et qui ont concrétisé leur projet professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} size={16} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                  {testimonial.date && (
                    <div className="ml-auto text-xs text-gray-500">
                      {testimonial.date}
                    </div>
                  )}
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Partagez votre expérience</h2>
            </div>
            
            <form onSubmit={handleSubmitTestimonial} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Profession / Rôle</Label>
                  <Input id="role" placeholder="Votre profession actuelle" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="testimonial">Votre témoignage</Label>
                <Textarea 
                  id="testimonial" 
                  placeholder="Partagez votre expérience avec MigraPro..." 
                  className="min-h-32" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label>Votre évaluation</Label>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="cursor-pointer text-gray-300 hover:text-amber-500 transition-colors" />
                  ))}
                </div>
              </div>
              
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                <Send size={16} className="mr-2" />
                Soumettre mon témoignage
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
