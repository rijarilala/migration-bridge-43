
import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import { FileCheck, BookOpen, Users, BarChart2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  const { t } = useTranslation();

  const statsData = [
    { value: "2500+", label: t("home.stats.clients") },
    { value: "98%", label: t("home.stats.satisfaction") },
    { value: "95%", label: t("home.stats.cases") },
    { value: "5+", label: t("home.stats.countries") }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        imageSrc="https://images.unsplash.com/photo-1667737266458-45fc0ac09f32?q=80&w=1470&auto=format&fit=crop"
        useTranslations={true}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-gray-900 mb-4"
            >
              {t("home.services.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600"
            >
              {t("home.services.description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={t("services.immigration")}
                description="Accompagnement personnalisé à toutes les étapes de votre processus d'immigration au Canada."
                icon={<FileCheck size={24} />}
                link="/services/immigration"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={t("services.training")}
                description="Formations adaptées pour développer vos compétences et renforcer votre profil professionnel."
                icon={<BookOpen size={24} />}
                link="/services/formation"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={t("services.coaching")}
                description="Coaching professionnel pour vous aider à atteindre vos objectifs de carrière."
                icon={<Users size={24} />}
                link="/services/coaching"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={t("services.professionalOrientation")}
                description="Conseils d'experts pour vous orienter vers les meilleures opportunités professionnelles."
                icon={<BarChart2 size={24} />}
                link="/services/orientation"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={t("services.recruitment")}
                description="Mise en relation avec des employeurs canadiens à la recherche de vos compétences."
                icon={<Briefcase size={24} />}
                link="/services/recrutement"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection
        title={t("home.immigration.title")}
        subtitle={t("home.immigration.subtitle")}
        imageSrc="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1470&auto=format&fit=crop"
        features={[
          {
            icon: <FileCheck size={24} />,
            title: "Évaluation personnalisée",
            description: "Analyse complète de votre profil pour identifier les programmes d'immigration les plus adaptés."
          },
          {
            icon: <Users size={24} />,
            title: "Préparation de dossier",
            description: "Assistance pour la préparation et la soumission de votre demande d'immigration."
          },
          {
            icon: <Briefcase size={24} />,
            title: "Recherche d'emploi",
            description: "Aide à la recherche d'opportunités professionnelles correspondant à votre profil."
          }
        ]}
      />

      <Stats 
        title={t("home.stats.title")}
        description={t("home.stats.description")}
        stats={statsData}
      />

      <AboutSection />
    </div>
  );
}
