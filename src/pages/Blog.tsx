
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: string;
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
    imageSrc: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Comment créer un CV qui retient l'attention des recruteurs",
    excerpt: "Les techniques et astuces pour rédiger un CV professionnel qui se démarque dans la pile des candidatures.",
    category: "Formation",
    author: "Thomas Martin",
    date: "24 mai 2023",
    readTime: "6 min",
    imageSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Préparer efficacement un entretien d'embauche : les erreurs à éviter",
    excerpt: "Les pièges classiques et les stratégies pour les éviter lors de vos entretiens professionnels.",
    category: "Coaching",
    author: "Sophie Bernard",
    date: "5 avril 2023",
    readTime: "5 min",
    imageSrc: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Les tendances du marché de l'emploi en 2023",
    excerpt: "Analyse des secteurs porteurs et des compétences les plus recherchées par les recruteurs cette année.",
    category: "Recrutement",
    author: "Pierre Leroy",
    date: "18 mars 2023",
    readTime: "7 min",
    imageSrc: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Comment définir votre projet professionnel : guide pratique",
    excerpt: "Les étapes clés pour identifier vos aspirations et construire un parcours professionnel qui vous correspond.",
    category: "Orientation",
    author: "Claire Dumas",
    date: "2 février 2023",
    readTime: "9 min",
    imageSrc: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Les clés d'une intégration réussie dans un nouveau pays",
    excerpt: "Conseils pratiques pour s'adapter à une nouvelle culture et créer des liens dans votre pays d'accueil.",
    category: "Immigration",
    author: "Jean Moreau",
    date: "15 janvier 2023",
    readTime: "10 min",
    imageSrc: "https://images.unsplash.com/photo-1546538994-4f15d0aa966f?q=80&w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos articles, guides et conseils pour vous aider dans vos démarches d'immigration, 
              de formation professionnelle et de recherche d'emploi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="hover-lift">
                <Card className="h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.imageSrc} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="text-sm text-brand-600 font-medium mb-1">{post.category}</div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 text-sm text-gray-500 flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
