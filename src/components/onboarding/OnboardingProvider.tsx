
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  isRequired: boolean;
  isCompleted: boolean;
  xpReward: number;
  estimatedTime: number; // in minutes
  component: React.ComponentType<any>;
}

interface OnboardingContextType {
  currentStep: number;
  steps: OnboardingStep[];
  totalXP: number;
  completedSteps: number;
  requiredStepsCompleted: number;
  isOnboardingComplete: boolean;
  isPlanUnlocked: boolean;
  completedStepIds: string[];
  completeStep: (stepId: string) => void;
  goToStep: (stepIndex: number) => void;
  skipToNext: () => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};

interface OnboardingProviderProps {
  children: React.ReactNode;
  steps: OnboardingStep[];
}

export const OnboardingProvider: React.FC<OnboardingProviderProps> = ({ children, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedStepIds, setCompletedStepIds] = useState<string[]>([]);
  const [totalXP, setTotalXP] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('cs360-onboarding-progress');
    if (savedProgress) {
      const { completedStepIds: saved, totalXP: savedXP, currentStep: savedStep } = JSON.parse(savedProgress);
      setCompletedStepIds(saved || []);
      setTotalXP(savedXP || 0);
      setCurrentStep(savedStep || 0);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('cs360-onboarding-progress', JSON.stringify({
      completedStepIds,
      totalXP,
      currentStep
    }));
  }, [completedStepIds, totalXP, currentStep]);

  const updatedSteps = steps.map(step => ({
    ...step,
    isCompleted: completedStepIds.includes(step.id)
  }));

  const completedSteps = completedStepIds.length;
  const requiredSteps = updatedSteps.filter(step => step.isRequired);
  const requiredStepsCompleted = requiredSteps.filter(step => step.isCompleted).length;
  const isOnboardingComplete = completedSteps === steps.length;
  const isPlanUnlocked = requiredStepsCompleted === requiredSteps.length;

  const completeStep = (stepId: string) => {
    if (!completedStepIds.includes(stepId)) {
      const step = steps.find(s => s.id === stepId);
      if (step) {
        setCompletedStepIds(prev => [...prev, stepId]);
        setTotalXP(prev => prev + step.xpReward);
        
        // Auto-advance to next uncompleted step
        const nextStep = updatedSteps.findIndex(s => !s.isCompleted && s.id !== stepId);
        if (nextStep !== -1) {
          setCurrentStep(nextStep);
        }
      }
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(Math.max(0, Math.min(stepIndex, steps.length - 1)));
  };

  const skipToNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const resetOnboarding = () => {
    setCompletedStepIds([]);
    setTotalXP(0);
    setCurrentStep(0);
    localStorage.removeItem('cs360-onboarding-progress');
  };

  return (
    <OnboardingContext.Provider value={{
      currentStep,
      steps: updatedSteps,
      totalXP,
      completedSteps,
      requiredStepsCompleted,
      isOnboardingComplete,
      isPlanUnlocked,
      completedStepIds,
      completeStep,
      goToStep,
      skipToNext,
      resetOnboarding
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};
