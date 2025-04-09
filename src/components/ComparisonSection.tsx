
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ComparisonItem {
  icon: ReactNode;
  text: string;
}

interface ComparisonSectionProps {
  withoutMembershipTitle: string;
  withMembershipTitle: string;
  withoutMembershipItems: ComparisonItem[];
  withMembershipItems: ComparisonItem[];
}

const ComparisonSection = ({
  withoutMembershipTitle,
  withMembershipTitle,
  withoutMembershipItems,
  withMembershipItems
}: ComparisonSectionProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Without Membership Column */}
      <Card className="border-red-200 shadow-lg overflow-hidden relative">
        <div className="bg-red-100 px-6 py-4">
          <h3 className="text-xl font-semibold text-red-800">{withoutMembershipTitle}</h3>
        </div>
        {/* Image dans le coin */}
        <div className="absolute top-2 right-2 w-12 h-12 opacity-25">
          <img src="public/lovable-uploads/3b62a679-8096-440c-ba1d-c8d6707ee097.png" alt="" className="w-full h-full object-contain" />
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
                <span className="mt-1 flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* With Membership Column */}
      <Card className="border-green-200 shadow-lg overflow-hidden relative">
        <div className="bg-green-100 px-6 py-4">
          <h3 className="text-xl font-semibold text-green-800">{withMembershipTitle}</h3>
        </div>
        {/* Image dans le coin */}
        <div className="absolute top-2 right-2 w-12 h-12 opacity-25">
          <img src="public/lovable-uploads/a5109544-d931-4b50-99ee-e17782777198.png" alt="" className="w-full h-full object-contain" />
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
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparisonSection;
