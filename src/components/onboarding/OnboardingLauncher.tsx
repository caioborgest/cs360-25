
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { OnboardingModal } from './OnboardingModal';
import { OnboardingProvider } from './OnboardingProvider';
import { WelcomeStep } from './steps/WelcomeStep';
import { CompanySetupStep } from './steps/CompanySetupStep';
import { UsersSetupStep } from './steps/UsersSetupStep';
import { PlanSetupStep } from './steps/PlanSetupStep';
import { SystemSetupStep } from './steps/SystemSetupStep';
import { 
  Rocket, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Star,
  X
} from 'lucide-react';

const onboardingSteps = [
  {
    id: 'welcome',
    title: 'Boas-vindas e Introdução',
    description: 'Conheça a plataforma CS360° em 1 minuto',
    isRequired: true,
    isCompleted: false,
    xpReward: 10,
    estimatedTime: 3,
    component: WelcomeStep
  },
  {
    id: 'company-setup',
    title: 'Configuração da Empresa',
    description: 'Configure nome, logo, setor e fuso horário',
    isRequired: true,
    isCompleted: false,
    xpReward: 20,
    estimatedTime: 4,
    component: CompanySetupStep
  },
  {
    id: 'users-setup',
    title: 'Usuários e Permissões',
    description: 'Adicione usuários e defina cargos',
    isRequired: true,
    isCompleted: false,
    xpReward: 25,
    estimatedTime: 5,
    component: UsersSetupStep
  },
  {
    id: 'plan-setup',
    title: 'Plano e Pagamento',
    description: 'Escolha o plano e configure pagamento',
    isRequired: true,
    isCompleted: false,
    xpReward: 30,
    estimatedTime: 3,
    component: PlanSetupStep
  },
  {
    id: 'system-setup',
    title: 'Configurações do Sistema',
    description: 'Ajuste idioma e integrações principais',
    isRequired: true,
    isCompleted: false,
    xpReward: 15,
    estimatedTime: 4,
    component: SystemSetupStep
  }
];

export const OnboardingLauncher: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showReminder, setShowReminder] = useState(false);

  // Check if onboarding should be shown
  useEffect(() => {
    const dismissed = localStorage.getItem('cs360-onboarding-dismissed');
    const progress = localStorage.getItem('cs360-onboarding-progress');
    
    setIsDismissed(dismissed === 'true');
    
    if (!dismissed && !progress) {
      // First time user - show modal after 2 seconds
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (progress && !dismissed) {
      // Returning user with incomplete onboarding
      setShowReminder(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setShowReminder(false);
    localStorage.setItem('cs360-onboarding-dismissed', 'true');
  };

  const handleStartOnboarding = () => {
    setIsModalOpen(true);
    setShowReminder(false);
  };

  if (isDismissed && !showReminder) return null;

  return (
    <OnboardingProvider steps={onboardingSteps}>
      {/* Reminder Card */}
      {showReminder && (
        <Card className="fixed bottom-6 right-6 w-80 z-50 shadow-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Continue seu onboarding</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDismiss}
                className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">
              Complete as etapas restantes para desbloquear seu plano e começar a usar o CS360°.
            </p>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleStartOnboarding}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm"
              >
                Continuar
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDismiss}
                className="text-sm"
              >
                Mais tarde
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Onboarding Modal */}
      <OnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </OnboardingProvider>
  );
};
