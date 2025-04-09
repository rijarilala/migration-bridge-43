
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
    <div className="bg-white rounded-xl overflow-hidden h-full group hover:scale-[1.02] transition-all duration-300 shadow-md border border-gray-100 relative">
      {/* Ajout d'une décoration de fond en rapport avec le voyage */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
        <img 
          src={title === "Immigration" ? "public/lovable-uploads/4a066ffe-5b4e-44e7-8133-1bae24de50b7.png" : "public/lovable-uploads/039d6288-7250-434f-9dd4-565a94d979a8.png"} 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-8 h-full flex flex-col">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        {/* Fix: Conditionally render Link only when inside a Router context */}
        {link.startsWith('http') ? (
          <a
            href={link}
            className="mt-auto inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus <ArrowRight size={16} className="ml-1" />
          </a>
        ) : (
          <Link
            to={link}
            className="mt-auto inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform duration-300"
          >
            En savoir plus <ArrowRight size={16} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
