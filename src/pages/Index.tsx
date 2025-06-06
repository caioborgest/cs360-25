
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
  Activity
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

  // Dados para atividades recentes
  const recentActivities = [
    {
      id: 1,
      type: 'client',
      title: 'Novo cliente TechCorp cadastrado',
      description: 'Cliente Premium com potencial alto',
      time: '2 min atrás',
      icon: Users,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Risco de churn detectado',
      description: 'StartupX - Health Score crítico',
      time: '15 min atrás',
      icon: AlertTriangle,
      color: 'text-red-600 bg-red-100'
    },
    {
      id: 3,
      type: 'task',
      title: 'Follow-up agendado completado',
      description: 'Reunião com BigCorp realizada',
      time: '1 hora atrás',
      icon: CheckCircle,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 4,
      type: 'ai',
      title: 'IA identificou oportunidade',
      description: 'Upsell recomendado para InnovateTech',
      time: '2 horas atrás',
      icon: Brain,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  // Dados para tarefas pendentes
  const pendingTasks = [
    {
      id: 1,
      title: 'Revisar Health Score da TechFlow',
      priority: 'alta',
      dueDate: 'Hoje',
      client: 'TechFlow',
      type: 'health_check'
    },
    {
      id: 2,
      title: 'Preparar apresentação Q2 para BigCorp',
      priority: 'média',
      dueDate: 'Amanhã',
      client: 'BigCorp S.A.',
      type: 'presentation'
    },
    {
      id: 3,
      title: 'Follow-up NPS baixo - StartupX',
      priority: 'alta',
      dueDate: 'Hoje',
      client: 'StartupX',
      type: 'follow_up'
    },
    {
      id: 4,
      title: 'Renovação de contrato - DataInova',
      priority: 'média',
      dueDate: '3 dias',
      client: 'DataInova',
      type: 'renewal'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'text-red-600 bg-red-100 border-red-200';
      case 'média': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'baixa': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-8 space-y-8">
          {/* Header Section com controles melhorados */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                  Dashboard CS360°
                </h1>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1">
                  <Activity className="w-3 h-3 mr-1" />
                  Tempo Real
                </Badge>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                Potencialize seu Customer Success em 360° de forma fácil e inteligente
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
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
          
          {/* Métricas Flexíveis */}
          <CustomizableMetricsCards visibleMetrics={visibleMetrics} />
          
          {/* Grid Principal - Gráficos e Informações */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Gráficos Principais - 2/3 da largura */}
            <div className="xl:col-span-2 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartsSection visibleCharts={visibleCharts} />
                <DashboardChart
                  title="Engajamento do Cliente"
                  type="area"
                  data={engagementData}
                  color="#10B981"
                  height={280}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <NewChartsSection visibleCharts={visibleCharts} />
                <DashboardChart
                  title="Oportunidades Estratégicas"
                  type="pie"
                  data={strategicMetricsData}
                  height={280}
                />
              </div>
            </div>
            
            {/* Sidebar de Informações - 1/3 da largura */}
            <div className="space-y-6">
              {/* Atividades Recentes */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                      <Activity className="w-5 h-5 text-blue-600" />
                      Atividades Recentes
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Ver Todas
                  </Button>
                </CardContent>
              </Card>

              {/* Tarefas Pendentes */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                      <CheckSquare className="w-5 h-5 text-orange-600" />
                      Tarefas Pendentes
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                        {pendingTasks.length}
                      </Badge>
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                          {task.title}
                        </p>
                        <Badge className={`text-xs px-2 py-1 ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{task.client}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.dueDate}
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Agenda
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <Zap className="w-5 h-5 text-purple-600" />
                    Ações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <Users className="w-4 h-4 mr-2" />
                    Adicionar Cliente
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Gerar Relatório
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Enviar NPS
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Criar Estratégia
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Gestão de Clientes Expandida */}
          <div className="w-full">
            <ClientsManagement />
          </div>
          
          {/* Seção de Assistente, Feedback e Ações IA */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
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

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
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

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
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
