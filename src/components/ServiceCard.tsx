
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  accentColor?: "blue" | "brown";
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link,
  accentColor = "blue"
}: ServiceCardProps) => {
  const iconBgClass = accentColor === "brown" 
    ? "bg-brown-100 text-brown-700 group-hover:bg-brown-200" 
    : "bg-primary/10 text-primary group-hover:bg-primary/20";
  
  const linkClass = accentColor === "brown" 
    ? "text-brown-700 hover:text-brown-800" 
    : "text-primary hover:text-primary/80";

  return (
    <div className="bg-white rounded-xl overflow-hidden h-full group hover:scale-[1.02] transition-all duration-300 shadow-md border border-gray-100">
      <div className="p-8 h-full flex flex-col">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconBgClass}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        {/* Fix: Conditionally render Link only when inside a Router context */}
        {link.startsWith('http') ? (
          <a
            href={link}
            className={`mt-auto inline-flex items-center font-medium transition-colors group-hover:translate-x-1 transition-transform duration-300 ${linkClass}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus <ArrowRight size={16} className="ml-1" />
          </a>
        ) : (
          <Link
            to={link}
            className={`mt-auto inline-flex items-center font-medium transition-colors group-hover:translate-x-1 transition-transform duration-300 ${linkClass}`}
          >
            En savoir plus <ArrowRight size={16} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
