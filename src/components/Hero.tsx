
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
  useTranslations?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink = "/services",
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  useTranslations = true,
}: HeroProps) => {
  const { t } = useTranslation();
  
  const heroTitle = useTranslations ? t("home.hero.title") : title;
  const heroSubtitle = useTranslations ? t("home.hero.subtitle") : subtitle;
  const heroCtaText = useTranslations ? t("home.hero.ctaTest") : ctaText;
  const heroSecondaryCtaText = useTranslations ? t("home.hero.ctaServices") : secondaryCtaText;

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary/70 to-background pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-50 md:opacity-70">
          <img
            src={imageSrc}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
        
        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-56 h-56 bg-brand-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Immigration | Formation | Coaching
              </motion.div>
              <motion.h1 
                className="font-serif font-bold tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="gradient-text">{heroTitle}</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {heroSubtitle}
              </motion.p>
            </div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {heroCtaText && (
                <Button asChild size="lg" className="rounded-md bg-primary hover:bg-primary/90">
                  <Link to="/eligibility">{heroCtaText}</Link>
                </Button>
              )}
              
              {heroSecondaryCtaText && secondaryCtaLink && (
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link to={secondaryCtaLink}>{heroSecondaryCtaText}</Link>
                </Button>
              )}
            </motion.div>
          </motion.div>
          
          <div className="hidden md:block relative">
            <motion.div 
              className="relative w-full max-w-md mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl rotate-3 opacity-20"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?q=80&w=600&h=800&auto=format&fit=crop" 
                  alt="Famille heureuse immigrée au Canada"
                  className="w-full object-cover animate-float"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 p-6 bg-white rounded-lg shadow-lg max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 text-green-800 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    95%
                  </div>
                  <p className="text-sm font-medium">de taux de réussite avec notre accompagnement</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
