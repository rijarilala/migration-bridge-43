
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface BlogPost {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  category: string;
  date: string;
  image: string;
  sponsored: boolean;
  readTime: number;
  author?: string;
  featured?: boolean;
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "fr"; // Add fallback to prevent undefined
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated blog posts data with bilingual content inspired by africannetwork.ca
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: {
        fr: "Stratégies efficaces pour réussir votre immigration au Canada en 2023",
        en: "Effective Strategies to Succeed in Your Immigration to Canada in 2023"
      },
      excerpt: {
        fr: "Découvrez les derniers programmes d'immigration, les changements de politique et les conseils d'experts pour optimiser votre dossier et augmenter vos chances d'être accepté.",
        en: "Discover the latest immigration programs, policy changes, and expert advice to optimize your application and increase your chances of acceptance."
      },
      category: "Immigration",
      date: "12 juin 2023",
      image: "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: true,
      readTime: 8,
      author: "Marie Durand",
      featured: true
    },
    {
      id: "2",
      title: {
        fr: "Les 10 formations professionnelles les plus demandées au Canada cette année",
        en: "10 Most In-demand Professional Training Programs in Canada This Year"
      },
      excerpt: {
        fr: "Notre analyse détaillée du marché du travail canadien révèle les secteurs en pleine croissance et les compétences recherchées par les employeurs pour vous aider à orienter votre parcours professionnel.",
        en: "Our detailed analysis of the Canadian job market reveals growing sectors and skills sought by employers to help you guide your professional journey."
      },
      category: "Formation",
      date: "5 mai 2023",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 6,
      author: "Jean Lapointe"
    },
    {
      id: "3",
      title: {
        fr: "Guide complet pour créer un CV canadien qui se démarque en 2023",
        en: "Complete Guide to Creating a Standout Canadian Resume in 2023"
      },
      excerpt: {
        fr: "Apprenez à structurer votre CV selon les normes canadiennes, à mettre en valeur vos compétences transférables et à éviter les erreurs courantes qui peuvent vous coûter des opportunités d'emploi.",
        en: "Learn how to structure your resume according to Canadian standards, highlight your transferable skills, and avoid common mistakes that could cost you job opportunities."
      },
      category: "Coaching",
      date: "18 avril 2023",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 7,
      author: "Sophie Martin"
    },
    {
      id: "4",
      title: {
        fr: "Réussir comme professionnel francophone au Québec : opportunités et défis",
        en: "Succeeding as a French-speaking Professional in Quebec: Opportunities and Challenges"
      },
      excerpt: {
        fr: "Analyse des secteurs économiques prioritaires pour les francophones, avantages linguistiques sur le marché du travail québécois et témoignages de professionnels ayant réussi leur intégration.",
        en: "Analysis of priority economic sectors for French speakers, linguistic advantages in the Quebec job market, and testimonials from professionals who have successfully integrated."
      },
      category: "Recrutement",
      date: "29 mars 2023",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 5,
      author: "Philippe Tremblay"
    },
    {
      id: "5",
      title: {
        fr: "Comment développer un projet professionnel adapté au marché canadien",
        en: "How to Develop a Professional Project Adapted to the Canadian Market"
      },
      excerpt: {
        fr: "Découvrez une méthodologie en 5 étapes pour évaluer vos compétences, identifier les opportunités du marché et créer un plan d'action concret pour votre réussite professionnelle au Canada.",
        en: "Discover a 5-step methodology to assess your skills, identify market opportunities, and create a concrete action plan for your professional success in Canada."
      },
      category: "Orientation",
      date: "14 mars 2023",
      image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: true,
      readTime: 9,
      author: "Claire Dubois",
      featured: true
    },
    {
      id: "6",
      title: {
        fr: "Guide complet des programmes d'immigration pour entrepreneurs et investisseurs",
        en: "Complete Guide to Immigration Programs for Entrepreneurs and Investors"
      },
      excerpt: {
        fr: "Comparaison détaillée des différents programmes provinciaux et fédéraux, critères d'admissibilité, processus de demande et conseils pour maximiser vos chances de succès en tant qu'entrepreneur immigrant.",
        en: "Detailed comparison of various provincial and federal programs, eligibility criteria, application process, and tips to maximize your chances of success as an immigrant entrepreneur."
      },
      category: "Immigration",
      date: "2 mars 2023",
      image: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 10,
      author: "Claude Tremblay"
    },
    {
      id: "7",
      title: {
        fr: "Événements communautaires et réseautage professionnel pour nouveaux arrivants",
        en: "Community Events and Professional Networking for Newcomers"
      },
      excerpt: {
        fr: "Guide des meilleures opportunités de réseautage, associations professionnelles et événements communautaires pour élargir votre cercle social et professionnel au Canada.",
        en: "Guide to the best networking opportunities, professional associations, and community events to expand your social and professional circle in Canada."
      },
      category: "Intégration",
      date: "15 février 2023",
      image: "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 6,
      author: "Lisa Koné"
    }
  ];

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    // Check if language exists in title and excerpt
    const postTitle = post.title[currentLanguage as keyof typeof post.title] || "";
    const postExcerpt = post.excerpt[currentLanguage as keyof typeof post.excerpt] || "";
    
    const matchesSearch = 
      postTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
      postExcerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Featured Posts Section - Inspired by africannetwork.ca */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                {currentLanguage === 'fr' ? 'Articles à la une' : 'Featured Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link to={`/blog/${post.id}`} key={post.id} className="group">
                    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title[currentLanguage as keyof typeof post.title] || ""}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-brand-600">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <h2 className="text-2xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-brand-600 transition-colors duration-200">
                          {post.title[currentLanguage as keyof typeof post.title] || ""}
                        </h2>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {post.readTime} {t('blog.minuteRead')}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 flex-grow">
                          {post.excerpt[currentLanguage as keyof typeof post.excerpt] || ""}
                        </p>
                        
                        <div className="mt-auto">
                          <span className="text-brand-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            {t('blog.readMore')} <ArrowRight size={16} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="search"
                placeholder={t('blog.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                <Filter size={18} />
                {t('blog.filter')}
              </Button>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? t('blog.allCategories') : category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <article className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title[currentLanguage as keyof typeof post.title] || ""}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-brand-600">
                          {post.category}
                        </Badge>
                        {post.sponsored && (
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-800">
                            {t('blog.sponsored')}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {post.readTime} {t('blog.minuteRead')}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-brand-600 transition-colors duration-200">
                        {post.title[currentLanguage as keyof typeof post.title] || ""}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.excerpt[currentLanguage as keyof typeof post.excerpt] || ""}
                      </p>
                      
                      {post.author && (
                        <div className="text-sm text-gray-500 mb-3">
                          {currentLanguage === 'fr' ? 'Par' : 'By'}: {post.author}
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <span className="text-brand-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          {t('blog.readMore')} <ArrowRight size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('blog.noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
