
import React from 'react';
import { Layout } from '@/components/Layout';
import { DashboardHero } from '@/components/dashboard/DashboardHero';
import { QuickInsights } from '@/components/dashboard/QuickInsights';
import { DashboardCharts } from '@/components/dashboard/DashboardCharts';
import { AnalyticsCharts } from '@/components/dashboard/AnalyticsCharts';
import { ClientsSection } from '@/components/dashboard/ClientsSection';
import { SidebarInfo } from '@/components/dashboard/SidebarInfo';

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
          {/* Hero Section */}
          <DashboardHero 
            onToggleMetric={() => {}}
            onToggleChart={() => {}}
            visibleMetrics={['clients', 'mrr', 'nps', 'churn', 'health', 'alerts']}
            visibleCharts={['revenue', 'nps', 'churn', 'health', 'segments']}
          />

          {/* Quick Insights - Métricas Principais */}
          <QuickInsights />

          {/* Layout Principal - Gráficos + Sidebar */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Gráficos e Analytics - 3 colunas */}
            <div className="xl:col-span-3 space-y-6">
              {/* Análise Visual Inteligente */}
              <DashboardCharts />
              
              {/* Analytics Avançado */}
              <AnalyticsCharts visibleCharts={['revenue', 'nps', 'churn', 'health', 'segments']} />
            </div>

            {/* Sidebar com Informações - 1 coluna */}
            <div className="xl:col-span-1">
              <SidebarInfo />
            </div>
          </div>

          {/* Gestão de Clientes - Full Width */}
          <ClientsSection />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
