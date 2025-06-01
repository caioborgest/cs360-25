
import React, { useState } from 'react';
import { 
  Zap, 
  Bell, 
  Bot, 
  Mail, 
  MessageSquare,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Play,
  Pause,
  Settings
} from 'lucide-react';
import { Button } from './ui/button';

const automationRules = [
  {
    id: 1,
    name: 'Alerta de Churn Risk',
    trigger: 'Health Score < 30',
    actions: ['Enviar email para CSM', 'Criar tarefa urgente', 'Notificação Slack'],
    status: 'Ativa',
    executions: 12,
    success_rate: 85,
    last_run: '2024-01-15 14:30'
  },
  {
    id: 2,
    name: 'Oportunidade de Upsell',
    trigger: 'NPS > 8 AND Uso > 80%',
    actions: ['Agendar reunião comercial', 'Enviar proposta personalizada'],
    status: 'Ativa',
    executions: 7,
    success_rate: 72,
    last_run: '2024-01-15 10:15'
  },
  {
    id: 3,
    name: 'Follow-up Onboarding',
    trigger: 'Novo cliente + 7 dias',
    actions: ['Enviar pesquisa de satisfação', 'Agendar call de check-in'],
    status: 'Pausada',
    executions: 23,
    success_rate: 94,
    last_run: '2024-01-10 09:00'
  }
];

const aiInsights = [
  {
    id: 1,
    type: 'prediction',
    title: 'Risco de Churn Detectado',
    description: 'BigCorp S.A. tem 85% de probabilidade de churn nos próximos 30 dias',
    confidence: 85,
    action: 'Agendar reunião de retenção urgente',
    priority: 'Alta',
    created: '2024-01-15 15:30'
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'Oportunidade de Expansão',
    description: 'TechCorp LTDA está pronta para upgrade - uso 95% das funcionalidades',
    confidence: 78,
    action: 'Apresentar plano Enterprise',
    priority: 'Média',
    created: '2024-01-15 14:15'
  },
  {
    id: 3,
    type: 'alert',
    title: 'Padrão Incomum Detectado',
    description: 'StartupX reduziu uso em 40% na última semana',
    confidence: 92,
    action: 'Contato proativo para verificar status',
    priority: 'Alta',
    created: '2024-01-15 13:45'
  }
];

const notificationHistory = [
  {
    id: 1,
    type: 'email',
    recipient: 'joao.silva@empresa.com',
    subject: 'Alerta: Cliente em risco de churn',
    status: 'Enviado',
    timestamp: '2024-01-15 14:30'
  },
  {
    id: 2,
    type: 'slack',
    recipient: '#customer-success',
    subject: 'Nova oportunidade de upsell identificada',
    status: 'Enviado',
    timestamp: '2024-01-15 14:25'
  },
  {
    id: 3,
    type: 'task',
    recipient: 'Maria Santos',
    subject: 'Call urgente com BigCorp S.A.',
    status: 'Criada',
    timestamp: '2024-01-15 14:20'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    'Ativa': 'bg-green-100 text-green-800',
    'Pausada': 'bg-gray-100 text-gray-800',
    'Enviado': 'bg-blue-100 text-blue-800',
    'Criada': 'bg-purple-100 text-purple-800'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getPriorityColor = (priority: string) => {
  const colors = {
    'Alta': 'text-red-600 bg-red-100',
    'Média': 'text-yellow-600 bg-yellow-100',
    'Baixa': 'text-green-600 bg-green-100'
  };
  return colors[priority as keyof typeof colors] || 'text-gray-600 bg-gray-100';
};

const getTypeIcon = (type: string) => {
  const icons = {
    'prediction': AlertTriangle,
    'opportunity': TrendingUp,
    'alert': Bell,
    'email': Mail,
    'slack': MessageSquare,
    'task': CheckCircle
  };
  return icons[type as keyof typeof icons] || Bell;
};

export const AutomationManagement = () => {
  const [activeTab, setActiveTab] = useState('rules');

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Regras Ativas</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Execuções Hoje</p>
              <p className="text-2xl font-bold text-green-600">127</p>
            </div>
            <Bot className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Insights IA</p>
              <p className="text-2xl font-bold text-purple-600">15</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-green-600">84%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'rules' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Regras de Automação
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'insights' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Insights de IA
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'history' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Histórico
            </button>
          </div>
        </div>

        {/* Automation Rules Tab */}
        {activeTab === 'rules' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Regras de Automação</h2>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Nova Regra
              </Button>
            </div>

            <div className="space-y-4">
              {automationRules.map((rule) => (
                <div key={rule.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{rule.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(rule.status)}`}>
                          {rule.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Trigger:</p>
                          <p className="text-sm bg-gray-100 px-3 py-1 rounded font-mono">{rule.trigger}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Ações:</p>
                          <div className="space-y-1">
                            {rule.actions.map((action, index) => (
                              <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-1 mb-1">
                                {action}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Play className="w-4 h-4" />
                          <span>{rule.executions} execuções</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>{rule.success_rate}% sucesso</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Última: {rule.last_run}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-6">
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        {rule.status === 'Ativa' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'insights' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Insights de IA</h2>
              <Button variant="outline" size="sm">
                Atualizar Insights
              </Button>
            </div>

            <div className="space-y-4">
              {aiInsights.map((insight) => {
                const IconComponent = getTypeIcon(insight.type);
                return (
                  <div key={insight.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className={`p-2 rounded-lg ${insight.type === 'prediction' ? 'bg-red-100' : insight.type === 'opportunity' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          <IconComponent className={`w-5 h-5 ${insight.type === 'prediction' ? 'text-red-600' : insight.type === 'opportunity' ? 'text-green-600' : 'text-yellow-600'}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(insight.priority)}`}>
                              {insight.priority}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 mb-3">{insight.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <span className="text-sm text-gray-500">Confiança:</span>
                                <span className="text-sm font-medium text-blue-600">{insight.confidence}%</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-500">{insight.created}</span>
                              </div>
                            </div>
                            
                            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                              {insight.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Histórico de Notificações</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  Exportar
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destinatário</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assunto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data/Hora</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {notificationHistory.map((notification) => {
                    const IconComponent = getTypeIcon(notification.type);
                    return (
                      <tr key={notification.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <IconComponent className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-900 capitalize">{notification.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{notification.recipient}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">{notification.subject}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(notification.status)}`}>
                            {notification.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{notification.timestamp}</span>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm">
                            Ver Detalhes
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
