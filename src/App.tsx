
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import PartnersProgram from "./pages/PartnersProgram";
import Index from "./pages/Index";
import Clients from "./pages/Clients";
import Contracts from "./pages/Contracts";
import Services from "./pages/Services";
import NPS from "./pages/NPS";
import LTVCAC from "./pages/LTVCAC";
import Strategies from "./pages/Strategies";
import Automation from "./pages/Automation";
import Reports from "./pages/Reports";
import Admin from "./pages/Admin";
import SuperAdmin from "./pages/SuperAdmin";
import Partners from "./pages/Partners";
import Campaigns from "./pages/Campaigns";
import PartnerPortalPage from "./pages/PartnerPortalPage";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering');
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/partners-program" element={<PartnersProgram />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/app" element={<Index />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/nps" element={<NPS />} />
              <Route path="/ltv-cac" element={<LTVCAC />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/super-admin" element={<SuperAdmin />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/partner-portal" element={<PartnerPortalPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
