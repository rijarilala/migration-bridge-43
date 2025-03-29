
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('privacy.title')} | MigraPro</title>
      </Helmet>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('privacy.title')}
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
              <p className="mb-4">
                <strong>{t('privacy.effectiveDate')}:</strong> 1er Septembre 2023
              </p>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. {t('privacy.introduction')}
              </h2>
              <p className="mb-4">
                {t('privacy.introText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. {t('privacy.infoCollected')}
              </h2>
              <p className="mb-2">{t('privacy.infoCollectedText')}</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {t('privacy.infoCollectedItems', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. {t('privacy.infoUse')}
              </h2>
              <p className="mb-2">{t('privacy.infoUseText')}</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {t('privacy.infoUseItems', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. {t('privacy.infoSharing')}
              </h2>
              <p className="mb-4">
                {t('privacy.infoSharingText')}
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {t('privacy.infoSharingItems', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                5. {t('privacy.dataSecurity')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataSecurityText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                6. {t('privacy.dataRetention')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataRetentionText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                7. {t('privacy.yourRights')}
              </h2>
              <p className="mb-2">{t('privacy.yourRightsText')}</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {t('privacy.yourRightsItems', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                8. {t('privacy.policyChanges')}
              </h2>
              <p className="mb-4">
                {t('privacy.policyChangesText')}
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                9. {t('privacy.contactUs')}
              </h2>
              <p className="mb-4">
                {t('privacy.contactUsText')}
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
