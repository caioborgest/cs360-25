
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Save, 
  Eye, 
  Settings, 
  Palette, 
  MessageSquare, 
  Users,
  Plus,
  Trash2,
  Edit3
} from 'lucide-react';

interface NPSFormConfig {
  id: string;
  title: string;
  description: string;
  followUpQuestions: {
    promoter: string;
    passive: string;
    detractor: string;
  };
  design: {
    primaryColor: string;
    backgroundColor: string;
    borderRadius: string;
    fontSize: string;
  };
  settings: {
    isAnonymous: boolean;
    collectEmail: boolean;
    showClientInfo: boolean;
    enableFollowUp: boolean;
    requireFeedback: boolean;
  };
  customFields: Array<{
    id: string;
    label: string;
    type: 'text' | 'textarea' | 'select' | 'checkbox';
    required: boolean;
    options?: string[];
  }>;
}

interface NPSFormEditorProps {
  isOpen: boolean;
  onClose: () => void;
  formConfig?: NPSFormConfig;
  onSave: (config: NPSFormConfig) => void;
}

const defaultConfig: NPSFormConfig = {
  id: '',
  title: 'Como você avalia nossa solução?',
  description: 'Em uma escala de 0 a 10, o quanto você recomendaria o CS360° para um colega?',
  followUpQuestions: {
    promoter: 'Que bom! O que mais te agrada em nossa solução?',
    passive: 'Obrigado pelo feedback! O que poderíamos melhorar?',
    detractor: 'Sentimos muito. O que podemos fazer para melhorar sua experiência?'
  },
  design: {
    primaryColor: '#2563eb',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    fontSize: '16px'
  },
  settings: {
    isAnonymous: false,
    collectEmail: true,
    showClientInfo: true,
    enableFollowUp: true,
    requireFeedback: false
  },
  customFields: []
};

