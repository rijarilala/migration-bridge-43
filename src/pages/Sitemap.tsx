
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Sitemap = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const siteStructure = [
    {
      title: t('navigation.home'),
      path: "/",
      description: t('sitemap.homeDescription', 'This page presents the complete structure of the MigraPro website to help you navigate and quickly find the information you are looking for.')
    },
    {
      title: t('navigation.services'),
      children: [
        {
          title: t('services.immigration'),
          path: "/services/immigration",
          description: t('sitemap.immigrationDescription', 'Services de conseil et d\'accompagnement en immigration')
        },
        {
          title: t('services.training'),
          path: "/services/formation",
          description: t('sitemap.trainingDescription', 'Formation professionnelle et linguistique')
        },
        {
          title: t('services.coaching'),
          path: "/services/coaching",
          description: t('sitemap.coachingDescription', 'Coaching personnalisé pour votre projet')
        },
        {
          title: t('services.professionalOrientation'),
          path: "/services/orientation",
          description: t('sitemap.orientationDescription', 'Services d\'orientation et de développement de carrière')
        },
        {
          title: t('services.recruitment'),
          path: "/services/recrutement",
          description: t('sitemap.recruitmentDescription', 'Services de recrutement et placement professionnel')
        }
      ]
    },
    {
      title: t('navigation.about'),
      path: "/about",
      description: t('sitemap.aboutDescription', 'Informations sur MigraPro, notre mission et notre équipe')
    },
    {
      title: t('navigation.blog'),
      path: "/blog",
      description: t('sitemap.blogDescription', 'Articles et actualités sur l\'immigration et nos services')
    },
    {
      title: t('navigation.faq'),
      path: "/faq",
      description: t('sitemap.faqDescription', 'Questions fréquemment posées sur nos services')
    },
    {
      title: t('navigation.contact'),
      path: "/contact",
      description: t('sitemap.contactDescription', 'Nos coordonnées et formulaire de contact')
    },
    {
      title: t('navigation.eligibility'),
      path: "/eligibility",
      description: t('sitemap.eligibilityDescription', 'Évaluez votre éligibilité pour l\'immigration')
    },
    {
      title: t('sitemap.legalInformation'),
      children: [
        {
          title: t('privacy.title'),
          path: "/privacy",
          description: t('sitemap.privacyDescription', 'Notre politique de confidentialité et protection des données')
        },
        {
          title: t('terms.title'),
          path: "/terms",
          description: t('sitemap.termsDescription', 'Conditions générales d\'utilisation de nos services')
        },
        {
          title: t('sitemap.title'),
          path: "/sitemap",
          description: t('sitemap.description')
        }
      ]
    }
  ];

  const renderSiteMap = (items) => (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="ml-0">
          {item.path ? (
            <div className="mb-2">
              <Link 
                to={item.path} 
                onClick={handleLinkClick}
                className="text-lg font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                {item.title}
              </Link>
              {item.description && (
                <p className="text-gray-600 text-sm">{item.description}</p>
              )}
            </div>
          ) : (
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              )}
            </div>
          )}
          
          {item.children && (
            <div className="ml-6 mt-3">
              {renderSiteMap(item.children)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Helmet>
        <title>{t('sitemap.title')} | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('sitemap.title')}
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <p className="text-gray-700 mb-8">
              {t('sitemap.description')}
            </p>
            
            <div className="mt-8">
              {renderSiteMap(siteStructure)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
