
import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users,
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter, Cell } from 'recharts';

const ltvTrendData = [
  { month: 'Jan', ltv: 85000, cac: 3200, ratio: 26.6 },
  { month: 'Fev', ltv: 88000, cac: 3100, ratio: 28.4 },
  { month: 'Mar', ltv: 92000, cac: 2900, ratio: 31.7 },
  { month: 'Abr', ltv: 96000, cac: 2800, ratio: 34.3 },
  { month: 'Mai', ltv: 102000, cac: 2700, ratio: 37.8 },
  { month: 'Jun', ltv: 108000, cac: 2900, ratio: 37.2 },
  { month: 'Jul', ltv: 115000, cac: 3000, ratio: 38.3 },
  { month: 'Ago', ltv: 118000, cac: 2850, ratio: 41.4 },
  { month: 'Set', ltv: 124000, cac: 2750, ratio: 45.1 },
  { month: 'Out', ltv: 128000, cac: 2800, ratio: 45.7 },
  { month: 'Nov', ltv: 132000, cac: 2900, ratio: 45.5 },
  { month: 'Dez', ltv: 138000, cac: 2850, ratio: 48.4 }
];

const segmentData = [
  { segment: 'Nível A', ltv: 185000, cac: 4200, ratio: 44.0, clients: 45, color: '#10B981' },
  { segment: 'Nível B', ltv: 98000, cac: 2800, ratio: 35.0, clients: 67, color: '#3B82F6' },
  { segment: 'Nível C', ltv: 45000, cac: 1500, ratio: 30.0, clients: 15, color: '#F59E0B' },
];

const cohortData = [
  { cohort: 'Q1 2023', ltv: 125000, clients: 15, retention: 95 },
  { cohort: 'Q2 2023', ltv: 138000, clients: 22, retention: 92 },
  { cohort: 'Q3 2023', ltv: 142000, clients: 28, retention: 89 },
  { cohort: 'Q4 2023', ltv: 148000, clients: 32, retention: 87 },
  { cohort: 'Q1 2024', ltv: 165000, clients: 30, retention: 94 }
];

const topClientsLTV = [
  { client: 'TechCorp LTDA', ltv: 245000, projected: 285000, tier: 'A', risk: 15 },
  { client: 'BigCorp S.A.', ltv: 220000, projected: 198000, tier: 'A', risk: 85 },
  { client: 'InnovaCorp', ltv: 185000, projected: 210000, tier: 'A', risk: 25 },
  { client: 'StartupX', ltv: 125000, projected: 145000, tier: 'B', risk: 35 },
  { client: 'MegaCorp Inc', ltv: 115000, projected: 130000, tier: 'B', risk: 20 }
];

export const LTVCACManagement = () => {
  const [viewMode, setViewMode] = useState('trend');
  const [timeFilter, setTimeFilter] = useState('12M');

  const currentLTV = 124000;
  const currentCAC = 2800;
  const ltvCacRatio = Math.round((currentLTV / currentCAC) * 10) / 10;

  const getTierColor = (tier: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-800',
      'B': 'bg-blue-100 text-blue-800',
      'C': 'bg-gray-100 text-gray-800'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getRiskColor = (risk: number) => {
    if (risk <= 30) return 'text-green-600';
    if (risk <= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-600">LTV Médio</span>
            </div>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">R$ {(currentLTV / 1000).toFixed(0)}k</p>
              <p className="text-sm text-gray-500">Lifetime Value</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">CAC Médio</span>
            </div>
            <TrendingDown className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">R$ {(currentCAC / 1000).toFixed(1)}k</p>
            <p className="text-sm text-gray-500">Custo de Aquisição</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Ratio LTV:CAC</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CircularProgress 
              value={Math.min(ltvCacRatio * 2, 100)} 
              color={ltvCacRatio >= 3 ? 'green' : ltvCacRatio >= 2 ? 'blue' : 'red'}
              size={60}
            />
            <div>
              <p className="text-2xl font-bold text-gray-900">{ltvCacRatio}:1</p>
              <p className="text-sm text-gray-500">Meta: 3:1</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-orange-600" />
              <span className="text-sm font-medium text-gray-600">Payback Period</span>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">8.2</p>
            <p className="text-sm text-gray-500">meses</p>
          </div>
        </div>
      </div>

      {/* View Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setViewMode('trend')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'trend' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tendência
            </button>
            <button
              onClick={() => setViewMode('segment')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'segment' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Por Segmento
            </button>
            <button
              onClick={() => setViewMode('cohort')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'cohort' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Análise de Cohort
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 text-xs rounded ${timeFilter === '12M' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
              onClick={() => setTimeFilter('12M')}
            >
              12M
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded ${timeFilter === '6M' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
              onClick={() => setTimeFilter('6M')}
            >
              6M
            </button>
            <button 
              className={`px-3 py-1 text-xs rounded ${timeFilter === '3M' ? 'bg-blue-100 text-blue-700' : 'text-gray-500'}`}
              onClick={() => setTimeFilter('3M')}
            >
              3M
            </button>
          </div>
        </div>

        {/* Trend View */}
        {viewMode === 'trend' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evolução LTV vs CAC</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ltvTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="ltv" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="LTV"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cac" 
                    stroke="#EF4444" 
                    strokeWidth={2}
                    name="CAC"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ratio LTV:CAC</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ltvTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="ratio" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Segment View */}
        {viewMode === 'segment' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LTV e CAC por Segmento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {segmentData.map((segment) => (
                <div key={segment.segment} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
                    <span className="text-sm text-gray-500">{segment.clients} clientes</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">LTV:</span>
                      <span className="font-medium">R$ {(segment.ltv / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">CAC:</span>
                      <span className="font-medium">R$ {(segment.cac / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ratio:</span>
                      <span className="font-bold" style={{ color: segment.color }}>
                        {segment.ratio}:1
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={segmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Bar dataKey="ltv" fill="#10B981" name="LTV" />
                <Bar dataKey="cac" fill="#EF4444" name="CAC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Cohort View */}
        {viewMode === 'cohort' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Análise de Cohort - LTV</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cohortData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="cohort" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Bar dataKey="ltv" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Top Clients by LTV */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Top Clientes por LTV</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LTV Atual</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LTV Projetado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nível</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risco</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topClientsLTV.map((client, index) => (
                <tr key={client.client} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-2">#{index + 1}</span>
                      <span className="text-sm font-medium text-gray-900">{client.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">
                      R$ {(client.ltv / 1000).toFixed(0)}k
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">
                        R$ {(client.projected / 1000).toFixed(0)}k
                      </span>
                      {client.projected > client.ltv ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTierColor(client.tier)}`}>
                      Nível {client.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getRiskColor(client.risk)}`}>
                      {client.risk}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm">
                      Ver Detalhes
                    </Button>
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
