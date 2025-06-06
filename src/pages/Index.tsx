
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
import { ScrollArea } from '../components/ui/scroll-area';
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
  CheckSquare,
  Clock,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Filter,
  Download,
  Settings,
  RefreshCw,
  Eye,
  Activity,
  Bell,
  Star,
  Award,
  Sparkles,
  Lightbulb
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

  // Dados para atividades recentes (melhorados)
  const recentActivities = [
    {
      id: 1,
      type: 'client',
      title: 'Novo cliente TechCorp cadastrado',
      description: 'Cliente Premium com potencial alto',
      time: '2 min atrás',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-600'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Risco de churn detectado',
      description: 'StartupX - Health Score crítico',
      time: '15 min atrás',
      icon: AlertTriangle,
      color: 'bg-red-50 text-red-700 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      id: 3,
      type: 'task',
      title: 'Follow-up agendado completado',
      description: 'Reunião com BigCorp realizada',
      time: '1 hora atrás',
      icon: CheckCircle,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 4,
      type: 'ai',
      title: 'IA identificou oportunidade',
      description: 'Upsell recomendado para InnovateTech',
      time: '2 horas atrás',
      icon: Brain,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Meta de NPS atingida',
      description: 'Superamos o objetivo do trimestre',
      time: '4 horas atrás',
      icon: Award,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-600'
    }
  ];

  // Dados para tarefas pendentes (melhorados)
  const pendingTasks = [
    {
      id: 1,
      title: 'Revisar Health Score da TechFlow',
      priority: 'alta',
      dueDate: 'Hoje',
      client: 'TechFlow',
      type: 'health_check',
      progress: 60
    },
    {
      id: 2,
      title: 'Preparar apresentação Q2 para BigCorp',
      priority: 'média',
      dueDate: 'Amanhã',
      client: 'BigCorp S.A.',
      type: 'presentation',
      progress: 30
    },
    {
      id: 3,
      title: 'Follow-up NPS baixo - StartupX',
      priority: 'alta',
      dueDate: 'Hoje',
      client: 'StartupX',
      type: 'follow_up',
      progress: 0
    },
    {
      id: 4,
      title: 'Renovação de contrato - DataInova',
      priority: 'média',
      dueDate: '3 dias',
      client: 'DataInova',
      type: 'renewal',
      progress: 75
    }
  ];

  // Insights rápidos
  const quickInsights = [
    {
      id: 1,
      title: 'Oportunidade de Upsell',
      description: '3 clientes prontos para upgrade Premium',
      value: '+R$ 45k MRR',
      trend: 'positive',
      icon: TrendingUp,
      action: 'Ver Detalhes'
    },
    {
      id: 2,
      title: 'Alerta de Retenção',
      description: '2 clientes com risco alto de churn',
      value: '-R$ 12k MRR',
      trend: 'negative',
      icon: AlertTriangle,
      action: 'Tomar Ação'
    },
    {
      id: 3,
      title: 'NPS em Alta',
      description: 'Crescimento de 8 pontos este mês',
      value: '75 NPS',
      trend: 'positive',
      icon: Star,
      action: 'Analisar'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'bg-red-50 text-red-700 border-red-200';
      case 'média': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'baixa': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        
        <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
          {/* Hero Section com melhor hierarquia visual */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-3xl"></div>
            <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent leading-tight">
                        CS360° Dashboard
                      </h1>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 font-medium">
                          <Activity className="w-3 h-3 mr-1.5" />
                          Tempo Real
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 font-medium">
                          <Sparkles className="w-3 h-3 mr-1.5" />
                          IA Ativa
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                    Potencialize seu Customer Success com insights inteligentes e ações orientadas por dados
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Atualizar
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                  <DashboardCustomizer
                    onToggleMetric={handleToggleMetric}
                    onToggleChart={handleToggleChart}
                    visibleMetrics={visibleMetrics}
                    visibleCharts={visibleCharts}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Métricas Principais */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              Métricas Principais
            </h2>
            <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          </section>

          {/* Quick Insights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-amber-600" />
              Insights Rápidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickInsights.map((insight) => (
                <Card key={insight.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${insight.trend === 'positive' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                        <insight.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {insight.trend === 'positive' ? 'Oportunidade' : 'Atenção'}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{insight.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`font-bold text-lg ${insight.trend === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                        {insight.value}
                      </span>
                      <Button size="sm" variant="ghost" className="group-hover:bg-slate-100 dark:group-hover:bg-slate-700">
                        {insight.action}
                        <ArrowUpRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Analytics e Gráficos */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-purple-600" />
              Analytics Avançado
            </h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Gráficos Principais */}
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
              
              {/* Sidebar de Informações */}
              <div className="space-y-6">
                {/* Atividades Recentes Melhoradas */}
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Activity className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span>Atividades Recentes</span>
                          <p className="text-sm font-normal text-slate-500 dark:text-slate-400">Últimas atualizações</p>
                        </div>
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-80">
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div key={activity.id} className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${activity.color}`}>
                            <div className="flex items-start gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/80 ${activity.iconColor}`}>
                                <activity.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm truncate mb-1">
                                  {activity.title}
                                </p>
                                <p className="text-xs opacity-80 truncate mb-2">
                                  {activity.description}
                                </p>
                                <p className="text-xs opacity-60">
                                  {activity.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-white/60 hover:bg-white/80 transition-all">
                      Ver Todas as Atividades
                    </Button>
                  </CardContent>
                </Card>

                {/* Tarefas Pendentes Melhoradas */}
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <CheckSquare className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <span>Tarefas Pendentes</span>
                          <p className="text-sm font-normal text-slate-500 dark:text-slate-400">{pendingTasks.length} itens</p>
                        </div>
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-80">
                      <div className="space-y-3">
                        {pendingTasks.map((task) => (
                          <div key={task.id} className="p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <h4 className="font-medium text-slate-900 dark:text-white text-sm line-clamp-2">
                                {task.title}
                              </h4>
                              <Badge className={`text-xs px-2 py-1 ${getPriorityColor(task.priority)}`}>
                                {task.priority}
                              </Badge>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                <span className="font-medium">{task.client}</span>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {task.dueDate}
                                </div>
                              </div>
                              
                              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                                <div 
                                  className="bg-blue-600 h-1.5 rounded-full transition-all" 
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                              
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-500">Progresso</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">{task.progress}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-white/60 hover:bg-white/80 transition-all">
                      <Calendar className="w-4 h-4 mr-2" />
                      Ver Agenda Completa
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions Melhoradas */}
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Zap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <span>Ações Rápidas</span>
                        <p className="text-sm font-normal text-slate-500 dark:text-slate-400">Shortcuts úteis</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-blue-200 hover:border-blue-300 transition-all">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-xs font-medium">Novo Cliente</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-green-200 hover:border-green-300 transition-all">
                        <Target className="w-5 h-5 text-green-600" />
                        <span className="text-xs font-medium">Nova Meta</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-purple-200 hover:border-purple-300 transition-all">
                        <BarChart3 className="w-5 h-5 text-purple-600" />
                        <span className="text-xs font-medium">Relatório</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-amber-200 hover:border-amber-300 transition-all">
                        <Bell className="w-5 h-5 text-amber-600" />
                        <span className="text-xs font-medium">Alertas</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Gestão de Clientes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-green-600" />
              Gestão de Clientes
            </h2>
            <ClientsManagement />
          </section>

          {/* Assistente IA e Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-600" />
                Assistente IA
              </h2>
              <AIAssistant />
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                Feedback dos Clientes
              </h2>
              <FeedbackSection />
            </section>
          </div>

          {/* Onboarding Launcher */}
          <OnboardingLauncher />
        </div>
      </main>
    </div>
  );
};

export default Index;
