
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Upload, Download, Info } from 'lucide-react';

interface ClientImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (data: any[]) => void;
}

export const ClientImportModal: React.FC<ClientImportModalProps> = ({ isOpen, onClose, onImport }) => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const requiredFields = [
    { field: 'nome', description: 'Nome completo do cliente' },
    { field: 'email', description: 'Email do cliente' },
    { field: 'telefone', description: 'Telefone (opcional)' },
    { field: 'empresa', description: 'Nome da empresa (opcional)' },
    { field: 'nivel', description: 'A, B ou C' },
    { field: 'status', description: 'Ativo, Risco ou Inativo' },
    { field: 'mrr', description: 'Valor em reais (ex: 1500.00)' },
    { field: 'ltv', description: 'Valor em reais (ex: 15000.00)' },
    { field: 'cac', description: 'Valor em reais (ex: 500.00)' },
    { field: 'nps_score', description: 'Número de 0 a 10 (opcional)' },
    { field: 'nps_categoria', description: 'Promotor, Passivo ou Detrator (opcional)' },
    { field: 'score_risco', description: 'Número de 0 a 100' }
  ];

  const downloadTemplate = () => {
    const headers = requiredFields.map(field => field.field);
    const csvContent = [
      headers.join(','),
      'João Silva,joao@exemplo.com,(11) 99999-9999,Empresa ABC,A,Ativo,2500.00,25000.00,800.00,9,Promotor,15',
      'Maria Santos,maria@teste.com,(11) 88888-8888,Teste LTDA,B,Ativo,1200.00,12000.00,400.00,7,Passivo,25'
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'template_clientes.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleImport = async () => {
    if (!file) {
      toast({
        title: "Erro",
        description: "Selecione um arquivo para importar",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      const text = await file.text();
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      
      const clients = lines.slice(1).filter(line => line.trim()).map((line, index) => {
        const values = line.split(',').map(v => v.trim());
        const client: any = {};
        
        headers.forEach((header, i) => {
          const value = values[i];
          switch (header) {
            case 'nome':
              client.name = value;
              break;
            case 'email':
              client.email = value;
              break;
            case 'telefone':
              client.phone = value;
              break;
            case 'empresa':
              client.company = value;
              break;
            case 'nivel':
              client.tier = value;
              break;
            case 'status':
              client.status = value;
              break;
            case 'mrr':
              client.mrr = parseFloat(value) || 0;
              break;
            case 'ltv':
              client.ltv = parseFloat(value) || 0;
              break;
            case 'cac':
              client.cac = parseFloat(value) || 0;
              break;
            case 'nps_score':
              client.nps_score = value ? parseInt(value) : undefined;
              break;
            case 'nps_categoria':
              client.nps_category = value || undefined;
              break;
            case 'score_risco':
              client.risk_score = parseInt(value) || 0;
              break;
          }
        });
        
        return client;
      });

      onImport(clients);
      toast({
        title: "Sucesso",
        description: `${clients.length} clientes importados com sucesso`
      });
      onClose();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao processar arquivo. Verifique o formato.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Importar Clientes</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Faça o download do template CSV para garantir que seus dados estejam no formato correto.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">1. Download do Template</h3>
              <Button onClick={downloadTemplate} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Baixar Template CSV
              </Button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Campos obrigatórios no CSV:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {requiredFields.map((field, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-mono">{field.field}:</span>
                    <span className="text-gray-600 dark:text-gray-400">{field.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">2. Selecionar Arquivo</h3>
            <div>
              <Label htmlFor="file">Arquivo CSV</Label>
              <Input
                id="file"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileChange}
                className="mt-1"
              />
            </div>
            {file && (
              <p className="text-sm text-green-600">
                Arquivo selecionado: {file.name}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleImport} disabled={!file || loading}>
              <Upload className="w-4 h-4 mr-2" />
              {loading ? 'Importando...' : 'Importar Clientes'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
