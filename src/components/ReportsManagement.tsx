
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
  Target,
  Zap,
  Brain,
  Grid,
  Maximize,
  RefreshCw,
  Edit,
  Trash2,
  Copy,
  Save
} from 'lucide-react';
import { Button } from './ui/button';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  Tooltip,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  ScatterChart,
  Scatter
} from 'recharts';

const reportsTemplates = [
  {
    id: 1,
    name: 'Executive Summary',
    description: 'Relatório executivo com principais métricas de CS',
    type: 'Dashboard',
    frequency: 'Mensal',
    last_generated: '2024-01-15',
    status: 'Ativo',
    widgets: ['Revenue Growth', 'NPS Score', 'Churn Rate', 'LTV Analysis'],
    shared_with: 5,
    auto_export: true,
    formats: ['PDF', 'PowerPoint']
  },
  {
    id: 2,
    name: 'Customer Health Report',
    description: 'Análise detalhada do health score dos clientes',
    type: 'Relatório',
    frequency: 'Semanal',
    last_generated: '2024-01-12',
    status: 'Ativo',
    widgets: ['Health Distribution', 'Risk Matrix', 'Engagement Metrics'],
    shared_with: 12,
    auto_export: false,
    formats: ['Excel', 'CSV']
  },
  {
    id: 3,
    name: 'Churn Risk Analysis',
    description: 'Identificação e análise de clientes em risco',
    type: 'Dashboard',
    frequency: 'Diário',
    last_generated: '2024-01-15',
    status: 'Ativo',
    widgets: ['Churn Probability', 'Early Warning', 'Action Required'],
    shared_with: 8,
    auto_export: true,
    formats: ['Email', 'Push']
  },
  {
    id: 4,
    name: 'Revenue Growth Report',
    description: 'Análise de crescimento de receita e oportunidades',
    type: 'Relatório',
    frequency: 'Mensal',
    last_generated: '2024-01-01',
    status: 'Pausado',
    widgets: ['MRR Trends', 'Upsell Opportunities', 'Expansion Revenue'],
    shared_with: 6,
    auto_export: false,
    formats: ['PDF', 'Excel']
  }
];

const chartData = {
  revenue: [
    { month: 'Jan', recurring: 485, expansion: 67, new: 45, total: 597 },
    { month: 'Fev', recurring: 492, expansion: 72, new: 38, total: 602 },
    { month: 'Mar', recurring: 498, expansion: 85, new: 52, total: 635 },
    { month: 'Abr', recurring: 515, expansion: 91, new: 41, total: 647 },
    { month: 'Mai', recurring: 523, expansion: 78, new: 48, total: 649 },
    { month: 'Jun', recurring: 535, expansion: 95, new: 55, total: 685 }
  ],
  npsDistribution: [
    { name: 'Promotores', value: 57, fill: '#10B981', count: 342 },
    { name: 'Passivos', value: 31, fill: '#F59E0B', count: 186 },
    { name: 'Detratores', value: 12, fill: '#EF4444', count: 72 }
  ],
  churnPrevention: [
    { month: 'Jan', identified: 15, prevented: 12, churned: 3, rate: 80 },
    { month: 'Fev', identified: 18, prevented: 14, churned: 4, rate: 78 },
    { month: 'Mar', identified: 12, prevented: 10, churned: 2, rate: 83 },
    { month: 'Abr', identified: 20, prevented: 17, churned: 3, rate: 85 },
    { month: 'Mai', identified: 14, prevented: 11, churned: 3, rate: 79 },
    { month: 'Jun', identified: 16, prevented: 13, churned: 3, rate: 81 }
  ],
  healthScore: [
    { segment: 'Nível A', healthy: 89, risk: 8, critical: 3 },
    { segment: 'Nível B', healthy: 67, risk: 23, critical: 10 },
    { segment: 'Nível C', healthy: 34, risk: 41, critical: 25 },
    { segment: 'Arrojado', healthy: 78, risk: 15, critical: 7 },
    { segment: 'Moderado', healthy: 65, risk: 25, critical: 10 },
    { segment: 'Conservador', healthy: 52, risk: 32, critical: 16 }
  ],
  csmPerformance: [
    { csm: 'João Silva', clients: 12, nps: 78, upsells: 4, retention: 95 },
    { csm: 'Maria Santos', clients: 15, nps: 82, upsells: 6, retention: 92 },
    { csm: 'Carlos Lima', clients: 11, nps: 74, upsells: 3, retention: 88 },
    { csm: 'Ana Costa', clients: 13, nps: 86, upsells: 5, retention: 97 },
    { csm: 'Pedro Oliveira', clients: 14, nps: 71, upsells: 2, retention: 84 }
  ]
};

