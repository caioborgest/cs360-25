
import React, { useState } from 'react';
import { 
  Users, 
  Filter, 
  Download, 
  Plus, 
  Search,
  Star,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Upload,
  Eye,
  Edit,
  Target,
  FileText
} from 'lucide-react';
import { Button } from './ui/button';
import { ClientForm } from './ClientForm';
import { ClientImportModal } from './ClientImportModal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const clientsData = [
  {
    id: 1,
    name: 'TechCorp LTDA',
    contact: 'Maria Silva',
    email: 'maria@techcorp.com',
    tier: 'A',
    profile: 'Arrojado',
    nps: 85,
    npsCategory: 'Promotor',
    ltv: 120000,
    ltvProjected: 150000,
    contractEnd: '2024-12-15',
    services: 5,
    trust: 3,
    status: 'Ativo',
    lastInteraction: '2024-01-15',
    riskScore: 15,
    opportunities: ['Upgrade Premium', 'Novo Módulo'],
    contracts: [
      { id: 'CT-2024-001', service: 'Premium', status: 'Ativo', value: 12000 },
      { id: 'CT-2024-045', service: 'Support Plus', status: 'Ativo', value: 3000 }
    ]
  },
  {
    id: 2,
    name: 'StartupX',
    contact: 'João Santos',
    email: 'joao@startupx.com',
    tier: 'B',
    profile: 'Moderado',
    nps: 45,
    npsCategory: 'Passivo',
    ltv: 45000,
    ltvProjected: 60000,
    contractEnd: '2024-08-20',
    services: 2,
    trust: 2,
    status: 'Ativo',
    lastInteraction: '2024-01-10',
    riskScore: 65,
    opportunities: ['Cross-sell'],
    contracts: [
      { id: 'CT-2024-012', service: 'Standard', status: 'Ativo', value: 6000 }
    ]
  },
  {
    id: 3,
    name: 'BigCorp S.A.',
    contact: 'Ana Costa',
    email: 'ana@bigcorp.com',
    tier: 'A',
    profile: 'Conservador',
    nps: 25,
    npsCategory: 'Detrator',
    ltv: 200000,
    ltvProjected: 180000,
    contractEnd: '2024-06-30',
    services: 8,
    trust: 1,
    status: 'Risco',
    lastInteraction: '2024-01-05',
    riskScore: 85,
    opportunities: ['Retenção urgente'],
    contracts: [
      { id: 'CT-2024-003', service: 'Enterprise', status: 'Risco', value: 25000 },
      { id: 'CT-2024-004', service: 'Premium Support', status: 'Ativo', value: 8000 }
    ]
  }
];

const filterOptions = {
  tier: ['Todos', 'A', 'B', 'C'],
  profile: ['Todos', 'Arrojado', 'Moderado', 'Conservador'],
  npsCategory: ['Todos', 'Promotor', 'Passivo', 'Detrator'],
  status: ['Todos', 'Ativo', 'Risco', 'Inativo']
};

export const ClientsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    tier: 'Todos',
    profile: 'Todos',
    npsCategory: 'Todos',
    status: 'Todos'
  });
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [expandedClient, setExpandedClient] = useState<number | null>(null);

  const getRiskColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
    if (score <= 60) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
    return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
  };

  const getTierColor = (tier: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'B': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'C': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const getNPSColor = (category: string) => {
    const colors = {
      'Promotor': 'text-green-600 dark:text-green-400',
      'Passivo': 'text-yellow-600 dark:text-yellow-400',
      'Detrator': 'text-red-600 dark:text-red-400'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 dark:text-gray-400';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Ativo': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'Risco': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      'Inativo': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const handleClientSubmit = (data: any) => {
    console.log('Cliente cadastrado:', data);
    // Aqui você implementaria a lógica para salvar o cliente
  };

  const handleImport = (data: any[]) => {
    console.log('Clientes importados:', data);
    // Aqui você implementaria a lógica para importar os clientes
  };

  const handleEditClient = (client: any) => {
    setSelectedClient(client);
    setIsClientFormOpen(true);
  };

  const handleViewDetails = (clientId: number) => {
    console.log('Ver detalhes do cliente:', clientId);
    // Aqui você implementaria a navegação para a página de detalhes
  };

  const handleStrategies = (clientId: number) => {
    console.log('Ver estratégias do cliente:', clientId);
    // Aqui você implementaria a navegação para estratégias específicas
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gestão de Clientes</h2>
          </div>
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsImportModalOpen(true)}
              className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <Upload className="w-4 h-4 mr-2" />
              Importar
            </Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              onClick={() => {
                setSelectedClient(null);
                setIsClientFormOpen(true);
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por nome, contato ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {Object.entries(filterOptions).map(([key, options]) => (
              <select
                key={key}
                value={filters[key as keyof typeof filters]}
                onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.value }))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nível</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">NPS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">LTV</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Risco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Contratos</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {clientsData.map((client) => (
              <React.Fragment key={client.id}>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{client.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{client.contact}</div>
                      <div className="text-xs text-gray-400 dark:text-gray-500">{client.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getTierColor(client.tier)}>
                      Nível {client.tier}
                    </Badge>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{client.profile}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-semibold ${getNPSColor(client.npsCategory)}`}>{client.nps}</span>
                      {client.npsCategory === 'Promotor' && <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />}
                      {client.npsCategory === 'Detrator' && <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{client.npsCategory}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">R$ {(client.ltv / 1000).toFixed(0)}k</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Proj: R$ {(client.ltvProjected / 1000).toFixed(0)}k</div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getRiskColor(client.riskScore)}>
                      {client.riskScore}%
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(client.status)}>
                      {client.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{client.contracts.length} contrato(s)</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs p-1 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        onClick={() => setExpandedClient(expandedClient === client.id ? null : client.id)}
                      >
                        {expandedClient === client.id ? 'Ocultar' : 'Ver detalhes'}
                      </Button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewDetails(client.id)}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditClient(client)}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleStrategies(client.id)}
                        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                      >
                        <Target className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                
                {/* Expandable Contracts Section */}
                {expandedClient === client.id && (
                  <tr>
                    <td colSpan={8} className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm flex items-center gap-2 text-gray-900 dark:text-white">
                            <FileText className="w-4 h-4" />
                            Contratos Ativos - {client.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {client.contracts.map((contract) => (
                              <div key={contract.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <div className="font-medium text-sm text-gray-900 dark:text-white">{contract.id}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{contract.service}</div>
                                  </div>
                                  <Badge className={getStatusColor(contract.status)} variant="outline">
                                    {contract.status}
                                  </Badge>
                                </div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                  R$ {(contract.value / 1000).toFixed(0)}k/ano
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Mostrando 1-3 de 127 clientes
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">Anterior</Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">1</Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">2</Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">3</Button>
            <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">Próximo</Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ClientForm
        isOpen={isClientFormOpen}
        onClose={() => {
          setIsClientFormOpen(false);
          setSelectedClient(null);
        }}
        onSubmit={handleClientSubmit}
        client={selectedClient}
      />

      <ClientImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImport}
      />
    </div>
  );
};
