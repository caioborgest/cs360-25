
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Target, 
  Users, 
  DollarSign,
  ArrowUp,
  ArrowDown,
  Lightbulb,
  Clock,
  Star,
  Activity
} from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 580000, churn: 4.2, newAccounts: 23 },
  { month: 'Fev', revenue: 610000, churn: 3.8, newAccounts: 31 },
  { month: 'Mar', revenue: 645000, churn: 3.1, newAccounts: 28 },
  { month: 'Abr', revenue: 680000, churn: 2.9, newAccounts: 35 },
  { month: 'Mai', revenue: 720000, churn: 2.7, newAccounts: 42 },
  { month: 'Jun', revenue: 765000, churn: 2.4, newAccounts: 38 }
];

const accountHealthData = [
  { name: 'Excelente', value: 342, color: '#10B981' },
  { name: 'Bom', value: 498, color: '#3B82F6' },
  { name: 'Regular', value: 287, color: '#F59E0B' },
  { name: 'Crítico', value: 120, color: '#EF4444' }
];

const churnPredictionData = [
  { segment: 'Enterprise', current: 1.2, predicted: 1.8, risk: 'low' },
  { segment: 'Growth', current: 2.8, predicted: 3.4, risk: 'medium' },
  { segment: 'Professional', current: 4.1, predicted: 5.2, risk: 'high' },
  { segment: 'Starter', current: 8.7, predicted: 11.2, risk: 'critical' }
];

const aiRecommendations = [
  {
    id: 1,
    type: 'critical',
    title: 'Risco de Churn Elevado - Segmento Starter',
    description: 'Detectado aumento de 28% no risco de churn para contas Starter nos últimos 30 dias',
    impact: 'Alto',
    effort: 'Médio',
    actions: [
      'Implementar campanha de onboarding aprimorada',
      'Criar programa de check-in proativo',
      'Oferecer consultoria gratuita nas primeiras 2 semanas'
    ],
    priority: 1,
    timeline: '7 dias',
    roi: 'R$ 340K em receita retida'
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'Oportunidade de Upsell - Contas Enterprise',
    description: 'IA identificou 67 contas Enterprise com padrão de uso indicando necessidade de features avançadas',
    impact: 'Alto',
    effort: 'Baixo',
    actions: [
      'Ativar trial de features premium',
      'Agendar demo personalizada',
      'Oferecer desconto por upgrade antecipado'
    ],
    priority: 2,
    timeline: '14 dias',
    roi: 'R$ 890K em novo MRR'
  },
  {
    id: 3,
    type: 'improvement',
    title: 'Otimização de Onboarding',
    description: 'Contas com onboarding completo têm 3.2x menos probabilidade de cancelar',
    impact: 'Médio',
    effort: 'Alto',
    actions: [
      'Redesenhar fluxo de onboarding',
      'Adicionar gamificação',
      'Implementar assistente IA personalizado'
    ],
    priority: 3,
    timeline: '30 dias',
    roi: 'R$ 1.2M em churn evitado'
  },
  {
    id: 4,
    type: 'quick-win',
    title: 'Automação de Relatórios',
    description: 'Implementar envio automático de relatórios pode aumentar satisfação em 23%',
    impact: 'Médio',
    effort: 'Baixo',
    actions: [
      'Configurar templates de relatório',
      'Automatizar envio semanal/mensal',
      'Personalizar por segmento de cliente'
    ],
    priority: 4,
    timeline: '3 dias',
    roi: 'R$ 120K em eficiência operacional'
  }
];

