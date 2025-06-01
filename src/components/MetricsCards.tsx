
import React from 'react';
import { CircularProgress } from './CircularProgress';
import { TrendingUp, TrendingDown } from 'lucide-react';

const metrics = [
  {
    title: 'Health Score',
    value: 72,
    subtitle: 'Média 88\nTop 5',
    color: 'blue',
    isPercentage: true
  },
  {
    title: 'Net Promoter Score',
    value: 42,
    subtitle: 'Média 34\nDetratores (9-0): 12%\nPassivos (7-8): 31%\nPromoters (9-10): 57%',
    color: 'blue',
    trend: { value: '+8%', direction: 'up' }
  },
  {
    title: 'Lifetime Value',
    value: 'R$ 12.4k',
    subtitle: 'Média 53\nChurn \nRatio LTV/CAC',
    color: 'green',
    trend: { value: '+8%', direction: 'up' }
  },
  {
    title: 'Taxa de Churn',
    value: '5.2%',
    subtitle: 'Média 1.8%\n+2% M\nChurn Revenue: \nTaxa de Churn',
    color: 'red',
    trend: { value: '+8%', direction: 'up' }
  }
];

const simpleMetrics = [
  {
    title: 'CSAT',
    value: '86%',
    subtitle: 'Média 90%\n+3% M',
    color: 'blue',
    progress: 86
  },
  {
    title: 'CES',
    value: '2.4',
    subtitle: 'Média 2.3\n+6% M\nTop Segmento',
    color: 'green',
    progress: 42
  },
  {
    title: 'MRR',
    value: 'R$ 485k',
    subtitle: 'ARR 5k\nUPMA\n+8% M\nLicenças MRR\nOther MRR',
    color: 'green',
    trend: { value: '+8%', direction: 'up' }
  },
  {
    title: 'Taxa de Adoção',
    value: '68%',
    subtitle: 'Média 80%\n+6% M\nFeature X',
    color: 'blue',
    progress: 68
  }
];

export const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          
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
              <div className="text-xs text-gray-500 whitespace-pre-line">
                {metric.subtitle}
              </div>
              {metric.trend && (
                <div className={`flex items-center mt-2 text-xs ${
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
          </div>
        </div>
      ))}
      
      {simpleMetrics.map((metric, index) => (
        <div key={index + 4} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          
          <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
          
          <div className="text-xs text-gray-500 whitespace-pre-line mb-3">
            {metric.subtitle}
          </div>
          
          {metric.progress && (
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className={`h-1 rounded-full ${
                  metric.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                }`}
                style={{ width: `${metric.progress}%` }}
              ></div>
            </div>
          )}
          
          {metric.trend && (
            <div className={`flex items-center mt-2 text-xs ${
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
  );
};
