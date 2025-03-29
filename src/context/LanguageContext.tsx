
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
