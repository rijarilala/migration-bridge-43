import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.startsWith('fr') ? 'Français' : 'English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Change language">
          <GlobeIcon size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLanguage('fr')} 
          className="cursor-pointer font-semibold"
          data-active={i18n.language.startsWith('fr')}
        >
          Français {i18n.language.startsWith('fr') && '✓'}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')} 
          className="cursor-pointer"
          data-active={i18n.language.startsWith('en')}
        >
          English {i18n.language.startsWith('en') && '✓'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
