
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Accueil",
      path: "/",
      description: "Page d'accueil de MigraPro"
    },
    {
      title: "Services",
      children: [
        {
          title: "Immigration",
          path: "/services/immigration",
          description: "Services de conseil et d'accompagnement en immigration"
        },
        {
          title: "Formation",
          path: "/services/formation",
          description: "Formation professionnelle et linguistique"
        },
        {
          title: "Coaching",
          path: "/services/coaching",
          description: "Coaching personnalisé pour votre projet"
        },
        {
          title: "Orientation Professionnelle",
          path: "/services/orientation",
          description: "Services d'orientation et de développement de carrière"
        },
        {
          title: "Recrutement",
          path: "/services/recrutement",
          description: "Services de recrutement et placement professionnel"
        }
      ]
    },
    {
      title: "À Propos",
      path: "/about",
      description: "Informations sur MigraPro, notre mission et notre équipe"
    },
    {
      title: "Blog",
      path: "/blog",
      description: "Articles et actualités sur l'immigration et nos services"
    },
    {
      title: "FAQ",
      path: "/faq",
      description: "Questions fréquemment posées sur nos services"
    },
    {
      title: "Contact",
      path: "/contact",
      description: "Nos coordonnées et formulaire de contact"
    },
    {
      title: "Test d'Éligibilité",
      path: "/eligibility",
      description: "Évaluez votre éligibilité pour l'immigration"
    },
    {
      title: "Informations légales",
      children: [
        {
          title: "Politique de Confidentialité",
          path: "/privacy",
          description: "Notre politique de confidentialité et protection des données"
        },
        {
          title: "Conditions d'Utilisation",
          path: "/terms",
          description: "Conditions générales d'utilisation de nos services"
        },
        {
          title: "Plan du Site",
          path: "/sitemap",
          description: "Structure complète du site web"
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
        <title>Plan du Site | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Plan du Site
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <p className="text-gray-700 mb-8">
              Cette page vous présente la structure complète du site de MigraPro pour vous aider à naviguer et à trouver rapidement l'information que vous recherchez.
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
