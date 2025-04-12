
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface FormationFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
}

const FormationFeatureCard = ({ title, description, icon, benefits }: FormationFeatureCardProps) => {
  return (
    <Card className="border-gray-100 shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          
          <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          
          {benefits.length > 0 && (
            <ul className="space-y-2 mt-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-accent h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FormationFeatureCard;
