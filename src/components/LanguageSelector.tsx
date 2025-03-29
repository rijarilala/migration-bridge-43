
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-700 hover:text-brand-600 transition-all duration-200">
        <Globe size={18} className="mr-1" />
        <span className="hidden sm:inline">{language.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24">
        <DropdownMenuItem onClick={() => setLanguage('fr')} className="cursor-pointer">
          <span className={`${language === 'fr' ? 'font-semibold' : ''}`}>Français</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
          <span className={`${language === 'en' ? 'font-semibold' : ''}`}>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
