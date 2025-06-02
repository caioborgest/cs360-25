
import React, { useState } from 'react';
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  Zap,
  Plus,
  Play,
  Pause,
  Settings,
  Brain,
  Activity,
  BarChart3,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2
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

const strategiesData = [
  {
    id: 1,
    name: 'Ampliar - Nível A Promotores',
    type: 'Ampliar',
    criteria: {
      tier: 'A',
      nps: 'Promotor (70+)',
      ltv: '>150k',
      segment: 'Arrojado'
    },
    actions: [
      'Identificar oportunidades de upsell',
      'Apresentar novos módulos premium',
      'Agendar reunião de expansão',
      'Análise de cross-sell personalizada'
    ],
    clients: 23,
    success_rate: 78,
    revenue_impact: 450000,
    status: 'Ativa',
    automated: true,
    ai_insights: 'IA sugere focar em clientes com uso >80% da plataforma',
    campaign_progress: 65
  },
  {
    id: 2,
    name: 'Reter - Detratores Alto Valor',
    type: 'Reter',
    criteria: {
      tier: 'A',
      nps: 'Detrator (0-30)',
      ltv: '>100k',
      churn_risk: 'Alto'
    },
    actions: [
      'Agendar call de emergência',
      'Oferecer suporte premium gratuito',
      'Plano de ação personalizado',
      'Desconto estratégico se necessário'
    ],
    clients: 4,
    success_rate: 65,
    revenue_impact: -120000,
    status: 'Ativa',
    automated: false,
    ai_insights: 'Padrão identificado: problemas técnicos não resolvidos',
    campaign_progress: 25
  },
  {
    id: 3,
    name: 'Demitir - Baixo Valor/Alto Custo',
    type: 'Demitir',
    criteria: {
      tier: 'C',
      ltv: '<30k',
      support_tickets: '>10/mês',
      csat: '<50'
    },
    actions: [
      'Migrar para plano básico',
      'Reduzir suporte premium',
      'Automação de atendimento',
      'Oferecer plano gratuito limitado'
    ],
    clients: 8,
    success_rate: 90,
    revenue_impact: 12000,
    status: 'Pausada',
    automated: true,
    ai_insights: 'Economia operacional: R$ 15k/mês por cliente migrado',
    campaign_progress: 88
  },
  {
    id: 4,
    name: 'Reter - Moderados em Declínio',
    type: 'Reter',
    criteria: {
      tier: 'B',
      nps: 'Passivo (31-69)',
      ltv_trend: 'Declinante',
      usage: '<50%'
    },
    actions: [
      'Workshop de capacitação gratuito',
      'Check-in semanal personalizado',
      'Otimização do onboarding',
      'Gamificação de uso'
    ],
    clients: 15,
    success_rate: 73,
    revenue_impact: 185000,
    status: 'Ativa',
    automated: true,
    ai_insights: 'Foco em treinamento resulta em +40% de engajamento',
    campaign_progress: 42
  }
];

const activeActions = [
  {
    id: 1,
    client: 'TechCorp LTDA',
    strategy: 'Ampliar - Nível A Promotores',
    action: 'Apresentar novos módulos premium',
    assigned_to: 'João Silva',
    due_date: '2024-01-20',
    status: 'Em Progresso',
    priority: 'Alta',
    ai_recommendation: 'Cliente ideal para módulo Analytics Premium',
    progress: 60
  },
  {
    id: 2,
    client: 'BigCorp S.A.',
    strategy: 'Reter - Detratores Alto Valor',
    action: 'Agendar call de emergência',
    assigned_to: 'Maria Santos',
    due_date: '2024-01-16',
    status: 'Urgente',
    priority: 'Crítica',
    ai_recommendation: 'Histórico mostra preferência por videoconferência',
    progress: 10
  },
  {
    id: 3,
    client: 'StartupX',
    strategy: 'Ampliar - Nível A Promotores',
    action: 'Identificar oportunidades de upsell',
    assigned_to: 'Carlos Lima',
    due_date: '2024-01-18',
    status: 'Pendente',
    priority: 'Média',
    ai_recommendation: 'Sugestão: API Premium baseada no padrão de uso',
    progress: 0
  },
  {
    id: 4,
    client: 'FastGrow Ltd',
    strategy: 'Reter - Moderados em Declínio',
    action: 'Workshop de capacitação gratuito',
    assigned_to: 'Ana Costa',
    due_date: '2024-01-22',
    status: 'Agendado',
    priority: 'Média',
    ai_recommendation: 'Melhor horário: Terças 14h baseado em disponibilidade',
    progress: 75
  }
];