const customDashboards = [
  {
    id: 1,
    name: 'CS Performance',
    description: 'Dashboard focado em performance do time de CS',
    widgets: ['NPS Trend', 'Churn Rate', 'Customer Health', 'Revenue Impact'],
    last_viewed: '2024-01-15 14:30',
    shared_with: 3,
    layout: 'grid',
    auto_refresh: true,
    filters: ['Segmento', 'Período', 'CSM']
  },
  {
    id: 2,
    name: 'Executive KPIs',
    description: 'Métricas executivas de alto nível',
    widgets: ['MRR Growth', 'LTV:CAC Ratio', 'Retention Rate', 'Expansion Revenue'],
    last_viewed: '2024-01-15 09:15',
    shared_with: 5,
    layout: 'cards',
    auto_refresh: false,
    filters: ['Período', 'Região']
  },
  {
    id: 3,
    name: 'Team Performance',
    description: 'Acompanhamento de performance individual',
    widgets: ['CSM Productivity', 'Response Times', 'Client Satisfaction', 'Activity Summary'],
    last_viewed: '2024-01-14 16:45',
    shared_with: 8,
    layout: 'mixed',
    auto_refresh: true,
    filters: ['CSM', 'Período', 'Métrica']
  }
];

const widgetLibrary = [
  { id: 'revenue-chart', name: 'Gráfico de Receita', type: 'LineChart', category: 'Financeiro' },
  { id: 'nps-gauge', name: 'Gauge NPS', type: 'Gauge', category: 'Satisfação' },
  { id: 'churn-heatmap', name: 'Heatmap Churn', type: 'Heatmap', category: 'Retenção' },
  { id: 'health-radar', name: 'Radar Health Score', type: 'RadarChart', category: 'Saúde' },
  { id: 'csm-ranking', name: 'Ranking CSMs', type: 'Table', category: 'Performance' },
  { id: 'opportunities-pie', name: 'Pizza Oportunidades', type: 'PieChart', category: 'Vendas' }
];

