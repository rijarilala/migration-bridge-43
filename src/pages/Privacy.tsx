import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

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
      <div className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-primary/80 hover:text-primary">
                    <Home size={16} className="mr-1" />
                    Accueil
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/privacy" className="text-primary font-medium">
                    {t('privacy.title')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
              <span className="company-section-title">{t('privacy.title')}</span>
              <h1 className="page-title flex flex-col items-center justify-center">
                {t('privacy.title')}
                <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                Dernière mise à jour: 1er Septembre 2023
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              
              <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
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
                  {(t('privacy.infoCollectedItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  3. {t('privacy.infoUse')}
                </h2>
                <p className="mb-2">{t('privacy.infoUseText')}</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  {(t('privacy.infoUseItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
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
                  {(t('privacy.infoSharingItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
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
                  {(t('privacy.yourRightsItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
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
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
