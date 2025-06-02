
import React, { useState } from 'react';
import { 
  Zap, 
  Bell, 
  Clock, 
  Target,
  Brain,
  Mail,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Settings,
  Plus,
  Play,
  Pause,
  Eye,
  Edit,
  Filter,
  Download,
  MessageSquare,
  Users,
  BarChart3,
  Activity,
  Smartphone
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  Tooltip,
  Area,
  AreaChart
} from 'recharts';

const automationRules = [
  {
    id: 1,
    name: 'Follow-up Automatizado',
    type: 'Follow-up',
    trigger: 'Cliente sem interação por 7 dias',
    action: 'Enviar email personalizado + notificação para CSM',
    status: 'Ativa',
    frequency: 'Diário',
    success_rate: 87,
    clients_affected: 45,
    last_execution: '2024-01-15 14:30',
    ai_optimization: true
  },
  {
    id: 2,
    name: 'Alerta Vencimento Contrato',
    type: 'Contrato',
    trigger: '30 dias antes do vencimento',
    action: 'Email + Push + Criar tarefa de renovação',
    status: 'Ativa',
    frequency: 'Único',
    success_rate: 92,
    clients_affected: 12,
    last_execution: '2024-01-14 09:00',
    ai_optimization: false
  },
  {
    id: 3,
    name: 'Detecção Oportunidade Upsell',
    type: 'Oportunidade',
    trigger: 'Uso >80% + NPS >70 + Nível A',
    action: 'Notificar CSM + Agendar reunião sugerida',
    status: 'Ativa',
    frequency: 'Tempo Real',
    success_rate: 78,
    clients_affected: 8,
    last_execution: '2024-01-15 16:45',
    ai_optimization: true
  },
  {
    id: 4,
    name: 'Monitoramento NPS Crítico',
    type: 'NPS',
    trigger: 'NPS <30 ou queda >20 pontos',
    action: 'Alerta urgente + Call automática',
    status: 'Ativa',
    frequency: 'Tempo Real',
    success_rate: 95,
    clients_affected: 3,
    last_execution: '2024-01-13 11:20',
    ai_optimization: true
  },
  {
    id: 5,
    name: 'Análise Preditiva Churn',
    type: 'Churn',
    trigger: 'Score de churn >75%',
    action: 'Criar estratégia de retenção + Escalation',
    status: 'Testando',
    frequency: 'Semanal',
    success_rate: 84,
    clients_affected: 6,
    last_execution: '2024-01-12 08:00',
    ai_optimization: true
  }
];

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Cliente em Risco Crítico',
    description: 'BigCorp S.A. - NPS caiu para 25 (-45 pontos em 30 dias)',
    timestamp: '2024-01-15 16:30',
    action_taken: 'Call de emergência agendada',
    responsible: 'Maria Santos',
    priority: 'Crítica',
    automated: true
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'Oportunidade de Upsell Identificada',
    description: 'TechCorp LTDA - Uso 95%, NPS 89, perfil ideal para Premium',
    timestamp: '2024-01-15 14:15',
    action_taken: 'Reunião agendada para 18/01',
    responsible: 'João Silva',
    priority: 'Alta',
    automated: true
  },
  {
    id: 3,
    type: 'contract',
    title: 'Contrato Vencendo',
    description: 'StartupX - Renovação em 25 dias',
    timestamp: '2024-01-15 09:00',
    action_taken: 'Email enviado + Tarefa criada',
    responsible: 'Carlos Lima',
    priority: 'Média',
    automated: false
  },
  {
    id: 4,
    type: 'success',
    title: 'Meta Atingida',
    description: 'Estratégia "Ampliar Nível A" superou meta em 15%',
    timestamp: '2024-01-14 18:00',
    action_taken: 'Relatório gerado automaticamente',
    responsible: 'Sistema',
    priority: 'Baixa',
    automated: true
  }
];

