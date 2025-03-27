
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
      className="relative bg-white rounded-xl shadow-md p-6 border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-primary/10 text-4xl font-serif">"</div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon 
              key={i} 
              size={16} 
              className={i < rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"} 
            />
          ))}
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">"{testimonial}"</p>
        
        <div className="flex items-center mt-auto">
          <div className="relative w-12 h-12 mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
            />
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
