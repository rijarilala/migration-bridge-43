
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
  imageSrc: string;
  ctaLink: string;
  ctaText: string;
}

const ServicePage = ({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  ctaLink,
  ctaText,
}: ServicePageProps) => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{description}</h2>
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
                  <Link to={ctaLink}>
                    {ctaText} <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last mb-6 lg:mb-0">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto rounded-xl shadow-md object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
