
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: FeatureProps[];
  reversed?: boolean;
  imageSrc: string;
}

const FeatureSection = ({ 
  title, 
  subtitle, 
  features, 
  reversed = false,
  imageSrc 
}: FeatureSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="lg:w-1/2">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