export const NPSFormEditor = ({ isOpen, onClose, formConfig, onSave }: NPSFormEditorProps) => {
  const [config, setConfig] = useState<NPSFormConfig>(formConfig || defaultConfig);
  const [activeTab, setActiveTab] = useState('content');
  const [previewMode, setPreviewMode] = useState(false);

  const handleSave = () => {
    const configToSave = {
      ...config,
      id: config.id || `nps-form-${Date.now()}`
    };
    onSave(configToSave);
    onClose();
  };

  const addCustomField = () => {
    const newField = {
      id: `field-${Date.now()}`,
      label: 'Novo Campo',
      type: 'text' as const,
      required: false,
      options: []
    };
    setConfig(prev => ({
      ...prev,
      customFields: [...prev.customFields, newField]
    }));
  };

  const removeCustomField = (fieldId: string) => {
    setConfig(prev => ({
      ...prev,
      customFields: prev.customFields.filter(field => field.id !== fieldId)
    }));
  };

  const updateCustomField = (fieldId: string, updates: Partial<typeof config.customFields[0]>) => {
    setConfig(prev => ({
      ...prev,
      customFields: prev.customFields.map(field =>
        field.id === fieldId ? { ...field, ...updates } : field
      )
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-slate-900 dark:text-white">
              Editor de Formulário NPS
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPreviewMode(!previewMode)}
                className="bg-white dark:bg-slate-700"
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? 'Editor' : 'Preview'}
              </Button>
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>
        </DialogHeader>

        {previewMode ? (
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
            <div className="max-w-2xl mx-auto">
              <Card 
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50"
                style={{ 
                  borderRadius: config.design.borderRadius,
                  backgroundColor: config.design.backgroundColor
                }}
              >
                <CardHeader className="text-center">
                  <CardTitle 
                    className="text-slate-900 dark:text-white"
                    style={{ 
                      fontSize: config.design.fontSize,
                      color: config.design.primaryColor
                    }}
                  >
                    {config.title}
                  </CardTitle>
                  <p className="text-slate-600 dark:text-slate-300">
                    {config.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Score Grid Preview */}
                    <div className="grid grid-cols-11 gap-2">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                        <div
                          key={score}
                          className="h-10 border border-slate-300 dark:border-slate-600 rounded flex items-center justify-center text-sm font-medium bg-white dark:bg-slate-700"
                          style={{ borderRadius: config.design.borderRadius }}
                        >
                          {score}
                        </div>
                      ))}
                    </div>
                    
                    {/* Custom Fields Preview */}
                    {config.customFields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label className="text-sm font-medium flex items-center gap-1">
                          {field.label}
                          {field.required && <span className="text-red-500">*</span>}
                        </Label>
                        {field.type === 'textarea' ? (
                          <Textarea placeholder={`Digite ${field.label.toLowerCase()}...`} />
                        ) : (
                          <Input placeholder={`Digite ${field.label.toLowerCase()}...`} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Conteúdo
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Design
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Configurações
              </TabsTrigger>
              <TabsTrigger value="fields" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Campos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Título Principal</Label>
                  <Input
                    id="title"
                    value={config.title}
                    onChange={(e) => setConfig(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-white dark:bg-slate-700"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={config.description}
                    onChange={(e) => setConfig(prev => ({ ...prev, description: e.target.value }))}
                    rows={2}
                    className="bg-white dark:bg-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold">Perguntas de Follow-up</Label>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Promotores
                      </Badge>
                      (9-10)
                    </Label>
                    <Textarea
                      value={config.followUpQuestions.promoter}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        followUpQuestions: { ...prev.followUpQuestions, promoter: e.target.value }
                      }))}
                      rows={3}
                      className="bg-white dark:bg-slate-700"
                    />
                  </div>

                  <div>
                    <Label className="text-sm flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                        Neutros
                      </Badge>
                      (7-8)
                    </Label>
                    <Textarea
                      value={config.followUpQuestions.passive}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        followUpQuestions: { ...prev.followUpQuestions, passive: e.target.value }
                      }))}
                      rows={3}
                      className="bg-white dark:bg-slate-700"
                    />
                  </div>

                  <div>
                    <Label className="text-sm flex items-center gap-2">
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        Detratores
                      </Badge>
                      (0-6)
                    </Label>
                    <Textarea
                      value={config.followUpQuestions.detractor}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        followUpQuestions: { ...prev.followUpQuestions, detractor: e.target.value }
                      }))}
                      rows={3}
                      className="bg-white dark:bg-slate-700"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="design" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="primaryColor">Cor Principal</Label>
                  <Input
                    id="primaryColor"
                    type="color"
                    value={config.design.primaryColor}
                    onChange={(e) => setConfig(prev => ({
                      ...prev,
                      design: { ...prev.design, primaryColor: e.target.value }
                    }))}
                    className="h-10 bg-white dark:bg-slate-700"
                  />
                </div>

                <div>
                  <Label htmlFor="backgroundColor">Cor de Fundo</Label>
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={config.design.backgroundColor}
                    onChange={(e) => setConfig(prev => ({
                      ...prev,
                      design: { ...prev.design, backgroundColor: e.target.value }
                    }))}
                    className="h-10 bg-white dark:bg-slate-700"
                  />
                </div>

                <div>
                  <Label htmlFor="borderRadius">Border Radius</Label>
                  <Input
                    id="borderRadius"
                    value={config.design.borderRadius}
                    onChange={(e) => setConfig(prev => ({
                      ...prev,
                      design: { ...prev.design, borderRadius: e.target.value }
                    }))}
                    placeholder="12px"
                    className="bg-white dark:bg-slate-700"
                  />
                </div>

                <div>
                  <Label htmlFor="fontSize">Tamanho da Fonte</Label>
                  <Input
                    id="fontSize"
                    value={config.design.fontSize}
                    onChange={(e) => setConfig(prev => ({
                      ...prev,
                      design: { ...prev.design, fontSize: e.target.value }
                    }))}
                    placeholder="16px"
                    className="bg-white dark:bg-slate-700"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(config.settings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                    <div>
                      <Label className="text-sm font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                      </Label>
                    </div>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => setConfig(prev => ({
                        ...prev,
                        settings: { ...prev.settings, [key]: checked }
                      }))}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fields" className="space-y-6">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Campos Personalizados</Label>
                <Button onClick={addCustomField} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Campo
                </Button>
              </div>

              <div className="space-y-4">
                {config.customFields.map((field, index) => (
                  <Card key={field.id} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                          <Label className="text-sm">Label do Campo</Label>
                          <Input
                            value={field.label}
                            onChange={(e) => updateCustomField(field.id, { label: e.target.value })}
                            className="bg-white dark:bg-slate-700"
                          />
                        </div>

                        <div>
                          <Label className="text-sm">Tipo</Label>
                          <select
                            value={field.type}
                            onChange={(e) => updateCustomField(field.id, { type: e.target.value as any })}
                            className="w-full h-10 px-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
                          >
                            <option value="text">Texto</option>
                            <option value="textarea">Texto Longo</option>
                            <option value="select">Seleção</option>
                            <option value="checkbox">Checkbox</option>
                          </select>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={field.required}
                            onCheckedChange={(checked) => updateCustomField(field.id, { required: checked })}
                          />
                          <Label className="text-sm">Obrigatório</Label>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeCustomField(field.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {config.customFields.length === 0 && (
                  <div className="text-center p-8 text-slate-500 dark:text-slate-400">
                    <Edit3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Nenhum campo personalizado adicionado ainda.</p>
                    <p className="text-sm">Clique em "Adicionar Campo" para começar.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};
