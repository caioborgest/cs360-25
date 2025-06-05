
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center mb-10">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Dashboard CS360°
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                Potencialize seu Customer Success em 360° de forma fácil e inteligente
              </p>
            </div>
            <DashboardCustomizer
              onToggleMetric={handleToggleMetric}
              onToggleChart={handleToggleChart}
              visibleMetrics={visibleMetrics}
              visibleCharts={visibleCharts}
            />
          </div>
          
          <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <ChartsSection visibleCharts={visibleCharts} />
              <NewChartsSection visibleCharts={visibleCharts} />
            </div>
            
            <div className="space-y-8">
              <ClientsManagement />
              <AIAssistant />
              <FeedbackSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
