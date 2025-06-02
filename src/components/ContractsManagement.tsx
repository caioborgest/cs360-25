
import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Plus, 
  Download,
  Upload,
  Filter,
  Search,
  TrendingUp,
  BarChart3,
  CalendarIcon,
  Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ContractForm } from './ContractForm';
import { ContractCalendar } from './ContractCalendar';
import { ContractAnalytics } from './ContractAnalytics';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';

const contractsData = [
  {
    id: 1,
    clientName: 'TechCorp LTDA',
    contractNumber: 'CT-2024-001',
    startDate: '2024-01-15',
    endDate: '2024-12-15',
    value: 120000,
    status: 'Ativo',
    renewalStatus: 'Pendente',
    daysToExpiry: 45,
    services: ['Premium', 'Support'],
    tier: 'A',
    lastModified: '2024-06-01',
    modifiedBy: 'João Silva'
  },
  {
    id: 2,
    clientName: 'StartupX',
    contractNumber: 'CT-2024-002',
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    value: 60000,
    status: 'Ativo',
    renewalStatus: 'Renovado',
    daysToExpiry: 125,
    services: ['Basic', 'Analytics'],
    tier: 'B',
    lastModified: '2024-05-15',
    modifiedBy: 'Maria Santos'
  },
  {
    id: 3,
    clientName: 'BigCorp S.A.',
    contractNumber: 'CT-2024-003',
    startDate: '2024-02-10',
    endDate: '2024-08-10',
    value: 200000,
    status: 'Vencido',
    renewalStatus: 'Em Negociação',
    daysToExpiry: -15,
    services: ['Enterprise', 'Premium Support', 'Custom'],
    tier: 'A',
    lastModified: '2024-08-05',
    modifiedBy: 'Carlos Lima'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ativo': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'Vencido': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    'Suspenso': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'Cancelado': 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

const getRenewalColor = (status: string) => {
  const colors = {
    'Renovado': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'Pendente': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'Em Negociação': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'Rejeitado': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

const getExpiryColor = (days: number) => {
  if (days < 0) return 'text-red-600 dark:text-red-400';
  if (days <= 30) return 'text-orange-600 dark:text-orange-400';
  if (days <= 60) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-green-600 dark:text-green-400';
};

export const ContractsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  const handleExport = () => {
    const csvContent = [
      ['Cliente', 'Contrato', 'Início', 'Término', 'Valor', 'Status', 'Renovação'],
      ...contractsData.map(contract => [
        contract.clientName,
        contract.contractNumber,
        contract.startDate,
        contract.endDate,
        contract.value,
        contract.status,
        contract.renewalStatus
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contratos.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx,.xls';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Arquivo selecionado para importação:', file.name);
        // Aqui você implementaria a lógica de importação
      }
    };
    input.click();
  };

  const handleContractSubmit = (data: any) => {
    console.log('Dados do contrato:', data);
    // Aqui você implementaria a lógica para salvar o contrato
  };

  const filteredContracts = contractsData.filter(contract => {
    const matchesSearch = contract.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.contractNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || contract.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Contratos Ativos</p>
              <p className="text-2xl font-bold text-green-600">127</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Vencem em 30 dias</p>
              <p className="text-2xl font-bold text-orange-600">7</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor Total (MRR)</p>
              <p className="text-2xl font-bold text-blue-600">R$ 485k</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Renovação</p>
              <p className="text-2xl font-bold text-green-600">94.2%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gestão de Contratos</h2>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handleImport}>
                <Upload className="w-4 h-4 mr-2" />
                Importar
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600" onClick={() => setIsFormOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Contrato
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="list" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Lista de Contratos
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Calendário
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Análises
              </TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="mt-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Buscar por cliente, número do contrato..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="Todos">Todos Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Vencido">Vencido</option>
                    <option value="Suspenso">Suspenso</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Contrato</TableHead>
                      <TableHead>Período</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Renovação</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Histórico</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContracts.map((contract) => (
                      <TableRow key={contract.id}>
                        <TableCell>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{contract.clientName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Nível {contract.tier}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{contract.contractNumber}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {contract.services.map(service => (
                              <span key={service} className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs mr-1 mb-1">
                                {service}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-900 dark:text-white">{contract.startDate}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">até {contract.endDate}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            R$ {(contract.value / 1000).toFixed(0)}k
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">anual</div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(contract.status)}`}>
                            {contract.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRenewalColor(contract.renewalStatus)}`}>
                            {contract.renewalStatus}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className={`text-sm font-medium ${getExpiryColor(contract.daysToExpiry)}`}>
                            {contract.daysToExpiry > 0 ? `${contract.daysToExpiry} dias` : 'Vencido'}
                          </div>
                          {contract.daysToExpiry <= 30 && contract.daysToExpiry > 0 && (
                            <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            <div>Modificado em: {contract.lastModified}</div>
                            <div>Por: {contract.modifiedBy}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => {
                              setSelectedContract(contract);
                              setIsFormOpen(true);
                            }}>
                              Editar
                            </Button>
                            <Button variant="ghost" size="sm">
                              Renovar
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <ContractCalendar />
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <ContractAnalytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ContractForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedContract(null);
        }}
        onSubmit={handleContractSubmit}
        contract={selectedContract}
      />
    </div>
  );
};
