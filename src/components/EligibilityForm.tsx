import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

const EligibilityForm = () => {
  const initialFormData = {
    age: "",
    education: "",
    experience: "",
    
    frenchLevel: "",
    englishLevel: "",
    
    profession: "",
    professionType: "",
    licenseInQuebec: "",
    
    jobOffer: "",
    familyTies: "",
    canadaProject: "",
    
    name: "",
    email: "",
    phone: "",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const ageOptions: CheckboxOption[] = [
    { id: "age-18-29", label: "18 - 29 ans", value: "18-29" },
    { id: "age-30-39", label: "30 - 39 ans", value: "30-39" },
    { id: "age-40-44", label: "40 - 44 ans", value: "40-44" },
    { id: "age-45-plus", label: "45 ans et plus", value: "45+" },
  ];

  const educationOptions: CheckboxOption[] = [
    { id: "edu-none", label: "Aucun diplôme", value: "none" },
    { id: "edu-highschool", label: "Diplôme d'études secondaires", value: "highschool" },
    { id: "edu-postsecondary", label: "Diplôme postsecondaire (Bac+2)", value: "postsecondary" },
    { id: "edu-bachelor", label: "Licence (Bac+3)", value: "bachelor" },
    { id: "edu-master", label: "Master ou Doctorat", value: "master" },
  ];

  const experienceOptions: CheckboxOption[] = [
    { id: "exp-none", label: "Aucune expérience", value: "none" },
    { id: "exp-less1", label: "Moins d'un an", value: "less1" },
    { id: "exp-1-3", label: "1 - 3 ans", value: "1-3" },
    { id: "exp-4-5", label: "4 - 5 ans", value: "4-5" },
    { id: "exp-more5", label: "Plus de 5 ans", value: "more5" },
  ];

  const frenchLevelOptions: CheckboxOption[] = [
    { id: "french-none", label: "Aucune compétence", value: "none" },
    { id: "french-intermediate", label: "Niveau intermédiaire", value: "intermediate" },
    { id: "french-fluent", label: "Courant", value: "fluent" },
  ];

  const englishLevelOptions: CheckboxOption[] = [
    { id: "english-none", label: "Aucune compétence", value: "none" },
    { id: "english-intermediate", label: "Niveau intermédiaire", value: "intermediate" },
    { id: "english-fluent", label: "Courant", value: "fluent" },
  ];

  const projectOptions: CheckboxOption[] = [
    { id: "project-study", label: "Étudier", value: "study" },
    { id: "project-work", label: "Travailler", value: "work" },
    { id: "project-settle", label: "M'établir de façon permanente", value: "settle" },
    { id: "project-family", label: "Rejoindre un membre de ma famille", value: "family" },
  ];

  const professionTypeOptions: CheckboxOption[] = [
    { id: "prof-highly-skilled", label: "Profession hautement qualifiée", value: "highly-skilled" },
    { id: "prof-intermediate", label: "Profession intermédiaire/manuelle", value: "intermediate" },
    { id: "prof-regulated", label: "Profession réglementée", value: "regulated" },
    { id: "prof-other", label: "Autre profession", value: "other" },
  ];

  const handleSingleOptionChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleTextChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      const formContainer = document.querySelector('.eligibility-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    const formContainer = document.querySelector('.eligibility-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsEligible(null);
    setCurrentStep(1);
    const formContainer = document.querySelector('.eligibility-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toast.success("Le formulaire a été réinitialisé");
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.age) {
        toast.error("Veuillez sélectionner votre tranche d'âge");
        return false;
      }
      if (!formData.education) {
        toast.error("Veuillez sélectionner votre niveau d'études");
        return false;
      }
      if (!formData.experience) {
        toast.error("Veuillez sélectionner votre expérience professionnelle");
        return false;
      }
      if (!formData.frenchLevel) {
        toast.error("Veuillez indiquer votre niveau de français");
        return false;
      }
      if (!formData.englishLevel) {
        toast.error("Veuillez indiquer votre niveau d'anglais");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.professionType && formData.canadaProject === "work") {
        toast.error("Veuillez sélectionner un type de profession");
        return false;
      }
      if (!formData.jobOffer) {
        toast.error("Veuillez indiquer si vous avez une offre d'emploi");
        return false;
      }
      if (!formData.familyTies) {
        toast.error("Veuillez indiquer si vous avez des liens familiaux au Canada");
        return false;
      }
      if (!formData.canadaProject) {
        toast.error("Veuillez sélectionner au moins un projet au Canada");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Veuillez remplir tous les champs de contact");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Veuillez entrer une adresse email valide");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setIsProcessing(true);
      
      setTimeout(() => {
        const eligibility = evaluateEligibilityBehindTheScenes();
        setIsEligible(eligibility);
        setIsProcessing(false);
        
        setCurrentStep(4);
        
        const formContainer = document.querySelector('.eligibility-form-container');
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 2500);
    }
  };

  const evaluateEligibilityBehindTheScenes = (): boolean => {
    const isEligibleForExpressEntry = evaluateExpressEntry();
    const isEligibleForPSTQ = evaluatePSTQ();
    const isEligibleForPCP = evaluatePCP();
    return isEligibleForExpressEntry || isEligibleForPSTQ || isEligibleForPCP;
  };

  const evaluateExpressEntry = (): boolean => {
    let score = 0;
    
    switch(formData.age) {
      case "18-29": score += 25; break;
      case "30-39": score += 20; break;
      case "40-44": score += 10; break;
      default: score += 0;
    }
    
    switch(formData.education) {
      case "none": score += 0; break;
      case "highschool": score += 5; break;
      case "postsecondary": score += 10; break;
      case "bachelor": score += 15; break;
      case "master": score += 25; break;
    }
    
    switch(formData.englishLevel) {
      case "none": score += 0; break;
      case "intermediate": score += 10; break;
      case "fluent": score += 20; break;
    }
    
    return score >= 45;
  };

  const evaluatePSTQ = (): boolean => {
    let score = 0;
    
    switch(formData.frenchLevel) {
      case "none": score += 0; break;
      case "intermediate": score += 15; break;
      case "fluent": score += 30; break;
    }
    
    if (formData.education === "bachelor" || formData.education === "master") {
      score += 20;
    }
    
    if (formData.experience === "4-5" || formData.experience === "more5") {
      score += 15;
    }
    
    if (formData.jobOffer === "yes") score += 10;
    
    return score >= 45;
  };

  const evaluatePCP = (): boolean => {
    let score = 0;
    
    if (formData.jobOffer === "yes") score += 25;
    
    if (formData.familyTies === "yes") score += 15;
    
    switch(formData.experience) {
      case "none": score += 0; break;
      case "less1": score += 5; break;
      case "1-3": score += 10; break;
      case "4-5": score += 20; break;
      case "more5": score += 25; break;
    }
    
    if (formData.education === "postsecondary" || formData.education === "bachelor" || formData.education === "master") {
      score += 15;
    }
    
    return score >= 40;
  };

  return (
    <div className="w-full max-w-3xl mx-auto eligibility-form-container">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step === currentStep
                    ? "bg-brand-600 text-white"
                    : step < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              <div className="text-xs text-gray-500">
                {step === 1
                  ? "Profil"
                  : step === 2
                  ? "Projet"
                  : step === 3
                  ? "Contact"
                  : "Résultat"}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-1 mt-4 rounded-full">
          <div
            className="bg-brand-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Informations personnelles</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Âge (Sélectionner une tranche d'âge)</h3>
              <RadioGroup value={formData.age} onValueChange={(value) => handleSingleOptionChange("age", value)} className="grid gap-3">
                {ageOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Niveau d'études</h3>
              <RadioGroup value={formData.education} onValueChange={(value) => handleSingleOptionChange("education", value)} className="grid gap-3">
                {educationOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Expérience professionnelle</h3>
              <RadioGroup value={formData.experience} onValueChange={(value) => handleSingleOptionChange("experience", value)} className="grid gap-3">
                {experienceOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Compétences linguistiques</h3>
              
              <div className="bg-blue-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-blue-800">Français</h4>
                <RadioGroup value={formData.frenchLevel} onValueChange={(value) => handleSingleOptionChange("frenchLevel", value)} className="grid gap-3">
                  {frenchLevelOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-red-800">Anglais</h4>
                <RadioGroup value={formData.englishLevel} onValueChange={(value) => handleSingleOptionChange("englishLevel", value)} className="grid gap-3">
                  {englishLevelOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Votre projet d'immigration</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Votre projet au Canada</h3>
              <RadioGroup value={formData.canadaProject} onValueChange={(value) => handleSingleOptionChange("canadaProject", value)} className="grid gap-3">
                {projectOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            {formData.canadaProject === "work" && (
              <div className="space-y-4 bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">Type de profession</h3>
                <RadioGroup value={formData.professionType} onValueChange={(value) => handleSingleOptionChange("professionType", value)} className="grid gap-3">
                  {professionTypeOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>

                {formData.professionType === "regulated" && (
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <h4 className="font-medium mb-2">Autorisation ou permis d'exercice</h4>
                    <RadioGroup value={formData.licenseInQuebec} onValueChange={(value) => handleSingleOptionChange("licenseInQuebec", value)} className="grid gap-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="license-yes" value="yes" />
                        <Label htmlFor="license-yes">J'ai ou je peux obtenir une autorisation d'exercice au Canada</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="license-no" value="no" />
                        <Label htmlFor="license-no">Je n'ai pas d'autorisation d'exercice au Canada</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Offre d'emploi validée au Canada ?</h3>
              <RadioGroup value={formData.jobOffer} onValueChange={(value) => handleSingleOptionChange("jobOffer", value)} className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="job-yes" value="yes" />
                  <Label htmlFor="job-yes">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="job-no" value="no" />
                  <Label htmlFor="job-no">Non</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Avez-vous des liens familiaux au Canada ?</h3>
              <RadioGroup value={formData.familyTies} onValueChange={(value) => handleSingleOptionChange("familyTies", value)} className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-yes" value="yes" />
                  <Label htmlFor="family-yes">Oui (famille directe: parents, frères/sœurs, enfants)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-no" value="no" />
                  <Label htmlFor="family-no">Non</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Vos coordonnées</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleTextChange("name", e.target.value)}
                  placeholder="Entrez votre nom complet"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleTextChange("email", e.target.value)}
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleTextChange("phone", e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour une analyse plus approfondie de votre situation.
              </p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-6">
              {isEligible !== null && (
                <>
                  <div className={`w-20 h-20 rounded-full ${isEligible ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mx-auto mb-4`}>
                    {isEligible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {isEligible ? "Vous êtes éligible pour l'immigration" : "Vous n'êtes pas éligible pour l'immigration"}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {isEligible 
                      ? "Selon l'évaluation de votre profil, vous répondez aux critères d'admissibilité pour au moins un des programmes d'immigration au Canada."
                      : "Selon l'évaluation de votre profil, vous ne répondez actuellement aux critères d'aucun des programmes d'immigration au Canada."
                    }
                  </p>
                </>
              )}

              {isProcessing && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="h-16 w-16 text-brand-600 animate-spin mb-4" />
                  <p className="text-gray-600">Nous analysons votre profil selon les trois programmes d'immigration...</p>
                </div>
              )}
            </div>
            
            {isEligible !== null && !isProcessing && (
              <>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4">Prochaines étapes</h3>
                  {isEligible ? (
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Pour avancer dans votre processus d'immigration, nous vous recommandons de:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Prendre rendez-vous avec l'un de nos consultants en immigration</li>
                        <li>Préparer vos documents justificatifs (diplômes, certificats de langue, etc.)</li>
                        <li>Explorer les différentes options de programmes qui correspondent à votre profil</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Même si vous n'êtes pas actuellement éligible, nos consultants peuvent vous aider à:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Identifier les aspects de votre profil qui peuvent être améliorés</li>
                        <li>Vous orienter vers d'autres programmes qui pourraient vous convenir</li>
                        <li>Établir un plan d'action personnalisé pour atteindre vos objectifs d'immigration</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button type="button" onClick={resetForm} variant="outline">
                    Faire un nouveau test
                  </Button>
                  <Button asChild className="bg-brand-600 hover:bg-brand-700">
                    <a href="/contact">Prendre rendez-vous avec un consultant</a>
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {currentStep < 3 && (
          <div className="flex justify-end">
            <Button type="button" onClick={handleNextStep} className="bg-brand-600 hover:bg-brand-700">
              Continuer
            </Button>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="flex justify-end">
            <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
              Soumettre
            </Button>
          </div>
        )}
        
        {currentStep > 1 && currentStep < 4 && (
          <div className="flex justify-start mt-6">
            <Button type="button" variant="outline" onClick={handlePrevStep}>
              Précédent
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EligibilityForm;
