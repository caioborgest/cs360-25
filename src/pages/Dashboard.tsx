
import React from 'react';
import { Layout } from '@/components/Layout';
import { DashboardHero } from '@/components/dashboard/DashboardHero';
import { DashboardMetrics } from '@/components/dashboard/DashboardMetrics';
import { DashboardCharts } from '@/components/dashboard/DashboardCharts';
import { QuickInsights } from '@/components/dashboard/QuickInsights';

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
          <DashboardHero 
            onToggleMetric={() => {}}
            onToggleChart={() => {}}
            visibleMetrics={['clients', 'mrr', 'nps', 'churn', 'health', 'alerts']}
            visibleCharts={['revenue', 'nps', 'churn', 'health', 'segments']}
          />
          
          <QuickInsights />
          
          <DashboardMetrics />
          
          <DashboardCharts />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
