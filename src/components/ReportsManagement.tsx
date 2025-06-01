
import React, { useState } from 'react';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter,
  Plus,
  Eye,
  Share,
  Settings,
  TrendingUp,
  Users,
  DollarSign,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const reportsTemplates = [
  {
    id: 1,
    name: 'Executive Summary',
    description: 'Relatório executivo com principais métricas de CS',
    type: 'Dashboard',
    frequency: 'Mensal',
    last_generated: '2024-01-15',
    status: 'Ativo'
  },
  {
    id: 2,
    name: 'Customer Health Report',
    description: 'Análise detalhada do health score dos clientes',
    type: 'Relatório',
    frequency: 'Semanal',
    last_generated: '2024-01-12',
    status: 'Ativo'
  },
  {
    id: 3,
    name: 'Churn Risk Analysis',
    description: 'Identificação e análise de clientes em risco',
    type: 'Dashboard',
    frequency: 'Diário',
    last_generated: '2024-01-15',
    status: 'Ativo'
  },
  {
    id: 4,
    name: 'Revenue Growth Report',
    description: 'Análise de crescimento de receita e oportunidades',
    type: 'Relatório',
    frequency: 'Mensal',
    last_generated: '2024-01-01',
    status: 'Pausado'
  }
];

const chartData = {
  revenue: [
    { month: 'Jan', recurring: 485, expansion: 67, new: 45 },
    { month: 'Fev', recurring: 492, expansion: 72, new: 38 },
    { month: 'Mar', recurring: 498, expansion: 85, new: 52 },
    { month: 'Abr', recurring: 515, expansion: 91, new: 41 },
    { month: 'Mai', recurring: 523, expansion: 78, new: 48 },
    { month: 'Jun', recurring: 535, expansion: 95, new: 55 }
  ],
  npsDistribution: [
    { name: 'Promotores', value: 57, fill: '#10B981' },
    { name: 'Passivos', value: 31, fill: '#F59E0B' },
    { name: 'Detratores', value: 12, fill: '#EF4444' }
  ],
  churnPrevention: [
    { month: 'Jan', identified: 15, prevented: 12, churned: 3 },
    { month: 'Fev', identified: 18, prevented: 14, churned: 4 },
    { month: 'Mar', identified: 12, prevented: 10, churned: 2 },
    { month: 'Abr', identified: 20, prevented: 17, churned: 3 },
    { month: 'Mai', identified: 14, prevented: 11, churned: 3 },
    { month: 'Jun', identified: 16, prevented: 13, churned: 3 }
  ]
};

const customDashboards = [
  {
    id: 1,
    name: 'CS Performance',
    widgets: ['NPS Trend', 'Churn Rate', 'Customer Health', 'Revenue Impact'],
    last_viewed: '2024-01-15 14:30',
    shared_with: 3
  },
  {
    id: 2,
    name: 'Executive KPIs',
    widgets: ['MRR Growth', 'LTV:CAC Ratio', 'Retention Rate', 'Expansion Revenue'],
    last_viewed: '2024-01-15 09:15',
    shared_with: 5
  },
  {
    id: 3,
    name: 'Team Performance',
    widgets: ['CSM Productivity', 'Response Times', 'Client Satisfaction', 'Activity Summary'],
    last_viewed: '2024-01-14 16:45',
    shared_with: 8
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ativo': 'bg-green-100 text-green-800',
    'Pausado': 'bg-gray-100 text-gray-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const ReportsManagement = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Relatórios Ativos</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Dashboards</p>
              <p className="text-2xl font-bold text-purple-600">6</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Exportações/Mês</p>
              <p className="text-2xl font-bold text-orange-600">87</p>
            </div>
            <Download className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'templates' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Templates de Relatórios
              </button>
              <button
                onClick={() => setActiveTab('dashboards')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'dashboards' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dashboards Personalizados
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Analytics Avançados
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
                <option value="1y">Último ano</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </div>

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Templates de Relatórios</h2>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Novo Template
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportsTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(template.status)}`}>
                          {template.status}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Tipo:</span>
                          <span className="ml-1 font-medium">{template.type}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Frequência:</span>
                          <span className="ml-1 font-medium">{template.frequency}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-500">Última geração:</span>
                          <span className="ml-1 font-medium">{template.last_generated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Exportar
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dashboards Tab */}
        {activeTab === 'dashboards' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Dashboards Personalizados</h2>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Novo Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {customDashboards.map((dashboard) => (
                <div key={dashboard.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{dashboard.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Widgets ({dashboard.widgets.length}):</p>
                      <div className="flex flex-wrap gap-1">
                        {dashboard.widgets.map((widget, index) => (
                          <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {widget}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{dashboard.shared_with} usuários</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{dashboard.last_viewed}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Abrir Dashboard
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics Avançados</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Revenue Analytics */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Análise de Receita</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Exportar
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData.revenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Bar dataKey="recurring" stackId="a" fill="#3B82F6" name="Recorrente" />
                    <Bar dataKey="expansion" stackId="a" fill="#10B981" name="Expansão" />
                    <Bar dataKey="new" stackId="a" fill="#F59E0B" name="Novos" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* NPS Distribution */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Distribuição NPS</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Exportar
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData.npsDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Churn Prevention Analytics */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Eficácia da Prevenção de Churn</h3>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-1" />
                  Exportar
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.churnPrevention}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="identified" stroke="#F59E0B" strokeWidth={2} name="Identificados" />
                  <Line type="monotone" dataKey="prevented" stroke="#10B981" strokeWidth={2} name="Prevenidos" />
                  <Line type="monotone" dataKey="churned" stroke="#EF4444" strokeWidth={2} name="Perdidos" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
