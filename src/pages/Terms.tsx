
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('terms.title')} | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('terms.title')}
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
              <p className="mb-4">
                <strong>{t('terms.effectiveDate')}:</strong> 1er Septembre 2023
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. {t('terms.acceptance')}
              </h2>
              <p className="mb-4">
                {t('terms.acceptanceText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. {t('terms.services')}
              </h2>
              <p className="mb-4">
                {t('terms.servicesText')}
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {(t('terms.servicesItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. {t('terms.fees')}
              </h2>
              <p className="mb-4">
                {t('terms.feesText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. {t('terms.clientObligations')}
              </h2>
              <p className="mb-2">{t('terms.clientObligationsText')}</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {(t('terms.clientObligationsItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                5. {t('terms.liability')}
              </h2>
              <p className="mb-4">
                {t('terms.liabilityText')}
              </p>
              <p className="mb-4">
                {t('terms.liabilityText2')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                6. {t('terms.intellectualProperty')}
              </h2>
              <p className="mb-4">
                {t('terms.intellectualPropertyText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                7. {t('terms.confidentiality')}
              </h2>
              <p className="mb-4">
                {t('terms.confidentialityText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                8. {t('terms.termination')}
              </h2>
              <p className="mb-4">
                {t('terms.terminationText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                9. {t('terms.modifications')}
              </h2>
              <p className="mb-4">
                {t('terms.modificationsText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                10. {t('terms.law')}
              </h2>
              <p className="mb-4">
                {t('terms.lawText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                11. {t('terms.contactUs')}
              </h2>
              <p className="mb-4">
                {t('terms.contactUsText')}
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
