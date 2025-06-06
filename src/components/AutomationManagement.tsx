
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  Settings, 
  Zap, 
  Bot, 
  Clock, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  Play,
  Pause,
  Edit,
  Eye,
  Target,
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  FileText,
  BarChart3,
  Brain,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

interface Automation {
  id: string;
  name: string;
  description: string;
  type: 'trigger' | 'scheduled' | 'ai-driven';
  status: 'active' | 'paused' | 'draft';
  category: 'customer' | 'sales' | 'support' | 'marketing';
  triggers: string[];
  actions: string[];
  lastRun: string;
  nextRun?: string;
  executions: number;
  successRate: number;
}

const mockAutomations: Automation[] = [
  {
    id: 'auto_001',
    name: 'Follow-up Pós-Venda',
    description: 'Envia email automático 7 dias após fechamento do contrato',
    type: 'trigger',
    status: 'active',
    category: 'customer',
    triggers: ['contract_signed'],
    actions: ['send_email', 'create_task'],
    lastRun: '2024-06-05',
    executions: 142,
    successRate: 95
  },
  {
    id: 'auto_002',
    name: 'Alerta Churn Risk',
    description: 'Identifica clientes com risco de churn e notifica equipe',
    type: 'ai-driven',
    status: 'active',
    category: 'customer',
    triggers: ['nps_drop', 'usage_decline'],
    actions: ['send_alert', 'assign_task'],
    lastRun: '2024-06-06',
    executions: 89,
    successRate: 87
  },
  {
    id: 'auto_003',
    name: 'Relatório Semanal',
    description: 'Gera e envia relatório de performance toda segunda-feira',
    type: 'scheduled',
    status: 'active',
    category: 'sales',
    triggers: ['weekly_schedule'],
    actions: ['generate_report', 'send_email'],
    lastRun: '2024-06-03',
    nextRun: '2024-06-10',
    executions: 24,
    successRate: 100
  }
];

export const AutomationManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showGlobalSettings, setShowGlobalSettings] = useState(false);
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [automations, setAutomations] = useState(mockAutomations);

  const handleCreateAutomation = () => {
    setShowCreateModal(true);
    console.log('Criando nova automação...');
  };

  const handleGlobalSettings = () => {
    setShowGlobalSettings(true);
    console.log('Abrindo configurações globais...');
  };

  const handleEditAutomation = (automation: Automation) => {
    setSelectedAutomation(automation);
    setShowCreateModal(true);
    console.log(`Editando automação: ${automation.name}`);
  };

  const handleToggleAutomation = (automationId: string) => {
    setAutomations(prev => prev.map(auto => 
      auto.id === automationId 
        ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' }
        : auto
    ));
    console.log(`Toggle automação: ${automationId}`);
  };

  const handleViewDetails = (automation: Automation) => {
    setSelectedAutomation(automation);
    console.log(`Visualizando detalhes: ${automation.name}`);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      'active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'paused': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'draft': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
    };
    const labels = {
      'active': 'Ativa',
      'paused': 'Pausada',
      'draft': 'Rascunho'
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'trigger': <Zap className="w-4 h-4" />,
      'scheduled': <Clock className="w-4 h-4" />,
      'ai-driven': <Brain className="w-4 h-4" />
    };
    return icons[type as keyof typeof icons] || <Bot className="w-4 h-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'customer': 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300',
      'sales': 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300',
      'support': 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300',
      'marketing': 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Automação & IA</h2>
          <p className="text-gray-600 dark:text-gray-300">Configure automações inteligentes e fluxos de trabalho</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={handleGlobalSettings} variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configurações Globais
          </Button>
          <Button onClick={handleCreateAutomation}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Automação
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Automações Ativas</p>
                <p className="text-2xl font-bold text-green-600">
                  {automations.filter(a => a.status === 'active').length}
                </p>
              </div>
              <Zap className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Execuções Hoje</p>
                <p className="text-2xl font-bold text-blue-600">47</p>
              </div>
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Sucesso</p>
                <p className="text-2xl font-bold text-purple-600">92%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tempo Economizado</p>
                <p className="text-2xl font-bold text-orange-600">24h</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="ai-insights">Insights IA</TabsTrigger>
          <TabsTrigger value="workflows">Fluxos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <Card key={automation.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {getStatusBadge(automation.status)}
                        <Badge className={getCategoryColor(automation.category)}>
                          {automation.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        {getTypeIcon(automation.type)}
                        <span>{automation.name}</span>
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{automation.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <p className="text-gray-500 dark:text-gray-400">Execuções</p>
                      <p className="font-semibold">{automation.executions}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <p className="text-gray-500 dark:text-gray-400">Sucesso</p>
                      <p className="font-semibold">{automation.successRate}%</p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <p>Última execução: {automation.lastRun}</p>
                    {automation.nextRun && <p>Próxima execução: {automation.nextRun}</p>}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleViewDetails(automation)} 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Detalhes
                    </Button>
                    <Button 
                      onClick={() => handleEditAutomation(automation)} 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button 
                      onClick={() => handleToggleAutomation(automation.id)} 
                      variant="outline" 
                      size="sm"
                    >
                      {automation.status === 'active' ? 
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

        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Recomendações IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-100">Automação Sugerida</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Criar automação para follow-up de clientes com NPS baixo
                      </p>
                      <Button size="sm" className="mt-2">Implementar</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Precisão de Previsões</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ações Automatizadas</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tempo Economizado</span>
                    <span className="font-semibold">32h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workflows" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Designer de Fluxos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <div className="text-center">
                  <Bot className="w-8 h-8 mx-auto mb-2" />
                  <p>Designer de Fluxos de Automação</p>
                  <Button className="mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Fluxo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Execuções por Dia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <BarChart3 className="w-8 h-8 mr-2" />
                  Gráfico de Execuções
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Taxa de Sucesso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  <TrendingUp className="w-8 h-8 mr-2" />
                  Gráfico de Performance
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Create Automation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedAutomation ? 'Editar Automação' : 'Nova Automação'}</CardTitle>
                <Button onClick={() => { setShowCreateModal(false); setSelectedAutomation(null); }} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome da Automação</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  defaultValue={selectedAutomation?.name || ''}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                  defaultValue={selectedAutomation?.description || ''}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    <option value="trigger">Baseado em Evento</option>
                    <option value="scheduled">Agendado</option>
                    <option value="ai-driven">Conduzido por IA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Categoria</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    <option value="customer">Cliente</option>
                    <option value="sales">Vendas</option>
                    <option value="support">Suporte</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="flex-1">Salvar Automação</Button>
                <Button variant="outline" className="flex-1" onClick={() => { setShowCreateModal(false); setSelectedAutomation(null); }}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Global Settings Modal */}
      {showGlobalSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Configurações Globais</CardTitle>
                <Button onClick={() => setShowGlobalSettings(false)} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Limite de Execuções por Hora</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  defaultValue={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeout padrão (segundos)</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  defaultValue={30}
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Notificações por email</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Logs detalhados</span>
                </label>
              </div>
              <div className="flex space-x-4">
                <Button className="flex-1">Salvar Configurações</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowGlobalSettings(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