const aiInsights = [
  {
    id: 1,
    type: 'prediction',
    title: 'Previsão de Receita Q1',
    description: 'Com base em dados históricos e comportamento atual, receita Q1 deve crescer 12%',
    confidence: 89,
    impact: 'Alto',
    recommendation: 'Aumentar foco em clientes Nível B para acelerar conversão',
    data_points: ['Histórico 24 meses', 'Padrões sazonais', 'Pipeline atual', 'NPS trends']
  },
  {
    id: 2,
    type: 'optimization',
    title: 'Otimização de Recursos',
    description: 'CSMs com >15 clientes têm 23% menos taxa de sucesso',
    confidence: 94,
    impact: 'Alto',
    recommendation: 'Redistribuir carteira: máximo 12 clientes por CSM',
    data_points: ['Performance CSMs', 'Carga de trabalho', 'Resultados por cliente', 'Satisfação']
  },
  {
    id: 3,
    type: 'risk',
    title: 'Análise de Risco Segmento',
    description: 'Clientes "Conservadores" têm 2.3x mais chance de churn em cenários de crise',
    confidence: 91,
    impact: 'Médio',
    recommendation: 'Criar estratégia específica de proteção para este segmento',
    data_points: ['Dados econômicos', 'Comportamento histórico', 'Feedback qualitativo']
  }
];

const reportTemplates = [
  {
    id: 1,
    name: 'Customer Health Dashboard',
    type: 'Dashboard',
    frequency: 'Tempo Real',
    last_generated: '2024-01-15 17:00',
    recipients: ['Diretoria', 'CSMs', 'Vendas'],
    status: 'Ativo',
    format: ['Web', 'Email', 'PDF']
  },
  {
    id: 2,
    name: 'Weekly Performance Report',
    type: 'Relatório',
    frequency: 'Semanal',
    last_generated: '2024-01-14 08:00',
    recipients: ['Gerentes', 'CSMs'],
    status: 'Ativo',
    format: ['PDF', 'Excel']
  },
  {
    id: 3,
    name: 'Monthly Executive Summary',
    type: 'Executivo',
    frequency: 'Mensal',
    last_generated: '2024-01-01 09:00',
    recipients: ['C-Level', 'Diretoria'],
    status: 'Ativo',
    format: ['PDF', 'PowerPoint']
  }
];

const automationStats = [
  { month: 'Jan', emails: 145, notifications: 89, tasks: 67, reports: 12 },
  { month: 'Fev', emails: 167, notifications: 94, tasks: 73, reports: 15 },
  { month: 'Mar', emails: 189, notifications: 102, tasks: 81, reports: 18 },
  { month: 'Abr', emails: 201, notifications: 87, tasks: 69, reports: 14 },
  { month: 'Mai', emails: 234, notifications: 115, tasks: 92, reports: 21 },
  { month: 'Jun', emails: 256, notifications: 128, tasks: 105, reports: 24 }
];

