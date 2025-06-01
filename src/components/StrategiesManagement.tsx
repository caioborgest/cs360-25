
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
  Pause
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';

const strategiesData = [
  {
    id: 1,
    name: 'Ampliar - Nível A Promotores',
    type: 'Ampliar',
    criteria: {
      tier: 'A',
      nps: 'Promotor',
      ltv: '>150k'
    },
    actions: [
      'Identificar oportunidades de upsell',
      'Apresentar novos módulos premium',
      'Agendar reunião de expansão'
    ],
    clients: 23,
    success_rate: 78,
    revenue_impact: 45000,
    status: 'Ativa',
    automated: true
  },
  {
    id: 2,
    name: 'Reter - Detratores Alto Valor',
    type: 'Reter',
    criteria: {
      tier: 'A',
      nps: 'Detrator',
      ltv: '>100k'
    },
    actions: [
      'Agendar call de emergência',
      'Oferecer suporte premium gratuito',
      'Plano de ação personalizado'
    ],
    clients: 4,
    success_rate: 65,
    revenue_impact: -120000,
    status: 'Ativa',
    automated: false
  },
  {
    id: 3,
    name: 'Demitir - Baixo Valor/Alto Custo',
    type: 'Demitir',
    criteria: {
      tier: 'C',
      ltv: '<30k',
      support_tickets: '>10/mês'
    },
    actions: [
      'Migrar para plano básico',
      'Reduzir suporte premium',
      'Automação de atendimento'
    ],
    clients: 8,
    success_rate: 90,
    revenue_impact: 12000,
    status: 'Pausada',
    automated: true
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
    priority: 'Alta'
  },
  {
    id: 2,
    client: 'BigCorp S.A.',
    strategy: 'Reter - Detratores Alto Valor',
    action: 'Agendar call de emergência',
    assigned_to: 'Maria Santos',
    due_date: '2024-01-16',
    status: 'Urgente',
    priority: 'Crítica'
  },
  {
    id: 3,
    client: 'StartupX',
    strategy: 'Ampliar - Nível A Promotores',
    action: 'Identificar oportunidades de upsell',
    assigned_to: 'Carlos Lima',
    due_date: '2024-01-18',
    status: 'Pendente',
    priority: 'Média'
  }
];

const getStrategyColor = (type: string) => {
  const colors = {
    'Ampliar': 'bg-green-100 text-green-800 border-green-200',
    'Reter': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Demitir': 'bg-red-100 text-red-800 border-red-200'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

const getStatusColor = (status: string) => {
  const colors = {
    'Ativa': 'bg-green-100 text-green-800',
    'Pausada': 'bg-gray-100 text-gray-800',
    'Urgente': 'bg-red-100 text-red-800',
    'Em Progresso': 'bg-blue-100 text-blue-800',
    'Pendente': 'bg-yellow-100 text-yellow-800'
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

  return (
    <div className="space-y-6">
      {/* Strategy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Estratégias Ativas</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Target className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ações Pendentes</p>
              <p className="text-2xl font-bold text-orange-600">24</p>
            </div>
            <Clock className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-green-600">74%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Impacto de Receita</p>
              <p className="text-2xl font-bold text-purple-600">+R$ 127k</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('strategies')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'strategies' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Estratégias
            </button>
            <button
              onClick={() => setActiveTab('actions')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'actions' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Ações Ativas
            </button>
          </div>
        </div>

        {/* Strategies Tab */}
        {activeTab === 'strategies' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Estratégias Configuradas</h2>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Nova Estratégia
              </Button>
            </div>

            <div className="grid gap-6">
              {strategiesData.map((strategy) => (
                <div key={strategy.id} className={`border-2 rounded-lg p-6 ${getStrategyColor(strategy.type)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{strategy.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(strategy.status)}`}>
                          {strategy.status}
                        </span>
                        {strategy.automated && (
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                            <Zap className="w-3 h-3 mr-1" />
                            Automatizada
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Critérios:</p>
                          <div className="space-y-1">
                            {Object.entries(strategy.criteria).map(([key, value]) => (
                              <span key={key} className="inline-block bg-white bg-opacity-60 px-2 py-1 rounded text-xs mr-1">
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Ações:</p>
                          <ul className="text-xs space-y-1">
                            {strategy.actions.map((action, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Resultados:</p>
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
                              <span className="text-xs">Impacto:</span>
                              <span className={`text-xs font-medium ${strategy.revenue_impact >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {strategy.revenue_impact >= 0 ? '+' : ''}R$ {(Math.abs(strategy.revenue_impact) / 1000).toFixed(0)}k
                              </span>
                            </div>
                          </div>
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
                      <span className="text-sm text-gray-600">{strategy.clients} clientes ativos</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
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
              <h2 className="text-xl font-semibold text-gray-900">Ações Ativas</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  Atribuir em Lote
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estratégia</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsável</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prazo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeActions.map((action) => (
                    <tr key={action.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{action.client}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{action.strategy}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900">{action.action}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{action.assigned_to}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{action.due_date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(action.status)}`}>
                          {action.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          <AlertTriangle className={`w-4 h-4 ${getPriorityColor(action.priority)}`} />
                          <span className={`text-sm font-medium ${getPriorityColor(action.priority)}`}>
                            {action.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            Executar
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reagendar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
