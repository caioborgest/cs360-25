
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar, Cell } from 'recharts';

const npsData = [
  { month: 'Jan', value: 30 },
  { month: 'Fev', value: 35 },
  { month: 'Mar', value: 32 },
  { month: 'Abr', value: 38 },
  { month: 'Mai', value: 40 },
  { month: 'Jun', value: 37 },
  { month: 'Jul', value: 42 },
  { month: 'Ago', value: 45 },
  { month: 'Set', value: 48 },
  { month: 'Out', value: 44 },
  { month: 'Nov', value: 47 },
  { month: 'Dez', value: 50 }
];

const churnRiskData = [
  { ltv: 5, risk: 90, segment: 'A' },
  { ltv: 8, risk: 85, segment: 'A' },
  { ltv: 12, risk: 75, segment: 'A' },
  { ltv: 15, risk: 60, segment: 'B' },
  { ltv: 18, risk: 45, segment: 'B' },
  { ltv: 22, risk: 30, segment: 'B' },
  { ltv: 25, risk: 25, segment: 'C' },
  { ltv: 30, risk: 15, segment: 'C' },
  { ltv: 35, risk: 10, segment: 'C' }
];

const healthScoreData = [
  { range: '0-20', count: 8, label: 'Crítico', color: '#EF4444' },
  { range: '21-40', count: 12, label: 'Risco', color: '#F97316' },
  { range: '41-60', count: 22, label: 'Bom', color: '#EAB308' },
  { range: '61-80', count: 35, label: 'Excelente', color: '#3B82F6' },
  { range: '81-100', count: 28, label: 'Sucesso', color: '#10B981' }
];

interface ChartsSectionProps {
  visibleCharts: string[];
}

export const ChartsSection: React.FC<ChartsSectionProps> = ({ visibleCharts }) => {
  const charts = [
    {
      id: 'nps-evolution',
      title: 'Evolução do NPS',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={npsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-600" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <YAxis tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'churn-risk',
      title: 'LTV vs Risco de Churn',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart data={churnRiskData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-600" />
            <XAxis dataKey="ltv" tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <YAxis dataKey="risk" tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <Scatter dataKey="risk" fill="#3B82F6" />
          </ScatterChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'health-distribution',
      title: 'Distribuição do Health Score',
      component: (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={healthScoreData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-600" />
            <XAxis dataKey="range" tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <YAxis tick={{ fontSize: 12 }} className="dark:fill-gray-300" />
            <Bar dataKey="count">
              {healthScoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )
    }
  ];

  const visibleChartsToShow = charts.filter(chart => visibleCharts.includes(chart.id));

  if (visibleChartsToShow.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {visibleChartsToShow.map((chart) => (
        <div key={chart.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{chart.title}</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">12M</button>
              <button className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400">6M</button>
              <button className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400">3M</button>
            </div>
          </div>
          {chart.component}
          {chart.id === 'churn-risk' && (
            <div className="flex items-center justify-center space-x-4 mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Cliente A</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Cliente B</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Cliente C</span>
              </div>
            </div>
          )}
          {chart.id === 'health-distribution' && (
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
              <span>Crítico 12%</span>
              <span>Risco 23%</span>
              <span>Sucesso 65%</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
