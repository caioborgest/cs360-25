
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { useOnboarding } from './OnboardingProvider';
import { 
  Trophy, 
  Star, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Crown,
  Gift,
  Sparkles,
  Target
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const { 
    currentStep, 
    steps, 
    totalXP, 
    completedSteps, 
    requiredStepsCompleted,
    isPlanUnlocked,
    completeStep,
    goToStep,
    skipToNext
  } = useOnboarding();

  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const currentStepData = steps[currentStep];
  const progressPercentage = (completedSteps / steps.length) * 100;
  const requiredSteps = steps.filter(step => step.isRequired);
  const requiredProgress = (requiredStepsCompleted / requiredSteps.length) * 100;

  // Timer functionality
  useEffect(() => {
    if (currentStepData && isTimerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isTimerActive, currentStepData]);

  useEffect(() => {
    if (currentStepData && isOpen) {
      setTimeLeft(currentStepData.estimatedTime * 60);
      setIsTimerActive(true);
    }
  }, [currentStep, currentStepData, isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStepComplete = () => {
    if (currentStepData) {
      completeStep(currentStepData.id);
      setIsTimerActive(false);
    }
  };

  const getXPLevel = (xp: number) => {
    if (xp >= 200) return { level: 'Master', icon: Crown, color: 'text-purple-600' };
    if (xp >= 150) return { level: 'Expert', icon: Trophy, color: 'text-yellow-600' };
    if (xp >= 100) return { level: 'Advanced', icon: Star, color: 'text-blue-600' };
    if (xp >= 50) return { level: 'Intermediate', icon: Target, color: 'text-green-600' };
    return { level: 'Beginner', icon: Zap, color: 'text-gray-600' };
  };

  const { level, icon: LevelIcon, color } = getXPLevel(totalXP);

  if (!currentStepData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🎮 Onboarding CS360°
            </DialogTitle>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-2">
                <LevelIcon className={`w-4 h-4 ${color}`} />
                <span>{level}</span>
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <Star className="w-4 h-4 mr-1" />
                {totalXP} XP
              </Badge>
            </div>
          </div>
        </DialogHeader>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Progresso Geral</span>
              <span className="text-sm font-bold text-blue-600">{completedSteps}/{steps.length}</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Etapas Obrigatórias</span>
              <span className="text-sm font-bold text-green-600">{requiredStepsCompleted}/{requiredSteps.length}</span>
            </div>
            <Progress value={requiredProgress} className="h-2" />
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Status do Plano</span>
              {isPlanUnlocked ? (
                <Badge className="bg-green-500 text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Desbloqueado
                </Badge>
              ) : (
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  <Clock className="w-3 h-3 mr-1" />
                  Bloqueado
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <Badge className={currentStepData.isRequired ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                  {currentStepData.isRequired ? 'Obrigatória' : 'Opcional'}
                </Badge>
                <span className="text-sm text-gray-500">Etapa {currentStep + 1} de {steps.length}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{currentStepData.title}</h3>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                {formatTime(timeLeft)}
              </div>
              <span className="text-xs text-gray-500">Tempo restante</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <currentStepData.component onComplete={handleStepComplete} />
          </div>

          {/* XP Reward */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Gift className="w-4 h-4" />
              <span>Recompensa: +{currentStepData.xpReward} XP</span>
            </div>
            
            <div className="flex space-x-3">
              {!currentStepData.isRequired && (
                <Button variant="outline" onClick={skipToNext}>
                  Pular Etapa
                </Button>
              )}
              <Button 
                onClick={handleStepComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={currentStepData.isCompleted}
              >
                {currentStepData.isCompleted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Concluída
                  </>
                ) : (
                  <>
                    Concluir Etapa
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => goToStep(index)}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                index === currentStep 
                  ? 'border-blue-500 bg-blue-50' 
                  : step.isCompleted 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{step.title}</span>
                {step.isCompleted && <CheckCircle className="w-4 h-4 text-green-500" />}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${step.isRequired ? 'border-red-300 text-red-600' : 'border-blue-300 text-blue-600'}`}
                >
                  {step.isRequired ? 'Obrigatória' : 'Opcional'}
                </Badge>
                <span className="text-xs text-gray-500">+{step.xpReward} XP</span>
              </div>
            </button>
          ))}
        </div>

        {/* Completion Celebration */}
        {isPlanUnlocked && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-2">🎉 Parabéns! Plano Desbloqueado!</h3>
            <p className="mb-4">Você completou todas as etapas obrigatórias e está pronto para escalar com o CS360°</p>
            <Button 
              onClick={onClose}
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Começar a Usar a Plataforma
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
