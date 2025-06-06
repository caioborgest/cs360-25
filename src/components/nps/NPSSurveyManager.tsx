
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon, Mail, Users, Send, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';

interface NPSSurveyManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const emailTemplates = [
  {
    id: 'standard',
    name: 'Template Padrão',
    subject: 'Como você avalia nossa solução? Sua opinião é importante!',
    content: `Olá {CLIENTE_NOME},

Esperamos que esteja aproveitando ao máximo nossa solução CS360°.

Gostaríamos de saber como tem sido sua experiência conosco. Em uma escala de 0 a 10, o quanto você recomendaria nossa solução para um colega ou parceiro de negócios?

[ESCALA NPS 0-10]

Sua resposta nos ajuda a melhorar continuamente nossos serviços.

Obrigado pelo seu tempo!
Equipe CS360°`
  },
  {
    id: 'detailed',
    name: 'Template Detalhado',
    subject: 'Pesquisa de Satisfação CS360° - 2 minutos para nos ajudar',
    content: `Prezado(a) {CLIENTE_NOME},

Como parte do nosso compromisso com a excelência, gostaríamos de conhecer sua opinião sobre nossa solução.

1. Em uma escala de 0 a 10, o quanto você recomendaria o CS360° para outros profissionais?
[ESCALA NPS 0-10]

2. O que mais te agrada em nossa solução?
3. O que poderíamos melhorar?

Sua participação é fundamental para continuarmos evoluindo.

Atenciosamente,
Equipe CS360°`
  }
];

const clientSegments = [
  { id: 'all', name: 'Todos os Clientes', count: 247 },
  { id: 'enterprise', name: 'Enterprise', count: 89 },
  { id: 'growth', name: 'Growth', count: 96 },
  { id: 'professional', name: 'Professional', count: 62 },
  { id: 'new_clients', name: 'Clientes Novos (30 dias)', count: 23 },
  { id: 'long_term', name: 'Clientes Long-term (1+ ano)', count: 134 },
  { id: 'at_risk', name: 'Clientes em Risco', count: 18 }
];

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
    const totalRecipients = formData.selectedSegments.reduce((total, segmentId) => {
      const segment = clientSegments.find(s => s.id === segmentId);
      return total + (segment?.count || 0);
    }, 0);

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

  const selectedTemplate = emailTemplates.find(t => t.id === formData.emailTemplate);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Nova Pesquisa NPS
          </DialogTitle>
        </DialogHeader>

        <div className="mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`h-1 w-16 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Configuração</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Público</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Email & Agendamento</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Configuração da Pesquisa</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Nome da Pesquisa *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Pesquisa Trimestral Q3"
                    required
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData(prev => ({ ...prev, anonymous: e.target.checked }))}
                      className="rounded"
                    />
                    <Label htmlFor="anonymous" className="text-gray-700 dark:text-gray-300">Pesquisa Anônima</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Objetivo da pesquisa e observações"
                  rows={3}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Seleção do Público</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clientSegments.map((segment) => (
                  <div
                    key={segment.id}
                    className={cn(
                      "p-4 border rounded-lg cursor-pointer transition-colors",
                      formData.selectedSegments.includes(segment.id)
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                        : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-300"
                    )}
                    onClick={() => handleSegmentToggle(segment.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{segment.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{segment.count} clientes</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.selectedSegments.includes(segment.id)}
                        onChange={() => {}}
                        className="rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {formData.selectedSegments.length > 0 && (
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm text-gray-600 dark:text-gray-400">Segmentos Selecionados:</Label>
                    <Badge variant="outline" className="text-blue-600 dark:text-blue-400">
                      {getTotalRecipients()} destinatários
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedSegments.map((segmentId) => {
                      const segment = clientSegments.find(s => s.id === segmentId);
                      return segment ? (
                        <Badge key={segmentId} variant="secondary" className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                          {segment.name} ({segment.count})
                          <X
                            className="w-3 h-3 cursor-pointer hover:text-red-600"
                            onClick={() => removeSegment(segmentId)}
                          />
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email & Agendamento</h3>
              
              <div>
                <Label className="text-gray-700 dark:text-gray-300">Template de Email</Label>
                <Select value={formData.emailTemplate} onValueChange={(value) => setFormData(prev => ({ ...prev, emailTemplate: value }))}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    {emailTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-gray-700 dark:text-gray-300">Assunto (opcional)</Label>
                  <Input
                    value={formData.customSubject}
                    onChange={(e) => setFormData(prev => ({ ...prev, customSubject: e.target.value }))}
                    placeholder={selectedTemplate?.subject}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="reminderEnabled"
                      checked={formData.reminderEnabled}
                      onChange={(e) => setFormData(prev => ({ ...prev, reminderEnabled: e.target.checked }))}
                      className="rounded"
                    />
                    <Label htmlFor="reminderEnabled" className="text-gray-700 dark:text-gray-300">Lembrete automático</Label>
                  </div>
                  {formData.reminderEnabled && (
                    <Input
                      type="number"
                      value={formData.reminderDays}
                      onChange={(e) => setFormData(prev => ({ ...prev, reminderDays: parseInt(e.target.value) }))}
                      className="w-20 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      min="1"
                      max="30"
                    />
                  )}
                </div>
              </div>

              <div>
                <Label className="text-gray-700 dark:text-gray-300">Personalizar Conteúdo (opcional)</Label>
                <Textarea
                  value={formData.customContent}
                  onChange={(e) => setFormData(prev => ({ ...prev, customContent: e.target.value }))}
                  placeholder={selectedTemplate?.content}
                  rows={6}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-gray-700 dark:text-gray-300">Data de Envio</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                          !formData.scheduledDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.scheduledDate ? format(formData.scheduledDate, 'dd/MM/yyyy') : 'Selecionar data'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <Calendar
                        mode="single"
                        selected={formData.scheduledDate}
                        onSelect={(date) => setFormData(prev => ({ ...prev, scheduledDate: date || new Date() }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-gray-700 dark:text-gray-300">Data de Expiração</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600",
                          !formData.expiryDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.expiryDate ? format(formData.expiryDate, 'dd/MM/yyyy') : 'Sem expiração'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <Calendar
                        mode="single"
                        selected={formData.expiryDate}
                        onSelect={(date) => setFormData(prev => ({ ...prev, expiryDate: date }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          )}

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
