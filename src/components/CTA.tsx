
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTA = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink
}: CTAProps) => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="company-section-title mb-4">Commencez maintenant</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttonText && (
              <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 rounded-full">
                <Link to={buttonLink}>
                  {buttonText}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full">
                <Link to={secondaryButtonLink}>
                  {secondaryButtonText}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-20">
        <img 
          src="public/lovable-uploads/039d6288-7250-434f-9dd4-565a94d979a8.png" 
          alt="Décoration carte du monde" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="absolute top-10 right-10 w-24 h-24 opacity-20">
        <img 
          src="public/lovable-uploads/3b62a679-8096-440c-ba1d-c8d6707ee097.png" 
          alt="Décoration passeport" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default CTA;
