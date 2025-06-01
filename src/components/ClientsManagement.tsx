
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
  Clock
} from 'lucide-react';
import { Button } from './ui/button';

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
    opportunities: ['Upgrade Premium', 'Novo Módulo']
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
    opportunities: ['Cross-sell']
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
    opportunities: ['Retenção urgente']
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

  const getRiskColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-100';
    if (score <= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTierColor = (tier: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-800',
      'B': 'bg-blue-100 text-blue-800',
      'C': 'bg-gray-100 text-gray-800'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getNPSColor = (category: string) => {
    const colors = {
      'Promotor': 'text-green-600',
      'Passivo': 'text-yellow-600',
      'Detrator': 'text-red-600'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Gestão de Clientes</h2>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {Object.entries(filterOptions).map(([key, options]) => (
              <select
                key={key}
                value={filters[key as keyof typeof filters]}
                onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nível</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NPS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LTV</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clientsData.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.contact}</div>
                    <div className="text-xs text-gray-400">{client.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTierColor(client.tier)}`}>
                    Nível {client.tier}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{client.profile}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className={`text-lg font-semibold ${getNPSColor(client.npsCategory)}`}>{client.nps}</span>
                    {client.npsCategory === 'Promotor' && <TrendingUp className="w-4 h-4 text-green-600" />}
                    {client.npsCategory === 'Detrator' && <TrendingDown className="w-4 h-4 text-red-600" />}
                  </div>
                  <div className="text-xs text-gray-500">{client.npsCategory}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">R$ {(client.ltv / 1000).toFixed(0)}k</div>
                  <div className="text-xs text-gray-500">Proj: R$ {(client.ltvProjected / 1000).toFixed(0)}k</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(client.riskScore)}`}>
                    {client.riskScore}%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {client.status === 'Ativo' && <CheckCircle className="w-4 h-4 text-green-600" />}
                    {client.status === 'Risco' && <AlertTriangle className="w-4 h-4 text-red-600" />}
                    <span className={`text-sm ${client.status === 'Ativo' ? 'text-green-600' : 'text-red-600'}`}>
                      {client.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Ver Detalhes
                    </Button>
                    <Button variant="ghost" size="sm">
                      Estratégias
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Mostrando 1-3 de 127 clientes
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Anterior</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Próximo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
