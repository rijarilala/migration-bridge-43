
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const EligibilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: 30,
    education: "",
    workExperience: "",
    language: "",
    languageLevel: "",
    hasFamilyInCountry: null,
    financialResources: null,
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.education || !formData.language || !formData.languageLevel) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return false;
      }
    } else if (currentStep === 2) {
      if (formData.hasFamilyInCountry === null || formData.financialResources === null) {
        toast.error("Veuillez répondre à toutes les questions");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Veuillez remplir tous les champs de contact");
        return false;
      }
      // Basic email validation
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
      toast.success("Formulaire soumis avec succès! Nous vous contacterons bientôt.");
      // Reset form or redirect to success page
      setTimeout(() => {
        setFormData({
          age: 30,
          education: "",
          workExperience: "",
          language: "",
          languageLevel: "",
          hasFamilyInCountry: null,
          financialResources: null,
          name: "",
          email: "",
          phone: "",
        });
        setCurrentStep(1);
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
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
                  ? "Situation"
                  : step === 3
                  ? "Contact"
                  : "Résultats"}
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Votre profil</h2>
            
            <div className="space-y-2">
              <Label>Votre âge: {formData.age} ans</Label>
              <Slider
                value={[formData.age]}
                min={18}
                max={65}
                step={1}
                onValueChange={(value) => handleInputChange("age", value[0])}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Niveau d'éducation</Label>
              <Select 
                value={formData.education} 
                onValueChange={(value) => handleInputChange("education", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau d'éducation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">Lycée / Baccalauréat</SelectItem>
                  <SelectItem value="associates">Bac+2 / DUT / BTS</SelectItem>
                  <SelectItem value="bachelors">Licence / Bac+3</SelectItem>
                  <SelectItem value="masters">Master / Bac+5</SelectItem>
                  <SelectItem value="phd">Doctorat / PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workExperience">Expérience professionnelle</Label>
              <Select 
                value={formData.workExperience} 
                onValueChange={(value) => handleInputChange("workExperience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre expérience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucune expérience</SelectItem>
                  <SelectItem value="1-3">1-3 ans</SelectItem>
                  <SelectItem value="3-5">3-5 ans</SelectItem>
                  <SelectItem value="5-10">5-10 ans</SelectItem>
                  <SelectItem value="10+">Plus de 10 ans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Langue principale du pays cible</Label>
              <Select 
                value={formData.language} 
                onValueChange={(value) => handleInputChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une langue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">Anglais</SelectItem>
                  <SelectItem value="french">Français</SelectItem>
                  <SelectItem value="german">Allemand</SelectItem>
                  <SelectItem value="spanish">Espagnol</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="languageLevel">Niveau de langue</Label>
              <Select 
                value={formData.languageLevel} 
                onValueChange={(value) => handleInputChange("languageLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Débutant (A1/A2)</SelectItem>
                  <SelectItem value="intermediate">Intermédiaire (B1/B2)</SelectItem>
                  <SelectItem value="advanced">Avancé (C1/C2)</SelectItem>
                  <SelectItem value="native">Langue maternelle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Votre situation</h2>

            <div className="space-y-2">
              <Label>Avez-vous de la famille dans le pays cible?</Label>
              <RadioGroup
                value={formData.hasFamilyInCountry === null ? undefined : formData.hasFamilyInCountry.toString()}
                onValueChange={(value) => handleInputChange("hasFamilyInCountry", value === "true")}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="family-yes" />
                  <Label htmlFor="family-yes">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="family-no" />
                  <Label htmlFor="family-no">Non</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Avez-vous des ressources financières suffisantes pour immigrer?</Label>
              <RadioGroup
                value={formData.financialResources === null ? undefined : formData.financialResources.toString()}
                onValueChange={(value) => handleInputChange("financialResources", value === "true")}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="financial-yes" />
                  <Label htmlFor="financial-yes">Oui</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="financial-no" />
                  <Label htmlFor="financial-no">Non</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Vos coordonnées</h2>

            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Entrez votre nom"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Entrez votre email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Entrez votre numéro de téléphone"
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="py-8 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Merci pour votre demande!</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Nous avons bien reçu vos informations. Un consultant vous contactera dans les plus brefs délais pour discuter de votre éligibilité.
              </p>
              <Button type="button" onClick={() => setCurrentStep(1)} variant="outline">
                Faire un nouveau test
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && currentStep < 4 && (
            <Button type="button" variant="outline" onClick={handlePrevStep}>
              Précédent
            </Button>
          )}
          {currentStep < 3 && (
            <Button type="button" className="ml-auto" onClick={handleNextStep}>
              Suivant
            </Button>
          )}
          {currentStep === 3 && (
            <Button type="submit" className="ml-auto bg-brand-600 hover:bg-brand-700">
              Soumettre
            </Button>
          )}
          {currentStep === 1 && (
            <div className="w-20"></div> {/* Spacer for alignment */}
          )}
        </div>
      </form>
    </div>
  );
};

export default EligibilityForm;
