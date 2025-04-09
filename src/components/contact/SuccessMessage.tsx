
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SuccessMessageProps = {
  onReset: () => void;
};

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center h-full flex flex-col items-center justify-center py-8">
      <div className="text-accent mb-6">
        <CheckCircle size={80} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-primary">Message envoyé !</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Merci de nous avoir contactés. Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
      </p>
      <Button 
        onClick={onReset} 
        className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-full"
      >
        Envoyer un nouveau message
      </Button>
      
      {/* Decorative elements with passport image */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full overflow-hidden">
        <img src="public/lovable-uploads/a5109544-d931-4b50-99ee-e17782777198.png" alt="Passport" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full"></div>
    </div>
  );
};

export default SuccessMessage;
