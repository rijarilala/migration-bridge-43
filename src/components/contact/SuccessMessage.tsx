
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type SuccessMessageProps = {
  onReset: () => void;
};

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center h-full flex flex-col items-center justify-center py-8">
      <div className="text-green-500 mb-4">
        <CheckCircle size={64} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">Message envoyé !</h3>
      <p className="text-gray-600 mb-6">
        Merci de nous avoir contactés. Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
      </p>
      <Button 
        onClick={onReset} 
        className="bg-primary hover:bg-primary/90 text-white px-6"
      >
        Envoyer un nouveau message
      </Button>
    </div>
  );
};

export default SuccessMessage;
