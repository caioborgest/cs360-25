
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { 
  FileText, 
  Building, 
  Calendar, 
  DollarSign, 
  Tag,
  Package,
  MessageSquare,
  Settings,
  User
} from 'lucide-react';
import { Badge } from './ui/badge';

interface ContractFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  contract?: any;
  registeredClients: Array<{ id: number; name: string; tier: string }>;
  registeredServices: Array<{ id: number; name: string; category: string }>;
  suggestedContractNumber: string;
}

export const ContractForm: React.FC<ContractFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  contract,
  registeredClients,
  registeredServices,
  suggestedContractNumber
}) => {
  const [formData, setFormData] = useState({
    // Informações Básicas
    contractNumber: contract?.contractNumber || '',
    clientId: contract?.clientId || '',
    status: contract?.status || 'Ativo',
    
    // Datas
    startDate: contract?.startDate || '',
    endDate: contract?.endDate || '',
    
    // Valores
    value: contract?.value || '',
    paymentCycle: contract?.paymentCycle || 'anual',
    
    // Serviços
    services: contract?.services || [],
    
    // Detalhes
    description: contract?.description || '',
    notes: contract?.notes || '',
    
    // Renovação
    autoRenew: contract?.autoRenew || false,
    renewalReminder: contract?.renewalReminder || '30',
    renewalStatus: contract?.renewalStatus || 'Pendente',
    
    // Extras
    attachments: contract?.attachments || [],
    csm: contract?.csm || '',
    nextFollowUp: contract?.nextFollowUp || '',
    termsAccepted: contract?.termsAccepted || false
  });

  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  // Inicializar com um número de contrato sugerido
  useEffect(() => {
    if (!contract && suggestedContractNumber) {
      setFormData(prev => ({
        ...prev,
        contractNumber: suggestedContractNumber
      }));
    }
  }, [contract, suggestedContractNumber]);

  // Encontrar cliente selecionado para exibição de detalhes
  const selectedClient = registeredClients.find(c => c.id.toString() === formData.clientId?.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar dados para envio incluindo os serviços selecionados
    const selectedServicesData = registeredServices
      .filter(service => selectedServices.includes(service.id))
      .map(service => service.name);
    
    const dataToSubmit = {
      ...formData,
      services: selectedServicesData
    };
    
    onSubmit(dataToSubmit);
    onClose();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FileText className="w-6 h-6" />
            {contract ? 'Editar Contrato' : 'Novo Contrato'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Building className="w-5 h-5" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contractNumber" className="text-gray-700 dark:text-gray-300">Número do Contrato *</Label>
                <Input
                  id="contractNumber"
                  value={formData.contractNumber}
                  onChange={(e) => handleInputChange('contractNumber', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder={suggestedContractNumber}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="clientId" className="text-gray-700 dark:text-gray-300">Cliente *</Label>
                <Select value={formData.clientId} onValueChange={(value) => handleInputChange('clientId', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    {registeredClients.map(client => (
                      <SelectItem key={client.id} value={client.id.toString()}>
                        {client.name} - Nível {client.tier}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedClient && (
                <div className="md:col-span-2">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
                      Detalhes do Cliente
                    </h4>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 font-normal">
                        Nível {selectedClient.tier}
                      </Badge>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {/* Aqui poderiam aparecer mais detalhes do cliente */}
                        Cliente validado para novos contratos
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <Label htmlFor="status" className="text-gray-700 dark:text-gray-300">Status *</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Encerrado">Encerrado</SelectItem>
                    <SelectItem value="Suspenso">Suspenso</SelectItem>
                    <SelectItem value="Cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="csm" className="text-gray-700 dark:text-gray-300">CSM Responsável</Label>
                <Input
                  id="csm"
                  value={formData.csm}
                  onChange={(e) => handleInputChange('csm', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="Nome do CSM responsável"
                />
              </div>
            </CardContent>
          </Card>

          {/* Datas e Valores */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Calendar className="w-5 h-5" />
                Datas e Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-gray-700 dark:text-gray-300">Data de Início *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="endDate" className="text-gray-700 dark:text-gray-300">Data de Término *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="value" className="text-gray-700 dark:text-gray-300">Valor do Contrato (R$) *</Label>
                  <Input
                    id="value"
                    type="number"
                    step="0.01"
                    value={formData.value}
                    onChange={(e) => handleInputChange('value', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="paymentCycle" className="text-gray-700 dark:text-gray-300">Ciclo de Pagamento</Label>
                  <Select value={formData.paymentCycle} onValueChange={(value) => handleInputChange('paymentCycle', value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Selecione o ciclo" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectItem value="mensal">Mensal</SelectItem>
                      <SelectItem value="trimestral">Trimestral</SelectItem>
                      <SelectItem value="semestral">Semestral</SelectItem>
                      <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Serviços */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Package className="w-5 h-5" />
                Serviços Contratados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="text-gray-700 dark:text-gray-300 font-medium">Planos</Label>
                  {registeredServices.filter(s => s.category === 'plano').map(service => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={`service-${service.id}`} className="text-gray-700 dark:text-gray-300">
                        {service.name}
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <Label className="text-gray-700 dark:text-gray-300 font-medium">Complementos</Label>
                  {registeredServices.filter(s => s.category === 'addon').map(service => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={`service-${service.id}`} className="text-gray-700 dark:text-gray-300">
                        {service.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="text-gray-700 dark:text-gray-300 font-medium">Implementação e Treinamento</Label>
                  {registeredServices.filter(s => ['implementacao', 'treinamento'].includes(s.category)).map(service => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={`service-${service.id}`} className="text-gray-700 dark:text-gray-300">
                        {service.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedServices.length > 0 && (
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Serviços selecionados:</div>
                  <div className="flex flex-wrap gap-2">
                    {registeredServices
                      .filter(service => selectedServices.includes(service.id))
                      .map(service => (
                        <Badge key={service.id} variant="outline" className="bg-white dark:bg-gray-700">
                          {service.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Renovação */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Settings className="w-5 h-5" />
                Configurações de Renovação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="autoRenew"
                  checked={formData.autoRenew}
                  onCheckedChange={(checked) => handleInputChange('autoRenew', checked)}
                />
                <Label htmlFor="autoRenew" className="text-gray-700 dark:text-gray-300">
                  Renovação Automática
                </Label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="renewalReminder" className="text-gray-700 dark:text-gray-300">Lembrete de Renovação (dias)</Label>
                  <Select value={formData.renewalReminder} onValueChange={(value) => handleInputChange('renewalReminder', value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Selecione o período" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectItem value="15">15 dias</SelectItem>
                      <SelectItem value="30">30 dias</SelectItem>
                      <SelectItem value="45">45 dias</SelectItem>
                      <SelectItem value="60">60 dias</SelectItem>
                      <SelectItem value="90">90 dias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="renewalStatus" className="text-gray-700 dark:text-gray-300">Status de Renovação</Label>
                  <Select value={formData.renewalStatus} onValueChange={(value) => handleInputChange('renewalStatus', value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectItem value="Pendente">Pendente</SelectItem>
                      <SelectItem value="Em Negociação">Em Negociação</SelectItem>
                      <SelectItem value="Renovado">Renovado</SelectItem>
                      <SelectItem value="Rejeitado">Rejeitado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="nextFollowUp" className="text-gray-700 dark:text-gray-300">Próximo Contato</Label>
                <Input
                  id="nextFollowUp"
                  type="date"
                  value={formData.nextFollowUp}
                  onChange={(e) => handleInputChange('nextFollowUp', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <MessageSquare className="w-5 h-5" />
                Detalhes e Observações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Descrição do Contrato</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="Descrição detalhada do contrato..."
                  rows={2}
                />
              </div>
              
              <div>
                <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">Observações Internas</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  placeholder="Observações para uso interno..."
                  rows={2}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                />
                <Label htmlFor="termsAccepted" className="text-gray-700 dark:text-gray-300">
                  O cliente aceitou os termos e condições do contrato
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Botões */}
          <div className="flex gap-4 justify-end pt-6">
            <Button type="button" variant="outline" onClick={onClose} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
              Cancelar
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              {contract ? 'Atualizar Contrato' : 'Cadastrar Contrato'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
