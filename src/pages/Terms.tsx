import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

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
                  <BreadcrumbLink href="/terms" className="text-primary font-medium">
                    {t('terms.title')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
              <span className="company-section-title">{t('terms.title')}</span>
              <h1 className="page-title flex flex-col items-center justify-center">
                {t('terms.title')}
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
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
