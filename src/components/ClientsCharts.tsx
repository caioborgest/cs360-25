
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, Tooltip, Legend } from 'recharts';
import { ClientFilter } from '../pages/Clients';

interface ClientsChartsProps {
  filters: ClientFilter;
}

const npsDistributionData = [
  { category: 'Promotores', value: 45, color: '#10B981' },
  { category: 'Passivos', value: 35, color: '#F59E0B' },
  { category: 'Detratores', value: 20, color: '#EF4444' }
];

const ltvEvolutionData = [
  { month: 'Jan', ltvMedio: 85000, cacMedio: 3200 },
  { month: 'Fev', ltvMedio: 87000, cacMedio: 3100 },
  { month: 'Mar', ltvMedio: 89000, cacMedio: 3000 },
  { month: 'Abr', ltvMedio: 91000, cacMedio: 2900 },
  { month: 'Mai', ltvMedio: 93000, cacMedio: 2800 },
  { month: 'Jun', ltvMedio: 95000, cacMedio: 2700 }
];

const clientHealthData = [
  { subject: 'NPS', A: 85, B: 70, C: 45 },
  { subject: 'Retenção', A: 95, B: 88, C: 70 },
  { subject: 'Uso Produto', A: 90, B: 75, C: 50 },
  { subject: 'Suporte', A: 92, B: 80, C: 60 },
  { subject: 'Pagamentos', A: 98, B: 92, C: 85 },
  { subject: 'Engajamento', A: 88, B: 70, C: 45 }
];

const levelDistributionData = [
  { level: 'Nível A', clientes: 45, ltv: 150000 },
  { level: 'Nível B', clientes: 120, ltv: 80000 },
  { level: 'Nível C', clientes: 82, ltv: 35000 }
];

export const ClientsCharts: React.FC<ClientsChartsProps> = ({ filters }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribuição NPS */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribuição NPS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={npsDistributionData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
              >
                {npsDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Evolução LTV vs CAC */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Evolução LTV vs CAC</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ltvEvolutionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`R$ ${(value as number / 1000).toFixed(0)}k`, '']} />
              <Legend />
              <Line type="monotone" dataKey="ltvMedio" stroke="#3B82F6" strokeWidth={3} name="LTV Médio" />
              <Line type="monotone" dataKey="cacMedio" stroke="#EF4444" strokeWidth={3} name="CAC Médio" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Saúde dos Clientes por Nível */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Saúde dos Clientes por Nível</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={clientHealthData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" className="text-xs" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
              <Radar name="Nível A" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} strokeWidth={2} />
              <Radar name="Nível B" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.1} strokeWidth={2} />
              <Radar name="Nível C" dataKey="C" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} strokeWidth={2} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição por Nível */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Clientes por Nível</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={levelDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="clientes" fill="#3B82F6" name="Quantidade de Clientes" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap de Relacionamento */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mapa de Calor - Relacionamento</h3>
        <div className="grid grid-cols-3 gap-4">
          {['Arrojado', 'Moderado', 'Conservador'].map((profile) => (
            <div key={profile} className="text-center">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{profile}</h4>
              <div className="grid grid-cols-3 gap-1">
                {['A', 'B', 'C'].map((level) => {
                  const intensity = Math.random() * 100;
                  const color = intensity > 70 ? 'bg-green-500' : 
                               intensity > 40 ? 'bg-yellow-500' : 'bg-red-500';
                  return (
                    <div
                      key={level}
                      className={`h-12 ${color} rounded flex items-center justify-center text-white text-sm font-medium`}
                    >
                      {level}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
            <span>Baixo</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
            <span>Médio</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
            <span>Alto</span>
          </div>
        </div>
      </div>
    </div>
  );
};
