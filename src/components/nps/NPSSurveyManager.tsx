
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Plus, Send } from 'lucide-react';
import { format } from 'date-fns';
import { NPSSurveySteps } from './NPSSurveySteps';
import { NPSSurveyConfigStep } from './NPSSurveyConfigStep';
import { NPSSurveyAudienceStep } from './NPSSurveyAudienceStep';
import { NPSSurveyEmailStep } from './NPSSurveyEmailStep';
import { emailTemplates } from './NPSSurveyTemplates';
import { clientSegments } from './NPSSurveySegments';

interface NPSSurveyManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export const NPSSurveyManager = ({ isOpen, onClose, onSubmit }: NPSSurveyManagerProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    selectedSegments: ['all'],
    emailTemplate: 'standard',
    customSubject: '',
    customContent: '',
    scheduledDate: new Date(),
    expiryDate: null as Date | null,
    reminderEnabled: true,
    reminderDays: 7,
    anonymous: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedTemplate = emailTemplates.find(t => t.id === formData.emailTemplate);
    const totalRecipients = getTotalRecipients();

    const submitData = {
      ...formData,
      emailSubject: formData.customSubject || selectedTemplate?.subject,
      emailContent: formData.customContent || selectedTemplate?.content,
      totalRecipients,
      scheduledDate: formData.scheduledDate ? format(formData.scheduledDate, 'yyyy-MM-dd') : '',
      expiryDate: formData.expiryDate ? format(formData.expiryDate, 'yyyy-MM-dd') : ''
    };

    onSubmit(submitData);
  };

  const handleSegmentToggle = (segmentId: string) => {
    setFormData(prev => {
      const newSegments = prev.selectedSegments.includes(segmentId)
        ? prev.selectedSegments.filter(id => id !== segmentId)
        : [...prev.selectedSegments, segmentId];
      
      return { ...prev, selectedSegments: newSegments };
    });
  };

  const removeSegment = (segmentId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSegments: prev.selectedSegments.filter(id => id !== segmentId)
    }));
  };

  const getTotalRecipients = () => {
    return formData.selectedSegments.reduce((total, segmentId) => {
      const segment = clientSegments.find(s => s.id === segmentId);
      return total + (segment?.count || 0);
    }, 0);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <NPSSurveyConfigStep formData={formData} setFormData={setFormData} />;
      case 2:
        return (
          <NPSSurveyAudienceStep
            selectedSegments={formData.selectedSegments}
            onSegmentToggle={handleSegmentToggle}
            onRemoveSegment={removeSegment}
            getTotalRecipients={getTotalRecipients}
          />
        );
      case 3:
        return <NPSSurveyEmailStep formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Nova Pesquisa NPS
          </DialogTitle>
        </DialogHeader>

        <NPSSurveySteps currentStep={currentStep} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderCurrentStep()}

          {/* Navigation and Action Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            <div>
              {currentStep > 1 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                >
                  Anterior
                </Button>
              )}
            </div>
            
            <div className="flex space-x-3">
              <Button type="button" variant="outline" onClick={onClose} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                Cancelar
              </Button>
              
              {currentStep < 3 ? (
                <Button 
                  type="button" 
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={currentStep === 1 && !formData.name}
                >
                  Próximo
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button 
                    type="submit" 
                    variant="outline"
                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Salvar Rascunho
                  </Button>
                  <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Pesquisa
                  </Button>
                </div>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
