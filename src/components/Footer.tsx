
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Map from "./Map";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-brand-700 mb-4">MigraPro</h3>
            <p className="text-gray-600 mb-4">
              {t('about_description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('our_services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/services/immigration" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('immigration')}
                </Link>
              </li>
              <li>
                <Link to="/services/formation" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('formation')}
                </Link>
              </li>
              <li>
                <Link to="/services/coaching" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('coaching')}
                </Link>
              </li>
              <li>
                <Link to="/services/orientation" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('orientation')}
                </Link>
              </li>
              <li>
                <Link to="/services/recrutement" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('recrutement')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-600 hover:text-brand-600 transition-colors">
                  {t('sitemap')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Lot 108T Moramanga 514<br />Madagascar
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-600" />
                <a href="tel:+261340535068" className="text-gray-600 hover:text-brand-600 transition-colors">
                  +261 34 05 350 68
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-600" />
                <a href="mailto:contact@migrapro.com" className="text-gray-600 hover:text-brand-600 transition-colors">
                  contact@migrapro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('our_location')}</h3>
          <Map />
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} MigraPro. {t('all_rights_reserved')}
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="/privacy" 
                    className="text-gray-500 hover:text-brand-600 text-sm transition-colors"
                  >
                    {t('privacy_short')}
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms" 
                    className="text-gray-500 hover:text-brand-600 text-sm transition-colors"
                  >
                    {t('terms_short')}
                  </a>
                </li>
                <li>
                  <a 
                    href="/sitemap" 
                    className="text-gray-500 hover:text-brand-600 text-sm transition-colors"
                  >
                    {t('sitemap_short')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
