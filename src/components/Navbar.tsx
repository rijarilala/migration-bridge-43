
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { 
      name: t('navigation.home'), 
      path: "/" 
    },
    { 
      name: t('navigation.services'),
      dropdown: true,
      items: [
        { name: t('services.immigration'), path: "/services/immigration" },
        { name: t('services.training'), path: "/services/formation" },
        { name: t('services.coaching'), path: "/services/coaching" },
        { name: t('services.professionalOrientation'), path: "/services/orientation" },
        { name: t('services.recruitment'), path: "/services/recrutement" }
      ]
    },
    { 
      name: t('navigation.faq'), 
      path: "/faq" 
    },
    { 
      name: t('navigation.about'), 
      path: "/about" 
    },
    { 
      name: t('navigation.contact'), 
      path: "/contact" 
    }
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-brand-600 flex items-center"
          >
            <span className="mr-2">MigraPro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 hover:text-brand-600 transition-all duration-200">
                        {link.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-white w-56 z-50">
                      {link.items?.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link
                            to={item.path}
                            className="w-full cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-all duration-200"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/eligibility">
              <Button 
                className="ml-4 bg-brand-600 hover:bg-brand-700 text-white" 
                size="sm"
              >
                {t('navigation.eligibility')}
              </Button>
            </Link>
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile menu using Sheet component */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Menu">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full bg-white">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link 
                      to="/" 
                      className="text-2xl font-bold text-brand-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      MigraPro
                    </Link>
                    <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                      <X size={24} />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-4 px-6">
                    <nav className="space-y-6">
                      {navLinks.map((link) => (
                        <div key={link.name} className="mb-2">
                          {link.dropdown ? (
                            <div className="py-2">
                              <p className="text-lg font-medium text-gray-700">
                                {link.name}
                              </p>
                              <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-3 mt-2">
                                {link.items?.map((item) => (
                                  <Link 
                                    key={item.name} 
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-gray-600 hover:text-brand-600"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={link.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-lg font-medium text-gray-700 hover:text-brand-600"
                            >
                              {link.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                    
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                        onClick={() => {
                          handleNavigate('/eligibility');
                          setIsMenuOpen(false);
                        }}
                      >
                        {t('navigation.eligibility')}
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
