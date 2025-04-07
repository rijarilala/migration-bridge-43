
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut, 
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { toast } from "sonner";

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Connexion réussie");
    } catch (error) {
      console.error("Erreur de connexion Google:", error);
      toast.error("Échec de la connexion avec Google");
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Connexion réussie");
    } catch (error) {
      console.error("Erreur de connexion par email:", error);
      toast.error("Identifiants incorrects");
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Compte créé avec succès");
    } catch (error) {
      console.error("Erreur de création de compte:", error);
      toast.error("Impossible de créer le compte");
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email de réinitialisation envoyé");
    } catch (error) {
      console.error("Erreur de réinitialisation:", error);
      toast.error("Échec de l'envoi de l'email");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Déconnexion réussie");
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
      toast.error("Échec de la déconnexion");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