export const AIInsightsDashboard = () => {
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null);

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'opportunity': return <Target className="w-5 h-5 text-green-500" />;
      case 'improvement': return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'quick-win': return <Zap className="w-5 h-5 text-yellow-500" />;
      default: return <Lightbulb className="w-5 h-5 text-gray-500" />;
    }
  };

  const getRecommendationColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-200 bg-red-50';
      case 'opportunity': return 'border-green-200 bg-green-50';
      case 'improvement': return 'border-blue-200 bg-blue-50';
      case 'quick-win': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getPriorityBadge = (priority: number) => {
    if (priority === 1) return <Badge className="bg-red-100 text-red-800">Crítica</Badge>;
    if (priority === 2) return <Badge className="bg-orange-100 text-orange-800">Alta</Badge>;
    if (priority === 3) return <Badge className="bg-blue-100 text-blue-800">Média</Badge>;
    return <Badge className="bg-green-100 text-green-800">Baixa</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* AI Insights Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">CS360° AI Intelligence</h2>
              <p className="text-sm text-muted-foreground">Análises preditivas e recomendações inteligentes</p>
            </div>
            <Badge className="bg-purple-100 text-purple-800 animate-pulse">
              IA Ativa
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border">
              <Activity className="w-8 h-8 mx-auto text-purple-500 mb-2" />
              <div className="text-2xl font-bold text-purple-600">98.7%</div>
              <div className="text-sm text-gray-600">Precisão IA</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <Target className="w-8 h-8 mx-auto text-green-500 mb-2" />
              <div className="text-2xl font-bold text-green-600">47</div>
              <div className="text-sm text-gray-600">Oportunidades</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <AlertTriangle className="w-8 h-8 mx-auto text-red-500 mb-2" />
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-sm text-gray-600">Alertas Críticos</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <DollarSign className="w-8 h-8 mx-auto text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-blue-600">R$ 2.3M</div>
              <div className="text-sm text-gray-600">ROI Potencial</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Churn Prediction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Previsão de Receita & Churn</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'revenue' ? `R$ ${value.toLocaleString()}` : `${value}%`,
                    name === 'revenue' ? 'Receita' : 'Churn Rate'
                  ]}
                />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Line type="monotone" dataKey="churn" stroke="#EF4444" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Previsão IA:</span>
              </div>
              <p className="text-sm text-blue-700 mt-1">
                Receita deve atingir R$ 820K até final do trimestre, com churn estabilizando em 2.1%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Account Health Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Saúde das Contas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={accountHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {accountHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {accountHealthData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Churn Risk by Segment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span>Previsão de Churn por Segmento</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {churnPredictionData.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge variant={
                    segment.risk === 'critical' ? 'destructive' :
                    segment.risk === 'high' ? 'destructive' :
                    segment.risk === 'medium' ? 'secondary' : 'default'
                  }>
                    {segment.segment}
                  </Badge>
                  <div>
                    <div className="text-sm text-gray-600">Atual: {segment.current}%</div>
                    <div className="text-sm text-gray-600">Previsto: {segment.predicted}%</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {segment.predicted > segment.current ? (
                    <ArrowUp className="w-4 h-4 text-red-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-green-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    segment.predicted > segment.current ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {Math.abs(segment.predicted - segment.current).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <span>Recomendações Inteligentes</span>
            <Badge className="bg-yellow-100 text-yellow-800">
              {aiRecommendations.length} ações sugeridas
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <div className="space-y-4">
              {aiRecommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    getRecommendationColor(recommendation.type)
                  } ${selectedRecommendation === recommendation.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedRecommendation(
                    selectedRecommendation === recommendation.id ? null : recommendation.id
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getRecommendationIcon(recommendation.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium">{recommendation.title}</h4>
                          {getPriorityBadge(recommendation.priority)}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{recommendation.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Target className="w-3 h-3" />
                            <span>Impacto: {recommendation.impact}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{recommendation.timeline}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-3 h-3" />
                            <span>{recommendation.roi}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      {selectedRecommendation === recommendation.id ? 'Ocultar' : 'Ver Ações'}
                    </Button>
                  </div>

                  {selectedRecommendation === recommendation.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h5 className="font-medium mb-2">Ações Recomendadas:</h5>
                      <ul className="space-y-2">
                        {recommendation.actions.map((action, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-end space-x-2 mt-4">
                        <Button size="sm" variant="outline">
                          Agendar para Depois
                        </Button>
                        <Button size="sm">
                          Implementar Agora
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
