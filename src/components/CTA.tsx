
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <a href={buttonLink}>{buttonText}</a>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" size="lg">
                <a href={secondaryButtonLink}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
