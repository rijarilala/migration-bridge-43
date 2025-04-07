
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/AuthContext";
import { motion } from "framer-motion";
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [isResetMode, setIsResetMode] = useState(false);
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword, currentUser } = useAuth();
  const navigate = useNavigate();

  // Rediriger si déjà connecté
  if (currentUser) {
    navigate('/services/orientation');
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    await signUpWithEmail(email, password);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword(resetEmail);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isResetMode ? "Réinitialiser le mot de passe" : "Connectez-vous"}
              </CardTitle>
              <CardDescription>
                {isResetMode
                  ? "Entrez votre email pour recevoir un lien de réinitialisation"
                  : "Connectez-vous pour accéder à tous nos services"}
              </CardDescription>
            </CardHeader>

            {!isResetMode ? (
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Connexion</TabsTrigger>
                    <TabsTrigger value="register">Inscription</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <Input 
                          id="login-email" 
                          type="email" 
                          placeholder="votre@email.com" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="login-password">Mot de passe</Label>
                          <button 
                            type="button"
                            onClick={() => setIsResetMode(true)} 
                            className="text-sm text-brand-600 hover:underline"
                          >
                            Mot de passe oublié?
                          </button>
                        </div>
                        <Input 
                          id="login-password" 
                          type="password" 
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full">Se connecter</Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="register">
                    <form onSubmit={handleSignup} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input 
                          id="register-email" 
                          type="email" 
                          placeholder="votre@email.com" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Mot de passe</Label>
                        <Input 
                          id="register-password" 
                          type="password" 
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-confirm-password">Confirmer le mot de passe</Label>
                        <Input 
                          id="register-confirm-password" 
                          type="password" 
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full">S'inscrire</Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white text-gray-500">Ou continuez avec</span>
                  </div>
                </div>

                <Button 
                  onClick={signInWithGoogle} 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <FaGoogle className="h-4 w-4" />
                  <span>Google</span>
                </Button>
              </CardContent>
            ) : (
              <CardContent>
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <Input 
                      id="reset-email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">Envoyer le lien de réinitialisation</Button>
                </form>
              </CardContent>
            )}

            <CardFooter>
              {isResetMode && (
                <Button 
                  variant="ghost" 
                  className="w-full" 
                  onClick={() => setIsResetMode(false)}
                >
                  Retour à la connexion
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
