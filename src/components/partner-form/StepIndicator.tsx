
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, stepLabels }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                ${isActive ? 'bg-blue-600 text-white' : 
                  isCompleted ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}
              `}>
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span className={`mt-2 text-xs font-medium ${
                isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
              }`}>
                {label}
              </span>
              {index < totalSteps - 1 && (
                <div className={`h-0.5 w-full mt-5 ${
                  isCompleted ? 'bg-green-600' : 'bg-gray-200'
                }`} style={{ marginLeft: '50%', width: '100%', position: 'absolute', top: '20px', zIndex: -1 }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
