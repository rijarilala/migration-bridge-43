
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "En savoir plus",
  ctaLink = "/services",
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}: HeroProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary/10 pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
            >
              Immigration | Formation | Coaching
            </motion.div>
            
            <motion.h1 
              className="font-serif font-bold tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="gradient-text">{title}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button asChild size="lg" className="rounded-full px-6 font-medium">
                <Link to="/eligibility" className="flex items-center gap-2">
                  Tester mon éligibilité <ArrowRight size={16} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 font-medium">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?q=80&w=600&h=800&auto=format&fit=crop" 
                alt="Famille heureuse immigrée au Canada"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />

              <motion.div 
                className="absolute -bottom-6 -right-6 p-6 bg-white rounded-lg shadow-lg max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-800 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    95%
                  </div>
                  <p className="text-sm font-medium">de taux de réussite avec notre accompagnement</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
