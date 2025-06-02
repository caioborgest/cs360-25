import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target,
  Users,
  BarChart3,
  Calculator,
  Filter,
  Download,
  Eye,
  Settings,
  Crown,
  Award,
  Activity
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  ScatterChart,
  Scatter,
  ComposedChart,
  Area,
  AreaChart,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
  PieChart,
  Pie
} from 'recharts';

const ltvCacData = [
  { month: 'Jan', ltv: 124000, cac: 2800, ratio: 44.3, clients: 127, revenue: 485000 },
  { month: 'Fev', ltv: 128000, cac: 2650, ratio: 48.3, clients: 132, revenue: 502000 },
  { month: 'Mar', ltv: 132000, cac: 2900, ratio: 45.5, clients: 138, revenue: 518000 },
  { month: 'Abr', ltv: 135000, cac: 2750, ratio: 49.1, clients: 145, revenue: 535000 },
  { month: 'Mai', ltv: 142000, cac: 2600, ratio: 54.6, clients: 151, revenue: 548000 },
  { month: 'Jun', ltv: 148000, cac: 2450, ratio: 60.4, clients: 158, revenue: 565000 }
];

const segmentData = [
  { 
    segment: 'Nível A', 
    ltv: 185000, 
    cac: 3200, 
    ratio: 57.8, 
    clients: 45,
    avgContract: 24,
    churnRate: 2.1,
    payback: 8
  },
  { 
    segment: 'Nível B', 
    ltv: 128000, 
    cac: 2800, 
    ratio: 45.7, 
    clients: 67,
    avgContract: 18,
    churnRate: 4.8,
    payback: 12
  },
  { 
    segment: 'Nível C', 
    ltv: 85000, 
    cac: 2200, 
    ratio: 38.6, 
    clients: 15,
    avgContract: 12,
    churnRate: 8.5,
    payback: 16
  },
  { 
    segment: 'Arrojado', 
    ltv: 165000, 
    cac: 2950, 
    ratio: 55.9, 
    clients: 34,
    avgContract: 22,
    churnRate: 3.2,
    payback: 9
  },
  { 
    segment: 'Moderado', 
    ltv: 125000, 
    cac: 2650, 
    ratio: 47.2, 
    clients: 78,
    avgContract: 16,
    churnRate: 5.1,
    payback: 13
  },
  { 
    segment: 'Conservador', 
    ltv: 95000, 
    cac: 2400, 
    ratio: 39.6, 
    clients: 15,
    avgContract: 14,
    churnRate: 7.8,
    payback: 18
  }
];

const cohortData = [
  { cohort: 'Q1 2023', ltv3m: 45000, ltv6m: 78000, ltv12m: 135000, ltv24m: 185000 },
  { cohort: 'Q2 2023', ltv3m: 48000, ltv6m: 82000, ltv12m: 142000, ltv24m: 195000 },
  { cohort: 'Q3 2023', ltv3m: 52000, ltv6m: 88000, ltv12m: 148000, ltv24m: null },
  { cohort: 'Q4 2023', ltv3m: 55000, ltv6m: 92000, ltv12m: 155000, ltv24m: null },
  { cohort: 'Q1 2024', ltv3m: 58000, ltv6m: 98000, ltv12m: null, ltv24m: null },
  { cohort: 'Q2 2024', ltv3m: 62000, ltv6m: null, ltv12m: null, ltv24m: null }
];

const calculationModels = [
  {
    id: 1,
    name: 'Modelo Tradicional',
    description: 'LTV = ARPU × Margem Bruta × (1/Churn Rate)',
    active: true,
    ltv: 148000,
    accuracy: 85
  },
  {
    id: 2,
    name: 'Modelo Cohort',
    description: 'Baseado em dados históricos de cohorts',
    active: false,
    ltv: 162000,
    accuracy: 92
  },
  {
    id: 3,
    name: 'Modelo Preditivo',
    description: 'Machine Learning com 15+ variáveis',
    active: false,
    ltv: 156000,
    accuracy: 88
  }
];

