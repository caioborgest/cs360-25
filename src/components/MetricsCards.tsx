
import React from 'react';
import { CircularProgress } from './CircularProgress';
import { TrendingUp, TrendingDown, Users, DollarSign, Target, AlertTriangle } from 'lucide-react';

const mainMetrics = [
  {
    title: 'Health Score Geral',
    value: 72,
    subtitle: 'Média do mercado: 68',
    color: 'blue' as const,
    isPercentage: true,
    icon: Target,
    trend: { value: '+4%', direction: 'up' as const }
  },
  {
    title: 'Net Promoter Score',
    value: 42,
    subtitle: 'Promotores: 57% | Passivos: 31% | Detratores: 12%',
    color: 'green' as const,
    icon: Users,
    trend: { value: '+8%', direction: 'up' as const }
  },
  {
    title: 'LTV Médio',
    value: 'R$ 124k',
    subtitle: 'Crescimento de 12% no trimestre',
    color: 'purple' as const,
    icon: DollarSign,
    trend: { value: '+12%', direction: 'up' as const }
  },
  {
    title: 'Taxa de Churn',
    value: '5.2%',
    subtitle: 'Meta: 3.5% | Crítico: acima de 8%',
    color: 'red' as const,
    icon: AlertTriangle,
    trend: { value: '+1.2%', direction: 'up' as const }
  }
];

const additionalMetrics = [
  {
    title: 'CSAT',
    value: '86%',
    subtitle: 'Satisfação dos Clientes',
    color: 'blue' as const,
    progress: 86,
    target: 90
  },
  {
    title: 'CES',
    value: '2.4',
    subtitle: 'Customer Effort Score',
    color: 'green' as const,
    progress: 76,
    target: 80
  },
  {
    title: 'MRR',
    value: 'R$ 485k',
    subtitle: 'Receita Recorrente Mensal',
    color: 'purple' as const,
    trend: { value: '+8%', direction: 'up' as const }
  },
  {
    title: 'Taxa de Adoção',
    value: '68%',
    subtitle: 'Adoção de Novos Recursos',
    color: 'blue' as const,
    progress: 68,
    target: 80
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export const MetricsCards = () => {
  return (
    <div className="space-y-6">
      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(metric.color)} flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              {metric.trend && (
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.trend.direction === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.trend.direction === 'up' ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {metric.trend.value}
                </div>
              )}
            </div>
            
            <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
            
            <div className="flex items-center space-x-4">
              {typeof metric.value === 'number' ? (
                <CircularProgress 
                  value={metric.value} 
                  color={metric.color}
                  size={60}
                />
              ) : (
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              )}
              
              <div className="flex-1">
                <div className="text-xs text-gray-500 leading-relaxed">
                  {metric.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {additionalMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
            
            <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
            
            <div className="text-xs text-gray-500 mb-3">
              {metric.subtitle}
            </div>
            
            {metric.progress && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Atual: {metric.progress}%</span>
                  {metric.target && <span>Meta: {metric.target}%</span>}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(metric.color)}`}
                    style={{ width: `${metric.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {metric.trend && (
              <div className={`flex items-center mt-3 text-xs font-medium ${
                metric.trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend.direction === 'up' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {metric.trend.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
