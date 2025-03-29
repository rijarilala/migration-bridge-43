
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";

const Sitemap = () => {
  const { t } = useLanguage();

  const siteStructure = [
    {
      title: t('home'),
      path: "/",
      description: t('home_page')
    },
    {
      title: t('services'),
      children: [
        {
          title: t('immigration'),
          path: "/services/immigration",
          description: t('immigration_services_page')
        },
        {
          title: t('formation'),
          path: "/services/formation",
          description: t('training_services_page')
        },
        {
          title: t('coaching'),
          path: "/services/coaching",
          description: t('coaching_services_page')
        },
        {
          title: t('orientation'),
          path: "/services/orientation",
          description: t('orientation_services_page')
        },
        {
          title: t('recrutement'),
          path: "/services/recrutement",
          description: t('recruitment_services_page')
        }
      ]
    },
    {
      title: t('about'),
      path: "/about",
      description: t('about_page')
    },
    {
      title: t('blog'),
      path: "/blog",
      description: t('blog_page')
    },
    {
      title: t('faq'),
      path: "/faq",
      description: t('faq_page')
    },
    {
      title: t('contact'),
      path: "/contact",
      description: t('contact_page')
    },
    {
      title: t('eligibility'),
      path: "/eligibility",
      description: t('eligibility_page')
    },
    {
      title: t('legal_info'),
      children: [
        {
          title: t('privacy'),
          path: "/privacy",
          description: t('privacy_page')
        },
        {
          title: t('terms'),
          path: "/terms",
          description: t('terms_page')
        },
        {
          title: t('sitemap'),
          path: "/sitemap",
          description: t('sitemap_page')
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
              <Link to={item.path} className="text-lg font-medium text-brand-600 hover:text-brand-700 transition-colors">
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
        <title>{t('sitemap')} | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('sitemap')}
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <p className="text-gray-700 mb-8">
              {t('sitemap_description')}
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
