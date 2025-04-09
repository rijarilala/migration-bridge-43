
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  // Determine which image to use based on the title or position
  let displayImage = "/lovable-uploads/1590250c-c1f2-40ec-843d-faf8fb969a38.png"; // Default to first feature image
  
  if (title.toLowerCase().includes("immigration")) {
    displayImage = "/lovable-uploads/1590250c-c1f2-40ec-843d-faf8fb969a38.png"; // Woman with luggage at airport
  } else if (title.toLowerCase().includes("carrière") || title.toLowerCase().includes("développez")) {
    displayImage = "/lovable-uploads/24c7fcdb-ae47-4783-842b-28c941fd2134.png"; // Person at train station
  }
  
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl -rotate-3 opacity-10"></div>
              <img
                src={displayImage}
                alt={title}
                className="relative w-full h-auto rounded-xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-5 -left-5 p-4 bg-white rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-slow"></div>
                  <p className="text-sm font-medium">Accompagnement personnalisé</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:w-1/2">
            <div className="mb-10">
              <motion.h2 
                className="text-3xl font-serif font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="gradient-text">{title}</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            </div>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
