
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { 
  Package, 
  DollarSign, 
  Clock, 
  Users, 
  Settings,
  Tag,
  FileText
} from 'lucide-react';

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  service?: any;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  service 
}) => {
  const [formData, setFormData] = useState({
    name: service?.name || '',
    description: service?.description || '',
    category: service?.category || '',
    type: service?.type || '',
    price: service?.price || '',
    billingCycle: service?.billingCycle || '',
    setupFee: service?.setupFee || '',
    features: service?.features || [],
    limitations: service?.limitations || '',
    supportLevel: service?.supportLevel || '',
    implementationTime: service?.implementationTime || '',
    minimumContract: service?.minimumContract || '',
    targetAudience: service?.targetAudience || '',
    integrations: service?.integrations || [],
    tags: service?.tags || [],
    isActive: service?.isActive || true,
    allowUpgrade: service?.allowUpgrade || true,
    allowDowngrade: service?.allowDowngrade || false,
    requiresApproval: service?.requiresApproval || false,
    maxUsers: service?.maxUsers || '',
    storageLimit: service?.storageLimit || '',
    apiCallsLimit: service?.apiCallsLimit || '',
    notes: service?.notes || ''
  });

  const [newFeature, setNewFeature] = useState('');
  const [newIntegration, setNewIntegration] = useState('');
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addIntegration = () => {
    if (newIntegration.trim()) {
      setFormData(prev => ({
        ...prev,
        integrations: [...prev.integrations, newIntegration.trim()]
      }));
      setNewIntegration('');
    }
  };

  const removeIntegration = (index: number) => {
    setFormData(prev => ({
      ...prev,
      integrations: prev.integrations.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Package className="w-6 h-6" />
            {service ? 'Editar Serviço' : 'Novo Serviço'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Package className="w-5 h-5" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Nome do Serviço *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="Ex: CS360° Premium"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Descrição *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  rows={3}
                  placeholder="Descrição detalhada do serviço..."
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="category" className="text-gray-700 dark:text-gray-300">Categoria *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="plano">Plano Principal</SelectItem>
                    <SelectItem value="addon">Add-on</SelectItem>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                    <SelectItem value="implementacao">Implementação</SelectItem>
                    <SelectItem value="suporte">Suporte</SelectItem>
                    <SelectItem value="treinamento">Treinamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="type" className="text-gray-700 dark:text-gray-300">Tipo *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="recorrente">Recorrente</SelectItem>
                    <SelectItem value="one-time">Pagamento Único</SelectItem>
                    <SelectItem value="usage-based">Baseado em Uso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="targetAudience" className="text-gray-700 dark:text-gray-300">Público-Alvo</Label>
                <Select value={formData.targetAudience} onValueChange={(value) => handleInputChange('targetAudience', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o público" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="startup">Startups</SelectItem>
                    <SelectItem value="pequena">Pequenas Empresas</SelectItem>
                    <SelectItem value="media">Médias Empresas</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="todos">Todos os Portes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Preços e Faturamento */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <DollarSign className="w-5 h-5" />
                Preços e Faturamento
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price" className="text-gray-700 dark:text-gray-300">Preço (R$) *</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="0.00"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="billingCycle" className="text-gray-700 dark:text-gray-300">Ciclo de Cobrança</Label>
                <Select value={formData.billingCycle} onValueChange={(value) => handleInputChange('billingCycle', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o ciclo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="mensal">Mensal</SelectItem>
                    <SelectItem value="trimestral">Trimestral</SelectItem>
                    <SelectItem value="semestral">Semestral</SelectItem>
                    <SelectItem value="anual">Anual</SelectItem>
                    <SelectItem value="unico">Pagamento Único</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="setupFee" className="text-gray-700 dark:text-gray-300">Taxa de Setup (R$)</Label>
                <Input
                  id="setupFee"
                  type="number"
                  step="0.01"
                  value={formData.setupFee}
                  onChange={(e) => handleInputChange('setupFee', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="0.00"
                />
              </div>
            </CardContent>
          </Card>

          {/* Funcionalidades e Recursos */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Settings className="w-5 h-5" />
                Funcionalidades e Recursos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-700 dark:text-gray-300">Funcionalidades Incluídas</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Adicionar funcionalidade..."
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                  />
                  <Button type="button" onClick={addFeature} variant="outline" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                    Adicionar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {feature}
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="maxUsers" className="text-gray-700 dark:text-gray-300">Máx. Usuários</Label>
                  <Input
                    id="maxUsers"
                    type="number"
                    value={formData.maxUsers}
                    onChange={(e) => handleInputChange('maxUsers', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    placeholder="Ilimitado"
                  />
                </div>
                
                <div>
                  <Label htmlFor="storageLimit" className="text-gray-700 dark:text-gray-300">Limite de Storage (GB)</Label>
                  <Input
                    id="storageLimit"
                    type="number"
                    value={formData.storageLimit}
                    onChange={(e) => handleInputChange('storageLimit', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    placeholder="Ilimitado"
                  />
                </div>
                
                <div>
                  <Label htmlFor="apiCallsLimit" className="text-gray-700 dark:text-gray-300">Limite API Calls/mês</Label>
                  <Input
                    id="apiCallsLimit"
                    type="number"
                    value={formData.apiCallsLimit}
                    onChange={(e) => handleInputChange('apiCallsLimit', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    placeholder="Ilimitado"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="limitations" className="text-gray-700 dark:text-gray-300">Limitações</Label>
                <Textarea
                  id="limitations"
                  value={formData.limitations}
                  onChange={(e) => handleInputChange('limitations', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  rows={2}
                  placeholder="Descreva as limitações do serviço..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Configurações de Contrato */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Clock className="w-5 h-5" />
                Configurações de Contrato
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="minimumContract" className="text-gray-700 dark:text-gray-300">Contrato Mínimo</Label>
                <Select value={formData.minimumContract} onValueChange={(value) => handleInputChange('minimumContract', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="sem-fidelidade">Sem Fidelidade</SelectItem>
                    <SelectItem value="3-meses">3 Meses</SelectItem>
                    <SelectItem value="6-meses">6 Meses</SelectItem>
                    <SelectItem value="12-meses">12 Meses</SelectItem>
                    <SelectItem value="24-meses">24 Meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="implementationTime" className="text-gray-700 dark:text-gray-300">Tempo de Implementação</Label>
                <Select value={formData.implementationTime} onValueChange={(value) => handleInputChange('implementationTime', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o tempo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="imediato">Imediato</SelectItem>
                    <SelectItem value="1-semana">1 Semana</SelectItem>
                    <SelectItem value="2-semanas">2 Semanas</SelectItem>
                    <SelectItem value="1-mes">1 Mês</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="supportLevel" className="text-gray-700 dark:text-gray-300">Nível de Suporte</Label>
                <Select value={formData.supportLevel} onValueChange={(value) => handleInputChange('supportLevel', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="basico">Básico (Email)</SelectItem>
                    <SelectItem value="standard">Standard (Email + Chat)</SelectItem>
                    <SelectItem value="premium">Premium (24/7)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (Dedicado)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowUpgrade"
                    checked={formData.allowUpgrade}
                    onCheckedChange={(checked) => handleInputChange('allowUpgrade', checked)}
                  />
                  <Label htmlFor="allowUpgrade" className="text-gray-700 dark:text-gray-300">
                    Permitir Upgrade
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="allowDowngrade"
                    checked={formData.allowDowngrade}
                    onCheckedChange={(checked) => handleInputChange('allowDowngrade', checked)}
                  />
                  <Label htmlFor="allowDowngrade" className="text-gray-700 dark:text-gray-300">
                    Permitir Downgrade
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="requiresApproval"
                    checked={formData.requiresApproval}
                    onCheckedChange={(checked) => handleInputChange('requiresApproval', checked)}
                  />
                  <Label htmlFor="requiresApproval" className="text-gray-700 dark:text-gray-300">
                    Requer Aprovação
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => handleInputChange('isActive', checked)}
                  />
                  <Label htmlFor="isActive" className="text-gray-700 dark:text-gray-300">
                    Serviço Ativo
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integrações e Tags */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Tag className="w-5 h-5" />
                Integrações e Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-700 dark:text-gray-300">Integrações Disponíveis</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newIntegration}
                    onChange={(e) => setNewIntegration(e.target.value)}
                    placeholder="Ex: Salesforce, HubSpot..."
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addIntegration())}
                  />
                  <Button type="button" onClick={addIntegration} variant="outline" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                    Adicionar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.integrations.map((integration, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                    >
                      {integration}
                      <button
                        type="button"
                        onClick={() => removeIntegration(index)}
                        className="ml-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-gray-700 dark:text-gray-300">Tags</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Ex: popular, novo, recomendado..."
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} variant="outline" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                    Adicionar
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <FileText className="w-5 h-5" />
                Observações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">Observações Internas</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  rows={3}
                  placeholder="Observações para uso interno..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Botões */}
          <div className="flex gap-4 justify-end pt-6">
            <Button type="button" variant="outline" onClick={onClose} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              {service ? 'Atualizar Serviço' : 'Cadastrar Serviço'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
