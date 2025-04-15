import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ComparisonItem {
  icon: ReactNode;
  text: string;
}

interface ComparisonSectionProps {
  withoutMembershipTitle: string;
  withMembershipTitle: string;
  withoutMembershipItems: ComparisonItem[];
  withMembershipItems: ComparisonItem[];
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const ComparisonSection = ({
  withoutMembershipTitle,
  withMembershipTitle,
  withoutMembershipItems,
  withMembershipItems,
  ctaText = "Tester mon éligibilité",
  ctaLink = "/eligibility",
  secondaryCtaText = "Tester mon éligibilité",
  secondaryCtaLink = "/eligibility"
}: ComparisonSectionProps) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="border-red-200 shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 px-6 py-4">
              <h3 className="text-xl font-semibold text-red-800 text-center">{withoutMembershipTitle}</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {withoutMembershipItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    custom={index} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeIn} 
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="border-green-200 shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 px-6 py-4">
              <h3 className="text-xl font-semibold text-green-800 text-center">{withMembershipTitle}</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {withMembershipItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    custom={index} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeIn} 
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-1 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105"
          >
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105"
          >
            <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonSection;
