
import React, { useState } from 'react';
import { 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageSquare,
  Calendar,
  Filter,
  Download
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const npsData = [
  { month: 'Jan', nps: 30, promoters: 45, passives: 40, detractors: 15 },
  { month: 'Fev', nps: 35, promoters: 50, passives: 35, detractors: 15 },
  { month: 'Mar', nps: 32, promoters: 47, passives: 38, detractors: 15 },
  { month: 'Abr', nps: 38, promoters: 52, passives: 34, detractors: 14 },
  { month: 'Mai', nps: 40, promoters: 55, passives: 30, detractors: 15 },
  { month: 'Jun', nps: 37, promoters: 51, passives: 35, detractors: 14 },
  { month: 'Jul', nps: 42, promoters: 57, passives: 31, detractors: 12 },
  { month: 'Ago', nps: 45, promoters: 60, passives: 25, detractors: 15 },
  { month: 'Set', nps: 48, promoters: 63, passives: 22, detractors: 15 },
  { month: 'Out', nps: 44, promoters: 59, passives: 26, detractors: 15 },
  { month: 'Nov', nps: 47, promoters: 62, passives: 23, detractors: 15 },
  { month: 'Dez', nps: 50, promoters: 65, passives: 20, detractors: 15 }
];

const segmentData = [
  { segment: 'Nível A', nps: 65, total: 45 },
  { segment: 'Nível B', nps: 42, total: 67 },
  { segment: 'Nível C', nps: 28, total: 15 },
  { segment: 'Arrojado', nps: 58, total: 34 },
  { segment: 'Moderado', nps: 45, total: 78 },
  { segment: 'Conservador', nps: 32, total: 15 }
];

const recentFeedback = [
  {
    id: 1,
    client: 'TechCorp LTDA',
    score: 9,
    category: 'Promotor',
    feedback: 'Excelente plataforma! O suporte é muito responsivo e as funcionalidades atendem perfeitamente nossas necessidades.',
    date: '2024-01-15',
    segment: 'Nível A'
  },
  {
    id: 2,
    client: 'StartupX',
    score: 7,
    category: 'Passivo',
    feedback: 'Boa ferramenta, mas sinto que poderia ter mais integrações com outras plataformas que utilizamos.',
    date: '2024-01-14',
    segment: 'Nível B'
  },
  {
    id: 3,
    client: 'BigCorp S.A.',
    score: 4,
    category: 'Detrator',
    feedback: 'A plataforma é complexa demais para nossa equipe. Precisamos de mais treinamento e suporte.',
    date: '2024-01-13',
    segment: 'Nível A'
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

  const currentNPS = 42;
  const previousNPS = 38;
  const npsChange = currentNPS - previousNPS;

  const getCategoryColor = (category: string) => {
    const colors = {
      'Promotor': 'bg-green-100 text-green-800',
      'Passivo': 'bg-yellow-100 text-yellow-800',
      'Detrator': 'bg-red-100 text-red-800'
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
      {/* NPS Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-medium text-gray-600">NPS Geral</span>
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
              <p className="text-3xl font-bold text-gray-900">{currentNPS}</p>
              <p className="text-sm text-gray-500">Pontuação NPS</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Promotores</p>
              <p className="text-2xl font-bold text-green-600">57%</p>
              <p className="text-xs text-gray-500">72 clientes</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Passivos</p>
              <p className="text-2xl font-bold text-yellow-600">31%</p>
              <p className="text-xs text-gray-500">39 clientes</p>
            </div>
            <Users className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Detratores</p>
              <p className="text-2xl font-bold text-red-600">12%</p>
              <p className="text-xs text-gray-500">16 clientes</p>
            </div>
            <TrendingDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* NPS Evolution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Evolução do NPS</h3>
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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={npsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
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
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição por Categoria</h3>
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
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Segment Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">NPS por Segmento</h3>
          <select
            value={segmentFilter}
            onChange={(e) => setSegmentFilter(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded text-sm"
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
            <Bar dataKey="nps" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Feedback */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Feedback Recente</h2>
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

        <div className="divide-y divide-gray-200">
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-gray-900">{feedback.client}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(feedback.category)}`}>
                    {feedback.category}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {feedback.segment}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xl font-bold ${getScoreColor(feedback.score)}`}>
                    {feedback.score}
                  </span>
                  <span className="text-sm text-gray-500">/ 10</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 italic">"{feedback.feedback}"</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {feedback.date}
                </span>
                <Button variant="outline" size="sm">
                  Responder
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
