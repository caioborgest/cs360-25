
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  Settings, 
  Target, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Eye,
  Edit,
  Play,
  Pause,
  BarChart3,
  Calendar,
  User,
  MessageSquare,
  FileText,
  Activity
} from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft' | 'completed';
  priority: 'high' | 'medium' | 'low';
  progress: number;
  assignedTo: string[];
  dueDate: string;
  kpis: {
    target: number;
    current: number;
    unit: string;
  }[];
  tasks: {
    id: string;
    title: string;
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo: string;
    dueDate: string;
  }[];
}

const mockStrategies: Strategy[] = [
  {
    id: 'strat_001',
    name: 'Redução de Churn Q2',
    description: 'Estratégia focada em reduzir o churn rate de 5% para 3% através de melhorias no onboarding',
    status: 'active',
    priority: 'high',
    progress: 65,
    assignedTo: ['João Silva', 'Maria Santos', 'Pedro Costa'],
    dueDate: '2024-06-30',
    kpis: [
      { target: 3, current: 4.2, unit: '%' },
      { target: 95, current: 87, unit: '%' }
    ],
    tasks: [
      { id: 'task_001', title: 'Implementar novo fluxo onboarding', status: 'in-progress', assignedTo: 'João Silva', dueDate: '2024-06-15' },
      { id: 'task_002', title: 'Criar material de treinamento', status: 'completed', assignedTo: 'Maria Santos', dueDate: '2024-06-10' },
      { id: 'task_003', title: 'Configurar alertas de risco', status: 'pending', assignedTo: 'Pedro Costa', dueDate: '2024-06-20' }
    ]
  },
  {
    id: 'strat_002',
    name: 'Aumento de NPS',
    description: 'Elevar o NPS de 7.2 para 8.5 através de melhorias no atendimento e produto',
    status: 'active',
    priority: 'medium',
    progress: 40,
    assignedTo: ['Ana Lima', 'Carlos Rocha'],
    dueDate: '2024-07-31',
    kpis: [
      { target: 8.5, current: 7.2, unit: 'pts' },
      { target: 24, current: 32, unit: 'h' }
    ],
    tasks: [
      { id: 'task_004', title: 'Treinar equipe de suporte', status: 'in-progress', assignedTo: 'Ana Lima', dueDate: '2024-06-25' },
      { id: 'task_005', title: 'Implementar chat proativo', status: 'pending', assignedTo: 'Carlos Rocha', dueDate: '2024-07-05' }
    ]
  },
  {
    id: 'strat_003',
    name: 'Expansão de Contas',
    description: 'Aumentar o valor médio por conta em 25% através de upsell e cross-sell',
    status: 'draft',
    priority: 'medium',
    progress: 15,
    assignedTo: ['Lucia Ferreira'],
    dueDate: '2024-08-15',
    kpis: [
      { target: 125, current: 100, unit: '%' },
      { target: 15, current: 8, unit: '%' }
    ],
    tasks: [
      { id: 'task_006', title: 'Mapear oportunidades de upsell', status: 'pending', assignedTo: 'Lucia Ferreira', dueDate: '2024-07-01' }
    ]
  }
];

