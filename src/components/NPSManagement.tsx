
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { NPSCharts } from './nps/NPSCharts';
import { NPSSurveyManager } from './nps/NPSSurveyManager';
import { 
  Star, 
  Settings, 
  Users, 
  Download, 
  ArrowRight, 
  Calendar,
  TrendingUp,
  Mail,
  BarChart3,
  Activity,
  Target
} from 'lucide-react';

export const NPSManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "NPS Score Atual",
      value: "85",
      change: "+8 pontos",
      icon: Star,
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-100 dark:border-green-800",
      description: "vs trimestre anterior"
    },
    {
      title: "Taxa de Resposta",
      value: "45.6%",
      change: "+3.4%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-100 dark:border-blue-800",
      description: "195 de 428 clientes"
    },
    {
      title: "Promotores",
      value: "85%",
      change: "+5.2%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      borderColor: "border-purple-100 dark:border-purple-800",
      description: "vs mês anterior"
    },
    {
      title: "Próxima Pesquisa",
      value: "7 dias",
      change: "Agendada",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
      borderColor: "border-orange-100 dark:border-orange-800",
      description: "Pesquisa trimestral"
    }
  ];

  const npsDistribution = [
    { type: 'Promotores', count: 167, percentage: 85, color: 'bg-green-500' },
    { type: 'Passivos', count: 23, percentage: 12, color: 'bg-yellow-500' },
    { type: 'Detratores', count: 6, percentage: 3, color: 'bg-red-500' }
  ];

  const recentInsights = [
    {
      type: 'positive',
      title: 'Melhoria no Suporte',
      description: 'NPS do suporte aumentou 15 pontos este mês',
      impact: 'Alto',
      date: '2 dias atrás'
    },
    {
      type: 'alert',
      title: 'Atenção: Nível C',
      description: 'Clientes Nível C com NPS abaixo da média',
      impact: 'Médio',
      date: '5 dias atrás'
    },
    {
      type: 'opportunity',
      title: 'Oportunidade de Upsell',
      description: '23 promotores prontos para upgrade',
      impact: 'Alto',
      date: '1 semana atrás'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.bgColor} ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <Badge variant="outline" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.title}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Card className="shadow-lg border-0 bg-white dark:bg-gray-800">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Activity className="w-6 h-6" />
              <div>
                <CardTitle className="text-xl font-bold">Gestão Avançada de NPS</CardTitle>
                <p className="text-blue-100 text-sm">
                  Análises inteligentes e automação de pesquisas
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="px-6 pt-4">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100 dark:bg-gray-700">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Visão Geral</span>
                </TabsTrigger>
                <TabsTrigger value="surveys" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Pesquisas</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Análises</span>
                </TabsTrigger>
                <TabsTrigger value="insights" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span className="hidden sm:inline">Insights</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="p-6">
              <TabsContent value="overview" className="mt-0">
                <div className="space-y-6">
                  {/* Distribution Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {npsDistribution.map((item, index) => (
                      <Card key={index} className="border-l-4" style={{ borderLeftColor: item.color.replace('bg-', '#') === '#green-500' ? '#10B981' : item.color.replace('bg-', '#') === '#yellow-500' ? '#F59E0B' : '#EF4444' }}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.type}</p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">{item.count}</p>
                              <p className="text-sm text-gray-500">{item.percentage}% do total</p>
                            </div>
                            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                              {item.percentage}%
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <NPSCharts />
                </div>
              </TabsContent>
              
              <TabsContent value="surveys" className="mt-0">
                <NPSSurveyManager />
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-0">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Análise de Tendências</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div>
                              <p className="font-medium text-green-800 dark:text-green-400">Tendência Positiva</p>
                              <p className="text-sm text-green-600 dark:text-green-500">NPS crescendo consistentemente</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-green-600" />
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">+12%</p>
                              <p className="text-sm text-gray-600">Crescimento anual</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">94.2%</p>
                              <p className="text-sm text-gray-600">Taxa de retenção</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Segmentação Avançada</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { segment: 'Clientes Enterprise', score: 92, trend: 'up' },
                            { segment: 'Startups', score: 78, trend: 'up' },
                            { segment: 'SMBs', score: 71, trend: 'down' },
                            { segment: 'Novos Clientes', score: 68, trend: 'stable' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                              <span className="text-sm font-medium">{item.segment}</span>
                              <div className="flex items-center space-x-2">
                                <span className="font-bold">{item.score}</span>
                                <div className={`w-2 h-2 rounded-full ${
                                  item.trend === 'up' ? 'bg-green-500' :
                                  item.trend === 'down' ? 'bg-red-500' : 'bg-yellow-500'
                                }`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="insights" className="mt-0">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Insights e Recomendações IA
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentInsights.map((insight, index) => (
                          <div key={index} className={`p-4 rounded-lg border-l-4 ${
                            insight.type === 'positive' ? 'bg-green-50 border-green-500 dark:bg-green-900/20' :
                            insight.type === 'alert' ? 'bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20' :
                            'bg-blue-50 border-blue-500 dark:bg-blue-900/20'
                          }`}>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white">{insight.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{insight.description}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <Badge variant="outline" className="text-xs">
                                    Impacto: {insight.impact}
                                  </Badge>
                                  <span className="text-xs text-gray-500">{insight.date}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="ml-4">
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
