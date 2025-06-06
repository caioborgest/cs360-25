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
  Activity,
  AlertTriangle,
  CheckCircle,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
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
  Pie,
  Legend
} from 'recharts';

const ltvCacData = [
  { month: 'Jan', ltv: 124000, cac: 2800, ratio: 44.3, clients: 127, revenue: 485000, cacEfficiency: 78, cacTrend: 'up' },
  { month: 'Fev', ltv: 128000, cac: 2650, ratio: 48.3, clients: 132, revenue: 502000, cacEfficiency: 82, cacTrend: 'down' },
  { month: 'Mar', ltv: 132000, cac: 2900, ratio: 45.5, clients: 138, revenue: 518000, cacEfficiency: 75, cacTrend: 'up' },
  { month: 'Abr', ltv: 135000, cac: 2750, ratio: 49.1, clients: 145, revenue: 535000, cacEfficiency: 85, cacTrend: 'down' },
  { month: 'Mai', ltv: 142000, cac: 2600, ratio: 54.6, clients: 151, revenue: 548000, cacEfficiency: 88, cacTrend: 'down' },
  { month: 'Jun', ltv: 148000, cac: 2450, ratio: 60.4, clients: 158, revenue: 565000, cacEfficiency: 92, cacTrend: 'down' }
];

const cacAnalysisData = [
  { channel: 'Google Ads', cac: 2800, volume: 45, efficiency: 78, trend: 'stable' },
  { channel: 'Facebook Ads', cac: 3200, volume: 32, efficiency: 65, trend: 'down' },
  { channel: 'LinkedIn', cac: 4500, volume: 18, efficiency: 85, trend: 'up' },
  { channel: 'Organic', cac: 800, volume: 25, efficiency: 95, trend: 'up' },
  { channel: 'Referral', cac: 1200, volume: 38, efficiency: 90, trend: 'up' }
];

const cacOptimizationSuggestions = [
  { 
    channel: 'Facebook Ads', 
    currentCAC: 3200, 
    targetCAC: 2800, 
    potentialSaving: 12800, 
    action: 'Otimizar targeting de audiência',
    priority: 'high'
  },
  { 
    channel: 'Google Ads', 
    currentCAC: 2800, 
    targetCAC: 2400, 
    potentialSaving: 18000, 
    action: 'Melhorar Quality Score das palavras-chave',
    priority: 'medium'
  },
  { 
    channel: 'LinkedIn', 
    currentCAC: 4500, 
    targetCAC: 3800, 
    potentialSaving: 12600, 
    action: 'Testar formatos de anúncios',
    priority: 'low'
  }
];

