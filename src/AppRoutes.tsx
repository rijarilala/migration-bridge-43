
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Testimonials from "./pages/Testimonials";

// Service Pages
import Immigration from "./pages/services/Immigration";
import Formation from "./pages/services/Formation";
import Coaching from "./pages/services/Coaching";
import Orientation from "./pages/services/Orientation";
import Recrutement from "./pages/services/Recrutement";

// Other Pages
import FAQ from "./pages/FAQ";
import About from "./pages/About";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/eligibility" 
        element={
          <ProtectedRoute>
            <Eligibility />
          </ProtectedRoute>
        } 
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/testimonials" element={<Testimonials />} />
      
      {/* Service Routes */}
      <Route path="/services/immigration" element={<Immigration />} />
      <Route path="/services/formation" element={<Formation />} />
      <Route path="/services/coaching" element={<Coaching />} />
      <Route path="/services/orientation" element={<Orientation />} />
      <Route path="/services/recrutement" element={<Recrutement />} />
      
      {/* Other Routes */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      
      {/* Legal Pages */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/sitemap" element={<Sitemap />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
