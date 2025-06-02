
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Calendar, DollarSign, Users } from 'lucide-react';

const retentionData = [
  { month: 'Jan', cohort2023: 100, cohort2024: 100 },
  { month: 'Fev', cohort2023: 95, cohort2024: 98 },
  { month: 'Mar', cohort2023: 90, cohort2024: 94 },
  { month: 'Abr', cohort2023: 85, cohort2024: 90 },
  { month: 'Mai', cohort2023: 82, cohort2024: 88 },
  { month: 'Jun', cohort2023: 78, cohort2024: 85 },
];

const revenueData = [
  { month: 'Jan', receita: 450000, contratos: 127 },
  { month: 'Fev', receita: 465000, contratos: 132 },
  { month: 'Mar', receita: 485000, contratos: 138 },
  { month: 'Abr', receita: 510000, contratos: 145 },
  { month: 'Mai', receita: 525000, contratos: 151 },
  { month: 'Jun', receita: 548000, contratos: 158 },
];

const statusData = [
  { name: 'Ativos', value: 127, color: '#10B981' },
  { name: 'Vencidos', value: 8, color: '#EF4444' },
  { name: 'Suspensos', value: 3, color: '#F59E0B' },
  { name: 'Em Renovação', value: 12, color: '#3B82F6' },
];

export const ContractAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Análise de Cohort */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Análise de Retenção por Cohort
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis 
                className="text-gray-600 dark:text-gray-400"
                domain={[70, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="cohort2023" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Cohort 2023"
              />
              <Line 
                type="monotone" 
                dataKey="cohort2024" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Cohort 2024"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Status dos Contratos */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Distribuição por Status
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Evolução de Receita e Contratos */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Evolução de Receita e Contratos
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-gray-600 dark:text-gray-400"
            />
            <YAxis 
              yAxisId="left"
              className="text-gray-600 dark:text-gray-400"
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              className="text-gray-600 dark:text-gray-400"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
              formatter={(value, name) => [
                name === 'receita' ? `R$ ${value.toLocaleString()}` : value,
                name === 'receita' ? 'Receita' : 'Contratos'
              ]}
            />
            <Bar 
              yAxisId="left"
              dataKey="receita" 
              fill="#8B5CF6" 
              name="receita"
              radius={[4, 4, 0, 0]}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="contratos" 
              stroke="#F59E0B" 
              strokeWidth={3}
              name="contratos"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Métricas Resumidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Renovação</p>
              <p className="text-2xl font-bold text-green-600">94.2%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tempo Médio de Contrato</p>
              <p className="text-2xl font-bold text-blue-600">18 meses</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Valor Médio</p>
              <p className="text-2xl font-bold text-purple-600">R$ 156k</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Únicos</p>
              <p className="text-2xl font-bold text-orange-600">89</p>
            </div>
            <Users className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};
