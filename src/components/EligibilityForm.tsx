
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

type Program = "express" | "prtq" | "peq" | "provincial" | "family";

interface ProgramResult {
  program: string;
  score: number;
  maxScore: number;
  eligibility: "high" | "medium" | "low";
  details: string;
}

const EligibilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Section personnelle
    age: 30,
    educationLevel: "",
    frenchLevel: "",
    englishLevel: "",
    
    // Section professionnelle
    workExperience: "",
    canadianExperience: "",
    workField: "",
    
    // Section supplémentaire
    hasFamilyInCanada: null,
    spouseEducation: "",
    spouseLanguage: "",
    financialResources: null,
    
    // Section contact
    name: "",
    email: "",
    phone: "",
    province: "",
  });

  const [results, setResults] = useState<ProgramResult[]>([]);
  const [bestProgram, setBestProgram] = useState<string>("");

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      // Scroll to the top of the form container smoothly instead of refreshing the page
      const formContainer = document.querySelector('.eligibility-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    // Scroll to the top of the form container smoothly instead of refreshing the page
    const formContainer = document.querySelector('.eligibility-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.educationLevel || !formData.frenchLevel || !formData.englishLevel) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.workExperience || !formData.workField) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return false;
      }
    } else if (currentStep === 3) {
      if (formData.hasFamilyInCanada === null || formData.financialResources === null) {
        toast.error("Veuillez répondre à toutes les questions");
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.name || !formData.email || !formData.phone || !formData.province) {
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
      // Calculer les scores pour chaque programme
      const programResults = calculateProgramResults();
      setResults(programResults);
      
      // Déterminer le meilleur programme
      const best = programResults.reduce((prev, current) => 
        (current.score / current.maxScore) > (prev.score / prev.maxScore) ? current : prev, 
        programResults[0]
      );
      
      setBestProgram(best.program);
      
      // Passer à l'étape des résultats
      setCurrentStep(5);
      
      // Scroll to the top of the form container smoothly instead of refreshing the page
      const formContainer = document.querySelector('.eligibility-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const calculateProgramResults = (): ProgramResult[] => {
    // Fonction pour calculer les scores pour chaque programme d'immigration
    const results: ProgramResult[] = [];
    
    // Express Entry
    let expressScore = 0;
    let expressMax = 1200;
    
    // Points pour l'âge (max 110)
    if (formData.age <= 35) {
      expressScore += 110 - (Math.abs(30 - formData.age) * 5);
    } else {
      expressScore += Math.max(0, 110 - ((formData.age - 35) * 10));
    }
    
    // Points pour l'éducation (max 150)
    switch (formData.educationLevel) {
      case "high-school":
        expressScore += 30;
        break;
      case "college":
        expressScore += 90;
        break;
      case "bachelors":
        expressScore += 120;
        break;
      case "masters":
        expressScore += 135;
        break;
      case "phd":
        expressScore += 150;
        break;
    }
    
    // Points pour la langue (max 160 pour les deux langues)
    switch (formData.englishLevel) {
      case "clb9+":
        expressScore += 80;
        break;
      case "clb7-8":
        expressScore += 64;
        break;
      case "clb5-6":
        expressScore += 32;
        break;
      case "clb4":
        expressScore += 16;
        break;
    }
    
    switch (formData.frenchLevel) {
      case "nclc9+":
        expressScore += 80;
        break;
      case "nclc7-8":
        expressScore += 64;
        break;
      case "nclc5-6":
        expressScore += 32;
        break;
      case "nclc4":
        expressScore += 16;
        break;
    }
    
    // Points pour l'expérience professionnelle (max 80)
    switch (formData.workExperience) {
      case "5+":
        expressScore += 80;
        break;
      case "3-5":
        expressScore += 64;
        break;
      case "1-3":
        expressScore += 40;
        break;
      case "none":
        expressScore += 0;
        break;
    }
    
    // Points bonus pour l'expérience canadienne (max 70)
    switch (formData.canadianExperience) {
      case "3+":
        expressScore += 70;
        break;
      case "1-3":
        expressScore += 35;
        break;
      case "none":
        expressScore += 0;
        break;
    }
    
    // Points pour la famille au Canada (max 40)
    if (formData.hasFamilyInCanada) {
      expressScore += 40;
    }
    
    // Déterminer l'éligibilité
    let expressEligibility: "high" | "medium" | "low" = "low";
    const expressPercentage = expressScore / expressMax;
    if (expressPercentage > 0.75) {
      expressEligibility = "high";
    } else if (expressPercentage > 0.5) {
      expressEligibility = "medium";
    }
    
    results.push({
      program: "Entrée Express",
      score: expressScore,
      maxScore: expressMax,
      eligibility: expressEligibility,
      details: "Programme fédéral pour les travailleurs qualifiés."
    });
    
    // Programme des Travailleurs Qualifiés du Québec (PRTQ)
    let prtqScore = 0;
    let prtqMax = 100;
    
    // Points pour l'âge (max 16)
    if (formData.age >= 18 && formData.age <= 35) {
      prtqScore += 16;
    } else if (formData.age > 35) {
      prtqScore += Math.max(0, 16 - ((formData.age - 35) * 2));
    }
    
    // Points pour l'éducation (max 26)
    switch (formData.educationLevel) {
      case "high-school":
        prtqScore += 6;
        break;
      case "college":
        prtqScore += 13;
        break;
      case "bachelors":
        prtqScore += 20;
        break;
      case "masters":
      case "phd":
        prtqScore += 26;
        break;
    }
    
    // Points pour le français (max 22)
    switch (formData.frenchLevel) {
      case "nclc9+":
        prtqScore += 22;
        break;
      case "nclc7-8":
        prtqScore += 16;
        break;
      case "nclc5-6":
        prtqScore += 10;
        break;
      case "nclc4":
        prtqScore += 6;
        break;
    }
    
    // Points pour l'expérience professionnelle (max 8)
    switch (formData.workExperience) {
      case "5+":
        prtqScore += 8;
        break;
      case "3-5":
        prtqScore += 6;
        break;
      case "1-3":
        prtqScore += 4;
        break;
      case "none":
        prtqScore += 0;
        break;
    }
    
    // Déterminer l'éligibilité
    let prtqEligibility: "high" | "medium" | "low" = "low";
    const prtqPercentage = prtqScore / prtqMax;
    if (prtqPercentage > 0.6) {
      prtqEligibility = "high";
    } else if (prtqPercentage > 0.4) {
      prtqEligibility = "medium";
    }
    
    results.push({
      program: "Programme des Travailleurs Qualifiés (PRTQ)",
      score: prtqScore,
      maxScore: prtqMax,
      eligibility: prtqEligibility,
      details: "Programme provincial pour les travailleurs qualifiés souhaitant s'installer au Québec."
    });
    
    // Programme de l'Expérience Québécoise (PEQ)
    let peqEligible = false;
    let peqDetails = "";
    
    // Critères d'éligibilité pour le PEQ
    if (formData.canadianExperience !== "none" && formData.province === "quebec") {
      if (formData.frenchLevel === "nclc7-8" || formData.frenchLevel === "nclc9+") {
        peqEligible = true;
        peqDetails = "Vous semblez éligible au PEQ grâce à votre expérience de travail au Québec et votre niveau de français.";
      } else {
        peqDetails = "Vous avez de l'expérience au Québec, mais votre niveau de français n'est pas suffisant pour le PEQ (minimum NCLC 7 requis).";
      }
    } else {
      peqDetails = "Le PEQ nécessite une expérience de travail récente au Québec et un bon niveau de français.";
    }
    
    results.push({
      program: "Programme de l'Expérience Québécoise (PEQ)",
      score: peqEligible ? 1 : 0,
      maxScore: 1,
      eligibility: peqEligible ? "high" : "low",
      details: peqDetails
    });
    
    // Programme des candidats provinciaux
    let provincialDetails = "";
    let provincialEligibility: "high" | "medium" | "low" = "low";
    
    if (formData.province && formData.province !== "none" && formData.province !== "quebec") {
      switch (formData.workField) {
        case "tech":
        case "healthcare":
        case "trades":
          provincialEligibility = "high";
          provincialDetails = `Votre domaine de travail (${formData.workField}) est en forte demande dans plusieurs provinces.`;
          break;
        case "business":
        case "education":
          provincialEligibility = "medium";
          provincialDetails = `Votre domaine de travail (${formData.workField}) peut être éligible à certains programmes provinciaux spécifiques.`;
          break;
        default:
          provincialDetails = "Vérifiez les programmes spécifiques de la province qui vous intéresse.";
      }
    } else {
      provincialDetails = "Vous n'avez pas sélectionné de province spécifique ou vous avez choisi le Québec qui a ses propres programmes.";
    }
    
    results.push({
      program: "Programme des Candidats Provinciaux (PCP)",
      score: provincialEligibility === "high" ? 85 : provincialEligibility === "medium" ? 60 : 30,
      maxScore: 100,
      eligibility: provincialEligibility,
      details: provincialDetails
    });
    
    // Programme de regroupement familial
    let familyEligible = formData.hasFamilyInCanada;
    let familyDetails = familyEligible 
      ? "Vous pourriez être éligible au parrainage familial si votre membre de famille est citoyen canadien ou résident permanent."
      : "Ce programme nécessite d'avoir un membre de la famille proche qui est citoyen canadien ou résident permanent.";
    
    results.push({
      program: "Regroupement Familial",
      score: familyEligible ? 1 : 0,
      maxScore: 1,
      eligibility: familyEligible ? "high" : "low",
      details: familyDetails
    });
    
    return results;
  };

  return (
    <div className="w-full max-w-2xl mx-auto eligibility-form-container">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((step) => (
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
                  ? "Personnel"
                  : step === 2
                  ? "Professionnel"
                  : step === 3
                  ? "Supplémentaire"
                  : step === 4
                  ? "Contact"
                  : "Résultats"}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-1 mt-4 rounded-full">
          <div
            className="bg-brand-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Informations Personnelles</h2>
            
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
              <Label htmlFor="educationLevel">Niveau d'éducation</Label>
              <Select 
                value={formData.educationLevel} 
                onValueChange={(value) => handleInputChange("educationLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau d'éducation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">Lycée / Baccalauréat</SelectItem>
                  <SelectItem value="college">DUT / BTS / Bac+2</SelectItem>
                  <SelectItem value="bachelors">Licence / Bac+3</SelectItem>
                  <SelectItem value="masters">Master / Bac+5</SelectItem>
                  <SelectItem value="phd">Doctorat / PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="frenchLevel">Niveau de français (NCLC)</Label>
              <Select 
                value={formData.frenchLevel} 
                onValueChange={(value) => handleInputChange("frenchLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau de français" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucune compétence</SelectItem>
                  <SelectItem value="nclc4">NCLC 4 (Basique)</SelectItem>
                  <SelectItem value="nclc5-6">NCLC 5-6 (Intermédiaire)</SelectItem>
                  <SelectItem value="nclc7-8">NCLC 7-8 (Avancé)</SelectItem>
                  <SelectItem value="nclc9+">NCLC 9+ (Expert)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="englishLevel">Niveau d'anglais (CLB)</Label>
              <Select 
                value={formData.englishLevel} 
                onValueChange={(value) => handleInputChange("englishLevel", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau d'anglais" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucune compétence</SelectItem>
                  <SelectItem value="clb4">CLB 4 (Basique)</SelectItem>
                  <SelectItem value="clb5-6">CLB 5-6 (Intermédiaire)</SelectItem>
                  <SelectItem value="clb7-8">CLB 7-8 (Avancé)</SelectItem>
                  <SelectItem value="clb9+">CLB 9+ (Expert)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Expérience Professionnelle</h2>

            <div className="space-y-2">
              <Label htmlFor="workExperience">Années d'expérience professionnelle</Label>
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
                  <SelectItem value="5+">Plus de 5 ans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="canadianExperience">Expérience professionnelle au Canada</Label>
              <Select 
                value={formData.canadianExperience} 
                onValueChange={(value) => handleInputChange("canadianExperience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre expérience canadienne" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucune expérience au Canada</SelectItem>
                  <SelectItem value="1-3">1-3 ans</SelectItem>
                  <SelectItem value="3+">Plus de 3 ans</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workField">Domaine de travail</Label>
              <Select 
                value={formData.workField} 
                onValueChange={(value) => handleInputChange("workField", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre domaine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technologies de l'information</SelectItem>
                  <SelectItem value="healthcare">Santé</SelectItem>
                  <SelectItem value="education">Éducation</SelectItem>
                  <SelectItem value="business">Commerce/Affaires</SelectItem>
                  <SelectItem value="engineering">Ingénierie</SelectItem>
                  <SelectItem value="trades">Métiers spécialisés</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="hospitality">Hôtellerie/Restauration</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Informations Supplémentaires</h2>

            <div className="space-y-2">
              <Label>Avez-vous de la famille au Canada?</Label>
              <RadioGroup
                value={formData.hasFamilyInCanada === null ? undefined : formData.hasFamilyInCanada.toString()}
                onValueChange={(value) => handleInputChange("hasFamilyInCanada", value === "true")}
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
              <Label htmlFor="spouseEducation">Niveau d'éducation du conjoint (si applicable)</Label>
              <Select 
                value={formData.spouseEducation} 
                onValueChange={(value) => handleInputChange("spouseEducation", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le niveau d'éducation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Non applicable</SelectItem>
                  <SelectItem value="high-school">Lycée / Baccalauréat</SelectItem>
                  <SelectItem value="college">DUT / BTS / Bac+2</SelectItem>
                  <SelectItem value="bachelors">Licence / Bac+3</SelectItem>
                  <SelectItem value="masters">Master / Bac+5</SelectItem>
                  <SelectItem value="phd">Doctorat / PhD</SelectItem>
                </SelectContent>
              </Select>
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

        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Vos Coordonnées</h2>

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

            <div className="space-y-2">
              <Label htmlFor="province">Province d'intérêt</Label>
              <Select 
                value={formData.province} 
                onValueChange={(value) => handleInputChange("province", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="bc">Colombie-Britannique</SelectItem>
                  <SelectItem value="manitoba">Manitoba</SelectItem>
                  <SelectItem value="newbrunswick">Nouveau-Brunswick</SelectItem>
                  <SelectItem value="newfoundland">Terre-Neuve-et-Labrador</SelectItem>
                  <SelectItem value="novascotia">Nouvelle-Écosse</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                  <SelectItem value="pei">Île-du-Prince-Édouard</SelectItem>
                  <SelectItem value="quebec">Québec</SelectItem>
                  <SelectItem value="saskatchewan">Saskatchewan</SelectItem>
                  <SelectItem value="yukon">Yukon</SelectItem>
                  <SelectItem value="northwest">Territoires du Nord-Ouest</SelectItem>
                  <SelectItem value="nunavut">Nunavut</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Résultats de Votre Évaluation</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Basé sur vos informations, voici une analyse de votre admissibilité aux différents programmes d'immigration canadiens.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-800 mb-2">Recommandation Principale</h3>
              <p>
                Le programme le plus adapté à votre profil est le <span className="font-bold">{bestProgram}</span>. 
                Consultez les détails ci-dessous pour en savoir plus sur votre admissibilité à ce programme et aux autres options.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Programme</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Admissibilité</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{result.program}</TableCell>
                    <TableCell>
                      {result.score} / {result.maxScore}
                      <div className="w-full bg-gray-200 h-2 mt-1 rounded-full">
                        <div
                          className={`h-2 rounded-full ${
                            result.eligibility === "high" 
                              ? "bg-green-500" 
                              : result.eligibility === "medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                        ></div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        result.eligibility === "high" 
                          ? "bg-green-100 text-green-800" 
                          : result.eligibility === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {result.eligibility === "high" 
                          ? "Élevée" 
                          : result.eligibility === "medium"
                          ? "Moyenne"
                          : "Faible"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="space-y-4 mt-6">
              <h3 className="font-semibold text-lg">Détails des Programmes</h3>
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-1">{result.program}</h4>
                  <p className="text-gray-600 text-sm">{result.details}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-2">Prochaines étapes</h3>
              <p className="text-gray-600 mb-4">
                Pour continuer votre processus d'immigration, nous vous recommandons de:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Prendre rendez-vous avec un de nos consultants en immigration</li>
                <li>Préparer vos documents justificatifs (diplômes, certificats de langue, etc.)</li>
                <li>Vérifier les exigences spécifiques du programme recommandé</li>
              </ul>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button type="button" onClick={() => setCurrentStep(1)} variant="outline" className="mr-4">
                Faire un nouveau test
              </Button>
              <Button asChild className="bg-brand-600 hover:bg-brand-700">
                <a href="/contact">Prendre rendez-vous</a>
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && currentStep < 5 && (
            <Button type="button" variant="outline" onClick={handlePrevStep}>
              Précédent
            </Button>
          )}
          {currentStep < 4 && (
            <Button type="button" className="ml-auto" onClick={handleNextStep}>
              Suivant
            </Button>
          )}
          {currentStep === 4 && (
            <Button type="submit" className="ml-auto bg-brand-600 hover:bg-brand-700">
              Soumettre
            </Button>
          )}
          {currentStep === 1 && (
            <div className="w-20"></div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EligibilityForm;
