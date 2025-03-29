
import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t('privacy')} | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('privacy_policy')}
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
              <p className="mb-4">
                <strong>{t('effective_date')}</strong>
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {t('introduction')}
              </h2>
              <p className="mb-4">
                {t('intro_text')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. Informations que nous collectons
              </h2>
              <p className="mb-2">Nous pouvons recueillir les types d'informations suivants:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Informations personnelles: nom, adresse, email, numéro de téléphone</li>
                <li>Informations d'identification: copies de passeport, visa, permis de travail</li>
                <li>Informations professionnelles: CV, historique d'emploi, qualifications</li>
                <li>Informations financières: relevés bancaires, preuves de fonds</li>
                <li>Données de navigation: adresse IP, type de navigateur, pages visitées</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. Comment nous utilisons vos informations
              </h2>
              <p className="mb-2">Nous utilisons vos informations personnelles pour:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Fournir nos services de conseil en immigration, formation et recrutement</li>
                <li>Préparer et soumettre des demandes d'immigration en votre nom</li>
                <li>Vous contacter concernant votre dossier ou nos services</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Se conformer aux obligations légales et réglementaires</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. Partage de vos informations
              </h2>
              <p className="mb-4">
                Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Les autorités d'immigration et gouvernementales dans le cadre de votre demande</li>
                <li>Nos partenaires de service qui nous aident à fournir nos services</li>
                <li>Des experts juridiques ou consultants impliqués dans votre dossier</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                5. Sécurité des données
              </h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                6. Conservation des données
              </h2>
              <p className="mb-4">
                Nous conservons vos informations personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire à toute exigence légale, comptable ou de déclaration.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                7. Vos droits
              </h2>
              <p className="mb-2">Selon votre lieu de résidence, vous pouvez avoir le droit de:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Accéder aux informations personnelles que nous détenons sur vous</li>
                <li>Corriger les informations inexactes</li>
                <li>Supprimer vos informations personnelles</li>
                <li>Restreindre ou s'opposer au traitement de vos informations</li>
                <li>Demander la portabilité de vos données</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                8. Modifications de cette politique
              </h2>
              <p className="mb-4">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur notre site web avec la date d'entrée en vigueur.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                9. Nous contacter
              </h2>
              <p className="mb-4">
                Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques de traitement des données, veuillez nous contacter à:
              </p>
              <div className="mb-4">
                <p><strong>MigraPro</strong></p>
                <p>Lot 108T Moramanga 514</p>
                <p>Madagascar</p>
                <p>Email: contact@migrapro.com</p>
                <p>Téléphone: +261 34 05 350 68</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
