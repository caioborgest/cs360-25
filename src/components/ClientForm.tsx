
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  DollarSign, 
  Calendar,
  FileText,
  Target,
  Star
} from 'lucide-react';

interface ClientFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  client?: any;
}

export const ClientForm: React.FC<ClientFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  client 
}) => {
  const [formData, setFormData] = useState({
    // Informações Básicas
    companyName: client?.companyName || '',
    contactName: client?.contactName || '',
    position: client?.position || '',
    email: client?.email || '',
    phone: client?.phone || '',
    
    // Endereço
    address: client?.address || '',
    city: client?.city || '',
    state: client?.state || '',
    zipCode: client?.zipCode || '',
    country: client?.country || 'Brasil',
    
    // Classificação e Segmentação
    tier: client?.tier || '',
    profile: client?.profile || '',
    segment: client?.segment || '',
    industry: client?.industry || '',
    companySize: client?.companySize || '',
    
    // Dados Financeiros
    monthlyRevenue: client?.monthlyRevenue || '',
    ltv: client?.ltv || '',
    cac: client?.cac || '',
    
    // Dados de Relacionamento
    acquisitionChannel: client?.acquisitionChannel || '',
    acquisitionDate: client?.acquisitionDate || '',
    customerSuccess: client?.customerSuccess || '',
    
    // Configurações de NPS e Saúde
    npsFrequency: client?.npsFrequency || '',
    healthScoreSettings: client?.healthScoreSettings || '',
    
    // Observações
    notes: client?.notes || '',
    tags: client?.tags || [],
    
    // Configurações de Comunicação
    preferredContactMethod: client?.preferredContactMethod || '',
    timezone: client?.timezone || '',
    language: client?.language || 'pt-BR'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <User className="w-6 h-6" />
            {client ? 'Editar Cliente' : 'Novo Cliente'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Building2 className="w-5 h-5" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName" className="text-gray-700 dark:text-gray-300">Nome da Empresa *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="contactName" className="text-gray-700 dark:text-gray-300">Nome do Contato *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="position" className="text-gray-700 dark:text-gray-300">Cargo</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300">Setor *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                    <SelectItem value="saude">Saúde</SelectItem>
                    <SelectItem value="educacao">Educação</SelectItem>
                    <SelectItem value="varejo">Varejo</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Endereço */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <MapPin className="w-5 h-5" />
                Endereço
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-gray-700 dark:text-gray-300">Endereço</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-gray-700 dark:text-gray-300">Cidade</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="state" className="text-gray-700 dark:text-gray-300">Estado</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Classificação */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Star className="w-5 h-5" />
                Classificação e Segmentação
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="tier" className="text-gray-700 dark:text-gray-300">Nível (Tier) *</Label>
                <Select value={formData.tier} onValueChange={(value) => handleInputChange('tier', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="A">Nível A - Premium</SelectItem>
                    <SelectItem value="B">Nível B - Standard</SelectItem>
                    <SelectItem value="C">Nível C - Basic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="profile" className="text-gray-700 dark:text-gray-300">Perfil *</Label>
                <Select value={formData.profile} onValueChange={(value) => handleInputChange('profile', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o perfil" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="Arrojado">Arrojado</SelectItem>
                    <SelectItem value="Moderado">Moderado</SelectItem>
                    <SelectItem value="Conservador">Conservador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="companySize" className="text-gray-700 dark:text-gray-300">Tamanho da Empresa</Label>
                <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="startup">Startup (1-10)</SelectItem>
                    <SelectItem value="pequena">Pequena (11-50)</SelectItem>
                    <SelectItem value="media">Média (51-200)</SelectItem>
                    <SelectItem value="grande">Grande (201-1000)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Dados Financeiros */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <DollarSign className="w-5 h-5" />
                Dados Financeiros
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="monthlyRevenue" className="text-gray-700 dark:text-gray-300">Receita Mensal (R$)</Label>
                <Input
                  id="monthlyRevenue"
                  type="number"
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="ltv" className="text-gray-700 dark:text-gray-300">LTV Estimado (R$)</Label>
                <Input
                  id="ltv"
                  type="number"
                  value={formData.ltv}
                  onChange={(e) => handleInputChange('ltv', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="cac" className="text-gray-700 dark:text-gray-300">CAC (R$)</Label>
                <Input
                  id="cac"
                  type="number"
                  value={formData.cac}
                  onChange={(e) => handleInputChange('cac', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Dados de Relacionamento */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Calendar className="w-5 h-5" />
                Relacionamento
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="acquisitionChannel" className="text-gray-700 dark:text-gray-300">Canal de Aquisição</Label>
                <Select value={formData.acquisitionChannel} onValueChange={(value) => handleInputChange('acquisitionChannel', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o canal" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="indicacao">Indicação</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="eventos">Eventos</SelectItem>
                    <SelectItem value="parceiros">Parceiros</SelectItem>
                    <SelectItem value="vendas">Vendas Diretas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="acquisitionDate" className="text-gray-700 dark:text-gray-300">Data de Aquisição</Label>
                <Input
                  id="acquisitionDate"
                  type="date"
                  value={formData.acquisitionDate}
                  onChange={(e) => handleInputChange('acquisitionDate', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="customerSuccess" className="text-gray-700 dark:text-gray-300">CSM Responsável</Label>
                <Input
                  id="customerSuccess"
                  value={formData.customerSuccess}
                  onChange={(e) => handleInputChange('customerSuccess', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="preferredContactMethod" className="text-gray-700 dark:text-gray-300">Método de Contato Preferido</Label>
                <Select value={formData.preferredContactMethod} onValueChange={(value) => handleInputChange('preferredContactMethod', value)}>
                  <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <SelectValue placeholder="Selecione o método" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="email">E-mail</SelectItem>
                    <SelectItem value="telefone">Telefone</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="video">Videochamada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Observações */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <FileText className="w-5 h-5" />
                Observações e Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">Observações</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  rows={3}
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
              {client ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
