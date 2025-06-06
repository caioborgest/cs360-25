
import React from 'react';
import { NPSEvolutionChart } from './charts/NPSEvolutionChart';
import { NPSSegmentChart } from './charts/NPSSegmentChart';
import { ResponseRateChart } from './charts/ResponseRateChart';
import { CategoryPerformanceChart } from './charts/CategoryPerformanceChart';

export const NPSCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <NPSEvolutionChart />
      <NPSSegmentChart />
      <ResponseRateChart />
      <CategoryPerformanceChart />
    </div>
  );
};
