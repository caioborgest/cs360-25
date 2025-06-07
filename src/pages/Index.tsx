
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { CustomizableMetricsCards } from '../components/CustomizableMetricsCards';
import { ClientsManagement } from '../components/ClientsManagement';
import { AIAssistant } from '../components/AIAssistant';
import { FeedbackSection } from '../components/FeedbackSection';
import { OnboardingLauncher } from '../components/onboarding/OnboardingLauncher';
import { DashboardHero } from '../components/dashboard/DashboardHero';
import { QuickInsights } from '../components/dashboard/QuickInsights';
import { AnalyticsCharts } from '../components/dashboard/AnalyticsCharts';
import { SidebarInfo } from '../components/dashboard/SidebarInfo';
import { SectionHeader } from '../components/dashboard/SectionHeader';
import { useDashboard } from '../components/dashboard/hooks/useDashboard';
import { 
  Target, 
  Brain,
  MessageSquare,
  Users, 
  BarChart3,
  Lightbulb
} from 'lucide-react';

const Index = () => {
  const {
    visibleMetrics,
    visibleCharts,
    handleToggleMetric,
    handleToggleChart
  } = useDashboard();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
          <DashboardHero
            onToggleMetric={handleToggleMetric}
            onToggleChart={handleToggleChart}
            visibleMetrics={visibleMetrics}
            visibleCharts={visibleCharts}
          />
          
          <section className="space-y-4">
            <SectionHeader icon={Target} title="Métricas Principais" />
            <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          </section>

          <section className="space-y-4">
            <SectionHeader icon={Lightbulb} title="Insights Rápidos" iconColor="text-amber-600" />
            <QuickInsights />
          </section>
          
          <section className="space-y-6">
            <SectionHeader icon={BarChart3} title="Analytics Avançado" iconColor="text-purple-600" />
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <AnalyticsCharts visibleCharts={visibleCharts} />
              <SidebarInfo />
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeader icon={Users} title="Gestão de Clientes" iconColor="text-green-600" />
            <ClientsManagement />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="space-y-4">
              <SectionHeader icon={Brain} title="Assistente IA" iconColor="text-purple-600" />
              <AIAssistant />
            </section>

            <section className="space-y-4">
              <SectionHeader icon={MessageSquare} title="Feedback dos Clientes" iconColor="text-blue-600" />
              <FeedbackSection />
            </section>
          </div>

          <OnboardingLauncher />
        </div>
      </main>
    </div>
  );
};

export default Index;