const strategiesPerformance = [
  { month: 'Jan', ampliar: 78, reter: 65, demitir: 90 },
  { month: 'Fev', ampliar: 82, reter: 71, demitir: 87 },
  { month: 'Mar', ampliar: 75, reter: 68, demitir: 92 },
  { month: 'Abr', ampliar: 88, reter: 76, demitir: 89 },
  { month: 'Mai', ampliar: 85, reter: 73, demitir: 94 },
  { month: 'Jun', ampliar: 91, reter: 79, demitir: 91 }
];

const aiInsights = [
  {
    type: 'opportunity',
    title: 'Nova Oportunidade Identificada',
    description: 'IA detectou 12 clientes Nível B prontos para upgrade baseado em padrão de uso',
    confidence: 87,
    potential_revenue: 280000,
    action: 'Criar campanha específica'
  },
  {
    type: 'warning',
    title: 'Padrão de Risco Detectado',
    description: 'Clientes que cancelam tickets têm 3x mais chance de churn em 30 dias',
    confidence: 92,
    potential_impact: -150000,
    action: 'Implementar follow-up automático'
  },
  {
    type: 'optimization',
    title: 'Otimização de Estratégia',
    description: 'Estratégia "Ampliar" tem 15% mais sucesso quando executada às sextas-feiras',
    confidence: 73,
    potential_improvement: 12,
    action: 'Ajustar cronograma'
  }
];

