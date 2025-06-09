
import React, { useState } from 'react';
import { DashboardHero } from './dashboard/DashboardHero';
import { DashboardMetrics } from './dashboard/DashboardMetrics';
import { DashboardCharts } from './dashboard/DashboardCharts';
import { QuickInsights } from './dashboard/QuickInsights';
import { ClientsSection } from './dashboard/ClientsSection';
import { SidebarInfo } from './dashboard/SidebarInfo';
import { AnalyticsCharts } from './dashboard/AnalyticsCharts';

export const Dashboard = () => {
  const [visibleMetrics, setVisibleMetrics] = useState(['clients', 'mrr', 'nps', 'churn', 'health', 'alerts']);
  const [visibleCharts, setVisibleCharts] = useState(['revenue', 'nps', 'churn', 'health', 'segments']);

  const handleToggleMetric = (metricId: string) => {
    setVisibleMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  const handleToggleChart = (chartId: string) => {
    setVisibleCharts(prev => 
      prev.includes(chartId) 
        ? prev.filter(id => id !== chartId)
        : [...prev, chartId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Hero Section with Customization */}
        <DashboardHero 
          onToggleMetric={handleToggleMetric}
          onToggleChart={handleToggleChart}
          visibleMetrics={visibleMetrics}
          visibleCharts={visibleCharts}
        />

        {/* Quick Insights - Três cards principais */}
        <QuickInsights />

        {/* Métricas Principais */}
        <DashboardMetrics />

        {/* Layout Principal - Gráficos + Sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Gráficos e Analytics - 3 colunas */}
          <div className="xl:col-span-3 space-y-6">
            <DashboardCharts />
            <AnalyticsCharts visibleCharts={visibleCharts} />
          </div>

          {/* Sidebar com Informações */}
          <div className="xl:col-span-1">
            <SidebarInfo />
          </div>
        </div>

        {/* Gestão de Clientes - Full Width */}
        <ClientsSection />
      </div>
    </div>
  );
};
