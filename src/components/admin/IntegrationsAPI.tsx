
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Copy, Key, Settings, Trash2, Plus, Eye, EyeOff, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

const integrations = [
  {
    id: '1',
    name: 'Salesforce CRM',
    type: 'CRM',
    status: 'active',
    lastSync: '2024-01-15 14:30',
    description: 'Sincronização de leads e oportunidades'
  },
  {
    id: '2',
    name: 'HubSpot',
    type: 'CRM',
    status: 'active',
    lastSync: '2024-01-15 13:45',
    description: 'Gestão de contatos e campanhas'
  },
  {
    id: '3',
    name: 'Stripe',
    type: 'Pagamento',
    status: 'inactive',
    lastSync: 'Nunca',
    description: 'Processamento de pagamentos'
  },
  {
    id: '4',
    name: 'SAP ERP',
    type: 'ERP',
    status: 'error',
    lastSync: '2024-01-14 10:20',
    description: 'Integração com sistema financeiro'
  }
];

const apiKeys = [
  {
    id: '1',
    name: 'Produção - Web App',
    key: 'cs360_prod_abc123***',
    permissions: ['read', 'write'],
    lastUsed: '2024-01-15 14:30',
    status: 'active'
  },
  {
    id: '2',
    name: 'Desenvolvimento - Mobile',
    key: 'cs360_dev_xyz789***',
    permissions: ['read'],
    lastUsed: '2024-01-14 09:15',
    status: 'active'
  },
  {
    id: '3',
    name: 'Teste - API Externa',
    key: 'cs360_test_def456***',
    permissions: ['read', 'write', 'admin'],
    lastUsed: '2024-01-10 16:45',
    status: 'revoked'
  }
];

export const IntegrationsAPI = () => {
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [isCreateKeyDialogOpen, setIsCreateKeyDialogOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    const configs = {
      active: { label: 'Ativo', className: 'bg-green-100 text-green-800' },
      inactive: { label: 'Inativo', className: 'bg-gray-100 text-gray-800' },
      error: { label: 'Erro', className: 'bg-red-100 text-red-800' },
      revoked: { label: 'Revogada', className: 'bg-red-100 text-red-800' }
    };

    const config = configs[status as keyof typeof configs] || configs.inactive;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys(prev => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateNewKey = () => {
    const newKey = `cs360_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('Nova chave gerada:', newKey);
    setIsCreateKeyDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Integrações Ativas */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Integrações Ativas</span>
          </CardTitle>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nova Integração</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Adicionar CRM</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Adicionar ERP</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Adicionar Pagamento</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Outra Integração</p>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Sinc.</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {integrations.map(integration => (
                <TableRow key={integration.id}>
                  <TableCell className="font-medium">{integration.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{integration.type}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(integration.status)}</TableCell>
                  <TableCell className="text-sm text-gray-500">{integration.lastSync}</TableCell>
                  <TableCell className="text-sm">{integration.description}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Gerenciamento de API Keys */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Key className="w-5 h-5" />
            <span>Chaves de API</span>
          </CardTitle>
          <Dialog open={isCreateKeyDialogOpen} onOpenChange={setIsCreateKeyDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Nova Chave</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Nova Chave de API</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome da Chave</label>
                  <Input placeholder="Ex: Aplicação Web Produção" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Permissões</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="read" className="rounded" />
                      <label htmlFor="read" className="text-sm">Leitura</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="write" className="rounded" />
                      <label htmlFor="write" className="text-sm">Escrita</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="admin" className="rounded" />
                      <label htmlFor="admin" className="text-sm">Administração</label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateKeyDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={generateNewKey}>Gerar Chave</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Chave</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Último Uso</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map(apiKey => (
                <TableRow key={apiKey.id}>
                  <TableCell className="font-medium">{apiKey.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {showKeys[apiKey.id] ? 
                          `cs360_prod_abc123def456ghi789` : 
                          apiKey.key
                        }
                      </code>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                      >
                        {showKeys[apiKey.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {apiKey.permissions.map(permission => (
                        <Badge key={permission} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{apiKey.lastUsed}</TableCell>
                  <TableCell>{getStatusBadge(apiKey.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Políticas de Retenção de Dados */}
      <Card>
        <CardHeader>
          <CardTitle>Políticas de Retenção de Dados (LGPD)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Configurações de Retenção</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dados de clientes inativos</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>2 anos</option>
                    <option>3 anos</option>
                    <option>5 anos</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Logs de auditoria</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>1 ano</option>
                    <option>2 anos</option>
                    <option>3 anos</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dados de performance</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>1 ano</option>
                    <option>2 anos</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Conformidade LGPD</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Consentimento documentado</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Criptografia de dados pessoais</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Direito ao esquecimento</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Relatório de impacto</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
