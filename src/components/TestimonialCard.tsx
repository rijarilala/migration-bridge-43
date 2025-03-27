
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, testimonial, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } mr-1`}
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{testimonial}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
