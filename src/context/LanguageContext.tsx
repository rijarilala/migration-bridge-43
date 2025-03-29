
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a type for the language context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  // Translation object
  const translations: Record<string, Record<string, string>> = {
    en: {
      // Header/Navigation
      home: 'Home',
      services: 'Services',
      immigration: 'Immigration',
      formation: 'Training',
      coaching: 'Coaching',
      orientation: 'Guidance',
      recrutement: 'Recruitment',
      blog: 'Blog',
      contact: 'Contact',
      about: 'About Us',
      faq: 'FAQ',
      eligibility: 'Eligibility Check',
      
      // Hero Section
      hero_title: 'Your New Life in Canada Starts Here',
      hero_subtitle: 'We simplify the immigration process and guide you every step of the way.',
      get_started: 'Get Started',
      learn_more: 'Learn More',
      free_assessment: 'Free Assessment',
      
      // Services Section
      our_services: 'Our Services',
      services_subtitle: 'Comprehensive Support for Your Immigration Journey',
      view_details: 'View Details',
      
      // Immigration Service
      immigration_title: 'Immigration Services',
      immigration_description: 'Expert guidance for all Canadian immigration programs.',
      
      // Formation Service
      formation_title: 'Professional Training',
      formation_description: 'Prepare for the Canadian job market with specialized courses.',
      
      // Coaching Service
      coaching_title: 'Career Coaching',
      coaching_description: 'Personalized coaching to help you succeed in Canada.',
      
      // Orientation Service
      orientation_title: 'Settlement Guidance',
      orientation_description: 'Support for your integration into Canadian society.',
      
      // Recrutement Service
      recrutement_title: 'Recruitment Solutions',
      recrutement_description: 'Connecting employers with qualified international talent.',
      
      // Features Section
      why_choose_us: 'Why Choose Us',
      features_subtitle: 'Benefits of Working with Our Team',
      
      // Feature Items
      feature_expertise_title: 'Expert Knowledge',
      feature_expertise_description: 'Our consultants are licensed professionals with extensive experience.',
      
      feature_personalized_title: 'Personalized Approach',
      feature_personalized_description: 'Solutions tailored to your unique situation and goals.',
      
      feature_support_title: '24/7 Support',
      feature_support_description: 'Assistance available whenever you need it, at every step.',
      
      feature_success_title: 'Proven Success',
      feature_success_description: 'Thousands of successful cases and satisfied clients.',
      
      // Stats Section
      immigration_numbers: 'Immigration by the Numbers',
      numbers_subtitle: 'Key statistics about Canadian immigration',
      
      immigrants_accepted: 'Immigrants accepted annually',
      immigration_programs: 'Immigration programs',
      success_rate_with_support: 'Success rate with professional support',
      processing_time: 'Months average processing time',
      
      // Testimonials Section
      client_testimonials: 'Client Testimonials',
      testimonials_subtitle: 'What Our Clients Say About Us',
      
      // CTA Section
      ready_to_start: 'Ready to Start Your Canadian Journey?',
      cta_subtitle: 'Contact us today for a personalized consultation.',
      contact_us: 'Contact Us',
      
      // Footer
      quick_links: 'Quick Links',
      services_footer: 'Services',
      legal: 'Legal',
      privacy_policy: 'Privacy Policy',
      terms_of_service: 'Terms of Service',
      sitemap: 'Sitemap',
      
      // Eligibility page
      evaluate_eligibility: 'Evaluate Your Immigration Eligibility',
      eligibility_description: 'Answer a few questions to discover the Canadian immigration programs best suited to your profile.',
      
      // New PSTQ box
      new_pstq: 'New Quebec Skilled Worker Program (QSWP)',
      pstq_description: 'Our assessment tool now includes the updated Quebec Skilled Worker Program with its 4 streams:',
      pstq_item1: 'Stream 1: Highly skilled professions',
      pstq_item2: 'Stream 2: Intermediate and manual professions',
      pstq_item3: 'Stream 3: Regulated professions and Stream 4: Exceptional talents',
      pstq_features: 'Key features:',
      pstq_feature1: 'Higher points for French fluency',
      pstq_feature2: 'Streamlined process for certain professions',
      pstq_feature3: 'Additional points for Quebec education',
      pstq_feature4: 'Special path for exceptional talent',
      
      // Why use our evaluator box
      why_use_evaluator: 'Why Use Our Eligibility Evaluator?',
      
      // Benefits
      complete_evaluation: 'Complete Evaluation',
      evaluation_description: 'Assessment of your profile for multiple immigration programs at once.',
      
      personalized_advice: 'Personalized Results',
      advice_description: 'Get results tailored specifically to your unique situation and qualifications.',
      
      instant_results: 'Instant Results',
      results_description: 'Receive your eligibility report immediately after completing the form.',
      
      detailed_document: 'Next Steps Guide',
      document_description: 'Clear recommendations on what to do next based on your results.',
      
      // Form labels
      personal_information: 'Personal Information',
      immigration_project: 'Your Immigration Project',
      contact_information: 'Contact Information',
      
      // Form steps
      profile: 'Profile',
      project: 'Project',
      contact: 'Contact',
      results: 'Results',
      
      // Form fields
      age_select: 'Your Age',
      age_18_29: '18-29 years',
      age_30_39: '30-39 years',
      age_40_44: '40-44 years',
      age_45_plus: '45 years or older',
      
      education_level: 'Education Level',
      edu_none: 'No formal education',
      edu_highschool: 'High school diploma',
      edu_postsecondary: 'Post-secondary diploma (non-university)',
      edu_bachelor: 'Bachelor\'s degree',
      edu_master: 'Master\'s degree or higher',
      
      professional_experience: 'Professional Experience',
      exp_none: 'No experience',
      exp_less1: 'Less than 1 year',
      exp_1_3: '1-3 years',
      exp_4_5: '4-5 years',
      exp_more5: 'More than 5 years',
      
      language_skills: 'Language Skills',
      french: 'French',
      english: 'English',
      
      french_none: 'No knowledge',
      french_intermediate: 'Intermediate',
      french_fluent: 'Fluent',
      
      english_none: 'No knowledge',
      english_intermediate: 'Intermediate',
      english_fluent: 'Fluent',
      
      canada_project: 'Your Project in Canada',
      project_study: 'Study',
      project_work: 'Work',
      project_settle: 'Settle permanently',
      project_family: 'Join family',
      
      profession_type: 'Type of Profession',
      prof_highly_skilled: 'Highly skilled profession',
      prof_intermediate: 'Intermediate or manual profession',
      prof_regulated: 'Regulated profession (requires license)',
      prof_exceptional: 'Exceptional talent (arts, sports, science)',
      prof_unknown: 'I don\'t know / Other',
      
      license_quebec: 'Do you have a license to practice in Quebec?',
      exceptional_recognition: 'Do you have international recognition in your field?',
      yes: 'Yes',
      no: 'No',
      
      job_offer: 'Do you have a job offer in Canada?',
      family_ties: 'Do you have family members in Canada?',
      
      full_name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      
      enter_name: 'Enter your full name',
      enter_email: 'Enter your email address',
      enter_phone: 'Enter your phone number',
      
      privacy_notice: 'We value your privacy. Your information will be used only to provide you with relevant immigration services and information.',
      agree_privacy: 'I agree to receive information about immigration programs and services.',
      
      previous: 'Previous',
      next: 'Next',
      submit: 'Submit',
      restart_form: 'Start Over',
      
      // Form validation messages
      select_age_error: 'Please select your age range',
      select_education_error: 'Please select your education level',
      select_experience_error: 'Please select your professional experience',
      select_french_error: 'Please indicate your French language level',
      select_english_error: 'Please indicate your English language level',
      select_profession_error: 'Please select your profession type',
      select_job_offer_error: 'Please indicate if you have a job offer',
      select_family_ties_error: 'Please indicate if you have family ties in Canada',
      select_project_error: 'Please select your project in Canada',
      fill_contact_error: 'Please fill in all contact information fields',
      valid_email_error: 'Please enter a valid email address',
      
      // Results page
      eligibility_results_title: 'Your Immigration Eligibility Results',
      eligibility_results_description: 'Based on the information provided, here are the Canadian immigration programs you may be eligible for:',
      
      best_program: 'Best Program Match',
      no_optimal_program: 'No optimal program identified. Contact a consultant for personalized advice.',
      
      what_next: 'What\'s Next?',
      next_steps: 'Contact one of our immigration consultants for a detailed assessment and personalized guidance based on your results.',
      contact_consultant: 'Contact a Consultant',
      
      form_reset_success: 'Form reset successfully. You can start a new evaluation.',
      
      about_title: 'About Us',
      about_subtitle: 'Guiding Your Immigration Journey with Expertise and Care',
      
      // Contact page
      contact_title: 'Contact Us',
      contact_subtitle: 'Get in touch with our immigration experts',
      send_message: 'Send Message',
      office_locations: 'Our Offices',
      contact_form_title: 'Send us a message',
      contact_form_subtitle: 'Fill out the form below and we\'ll get back to you shortly',
      message: 'Your Message',
      subject: 'Subject',
      enter_subject: 'Enter the subject of your message',
      enter_message: 'Enter your message here',
      sending: 'Sending...',
      office_montreal: 'Montreal Office',
      office_quebec: 'Quebec City Office',
      office_toronto: 'Toronto Office',
      
      // Footer links and copyright
      copyright: 'All rights reserved.',
      
      // Additional translations for Footer
      resources: 'Resources',
      about_description: 'Professional immigration services to guide you through your Canadian journey',
      all_rights_reserved: 'All rights reserved.',
      privacy_short: 'Privacy',
      terms_short: 'Terms',
      sitemap_short: 'Sitemap',
      our_location: 'Our Location'
    },
    fr: {
      // En-tête/Navigation
      home: 'Accueil',
      services: 'Services',
      immigration: 'Immigration',
      formation: 'Formation',
      coaching: 'Coaching',
      orientation: 'Orientation',
      recrutement: 'Recrutement',
      blog: 'Blog',
      contact: 'Contact',
      about: 'À Propos',
      faq: 'FAQ',
      eligibility: 'Test d\'Éligibilité',
      
      // Section Héro
      hero_title: 'Votre nouvelle vie au Canada commence ici',
      hero_subtitle: 'Nous simplifions le processus d\'immigration et vous guidons à chaque étape.',
      get_started: 'Commencer',
      learn_more: 'En savoir plus',
      free_assessment: 'Évaluation gratuite',
      
      // Section Services
      our_services: 'Nos Services',
      services_subtitle: 'Un accompagnement complet pour votre parcours d\'immigration',
      view_details: 'Voir détails',
      
      // Service Immigration
      immigration_title: 'Services d\'Immigration',
      immigration_description: 'Accompagnement expert pour tous les programmes d\'immigration canadiens.',
      
      // Service Formation
      formation_title: 'Formation Professionnelle',
      formation_description: 'Préparez-vous au marché du travail canadien avec des cours spécialisés.',
      
      // Service Coaching
      coaching_title: 'Coaching de Carrière',
      coaching_description: 'Coaching personnalisé pour vous aider à réussir au Canada.',
      
      // Service Orientation
      orientation_title: 'Accompagnement à l\'Intégration',
      orientation_description: 'Soutien pour votre intégration dans la société canadienne.',
      
      // Service Recrutement
      recrutement_title: 'Solutions de Recrutement',
      recrutement_description: 'Mise en relation des employeurs avec des talents internationaux qualifiés.',
      
      // Section Caractéristiques
      why_choose_us: 'Pourquoi Nous Choisir',
      features_subtitle: 'Les avantages de travailler avec notre équipe',
      
      // Éléments de caractéristiques
      feature_expertise_title: 'Expertise Professionnelle',
      feature_expertise_description: 'Nos consultants sont des professionnels agréés avec une vaste expérience.',
      
      feature_personalized_title: 'Approche Personnalisée',
      feature_personalized_description: 'Solutions adaptées à votre situation unique et à vos objectifs.',
      
      feature_support_title: 'Support 24/7',
      feature_support_description: 'Assistance disponible à tout moment, à chaque étape.',
      
      feature_success_title: 'Succès Prouvé',
      feature_success_description: 'Des milliers de cas réussis et de clients satisfaits.',
      
      // Section Statistiques
      immigration_numbers: 'L\'Immigration en Chiffres',
      numbers_subtitle: 'Statistiques clés sur l\'immigration canadienne',
      
      immigrants_accepted: 'Immigrants acceptés annuellement',
      immigration_programs: 'Programmes d\'immigration',
      success_rate_with_support: 'Taux de réussite avec soutien professionnel',
      processing_time: 'Mois de traitement en moyenne',
      
      // Section Témoignages
      client_testimonials: 'Témoignages de Clients',
      testimonials_subtitle: 'Ce que nos clients disent de nous',
      
      // Section CTA
      ready_to_start: 'Prêt à commencer votre parcours canadien ?',
      cta_subtitle: 'Contactez-nous dès aujourd\'hui pour une consultation personnalisée.',
      contact_us: 'Contactez-nous',
      
      // Pied de page
      quick_links: 'Liens Rapides',
      services_footer: 'Services',
      legal: 'Légal',
      privacy_policy: 'Politique de Confidentialité',
      terms_of_service: 'Conditions d\'Utilisation',
      sitemap: 'Plan du Site',
      
      // Page d'éligibilité
      evaluate_eligibility: 'Évaluez votre éligibilité à l\'immigration',
      eligibility_description: 'Répondez à quelques questions pour découvrir les programmes d\'immigration canadiens les mieux adaptés à votre profil.',
      
      // Nouvelle boîte PSTQ
      new_pstq: 'Nouveau Programme de sélection des travailleurs qualifiés (PSTQ)',
      pstq_description: 'Notre outil d\'évaluation inclut désormais le Programme de sélection des travailleurs qualifiés du Québec mis à jour avec ses 4 volets :',
      pstq_item1: 'Volet 1 : Professions hautement qualifiées',
      pstq_item2: 'Volet 2 : Professions intermédiaires et manuelles',
      pstq_item3: 'Volet 3 : Professions réglementées et Volet 4 : Talents d\'exception',
      pstq_features: 'Caractéristiques clés :',
      pstq_feature1: 'Plus de points pour la maîtrise du français',
      pstq_feature2: 'Processus simplifié pour certaines professions',
      pstq_feature3: 'Points supplémentaires pour les études au Québec',
      pstq_feature4: 'Parcours spécial pour les talents exceptionnels',
      
      // Pourquoi utiliser notre évaluateur
      why_use_evaluator: 'Pourquoi utiliser notre évaluateur d\'éligibilité ?',
      
      // Avantages
      complete_evaluation: 'Évaluation complète',
      evaluation_description: 'Évaluation de votre profil pour plusieurs programmes d\'immigration à la fois.',
      
      personalized_advice: 'Résultats personnalisés',
      advice_description: 'Obtenez des résultats adaptés spécifiquement à votre situation et à vos qualifications.',
      
      instant_results: 'Résultats instantanés',
      results_description: 'Recevez votre rapport d\'éligibilité immédiatement après avoir rempli le formulaire.',
      
      detailed_document: 'Guide des prochaines étapes',
      document_description: 'Recommandations claires sur les démarches à suivre en fonction de vos résultats.',
      
      // Libellés du formulaire
      personal_information: 'Informations personnelles',
      immigration_project: 'Votre projet d\'immigration',
      contact_information: 'Coordonnées',
      
      // Étapes du formulaire
      profile: 'Profil',
      project: 'Projet',
      contact: 'Contact',
      results: 'Résultats',
      
      // Champs de formulaire
      age_select: 'Votre âge',
      age_18_29: '18-29 ans',
      age_30_39: '30-39 ans',
      age_40_44: '40-44 ans',
      age_45_plus: '45 ans ou plus',
      
      education_level: 'Niveau d\'éducation',
      edu_none: 'Aucune éducation formelle',
      edu_highschool: 'Diplôme d\'études secondaires',
      edu_postsecondary: 'Diplôme post-secondaire (non universitaire)',
      edu_bachelor: 'Diplôme de premier cycle (baccalauréat)',
      edu_master: 'Maîtrise ou supérieur',
      
      professional_experience: 'Expérience professionnelle',
      exp_none: 'Aucune expérience',
      exp_less1: 'Moins d\'un an',
      exp_1_3: '1-3 ans',
      exp_4_5: '4-5 ans',
      exp_more5: 'Plus de 5 ans',
      
      language_skills: 'Compétences linguistiques',
      french: 'Français',
      english: 'Anglais',
      
      french_none: 'Aucune connaissance',
      french_intermediate: 'Intermédiaire',
      french_fluent: 'Courant',
      
      english_none: 'Aucune connaissance',
      english_intermediate: 'Intermédiaire',
      english_fluent: 'Courant',
      
      canada_project: 'Votre projet au Canada',
      project_study: 'Études',
      project_work: 'Travail',
      project_settle: 'S\'établir de façon permanente',
      project_family: 'Rejoindre la famille',
      
      profession_type: 'Type de profession',
      prof_highly_skilled: 'Profession hautement qualifiée',
      prof_intermediate: 'Profession intermédiaire ou manuelle',
      prof_regulated: 'Profession réglementée (nécessite une licence)',
      prof_exceptional: 'Talent d\'exception (arts, sports, science)',
      prof_unknown: 'Je ne sais pas / Autre',
      
      license_quebec: 'Avez-vous un permis d\'exercice au Québec ?',
      exceptional_recognition: 'Bénéficiez-vous d\'une reconnaissance internationale dans votre domaine ?',
      yes: 'Oui',
      no: 'Non',
      
      job_offer: 'Avez-vous une offre d\'emploi au Canada ?',
      family_ties: 'Avez-vous des membres de votre famille au Canada ?',
      
      full_name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      
      enter_name: 'Entrez votre nom complet',
      enter_email: 'Entrez votre adresse e-mail',
      enter_phone: 'Entrez votre numéro de téléphone',
      
      privacy_notice: 'Nous respectons votre vie privée. Vos informations seront utilisées uniquement pour vous fournir des services et des informations pertinents sur l\'immigration.',
      agree_privacy: 'J\'accepte de recevoir des informations sur les programmes et services d\'immigration.',
      
      previous: 'Précédent',
      next: 'Suivant',
      submit: 'Soumettre',
      restart_form: 'Recommencer',
      
      // Messages de validation de formulaire
      select_age_error: 'Veuillez sélectionner votre tranche d\'âge',
      select_education_error: 'Veuillez sélectionner votre niveau d\'éducation',
      select_experience_error: 'Veuillez sélectionner votre expérience professionnelle',
      select_french_error: 'Veuillez indiquer votre niveau de français',
      select_english_error: 'Veuillez indiquer votre niveau d\'anglais',
      select_profession_error: 'Veuillez sélectionner votre type de profession',
      select_job_offer_error: 'Veuillez indiquer si vous avez une offre d\'emploi',
      select_family_ties_error: 'Veuillez indiquer si vous avez des liens familiaux au Canada',
      select_project_error: 'Veuillez sélectionner votre projet au Canada',
      fill_contact_error: 'Veuillez remplir tous les champs de contact',
      valid_email_error: 'Veuillez entrer une adresse e-mail valide',
      
      // Page de résultats
      eligibility_results_title: 'Vos résultats d\'éligibilité à l\'immigration',
      eligibility_results_description: 'Selon les informations fournies, voici les programmes d\'immigration canadiens auxquels vous pourriez être éligible :',
      
      best_program: 'Meilleur programme correspondant',
      no_optimal_program: 'Aucun programme optimal identifié. Contactez un consultant pour des conseils personnalisés.',
      
      what_next: 'Et maintenant ?',
      next_steps: 'Contactez l\'un de nos consultants en immigration pour une évaluation détaillée et des conseils personnalisés basés sur vos résultats.',
      contact_consultant: 'Contacter un consultant',
      
      form_reset_success: 'Formulaire réinitialisé avec succès. Vous pouvez commencer une nouvelle évaluation.',
      
      about_title: 'À Propos de Nous',
      about_subtitle: 'Guider votre parcours d\'immigration avec expertise et attention',
      
      // Page de contact
      contact_title: 'Contactez-Nous',
      contact_subtitle: 'Entrez en contact avec nos experts en immigration',
      send_message: 'Envoyer le message',
      office_locations: 'Nos bureaux',
      contact_form_title: 'Envoyez-nous un message',
      contact_form_subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais',
      message: 'Votre message',
      subject: 'Sujet',
      enter_subject: 'Entrez le sujet de votre message',
      enter_message: 'Entrez votre message ici',
      sending: 'Envoi en cours...',
      office_montreal: 'Bureau de Montréal',
      office_quebec: 'Bureau de Québec',
      office_toronto: 'Bureau de Toronto',
      
      // Liens de pied de page et copyright
      copyright: 'Tous droits réservés.',
      
      // Traductions supplémentaires pour le Footer
      resources: 'Ressources',
      about_description: 'Services professionnels d\'immigration pour vous guider tout au long de votre parcours canadien',
      all_rights_reserved: 'Tous droits réservés.',
      privacy_short: 'Confidentialité',
      terms_short: 'Conditions',
      sitemap_short: 'Plan du site',
      our_location: 'Notre emplacement'
    }
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[language][key]) {
      return key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
