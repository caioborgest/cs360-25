
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Target, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter, Cell } from 'recharts';

const healthScoreData = [
  { month: 'Jan', score: 82, engajamento: 75, satisfacao: 85 },
  { month: 'Fev', score: 84, engajamento: 78, satisfacao: 87 },
  { month: 'Mar', score: 86, engajamento: 82, satisfacao: 89 },
  { month: 'Abr', score: 85, engajamento: 80, satisfacao: 88 },
  { month: 'Mai', score: 88, engajamento: 85, satisfacao: 91 },
  { month: 'Jun', score: 90, engajamento: 87, satisfacao: 93 }
];

const riskMatrixData = [
  { name: 'Cliente A', ltv: 15000, churnRisk: 25, size: 120, status: 'baixo' },
  { name: 'Cliente B', ltv: 45000, churnRisk: 15, size: 180, status: 'baixo' },
  { name: 'Cliente C', ltv: 28000, churnRisk: 45, size: 140, status: 'medio' },
  { name: 'Cliente D', ltv: 65000, churnRisk: 70, size: 220, status: 'alto' },
  { name: 'Cliente E', ltv: 12000, churnRisk: 80, size: 100, status: 'critico' },
  { name: 'Cliente F', ltv: 38000, churnRisk: 30, size: 160, status: 'medio' },
  { name: 'Cliente G', ltv: 52000, churnRisk: 20, size: 190, status: 'baixo' },
  { name: 'Cliente H', ltv: 22000, churnRisk: 60, size: 130, status: 'alto' }
];

const getRiskColor = (status: string) => {
  switch (status) {
    case 'baixo': return '#10B981';
    case 'medio': return '#F59E0B';
    case 'alto': return '#EF4444';
    case 'critico': return '#DC2626';
    default: return '#6B7280';
  }
};

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Evolução do NPS com IA */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            Evolução do NPS com IA
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Análise preditiva e tendências inteligentes</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={healthScoreData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="score" stroke="#3B82F6" fillOpacity={1} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Matriz de Risco Inteligente */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            Matriz de Risco Inteligente
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">LTV vs Risco de Churn com Health Score</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={riskMatrixData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="ltv" 
                domain={['dataMin', 'dataMax']}
                className="text-xs text-gray-500 dark:text-gray-400"
                tickFormatter={(value) => `${value/1000}k`}
              />
              <YAxis 
                dataKey="churnRisk"
                domain={[0, 100]}
                className="text-xs text-gray-500 dark:text-gray-400"
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)'
                }}
                formatter={(value: any, name: any, props: any) => [
                  name === 'churnRisk' ? `${value}%` : value,
                  name === 'churnRisk' ? 'Risco de Churn' : 'LTV'
                ]}
              />
              <Scatter dataKey="churnRisk">
                {riskMatrixData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getRiskColor(entry.status)}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Baixo Risco
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Alto Risco
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