export const StrategiesManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [strategies, setStrategies] = useState(mockStrategies);

  // Active button handlers
  const handleCreateStrategy = () => {
    setShowCreateModal(true);
    console.log('Criando nova estratégia...');
  };

  const handleConfigureCriteria = () => {
    setShowCriteriaModal(true);
    console.log('Configurando critérios...');
  };

  const handleViewDetails = (strategy: Strategy) => {
    setSelectedStrategy(strategy);
    setShowDetailsModal(true);
    console.log(`Visualizando detalhes da estratégia: ${strategy.name}`);
  };

  const handleEditStrategy = (strategy: Strategy) => {
    setSelectedStrategy(strategy);
    setShowCreateModal(true);
    console.log(`Editando estratégia: ${strategy.name}`);
  };

  const handleToggleStrategy = (strategyId: string) => {
    setStrategies(prev => prev.map(strategy => 
      strategy.id === strategyId 
        ? { ...strategy, status: strategy.status === 'active' ? 'paused' : 'active' }
        : strategy
    ));
    console.log(`Toggle estratégia: ${strategyId}`);
  };

  const handleAssignTask = (strategyId: string, taskId: string, assignee: string) => {
    console.log(`Atribuindo tarefa ${taskId} para ${assignee} na estratégia ${strategyId}`);
    // Implementation for task assignment
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'paused': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'draft': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
      'completed': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    const labels = {
      'active': 'Ativa',
      'paused': 'Pausada',
      'draft': 'Rascunho',
      'completed': 'Concluída'
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      'high': 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300',
      'medium': 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300',
      'low': 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300'
    };
    return colors[priority as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Gestão de Estratégias</h2>
          <p className="text-gray-600 dark:text-gray-300">Configure e acompanhe estratégias com gestão de equipe integrada</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={handleConfigureCriteria} variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configurar Critérios
          </Button>
          <Button onClick={handleCreateStrategy}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Estratégia
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Estratégias Ativas</p>
                <p className="text-2xl font-bold text-green-600">
                  {strategies.filter(s => s.status === 'active').length}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Progresso Médio</p>
                <p className="text-2xl font-bold text-blue-600">
                  {Math.round(strategies.reduce((acc, s) => acc + s.progress, 0) / strategies.length)}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Equipe Envolvida</p>
                <p className="text-2xl font-bold text-purple-600">
                  {new Set(strategies.flatMap(s => s.assignedTo)).size}
                </p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tarefas Pendentes</p>
                <p className="text-2xl font-bold text-orange-600">
                  {strategies.flatMap(s => s.tasks).filter(t => t.status === 'pending').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="team">Gestão de Equipe</TabsTrigger>
          <TabsTrigger value="tasks">Tarefas & Status</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Strategies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {strategies.map((strategy) => (
              <Card key={strategy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {getStatusBadge(strategy.status)}
                        <Badge className={getPriorityColor(strategy.priority)}>
                          {strategy.priority === 'high' ? 'Alta' : strategy.priority === 'medium' ? 'Média' : 'Baixa'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{strategy.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progresso</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{strategy.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${strategy.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-2 gap-2">
                    {strategy.kpis.slice(0, 2).map((kpi, index) => (
                      <div key={index} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <p className="text-xs text-gray-500 dark:text-gray-400">KPI {index + 1}</p>
                        <p className="font-semibold">
                          {kpi.current}{kpi.unit} / {kpi.target}{kpi.unit}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Team */}
                  <div>
                    <p className="text-sm font-medium mb-2">Equipe ({strategy.assignedTo.length})</p>
                    <div className="flex flex-wrap gap-1">
                      {strategy.assignedTo.slice(0, 3).map((member, index) => (
                        <span key={index} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                          {member.split(' ')[0]}
                        </span>
                      ))}
                      {strategy.assignedTo.length > 3 && (
                        <span className="text-xs text-gray-500">+{strategy.assignedTo.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      onClick={() => handleViewDetails(strategy)} 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Detalhes
                    </Button>
                    <Button 
                      onClick={() => handleEditStrategy(strategy)} 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button 
                      onClick={() => handleToggleStrategy(strategy.id)} 
                      variant="outline" 
                      size="sm"
                    >
                      {strategy.status === 'active' ? 
                        <Pause className="w-4 h-4" /> : 
                        <Play className="w-4 h-4" />
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Equipe e Comando</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {strategies.map((strategy) => (
                  <div key={strategy.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{strategy.name}</h4>
                      {getStatusBadge(strategy.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {strategy.assignedTo.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium">{member}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Activity className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acompanhamento de Status e Tarefas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {strategies.map((strategy) => (
                  <div key={strategy.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-medium mb-3">{strategy.name}</h4>
                    <div className="space-y-2">
                      {strategy.tasks.map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              task.status === 'completed' ? 'bg-green-500' :
                              task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`}></div>
                            <span className="text-sm">{task.title}</span>
                            <span className="text-xs text-gray-500">• {task.assignedTo}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{task.dueDate}</span>
                            <Button 
                              onClick={() => handleAssignTask(strategy.id, task.id, task.assignedTo)}
                              variant="ghost" 
                              size="sm"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance das Estratégias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-8 h-8 mr-2" />
                  Gráfico de Performance
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Produtividade da Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <Activity className="w-8 h-8 mr-2" />
                  Métricas de Produtividade
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Create/Edit Strategy Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedStrategy ? 'Editar Estratégia' : 'Nova Estratégia'}</CardTitle>
                <Button onClick={() => { setShowCreateModal(false); setSelectedStrategy(null); }} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome da Estratégia</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  defaultValue={selectedStrategy?.name || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                  defaultValue={selectedStrategy?.description || ''}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Prioridade</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    <option value="high">Alta</option>
                    <option value="medium">Média</option>
                    <option value="low">Baixa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Data Limite</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                    defaultValue={selectedStrategy?.dueDate || ''}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="flex-1">Salvar Estratégia</Button>
                <Button variant="outline" className="flex-1" onClick={() => { setShowCreateModal(false); setSelectedStrategy(null); }}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Configure Criteria Modal */}
      {showCriteriaModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Configurar Critérios</CardTitle>
                <Button onClick={() => setShowCriteriaModal(false)} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Critérios de Sucesso</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                  placeholder="Defina os critérios para avaliação de sucesso..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Métricas de Acompanhamento</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Taxa de Churn</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">NPS Score</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Revenue per Customer</span>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="flex-1">Salvar Critérios</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowCriteriaModal(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Strategy Details Modal */}
      {showDetailsModal && selectedStrategy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedStrategy.name}</CardTitle>
                <Button onClick={() => { setShowDetailsModal(false); setSelectedStrategy(null); }} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Progresso</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedStrategy.progress}%</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Equipe</p>
                  <p className="text-2xl font-bold text-green-600">{selectedStrategy.assignedTo.length}</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tarefas</p>
                  <p className="text-2xl font-bold text-purple-600">{selectedStrategy.tasks.length}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Tarefas Detalhadas</h4>
                <div className="space-y-2">
                  {selectedStrategy.tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded">
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Responsável: {task.assignedTo} • Prazo: {task.dueDate}
                        </p>
                      </div>
                      <Badge className={
                        task.status === 'completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {task.status === 'completed' ? 'Concluída' : 
                         task.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
