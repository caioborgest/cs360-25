
import { useState } from 'react';
import { format } from 'date-fns';
import { NPSSurveyFormData } from '../types/npsTypes';
import { emailTemplates } from '../NPSSurveyTemplates';
import { clientSegments } from '../NPSSurveySegments';
import { DEFAULT_FORM_DATA } from '../constants/npsConstants';

export const useNPSSurvey = () => {
  const [formData, setFormData] = useState<NPSSurveyFormData>(DEFAULT_FORM_DATA);
  const [currentStep, setCurrentStep] = useState(1);

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

  const prepareSubmitData = () => {
    const selectedTemplate = emailTemplates.find(t => t.id === formData.emailTemplate);
    const totalRecipients = getTotalRecipients();

    return {
      ...formData,
      emailSubject: formData.customSubject || selectedTemplate?.subject,
      emailContent: formData.customContent || selectedTemplate?.content,
      totalRecipients,
      scheduledDate: formData.scheduledDate ? format(formData.scheduledDate, 'yyyy-MM-dd') : '',
      expiryDate: formData.expiryDate ? format(formData.expiryDate, 'yyyy-MM-dd') : ''
    };
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const canProceed = () => {
    if (currentStep === 1) return formData.name.trim() !== '';
    if (currentStep === 2) return formData.selectedSegments.length > 0;
    return true;
  };

  return {
    formData,
    setFormData,
    currentStep,
    handleSegmentToggle,
    removeSegment,
    getTotalRecipients,
    prepareSubmitData,
    nextStep,
    prevStep,
    canProceed
  };
};
