
import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { DashboardCustomizer } from '../DashboardCustomizer';
import { BarChart3, Activity, Sparkles, RefreshCw, Download } from 'lucide-react';

interface DashboardHeroProps {
  onToggleMetric: (metricId: string) => void;
  onToggleChart: (chartId: string) => void;
  visibleMetrics: string[];
  visibleCharts: string[];
}

export const DashboardHero = ({ onToggleMetric, onToggleChart, visibleMetrics, visibleCharts }: DashboardHeroProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-3xl"></div>
      <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                  CS360° Dashboard
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 font-medium">
                    <Activity className="w-3 h-3 mr-1.5" />
                    Tempo Real
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 font-medium">
                    <Sparkles className="w-3 h-3 mr-1.5" />
                    IA Ativa
                  </Badge>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
              Potencialize seu Customer Success com insights inteligentes e ações orientadas por dados
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all">
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizar
            </Button>
            <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <DashboardCustomizer
              onToggleMetric={onToggleMetric}
              onToggleChart={onToggleChart}
              visibleMetrics={visibleMetrics}
              visibleCharts={visibleCharts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
