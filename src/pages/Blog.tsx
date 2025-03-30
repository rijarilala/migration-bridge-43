
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, User, ExternalLink, BookmarkPlus, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
}

const Blog = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: t('blog.posts.1.title'),
      excerpt: t('blog.posts.1.excerpt'),
      category: t('services.immigration'),
      author: t('blog.posts.1.author'),
      date: t('blog.posts.1.date'),
      readTime: t('blog.posts.1.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800&auto=format&fit=crop",
      sponsored: true,
    },
    {
      id: "2",
      title: t('blog.posts.2.title'),
      excerpt: t('blog.posts.2.excerpt'),
      category: t('services.training'),
      author: t('blog.posts.2.author'),
      date: t('blog.posts.2.date'),
      readTime: t('blog.posts.2.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "3",
      title: t('blog.posts.3.title'),
      excerpt: t('blog.posts.3.excerpt'),
      category: t('services.coaching'),
      author: t('blog.posts.3.author'),
      date: t('blog.posts.3.date'),
      readTime: t('blog.posts.3.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "4",
      title: t('blog.posts.4.title'),
      excerpt: t('blog.posts.4.excerpt'),
      category: t('services.recruitment'),
      author: t('blog.posts.4.author'),
      date: t('blog.posts.4.date'),
      readTime: t('blog.posts.4.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      sponsored: true,
    },
    {
      id: "5",
      title: t('blog.posts.5.title'),
      excerpt: t('blog.posts.5.excerpt'),
      category: t('services.professionalOrientation'),
      author: t('blog.posts.5.author'),
      date: t('blog.posts.5.date'),
      readTime: t('blog.posts.5.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "6",
      title: t('blog.posts.6.title'),
      excerpt: t('blog.posts.6.excerpt'),
      category: t('services.immigration'),
      author: t('blog.posts.6.author'),
      date: t('blog.posts.6.date'),
      readTime: t('blog.posts.6.readTime'),
      imageSrc: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // Featured blog post - we use the first one in the list
  const featuredPost = blogPosts[0];

  // Sponsored content section
  const SponsoredContent = () => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{t('blog.sponsored.title')}</h3>
        <Badge variant="outline" className="bg-blue-100 text-blue-800">{t('blog.sponsored.label')}</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{t('blog.sponsored.coaching')}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 pb-2">
            {t('blog.sponsored.coachingDesc')}
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/services/coaching">{t('blog.moreInfo')}</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{t('blog.sponsored.preparation')}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 pb-2">
            {t('blog.sponsored.preparationDesc')}
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/services/immigration">{t('blog.moreInfo')}</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{t('blog.sponsored.cv')}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 pb-2">
            {t('blog.sponsored.cvDesc')}
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/services/formation">{t('blog.moreInfo')}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('navigation.blog')} | MigraPro</title>
      </Helmet>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('blog.description')}
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">{t('blog.featured')}</span>
              <Badge className="bg-primary">{t('blog.recommended')}</Badge>
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-5 gap-6 bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="md:col-span-2 h-full">
                <img 
                  src={featuredPost.imageSrc} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6 flex flex-col">
                <div className="mb-2 flex items-center justify-between">
                  <Badge className="bg-accent text-white">{featuredPost.category}</Badge>
                  {featuredPost.sponsored && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      {t('blog.sponsored.label')}
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User size={14} className="mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <CalendarIcon size={14} className="mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.id}`}>
                      {t('blog.readArticle')}
                    </Link>
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" aria-label={t('blog.bookmarkAriaLabel')}>
                      <BookmarkPlus size={18} />
                    </Button>
                    <Button variant="outline" size="icon" aria-label={t('blog.shareAriaLabel')}>
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sponsored content */}
          <SponsoredContent />

          {/* Blog Posts Grid */}
          <h2 className="text-2xl font-bold mb-6">{t('blog.allArticles')}</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div key={post.id} variants={item}>
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group bg-white">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.imageSrc} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 left-3 z-10 flex gap-2">
                        <Badge className="bg-accent text-white">{post.category}</Badge>
                        {post.sponsored && (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            {t('blog.sponsored.label')}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 text-sm text-gray-500 flex flex-wrap gap-y-2 items-center justify-between">
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
                    <div className="px-4 pb-4 flex justify-between items-center">
                      <span className="text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        {t('blog.readArticle')} <ExternalLink size={14} className="ml-1" />
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label={t('blog.bookmarkAriaLabel')}>
                          <BookmarkPlus size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label={t('blog.shareAriaLabel')}>
                          <Share2 size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter subscription */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('blog.newsletter.title')}</h3>
            <p className="mb-6 max-w-2xl mx-auto">{t('blog.newsletter.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('blog.newsletter.placeholder')} 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
                aria-label={t('blog.newsletter.ariaLabel')}
              />
              <Button>{t('blog.newsletter.button')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
