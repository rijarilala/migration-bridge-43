
import { useState } from "react";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SuccessMessage from "@/components/contact/SuccessMessage";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitSuccess = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb navigation */}
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
                <BreadcrumbLink href="/contact" className="text-primary font-medium">
                  Contact
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <span className="company-section-title">Nous Contacter</span>
            <h1 className="page-title flex flex-col items-center justify-center">
              Contactez-nous
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Une question ? Une demande de devis ? Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactInfo />
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              
              {submitted ? (
                <SuccessMessage onReset={handleReset} />
              ) : (
                <ContactForm onSubmitSuccess={handleSubmitSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
