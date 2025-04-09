
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SuccessMessageProps = {
  onReset: () => void;
};

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center h-full flex flex-col items-center justify-center py-8">
      <div className="text-accent mb-6 animate-pulse-slow">
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
      
      {/* Section ajoutée avec l'image de la femme */}
      <div className="mt-8 max-w-xs mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg -rotate-2 opacity-10"></div>
        <img 
          src="/public/lovable-uploads/cbb48c30-293c-4eb4-a841-031c05bc3d35.png"
          alt="Accompagnement personnalisé" 
          className="rounded-lg w-full h-auto relative"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-md flex items-center">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse-slow mr-2"></div>
          <p className="text-xs font-medium">Accompagnement personnalisé</p>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-accent/5 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
    </div>
  );
};

export default SuccessMessage;
