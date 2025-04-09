
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/AuthContext";
import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const LoginPage = () => {
  const { signInWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (currentUser) {
    navigate('/services/orientation');
    return null;
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb navigation like the Contact page */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary/80 hover:text-primary">
                  <Home size={16} className="mr-1" />
                  Accueil
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/login" className="text-primary font-medium">
                  Connexion
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-8">
            <span className="company-section-title">Espace membre</span>
            <h1 className="page-title flex flex-col items-center justify-center">
              Connectez-vous
              <span className="block mt-2 w-20 h-1 bg-accent mx-auto"></span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mt-6">
              Accédez à votre espace personnel pour bénéficier de nos services d'accompagnement.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border shadow-lg relative overflow-hidden">
              {/* Decorative top border like Contact form */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Connectez-vous
                </CardTitle>
                <CardDescription>
                  Connectez-vous pour accéder à tous nos services
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-4 pb-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2" 
                  onClick={handleGoogleSignIn}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continuer avec Google
                </Button>

                <p className="text-center text-sm text-gray-500 mt-6">
                  En vous connectant, vous acceptez nos <a href="/terms" className="text-brand-600 hover:underline">Conditions d'utilisation</a> et notre <a href="/privacy" className="text-brand-600 hover:underline">Politique de confidentialité</a>.
                </p>
              </CardContent>
              
              {/* Decorative elements like in Contact page */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
