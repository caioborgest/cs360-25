
import { useState } from 'react';

export const useDashboard = () => {
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

  return {
    visibleMetrics,
    visibleCharts,
    handleToggleMetric,
    handleToggleChart
  };
};
