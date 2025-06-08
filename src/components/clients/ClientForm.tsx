
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useToast } from '@/hooks/use-toast';

interface ClientFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  tier: 'A' | 'B' | 'C';
  status: 'Ativo' | 'Risco' | 'Inativo';
  mrr: number;
  ltv: number;
  cac: number;
  nps_score?: number;
  nps_category?: 'Promotor' | 'Passivo' | 'Detrator';
  risk_score: number;
  notes?: string;
}

interface ClientFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ClientFormData) => Promise<void>;
  client?: any;
}

export const ClientForm: React.FC<ClientFormProps> = ({ isOpen, onClose, onSubmit, client }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ClientFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    tier: 'B',
    status: 'Ativo',
    mrr: 0,
    ltv: 0,
    cac: 0,
    nps_score: undefined,
    nps_category: undefined,
    risk_score: 0,
    notes: ''
  });

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name || '',
        email: client.email || '',
        phone: client.phone || '',
        company: client.company || '',
        tier: client.tier || 'B',
        status: client.status || 'Ativo',
        mrr: client.mrr || 0,
        ltv: client.ltv || 0,
        cac: client.cac || 0,
        nps_score: client.nps_score,
        nps_category: client.nps_category,
        risk_score: client.risk_score || 0,
        notes: client.notes || ''
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        tier: 'B',
        status: 'Ativo',
        mrr: 0,
        ltv: 0,
        cac: 0,
        nps_score: undefined,
        nps_category: undefined,
        risk_score: 0,
        notes: ''
      });
    }
  }, [client, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Erro",
        description: "Nome e email são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      await onSubmit(formData);
      toast({
        title: "Sucesso",
        description: client ? "Cliente atualizado com sucesso" : "Cliente criado com sucesso"
      });
      onClose();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao salvar cliente",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof ClientFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{client ? 'Editar Cliente' : 'Novo Cliente'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Básicos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dados Básicos</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Nome do cliente"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="email@exemplo.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
          </div>

          {/* Classificação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Classificação</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tier">Nível do Cliente</Label>
                <Select value={formData.tier} onValueChange={(value) => handleChange('tier', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Nível A - Premium</SelectItem>
                    <SelectItem value="B">Nível B - Padrão</SelectItem>
                    <SelectItem value="C">Nível C - Básico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Risco">Em Risco</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Métricas Financeiras */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Métricas Financeiras</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="mrr">MRR (R$)</Label>
                <Input
                  id="mrr"
                  type="number"
                  value={formData.mrr}
                  onChange={(e) => handleChange('mrr', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <Label htmlFor="ltv">LTV (R$)</Label>
                <Input
                  id="ltv"
                  type="number"
                  value={formData.ltv}
                  onChange={(e) => handleChange('ltv', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div>
                <Label htmlFor="cac">CAC (R$)</Label>
                <Input
                  id="cac"
                  type="number"
                  value={formData.cac}
                  onChange={(e) => handleChange('cac', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          {/* NPS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Net Promoter Score</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nps_score">Score NPS (0-10)</Label>
                <Input
                  id="nps_score"
                  type="number"
                  value={formData.nps_score || ''}
                  onChange={(e) => handleChange('nps_score', e.target.value ? parseInt(e.target.value) : undefined)}
                  placeholder="0-10"
                  min="0"
                  max="10"
                />
              </div>
              
              <div>
                <Label htmlFor="nps_category">Categoria NPS</Label>
                <Select value={formData.nps_category || ''} onValueChange={(value) => handleChange('nps_category', value || undefined)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Não definido</SelectItem>
                    <SelectItem value="Promotor">Promotor (9-10)</SelectItem>
                    <SelectItem value="Passivo">Passivo (7-8)</SelectItem>
                    <SelectItem value="Detrator">Detrator (0-6)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Risk Score */}
          <div>
            <Label htmlFor="risk_score">Score de Risco (0-100)</Label>
            <Input
              id="risk_score"
              type="number"
              value={formData.risk_score}
              onChange={(e) => handleChange('risk_score', parseInt(e.target.value) || 0)}
              placeholder="0"
              min="0"
              max="100"
            />
          </div>

          {/* Observações */}
          <div>
            <Label htmlFor="notes">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Observações sobre o cliente..."
              rows={3}
            />
          </div>

          {/* Botões */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : (client ? 'Atualizar' : 'Criar')} Cliente
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
