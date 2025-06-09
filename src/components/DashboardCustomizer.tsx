
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Settings, 
  Eye, 
  EyeOff, 
  BarChart3,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Activity,
  Target,
  AlertTriangle
} from 'lucide-react';

interface DashboardCustomizerProps {
  onToggleMetric: (metricId: string) => void;
  onToggleChart: (chartId: string) => void;
  visibleMetrics: string[];
  visibleCharts: string[];
}

const metricOptions = [
  { id: 'clients', name: 'Clientes Ativos', icon: Users, description: 'Total de clientes ativos' },
  { id: 'mrr', name: 'MRR', icon: DollarSign, description: 'Receita mensal recorrente' },
  { id: 'nps', name: 'NPS Score', icon: Star, description: 'Net Promoter Score' },
  { id: 'churn', name: 'Churn Rate', icon: TrendingUp, description: 'Taxa de cancelamento' },
  { id: 'health', name: 'Health Score', icon: Activity, description: 'Pontuação de saúde' },
  { id: 'alerts', name: 'Alertas', icon: AlertTriangle, description: 'Alertas ativos' }
];

const chartOptions = [
  { id: 'revenue', name: 'Análise de Receita', icon: DollarSign, description: 'MRR, ARR e crescimento' },
  { id: 'nps', name: 'NPS Evolution', icon: Star, description: 'Evolução do NPS' },
  { id: 'churn', name: 'Churn Analysis', icon: TrendingUp, description: 'Análise de churn' },
  { id: 'health', name: 'Health Score', icon: Activity, description: 'Health por segmento' },
  { id: 'segments', name: 'Segmentação', icon: Users, description: 'Distribuição por segmento' }
];

export const DashboardCustomizer = ({ 
  onToggleMetric, 
  onToggleChart, 
  visibleMetrics, 
  visibleCharts 
}: DashboardCustomizerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all"
        >
          <Settings className="w-4 h-4 mr-2" />
          Personalizar
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Personalizar Dashboard
                </h3>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                ×
              </Button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Configure quais métricas e gráficos você quer visualizar
            </p>
          </div>

          <Tabs defaultValue="metrics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 m-4 mb-0">
              <TabsTrigger value="metrics" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Métricas</span>
              </TabsTrigger>
              <TabsTrigger value="charts" className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Gráficos</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="p-4 pt-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Indicadores Principais
                </h4>
                <Badge variant="outline" className="text-xs">
                  {visibleMetrics.length}/{metricOptions.length} ativos
                </Badge>
              </div>

              <div className="space-y-3">
                {metricOptions.map((metric) => (
                  <div key={metric.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <metric.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {metric.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {metric.description}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={visibleMetrics.includes(metric.id)}
                      onCheckedChange={() => onToggleMetric(metric.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="charts" className="p-4 pt-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  Gráficos Analytics
                </h4>
                <Badge variant="outline" className="text-xs">
                  {visibleCharts.length}/{chartOptions.length} ativos
                </Badge>
              </div>

              <div className="space-y-3">
                {chartOptions.map((chart) => (
                  <div key={chart.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                        <chart.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {chart.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {chart.description}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={visibleCharts.includes(chart.id)}
                      onCheckedChange={() => onToggleChart(chart.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600 dark:text-gray-400">
                As alterações são salvas automaticamente
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-xs">
                  Resetar
                </Button>
                <Button size="sm" className="text-xs" onClick={() => setOpen(false)}>
                  Concluído
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
