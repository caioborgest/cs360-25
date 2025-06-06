
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { CustomizableMetricsCards } from '../components/CustomizableMetricsCards';
import { ChartsSection } from '../components/ChartsSection';
import { NewChartsSection } from '../components/NewChartsSection';
import { ClientsManagement } from '../components/ClientsManagement';
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
  BarChart3,
  ArrowUpRight,
  Calendar,
  Bell,
  Star,
  Activity,
  DollarSign
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

  // Dados para gráficos aprimorados
  const engagementData = [
    { name: 'Jan', value: 65, target: 70 },
    { name: 'Fev', value: 72, target: 70 },
    { name: 'Mar', value: 68, target: 70 },
    { name: 'Abr', value: 78, target: 75 },
    { name: 'Mai', value: 85, target: 80 },
    { name: 'Jun', value: 88, target: 85 }
  ];

  const retentionTrendData = [
    { name: 'Q1 2023', atual: 92, anterior: 88 },
    { name: 'Q2 2023', atual: 94, anterior: 90 },
    { name: 'Q3 2023', atual: 96, anterior: 92 },
    { name: 'Q4 2023', atual: 93, anterior: 89 },
    { name: 'Q1 2024', atual: 95, anterior: 91 }
  ];

  const strategicMetricsData = [
    { name: 'Upsell', value: 23, color: '#10B981' },
    { name: 'Cross-sell', value: 31, color: '#3B82F6' },
    { name: 'Retenção', value: 45, color: '#8B5CF6' },
    { name: 'Expansão', value: 18, color: '#F59E0B' }
  ];

  const recentActivities = [
    {
      type: 'success',
      icon: CheckCircle,
      message: 'TechCorp LTDA renovou contrato anual',
      time: '2 min atrás',
      value: '+R$ 120k'
    },
    {
      type: 'warning',
      icon: AlertTriangle,
      message: 'StartupX com NPS baixo (6.2)',
      time: '15 min atrás',
      action: 'Agendar reunião'
    },
    {
      type: 'info',
      icon: MessageSquare,
      message: 'Nova resposta CSAT de InnovaCorp',
      time: '1h atrás',
      value: '9.1/10'
    },
    {
      type: 'success',
      icon: Star,
      message: 'Meta mensal de NPS atingida!',
      time: '2h atrás',
      value: '8.7'
    }
  ];

  const upcomingTasks = [
    {
      priority: 'high',
      task: 'Reunião de QBR com BigCorp',
      due: 'Hoje, 14:00',
      client: 'BigCorp S.A.'
    },
    {
      priority: 'medium',
      task: 'Follow-up pós-onboarding',
      due: 'Amanhã, 10:00',
      client: 'StartupY'
    },
    {
      priority: 'low',
      task: 'Enviar pesquisa NPS trimestral',
      due: 'Esta semana',
      client: 'Múltiplos clientes'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'error': return 'text-red-600 dark:text-red-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-6 lg:p-8 space-y-6">
          {/* Header aprimorado */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Dashboard CS360°
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                Potencialize seu Customer Success em 360° de forma fácil e inteligente
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-2">
                <Calendar className="w-4 h-4 mr-2" />
                Este mês
              </Button>
              <DashboardCustomizer
                onToggleMetric={handleToggleMetric}
                onToggleChart={handleToggleChart}
                visibleMetrics={visibleMetrics}
                visibleCharts={visibleCharts}
              />
            </div>
          </div>
          
          {/* Métricas Flexíveis com animações */}
          <div className="animate-fade-in">
            <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          </div>
          
          {/* Grid principal reorganizado */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Coluna principal - Gráficos */}
            <div className="xl:col-span-2 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartsSection visibleCharts={visibleCharts} />
                <div className="space-y-6">
                  <DashboardChart
                    title="Engajamento vs Meta"
                    type="area"
                    data={engagementData}
                    color="#10B981"
                    height={280}
                  />
                  <DashboardChart
                    title="Retenção Comparativa"
                    type="bar"
                    data={retentionTrendData}
                    color="#8B5CF6"
                    height={280}
                  />
                </div>
              </div>

              {/* Segunda linha de gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <NewChartsSection visibleCharts={visibleCharts} />
                <DashboardChart
                  title="Oportunidades Estratégicas"
                  type="pie"
                  data={strategicMetricsData}
                  height={300}
                />
              </div>
            </div>

            {/* Sidebar direita - Atividades e Tarefas */}
            <div className="space-y-6">
              {/* Atividades Recentes */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <Activity className="w-6 h-6 text-blue-600" />
                    Atividades Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                        <Icon className={`w-5 h-5 mt-0.5 ${getActivityColor(activity.type)}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                            {activity.value && (
                              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                                {activity.value}
                              </span>
                            )}
                            {activity.action && (
                              <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                                {activity.action}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <Bell className="w-4 h-4 mr-2" />
                    Ver Todas as Atividades
                  </Button>
                </CardContent>
              </Card>

              {/* Tarefas Pendentes */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <CheckSquare className="w-6 h-6 text-orange-600" />
                    Tarefas Pendentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-colors">
                      <input type="checkbox" className="mt-1 rounded border-gray-300" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={getPriorityColor(task.priority)}>
                            {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{task.task}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{task.client}</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{task.due}</p>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700">
                    <Target className="w-4 h-4 mr-2" />
                    Gerenciar Tarefas
                  </Button>
                </CardContent>
              </Card>

              {/* Assistente IA compacto */}
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200/50 dark:border-purple-700/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <Brain className="w-6 h-6 text-purple-600" />
                    Assistente IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 dark:bg-purple-900/20 rounded-lg border border-purple-200/50 dark:border-purple-800/50">
                      <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
                        "Identifiquei 3 clientes com alta probabilidade de churn. Deseja estratégias personalizadas?"
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                          Criar Estratégias
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
            </div>
          </div>
          
          {/* Gestão de Clientes Expandida */}
          <div className="w-full">
            <ClientsManagement />
          </div>
        </div>
      </main>
      
      {/* Onboarding Launcher */}
      <OnboardingLauncher />
    </div>
  );
};

export default Index;
