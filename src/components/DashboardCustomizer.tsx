
import React, { useState } from 'react';
import { Settings, Eye, EyeOff, Move, Grid3X3 } from 'lucide-react';
import { Button } from './ui/button';

interface DashboardCustomizerProps {
  onToggleMetric: (metricId: string) => void;
  onToggleChart: (chartId: string) => void;
  visibleMetrics: string[];
  visibleCharts: string[];
}

const availableMetrics = [
  { id: 'churn', name: 'Churn Rate', description: 'Taxa de cancelamento' },
  { id: 'nps', name: 'NPS', description: 'Net Promoter Score' },
  { id: 'health', name: 'Health Score', description: 'Saúde do cliente' },
  { id: 'ltv', name: 'LTV', description: 'Customer Lifetime Value' },
  { id: 'ttv', name: 'Time-to-Value', description: 'Tempo para valor' },
  { id: 'adoption', name: 'Feature Adoption', description: 'Adoção de funcionalidades' },
  { id: 'csat', name: 'CSAT', description: 'Customer Satisfaction' },
  { id: 'retention', name: 'Retention Rate', description: 'Taxa de retenção' },
  { id: 'nrr', name: 'Net Revenue Retention', description: 'Retenção de receita' },
  { id: 'sla', name: 'Ticket SLA', description: 'Tempo de resolução' },
  { id: 'mrr', name: 'MRR', description: 'Receita recorrente mensal' },
  { id: 'cac', name: 'CAC', description: 'Custo de aquisição' }
];

const availableCharts = [
  { id: 'nps-evolution', name: 'Evolução do NPS', type: 'line' },
  { id: 'churn-risk', name: 'LTV vs Risco de Churn', type: 'scatter' },
  { id: 'health-distribution', name: 'Distribuição Health Score', type: 'bar' },
  { id: 'revenue-pie', name: 'Distribuição de Receita', type: 'pie' },
  { id: 'client-segments', name: 'Segmentos de Clientes', type: 'radar' },
  { id: 'monthly-metrics', name: 'Métricas Mensais', type: 'area' }
];

export const DashboardCustomizer: React.FC<DashboardCustomizerProps> = ({
  onToggleMetric,
  onToggleChart,
  visibleMetrics,
  visibleCharts
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Settings className="w-4 h-4" />
        <span>Personalizar</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Indicadores
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableMetrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {metric.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {metric.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleMetric(metric.id)}
                      className="ml-2"
                    >
                      {visibleMetrics.includes(metric.id) ? (
                        <Eye className="w-4 h-4 text-green-600" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                <Move className="w-4 h-4 mr-2" />
                Gráficos
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableCharts.map((chart) => (
                  <div
                    key={chart.id}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {chart.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                        Gráfico {chart.type}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleChart(chart.id)}
                      className="ml-2"
                    >
                      {visibleCharts.includes(chart.id) ? (
                        <Eye className="w-4 h-4 text-green-600" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
