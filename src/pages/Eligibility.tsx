
import { useEffect } from "react";
import EligibilityForm from "@/components/EligibilityForm";

const Eligibility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Test d'Éligibilité à l'Immigration
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complétez ce questionnaire pour évaluer vos chances d'immigration. 
              Nos experts analyseront votre profil et vous contacteront avec des 
              recommandations personnalisées.
            </p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
