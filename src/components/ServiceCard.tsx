
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
    <div className="card-gradient rounded-xl overflow-hidden h-full group hover:scale-[1.02] transition-all duration-300">
      <div className="p-8 h-full flex flex-col">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-all duration-300">
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
