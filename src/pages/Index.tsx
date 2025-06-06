
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
import { OnboardingLauncher } from '../components/onboarding/OnboardingLauncher';
import { DashboardChart } from '../components/DashboardChart';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Brain,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Zap,
  BarChart3
} from 'lucide-react';

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

  // Dados para gráficos adicionais
  const engagementData = [
    { name: 'Jan', value: 65 },
    { name: 'Fev', value: 72 },
    { name: 'Mar', value: 68 },
    { name: 'Abr', value: 78 },
    { name: 'Mai', value: 85 },
    { name: 'Jun', value: 88 }
  ];

  const retentionTrendData = [
    { name: 'Q1', value: 92 },
    { name: 'Q2', value: 94 },
    { name: 'Q3', value: 96 },
    { name: 'Q4', value: 93 }
  ];

  const strategicMetricsData = [
    { name: 'Upsell', value: 23 },
    { name: 'Cross-sell', value: 31 },
    { name: 'Retenção', value: 45 },
    { name: 'Expansão', value: 18 }
  ];

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
          
          {/* Métricas Flexíveis */}
          <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          
          {/* Gráficos Principais */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <ChartsSection visibleCharts={visibleCharts} />
            <div className="space-y-6">
              <DashboardChart
                title="Engajamento do Cliente"
                type="area"
                data={engagementData}
                color="#10B981"
                height={280}
              />
              <DashboardChart
                title="Tendência de Retenção Trimestral"
                type="bar"
                data={retentionTrendData}
                color="#8B5CF6"
                height={280}
              />
            </div>
          </div>

          {/* Segunda linha de gráficos */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <NewChartsSection visibleCharts={visibleCharts} />
            <DashboardChart
              title="Oportunidades Estratégicas"
              type="pie"
              data={strategicMetricsData}
              height={300}
            />
          </div>
          
          {/* Gestão de Clientes Expandida */}
          <div className="w-full">
            <ClientsManagement />
          </div>
          
          {/* Seção de Assistente, Feedback e Ações IA */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Assistente IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
                      "Identifiquei 3 clientes com alta probabilidade de churn. Deseja que eu crie estratégias personalizadas?"
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Criar Estratégias
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat com IA
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Feedback CSAT Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-sm text-gray-900 dark:text-white">TechCorp LTDA</div>
                        <div className="text-xs text-green-700 dark:text-green-400">CSAT: 9.2</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Excelente</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-sm text-gray-900 dark:text-white">StartupX</div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-400">CSAT: 6.8</div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Regular</Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Ver Todos os Feedbacks
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <Zap className="w-6 h-6 text-orange-600" />
                  Ações Recomendadas IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Ação Crítica</div>
                        <div className="text-xs text-red-700 dark:text-red-400">Reunião urgente com BigCorp S.A.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Oportunidade</div>
                        <div className="text-xs text-green-700 dark:text-green-400">Propor upgrade para TechCorp</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700">
                    <Target className="w-4 h-4 mr-2" />
                    Ver Todas as Ações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Onboarding Launcher */}
      <OnboardingLauncher />
    </div>
  );
};

export default Index;
