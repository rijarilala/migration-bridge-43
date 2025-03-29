
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // Immigration
  {
    question: "Quels sont les critères d'éligibilité pour immigrer au Canada?",
    answer: "Les critères d'éligibilité pour l'immigration au Canada dépendent du programme choisi. Généralement, ils incluent l'âge, le niveau d'éducation, l'expérience professionnelle, les compétences linguistiques en français et/ou en anglais, et la capacité d'adaptation. Notre test d'éligibilité vous aidera à déterminer si vous êtes admissible.",
    category: "Immigration",
  },
  {
    question: "Combien de temps prend le processus d'immigration en moyenne?",
    answer: "La durée du processus d'immigration varie considérablement selon le pays, le programme et les circonstances individuelles. Pour le Canada, le processus peut prendre entre 6 et 24 mois. Certains programmes express peuvent être plus rapides. Nos conseillers peuvent vous donner une estimation plus précise basée sur votre situation spécifique.",
    category: "Immigration",
  },
  {
    question: "Quels documents sont nécessaires pour constituer un dossier d'immigration?",
    answer: "Les documents requis varient selon le programme d'immigration, mais incluent généralement: passeport valide, diplômes et relevés de notes, preuves d'expérience professionnelle, certificats de compétences linguistiques, certificat de naissance, certificat de mariage le cas échéant, preuve de fonds suffisants, et parfois un certificat médical et un casier judiciaire. Nos conseillers vous fourniront une liste détaillée adaptée à votre situation.",
    category: "Immigration",
  },
  // Formation
  {
    question: "Comment créer un CV qui se démarque des autres candidatures?",
    answer: "Pour créer un CV qui se démarque, concentrez-vous sur la personnalisation pour chaque poste, mettez en avant vos réalisations plutôt que simplement vos responsabilités, utilisez des mots-clés pertinents pour votre secteur, adoptez un format clair et professionnel, et incluez des données quantifiables pour démontrer votre impact. Notre service de création de CV peut vous aider à optimiser votre présentation professionnelle.",
    category: "Formation",
  },
  {
    question: "Quelles sont les erreurs à éviter dans une lettre de motivation?",
    answer: "Les erreurs à éviter dans une lettre de motivation incluent: faire un copier-coller générique, se concentrer uniquement sur vos besoins plutôt que sur ce que vous pouvez apporter à l'entreprise, utiliser un langage trop familier, faire des fautes d'orthographe ou de grammaire, écrire une lettre trop longue, et répéter simplement les informations de votre CV sans les développer.",
    category: "Formation",
  },
  // Coaching
  {
    question: "Comment se préparer efficacement pour un entretien d'embauche?",
    answer: "Pour vous préparer efficacement à un entretien, recherchez l'entreprise et le poste en profondeur, préparez des réponses aux questions courantes, entraînez-vous avec des simulations d'entretien, préparez des questions pertinentes à poser, planifiez votre tenue professionnelle, et arrivez en avance. Notre service de coaching pour entretiens peut vous aider à développer votre confiance et vos compétences en entretien.",
    category: "Coaching",
  },
  {
    question: "Quels sont les avantages du coaching professionnel?",
    answer: "Le coaching professionnel offre de nombreux avantages, notamment: un regard extérieur objectif sur votre situation, des stratégies personnalisées pour atteindre vos objectifs, un soutien pour surmonter les obstacles, une amélioration de la confiance en soi, le développement de nouvelles compétences, et une meilleure gestion du stress. Nos coachs certifiés vous accompagnent dans votre développement personnel et professionnel.",
    category: "Coaching",
  },
  // Orientation
  {
    question: "Comment identifier le domaine professionnel qui me correspond le mieux?",
    answer: "Pour identifier le domaine professionnel qui vous correspond, analysez vos centres d'intérêt, vos valeurs et vos compétences naturelles, explorez différents secteurs d'activité, échangez avec des professionnels, envisagez de faire des stages ou du bénévolat pour tester différents environnements, et considérez un bilan de compétences. Nos conseillers en orientation vous guideront dans cette réflexion.",
    category: "Orientation",
  },
  {
    question: "Qu'est-ce qu'un bilan de compétences et comment se déroule-t-il?",
    answer: "Un bilan de compétences est une démarche qui permet d'analyser vos compétences professionnelles et personnelles, vos aptitudes et motivations pour définir un projet professionnel. Il se déroule généralement en trois phases: une phase préliminaire pour définir vos besoins, une phase d'investigation pour analyser vos motivations et compétences, et une phase de conclusion qui synthétise les résultats et établit un plan d'action.",
    category: "Orientation",
  },
  // Recrutement
  {
    question: "Comment trouver des offres d'emploi qui correspondent à mon profil?",
    answer: "Pour trouver des offres d'emploi adaptées à votre profil, utilisez des plateformes spécialisées dans votre secteur, activez votre réseau professionnel, suivez les entreprises qui vous intéressent sur les réseaux sociaux, inscrivez-vous auprès d'agences de recrutement, participez à des salons de l'emploi, et personnalisez vos alertes emploi. Notre service de recrutement peut vous aider à cibler les opportunités les plus pertinentes.",
    category: "Recrutement",
  },
  {
    question: "Quels sont les secteurs qui recrutent le plus actuellement?",
    answer: "Les secteurs qui recrutent le plus actuellement incluent la technologie et l'informatique, la santé et les services médicaux, les énergies renouvelables, la cybersécurité, l'e-commerce, et l'intelligence artificielle. Cependant, les tendances varient selon les régions et évoluent constamment. Nos conseillers peuvent vous fournir des informations à jour sur les secteurs porteurs dans votre région cible.",
    category: "Recrutement",
  },
];

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group FAQ items by category
  const groupedFAQs = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  const categories = Object.keys(groupedFAQs);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trouvez des réponses aux questions les plus courantes sur nos services d'immigration, 
              de formation, de coaching et de recrutement.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category} className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-brand-600 mb-6">{category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {groupedFAQs[category].map((item, index) => (
                    <AccordionItem key={index} value={`item-${category}-${index}`} className="border rounded-lg p-2">
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-brand-600 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