const getStrategyColor = (type: string) => {
  const colors = {
    'Ampliar': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300',
    'Reter': 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300',
    'Demitir': 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status: string) => {
  const colors = {
    'Ativa': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pausada': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
    'Urgente': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'Em Progresso': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Pendente': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Agendado': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
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

export const StrategiesManagement = () => {
  const [activeTab, setActiveTab] = useState('strategies');
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  return (
    <div className="space-y-6">
      {/* Strategy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Estratégias Ativas</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            +2 este mês
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Ações Pendentes</p>
              <p className="text-2xl font-bold text-orange-600">24</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-red-600">
            <AlertTriangle className="w-4 h-4 mr-1" />
            3 urgentes
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-green-600">74%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            +5% vs mês anterior
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Impacto de Receita</p>
              <p className="text-2xl font-bold text-purple-600">+R$ 527k</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            Meta: R$ 600k
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('strategies')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'strategies' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              Estratégias
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'actions' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              Ações Ativas
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'performance' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              Performance
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
          </div>
        </div>

        {/* Strategies Tab */}
        {activeTab === 'strategies' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Estratégias Configuradas</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar Critérios
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Estratégia
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {strategiesData.map((strategy) => (
                <div key={strategy.id} className={`border-2 rounded-lg p-6 ${getStrategyColor(strategy.type)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{strategy.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(strategy.status)}`}>
                          {strategy.status}
                        </span>
                        {strategy.automated && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            <Zap className="w-3 h-3 mr-1" />
                            Automatizada
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Critérios:</p>
                          <div className="space-y-1">
                            {Object.entries(strategy.criteria).map(([key, value]) => (
                              <span key={key} className="inline-block bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-60 px-2 py-1 rounded text-xs mr-1">
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ações:</p>
                          <ul className="text-xs space-y-1">
                            {strategy.actions.slice(0, 3).map((action, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {action}
                              </li>
                            ))}
                            {strategy.actions.length > 3 && (
                              <li className="text-blue-600 dark:text-blue-400">+{strategy.actions.length - 3} mais...</li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Resultados:</p>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Clientes:</span>
                              <span className="text-xs font-medium">{strategy.clients}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Taxa de Sucesso:</span>
                              <span className="text-xs font-medium">{strategy.success_rate}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Progresso:</span>
                              <span className="text-xs font-medium">{strategy.campaign_progress}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Impacto:</span>
                              <span className={`text-xs font-medium ${strategy.revenue_impact >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {strategy.revenue_impact >= 0 ? '+' : ''}R$ {(Math.abs(strategy.revenue_impact) / 1000).toFixed(0)}k
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                        <div className="flex items-start space-x-2">
                          <Brain className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-blue-900 dark:text-blue-300">Insight da IA:</p>
                            <p className="text-xs text-blue-700 dark:text-blue-400">{strategy.ai_insights}</p>
                          </div>
                        </div>
                      </div>

                      {/* Campaign Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Progresso da Campanha</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{strategy.campaign_progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${strategy.campaign_progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-6">
                      <CircularProgress 
                        value={strategy.success_rate} 
                        color={strategy.success_rate >= 70 ? 'green' : strategy.success_rate >= 50 ? 'blue' : 'red'}
                        size={60}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{strategy.clients} clientes ativos</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Detalhes
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm">
                        {strategy.status === 'Ativa' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions Tab */}
        {activeTab === 'actions' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ações Ativas</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
                <Button variant="outline" size="sm">
                  Atribuir em Lote
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {activeActions.map((action) => (
                <div key={action.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{action.client}</h4>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(action.status)}`}>
                          {action.status}
                        </span>
                        <div className="flex items-center space-x-1">
                          <AlertTriangle className={`w-4 h-4 ${getPriorityColor(action.priority)}`} />
                          <span className={`text-sm font-medium ${getPriorityColor(action.priority)}`}>
                            {action.priority}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{action.strategy}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">{action.action}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Responsável: {action.assigned_to}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Prazo: {action.due_date}</p>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Progresso</span>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">{action.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                            <div 
                              className="bg-blue-600 h-1.5 rounded-full" 
                              style={{ width: `${action.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* AI Recommendation */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Brain className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-purple-700 dark:text-purple-400">{action.ai_recommendation}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Activity className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Executar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Performance das Estratégias</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Success Rate Trend */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Taxa de Sucesso por Estratégia</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={strategiesPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="ampliar" stroke="#10B981" strokeWidth={2} name="Ampliar" />
                    <Line type="monotone" dataKey="reter" stroke="#F59E0B" strokeWidth={2} name="Reter" />
                    <Line type="monotone" dataKey="demitir" stroke="#EF4444" strokeWidth={2} name="Demitir" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Impact */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Impacto Financeiro por Tipo</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Ampliar', value: 450000, fill: '#10B981' },
                        { name: 'Reter', value: 185000, fill: '#F59E0B' },
                        { name: 'Otimizar', value: 12000, fill: '#3B82F6' }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: R$ ${(value/1000).toFixed(0)}k`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Strategy Statistics */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Estratégias Ampliar</h4>
                <p className="text-2xl font-bold text-green-600">91%</p>
                <p className="text-sm text-green-700 dark:text-green-400">Taxa de sucesso média</p>
                <p className="text-sm text-green-600 mt-2">+R$ 450k em receita</p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Estratégias Reter</h4>
                <p className="text-2xl font-bold text-yellow-600">79%</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-400">Taxa de sucesso média</p>
                <p className="text-sm text-yellow-600 mt-2">+R$ 185k preservados</p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">Estratégias Otimizar</h4>
                <p className="text-2xl font-bold text-red-600">91%</p>
                <p className="text-sm text-red-700 dark:text-red-400">Taxa de sucesso média</p>
                <p className="text-sm text-red-600 mt-2">+R$ 12k economizados</p>
              </div>
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'ai-insights' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Insights e Recomendações da IA</h2>
              <Button variant="outline" size="sm">
                <Brain className="w-4 h-4 mr-2" />
                Executar Nova Análise
              </Button>
            </div>

            <div className="grid gap-6">
              {aiInsights.map((insight, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{insight.title}</h3>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                          {insight.confidence}% confiança
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{insight.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {insight.potential_revenue && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Potencial de Receita:</p>
                            <p className="text-lg font-bold text-green-600">+R$ {(insight.potential_revenue / 1000).toFixed(0)}k</p>
                          </div>
                        )}
                        {insight.potential_impact && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Impacto Potencial:</p>
                            <p className="text-lg font-bold text-red-600">R$ {(insight.potential_impact / 1000).toFixed(0)}k</p>
                          </div>
                        )}
                        {insight.potential_improvement && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Melhoria Esperada:</p>
                            <p className="text-lg font-bold text-blue-600">+{insight.potential_improvement}%</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <CircularProgress 
                        value={insight.confidence} 
                        color="blue"
                        size={60}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-blue-200 dark:border-blue-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Ação Recomendada: {insight.action}</span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Implementar
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
