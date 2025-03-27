
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
  
  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { 
      name: "Accueil", 
      path: "/" 
    },
    { 
      name: "Services",
      dropdown: true,
      items: [
        { name: "Immigration", path: "/services/immigration" },
        { name: "Formation", path: "/services/formation" },
        { name: "Coaching", path: "/services/coaching" },
        { name: "Orientation Professionnelle", path: "/services/orientation" },
        { name: "Recrutement", path: "/services/recrutement" }
      ]
    },
    { 
      name: "Blog", 
      path: "/blog" 
    },
    { 
      name: "FAQ", 
      path: "/faq" 
    },
    { 
      name: "À Propos", 
      path: "/about" 
    },
    { 
      name: "Contact", 
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
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="px-3 py-2 flex items-center text-sm font-medium text-gray-700 hover:text-brand-600 transition-all duration-200"
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  <div className={`absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 transform opacity-0 scale-95 pointer-events-none ${
                    activeDropdown === link.name ? "opacity-100 scale-100 pointer-events-auto" : ""
                  }`}>
                    <div className="py-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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
            <Button 
              className="ml-4 bg-brand-600 hover:bg-brand-700 text-white" 
              size="sm"
            >
              Test d'Éligibilité
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="w-full text-left py-2 text-lg font-medium text-gray-700 hover:text-brand-600 transition-all duration-200 flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>
                  
                  <div className={`mt-2 space-y-1 pl-4 overflow-hidden transition-all duration-300 ${
                    activeDropdown === link.name ? "max-h-96" : "max-h-0"
                  }`}>
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block py-2 text-gray-600 hover:text-brand-600"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 text-lg font-medium text-gray-700 hover:text-brand-600 transition-all duration-200"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-8">
            <Button 
              className="w-full bg-brand-600 hover:bg-brand-700 text-white"
            >
              Test d'Éligibilité
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
