
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';
import { ProtectedRoute } from '@/components/ProtectedRoute';

// Public Pages
import Landing from '@/pages/Landing';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import PartnersProgram from '@/pages/PartnersProgram';
import PartnerPortalWebsite from '@/pages/PartnerPortalWebsite';
import Auth from '@/pages/Auth';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// Protected Pages
import Index from '@/pages/Index';
import App from '@/pages/App';
import Summary from '@/pages/Summary';
import Clients from '@/pages/Clients';
import Contracts from '@/pages/Contracts';
import Services from '@/pages/Services';
import Goals from '@/pages/Goals';
import Reports from '@/pages/Reports';
import Strategies from '@/pages/Strategies';
import LTVCAC from '@/pages/LTVCAC';
import NPS from '@/pages/NPS';
import Admin from '@/pages/Admin';
import Profile from '@/pages/Profile';
import Automation from '@/pages/Automation';
import SuperAdmin from '@/pages/SuperAdmin';
import Partners from '@/pages/Partners';
import PartnerPortalPage from '@/pages/PartnerPortalPage';
import Campaigns from '@/pages/Campaigns';
import Onboarding from '@/pages/Onboarding';
import NotFound from '@/pages/NotFound';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function AppComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/partners-program" element={<PartnersProgram />} />
                <Route path="/partner-portal-website" element={<PartnerPortalWebsite />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes */}
                <Route path="/app" element={
                  <ProtectedRoute>
                    <App />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                } />
                <Route path="/resumo" element={
                  <ProtectedRoute>
                    <Summary />
                  </ProtectedRoute>
                } />
                <Route path="/clients" element={
                  <ProtectedRoute>
                    <Clients />
                  </ProtectedRoute>
                } />
                <Route path="/contracts" element={
                  <ProtectedRoute>
                    <Contracts />
                  </ProtectedRoute>
                } />
                <Route path="/services" element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                } />
                <Route path="/goals" element={
                  <ProtectedRoute>
                    <Goals />
                  </ProtectedRoute>
                } />
                <Route path="/reports" element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                } />
                <Route path="/strategies" element={
                  <ProtectedRoute>
                    <Strategies />
                  </ProtectedRoute>
                } />
                <Route path="/ltvcac" element={
                  <ProtectedRoute>
                    <LTVCAC />
                  </ProtectedRoute>
                } />
                <Route path="/nps" element={
                  <ProtectedRoute>
                    <NPS />
                  </ProtectedRoute>
                } />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/automation" element={
                  <ProtectedRoute>
                    <Automation />
                  </ProtectedRoute>
                } />
                <Route path="/super-admin" element={
                  <ProtectedRoute>
                    <SuperAdmin />
                  </ProtectedRoute>
                } />
                <Route path="/partners" element={
                  <ProtectedRoute>
                    <Partners />
                  </ProtectedRoute>
                } />
                <Route path="/partner-portal" element={
                  <ProtectedRoute>
                    <PartnerPortalPage />
                  </ProtectedRoute>
                } />
                <Route path="/campaigns" element={
                  <ProtectedRoute>
                    <Campaigns />
                  </ProtectedRoute>
                } />
                <Route path="/onboarding" element={
                  <ProtectedRoute>
                    <Onboarding />
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default AppComponent;
