
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/Dashboard';
import { WelcomePage } from '@/components/WelcomePage';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Verificar se deve mostrar página de boas-vindas
    const lastWelcomeDate = localStorage.getItem('lastWelcomeDate');
    const today = new Date().toDateString();
    
    // Mostrar boas-vindas se:
    // 1. É administrador OU
    // 2. É o primeiro acesso do dia
    const isAdmin = profile?.plan_type === 'enterprise' || profile?.plan_type === 'premium';
    const isFirstAccessToday = lastWelcomeDate !== today;
    
    if (isAdmin || isFirstAccessToday) {
      setShowWelcome(true);
      localStorage.setItem('lastWelcomeDate', today);
    }
  }, [profile]);

  const handleContinueToDashboard = () => {
    setShowWelcome(false);
  };

  return (
    <Layout>
      {showWelcome ? (
        <div className="space-y-6">
          <WelcomePage />
          <div className="flex justify-center">
            <button
              onClick={handleContinueToDashboard}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Ir para Dashboard
            </button>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </Layout>
  );
};

export default Index;
