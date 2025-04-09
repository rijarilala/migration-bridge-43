
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  scrollToId?: string; // Nouveau prop pour l'ID de section à défiler
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "En savoir plus",
  ctaLink = "/services",
  scrollToId,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: HeroProps) => {
  // Fonction pour défiler vers une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/20 to-background/0 pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 md:opacity-70">
          <img
            src="/lovable-uploads/c1574abf-376b-429f-bd07-8dcd9fa1fad1.png"
            alt="Famille voyageuse à l'aéroport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
        
        {/* Animated blobs similar to Contact page */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-56 h-56 bg-brand-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Immigration | Formation | Coaching
              </div>
              <h1 className="font-serif font-bold tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="gradient-text">{title}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {scrollToId ? (
                <Button 
                  className="bg-accent hover:bg-accent/90 text-white px-8 rounded-full"
                  onClick={() => scrollToSection(scrollToId)}
                >
                  {ctaText}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              ) : (
                <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 rounded-full">
                  <Link to={ctaLink}>
                    {ctaText}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full">
                  <Link to={secondaryCtaLink}>
                    {secondaryCtaText}
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl rotate-3 opacity-20"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="/lovable-uploads/c1574abf-376b-429f-bd07-8dcd9fa1fad1.png" 
                  alt="Famille voyageuse à l'aéroport"
                  className="w-full object-cover animate-float"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-800 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    95%
                  </div>
                  <p className="text-sm font-medium">de taux de réussite avec notre accompagnement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
