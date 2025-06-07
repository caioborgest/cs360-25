
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TrendingUp, AlertTriangle, Star, ArrowUpRight } from 'lucide-react';

const quickInsights = [
  {
    id: 1,
    title: 'Oportunidade de Upsell',
    description: '3 clientes prontos para upgrade Premium',
    value: '+R$ 45k MRR',
    trend: 'positive',
    icon: TrendingUp,
    action: 'Ver Detalhes'
  },
  {
    id: 2,
    title: 'Alerta de Retenção',
    description: '2 clientes com risco alto de churn',
    value: '-R$ 12k MRR',
    trend: 'negative',
    icon: AlertTriangle,
    action: 'Tomar Ação'
  },
  {
    id: 3,
    title: 'NPS em Alta',
    description: 'Crescimento de 8 pontos este mês',
    value: '75 NPS',
    trend: 'positive',
    icon: Star,
    action: 'Analisar'
  }
];

export const QuickInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {quickInsights.map((insight) => (
        <Card key={insight.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${insight.trend === 'positive' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                <insight.icon className="w-5 h-5" />
              </div>
              <Badge variant="outline" className="text-xs">
                {insight.trend === 'positive' ? 'Oportunidade' : 'Atenção'}
              </Badge>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{insight.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{insight.description}</p>
            <div className="flex items-center justify-between">
              <span className={`font-bold text-lg ${insight.trend === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                {insight.value}
              </span>
              <Button size="sm" variant="ghost" className="group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                {insight.action}
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
