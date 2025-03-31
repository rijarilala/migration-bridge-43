import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Qui sommes-nous et quelle est notre mission ?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vous êtes Malagasy et vous rêvez de travailler, étudier ou vous installer au Canada ? 
                <span className="inline-block ml-2">🇨🇦</span> Nous sommes là pour vous guider à chaque étape de votre projet d'immigration !
              </p>
              <p className="text-gray-600 mb-6">
                Notre cabinet, basé à Moramanga, Madagascar, est spécialisé dans l'immigration et l'orientation professionnelle 
                vers le Canada. Nous accompagnons les particuliers et les professionnels malgaches dans leurs démarches 
                pour maximiser leurs chances de succès.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre mission</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Informer et conseiller :</span> Nous vous aidons à comprendre les différentes voies 
                    d'immigration.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Évaluer votre éligibilité :</span> Grâce à une analyse personnalisée, nous identifions 
                    le programme qui correspond le mieux à votre profil.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Préparer votre dossier :</span> CV, lettre de motivation, tests de langue, documents 
                    administratifs… Nous nous assurons que tout soit conforme aux exigences canadiennes.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium">Vous accompagner jusqu'au bout :</span> De la soumission de votre demande à votre 
                    arrivée au Canada, nous sommes à vos côtés.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                Que votre objectif soit de trouver un emploi, poursuivre vos études ou obtenir la résidence permanente, 
                nous vous aidons à réaliser votre rêve canadien en toute sécurité et sérénité !
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Cabinet basé à Moramanga, Madagascar</p>
                  <p className="text-sm text-gray-500">Expertise en immigration canadienne</p>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                <Globe size={20} className="mr-2" /> Pourquoi choisir notre cabinet ?
              </h3>
              
              <Card className="mb-4 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Check size={16} />
                    </div>
                    <p className="text-gray-700">Expertise et connaissance approfondie des procédures</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-4 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Check size={16} />
                    </div>
                    <p className="text-gray-700">Accompagnement personnalisé adapté aux Malagasy</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-6 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      <Check size={16} />
                    </div>
                    <p className="text-gray-700">Démarches simplifiées et assistance à chaque étape</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-gray-700 font-medium flex items-center">
                  <span className="mr-2">💡</span> Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui !
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;