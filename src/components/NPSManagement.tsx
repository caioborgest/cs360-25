
import React, { useState } from 'react';
import { 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageSquare,
  Calendar,
  Filter,
  Download,
  Target,
  BarChart3
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
  Cell, 
  PieChart, 
  Pie,
  ScatterChart,
  Scatter,
  Tooltip
} from 'recharts';

const npsData = [
  { month: 'Jan', nps: 30, promoters: 45, passives: 40, detractors: 15, ltv: 120000, churn: 5.2 },
  { month: 'Fev', nps: 35, promoters: 50, passives: 35, detractors: 15, ltv: 125000, churn: 4.8 },
  { month: 'Mar', nps: 32, promoters: 47, passives: 38, detractors: 15, ltv: 118000, churn: 5.5 },
  { month: 'Abr', nps: 38, promoters: 52, passives: 34, detractors: 14, ltv: 132000, churn: 4.2 },
  { month: 'Mai', nps: 40, promoters: 55, passives: 30, detractors: 15, ltv: 140000, churn: 3.8 },
  { month: 'Jun', nps: 37, promoters: 51, passives: 35, detractors: 14, ltv: 135000, churn: 4.1 },
  { month: 'Jul', nps: 42, promoters: 57, passives: 31, detractors: 12, ltv: 148000, churn: 3.5 },
  { month: 'Ago', nps: 45, promoters: 60, passives: 25, detractors: 15, ltv: 155000, churn: 3.2 },
  { month: 'Set', nps: 48, promoters: 63, passives: 22, detractors: 15, ltv: 162000, churn: 2.9 },
  { month: 'Out', nps: 44, promoters: 59, passives: 26, detractors: 15, ltv: 158000, churn: 3.1 },
  { month: 'Nov', nps: 47, promoters: 62, passives: 23, detractors: 15, ltv: 165000, churn: 2.8 },
  { month: 'Dez', nps: 50, promoters: 65, passives: 20, detractors: 15, ltv: 170000, churn: 2.5 }
];

const segmentData = [
  { segment: 'Nível A', nps: 65, total: 45, promoters: 78, passives: 15, detractors: 7 },
  { segment: 'Nível B', nps: 42, total: 67, promoters: 52, passives: 38, detractors: 10 },
  { segment: 'Nível C', nps: 28, total: 15, promoters: 35, passives: 45, detractors: 20 },
  { segment: 'Arrojado', nps: 58, total: 34, promoters: 68, passives: 22, detractors: 10 },
  { segment: 'Moderado', nps: 45, total: 78, promoters: 55, passives: 35, detractors: 10 },
  { segment: 'Conservador', nps: 32, total: 15, promoters: 40, passives: 44, detractors: 16 }
];

const correlationData = [
  { nps: 30, ltv: 120000, churn: 5.2, satisfaction: 3.2 },
  { nps: 35, ltv: 125000, churn: 4.8, satisfaction: 3.5 },
  { nps: 42, ltv: 148000, churn: 3.5, satisfaction: 4.1 },
  { nps: 45, ltv: 155000, churn: 3.2, satisfaction: 4.3 },
  { nps: 48, ltv: 162000, churn: 2.9, satisfaction: 4.5 },
  { nps: 50, ltv: 170000, churn: 2.5, satisfaction: 4.7 }
];

const recentFeedback = [
  {
    id: 1,
    client: 'TechCorp LTDA',
    score: 9,
    category: 'Promotor',
    feedback: 'Excelente plataforma! O suporte é muito responsivo e as funcionalidades atendem perfeitamente nossas necessidades.',
    date: '2024-01-15',
    segment: 'Nível A',
    ltv: 180000,
    actions: ['Entrevista de sucesso', 'Case study']
  },
  {
    id: 2,
    client: 'StartupX',
    score: 7,
    category: 'Passivo',
    feedback: 'Boa ferramenta, mas sinto que poderia ter mais integrações com outras plataformas que utilizamos.',
    date: '2024-01-14',
    segment: 'Nível B',
    ltv: 95000,
    actions: ['Follow-up integração', 'Demo recursos']
  },
  {
    id: 3,
    client: 'BigCorp S.A.',
    score: 4,
    category: 'Detrator',
    feedback: 'A plataforma é complexa demais para nossa equipe. Precisamos de mais treinamento e suporte.',
    date: '2024-01-13',
    segment: 'Nível A',
    ltv: 220000,
    actions: ['Plano recuperação', 'Treinamento urgente', 'Reunião executiva']
  }
];

const distributionData = [
  { name: 'Promotores', value: 57, fill: '#10B981' },
  { name: 'Passivos', value: 31, fill: '#F59E0B' },
  { name: 'Detratores', value: 12, fill: '#EF4444' }
];