export const LTVCACManagement = () => {
  const [timeFilter, setTimeFilter] = useState('12M');
  const [segmentFilter, setSegmentFilter] = useState('Todos');
  const [viewMode, setViewMode] = useState('overview');
  const [calculationModel, setCalculationModel] = useState(1);
  const [showCACOptimization, setShowCACOptimization] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const currentLTV = 148000;
  const currentCAC = 2450;
  const ltvCacRatio = (currentLTV / currentCAC);
  const previousLTV = 142000;
  const previousCAC = 2600;
  const ltvChange = ((currentLTV - previousLTV) / previousLTV) * 100;
  const cacChange = ((currentCAC - previousCAC) / previousCAC) * 100;

  const handleExportData = () => {
    console.log('Exportando dados LTV/CAC...');
  };

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
    console.log('Mostrando/ocultando filtros');
  };

  const handleConfigureParameters = () => {
    console.log('Configurando parâmetros de cálculo');
  };

  const handleViewDetails = (segment: string) => {
    console.log(`Visualizando detalhes do segmento: ${segment}`);
  };

  const handleOptimizeCAC = (channel: string) => {
    console.log(`Otimizando CAC para canal: ${channel}`);
  };

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
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">LTV & CAC Analysis</h2>
          <p className="text-gray-600 dark:text-gray-300">Análise avançada de Lifetime Value e Custo de Aquisição</p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={handleExportData} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={handleShowFilters} variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button onClick={() => setShowCACOptimization(true)} size="sm">
            <Target className="w-4 h-4 mr-2" />
            Otimizar CAC
          </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg">Filtros Avançados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Período</label>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="3M">3 Meses</option>
                  <option value="6M">6 Meses</option>
                  <option value="12M">12 Meses</option>
                  <option value="24M">24 Meses</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Segmento</label>
                <select 
                  value={segmentFilter}
                  onChange={(e) => setSegmentFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="Todos">Todos</option>
                  <option value="Nível A">Nível A</option>
                  <option value="Nível B">Nível B</option>
                  <option value="Nível C">Nível C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Canal de Aquisição</label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                  <option value="all">Todos os Canais</option>
                  <option value="google">Google Ads</option>
                  <option value="facebook">Facebook Ads</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="organic">Orgânico</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button onClick={() => setShowFilters(false)} variant="outline" className="w-full">
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="cac-analysis">Análise CAC</TabsTrigger>
          <TabsTrigger value="segments">Por Segmento</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
          <TabsTrigger value="cohort">Cohort</TabsTrigger>
          <TabsTrigger value="calculator">Calculadora</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">LTV Médio</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${ltvChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {ltvChange >= 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    <span className="text-sm font-medium">{ltvChange >= 0 ? '+' : ''}{ltvChange.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CircularProgress value={75} color="green" size={60} />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentLTV / 1000).toFixed(0)}k</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lifetime Value</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-red-600" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CAC Médio</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${cacChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {cacChange <= 0 ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                    <span className="text-sm font-medium">{cacChange >= 0 ? '+' : ''}{cacChange.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CircularProgress value={85} color="red" size={60} />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentCAC / 1000).toFixed(1)}k</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Cost Acquisition</p>
                    <Badge className="mt-1 bg-red-100 text-red-800">Foco Otimização</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
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
                  <CircularProgress value={Math.min(ltvCacRatio * 1.5, 100)} color="purple" size={60} />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{ltvCacRatio.toFixed(1)}:1</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ideal: &gt;3:1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Payback Period</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <CircularProgress value={75} color="blue" size={60} />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">11 meses</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tempo Retorno</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Evolução LTV vs CAC com Destaque CAC</CardTitle>
                  <Button onClick={handleConfigureParameters} variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={ltvCacData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'ltv' || name === 'cac' ? `R$ ${value.toLocaleString()}` : value,
                        name === 'ltv' ? 'LTV' : name === 'cac' ? 'CAC' : name === 'ratio' ? 'Ratio' : 'Eficiência CAC'
                      ]}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="ltv" fill="#10B981" name="LTV" />
                    <Bar yAxisId="left" dataKey="cac" fill="#EF4444" name="CAC" />
                    <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="#8B5CF6" strokeWidth={3} name="Ratio LTV:CAC" />
                    <Area yAxisId="right" dataKey="cacEfficiency" fill="#F59E0B" fillOpacity={0.3} stroke="#F59E0B" strokeWidth={2} name="Eficiência CAC %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Análise CAC por Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={cacAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="channel" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'cac' ? `R$ ${value.toLocaleString()}` : 
                        name === 'efficiency' ? `${value}%` : value,
                        name === 'cac' ? 'CAC' : name === 'volume' ? 'Volume' : 'Eficiência'
                      ]}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="cac" fill="#EF4444" name="CAC" />
                    <Bar dataKey="efficiency" fill="#10B981" name="Eficiência %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cac-analysis">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-red-600" />
                  <span>Oportunidades de Otimização CAC</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cacOptimizationSuggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge className={getPriorityColor(suggestion.priority)}>
                            {suggestion.priority === 'high' ? 'Alta' : suggestion.priority === 'medium' ? 'Média' : 'Baixa'}
                          </Badge>
                          <h4 className="font-medium text-gray-900 dark:text-white">{suggestion.channel}</h4>
                        </div>
                        <Button onClick={() => handleOptimizeCAC(suggestion.channel)} size="sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Implementar
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">CAC Atual:</span>
                          <p className="font-medium text-red-600">R$ {suggestion.currentCAC.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">CAC Meta:</span>
                          <p className="font-medium text-green-600">R$ {suggestion.targetCAC.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Economia Potencial:</span>
                          <p className="font-medium text-blue-600">R$ {suggestion.potentialSaving.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Ação:</span>
                          <p className="font-medium text-gray-900 dark:text-white">{suggestion.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico Detalhado de CAC</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={ltvCacData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value, name) => [
                        `R$ ${value.toLocaleString()}`,
                        name === 'cac' ? 'CAC' : 'Target CAC'
                      ]}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="cac" stroke="#EF4444" strokeWidth={4} name="CAC Real" dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} />
                    <Line type="monotone" dataKey="ltv" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="LTV (Referência)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments">
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
        </TabsContent>

        <TabsContent value="ranking">
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
        </TabsContent>

        <TabsContent value="cohort">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução LTV por Cohort</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retenção vs LTV por Cohort</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Análise Detalhada por Cohort</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculator">
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
        </TabsContent>
      </Tabs>

      {showCACOptimization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Centro de Otimização CAC</CardTitle>
                <Button onClick={() => setShowCACOptimization(false)} variant="ghost" size="sm">
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">CAC Médio Atual</p>
                    <p className="text-2xl font-bold text-red-600">R$ 2.450</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">CAC Meta</p>
                    <p className="text-2xl font-bold text-green-600">R$ 2.000</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Economia Potencial</p>
                    <p className="text-2xl font-bold text-blue-600">R$ 43.400</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Implementar Todas
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Simular Impacto
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
