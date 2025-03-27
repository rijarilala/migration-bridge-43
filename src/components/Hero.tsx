
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="relative overflow-hidden bg-gray-50 pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <a href={ctaLink}>
                {ctaText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button asChild variant="outline" size="lg">
                <a href={secondaryCtaLink}>
                  {secondaryCtaText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
