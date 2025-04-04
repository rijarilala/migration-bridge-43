
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card-modern group p-6"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative">
          <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
            {icon}
          </div>
          
          <h3 className="text-xl font-serif font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          <Link 
            to={link}
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300"
          >
            En savoir plus
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