const exportFormats = [
  { id: 'pdf', name: 'PDF', icon: '📄', description: 'Formato ideal para apresentações' },
  { id: 'excel', name: 'Excel', icon: '📊', description: 'Para análise de dados' },
  { id: 'powerpoint', name: 'PowerPoint', icon: '📈', description: 'Apresentações executivas' },
  { id: 'csv', name: 'CSV', icon: '📋', description: 'Dados brutos' },
  { id: 'email', name: 'Email', icon: '📧', description: 'Envio automático' }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ativo': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pausado': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
    'Rascunho': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const ReportsManagement = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [dateRange, setDateRange] = useState('30d');
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const [dashboardBuilder, setDashboardBuilder] = useState(false);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Relatórios Ativos</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            +3 este mês
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Dashboards</p>
              <p className="text-2xl font-bold text-purple-600">6</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <Brain className="w-4 h-4 mr-1" />
            2 com IA
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Usuários Ativos</p>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            98% engajamento
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Exportações/Mês</p>
              <p className="text-2xl font-bold text-orange-600">87</p>
            </div>
            <Download className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-orange-600">
            <Zap className="w-4 h-4 mr-1" />
            45% automático
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('templates')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'templates' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                Templates de Relatórios
              </button>
              <button
                onClick={() => setActiveTab('dashboards')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'dashboards' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                Dashboards Personalizados
              </button>
              <button
                onClick={() => setActiveTab('builder')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'builder' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="w-4 h-4 mr-2 inline" />
                Constructor
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'analytics' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                Analytics Avançados
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm dark:bg-gray-700 dark:text-white"
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
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
            </div>
          </div>
        </div>

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Templates de Relatórios</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Todos
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Template
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportsTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{template.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(template.status)}`}>
                          {template.status}
                        </span>
                        {template.auto_export && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            <Zap className="w-3 h-3 mr-1" />
                            Auto
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{template.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Tipo:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{template.type}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Frequência:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{template.frequency}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Compartilhado:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{template.shared_with} usuários</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Última geração:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{template.last_generated}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Widgets ({template.widgets.length}):</p>
                        <div className="flex flex-wrap gap-1">
                          {template.widgets.map((widget, index) => (
                            <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                              {widget}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Formatos de Export:</p>
                        <div className="flex flex-wrap gap-1">
                          {template.formats.map((format, index) => (
                            <span key={index} className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
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
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboards Personalizados</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Grid className="w-4 h-4 mr-2" />
                  Gerenciar Layouts
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Dashboard
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {customDashboards.map((dashboard) => (
                <div key={dashboard.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{dashboard.name}</h3>
                        {dashboard.auto_refresh && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Auto
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{dashboard.description}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Maximize className="w-4 h-4" />
                      </Button>
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
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Widgets ({dashboard.widgets.length}):</p>
                      <div className="flex flex-wrap gap-1">
                        {dashboard.widgets.map((widget, index) => (
                          <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                            {widget}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Filtros Disponíveis:</p>
                      <div className="flex flex-wrap gap-1">
                        {dashboard.filters.map((filter, index) => (
                          <span key={index} className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">
                            {filter}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
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

        {/* Dashboard Builder Tab */}
        {activeTab === 'builder' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Constructor de Dashboards</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Rascunho
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600">
                  <Eye className="w-4 h-4 mr-2" />
                  Visualizar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Widget Library */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Biblioteca de Widgets</h3>
                <div className="space-y-2">
                  {widgetLibrary.map((widget) => (
                    <div key={widget.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{widget.name}</h4>
                        <Button variant="ghost" size="sm">
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{widget.type}</p>
                      <span className="inline-block bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-xs mt-1">
                        {widget.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Canvas */}
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Canvas do Dashboard</h3>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 min-h-96">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Grid className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Arraste widgets aqui para criar seu dashboard</p>
                    <p className="text-sm">Personalize layouts, filtros e configurações de cada widget</p>
                  </div>
                </div>

                {/* Layout Options */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Opções de Layout</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-3 border border-gray-200 dark:border-gray-600 rounded text-center hover:bg-white dark:hover:bg-gray-600 transition-colors">
                      <div className="w-full h-8 bg-gray-300 dark:bg-gray-500 rounded mb-2"></div>
                      <span className="text-xs">Grid</span>
                    </button>
                    <button className="p-3 border border-gray-200 dark:border-gray-600 rounded text-center hover:bg-white dark:hover:bg-gray-600 transition-colors">
                      <div className="space-y-1">
                        <div className="w-full h-3 bg-gray-300 dark:bg-gray-500 rounded"></div>
                        <div className="w-full h-3 bg-gray-300 dark:bg-gray-500 rounded"></div>
                      </div>
                      <span className="text-xs mt-2 block">Cards</span>
                    </button>
                    <button className="p-3 border border-gray-200 dark:border-gray-600 rounded text-center hover:bg-white dark:hover:bg-gray-600 transition-colors">
                      <div className="space-y-1">
                        <div className="w-full h-2 bg-gray-300 dark:bg-gray-500 rounded"></div>
                        <div className="w-full h-4 bg-gray-300 dark:bg-gray-500 rounded"></div>
                      </div>
                      <span className="text-xs mt-2 block">Misto</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Analytics Avançados</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Revenue Analytics */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Análise de Receita</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Maximize className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={chartData.revenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="recurring" stackId="a" fill="#3B82F6" name="Recorrente" />
                    <Bar dataKey="expansion" stackId="a" fill="#10B981" name="Expansão" />
                    <Bar dataKey="new" stackId="a" fill="#F59E0B" name="Novos" />
                    <Line type="monotone" dataKey="total" stroke="#8B5CF6" strokeWidth={3} name="Total" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* NPS Distribution */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Distribuição NPS</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Maximize className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData.npsDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value, count }) => `${name}: ${value}% (${count})`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.npsDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Health Score Radar */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Health Score por Segmento</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={chartData.healthScore}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="segment" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Saudável" dataKey="healthy" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                    <Radar name="Risco" dataKey="risk" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                    <Radar name="Crítico" dataKey="critical" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* CSM Performance */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance CSMs</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={chartData.csmPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nps" name="NPS" />
                    <YAxis dataKey="retention" name="Retenção %" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="CSMs" dataKey="retention" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Churn Prevention Analytics */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Eficácia da Prevenção de Churn</h3>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={chartData.churnPrevention}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="identified" fill="#F59E0B" name="Identificados" />
                  <Bar yAxisId="left" dataKey="prevented" fill="#10B981" name="Prevenidos" />
                  <Bar yAxisId="left" dataKey="churned" fill="#EF4444" name="Perdidos" />
                  <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#8B5CF6" strokeWidth={3} name="Taxa Sucesso %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
