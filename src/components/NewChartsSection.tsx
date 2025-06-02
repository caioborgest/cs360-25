
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const revenueData = [
  { name: 'Enterprise', value: 45, color: '#3B82F6' },
  { name: 'Pro', value: 30, color: '#10B981' },
  { name: 'Basic', value: 20, color: '#F59E0B' },
  { name: 'Trial', value: 5, color: '#EF4444' }
];

const radarData = [
  { subject: 'Utilização', A: 100, B: 80, C: 60 },
  { subject: 'Satisfação', A: 90, B: 75, C: 50 },
  { subject: 'Suporte', A: 85, B: 70, C: 45 },
  { subject: 'Pagamentos', A: 95, B: 85, C: 70 },
  { subject: 'Engajamento', A: 88, B: 65, C: 40 },
  { subject: 'Crescimento', A: 92, B: 78, C: 55 }
];

const monthlyData = [
  { month: 'Jan', churn: 4.2, nps: 35, satisfaction: 85 },
  { month: 'Fev', churn: 3.8, nps: 38, satisfaction: 87 },
  { month: 'Mar', churn: 4.5, nps: 36, satisfaction: 84 },
  { month: 'Abr', churn: 3.9, nps: 40, satisfaction: 89 },
  { month: 'Mai', churn: 3.2, nps: 42, satisfaction: 91 },
  { month: 'Jun', churn: 2.8, nps: 45, satisfaction: 93 }
];

interface NewChartsSectionProps {
  visibleCharts: string[];
}

export const NewChartsSection: React.FC<NewChartsSectionProps> = ({ visibleCharts }) => {
  const charts = [
    {
      id: 'revenue-pie',
      title: 'Distribuição de Receita por Plano',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'client-segments',
      title: 'Saúde do Cliente (Média)',
      subtitle: 'Nível A | Nível B | Nível C',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" className="text-xs" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
            <Radar name="Nível A" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} strokeWidth={2} />
            <Radar name="Nível B" dataKey="B" stroke="#10B981" fill="#10B981" fillOpacity={0.1} strokeWidth={2} />
            <Radar name="Nível C" dataKey="C" stroke="#6B7280" fill="#6B7280" fillOpacity={0.1} strokeWidth={2} />
          </RadarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'monthly-metrics',
      title: 'Tendências Mensais',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Area type="monotone" dataKey="satisfaction" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
            <Area type="monotone" dataKey="nps" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      )
    }
  ];

  const visibleChartsToShow = charts.filter(chart => visibleCharts.includes(chart.id));

  if (visibleChartsToShow.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      {visibleChartsToShow.map((chart) => (
        <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{chart.title}</h3>
              {chart.subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{chart.subtitle}</p>
              )}
            </div>
          </div>
          {chart.component}
          {chart.id === 'client-segments' && (
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Nível A</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Nível B</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Nível C</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
