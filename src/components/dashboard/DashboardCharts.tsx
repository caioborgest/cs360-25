
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CustomerSegmentChart } from './CustomerSegmentChart';
import { RevenueGrowthChart } from './RevenueGrowthChart';
import { Target, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const healthScoreData = [
  { month: 'Jan', score: 82, engajamento: 75, satisfacao: 85 },
  { month: 'Fev', score: 84, engajamento: 78, satisfacao: 87 },
  { month: 'Mar', score: 86, engajamento: 82, satisfacao: 89 },
  { month: 'Abr', score: 85, engajamento: 80, satisfacao: 88 },
  { month: 'Mai', score: 88, engajamento: 85, satisfacao: 91 },
  { month: 'Jun', score: 90, engajamento: 87, satisfacao: 93 }
];

const strategicTrendsData = [
  { metric: 'Retenção', atual: 94, meta: 95, tendencia: 'up' },
  { metric: 'Upsell', atual: 23, meta: 25, tendencia: 'up' },
  { metric: 'Time to Value', atual: 12, meta: 10, tendencia: 'down' },
  { metric: 'CSAT', atual: 4.7, meta: 4.8, tendencia: 'up' }
];

const engagementData = [
  { month: 'Jan', value: 65 },
  { month: 'Fev', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Abr', value: 78 },
  { month: 'Mai', value: 85 },
  { month: 'Jun', value: 88 }
];

const churnRiskData = [
  { segment: 'Baixo Risco', value: 78, color: '#10B981' },
  { segment: 'Médio Risco', value: 15, color: '#F59E0B' },
  { segment: 'Alto Risco', value: 7, color: '#EF4444' }
];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Health Score 360° */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            Health Score 360°
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Distribuição inteligente com insights acionáveis</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={healthScoreData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-xs text-gray-500 dark:text-gray-400" />
              <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Area type="monotone" dataKey="score" stroke="#10B981" fillOpacity={1} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Segmentação de Clientes */}
      <CustomerSegmentChart />

      {/* Tendências Estratégicas */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            Tendências Estratégicas
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Métricas-chave em tempo real</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={strategicTrendsData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="metric" className="text-xs text-gray-500 dark:text-gray-400" />
              <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Bar dataKey="atual" fill="#8B5CF6" name="Atual" />
              <Bar dataKey="meta" fill="#EC4899" name="Meta" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Crescimento de Receita */}
      <RevenueGrowthChart />

      {/* Engajamento do Cliente */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            Engajamento do Cliente
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Evolução mensal do engajamento</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-xs text-gray-500 dark:text-gray-400" />
              <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorEngagement)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Análise de Risco de Churn */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            Análise de Risco de Churn
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Distribuição de clientes por nível de risco</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={churnRiskData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="segment" className="text-xs text-gray-500 dark:text-gray-400" />
              <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {churnRiskData.map((entry, index) => (
                  <rect key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
