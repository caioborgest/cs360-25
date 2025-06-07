
import React from 'react';
import { ChartsSection } from '../ChartsSection';
import { NewChartsSection } from '../NewChartsSection';
import { DashboardChart } from '../DashboardChart';

interface AnalyticsChartsProps {
  visibleCharts: string[];
}

const engagementData = [
  { name: 'Jan', value: 65 },
  { name: 'Fev', value: 72 },
  { name: 'Mar', value: 68 },
  { name: 'Abr', value: 78 },
  { name: 'Mai', value: 85 },
  { name: 'Jun', value: 88 }
];

const strategicMetricsData = [
  { name: 'Upsell', value: 23 },
  { name: 'Cross-sell', value: 31 },
  { name: 'Retenção', value: 45 },
  { name: 'Expansão', value: 18 }
];

export const AnalyticsCharts = ({ visibleCharts }: AnalyticsChartsProps) => {
  return (
    <div className="xl:col-span-2 space-y-6">
      <ChartsSection visibleCharts={visibleCharts} />
      <NewChartsSection visibleCharts={visibleCharts} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardChart
          title="Engajamento do Cliente"
          type="area"
          data={engagementData}
          color="#10B981"
          height={280}
        />
        <DashboardChart
          title="Oportunidades Estratégicas"
          type="pie"
          data={strategicMetricsData}
          height={280}
        />
      </div>
    </div>
  );
};