const getNotificationColor = (type: string) => {
  const colors = {
    'warning': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'opportunity': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'contract': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'success': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status: string) => {
  const colors = {
    'Ativa': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pausada': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
    'Testando': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Ativo': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getPriorityColor = (priority: string) => {
  const colors = {
    'Crítica': 'text-red-600',
    'Alta': 'text-orange-600',
    'Média': 'text-yellow-600',
    'Baixa': 'text-green-600'
  };
  return colors[priority as keyof typeof colors] || 'text-gray-600';
};

export const AutomationManagement = () => {
  const [activeTab, setActiveTab] = useState('automations');
  const [showConfigModal, setShowConfigModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Automation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Automações Ativas</p>
              <p className="text-2xl font-bold text-blue-600">18</p>
            </div>
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            +3 este mês
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Alertas Hoje</p>
              <p className="text-2xl font-bold text-orange-600">7</p>
            </div>
            <Bell className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <AlertTriangle className="w-4 h-4 mr-1" />
            2 críticos
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Sucesso IA</p>
              <p className="text-2xl font-bold text-green-600">91%</p>
            </div>
            <Brain className="w-8 h-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            +7% vs manual
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tempo Economizado</p>
              <p className="text-2xl font-bold text-purple-600">24h</p>
            </div>
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <Activity className="w-4 h-4 mr-1" />
            Esta semana
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('automations')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'automations' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              <Zap className="w-4 h-4 mr-2 inline" />
              Automações
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'notifications' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              <Bell className="w-4 h-4 mr-2 inline" />
              Alertas & Notificações
            </button>
            <button
              onClick={() => setActiveTab('ai-insights')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'ai-insights' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              <Brain className="w-4 h-4 mr-2 inline" />
              Insights IA
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'reports' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-2 inline" />
              Relatórios Automáticos
            </button>
          </div>
        </div>

        {/* Automations Tab */}
        {activeTab === 'automations' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Regras de Automação</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações Globais
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Automação
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {automationRules.map((rule) => (
                <div key={rule.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{rule.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(rule.status)}`}>
                          {rule.status}
                        </span>
                        {rule.ai_optimization && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            <Brain className="w-3 h-3 mr-1" />
                            IA Otimizada
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Gatilho:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{rule.trigger}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ação:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{rule.action}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Frequência:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{rule.frequency}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Sucesso:</p>
                          <p className="text-lg font-bold text-green-600">{rule.success_rate}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Impactados:</p>
                          <p className="text-lg font-bold text-blue-600">{rule.clients_affected}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Última Execução:</p>
                          <p className="text-sm text-gray-900 dark:text-white">{rule.last_execution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-6">
                      <CircularProgress 
                        value={rule.success_rate} 
                        color={rule.success_rate >= 80 ? 'green' : rule.success_rate >= 60 ? 'blue' : 'red'}
                        size={60}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tipo: {rule.type}</span>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Histórico
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm">
                        {rule.status === 'Ativa' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Automation Statistics */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Estatísticas de Automação</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={automationStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="emails" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Emails" />
                  <Area type="monotone" dataKey="notifications" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Notificações" />
                  <Area type="monotone" dataKey="tasks" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} name="Tarefas" />
                  <Area type="monotone" dataKey="reports" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Relatórios" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Alertas e Notificações</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar Canais
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getNotificationColor(notification.type)}`}>
                          {notification.type === 'warning' ? 'Alerta' :
                           notification.type === 'opportunity' ? 'Oportunidade' :
                           notification.type === 'contract' ? 'Contrato' : 'Sucesso'}
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className={`text-sm font-medium ${getPriorityColor(notification.priority)}`}>
                            {notification.priority}
                          </span>
                        </div>
                        {notification.automated && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            <Zap className="w-3 h-3 mr-1" />
                            Auto
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{notification.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{notification.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Ação Tomada:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{notification.action_taken}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Responsável:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{notification.responsible}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 dark:text-gray-400">Horário:</span>
                          <span className="ml-1 font-medium text-gray-900 dark:text-white">{notification.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notification Channels */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300">Email</h4>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">156 enviados hoje</p>
                <p className="text-sm text-blue-600">Taxa de abertura: 87%</p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Smartphone className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-green-900 dark:text-green-300">Push Notifications</h4>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400 mb-2">89 enviadas hoje</p>
                <p className="text-sm text-green-600">Taxa de clique: 64%</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Bell className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">In-App</h4>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-400 mb-2">234 visualizadas hoje</p>
                <p className="text-sm text-purple-600">Taxa de ação: 92%</p>
              </div>
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'ai-insights' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Insights e Análises Preditivas</h2>
              <Button variant="outline" size="sm">
                <Brain className="w-4 h-4 mr-2" />
                Atualizar Análises
              </Button>
            </div>

            <div className="grid gap-6">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Brain className="w-6 h-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{insight.title}</h3>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs font-medium">
                          {insight.confidence}% confiança
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          insight.impact === 'Alto' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                          insight.impact === 'Médio' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        }`}>
                          Impacto {insight.impact}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{insight.description}</p>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg mb-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recomendação:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{insight.recommendation}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Baseado em:</p>
                        <div className="flex flex-wrap gap-2">
                          {insight.data_points.map((point, index) => (
                            <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <CircularProgress 
                        value={insight.confidence} 
                        color="purple"
                        size={80}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-purple-200 dark:border-purple-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tipo: {insight.type}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Dados Detalhados
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Implementar Sugestão
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Relatórios Automáticos</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Relatório
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Template
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {reportTemplates.map((template) => (
                <div key={template.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{template.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(template.status)}`}>
                          {template.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Tipo:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{template.type}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Frequência:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{template.frequency}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Última Geração:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{template.last_generated}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Destinatários:</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{template.recipients.length} grupos</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Destinatários:</p>
                          <div className="flex flex-wrap gap-1">
                            {template.recipients.map((recipient, index) => (
                              <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                                {recipient}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Formatos:</p>
                          <div className="flex flex-wrap gap-1">
                            {template.format.map((format, index) => (
                              <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{template.recipients.length} grupos de destinatários</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Gerar Agora
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
