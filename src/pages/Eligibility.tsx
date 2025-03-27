
import { useEffect, useRef } from "react";
import EligibilityForm from "@/components/EligibilityForm";
import Stats from "@/components/Stats";

const Eligibility = () => {
  // Suppression de l'appel à window.scrollTo qui causait le rafraîchissement
  // Nous allons utiliser un comportement de défilement plus fluide

  const immigrationStats = [
    { value: "350k+", label: "Immigrants acceptés par année" },
    { value: "60+", label: "Programmes d'immigration" },
    { value: "89%", label: "Taux de succès avec accompagnement" },
    { value: "6-12", label: "Mois de délai de traitement" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Évaluation d'Admissibilité à l'Immigration Canadienne
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez votre admissibilité aux programmes d'immigration canadiens comme 
              Entrée Express, le Programme des Travailleurs Qualifiés (PRTQ) et le 
              Programme de l'Expérience Québécoise (PEQ).
            </p>
          </div>

          <Stats 
            title="L'Immigration au Canada en Chiffres" 
            description="Le Canada accueille chaque année des centaines de milliers d'immigrants dans le cadre de ses différents programmes."
            stats={immigrationStats} 
          />

          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8 mt-12">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
