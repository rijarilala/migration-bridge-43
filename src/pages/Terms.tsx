
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Conditions d'Utilisation | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conditions d'Utilisation
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Date d'entrée en vigueur:</strong> 1er Septembre 2023
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. Acceptation des conditions
              </h2>
              <p className="mb-4">
                En accédant ou en utilisant les services de MigraPro, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. Description des services
              </h2>
              <p className="mb-4">
                MigraPro offre des services de conseil en immigration, formation professionnelle, coaching, orientation professionnelle et recrutement. Nos services comprennent, sans s'y limiter:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Consultation et évaluation d'éligibilité pour l'immigration</li>
                <li>Préparation et soumission de demandes d'immigration</li>
                <li>Services de formation professionnelle et linguistique</li>
                <li>Coaching pour la préparation à l'emploi</li>
                <li>Services d'orientation professionnelle</li>
                <li>Assistance au recrutement et placement professionnel</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. Frais et paiement
              </h2>
              <p className="mb-4">
                Les frais pour nos services sont communiqués avant le début de toute prestation. Le paiement doit être effectué selon les modalités convenues. Tous les frais sont non remboursables, sauf indication contraire dans un accord écrit spécifique.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. Obligations du client
              </h2>
              <p className="mb-2">En utilisant nos services, vous acceptez de:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Fournir des informations véridiques, précises et complètes</li>
                <li>Mettre à jour rapidement vos informations en cas de changement</li>
                <li>Collaborer activement dans le cadre de votre dossier</li>
                <li>Respecter les délais convenus pour la fourniture de documents</li>
                <li>Respecter les lois et réglementations applicables</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                5. Limitation de responsabilité
              </h2>
              <p className="mb-4">
                MigraPro s'efforce de fournir des services de qualité, mais ne peut garantir l'issue favorable de toute demande d'immigration ou procédure administrative. Nous ne sommes pas responsables des décisions prises par les autorités gouvernementales ou d'immigration.
              </p>
              <p className="mb-4">
                Notre responsabilité se limite à la fourniture des services convenus dans le cadre de notre contrat. En aucun cas, notre responsabilité ne dépassera le montant payé pour nos services.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                6. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                Tous les contenus présents sur notre site web et nos documents sont protégés par des droits d'auteur et autres droits de propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées sans notre autorisation écrite préalable.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                7. Confidentialité
              </h2>
              <p className="mb-4">
                Nous nous engageons à protéger vos informations personnelles conformément à notre Politique de Confidentialité. En utilisant nos services, vous consentez à la collecte et à l'utilisation de vos informations comme décrit dans cette politique.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                8. Résiliation
              </h2>
              <p className="mb-4">
                Nous nous réservons le droit de suspendre ou de mettre fin à nos services à tout moment, pour quelque raison que ce soit. Vous pouvez également mettre fin à votre engagement avec nous, sous réserve des conditions spécifiques de votre contrat.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                9. Modifications des conditions
              </h2>
              <p className="mb-4">
                Nous pouvons modifier ces conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur notre site web. Il est de votre responsabilité de consulter régulièrement ces conditions.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                10. Loi applicable et juridiction
              </h2>
              <p className="mb-4">
                Ces conditions d'utilisation sont régies par les lois de Madagascar. Tout litige découlant de ou lié à ces conditions sera soumis à la juridiction exclusive des tribunaux de Madagascar.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                11. Nous contacter
              </h2>
              <p className="mb-4">
                Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à:
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

export default Terms;