export const NPSManagement = () => {
  const [timeFilter, setTimeFilter] = useState('12M');
  const [segmentFilter, setSegmentFilter] = useState('Todos');
  const [viewMode, setViewMode] = useState('overview');

  const currentNPS = 42;
  const previousNPS = 38;
  const npsChange = currentNPS - previousNPS;

  const getCategoryColor = (category: string) => {
    const colors = {
      'Promotor': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Passivo': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Detrator': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600';
    if (score >= 7) return 'text-yellow-600';
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
            onClick={() => setViewMode('correlation')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'correlation'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Correlações
          </button>
          <button
            onClick={() => setViewMode('feedback')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'feedback'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Feedback
          </button>
          <button
            onClick={() => setViewMode('strategy')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'strategy'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Estratégias CS
          </button>
        </nav>
      </div>

      {viewMode === 'overview' && (
        <>
          {/* NPS Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">NPS Geral</span>
                </div>
                <div className={`flex items-center space-x-1 ${npsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {npsChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="text-sm font-medium">{npsChange >= 0 ? '+' : ''}{npsChange}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CircularProgress 
                  value={currentNPS + 100} 
                  color={currentNPS >= 50 ? 'green' : currentNPS >= 30 ? 'blue' : 'red'}
                  size={80}
                />
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{currentNPS}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pontuação NPS</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Promotores</p>
                  <p className="text-2xl font-bold text-green-600">57%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">72 clientes</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Passivos</p>
                  <p className="text-2xl font-bold text-yellow-600">31%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">39 clientes</p>
                </div>
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Detratores</p>
                  <p className="text-2xl font-bold text-red-600">12%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">16 clientes</p>
                </div>
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* NPS Evolution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Evolução do NPS</h3>
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
                  <button 
                    className={`px-3 py-1 text-xs rounded ${timeFilter === '3M' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setTimeFilter('3M')}
                  >
                    3M
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={npsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="nps" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* NPS Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribuição por Categoria</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Segment Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">NPS por Segmento</h3>
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm dark:bg-gray-700 dark:text-white"
              >
                <option value="Todos">Todos Segmentos</option>
                <option value="Nível">Por Nível</option>
                <option value="Perfil">Por Perfil</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={segmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="nps" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {viewMode === 'correlation' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* NPS vs LTV Correlation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Correlação NPS vs LTV</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nps" name="NPS" />
                <YAxis dataKey="ltv" name="LTV" />
                <Tooltip formatter={(value, name) => [
                  name === 'ltv' ? `R$ ${value.toLocaleString()}` : value,
                  name === 'nps' ? 'NPS' : 'LTV'
                ]} />
                <Scatter dataKey="ltv" fill="#3B82F6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* NPS vs Churn Correlation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Correlação NPS vs Churn</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={correlationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nps" name="NPS" />
                <YAxis dataKey="churn" name="Churn" />
                <Tooltip formatter={(value, name) => [
                  name === 'churn' ? `${value}%` : value,
                  name === 'nps' ? 'NPS' : 'Churn Rate'
                ]} />
                <Scatter dataKey="churn" fill="#EF4444" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Combined Trends */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tendências Combinadas</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={npsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="nps" stroke="#3B82F6" strokeWidth={2} name="NPS" />
                <Line yAxisId="right" type="monotone" dataKey="churn" stroke="#EF4444" strokeWidth={2} name="Churn %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {viewMode === 'feedback' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Feedback Recente</h2>
              </div>
              <div className="flex items-center space-x-3">
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
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feedback.client}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(feedback.category)}`}>
                      {feedback.category}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                      {feedback.segment}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                      LTV: R$ {(feedback.ltv / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xl font-bold ${getScoreColor(feedback.score)}`}>
                      {feedback.score}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">/ 10</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 italic">"{feedback.feedback}"</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {feedback.date}
                  </span>
                  <div className="flex space-x-2">
                    {feedback.actions.map((action, index) => (
                      <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Responder
                    </Button>
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-1" />
                      Ações CS
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'strategy' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Estratégias por Segmento NPS</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-green-700 dark:text-green-400">Promotores (57%)</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Programas de referência e advocacy</li>
                  <li>• Case studies e testimonials</li>
                  <li>• Oportunidades de upsell premium</li>
                  <li>• Comunidade de usuários avançados</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium text-yellow-700 dark:text-yellow-400">Passivos (31%)</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Identificar pontos de melhoria</li>
                  <li>• Demonstrações de valor adicional</li>
                  <li>• Treinamentos personalizados</li>
                  <li>• Check-ins regulares de satisfação</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium text-red-700 dark:text-red-400">Detratores (12%)</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Planos de recuperação urgentes</li>
                  <li>• Reuniões executivas</li>
                  <li>• Suporte dedicado intensivo</li>
                  <li>• Revisão de contratos e condições</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Métricas de Impacto</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Correlação NPS-LTV</span>
                <span className="text-lg font-bold text-green-600">+0.82</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Redução de Churn (Promotores)</span>
                <span className="text-lg font-bold text-blue-600">-67%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Upsell Rate (Promotores)</span>
                <span className="text-lg font-bold text-purple-600">43%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ROI Investimento CS</span>
                <span className="text-lg font-bold text-orange-600">4.2x</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
