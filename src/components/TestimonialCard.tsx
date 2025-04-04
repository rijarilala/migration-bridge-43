
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, testimonial, rating, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon 
            key={i} 
            size={16} 
            className={i < rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow italic text-sm">{testimonial}</p>
      
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
