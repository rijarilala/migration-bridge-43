
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

interface EligibilityResult {
  program: string;
  eligible: boolean;
  message: string;
  details: string;
  level: "high" | "medium" | "low";
}

const EligibilityForm = () => {
  const { t, language } = useLanguage();
  
  const initialFormData = {
    // Informations personnelles
    age: "",
    education: "",
    experience: "",
    
    // Compétences linguistiques séparées
    frenchLevel: "",
    englishLevel: "",
    
    // Informations professionnelles (pour PSTQ)
    profession: "",
    professionType: "",
    licenseInQuebec: "",
    exceptionalTalent: "",
    
    // Informations supplémentaires
    jobOffer: "",
    familyTies: "",
    canadaProject: "",
    
    // Contact
    name: "",
    email: "",
    phone: "",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [results, setResults] = useState<EligibilityResult[]>([]);
  const [bestProgram, setBestProgram] = useState<string>("");

  // Options pour les cases à cocher
  const getAgeOptions = (): CheckboxOption[] => [
    { id: "age-18-29", label: t('age_18_29'), value: "18-29" },
    { id: "age-30-39", label: t('age_30_39'), value: "30-39" },
    { id: "age-40-44", label: t('age_40_44'), value: "40-44" },
    { id: "age-45-plus", label: t('age_45_plus'), value: "45+" },
  ];

  const getEducationOptions = (): CheckboxOption[] => [
    { id: "edu-none", label: t('edu_none'), value: "none" },
    { id: "edu-highschool", label: t('edu_highschool'), value: "highschool" },
    { id: "edu-postsecondary", label: t('edu_postsecondary'), value: "postsecondary" },
    { id: "edu-bachelor", label: t('edu_bachelor'), value: "bachelor" },
    { id: "edu-master", label: t('edu_master'), value: "master" },
  ];

  const getExperienceOptions = (): CheckboxOption[] => [
    { id: "exp-none", label: t('exp_none'), value: "none" },
    { id: "exp-less1", label: t('exp_less1'), value: "less1" },
    { id: "exp-1-3", label: t('exp_1_3'), value: "1-3" },
    { id: "exp-4-5", label: t('exp_4_5'), value: "4-5" },
    { id: "exp-more5", label: t('exp_more5'), value: "more5" },
  ];

  const getFrenchLevelOptions = (): CheckboxOption[] => [
    { id: "french-none", label: t('french_none'), value: "none" },
    { id: "french-intermediate", label: t('french_intermediate'), value: "intermediate" },
    { id: "french-fluent", label: t('french_fluent'), value: "fluent" },
  ];

  const getEnglishLevelOptions = (): CheckboxOption[] => [
    { id: "english-none", label: t('english_none'), value: "none" },
    { id: "english-intermediate", label: t('english_intermediate'), value: "intermediate" },
    { id: "english-fluent", label: t('english_fluent'), value: "fluent" },
  ];

  const getProjectOptions = (): CheckboxOption[] => [
    { id: "project-study", label: t('project_study'), value: "study" },
    { id: "project-work", label: t('project_work'), value: "work" },
    { id: "project-settle", label: t('project_settle'), value: "settle" },
    { id: "project-family", label: t('project_family'), value: "family" },
  ];

  const getProfessionTypeOptions = (): CheckboxOption[] => [
    { id: "prof-highly-skilled", label: t('prof_highly_skilled'), value: "highly-skilled" },
    { id: "prof-intermediate", label: t('prof_intermediate'), value: "intermediate" },
    { id: "prof-regulated", label: t('prof_regulated'), value: "regulated" },
    { id: "prof-exceptional", label: t('prof_exceptional'), value: "exceptional" },
    { id: "prof-unknown", label: t('prof_unknown'), value: "unknown" },
  ];

  const handleSingleOptionChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleCheckboxChange = (fieldName: string, checked: boolean) => {
    setFormData({ ...formData, [fieldName]: checked });
  };

  const handleTextChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      // Scroll to the top of the form container smoothly
      const formContainer = document.querySelector('.eligibility-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    // Scroll to the top of the form container smoothly
    const formContainer = document.querySelector('.eligibility-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetForm = () => {
    // Reset the form data to initial state
    setFormData(initialFormData);
    // Reset results
    setResults([]);
    setBestProgram("");
    // Return to step 1
    setCurrentStep(1);
    // Scroll to the top of the form container smoothly
    const formContainer = document.querySelector('.eligibility-form-container');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toast.success(t('form_reset_success'));
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.age) {
        toast.error(t('select_age_error'));
        return false;
      }
      if (!formData.education) {
        toast.error(t('select_education_error'));
        return false;
      }
      if (!formData.experience) {
        toast.error(t('select_experience_error'));
        return false;
      }
      if (!formData.frenchLevel) {
        toast.error(t('select_french_error'));
        return false;
      }
      if (!formData.englishLevel) {
        toast.error(t('select_english_error'));
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.professionType && formData.canadaProject === "work") {
        toast.error(t('select_profession_error'));
        return false;
      }
      if (!formData.jobOffer) {
        toast.error(t('select_job_offer_error'));
        return false;
      }
      if (!formData.familyTies) {
        toast.error(t('select_family_ties_error'));
        return false;
      }
      if (!formData.canadaProject) {
        toast.error(t('select_project_error'));
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error(t('fill_contact_error'));
        return false;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error(t('valid_email_error'));
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      // Calculer les résultats d'éligibilité
      const eligibilityResults = calculateEligibility();
      setResults(eligibilityResults);
      
      // Déterminer le meilleur programme
      const highEligibilityPrograms = eligibilityResults.filter(r => r.level === "high");
      if (highEligibilityPrograms.length > 0) {
        setBestProgram(highEligibilityPrograms[0].program);
      } else {
        const mediumEligibilityPrograms = eligibilityResults.filter(r => r.level === "medium");
        if (mediumEligibilityPrograms.length > 0) {
          setBestProgram(mediumEligibilityPrograms[0].program);
        } else {
          setBestProgram(t('no_optimal_program'));
        }
      }
      
      // Passer à l'étape des résultats
      setCurrentStep(4);
      
      // Scroll to the top of the form container smoothly
      const formContainer = document.querySelector('.eligibility-form-container');
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const calculateEligibility = (): EligibilityResult[] => {
    const results: EligibilityResult[] = [];
    
    // Points pour Entrée Express
    let expressPoints = 0;
    let expressMaxPoints = 100;
    
    // Points pour l'âge
    switch(formData.age) {
      case "18-29":
        expressPoints += 25;
        break;
      case "30-39":
        expressPoints += 20;
        break;
      case "40-44":
        expressPoints += 10;
        break;
      case "45+":
        expressPoints += 0;
        break;
    }
    
    // Points pour l'éducation
    switch(formData.education) {
      case "none":
        expressPoints += 0;
        break;
      case "highschool":
        expressPoints += 5;
        break;
      case "postsecondary":
        expressPoints += 15;
        break;
      case "bachelor":
        expressPoints += 20;
        break;
      case "master":
        expressPoints += 25;
        break;
    }
    
    // Points pour l'expérience professionnelle
    switch(formData.experience) {
      case "none":
        expressPoints += 0;
        break;
      case "less1":
        expressPoints += 5;
        break;
      case "1-3":
        expressPoints += 10;
        break;
      case "4-5":
        expressPoints += 15;
        break;
      case "more5":
        expressPoints += 20;
        break;
    }
    
    // Points pour les compétences linguistiques séparées
    switch(formData.frenchLevel) {
      case "fluent":
        expressPoints += 15;
        break;
      case "intermediate":
        expressPoints += 8;
        break;
      case "none":
        expressPoints += 0;
        break;
    }
    
    switch(formData.englishLevel) {
      case "fluent":
        expressPoints += 15;
        break;
      case "intermediate":
        expressPoints += 8;
        break;
      case "none":
        expressPoints += 0;
        break;
    }
    
    // Bonus pour offre d'emploi
    if (formData.jobOffer === "yes") expressPoints += 15;
    
    // Déterminer l'éligibilité pour Entrée Express
    let expressLevel: "high" | "medium" | "low" = "low";
    let expressMessage = "";
    let expressDetails = "";
    
    const expressPercentage = expressPoints / expressMaxPoints;
    if (expressPercentage >= 0.7) {
      expressLevel = "high";
      expressMessage = language === 'en' ? "✅ You appear eligible for Express Entry, discover the next steps!" : "✅ Vous semblez éligible à Entrée Express, découvrez les prochaines étapes !";
      expressDetails = language === 'en' ? "Your profile matches the criteria of the Express Entry program. We recommend that you continue your application with an immigration consultant." : "Votre profil correspond aux critères du programme Entrée Express. Nous vous recommandons de poursuivre votre démarche avec un conseiller en immigration.";
    } else if (expressPercentage >= 0.5) {
      expressLevel = "medium";
      expressMessage = language === 'en' ? "⚠️ Your profile may be suitable for Express Entry, contact us for an in-depth analysis." : "⚠️ Votre profil pourrait convenir à Entrée Express, contactez-nous pour une analyse approfondie.";
      expressDetails = language === 'en' ? "You have potential eligibility for the Express Entry program, but certain aspects of your profile may require special attention." : "Vous avez un potentiel d'éligibilité au programme Entrée Express, mais certains aspects de votre profil pourraient nécessiter une attention particulière.";
    } else {
      expressLevel = "low";
      expressMessage = language === 'en' ? "❌ You currently do not meet the Express Entry criteria, but other options may be available." : "❌ Vous ne remplissez pas actuellement les critères d'Entrée Express, mais d'autres options peuvent être envisageables.";
      expressDetails = language === 'en' ? "Your current profile does not sufficiently match Express Entry criteria. A consultant could suggest other programs for you." : "Votre profil actuel ne correspond pas suffisamment aux critères d'Entrée Express. Un conseiller pourrait vous suggérer d'autres programmes.";
    }
    
    results.push({
      program: language === 'en' ? "Express Entry" : "Entrée Express",
      eligible: expressLevel === "high",
      message: expressMessage,
      details: expressDetails,
      level: expressLevel
    });
    
    // Évaluation pour le PSTQ (Programme de sélection des travailleurs qualifiés - Québec)
    let pstqPoints = 0;
    let pstqMaxPoints = 100;
    
    // Points pour l'âge
    switch(formData.age) {
      case "18-29":
        pstqPoints += 20;
        break;
      case "30-39":
        pstqPoints += 16;
        break;
      case "40-44":
        pstqPoints += 8;
        break;
      case "45+":
        pstqPoints += 0;
        break;
    }
    
    // Points pour l'éducation
    switch(formData.education) {
      case "none":
        pstqPoints += 0;
        break;
      case "highschool":
        pstqPoints += 4;
        break;
      case "postsecondary":
        pstqPoints += 8;
        break;
      case "bachelor":
        pstqPoints += 14;
        break;
      case "master":
        pstqPoints += 18;
        break;
    }
    
    // Points pour l'expérience professionnelle
    switch(formData.experience) {
      case "none":
        pstqPoints += 0;
        break;
      case "less1":
        pstqPoints += 4;
        break;
      case "1-3":
        pstqPoints += 8;
        break;
      case "4-5":
        pstqPoints += 12;
        break;
      case "more5":
        pstqPoints += 16;
        break;
    }
    
    // Points pour les compétences linguistiques (Français priorisé pour le Québec)
    switch(formData.frenchLevel) {
      case "fluent":
        pstqPoints += 20;
        break;
      case "intermediate":
        pstqPoints += 10;
        break;
      case "none":
        pstqPoints += 0;
        break;
    }
    
    switch(formData.englishLevel) {
      case "fluent":
        pstqPoints += 10;
        break;
      case "intermediate":
        pstqPoints += 5;
        break;
      case "none":
        pstqPoints += 0;
        break;
    }
    
    // Bonus pour offre d'emploi
    if (formData.jobOffer === "yes") pstqPoints += 16;
    
    // Bonus spécifiques pour les volets du PSTQ
    let pstqVolet = "";
    let pstqVoletBonus = 0;
    
    switch(formData.professionType) {
      case "highly-skilled":
        pstqVolet = language === 'en' ? "Stream 1 (Highly skilled professions)" : "Volet 1 (Professions hautement qualifiées)";
        if (formData.frenchLevel === "fluent") pstqVoletBonus += 10;
        if (formData.education === "master" || formData.education === "bachelor") pstqVoletBonus += 10;
        break;
      case "intermediate":
        pstqVolet = language === 'en' ? "Stream 2 (Intermediate and manual professions)" : "Volet 2 (Professions intermédiaires et manuelles)";
        if (formData.experience === "4-5" || formData.experience === "more5") pstqVoletBonus += 15;
        break;
      case "regulated":
        pstqVolet = language === 'en' ? "Stream 3 (Regulated professions)" : "Volet 3 (Professions réglementées)";
        if (formData.licenseInQuebec === "yes") pstqVoletBonus += 20;
        break;
      case "exceptional":
        pstqVolet = language === 'en' ? "Stream 4 (Exceptional talents)" : "Volet 4 (Talents d'exception)";
        if (formData.exceptionalTalent === "yes") pstqVoletBonus += 25;
        break;
      default:
        pstqVolet = language === 'en' ? "Not determined" : "Non déterminé";
        break;
    }
    
    pstqPoints += pstqVoletBonus;
    
    // Déterminer l'éligibilité pour le PSTQ
    let pstqLevel: "high" | "medium" | "low" = "low";
    let pstqMessage = "";
    let pstqDetails = "";
    
    const pstqPercentage = pstqPoints / pstqMaxPoints;
    if (pstqPercentage >= 0.7) {
      pstqLevel = "high";
      pstqMessage = language === 'en' 
        ? `✅ You appear eligible for the QSWP ${pstqVolet}, discover the next steps!` 
        : `✅ Vous semblez éligible au PSTQ ${pstqVolet}, découvrez les prochaines étapes !`;
      pstqDetails = language === 'en'
        ? `Your profile matches the criteria of the Quebec Skilled Worker Program for the ${pstqVolet}. We recommend that you continue your application with a consultant.`
        : `Votre profil correspond aux critères du Programme de sélection des travailleurs qualifiés du Québec pour le ${pstqVolet}. Nous vous recommandons de poursuivre votre démarche avec un conseiller.`;
    } else if (pstqPercentage >= 0.5) {
      pstqLevel = "medium";
      pstqMessage = language === 'en'
        ? `⚠️ Your profile may be suitable for the QSWP ${pstqVolet}, contact us for an in-depth analysis.`
        : `⚠️ Votre profil pourrait convenir au PSTQ ${pstqVolet}, contactez-nous pour une analyse approfondie.`;
      pstqDetails = language === 'en'
        ? `You have potential eligibility for the QSWP for the ${pstqVolet}, but certain aspects of your profile may require special attention.`
        : `Vous avez un potentiel d'éligibilité au PSTQ pour le ${pstqVolet}, mais certains aspects de votre profil pourraient nécessiter une attention particulière.`;
    } else {
      pstqLevel = "low";
      pstqMessage = language === 'en'
        ? "❌ You currently do not meet the QSWP criteria, but other options may be available."
        : "❌ Vous ne remplissez pas actuellement les critères du PSTQ, mais d'autres options peuvent être envisageables.";
      pstqDetails = language === 'en'
        ? "Your current profile does not sufficiently match QSWP criteria. A consultant could suggest other programs for you."
        : "Votre profil actuel ne correspond pas suffisamment aux critères du PSTQ. Un conseiller pourrait vous suggérer d'autres programmes.";
    }
    
    results.push({
      program: language === 'en' 
        ? `Quebec Skilled Worker Program (QSWP) - ${pstqVolet}`
        : `Programme de sélection des travailleurs qualifiés (PSTQ) - ${pstqVolet}`,
      eligible: pstqLevel === "high",
      message: pstqMessage,
      details: pstqDetails,
      level: pstqLevel
    });
    
    // Évaluation pour le PEQ (Programme de l'Expérience Québécoise)
    const isPeqEligible = formData.frenchLevel === "fluent" || formData.frenchLevel === "intermediate";
    const peqLevel: "high" | "medium" | "low" = isPeqEligible ? 
      (formData.experience !== "none" ? "high" : "medium") : "low";
    
    let peqMessage = "";
    let peqDetails = "";
    
    if (peqLevel === "high") {
      peqMessage = language === 'en'
        ? "✅ You appear eligible for the PEQ, discover the next steps!"
        : "✅ Vous semblez éligible au PEQ, découvrez les prochaines étapes !";
      peqDetails = language === 'en'
        ? "Your profile seems to match the criteria of the Quebec Experience Program. Your French language skills and professional experience are assets."
        : "Votre profil semble correspondre aux critères du Programme de l'Expérience Québécoise. Vos compétences en français et votre expérience professionnelle sont des atouts.";
    } else if (peqLevel === "medium") {
      peqMessage = language === 'en'
        ? "⚠️ Your profile may be suitable for the PEQ with some adjustments."
        : "⚠️ Votre profil pourrait convenir au PEQ avec quelques ajustements.";
      peqDetails = language === 'en'
        ? "You may be eligible for the PEQ, but you may be lacking relevant professional experience."
        : "Vous pourriez être éligible au PEQ, mais il vous manque peut-être de l'expérience professionnelle pertinente.";
    } else {
      peqMessage = language === 'en'
        ? "❌ You currently do not meet the PEQ criteria."
        : "❌ Vous ne remplissez pas actuellement les critères du PEQ.";
      peqDetails = language === 'en'
        ? "The PEQ generally requires a good command of French. Without this skill, this program is not recommended."
        : "Le PEQ exige généralement une bonne maîtrise du français. Sans cette compétence, ce programme n'est pas recommandé.";
    }
    
    results.push({
      program: language === 'en' ? "Quebec Experience Program (PEQ)" : "Programme de l'Expérience Québécoise (PEQ)",
      eligible: peqLevel === "high",
      message: peqMessage,
      details: peqDetails,
      level: peqLevel
    });
    
    // Évaluation pour le regroupement familial
    const hasFamilyInCanada = formData.familyTies === "yes";
    const projectIsFamily = formData.canadaProject === "family";
    
    const familyLevel: "high" | "medium" | "low" = hasFamilyInCanada && projectIsFamily ? "high" : 
                                                   hasFamilyInCanada ? "medium" : "low";
    
    let familyMessage = "";
    let familyDetails = "";
    
    if (familyLevel === "high") {
      familyMessage = language === 'en'
        ? "✅ You appear eligible for Family Reunification, discover the next steps!"
        : "✅ Vous semblez éligible au Regroupement Familial, découvrez les prochaines étapes !";
      familyDetails = language === 'en'
        ? "With direct family in Canada and your project to join them, the Family Reunification program seems perfectly suited to your situation."
        : "Avec de la famille directe au Canada et votre projet de les rejoindre, le programme de Regroupement Familial semble parfaitement adapté à votre situation.";
    } else if (familyLevel === "medium") {
      familyMessage = language === 'en'
        ? "⚠️ You may be eligible for Family Reunification depending on the exact family ties."
        : "⚠️ Vous pourriez être éligible au Regroupement Familial selon les liens familiaux exacts.";
      familyDetails = language === 'en'
        ? "Although you have family in Canada, eligibility for Family Reunification depends on the type of relationship and the residence status of your family in Canada."
        : "Bien que vous ayez de la famille au Canada, l'éligibilité au Regroupement Familial dépend du type de relation et du statut de résidence de votre famille au Canada.";
    } else {
      familyMessage = language === 'en'
        ? "❌ Without family ties in Canada, you are not eligible for Family Reunification."
        : "❌ Sans liens familiaux au Canada, vous n'êtes pas éligible au Regroupement Familial.";
      familyDetails = language === 'en'
        ? "This program is exclusively for people who have close family members already established in Canada."
        : "Ce programme est exclusivement destiné aux personnes ayant des membres de leur famille proche déjà établis au Canada.";
    }
    
    results.push({
      program: language === 'en' ? "Family Reunification" : "Regroupement Familial",
      eligible: familyLevel === "high",
      message: familyMessage,
      details: familyDetails,
      level: familyLevel
    });
    
    return results;
  };

  const getStatusBadgeClass = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return language === 'en' ? "Strong chance of eligibility" : "Forte chance d'éligibilité";
      case "medium":
        return language === 'en' ? "Possible eligibility" : "Éligibilité possible";
      case "low":
        return language === 'en' ? "Low chance of eligibility" : "Faible chance d'éligibilité";
      default:
        return language === 'en' ? "Undetermined" : "Indéterminé";
    }
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
                  ? t('profile')
                  : step === 2
                  ? t('project')
                  : step === 3
                  ? t('contact')
                  : t('results')}
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
            <h2 className="text-2xl font-semibold mb-6">{t('personal_information')}</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('age_select')}</h3>
              <RadioGroup value={formData.age} onValueChange={(value) => handleSingleOptionChange("age", value)} className="grid gap-3">
                {getAgeOptions().map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('education_level')}</h3>
              <RadioGroup value={formData.education} onValueChange={(value) => handleSingleOptionChange("education", value)} className="grid gap-3">
                {getEducationOptions().map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('professional_experience')}</h3>
              <RadioGroup value={formData.experience} onValueChange={(value) => handleSingleOptionChange("experience", value)} className="grid gap-3">
                {getExperienceOptions().map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium">{t('language_skills')}</h3>
              
              <div className="bg-blue-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-blue-800">{t('french')}</h4>
                <RadioGroup value={formData.frenchLevel} onValueChange={(value) => handleSingleOptionChange("frenchLevel", value)} className="grid gap-3">
                  {getFrenchLevelOptions().map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-red-800">{t('english')}</h4>
                <RadioGroup value={formData.englishLevel} onValueChange={(value) => handleSingleOptionChange("englishLevel", value)} className="grid gap-3">
                  {getEnglishLevelOptions().map((option) => (
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
            <h2 className="text-2xl font-semibold mb-6">{t('immigration_project')}</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('canada_project')}</h3>
              <RadioGroup value={formData.canadaProject} onValueChange={(value) => handleSingleOptionChange("canadaProject", value)} className="grid gap-3">
                {getProjectOptions().map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem id={option.id} value={option.value} />
                    <Label htmlFor={option.id}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            {formData.canadaProject === "work" && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{t('profession_type')}</h3>
                <RadioGroup value={formData.professionType} onValueChange={(value) => handleSingleOptionChange("professionType", value)} className="grid gap-3">
                  {getProfessionTypeOptions().map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem id={option.id} value={option.value} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {formData.professionType === "regulated" && (
                  <div className="mt-4 ml-6 p-4 border border-dashed rounded-lg border-gray-300 bg-gray-50">
                    <h4 className="font-medium mb-2">{t('license_quebec')}</h4>
                    <RadioGroup value={formData.licenseInQuebec} onValueChange={(value) => handleSingleOptionChange("licenseInQuebec", value)} className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="license-yes" value="yes" />
                        <Label htmlFor="license-yes">{t('yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="license-no" value="no" />
                        <Label htmlFor="license-no">{t('no')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
                
                {formData.professionType === "exceptional" && (
                  <div className="mt-4 ml-6 p-4 border border-dashed rounded-lg border-gray-300 bg-gray-50">
                    <h4 className="font-medium mb-2">{t('exceptional_recognition')}</h4>
                    <RadioGroup value={formData.exceptionalTalent} onValueChange={(value) => handleSingleOptionChange("exceptionalTalent", value)} className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="exceptional-yes" value="yes" />
                        <Label htmlFor="exceptional-yes">{t('yes')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="exceptional-no" value="no" />
                        <Label htmlFor="exceptional-no">{t('no')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
            )}
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('job_offer')}</h3>
              <RadioGroup value={formData.jobOffer} onValueChange={(value) => handleSingleOptionChange("jobOffer", value)} className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="job-yes" value="yes" />
                  <Label htmlFor="job-yes">{t('yes')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="job-no" value="no" />
                  <Label htmlFor="job-no">{t('no')}</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t('family_ties')}</h3>
              <RadioGroup value={formData.familyTies} onValueChange={(value) => handleSingleOptionChange("familyTies", value)} className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-yes" value="yes" />
                  <Label htmlFor="family-yes">{t('yes')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="family-no" value="no" />
                  <Label htmlFor="family-no">{t('no')}</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">{t('contact_information')}</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-base font-medium">{t('full_name')}</Label>
                <Input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleTextChange("name", e.target.value)}
                  className="mt-1"
                  placeholder={t('enter_name')}
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-base font-medium">{t('email')}</Label>
                <Input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleTextChange("email", e.target.value)}
                  className="mt-1"
                  placeholder={t('enter_email')}
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-base font-medium">{t('phone')}</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleTextChange("phone", e.target.value)}
                  className="mt-1"
                  placeholder={t('enter_phone')}
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">{t('privacy_notice')}</p>
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" required />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="privacy" className="text-sm font-normal">
                    {t('agree_privacy')}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-2">{t('eligibility_results_title')}</h2>
              <p className="text-gray-600">{t('eligibility_results_description')}</p>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h3 className="font-bold text-xl mb-2">{t('best_program')}</h3>
              <p className="font-medium text-lg text-blue-800">{bestProgram}</p>
            </div>
            
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold">{result.program}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadgeClass(result.level)}`}>
                      {getStatusText(result.level)}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-medium mb-2">{result.message}</p>
                    <p className="text-gray-600 text-sm">{result.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-3">{t('what_next')}</h3>
              <p className="mb-4">{t('next_steps')}</p>
              <Button
                type="button"
                className="bg-primary hover:bg-primary/80 text-white py-2 px-4"
                onClick={() => window.location.href = '/contact'}
              >
                {t('contact_consultant')}
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex justify-between pt-6">
          {currentStep > 1 && currentStep < 4 ? (
            <Button
              type="button"
              onClick={handlePrevStep}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              {t('previous')}
            </Button>
          ) : currentStep === 4 ? (
            <Button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              {t('restart_form')}
            </Button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 3 ? (
            <Button
              type="button"
              onClick={handleNextStep}
              className="bg-primary hover:bg-primary/80 text-white"
            >
              {t('next')}
            </Button>
          ) : currentStep === 3 ? (
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white"
            >
              {t('submit')}
            </Button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default EligibilityForm;
