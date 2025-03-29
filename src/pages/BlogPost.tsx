import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  CalendarIcon, 
  Clock, 
  User, 
  ArrowLeft, 
  BookmarkPlus, 
  Share2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: string;
  sponsored?: boolean;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Les étapes essentielles pour réussir votre immigration au Canada",
    excerpt: "Découvrez les démarches administratives et les conseils pratiques pour faciliter votre installation au Canada.",
    category: "Immigration",
    author: "Marie Dubois",
    date: "12 juin 2023",
    readTime: "8 min",
    imageSrc: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800&auto=format&fit=crop",
    sponsored: true,
    content: `
      <h2>Préparer son projet d'immigration au Canada</h2>
      <p>L'immigration au Canada est un processus qui nécessite une préparation minutieuse et une bonne compréhension des différentes étapes à suivre. Que vous souhaitiez vous y installer pour des raisons professionnelles, familiales ou pour y étudier, il est essentiel de bien se renseigner sur les programmes d'immigration qui correspondent à votre situation.</p>
      
      <h3>Les programmes d'immigration fédéraux</h3>
      <p>Le Canada propose plusieurs programmes d'immigration fédéraux, notamment :</p>
      <ul>
        <li>Entrée express (Express Entry) - pour les travailleurs qualifiés</li>
        <li>Programme des travailleurs qualifiés</li>
        <li>Programme des métiers spécialisés</li>
        <li>Catégorie de l'expérience canadienne</li>
      </ul>
      
      <h3>Les programmes provinciaux</h3>
      <p>Chaque province canadienne dispose également de ses propres programmes d'immigration (PNP - Programme des Candidats des Provinces) avec des critères spécifiques. Ces programmes peuvent parfois être plus accessibles que les programmes fédéraux, en fonction de votre profil.</p>
      
      <h2>Les documents essentiels à préparer</h2>
      <p>La préparation des documents est une étape cruciale de votre processus d'immigration. Voici une liste non exhaustive des documents généralement demandés :</p>
      <ul>
        <li>Passeport valide</li>
        <li>Diplômes et relevés de notes</li>
        <li>Certificats de travail et références professionnelles</li>
        <li>Résultats de tests linguistiques (français et/ou anglais)</li>
        <li>Certificat de naissance</li>
        <li>Certificat de mariage (si applicable)</li>
      </ul>
      
      <h2>Préparer son intégration</h2>
      <p>Au-delà des démarches administratives, il est important de préparer son intégration au Canada :</p>
      <ul>
        <li>Renseignez-vous sur le coût de la vie dans la région où vous souhaitez vous installer</li>
        <li>Informez-vous sur le marché du travail et les opportunités professionnelles</li>
        <li>Préparez-vous au climat canadien, particulièrement rigoureux en hiver</li>
        <li>Familiarisez-vous avec la culture et les coutumes canadiennes</li>
      </ul>
      
      <h2>L'importance d'être bien accompagné</h2>
      <p>Face à la complexité des démarches d'immigration, faire appel à des professionnels peut considérablement faciliter votre parcours. Nos consultants en immigration sont là pour vous guider à chaque étape, de l'évaluation de votre éligibilité à la préparation de votre dossier.</p>
    `,
  },
  {
    id: "2",
    title: "Comment créer un CV qui retient l'attention des recruteurs",
    excerpt: "Les techniques et astuces pour rédiger un CV professionnel qui se démarque dans la pile des candidatures.",
    category: "Formation",
    author: "Thomas Martin",
    date: "24 mai 2023",
    readTime: "6 min",
    imageSrc: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Structurer efficacement son CV</h2>
      <p>Un CV bien structuré est la première étape pour retenir l'attention des recruteurs. Voici quelques conseils pour organiser votre CV de manière efficace :</p>
      
      <h3>Les sections essentielles</h3>
      <ul>
        <li><strong>En-tête</strong> : Nom, coordonnées, profil LinkedIn</li>
        <li><strong>Résumé professionnel</strong> : Une brève présentation de votre profil et de vos objectifs</li>
        <li><strong>Expériences professionnelles</strong> : Présentées par ordre chronologique inversé</li>
        <li><strong>Formation</strong> : Diplômes et certifications pertinentes</li>
        <li><strong>Compétences</strong> : Techniques et transversales</li>
        <li><strong>Langues</strong> : Niveau de maîtrise pour chaque langue</li>
      </ul>
      
      <h2>Adapter son CV au marché canadien</h2>
      <p>Le marché du travail canadien a ses spécificités. Voici quelques éléments à prendre en compte :</p>
      <ul>
        <li>Privilégiez un format simple et professionnel</li>
        <li>Évitez d'inclure une photo, votre âge ou votre situation familiale</li>
        <li>Mettez en avant vos accomplissements plutôt que vos responsabilités</li>
        <li>Quantifiez vos réalisations avec des chiffres et des pourcentages</li>
        <li>Adaptez votre vocabulaire au contexte nord-américain</li>
      </ul>
      
      <h2>Mettre en valeur vos compétences</h2>
      <p>Pour vous démarquer, il est essentiel de mettre en avant les compétences recherchées par les employeurs :</p>
      <ul>
        <li>Identifiez les mots-clés pertinents pour votre secteur</li>
        <li>Personnalisez votre CV pour chaque offre d'emploi</li>
        <li>Illustrez vos compétences par des exemples concrets</li>
        <li>N'hésitez pas à mentionner vos soft skills (communication, travail d'équipe, etc.)</li>
      </ul>
      
      <h2>Les erreurs à éviter</h2>
      <p>Certaines erreurs peuvent rapidement disqualifier votre candidature :</p>
      <ul>
        <li>Fautes d'orthographe et de grammaire</li>
        <li>CV trop long (idéalement 1-2 pages)</li>
        <li>Informations obsolètes ou non pertinentes</li>
        <li>Design trop chargé ou peu professionnel</li>
        <li>Absence de personnalisation par rapport au poste visé</li>
      </ul>
    `,
  },
  {
    id: "3",
    title: "Préparer efficacement un entretien d'embauche : les erreurs à éviter",
    excerpt: "Les pièges classiques et les stratégies pour les éviter lors de vos entretiens professionnels.",
    category: "Coaching",
    author: "Sophie Bernard",
    date: "5 avril 2023",
    readTime: "5 min",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Comment se préparer avant l'entretien</h2>
      <p>La préparation est la clé d'un entretien réussi. Voici les étapes essentielles :</p>
      
      <h3>Recherchez l'entreprise</h3>
      <p>Prenez le temps de vous renseigner sur l'entreprise :</p>
      <ul>
        <li>Son histoire, sa mission et ses valeurs</li>
        <li>Ses produits ou services</li>
        <li>Ses actualités récentes et ses projets</li>
        <li>Sa culture d'entreprise</li>
      </ul>
      
      <h3>Analysez le poste</h3>
      <p>Décortiquez l'offre d'emploi pour comprendre :</p>
      <ul>
        <li>Les compétences et qualifications requises</li>
        <li>Les responsabilités principales</li>
        <li>Les défis potentiels liés au poste</li>
      </ul>
      
      <h2>Pendant l'entretien : les erreurs à éviter</h2>
      
      <h3>Erreur n°1 : Arriver en retard ou trop tôt</h3>
      <p>Arriver en retard donne une impression de négligence, mais arriver trop en avance peut également mettre le recruteur dans une position inconfortable. Visez 5 à 10 minutes avant l'heure prévue.</p>
      
      <h3>Erreur n°2 : Négliger son apparence</h3>
      <p>Votre présentation doit être adaptée à la culture de l'entreprise. En cas de doute, optez pour une tenue professionnelle classique.</p>
      
      <h3>Erreur n°3 : Parler négativement de vos anciens employeurs</h3>
      <p>Même si vos expériences passées ont été difficiles, restez professionnel et concentrez-vous sur les apprentissages que vous en avez tirés.</p>
      
      <h3>Erreur n°4 : Ne pas préparer de questions</h3>
      <p>Avoir des questions pertinentes à poser montre votre intérêt pour le poste et l'entreprise. Préparez-en au moins 3 ou 4.</p>
      
      <h2>Après l'entretien</h2>
      <p>L'entretien ne s'arrête pas lorsque vous quittez la pièce :</p>
      <ul>
        <li>Envoyez un email de remerciement dans les 24 heures</li>
        <li>Faites un suivi si vous n'avez pas de nouvelles après une semaine</li>
        <li>Analysez votre performance pour vous améliorer</li>
      </ul>
    `,
  },
  {
    id: "4",
    title: "Les tendances du marché de l'emploi en 2023",
    excerpt: "Analyse des secteurs porteurs et des compétences les plus recherchées par les recruteurs cette année.",
    category: "Recrutement",
    author: "Pierre Leroy",
    date: "18 mars 2023",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    sponsored: true,
    content: `
      <h2>L'évolution du marché du travail canadien</h2>
      <p>Le marché de l'emploi au Canada connaît actuellement de profondes transformations, influencées par plusieurs facteurs :</p>
      <ul>
        <li>Avancées technologiques et numérisation</li>
        <li>Transition écologique</li>
        <li>Évolution démographique et pénurie de main-d'œuvre</li>
        <li>Nouvelles attentes des employés post-pandémie</li>
      </ul>
      
      <h2>Les secteurs les plus dynamiques en 2023</h2>
      
      <h3>1. Technologies de l'information</h3>
      <p>Le secteur IT continue sa forte croissance avec des besoins particuliers dans :</p>
      <ul>
        <li>Cybersécurité</li>
        <li>Intelligence artificielle et machine learning</li>
        <li>Développement de logiciels</li>
        <li>Cloud computing</li>
      </ul>
      
      <h3>2. Santé et services sociaux</h3>
      <p>Avec une population vieillissante, ce secteur recrute massivement :</p>
      <ul>
        <li>Infirmiers et infirmières</li>
        <li>Médecins spécialistes</li>
        <li>Préposés aux bénéficiaires</li>
        <li>Professionnels en santé mentale</li>
      </ul>
      
      <h3>3. Construction et infrastructures</h3>
      <p>Les projets d'infrastructure et la pénurie de logements stimulent ce secteur :</p>
      <ul>
        <li>Ingénieurs civils</li>
        <li>Électriciens et plombiers</li>
        <li>Gestionnaires de projets</li>
        <li>Architectes</li>
      </ul>
      
      <h2>Les compétences les plus recherchées</h2>
      <p>Au-delà des compétences techniques propres à chaque métier, certaines aptitudes sont particulièrement valorisées :</p>
      <ul>
        <li><strong>Compétences numériques</strong> : maîtrise des outils digitaux, analyse de données</li>
        <li><strong>Adaptabilité et résilience</strong> : capacité à s'ajuster aux changements</li>
        <li><strong>Intelligence émotionnelle</strong> : empathie, communication efficace</li>
        <li><strong>Résolution de problèmes complexes</strong> : pensée critique et créative</li>
        <li><strong>Bilinguisme</strong> : français et anglais, un atout majeur au Canada</li>
      </ul>
    `,
  },
  {
    id: "5",
    title: "Comment définir votre projet professionnel : guide pratique",
    excerpt: "Les étapes clés pour identifier vos aspirations et construire un parcours professionnel qui vous correspond.",
    category: "Orientation",
    author: "Claire Dumas",
    date: "2 février 2023",
    readTime: "9 min",
    imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Pourquoi définir un projet professionnel ?</h2>
      <p>Un projet professionnel bien défini permet de :</p>
      <ul>
        <li>Donner du sens à votre parcours</li>
        <li>Fixer des objectifs clairs et réalisables</li>
        <li>Identifier les étapes et ressources nécessaires</li>
        <li>Augmenter votre motivation et persévérance</li>
        <li>Faciliter votre recherche d'emploi ou reconversion</li>
      </ul>
      
      <h2>Les étapes pour construire votre projet professionnel</h2>
      
      <h3>Étape 1 : L'auto-évaluation</h3>
      <p>Commencez par faire le point sur :</p>
      <ul>
        <li>Vos compétences et savoir-faire</li>
        <li>Vos valeurs et ce qui vous motive</li>
        <li>Vos traits de personnalité</li>
        <li>Vos intérêts et passions</li>
        <li>Vos réussites passées</li>
      </ul>
      
      <h3>Étape 2 : Explorer les possibilités</h3>
      <p>Une fois votre profil établi, explorez les opportunités :</p>
      <ul>
        <li>Recherchez des métiers en lien avec vos compétences et intérêts</li>
        <li>Analysez les tendances du marché du travail</li>
        <li>Rencontrez des professionnels (entretiens informatifs)</li>
        <li>Testez vos idées via des stages ou du bénévolat</li>
      </ul>
      
      <h3>Étape 3 : Définir vos objectifs</h3>
      <p>Formalisez votre projet avec des objectifs SMART :</p>
      <ul>
        <li><strong>S</strong>pécifiques</li>
        <li><strong>M</strong>esurables</li>
        <li><strong>A</strong>tteignables</li>
        <li><strong>R</strong>éalistes</li>
        <li><strong>T</strong>emporels (avec une échéance)</li>
      </ul>
      
      <h3>Étape 4 : Élaborer un plan d'action</h3>
      <p>Déterminez les actions concrètes à entreprendre :</p>
      <ul>
        <li>Formation ou études complémentaires</li>
        <li>Acquisition de nouvelles compétences</li>
        <li>Développement de votre réseau professionnel</li>
        <li>Stratégie de recherche d'emploi ou de création d'entreprise</li>
      </ul>
      
      <h2>Ajuster et faire évoluer votre projet</h2>
      <p>Un projet professionnel n'est jamais figé. Il évolue avec :</p>
      <ul>
        <li>Vos expériences et apprentissages</li>
        <li>Les opportunités qui se présentent</li>
        <li>L'évolution du marché du travail</li>
        <li>Vos priorités personnelles</li>
      </ul>
      
      <p>N'hésitez pas à le réévaluer régulièrement et à l'ajuster si nécessaire.</p>
    `,
  },
  {
    id: "6",
    title: "Les clés d'une intégration réussie dans un nouveau pays",
    excerpt: "Conseils pratiques pour s'adapter à une nouvelle culture et créer des liens dans votre pays d'accueil.",
    category: "Immigration",
    author: "Jean Moreau",
    date: "15 janvier 2023",
    readTime: "10 min",
    imageSrc: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop",
    content: `
      <h2>Les défis de l'adaptation culturelle</h2>
      <p>S'installer dans un nouveau pays implique de s'adapter à un environnement culturel différent. Ce processus d'adaptation comporte plusieurs phases :</p>
      
      <h3>La lune de miel</h3>
      <p>Les premières semaines sont souvent marquées par l'excitation et la découverte. Tout semble nouveau et fascinant.</p>
      
      <h3>Le choc culturel</h3>
      <p>Après quelque temps, les différences culturelles peuvent devenir source de frustration et d'incompréhension. C'est une phase normale qui peut se manifester par :</p>
      <ul>
        <li>Sentiment d'isolement ou de solitude</li>
        <li>Difficultés de communication</li>
        <li>Nostalgie du pays d'origine</li>
        <li>Fatigue émotionnelle</li>
      </ul>
      
      <h3>L'adaptation</h3>
      <p>Progressivement, vous développez des stratégies pour naviguer dans votre nouvel environnement :</p>
      <ul>
        <li>Meilleure compréhension des codes culturels</li>
        <li>Développement de nouvelles habitudes</li>
        <li>Construction d'un réseau social</li>
      </ul>
      
      <h3>L'intégration</h3>
      <p>La phase finale où vous vous sentez à l'aise dans votre pays d'accueil tout en conservant votre identité culturelle d'origine.</p>
      
      <h2>Conseils pratiques pour faciliter votre intégration</h2>
      
      <h3>Apprendre la langue</h3>
      <p>La maîtrise de la langue locale est essentielle pour :</p>
      <ul>
        <li>Faciliter les démarches administratives</li>
        <li>Améliorer vos perspectives d'emploi</li>
        <li>Créer des liens sociaux</li>
        <li>Comprendre la culture locale</li>
      </ul>
      
      <h3>Créer des liens sociaux</h3>
      <p>Pour développer votre réseau social :</p>
      <ul>
        <li>Participez à des activités communautaires</li>
        <li>Rejoignez des associations ou clubs</li>
        <li>Assistez à des événements culturels</li>
        <li>Connectez-vous avec d'autres expatriés qui comprennent votre expérience</li>
      </ul>
      
      <h3>Comprendre le système local</h3>
      <p>Familiarisez-vous avec :</p>
      <ul>
        <li>Le système de santé</li>
        <li>Le système éducatif</li>
        <li>Les démarches administratives</li>
        <li>Les codes professionnels</li>
      </ul>
      
      <h3>Maintenir un équilibre</h3>
      <p>Trouvez un équilibre entre :</p>
      <ul>
        <li>S'ouvrir à la nouvelle culture</li>
        <li>Préserver des éléments de votre culture d'origine</li>
        <li>Prendre soin de votre santé mentale</li>
        <li>Rester en contact avec vos proches restés au pays</li>
      </ul>
    `,
  },
];

const RelatedPosts = ({ currentPostId, category }: { currentPostId: string, category: string }) => {
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6">Articles associés</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id} className="block h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-video">
                <img 
                  src={post.imageSrc} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-accent text-white">{post.category}</Badge>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const foundPost = blogPosts.find(post => post.id === id);
      
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate("/not-found");
      }
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="group">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-accent text-white">{post.category}</Badge>
              {post.sponsored && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Sponsorisé
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>
          </motion.div>

          <div className="rounded-xl overflow-hidden mb-8 shadow-md">
            <img 
              src={post.imageSrc} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex justify-end mb-8 space-x-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <BookmarkPlus size={16} className="mr-2" />
              Sauvegarder
            </Button>
            
            <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Share2 size={16} className="mr-2" />
                  Partager
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Partager cet article</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button variant="outline" className="flex items-center justify-center py-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center py-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Twitter
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center py-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 01 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                    YouTube
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center py-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.01-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.207-1.504.344-1.857.182-.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    Instagram
                  </Button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-2">Ou copiez le lien :</p>
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      value={window.location.href} 
                      readOnly
                      className="flex-grow px-3 py-2 border rounded-l-md text-sm bg-gray-50"
                    />
                    <Button 
                      className="rounded-l-none"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        setShareDialogOpen(false);
                      }}
                    >
                      Copier
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm p-8 mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </div>

          {post.sponsored && (
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 mb-12 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vous avez un projet d'immigration?</h3>
                  <p className="text-gray-600 mb-4">Nos consultants sont disponibles pour vous accompagner dans toutes vos démarches.</p>
                  <Button asChild>
                    <Link to="/contact">Prendre rendez-vous</Link>
                  </Button>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary shrink-0">Sponsorisé</Badge>
              </div>
            </div>
          )}

          <RelatedPosts currentPostId={post.id} category={post.category} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
