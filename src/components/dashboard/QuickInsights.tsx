
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, TrendingDown, AlertTriangle, Users, Star, DollarSign, Heart, Target } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  description?: string;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  description,
  color = 'blue'
}) => {
  const getChangeIcon = () => {
    if (changeType === 'positive') return <TrendingUp className="w-4 h-4" />;
    if (changeType === 'negative') return <TrendingDown className="w-4 h-4" />;
    return null;
  };

  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-600 bg-green-50 border-green-200';
    if (changeType === 'negative') return 'text-red-600 bg-red-50 border-red-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}>
            {icon}
          </div>
          <div>
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </CardTitle>
            {description && (
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {value}
        </div>
        {change && (
          <Badge variant="outline" className={`${getChangeColor()} text-xs px-2 py-1 flex items-center space-x-1 w-fit`}>
            {getChangeIcon()}
            <span>{change}</span>
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export const QuickInsights = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Métricas Principais</h2>
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          Atualizado agora
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <MetricCard
          title="Churn Rate"
          value="5.2%"
          change="+0.8% vs mês anterior"
          changeType="negative"
          icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
          description="Taxa de cancelamento"
          color="red"
        />
        
        <MetricCard
          title="Net Promoter Score"
          value="42"
          change="+5 pontos vs mês anterior"
          changeType="positive"
          icon={<Star className="w-5 h-5 text-blue-600" />}
          description="NPS médio dos clientes"
          color="blue"
        />
        
        <MetricCard
          title="Customer Health Score"
          value="72"
          change="+3 pontos vs mês anterior"
          changeType="positive"
          icon={<Heart className="w-5 h-5 text-green-600" />}
          description="Saúde média dos clientes"
          color="green"
        />
        
        <MetricCard
          title="Customer Lifetime Value"
          value="R$ 124k"
          change="+12% vs mês anterior"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5 text-purple-600" />}
          description="LTV médio dos clientes"
          color="purple"
        />
        
        <MetricCard
          title="Customer Satisfaction"
          value="4.6/5"
          change="Excelente"
          changeType="positive"
          icon={<Star className="w-5 h-5 text-yellow-600" />}
          description="Satisfação dos clientes"
          color="yellow"
        />
        
        <MetricCard
          title="Retention Rate"
          value="94.8%"
          change="+0.8% vs mês anterior"
          changeType="positive"
          icon={<Target className="w-5 h-5 text-teal-600" />}
          description="Taxa de retenção"
          color="teal"
        />
        
        <MetricCard
          title="Monthly Recurring Revenue"
          value="R$ 485k"
          change="+15% vs mês anterior"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5 text-green-600" />}
          description="Receita mensal recorrente"
          color="green"
        />
        
        <MetricCard
          title="Customer Acquisition Cost"
          value="R$ 2.8k"
          change="-8% vs mês anterior"
          changeType="positive"
          icon={<Users className="w-5 h-5 text-blue-600" />}
          description="Custo de aquisição"
          color="blue"
        />
      </div>
    </div>
  );
};
