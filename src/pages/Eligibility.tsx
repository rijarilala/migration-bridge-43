
import { useTranslation } from "react-i18next";
import EligibilityForm from "@/components/EligibilityForm";
import { motion } from "framer-motion";

const Eligibility = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-secondary/20 to-background/0">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 gradient-text">
            {t("eligibility.title")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("eligibility.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg border border-gray-100 rounded-xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t("eligibility.description")}
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous utilisons les mêmes critères d'évaluation que les autorités canadiennes d'immigration pour vous fournir une évaluation réaliste de vos chances.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <EligibilityForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Eligibility;
