
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { CustomizableMetricsCards } from '../components/CustomizableMetricsCards';
import { ChartsSection } from '../components/ChartsSection';
import { NewChartsSection } from '../components/NewChartsSection';
import { ClientsManagement } from '../components/ClientsManagement';
import { AIAssistant } from '../components/AIAssistant';
import { FeedbackSection } from '../components/FeedbackSection';
import { DashboardCustomizer } from '../components/DashboardCustomizer';

const Index = () => {
  const [visibleMetrics, setVisibleMetrics] = useState([
    'churn', 'nps', 'health', 'ltv', 'retention', 'csat', 'mrr', 'cac'
  ]);
  
  const [visibleCharts, setVisibleCharts] = useState([
    'nps-evolution', 'churn-risk', 'health-distribution', 'revenue-pie', 'client-segments'
  ]);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard CS360°</h1>
              <p className="text-gray-600 dark:text-gray-300">Potencialize seu Customer Success em 360° de forma fácil e inteligente</p>
            </div>
            <DashboardCustomizer
              onToggleMetric={handleToggleMetric}
              onToggleChart={handleToggleChart}
              visibleMetrics={visibleMetrics}
              visibleCharts={visibleCharts}
            />
          </div>
          
          <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          <ChartsSection visibleCharts={visibleCharts} />
          <NewChartsSection visibleCharts={visibleCharts} />
          
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-2">
              <ClientsManagement />
            </div>
            <div className="xl:col-span-1">
              <AIAssistant />
            </div>
            <div className="xl:col-span-1">
              <FeedbackSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
