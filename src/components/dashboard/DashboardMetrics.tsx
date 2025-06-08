
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, TrendingDown, Users, FileText, Target, DollarSign } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: React.ReactNode;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeType, icon, description }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</CardTitle>
        <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        {change && (
          <div className={`flex items-center text-xs ${
            changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'positive' ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {change}
          </div>
        )}
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Clientes Ativos"
        value={127}
        change="+12% vs mês anterior"
        changeType="positive"
        icon={<Users className="w-5 h-5" />}
        description="Total de clientes ativos"
      />
      <MetricCard
        title="Contratos Vigentes"
        value={145}
        change="+8% vs mês anterior"
        changeType="positive"
        icon={<FileText className="w-5 h-5" />}
        description="Contratos em andamento"
      />
      <MetricCard
        title="MRR Total"
        value="R$ 485k"
        change="+15% vs mês anterior"
        changeType="positive"
        icon={<DollarSign className="w-5 h-5" />}
        description="Receita mensal recorrente"
      />
      <MetricCard
        title="Metas Alcançadas"
        value="23/30"
        change="76.7% de conclusão"
        changeType="positive"
        icon={<Target className="w-5 h-5" />}
        description="Metas do mês atual"
      />
    </div>
  );
};
