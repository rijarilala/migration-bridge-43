
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AuthProvider } from "@/lib/AuthContext";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Loading component
const Loading = () => <div className="flex items-center justify-center min-h-screen">Chargement...</div>;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <AppContent />
            <Toaster />
            <Sonner />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Main app content component with language setting
const AppContent = () => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Set French as the default language if no preference is saved
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (!savedLanguage || (savedLanguage !== 'fr' && savedLanguage !== 'en')) {
      i18n.changeLanguage('fr');
    }
  }, [i18n]);

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <ScrollToTop />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
