
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
  Filter,
  Search,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';

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
    tier: 'A'
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
    tier: 'B'
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
    tier: 'A'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ativo': 'bg-green-100 text-green-800',
    'Vencido': 'bg-red-100 text-red-800',
    'Suspenso': 'bg-yellow-100 text-yellow-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getRenewalColor = (status: string) => {
  const colors = {
    'Renovado': 'bg-green-100 text-green-800',
    'Pendente': 'bg-yellow-100 text-yellow-800',
    'Em Negociação': 'bg-blue-100 text-blue-800',
    'Rejeitado': 'bg-red-100 text-red-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getExpiryColor = (days: number) => {
  if (days < 0) return 'text-red-600';
  if (days <= 30) return 'text-orange-600';
  if (days <= 60) return 'text-yellow-600';
  return 'text-green-600';
};

export const ContractsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Contratos Ativos</p>
              <p className="text-2xl font-bold text-green-600">127</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vencem em 30 dias</p>
              <p className="text-2xl font-bold text-orange-600">7</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Valor Total (MRR)</p>
              <p className="text-2xl font-bold text-blue-600">R$ 485k</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Renovação</p>
              <p className="text-2xl font-bold text-green-600">94.2%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Contracts Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Contratos</h2>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Novo Contrato
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar por cliente, número do contrato..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Todos">Todos Status</option>
                <option value="Ativo">Ativo</option>
                <option value="Vencido">Vencido</option>
                <option value="Suspenso">Suspenso</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contrato</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Renovação</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contractsData.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{contract.clientName}</div>
                      <div className="text-sm text-gray-500">Nível {contract.tier}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{contract.contractNumber}</div>
                    <div className="text-xs text-gray-500">
                      {contract.services.map(service => (
                        <span key={service} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                          {service}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{contract.startDate}</div>
                    <div className="text-sm text-gray-500">até {contract.endDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      R$ {(contract.value / 1000).toFixed(0)}k
                    </div>
                    <div className="text-xs text-gray-500">anual</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(contract.status)}`}>
                      {contract.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRenewalColor(contract.renewalStatus)}`}>
                      {contract.renewalStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm font-medium ${getExpiryColor(contract.daysToExpiry)}`}>
                      {contract.daysToExpiry > 0 ? `${contract.daysToExpiry} dias` : 'Vencido'}
                    </div>
                    {contract.daysToExpiry <= 30 && contract.daysToExpiry > 0 && (
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button variant="ghost" size="sm">
                        Renovar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
