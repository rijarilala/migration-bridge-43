
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface BlogContent {
  id: string;
  category: string;
  sponsored: boolean;
  coverImage: string;
  author: string;
  date: string;
  readTime: number;
  title: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Base de données simulée des articles de blog avec contenu bilingue
  const blogPosts: BlogContent[] = [
    {
      id: "1",
      category: "Immigration",
      sponsored: true,
      coverImage: "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Marie Dubois",
      date: "12 juin 2023",
      readTime: 8,
      title: {
        fr: "Les étapes essentielles pour réussir votre immigration au Canada",
        en: "Essential Steps to Succeed in Your Immigration to Canada"
      },
      content: {
        fr: `
        <p>L'immigration au Canada est un processus complexe mais accessible avec la bonne préparation. Voici un guide détaillé des étapes à suivre pour maximiser vos chances de succès.</p>

        <h2>1. Évaluer votre admissibilité</h2>
        <p>Avant toute démarche, vérifiez si vous êtes admissible aux différents programmes d'immigration canadiens. Entrée Express, Programme des travailleurs qualifiés du Québec (PSTQ), ou regroupement familial sont parmi les options les plus courantes. Utilisez notre outil d'évaluation d'éligibilité pour avoir une première idée de vos chances.</p>

        <h2>2. Choisir le bon programme d'immigration</h2>
        <p>En fonction de votre profil, certains programmes seront plus adaptés que d'autres :</p>
        <ul>
          <li>Entrée Express : pour les travailleurs qualifiés avec expérience professionnelle</li>
          <li>PSTQ : spécifique pour l'immigration au Québec</li>
          <li>Programme des candidats des provinces : si une province particulière vous intéresse</li>
          <li>Visa d'études ou permis de travail temporaire : peuvent être des portes d'entrée vers la résidence permanente</li>
        </ul>

        <h2>3. Préparer votre dossier</h2>
        <p>La qualité de votre dossier est déterminante. Rassemblez tous les documents nécessaires :</p>
        <ul>
          <li>Passeport valide</li>
          <li>Diplômes et équivalences</li>
          <li>Certificats de compétences linguistiques (français et/ou anglais)</li>
          <li>Preuves d'expérience professionnelle</li>
          <li>Certificat médical et extrait de casier judiciaire</li>
        </ul>

        <h2>4. Améliorer votre profil</h2>
        <p>Pour augmenter vos chances, travaillez sur les aspects suivants :</p>
        <ul>
          <li>Compétences linguistiques : passez des tests officiels comme l'IELTS ou le TEF</li>
          <li>Formation : complétez des certifications reconnues</li>
          <li>Expérience professionnelle : acquérez de l'expérience dans des secteurs en demande</li>
        </ul>

        <h2>5. Soumettre votre demande</h2>
        <p>Une fois votre dossier prêt, soumettez votre demande en suivant scrupuleusement les instructions. Les délais de traitement varient selon les programmes et peuvent prendre de quelques mois à plus d'un an.</p>

        <h2>6. Préparer votre installation</h2>
        <p>En attendant la réponse, commencez à préparer votre nouvelle vie :</p>
        <ul>
          <li>Recherche d'emploi</li>
          <li>Logement</li>
          <li>Écoles pour les enfants</li>
          <li>Assurance santé</li>
          <li>Budget d'installation</li>
        </ul>

        <h2>7. Obtenir le statut de résident permanent</h2>
        <p>Si votre demande est acceptée, vous recevrez la confirmation de résidence permanente. Vous devrez alors vous rendre au Canada pour finaliser le processus et obtenir votre carte de résident permanent.</p>

        <h2>Conclusion</h2>
        <p>L'immigration au Canada est un projet de vie qui demande patience et préparation. En suivant ces étapes et en vous faisant accompagner par des professionnels, vous maximiserez vos chances de réussite. Chez MigraPro, nous vous accompagnons à chaque étape pour concrétiser votre rêve canadien.</p>
        `,
        en: `
        <p>Immigration to Canada is a complex process but accessible with the right preparation. Here is a detailed guide of the steps to follow to maximize your chances of success.</p>

        <h2>1. Assess your eligibility</h2>
        <p>Before any procedure, check if you are eligible for the various Canadian immigration programs. Express Entry, Quebec Skilled Worker Program (QSWP), or family reunification are among the most common options. Use our eligibility assessment tool to get a first idea of your chances.</p>

        <h2>2. Choose the right immigration program</h2>
        <p>Depending on your profile, some programs will be more suitable than others:</p>
        <ul>
          <li>Express Entry: for skilled workers with professional experience</li>
          <li>QSWP: specific for immigration to Quebec</li>
          <li>Provincial Nominee Program: if a particular province interests you</li>
          <li>Study visa or temporary work permit: can be gateways to permanent residence</li>
        </ul>

        <h2>3. Prepare your application</h2>
        <p>The quality of your application is crucial. Gather all necessary documents:</p>
        <ul>
          <li>Valid passport</li>
          <li>Diplomas and equivalencies</li>
          <li>Language proficiency certificates (French and/or English)</li>
          <li>Proof of professional experience</li>
          <li>Medical certificate and criminal record extract</li>
        </ul>

        <h2>4. Improve your profile</h2>
        <p>To increase your chances, work on the following aspects:</p>
        <ul>
          <li>Language skills: take official tests such as IELTS or TEF</li>
          <li>Training: complete recognized certifications</li>
          <li>Professional experience: gain experience in in-demand sectors</li>
        </ul>

        <h2>5. Submit your application</h2>
        <p>Once your application is ready, submit it following the instructions carefully. Processing times vary depending on the programs and can take from a few months to more than a year.</p>

        <h2>6. Prepare your settlement</h2>
        <p>While waiting for the response, start preparing your new life:</p>
        <ul>
          <li>Job search</li>
          <li>Housing</li>
          <li>Schools for children</li>
          <li>Health insurance</li>
          <li>Settlement budget</li>
        </ul>

        <h2>7. Obtain permanent resident status</h2>
        <p>If your application is accepted, you will receive confirmation of permanent residence. You will then need to travel to Canada to finalize the process and obtain your permanent resident card.</p>

        <h2>Conclusion</h2>
        <p>Immigration to Canada is a life project that requires patience and preparation. By following these steps and being accompanied by professionals, you will maximize your chances of success. At MigraPro, we support you at every step to make your Canadian dream come true.</p>
        `
      }
    },
    {
      id: "2",
      category: "Formation",
      sponsored: false,
      coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Jean Tremblay",
      date: "5 mai 2023",
      readTime: 6,
      title: {
        fr: "Les formations les plus demandées au Canada en 2023",
        en: "Most In-demand Training Programs in Canada in 2023"
      },
      content: {
        fr: `
        <p>Le marché du travail canadien évolue constamment. Pour maximiser vos chances d'emploi, il est essentiel de se former dans des domaines porteurs. Découvrez les formations les plus recherchées cette année.</p>

        <h2>1. Technologie et développement informatique</h2>
        <p>Le secteur technologique continue sa forte croissance au Canada :</p>
        <ul>
          <li>Développement web et mobile</li>
          <li>Intelligence artificielle et apprentissage automatique</li>
          <li>Cybersécurité</li>
          <li>Science des données</li>
        </ul>
        <p>Des formations comme le DEC en informatique ou des bootcamps spécialisés offrent d'excellentes perspectives.</p>

        <h2>2. Soins de santé</h2>
        <p>La pandémie a renforcé les besoins dans ce secteur déjà en pénurie :</p>
        <ul>
          <li>Soins infirmiers</li>
          <li>Préposé aux bénéficiaires</li>
          <li>Physiothérapie et ergothérapie</li>
          <li>Technicien en pharmacie</li>
        </ul>

        <h2>3. Commerce et finance</h2>
        <p>Ces domaines offrent toujours de belles opportunités :</p>
        <ul>
          <li>Comptabilité et fiscalité canadienne</li>
          <li>Gestion de projet</li>
          <li>Analyse financière</li>
          <li>Marketing digital</li>
        </ul>

        <h2>4. Métiers spécialisés</h2>
        <p>Le Canada fait face à une pénurie importante dans les métiers manuels :</p>
        <ul>
          <li>Électricité et plomberie</li>
          <li>Soudure et usinage</li>
          <li>Construction et charpenterie</li>
          <li>Mécanique automobile</li>
        </ul>

        <h2>5. Environnement et énergies renouvelables</h2>
        <p>Secteur en pleine expansion avec la transition écologique :</p>
        <ul>
          <li>Techniques en environnement</li>
          <li>Installation de panneaux solaires</li>
          <li>Gestion des ressources hydriques</li>
          <li>Économie verte</li>
        </ul>

        <h2>Comment choisir sa formation ?</h2>
        <p>Pour faire un choix judicieux :</p>
        <ul>
          <li>Évaluez vos compétences actuelles et vos intérêts</li>
          <li>Renseignez-vous sur les perspectives d'emploi dans votre région d'installation</li>
          <li>Vérifiez la reconnaissance des diplômes et certifications</li>
          <li>Calculez le retour sur investissement (durée vs salaire potentiel)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Investir dans une formation adaptée au marché canadien est un facteur clé de réussite pour votre projet d'immigration. Chez MigraPro, nous vous accompagnons dans le choix de formations pertinentes et reconnues pour booster votre profil d'immigration et vos perspectives professionnelles au Canada.</p>
        `,
        en: `
        <p>The Canadian job market is constantly evolving. To maximize your employment opportunities, it's essential to train in promising fields. Discover the most sought-after training programs this year.</p>

        <h2>1. Technology and IT Development</h2>
        <p>The technology sector continues its strong growth in Canada:</p>
        <ul>
          <li>Web and mobile development</li>
          <li>Artificial intelligence and machine learning</li>
          <li>Cybersecurity</li>
          <li>Data science</li>
        </ul>
        <p>Programs such as DEC in Computer Science or specialized bootcamps offer excellent prospects.</p>

        <h2>2. Healthcare</h2>
        <p>The pandemic has reinforced needs in this already shortage-affected sector:</p>
        <ul>
          <li>Nursing</li>
          <li>Patient care attendant</li>
          <li>Physiotherapy and occupational therapy</li>
          <li>Pharmacy technician</li>
        </ul>

        <h2>3. Business and Finance</h2>
        <p>These fields always offer great opportunities:</p>
        <ul>
          <li>Canadian accounting and taxation</li>
          <li>Project management</li>
          <li>Financial analysis</li>
          <li>Digital marketing</li>
        </ul>

        <h2>4. Skilled Trades</h2>
        <p>Canada faces a significant shortage in manual trades:</p>
        <ul>
          <li>Electricity and plumbing</li>
          <li>Welding and machining</li>
          <li>Construction and carpentry</li>
          <li>Automotive mechanics</li>
        </ul>

        <h2>5. Environment and Renewable Energy</h2>
        <p>A rapidly expanding sector with the ecological transition:</p>
        <ul>
          <li>Environmental techniques</li>
          <li>Solar panel installation</li>
          <li>Water resource management</li>
          <li>Green economy</li>
        </ul>

        <h2>How to Choose Your Training?</h2>
        <p>To make a wise choice:</p>
        <ul>
          <li>Assess your current skills and interests</li>
          <li>Research employment prospects in your settlement region</li>
          <li>Verify the recognition of diplomas and certifications</li>
          <li>Calculate the return on investment (duration vs. potential salary)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Investing in training adapted to the Canadian market is a key success factor for your immigration project. At MigraPro, we assist you in choosing relevant and recognized training programs to boost your immigration profile and professional prospects in Canada.</p>
        `
      }
    },
    {
      id: "3",
      category: "Coaching",
      sponsored: false,
      coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Sophie Martin",
      date: "18 avril 2023",
      readTime: 7,
      title: {
        fr: "Comment adapter votre CV aux standards canadiens",
        en: "How to Adapt Your Resume to Canadian Standards"
      },
      content: {
        fr: `
        <p>Un CV adapté aux standards canadiens peut faire toute la différence dans votre recherche d'emploi. Voici nos conseils d'experts pour optimiser votre candidature.</p>

        <h2>Les différences essentielles avec un CV européen ou africain</h2>
        <p>Le CV canadien possède plusieurs spécificités :</p>
        <ul>
          <li>Absence de photo, d'âge et d'informations personnelles</li>
          <li>Format chronologique inversé (expériences les plus récentes en premier)</li>
          <li>Accent sur les réalisations plutôt que sur les responsabilités</li>
          <li>Longueur de 2 pages maximum</li>
        </ul>

        <h2>Structure optimale d'un CV canadien</h2>

        <h3>1. En-tête</h3>
        <p>Incluez uniquement :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email professionnelle</li>
          <li>Ville et province</li>
          <li>Lien LinkedIn (optionnel)</li>
        </ul>

        <h3>2. Profil professionnel</h3>
        <p>Rédigez un court paragraphe (3-4 lignes) résumant votre expertise, vos compétences clés et ce que vous pouvez apporter à l'employeur.</p>

        <h3>3. Compétences techniques</h3>
        <p>Listez vos compétences pertinentes pour le poste visé, en mettant l'accent sur :</p>
        <ul>
          <li>Compétences techniques spécifiques à votre domaine</li>
          <li>Maîtrise des logiciels</li>
          <li>Langues parlées et niveau (précisez si vous êtes bilingue anglais-français)</li>
        </ul>

        <h3>4. Expérience professionnelle</h3>
        <p>Pour chaque poste :</p>
        <ul>
          <li>Titre du poste</li>
          <li>Nom de l'entreprise et sa localisation</li>
          <li>Dates d'emploi (mois et année)</li>
          <li>3-5 réalisations concrètes avec résultats quantifiables</li>
        </ul>
        <p>Utilisez des verbes d'action au passé (développé, créé, augmenté).</p>

        <h3>5. Formation</h3>
        <p>Mentionnez :</p>
        <ul>
          <li>Diplôme obtenu</li>
          <li>Institution et localisation</li>
          <li>Année d'obtention</li>
        </ul>
        <p>Si votre diplôme étranger a été évalué, précisez l'équivalence canadienne.</p>

        <h3>6. Certifications et formations complémentaires</h3>
        <p>Ajoutez les certifications pertinentes, particulièrement celles reconnues au Canada.</p>

        <h2>Conseils pour maximiser l'impact de votre CV</h2>

        <h3>Personnalisation</h3>
        <p>Adaptez votre CV pour chaque offre d'emploi en mettant en avant les compétences requises dans l'annonce.</p>

        <h3>Mots-clés</h3>
        <p>Intégrez des mots-clés du secteur et de l'offre d'emploi pour passer les filtres des logiciels de recrutement (ATS).</p>

        <h3>Style et présentation</h3>
        <ul>
          <li>Utilisez une police lisible (Arial, Calibri, Times New Roman)</li>
          <li>Privilégiez une mise en page aérée</li>
          <li>Employez des puces pour faciliter la lecture</li>
          <li>Vérifiez l'orthographe minutieusement</li>
        </ul>

        <h3>Évitez</h3>
        <ul>
          <li>Le jargon spécifique à votre pays d'origine</li>
          <li>Les abréviations non expliquées</li>
          <li>Les informations obsolètes</li>
          <li>Les références (indiquez "références disponibles sur demande")</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Un CV adapté aux standards canadiens est votre premier pas vers l'emploi au Canada. Chez MigraPro, nos experts en coaching de carrière vous accompagnent pour optimiser votre CV et mettre toutes les chances de votre côté.</p>
        `,
        en: `
        <p>A resume adapted to Canadian standards can make all the difference in your job search. Here are our expert tips to optimize your application.</p>

        <h2>Essential Differences from European or African Resumes</h2>
        <p>Canadian resumes have several specific features:</p>
        <ul>
          <li>No photo, age, or personal information</li>
          <li>Reverse chronological format (most recent experiences first)</li>
          <li>Emphasis on achievements rather than responsibilities</li>
          <li>Maximum length of 2 pages</li>
        </ul>

        <h2>Optimal Structure of a Canadian Resume</h2>

        <h3>1. Header</h3>
        <p>Include only:</p>
        <ul>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Professional email address</li>
          <li>City and province</li>
          <li>LinkedIn link (optional)</li>
        </ul>

        <h3>2. Professional Profile</h3>
        <p>Write a short paragraph (3-4 lines) summarizing your expertise, key skills, and what you can bring to the employer.</p>

        <h3>3. Technical Skills</h3>
        <p>List your relevant skills for the targeted position, emphasizing:</p>
        <ul>
          <li>Technical skills specific to your field</li>
          <li>Software proficiency</li>
          <li>Languages spoken and level (specify if you are bilingual English-French)</li>
        </ul>

        <h3>4. Professional Experience</h3>
        <p>For each position:</p>
        <ul>
          <li>Job title</li>
          <li>Company name and location</li>
          <li>Employment dates (month and year)</li>
          <li>3-5 concrete achievements with quantifiable results</li>
        </ul>
        <p>Use action verbs in the past tense (developed, created, increased).</p>

        <h3>5. Education</h3>
        <p>Mention:</p>
        <ul>
          <li>Degree obtained</li>
          <li>Institution and location</li>
          <li>Year of completion</li>
        </ul>
        <p>If your foreign degree has been evaluated, specify the Canadian equivalence.</p>

        <h3>6. Certifications and Additional Training</h3>
        <p>Add relevant certifications, particularly those recognized in Canada.</p>

        <h2>Tips to Maximize the Impact of Your Resume</h2>

        <h3>Customization</h3>
        <p>Adapt your resume for each job opportunity by highlighting the skills required in the job posting.</p>

        <h3>Keywords</h3>
        <p>Incorporate industry and job posting keywords to pass through Applicant Tracking System (ATS) filters.</p>

        <h3>Style and Presentation</h3>
        <ul>
          <li>Use a readable font (Arial, Calibri, Times New Roman)</li>
          <li>Favor an airy layout</li>
          <li>Use bullet points to facilitate reading</li>
          <li>Check spelling meticulously</li>
        </ul>

        <h3>Avoid</h3>
        <ul>
          <li>Jargon specific to your country of origin</li>
          <li>Unexplained abbreviations</li>
          <li>Outdated information</li>
          <li>References (indicate "references available upon request")</li>
        </ul>

        <h2>Conclusion</h2>
        <p>A resume adapted to Canadian standards is your first step towards employment in Canada. At MigraPro, our career coaching experts will help you optimize your resume and maximize your chances of success.</p>
        `
      }
    }
  ];

  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">{t('blog.postNotFound')}</h1>
            <div className="flex justify-center">
              <Link to="/blog" className="text-brand-600 hover:text-brand-700 flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                {t('blog.backToBlog')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="text-brand-600 hover:text-brand-700 flex items-center mb-4">
              <ArrowLeft className="mr-2" size={16} />
              {t('blog.backToArticles')}
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
              {post.sponsored && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {t('blog.sponsored')}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              {currentLanguage === 'fr' ? post.title.fr : post.title.en}
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <div className="flex items-center mr-6">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6">
                <Clock size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} {t('blog.minuteRead')}</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <img 
              src={post.coverImage} 
              alt={currentLanguage === 'fr' ? post.title.fr : post.title.en}
              className="w-full h-auto rounded-lg shadow-md mb-8 object-cover aspect-video"
            />
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: currentLanguage === 'fr' ? post.content.fr : post.content.en 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