const clientRanking = [
  { id: 1, name: 'TechCorp LTDA', ltv: 245000, segment: 'Nível A', nps: 89, churn_risk: 'Baixo', monthly_revenue: 8500 },
  { id: 2, name: 'InnovaTech S.A.', ltv: 189000, segment: 'Arrojado', nps: 76, churn_risk: 'Baixo', monthly_revenue: 6200 },
  { id: 3, name: 'BigCorp Industries', ltv: 167000, segment: 'Nível A', nps: 82, churn_risk: 'Médio', monthly_revenue: 5800 },
  { id: 4, name: 'StartupX', ltv: 145000, segment: 'Nível B', nps: 65, churn_risk: 'Alto', monthly_revenue: 4900 },
  { id: 5, name: 'MegaCompany', ltv: 134000, segment: 'Moderado', nps: 71, churn_risk: 'Baixo', monthly_revenue: 4200 },
  { id: 6, name: 'FastGrow Ltd', ltv: 128000, segment: 'Nível B', nps: 58, churn_risk: 'Alto', monthly_revenue: 3800 },
  { id: 7, name: 'StableCore', ltv: 115000, segment: 'Conservador', nps: 74, churn_risk: 'Baixo', monthly_revenue: 3500 },
  { id: 8, name: 'TechSolutions', ltv: 98000, segment: 'Nível C', nps: 45, churn_risk: 'Crítico', monthly_revenue: 2800 }
];

const ltvDistribution = [
  { range: 'R$ 0-50k', count: 23, percentage: 15.3 },
  { range: 'R$ 50-100k', count: 45, percentage: 30.0 },
  { range: 'R$ 100-150k', count: 38, percentage: 25.3 },
  { range: 'R$ 150-200k', count: 28, percentage: 18.7 },
  { range: 'R$ 200k+', count: 16, percentage: 10.7 }
];

const correlationData = [
  { metric: 'NPS', correlation: 0.78, description: 'Forte correlação positiva' },
  { metric: 'Churn Rate', correlation: -0.65, description: 'Correlação negativa moderada' },
  { metric: 'CSAT', correlation: 0.72, description: 'Forte correlação positiva' },
  { metric: 'Tickets Suporte', correlation: -0.45, description: 'Correlação negativa fraca' },
  { metric: 'Tempo Contrato', correlation: 0.89, description: 'Correlação muito forte' },
  { metric: 'Freq. Uso', correlation: 0.56, description: 'Correlação moderada' }
];

const cohortAnalysis = [
  { 
    cohort: 'Q1 2023', 
    size: 45, 
    ltv_3m: 45000, 
    ltv_6m: 78000, 
    ltv_12m: 135000, 
    ltv_24m: 185000,
    retention_3m: 95,
    retention_6m: 87,
    retention_12m: 78,
    retention_24m: 65
  },
  { 
    cohort: 'Q2 2023', 
    size: 52, 
    ltv_3m: 48000, 
    ltv_6m: 82000, 
    ltv_12m: 142000, 
    ltv_24m: 195000,
    retention_3m: 96,
    retention_6m: 89,
    retention_12m: 81,
    retention_24m: 68
  },
  { 
    cohort: 'Q3 2023', 
    size: 38, 
    ltv_3m: 52000, 
    ltv_6m: 88000, 
    ltv_12m: 148000, 
    ltv_24m: null,
    retention_3m: 97,
    retention_6m: 91,
    retention_12m: 84,
    retention_24m: null
  },
  { 
    cohort: 'Q4 2023', 
    size: 41, 
    ltv_3m: 55000, 
    ltv_6m: 92000, 
    ltv_12m: 155000, 
    ltv_24m: null,
    retention_3m: 98,
    retention_6m: 93,
    retention_12m: null,
    retention_24m: null
  }
];

