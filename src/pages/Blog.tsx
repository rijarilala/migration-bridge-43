
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
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
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "fr"; // Add fallback to prevent undefined
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulated blog posts data with bilingual content
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: {
        fr: "Les étapes essentielles pour réussir votre immigration au Canada",
        en: "Essential Steps to Succeed in Your Immigration to Canada"
      },
      excerpt: {
        fr: "Découvrez comment optimiser vos chances de réussir votre projet d'immigration au Canada avec notre guide complet des étapes clés à suivre.",
        en: "Discover how to optimize your chances of succeeding in your immigration project to Canada with our comprehensive guide to key steps to follow."
      },
      category: "Immigration",
      date: "12 juin 2023",
      image: "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: true,
      readTime: 8
    },
    {
      id: "2",
      title: {
        fr: "Les formations les plus demandées au Canada en 2023",
        en: "Most In-demand Training Programs in Canada in 2023"
      },
      excerpt: {
        fr: "Analyse des formations et compétences les plus recherchées par les employeurs canadiens cette année pour maximiser vos chances d'emploi.",
        en: "Analysis of the training programs and skills most sought after by Canadian employers this year to maximize your employment opportunities."
      },
      category: "Formation",
      date: "5 mai 2023",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 6
    },
    {
      id: "3",
      title: {
        fr: "Comment adapter votre CV aux standards canadiens",
        en: "How to Adapt Your Resume to Canadian Standards"
      },
      excerpt: {
        fr: "Guide pratique pour transformer votre CV selon les attentes des recruteurs canadiens et augmenter vos chances de décrocher un entretien.",
        en: "Practical guide to transform your resume according to Canadian recruiters' expectations and increase your chances of landing an interview."
      },
      category: "Coaching",
      date: "18 avril 2023",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 7
    },
    {
      id: "4",
      title: {
        fr: "Les opportunités d'emploi au Québec pour les francophones",
        en: "Job Opportunities in Quebec for French Speakers"
      },
      excerpt: {
        fr: "Découvrez les secteurs qui recrutent activement les candidats francophones et comment tirer parti de votre maîtrise de la langue française au Québec.",
        en: "Discover sectors actively recruiting French-speaking candidates and how to leverage your French language proficiency in Quebec."
      },
      category: "Recrutement",
      date: "29 mars 2023",
      image: "https://images.unsplash.com/photo-1581256025319-23c56574f93a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 5
    },
    {
      id: "5",
      title: {
        fr: "Préparer votre projet professionnel pour le Canada",
        en: "Preparing Your Professional Project for Canada"
      },
      excerpt: {
        fr: "Méthodologie et conseils pour élaborer un projet professionnel cohérent et aligné avec le marché du travail canadien.",
        en: "Methodology and advice to develop a coherent professional project aligned with the Canadian job market."
      },
      category: "Orientation",
      date: "14 mars 2023",
      image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: true,
      readTime: 9
    },
    {
      id: "6",
      title: {
        fr: "Les programmes d'immigration pour entrepreneurs au Canada",
        en: "Immigration Programs for Entrepreneurs in Canada"
      },
      excerpt: {
        fr: "Tour d'horizon des programmes d'immigration spécifiquement conçus pour les entrepreneurs et les investisseurs souhaitant s'établir au Canada.",
        en: "Overview of immigration programs specifically designed for entrepreneurs and investors looking to settle in Canada."
      },
      category: "Immigration",
      date: "2 mars 2023",
      image: "https://images.unsplash.com/photo-1611251188684-fd906091773e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      sponsored: false,
      readTime: 10
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

  return (
    <section className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

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
                      <div className="text-sm text-gray-500 mb-2">
                        {post.date} • {post.readTime} {t('blog.minuteRead')}
                      </div>
                      
                      <h2 className="text-xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-brand-600 transition-colors duration-200">
                        {post.title[currentLanguage as keyof typeof post.title] || ""}
                      </h2>
                      
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
