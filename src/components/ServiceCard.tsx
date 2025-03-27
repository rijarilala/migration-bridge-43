
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] overflow-hidden h-full">
      <div className="p-6">
        <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
        >
          En savoir plus <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
