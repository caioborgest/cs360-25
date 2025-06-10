
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  CheckCircle, Clock, AlertTriangle, Target, TrendingUp, 
  Users, Star, Calendar, MessageSquare, Phone, Mail,
  BarChart3, ArrowRight, Zap
} from 'lucide-react';

const Summary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Resumo do Dia
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Suas ações prioritárias e insights para hoje, {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Ações Pendentes</p>
                    <p className="text-3xl font-bold">8</p>
                  </div>
                  <Clock className="w-10 h-10 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Concluídas Hoje</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <CheckCircle className="w-10 h-10 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">Alertas Críticos</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <AlertTriangle className="w-10 h-10 text-orange-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Meta do Dia</p>
                    <p className="text-3xl font-bold">85%</p>
                  </div>
                  <Target className="w-10 h-10 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-6">
              {/* Priority Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Ações Prioritárias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Contatar cliente em risco de churn',
                        client: 'TechCorp',
                        priority: 'Alta',
                        time: '09:00',
                        type: 'call',
                        color: 'red'
                      },
                      {
                        title: 'Acompanhar onboarding StartupXYZ',
                        client: 'StartupXYZ',
                        priority: 'Média',
                        time: '11:30',
                        type: 'meeting',
                        color: 'yellow'
                      },
                      {
                        title: 'Enviar relatório semanal',
                        client: 'Enterprise Inc',
                        priority: 'Baixa',
                        time: '15:00',
                        type: 'email',
                        color: 'green'
                      },
                      {
                        title: 'Review de health score',
                        client: 'Digital Agency',
                        priority: 'Média',
                        time: '16:30',
                        type: 'analysis',
                        color: 'blue'
                      }
                    ].map((action, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            action.color === 'red' ? 'bg-red-500' :
                            action.color === 'yellow' ? 'bg-yellow-500' :
                            action.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                          }`}></div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{action.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{action.client} • {action.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={`${
                            action.priority === 'Alta' ? 'bg-red-100 text-red-800' :
                            action.priority === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {action.priority}
                          </Badge>
                          <Button size="sm" variant="outline">
                            {action.type === 'call' && <Phone className="w-4 h-4" />}
                            {action.type === 'meeting' && <Calendar className="w-4 h-4" />}
                            {action.type === 'email' && <Mail className="w-4 h-4" />}
                            {action.type === 'analysis' && <BarChart3 className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Today's Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Performance de Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tarefas Concluídas</p>
                      <div className="text-xs text-green-600 mt-1">+20% vs ontem</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Contatados</p>
                      <div className="text-xs text-blue-600 mt-1">Meta: 8</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Satisfação Média</p>
                      <div className="text-xs text-purple-600 mt-1">Excelente</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-600" />
                    Atividades Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Ligação para TechCorp finalizada', time: '30 min atrás', type: 'call' },
                      { action: 'Health score atualizado - StartupXYZ', time: '1h atrás', type: 'update' },
                      { action: 'Email de follow-up enviado', time: '2h atrás', type: 'email' },
                      { action: 'Reunião de onboarding concluída', time: '3h atrás', type: 'meeting' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agenda de Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { time: '09:00', event: 'Ligação TechCorp', type: 'call' },
                    { time: '11:30', event: 'Review StartupXYZ', type: 'meeting' },
                    { time: '14:00', event: 'Análise de dados', type: 'analysis' },
                    { time: '16:30', event: 'Follow-up emails', type: 'email' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.event}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.time}</p>
                      </div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Insights Rápidos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800 dark:text-green-400">Tendência Positiva</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      NPS médio aumentou 5 pontos esta semana
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-medium text-orange-800 dark:text-orange-400">Atenção Necessária</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      3 clientes com health score baixo
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800 dark:text-blue-400">Oportunidade</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      2 clientes prontos para upgrade
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-blue-600">
                    <Users className="w-4 h-4 mr-2" />
                    Ver Todos os Clientes
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Relatório Detalhado
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Criar Tarefa
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Atualizar Metas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summary;