export const LTVCACManagement = () => {
  const [timeFilter, setTimeFilter] = useState('12M');
  const [segmentFilter, setSegmentFilter] = useState('Todos');
  const [viewMode, setViewMode] = useState('overview');
  const [calculationModel, setCalculationModel] = useState(1);

  const currentLTV = 148000;
  const currentCAC = 2450;
  const ltvCacRatio = (currentLTV / currentCAC);
  const previousLTV = 142000;
  const previousCAC = 2600;
  const ltvChange = ((currentLTV - previousLTV) / previousLTV) * 100;
  const cacChange = ((currentCAC - previousCAC) / previousCAC) * 100;

  const getSegmentColor = (segment: string) => {
    const colors = {
      'Nível A': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Nível B': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Nível C': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
      'Arrojado': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Moderado': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Conservador': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[segment as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getRatioColor = (ratio: number) => {
    if (ratio >= 50) return 'text-green-600';
    if (ratio >= 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskColor = (risk: string) => {
    const colors = {
      'Baixo': 'text-green-600',
      'Médio': 'text-yellow-600', 
      'Alto': 'text-red-600',
      'Crítico': 'text-red-700'
    };
    return colors[risk as keyof typeof colors] || 'text-gray-600';
  };

  const getCorrelationColor = (correlation: number) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.7) return 'text-green-600';
    if (abs >= 0.4) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setViewMode('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'overview'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setViewMode('segments')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'segments'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Por Segmento
          </button>
          <button
            onClick={() => setViewMode('ranking')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'ranking'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Ranking Clientes
          </button>
          <button
            onClick={() => setViewMode('cohort')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'cohort'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Análise Cohort
          </button>
          <button
            onClick={() => setViewMode('correlations')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'correlations'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Correlações
          </button>
          <button
            onClick={() => setViewMode('calculator')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'calculator'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Calculadora
          </button>
        </nav>
      </div>

      {viewMode === 'overview' && (
        <>
          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">LTV Médio</span>
                </div>
                <div className={`flex items-center space-x-1 ${ltvChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {ltvChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="text-sm font-medium">{ltvChange >= 0 ? '+' : ''}{ltvChange.toFixed(1)}%</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CircularProgress 
                  value={75} 
                  color="green"
                  size={60}
                />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentLTV / 1000).toFixed(0)}k</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lifetime Value</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CAC Médio</span>
                </div>
                <div className={`flex items-center space-x-1 ${cacChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {cacChange <= 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                  <span className="text-sm font-medium">{cacChange >= 0 ? '+' : ''}{cacChange.toFixed(1)}%</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CircularProgress 
                  value={85} 
                  color="blue"
                  size={60}
                />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentCAC / 1000).toFixed(1)}k</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cost Acquisition</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Ratio LTV:CAC</span>
                </div>
                <div className="text-green-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CircularProgress 
                  value={Math.min(ltvCacRatio * 1.5, 100)} 
                  color="purple"
                  size={60}
                />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{ltvCacRatio.toFixed(1)}:1</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ideal: {'>'}3:1</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-red-600" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Payback Period</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CircularProgress 
                  value={75} 
                  color="red"
                  size={60}
                />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">11 meses</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tempo Retorno</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LTV vs CAC Evolution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Evolução LTV vs CAC</h3>
                <div className="flex space-x-2">
                  <button 
                    className={`px-3 py-1 text-xs rounded ${timeFilter === '12M' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setTimeFilter('12M')}
                  >
                    12M
                  </button>
                  <button 
                    className={`px-3 py-1 text-xs rounded ${timeFilter === '6M' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setTimeFilter('6M')}
                  >
                    6M
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={ltvCacData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => [
                    name === 'ltv' || name === 'cac' ? `R$ ${value.toLocaleString()}` : value,
                    name === 'ltv' ? 'LTV' : name === 'cac' ? 'CAC' : 'Ratio'
                  ]} />
                  <Bar yAxisId="left" dataKey="ltv" fill="#10B981" />
                  <Bar yAxisId="left" dataKey="cac" fill="#EF4444" />
                  <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="#8B5CF6" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* LTV Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribuição por Faixas de LTV</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ltvDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ range, percentage }) => `${range}: ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {ltvDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {viewMode === 'segments' && (
        <div className="space-y-6">
          {/* Segment Filters */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm dark:bg-gray-700 dark:text-white"
              >
                <option value="Todos">Todos Segmentos</option>
                <option value="Nível">Por Nível</option>
                <option value="Perfil">Por Perfil</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Segment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentData.map((segment, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSegmentColor(segment.segment)}`}>
                    {segment.segment}
                  </span>
                  <span className={`text-lg font-bold ${getRatioColor(segment.ratio)}`}>
                    {segment.ratio.toFixed(1)}:1
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LTV Médio</p>
                    <p className="text-lg font-bold text-green-600">R$ {(segment.ltv / 1000).toFixed(0)}k</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CAC Médio</p>
                    <p className="text-lg font-bold text-blue-600">R$ {(segment.cac / 1000).toFixed(1)}k</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Clientes</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{segment.clients}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Contrato Médio</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{segment.avgContract} meses</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Churn Rate</p>
                    <p className={`text-sm font-medium ${segment.churnRate <= 3 ? 'text-green-600' : segment.churnRate <= 6 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {segment.churnRate}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Payback</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{segment.payback} meses</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Comparação LTV vs CAC por Segmento</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart data={segmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cac" name="CAC" />
                <YAxis dataKey="ltv" name="LTV" />
                <Tooltip formatter={(value, name) => [
                  `R$ ${value.toLocaleString()}`,
                  name === 'cac' ? 'CAC' : 'LTV'
                ]} />
                <Scatter dataKey="ltv" fill="#3B82F6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {viewMode === 'ranking' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ranking dos Clientes Mais Valiosos</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar Ranking
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Posição</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Segmento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">NPS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Risco Churn</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receita Mensal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                  {clientRanking.map((client, index) => (
                    <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {index < 3 && (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              index === 0 ? 'bg-yellow-100 text-yellow-600' :
                              index === 1 ? 'bg-gray-100 text-gray-600' :
                              'bg-orange-100 text-orange-600'
                            }`}>
                              {index === 0 ? <Crown className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-900 dark:text-white">#{index + 1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{client.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-green-600">R$ {(client.ltv / 1000).toFixed(0)}k</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSegmentColor(client.segment)}`}>
                          {client.segment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-medium ${
                            client.nps >= 70 ? 'text-green-600' : 
                            client.nps >= 50 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {client.nps}
                          </span>
                          <div className={`w-2 h-2 rounded-full ${
                            client.nps >= 70 ? 'bg-green-400' : 
                            client.nps >= 50 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${getRiskColor(client.churn_risk)}`}>
                          {client.churn_risk}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 dark:text-white">R$ {client.monthly_revenue.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Activity className="w-4 h-4" />
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
      )}

      {viewMode === 'cohort' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LTV Evolution by Cohort */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Evolução LTV por Cohort</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cohortData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cohort" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${value?.toLocaleString() || 'N/A'}`, 'LTV']} />
                  <Line type="monotone" dataKey="ltv3m" stroke="#EF4444" strokeWidth={2} name="3 meses" />
                  <Line type="monotone" dataKey="ltv6m" stroke="#F59E0B" strokeWidth={2} name="6 meses" />
                  <Line type="monotone" dataKey="ltv12m" stroke="#3B82F6" strokeWidth={2} name="12 meses" />
                  <Line type="monotone" dataKey="ltv24m" stroke="#10B981" strokeWidth={2} name="24 meses" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Retention vs LTV */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Retenção vs LTV por Cohort</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={cohortAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cohort" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="ltv_12m" fill="#3B82F6" name="LTV 12m" />
                  <Line yAxisId="right" type="monotone" dataKey="retention_12m" stroke="#10B981" strokeWidth={2} name="Retenção 12m %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Cohort Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Análise Detalhada por Cohort</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cohort</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tamanho</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 3m</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 6m</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 12m</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 24m</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Retenção 12m</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                  {cohortAnalysis.map((cohort, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{cohort.cohort}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{cohort.size} clientes</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">R$ {(cohort.ltv_3m / 1000).toFixed(0)}k</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">R$ {(cohort.ltv_6m / 1000).toFixed(0)}k</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {cohort.ltv_12m ? `R$ ${(cohort.ltv_12m / 1000).toFixed(0)}k` : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {cohort.ltv_24m ? `R$ ${(cohort.ltv_24m / 1000).toFixed(0)}k` : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {cohort.retention_12m ? `${cohort.retention_12m}%` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {viewMode === 'correlations' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Correlações LTV com Outras Métricas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {correlationData.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.metric}</h4>
                    <span className={`text-lg font-bold ${getCorrelationColor(item.correlation)}`}>
                      {item.correlation > 0 ? '+' : ''}{item.correlation.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          Math.abs(item.correlation) >= 0.7 ? 'bg-green-500' :
                          Math.abs(item.correlation) >= 0.4 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.abs(item.correlation) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Correlation Matrix Visualization */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Análise de Correlação Visual</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={correlationData.map(item => ({ 
                metric: item.metric, 
                value: Math.abs(item.correlation) * 100 
              }))}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Correlação" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {viewMode === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Modelos de Cálculo</h3>
            <div className="space-y-4">
              {calculationModels.map((model) => (
                <div key={model.id} className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  calculationModel === model.id 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`} onClick={() => setCalculationModel(model.id)}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{model.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Precisão: {model.accuracy}%</span>
                      {model.active && (
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Ativo</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{model.description}</p>
                  <p className="text-lg font-bold text-blue-600">LTV Calculado: R$ {(model.ltv / 1000).toFixed(0)}k</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <Button className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Configurar Parâmetros
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calculadora Rápida</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Receita Média por Cliente (ARPU)
                </label>
                <input 
                  type="number" 
                  placeholder="3.500" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Margem Bruta (%)
                </label>
                <input 
                  type="number" 
                  placeholder="75" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Taxa de Churn Mensal (%)
                </label>
                <input 
                  type="number" 
                  placeholder="3.5" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Custo de Aquisição (CAC)
                </label>
                <input 
                  type="number" 
                  placeholder="2.450" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <Button className="w-full mt-6">
                <Calculator className="w-4 h-4 mr-2" />
                Calcular LTV
              </Button>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Resultado:</h4>
                <p className="text-2xl font-bold text-blue-600">LTV: R$ 75.000</p>
                <p className="text-sm text-blue-700 dark:text-blue-400">Ratio LTV:CAC = 30.6:1</p>
                <p className="text-sm text-blue-700 dark:text-blue-400">Payback: 9.4 meses</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
