
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dictionnaire des traductions
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'home': 'Accueil',
    'services': 'Services',
    'blog': 'Blog',
    'faq': 'FAQ',
    'about': 'À Propos',
    'contact': 'Contact',
    'eligibility': 'Test d\'Éligibilité',
    
    // Services
    'immigration': 'Immigration',
    'formation': 'Formation',
    'coaching': 'Coaching',
    'orientation': 'Orientation Professionnelle',
    'recrutement': 'Recrutement',
    
    // Footer
    'privacy': 'Politique de Confidentialité',
    'terms': 'Conditions d\'Utilisation',
    'sitemap': 'Plan du Site',
    
    // Common
    'language': 'Langue',
    
    // Hero Section
    'hero_title': 'Votre partenaire pour un nouveau départ',
    'hero_subtitle': 'Nous vous accompagnons dans toutes vos démarches d\'immigration, de formation et d\'intégration professionnelle.',
    'cta_eligibility': 'Tester mon éligibilité',
    'cta_services': 'Nos services',
    
    // Services Section
    'our_services': 'Nos Services',
    'services_description': 'Découvrez notre gamme complète de services conçus pour vous accompagner dans votre projet d\'immigration et de développement professionnel.',
    'immigration_description': 'Accompagnement personnalisé pour toutes vos démarches d\'immigration et d\'intégration dans votre pays d\'accueil.',
    'formation_description': 'Création de CV et lettres de motivation adaptés aux standards professionnels avec des modèles personnalisés.',
    'coaching_description': 'Préparation aux entretiens d\'embauche et développement des compétences professionnelles.',
    'orientation_description': 'Conseil personnalisé pour orienter votre carrière selon vos compétences et le marché du travail.',
    'recrutement_description': 'Accès aux offres d\'emploi et mise en relation avec des entreprises qui recrutent dans votre domaine.',
    
    // Feature Section
    'immigration_simplified': 'Immigration simplifiée',
    'immigration_subtitle': 'Notre équipe d\'experts vous guide à travers le processus d\'immigration complexe, en vous offrant un accompagnement sur mesure pour concrétiser votre projet de vie à l\'étranger.',
    'file_preparation': 'Préparation du dossier',
    'file_description': 'Nous vous guidons dans la préparation et la vérification de tous les documents nécessaires pour votre dossier d\'immigration.',
    'procedure_follow': 'Suivi des procédures',
    'procedure_description': 'Bénéficiez d\'un suivi personnalisé de votre dossier avec des mises à jour régulières sur l\'avancement de vos démarches.',
    'local_integration': 'Intégration locale',
    'local_description': 'Nous vous aidons à vous intégrer dans votre pays d\'accueil grâce à des conseils culturels et administratifs.',
    
    // Stats Section
    'our_impact': 'Notre impact en chiffres',
    'impact_description': 'Des résultats qui parlent d\'eux-mêmes. Découvrez comment nous avons aidé des milliers de personnes à réaliser leurs projets d\'immigration et d\'évolution professionnelle.',
    'clients_helped': 'Clients accompagnés',
    'satisfaction_rate': 'Taux de satisfaction',
    'accepted_files': 'Dossiers acceptés',
    'expertise_countries': 'Pays d\'expertise',
    
    // Testimonials Section
    'testimonials_title': 'Ce que nos clients disent',
    'testimonials_description': 'Découvrez les témoignages de personnes qui ont fait confiance à nos services et ont réussi leur projet.',
    'more_testimonials': 'Voir plus de témoignages',
    
    // Career Section
    'develop_career': 'Développez votre carrière',
    'career_subtitle': 'Nos services de coaching vous aident à révéler votre potentiel professionnel et à vous démarquer sur le marché du travail concurrentiel.',
    'interview_prep': 'Préparation aux entretiens',
    'interview_description': 'Des séances de simulation d\'entretien personnalisées pour vous aider à gagner en confiance et à maîtriser votre discours.',
    'cv_letter': 'CV et Lettre de motivation',
    'cv_description': 'Création de documents professionnels qui mettent en valeur vos compétences et attirent l\'attention des recruteurs.',
    'skills_assessment': 'Bilan de compétences',
    'skills_description': 'Évaluation approfondie de vos compétences et identification des opportunités de carrière adaptées à votre profil.',
    
    // CTA Section
    'ready_to_start': 'Prêt à démarrer votre projet?',
    'cta_description': 'Faites le premier pas vers votre nouvelle vie. Testez votre éligibilité ou contactez-nous pour un accompagnement personnalisé.',
    'contact_us': 'Contactez-nous',
    
    // About Page
    'about_migrapro': 'À Propos de MigraPro',
    'about_description': 'MigraPro accompagne les particuliers et les professionnels dans leurs projets d\'immigration, de formation et de développement de carrière depuis plus de 10 ans.',
    'our_mission': 'Notre Mission',
    'mission_text1': 'Faciliter l\'accès à de nouvelles opportunités professionnelles et personnelles pour nos clients, en leur fournissant un accompagnement personnalisé et des outils adaptés à leurs besoins spécifiques.',
    'mission_text2': 'Nous nous engageons à simplifier les démarches complexes liées à l\'immigration et au développement professionnel, en offrant un service humain, efficace et de qualité.',
    'our_vision': 'Notre Vision',
    'vision_text1': 'Être reconnu comme un partenaire de confiance pour tous ceux qui souhaitent réaliser leurs projets d\'immigration et de développement professionnel, en France et à l\'international.',
    'vision_text2': 'Nous aspirons à créer un monde où les frontières ne sont plus des obstacles aux ambitions professionnelles et où chacun peut développer pleinement son potentiel.',
    'migrapro_numbers': 'MigraPro en Chiffres',
    'numbers_description': 'Des résultats concrets qui témoignent de notre expertise et de notre engagement envers nos clients.',
    'years_experience': 'Années d\'expérience',
    'satisfied_clients': 'Clients satisfaits',
    'success_rate': 'Taux de réussite',
    'destination_countries': 'Pays de destination',
    'our_values': 'Nos Valeurs',
    'values_description': 'Ces valeurs guident chacune de nos actions et font partie intégrante de notre culture d\'entreprise.',
    'expertise': 'Expertise',
    'expertise_description': 'Une équipe de professionnels qualifiés dans leurs domaines respectifs, offrant des conseils basés sur une expérience solide et une connaissance approfondie.',
    'excellence': 'Excellence',
    'excellence_description': 'Un engagement constant envers la qualité et l\'excellence dans tous nos services, avec un souci du détail et une attention particulière aux besoins de chaque client.',
    'inclusivity': 'Inclusivité',
    'inclusivity_description': 'Une approche inclusive qui respecte la diversité culturelle et s\'adapte aux besoins spécifiques de chaque personne, quelle que soit son origine.',
    'efficiency': 'Efficacité',
    'efficiency_description': 'Des processus optimisés et une communication claire pour vous faire gagner du temps et faciliter vos démarches à chaque étape.',
    'our_team': 'Notre Équipe',
    'team_description': 'Des professionnels passionnés et expérimentés, dédiés à la réussite de vos projets.',
    'ready_to_start_with_us': 'Prêt à commencer votre projet avec nous ?',
    'contact_team': 'Contactez notre équipe dès aujourd\'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.',
    
    // Eligibility Page
    'evaluate_eligibility': 'Évaluez votre admissibilité à l\'immigration canadienne',
    'eligibility_description': 'Découvrez votre admissibilité aux programmes d\'immigration canadiens comme Entrée Express, le nouveau Programme de sélection des travailleurs qualifiés (PSTQ) et le Programme de l\'Expérience Québécoise (PEQ).',
    'new_pstq': 'Nouveau : Programme de sélection des travailleurs qualifiés (PSTQ)',
    'pstq_description': 'Le PSTQ remplace le Programme régulier des travailleurs qualifiés (PRTQ) et vise à sélectionner des personnes :',
    'pstq_item1': 'Connaissant le français',
    'pstq_item2': 'Ayant les compétences suffisantes pour intégrer le marché du travail',
    'pstq_item3': 'Pouvant répondre aux besoins dans les secteurs touchés par la rareté de main-d\'œuvre',
    'pstq_features': 'Le PSTQ comprend 4 volets distincts :',
    'pstq_feature1': 'Volet 1 : Professions hautement qualifiées exigeant des compétences spécialisées',
    'pstq_feature2': 'Volet 2 : Professions exigeant des compétences intermédiaires et manuelles',
    'pstq_feature3': 'Volet 3 : Professions réglementées requérant une autorisation d\'exercice au Québec',
    'pstq_feature4': 'Volet 4 : Talents d\'exception',
    'immigration_numbers': 'L\'Immigration au Canada en Chiffres',
    'numbers_subtitle': 'Le Canada accueille chaque année des centaines de milliers d\'immigrants dans le cadre de ses différents programmes.',
    'immigrants_accepted': 'Immigrants acceptés par année',
    'immigration_programs': 'Programmes d\'immigration',
    'success_rate_with_support': 'Taux de succès avec accompagnement',
    'processing_time': 'Mois de délai de traitement',
    'why_use_evaluator': 'Pourquoi utiliser notre évaluateur ?',
    'complete_evaluation': 'Évaluation complète',
    'evaluation_description': 'Notre algorithme analyse votre profil selon tous les programmes canadiens disponibles, y compris le nouveau PSTQ',
    'personalized_advice': 'Conseils personnalisés',
    'advice_description': 'Recevez des recommandations adaptées à votre situation spécifique et aux 4 volets du PSTQ',
    'instant_results': 'Résultats instantanés',
    'results_description': 'Obtenez votre évaluation immédiatement, sans attendre',
    'detailed_document': 'Document détaillé',
    'document_description': 'Téléchargez votre rapport complet d\'éligibilité au format PDF',
    
    // Immigration Service Page
    'immigration_services': 'Services d\'Immigration Canadienne',
    'immigration_services_desc': 'Nous vous accompagnons à chaque étape de votre processus d\'immigration, de l\'évaluation initiale à l\'intégration réussie dans votre province canadienne.',
    'we_accompany_you': 'Nous vous accompagnons',
    'eligibility_assessment': 'Évaluation d\'admissibilité',
    'assessment_description': 'Évaluez vos chances d\'immigration canadienne grâce à notre formulaire interactif basé sur les critères des programmes officiels.',
    'file_preparation_title': 'Préparation du dossier',
    'file_preparation_description': 'Assistance personnalisée pour préparer et vérifier votre dossier d\'immigration selon les exigences de chaque programme.',
    'procedure_tracking': 'Suivi des procédures',
    'tracking_description': 'Suivez l\'avancement de vos démarches administratives en temps réel et recevez des alertes aux étapes clés.',
    'local_integration_title': 'Intégration locale',
    'local_integration_description': 'Conseils sur la culture canadienne, les lois et les ressources pour vous aider à vous intégrer dans votre province d\'accueil.',
    'professional_insertion': 'Insertion professionnelle',
    'insertion_description': 'Assistance pour la recherche d\'emploi et la reconnaissance des qualifications dans votre nouvelle communauté.',
    'test_my_eligibility': 'Tester mon admissibilité',
    'canadian_immigration_programs': 'Programmes d\'immigration canadiens',
    'express_entry': 'Entrée Express',
    'express_entry_description': 'Système de gestion des demandes d\'immigration pour les travailleurs qualifiés.',
    'processing_time_express': 'Délai de traitement: 6 mois',
    'pstq_quebec': 'PSTQ (Québec)',
    'pstq_quebec_description': 'Nouveau Programme de sélection des travailleurs qualifiés du Québec avec 4 volets distincts.',
    'processing_time_pstq': 'Délai de traitement: 12-24 mois',
    'provincial_nominee': 'Programme des Candidats Provinciaux',
    'provincial_nominee_description': 'Programmes spécifiques à chaque province canadienne.',
    'processing_time_provincial': 'Délai de traitement: variable selon la province',
    'evaluate_eligibility_now': 'Évaluer mon admissibilité maintenant',
    
    // Formation Service Page
    'training_services': 'Services de Formation',
    'training_subtitle': 'Développez vos compétences et optimisez votre présentation professionnelle pour maximiser vos chances de réussite.',
    'training_description': 'Nos experts vous aident à valoriser votre profil professionnel et à acquérir de nouvelles compétences pour atteindre vos objectifs de carrière.',
    'custom_cv': 'Création de CV personnalisé',
    'cv_custom_description': 'Créez un CV professionnel adapté à votre secteur d\'activité et à vos compétences.',
    'cover_letter': 'Rédaction de lettres de motivation',
    'cover_letter_description': 'Assistance pour rédiger des lettres de motivation percutantes qui retiennent l\'attention des recruteurs.',
    'training_offers': 'Sélection d\'offres de formation',
    'training_offers_description': 'Découvrez des programmes de formation pour améliorer vos compétences professionnelles.',
    'request_quote': 'Demander un devis',
    
    // Coaching Service Page
    'coaching_services': 'Services de Coaching',
    'coaching_subtitle': 'Développez votre potentiel et préparez-vous efficacement pour réussir dans votre parcours professionnel.',
    'coachings_description': 'Nos coachs certifiés vous accompagnent dans le développement de vos compétences et la préparation aux défis professionnels.',
    'interview_preparation': 'Préparation aux entretiens d\'embauche',
    'interview_preparation_description': 'Des conseils pratiques et des simulations pour réussir vos entretiens professionnels.',
    'coaching_workshops': 'Ateliers de coaching',
    'workshops_description': 'Sessions interactives pour développer vos compétences en communication et gestion du stress.',
    'personalized_coaching': 'Coaching personnalisé',
    'personalized_coaching_description': 'Un accompagnement sur-mesure pour atteindre vos objectifs professionnels.',
    'make_appointment': 'Prendre rendez-vous',
    
    // Orientation Service Page
    'counseling_orientation': 'Conseil et Orientation Professionnelle',
    'orientation_subtitle': 'Trouvez votre voie professionnelle grâce à nos services de conseil et d\'orientation personnalisés.',
    'orientations_description': 'Nos conseillers vous aident à faire le point sur vos compétences, à identifier vos aspirations et à définir un plan d\'action concret pour votre avenir professionnel.',
    'career_counseling': 'Conseil en orientation professionnelle',
    'career_counseling_description': 'Accompagnement personnalisé pour définir votre parcours professionnel idéal.',
    'skills_market_analysis': 'Analyse des compétences et du marché',
    'analysis_description': 'Évaluation de vos compétences et identification des secteurs porteurs sur le marché du travail.',
    'skills_assessment_title': 'Bilan de compétences',
    'skills_assessment_description': 'Un diagnostic complet de vos aptitudes, motivations et aspirations professionnelles.',
    'request_appointment': 'Demander un rendez-vous',
    
    // Recruitment Service Page
    'recruitment_services': 'Services de Recrutement',
    'recruitment_subtitle': 'Trouvez l\'emploi qui vous correspond grâce à notre plateforme de recrutement spécialisée.',
    'recruitment_description': 'Notre équipe vous aide à naviguer dans le marché de l\'emploi et à trouver des opportunités adaptées à votre profil et à vos ambitions.',
    'job_listings': 'Liste des offres d\'emploi',
    'listings_description': 'Consultez notre plateforme d\'offres d\'emploi régulièrement mise à jour dans différents secteurs.',
    'custom_search': 'Recherche personnalisée',
    'search_description': 'Bénéficiez de notre expertise pour trouver les offres qui correspondent à votre profil et vos aspirations.',
    'offers_filtering': 'Filtrage des offres',
    'filtering_description': 'Utilisez nos outils pour filtrer les offres selon vos critères spécifiques.',
    'view_job_offers': 'Voir les offres d\'emploi',
    
    // FAQ Page
    'frequent_questions': 'Questions Fréquentes',
    'faq_description': 'Trouvez des réponses aux questions les plus courantes sur nos services d\'immigration, de formation, de coaching et de recrutement.',
    
    // Privacy Page
    'privacy_policy': 'Politique de Confidentialité',
    'effective_date': 'Date d\'entrée en vigueur: 1er Septembre 2023',
    'introduction': '1. Introduction',
    'intro_text': 'Bienvenue sur la Politique de Confidentialité de MigraPro. Nous respectons votre vie privée et nous engageons à protéger les informations personnelles que vous nous fournissez. Cette politique explique comment nous recueillons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez nos services.',
    
    // Terms Page
    'terms_of_use': 'Conditions d\'Utilisation',
    
    // Sitemap Page
    'sitemap_description': 'Cette page vous présente la structure complète du site de MigraPro pour vous aider à naviguer et à trouver rapidement l\'information que vous recherchez.',
    'home_page': 'Page d\'accueil de MigraPro',
    'immigration_services_page': 'Services de conseil et d\'accompagnement en immigration',
    'training_services_page': 'Formation professionnelle et linguistique',
    'coaching_services_page': 'Coaching personnalisé pour votre projet',
    'orientation_services_page': 'Services d\'orientation et de développement de carrière',
    'recruitment_services_page': 'Services de recrutement et placement professionnel',
    'about_page': 'Informations sur MigraPro, notre mission et notre équipe',
    'blog_page': 'Articles et actualités sur l\'immigration et nos services',
    'faq_page': 'Questions fréquemment posées sur nos services',
    'contact_page': 'Nos coordonnées et formulaire de contact',
    'eligibility_page': 'Évaluez votre éligibilité pour l\'immigration',
    'legal_info': 'Informations légales',
    'privacy_page': 'Notre politique de confidentialité et protection des données',
    'terms_page': 'Conditions générales d\'utilisation de nos services',
    'sitemap_page': 'Structure complète du site web',
  },
  en: {
    // Navigation
    'home': 'Home',
    'services': 'Services',
    'blog': 'Blog',
    'faq': 'FAQ',
    'about': 'About',
    'contact': 'Contact',
    'eligibility': 'Eligibility Test',
    
    // Services
    'immigration': 'Immigration',
    'formation': 'Training',
    'coaching': 'Coaching',
    'orientation': 'Career Guidance',
    'recrutement': 'Recruitment',
    
    // Footer
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Use',
    'sitemap': 'Sitemap',
    
    // Common
    'language': 'Language',
    
    // Hero Section
    'hero_title': 'Your partner for a new beginning',
    'hero_subtitle': 'We support you in all your immigration, training, and professional integration processes.',
    'cta_eligibility': 'Test my eligibility',
    'cta_services': 'Our services',
    
    // Services Section
    'our_services': 'Our Services',
    'services_description': 'Discover our full range of services designed to support you in your immigration project and professional development.',
    'immigration_description': 'Personalized support for all your immigration and integration procedures in your host country.',
    'formation_description': 'Creation of resumes and cover letters adapted to professional standards with customized templates.',
    'coaching_description': 'Preparation for job interviews and development of professional skills.',
    'orientation_description': 'Personalized advice to guide your career according to your skills and the job market.',
    'recrutement_description': 'Access to job offers and connection with companies recruiting in your field.',
    
    // Feature Section
    'immigration_simplified': 'Simplified Immigration',
    'immigration_subtitle': 'Our team of experts guides you through the complex immigration process, offering customized support to make your overseas life project a reality.',
    'file_preparation': 'File Preparation',
    'file_description': 'We guide you in preparing and verifying all necessary documents for your immigration file.',
    'procedure_follow': 'Procedure Follow-up',
    'procedure_description': 'Benefit from personalized follow-up of your file with regular updates on the progress of your procedures.',
    'local_integration': 'Local Integration',
    'local_description': 'We help you integrate into your host country through cultural and administrative advice.',
    
    // Stats Section
    'our_impact': 'Our impact in numbers',
    'impact_description': 'Results that speak for themselves. Discover how we have helped thousands of people achieve their immigration and career development goals.',
    'clients_helped': 'Clients supported',
    'satisfaction_rate': 'Satisfaction rate',
    'accepted_files': 'Accepted files',
    'expertise_countries': 'Countries of expertise',
    
    // Testimonials Section
    'testimonials_title': 'What our clients say',
    'testimonials_description': 'Discover testimonials from people who have trusted our services and succeeded in their projects.',
    'more_testimonials': 'See more testimonials',
    
    // Career Section
    'develop_career': 'Develop your career',
    'career_subtitle': 'Our coaching services help you reveal your professional potential and stand out in the competitive job market.',
    'interview_prep': 'Interview preparation',
    'interview_description': 'Customized interview simulation sessions to help you gain confidence and master your speech.',
    'cv_letter': 'Resume and Cover Letter',
    'cv_description': 'Creation of professional documents that highlight your skills and attract recruiters\' attention.',
    'skills_assessment': 'Skills Assessment',
    'skills_description': 'In-depth assessment of your skills and identification of career opportunities suited to your profile.',
    
    // CTA Section
    'ready_to_start': 'Ready to start your project?',
    'cta_description': 'Take the first step towards your new life. Test your eligibility or contact us for personalized assistance.',
    'contact_us': 'Contact us',
    
    // About Page
    'about_migrapro': 'About MigraPro',
    'about_description': 'MigraPro has been supporting individuals and professionals in their immigration, training, and career development projects for over 10 years.',
    'our_mission': 'Our Mission',
    'mission_text1': 'To facilitate access to new professional and personal opportunities for our clients, by providing personalized support and tools adapted to their specific needs.',
    'mission_text2': 'We are committed to simplifying complex immigration and professional development processes by offering a human, efficient, and quality service.',
    'our_vision': 'Our Vision',
    'vision_text1': 'To be recognized as a trusted partner for all those who wish to achieve their immigration and professional development projects, in France and internationally.',
    'vision_text2': 'We aspire to create a world where borders are no longer obstacles to professional ambitions and where everyone can fully develop their potential.',
    'migrapro_numbers': 'MigraPro in Numbers',
    'numbers_description': 'Concrete results that testify to our expertise and commitment to our clients.',
    'years_experience': 'Years of experience',
    'satisfied_clients': 'Satisfied clients',
    'success_rate': 'Success rate',
    'destination_countries': 'Destination countries',
    'our_values': 'Our Values',
    'values_description': 'These values guide each of our actions and are an integral part of our corporate culture.',
    'expertise': 'Expertise',
    'expertise_description': 'A team of qualified professionals in their respective fields, offering advice based on solid experience and in-depth knowledge.',
    'excellence': 'Excellence',
    'excellence_description': 'A constant commitment to quality and excellence in all our services, with attention to detail and special attention to each client\'s needs.',
    'inclusivity': 'Inclusivity',
    'inclusivity_description': 'An inclusive approach that respects cultural diversity and adapts to the specific needs of each person, regardless of origin.',
    'efficiency': 'Efficiency',
    'efficiency_description': 'Optimized processes and clear communication to save you time and facilitate your procedures at each step.',
    'our_team': 'Our Team',
    'team_description': 'Passionate and experienced professionals dedicated to the success of your projects.',
    'ready_to_start_with_us': 'Ready to start your project with us?',
    'contact_team': 'Contact our team today to discuss your needs and find out how we can help you.',
    
    // Eligibility Page
    'evaluate_eligibility': 'Evaluate your eligibility for Canadian immigration',
    'eligibility_description': 'Discover your eligibility for Canadian immigration programs such as Express Entry, the new Quebec Skilled Worker Program (QSWP), and the Quebec Experience Program (PEQ).',
    'new_pstq': 'New: Quebec Skilled Worker Program (QSWP)',
    'pstq_description': 'The QSWP replaces the Regular Skilled Worker Program (RSWP) and aims to select people who:',
    'pstq_item1': 'Know French',
    'pstq_item2': 'Have sufficient skills to integrate into the labor market',
    'pstq_item3': 'Can meet needs in sectors affected by labor shortages',
    'pstq_features': 'The QSWP includes 4 distinct streams:',
    'pstq_feature1': 'Stream 1: Highly skilled professions requiring specialized skills',
    'pstq_feature2': 'Stream 2: Professions requiring intermediate and manual skills',
    'pstq_feature3': 'Stream 3: Regulated professions requiring authorization to practice in Quebec',
    'pstq_feature4': 'Stream 4: Exceptional talents',
    'immigration_numbers': 'Immigration to Canada in Numbers',
    'numbers_subtitle': 'Canada welcomes hundreds of thousands of immigrants each year through its various programs.',
    'immigrants_accepted': 'Immigrants accepted per year',
    'immigration_programs': 'Immigration programs',
    'success_rate_with_support': 'Success rate with support',
    'processing_time': 'Months of processing time',
    'why_use_evaluator': 'Why use our evaluator?',
    'complete_evaluation': 'Complete evaluation',
    'evaluation_description': 'Our algorithm analyzes your profile according to all available Canadian programs, including the new QSWP',
    'personalized_advice': 'Personalized advice',
    'advice_description': 'Receive recommendations adapted to your specific situation and the 4 streams of the QSWP',
    'instant_results': 'Instant results',
    'results_description': 'Get your evaluation immediately, without waiting',
    'detailed_document': 'Detailed document',
    'document_description': 'Download your complete eligibility report in PDF format',
    
    // Immigration Service Page
    'immigration_services': 'Canadian Immigration Services',
    'immigration_services_desc': 'We are with you every step of the way, from initial assessment to successful integration into your Canadian province.',
    'we_accompany_you': 'We accompany you',
    'eligibility_assessment': 'Eligibility assessment',
    'assessment_description': 'Evaluate your chances of Canadian immigration through our interactive form based on the criteria of official programs.',
    'file_preparation_title': 'File preparation',
    'file_preparation_description': 'Personalized assistance to prepare and verify your immigration file according to the requirements of each program.',
    'procedure_tracking': 'Procedure tracking',
    'tracking_description': 'Track the progress of your administrative procedures in real time and receive alerts at key stages.',
    'local_integration_title': 'Local integration',
    'local_integration_description': 'Advice on Canadian culture, laws, and resources to help you integrate into your host province.',
    'professional_insertion': 'Professional insertion',
    'insertion_description': 'Assistance with job searches and recognition of qualifications in your new community.',
    'test_my_eligibility': 'Test my eligibility',
    'canadian_immigration_programs': 'Canadian Immigration Programs',
    'express_entry': 'Express Entry',
    'express_entry_description': 'Immigration application management system for skilled workers.',
    'processing_time_express': 'Processing time: 6 months',
    'pstq_quebec': 'QSWP (Quebec)',
    'pstq_quebec_description': 'New Quebec Skilled Worker Program with 4 distinct streams.',
    'processing_time_pstq': 'Processing time: 12-24 months',
    'provincial_nominee': 'Provincial Nominee Program',
    'provincial_nominee_description': 'Programs specific to each Canadian province.',
    'processing_time_provincial': 'Processing time: varies by province',
    'evaluate_eligibility_now': 'Evaluate my eligibility now',
    
    // Formation Service Page
    'training_services': 'Training Services',
    'training_subtitle': 'Develop your skills and optimize your professional presentation to maximize your chances of success.',
    'training_description': 'Our experts help you enhance your professional profile and acquire new skills to achieve your career goals.',
    'custom_cv': 'Custom resume creation',
    'cv_custom_description': 'Create a professional resume adapted to your industry and skills.',
    'cover_letter': 'Cover letter writing',
    'cover_letter_description': 'Assistance in writing impactful cover letters that catch recruiters\' attention.',
    'training_offers': 'Selection of training offers',
    'training_offers_description': 'Discover training programs to improve your professional skills.',
    'request_quote': 'Request a quote',
    
    // Coaching Service Page
    'coaching_services': 'Coaching Services',
    'coaching_subtitle': 'Develop your potential and prepare effectively to succeed in your professional journey.',
    'coachings_description': 'Our certified coaches support you in developing your skills and preparing for professional challenges.',
    'interview_preparation': 'Job interview preparation',
    'interview_preparation_description': 'Practical advice and simulations to succeed in your professional interviews.',
    'coaching_workshops': 'Coaching workshops',
    'workshops_description': 'Interactive sessions to develop your communication skills and stress management.',
    'personalized_coaching': 'Personalized coaching',
    'personalized_coaching_description': 'Tailored support to achieve your professional goals.',
    'make_appointment': 'Make an appointment',
    
    // Orientation Service Page
    'counseling_orientation': 'Career Counseling and Guidance',
    'orientation_subtitle': 'Find your professional path through our personalized counseling and guidance services.',
    'orientations_description': 'Our counselors help you assess your skills, identify your aspirations, and define a concrete action plan for your professional future.',
    'career_counseling': 'Career counseling',
    'career_counseling_description': 'Personalized support to define your ideal career path.',
    'skills_market_analysis': 'Skills and market analysis',
    'analysis_description': 'Assessment of your skills and identification of growing sectors in the job market.',
    'skills_assessment_title': 'Skills assessment',
    'skills_assessment_description': 'A comprehensive diagnosis of your abilities, motivations, and professional aspirations.',
    'request_appointment': 'Request an appointment',
    
    // Recruitment Service Page
    'recruitment_services': 'Recruitment Services',
    'recruitment_subtitle': 'Find the job that suits you through our specialized recruitment platform.',
    'recruitment_description': 'Our team helps you navigate the job market and find opportunities suited to your profile and ambitions.',
    'job_listings': 'Job listings',
    'listings_description': 'Check our job offers platform regularly updated in various sectors.',
    'custom_search': 'Custom search',
    'search_description': 'Benefit from our expertise to find offers that match your profile and aspirations.',
    'offers_filtering': 'Offers filtering',
    'filtering_description': 'Use our tools to filter offers according to your specific criteria.',
    'view_job_offers': 'View job offers',
    
    // FAQ Page
    'frequent_questions': 'Frequently Asked Questions',
    'faq_description': 'Find answers to the most common questions about our immigration, training, coaching, and recruitment services.',
    
    // Privacy Page
    'privacy_policy': 'Privacy Policy',
    'effective_date': 'Effective date: September 1, 2023',
    'introduction': '1. Introduction',
    'intro_text': 'Welcome to MigraPro\'s Privacy Policy. We respect your privacy and are committed to protecting the personal information you provide to us. This policy explains how we collect, use, disclose, and protect your information when you use our services.',
    
    // Terms Page
    'terms_of_use': 'Terms of Use',
    
    // Sitemap Page
    'sitemap_description': 'This page presents the complete structure of the MigraPro site to help you navigate and quickly find the information you are looking for.',
    'home_page': 'MigraPro\'s homepage',
    'immigration_services_page': 'Immigration consulting and support services',
    'training_services_page': 'Professional and language training',
    'coaching_services_page': 'Personalized coaching for your project',
    'orientation_services_page': 'Career guidance and development services',
    'recruitment_services_page': 'Recruitment services and professional placement',
    'about_page': 'Information about MigraPro, our mission, and our team',
    'blog_page': 'Articles and news about immigration and our services',
    'faq_page': 'Frequently asked questions about our services',
    'contact_page': 'Our contact information and contact form',
    'eligibility_page': 'Evaluate your eligibility for immigration',
    'legal_info': 'Legal Information',
    'privacy_page': 'Our privacy policy and data protection',
    'terms_page': 'Terms and conditions for using our services',
    'sitemap_page': 'Complete website structure',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  // Fonction de traduction
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
