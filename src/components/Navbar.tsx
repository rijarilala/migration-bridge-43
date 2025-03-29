
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { 
      name: t('home'), 
      path: "/" 
    },
    { 
      name: t('services'),
      dropdown: true,
      items: [
        { name: t('immigration'), path: "/services/immigration" },
        { name: t('formation'), path: "/services/formation" },
        { name: t('coaching'), path: "/services/coaching" },
        { name: t('orientation'), path: "/services/orientation" },
        { name: t('recrutement'), path: "/services/recrutement" }
      ]
    },
    { 
      name: t('blog'), 
      path: "/blog" 
    },
    { 
      name: t('faq'), 
      path: "/faq" 
    },
    { 
      name: t('about'), 
      path: "/about" 
    },
    { 
      name: t('contact'), 
      path: "/contact" 
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
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
                {t('eligibility')}
              </Button>
            </Link>
            
            {/* Language selector */}
            <div className="ml-4">
              <LanguageSelector />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Language selector for mobile */}
            <div className="mr-4">
              <LanguageSelector />
            </div>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8 px-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="py-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="w-full text-left py-2 text-lg font-medium text-gray-700 hover:text-brand-600 transition-all duration-200 flex items-center justify-between">
                        {link.name}
                        <ChevronDown size={20} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-white w-56 ml-4 mt-2 z-50">
                      {link.items?.map((item) => (
                        <DropdownMenuItem key={item.name} onClick={() => {
                          handleNavigate(item.path);
                          toggleMenu();
                        }}>
                          {item.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className="block w-full text-left py-2 text-lg font-medium text-gray-700 hover:text-brand-600 transition-all duration-200"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
          <div className="mt-8">
            <Button 
              className="w-full bg-brand-600 hover:bg-brand-700 text-white"
              onClick={() => handleNavigate('/eligibility')}
            >
              {t('eligibility')}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
