
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Brain, TrendingUp, Target, AlertTriangle, Lightbulb, BarChart3, Users, DollarSign, Zap, Eye } from 'lucide-react';

const predictiveInsights = [
  {
    id: '1',
    type: 'Churn Risk',
    client: 'TechCorp Solutions',
    prediction: 'Alto risco (87%)',
    confidence: 87,
    factors: ['NPS baixo (3)', 'Redução de uso', 'Suporte frequente'],
    recommendation: 'Agendar reunião de retenção urgente',
    severity: 'high'
  },
  {
    id: '2',
    type: 'Upsell Opportunity',
    client: 'Inovação Digital',
    prediction: 'Alta probabilidade (92%)',
    confidence: 92,
    factors: ['Crescimento 40%', 'NPS excelente (9)', 'Uso intenso'],
    recommendation: 'Apresentar plano Growth',
    severity: 'success'
  },
  {
    id: '3',
    type: 'Revenue Forecast',
    client: 'Global Services',
    prediction: 'Crescimento 25%',
    confidence: 78,
    factors: ['Renovação confirmada', 'Expansão planejada', 'Orçamento aprovado'],
    recommendation: 'Focar em cross-sell',
    severity: 'medium'
  }
];

const aiRecommendations = [
  {
    id: '1',
    title: 'Estratégia para Detratores',
    description: 'Implementar programa de recuperação para 8 clientes detratores identificados',
    impact: 'Alto',
    effort: 'Médio',
    roi: '+R$ 120k ARR estimado',
    actions: ['Pesquisa de satisfação detalhada', 'Plano de ação personalizado', 'Follow-up semanal']
  },
  {
    id: '2',
    title: 'Otimização de Onboarding',
    description: 'Reduzir time-to-value de 45 para 30 dias com automação',
    impact: 'Médio',
    effort: 'Baixo',
    roi: '+15% retenção primeiro ano',
    actions: ['Automatizar emails de boas-vindas', 'Criar checklist interativo', 'Webinar de treinamento']
  },
  {
    id: '3',
    title: 'Expansão de Contas Chave',
    description: 'Identificadas 12 oportunidades de upsell em contas estratégicas',
    impact: 'Alto',
    effort: 'Alto',
    roi: '+R$ 380k ARR estimado',
    actions: ['Análise de necessidades', 'Proposta customizada', 'Apresentação executiva']
  }
];

const mlModels = [
  { name: 'Churn Prediction', accuracy: 89, lastTrained: '2024-01-10', status: 'active' },
  { name: 'LTV Forecasting', accuracy: 84, lastTrained: '2024-01-08', status: 'active' },
  { name: 'Upsell Propensity', accuracy: 91, lastTrained: '2024-01-12', status: 'active' },
  { name: 'Health Score', accuracy: 87, lastTrained: '2024-01-09', status: 'training' },
  { name: 'NPS Prediction', accuracy: 82, lastTrained: '2024-01-07', status: 'active' }
];

export const AIAdvancedFeatures = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  const getSeverityColor = (severity: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      success: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[severity as keyof typeof colors] || colors.medium;
  };

  const getImpactColor = (impact: string) => {
    const colors = {
      'Alto': 'bg-red-100 text-red-800',
      'Médio': 'bg-yellow-100 text-yellow-800',
      'Baixo': 'bg-green-100 text-green-800'
    };
    return colors[impact as keyof typeof colors] || colors['Médio'];
  };

  return (
    <div className="space-y-6">
      {/* Métricas de IA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Insights Gerados</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+18% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Precisão Média</p>
                <p className="text-2xl font-bold">86.2%</p>
              </div>
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+2.1% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">ROI Gerado</p>
                <p className="text-2xl font-bold">R$ 1.2M</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xs text-green-600 mt-2">+34% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Créditos IA</p>
                <p className="text-2xl font-bold">23/50</p>
              </div>
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-xs text-gray-600 mt-2">Renovação em 12 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Insights Preditivos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Análise Preditiva</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {predictiveInsights.map(insight => (
              <div key={insight.id} className={`border rounded-lg p-4 ${getSeverityColor(insight.severity)}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline">{insight.type}</Badge>
                      <span className="font-medium">{insight.client}</span>
                    </div>
                    <p className="text-lg font-semibold">{insight.prediction}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Confiança</p>
                    <p className="text-xl font-bold">{insight.confidence}%</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">Fatores identificados:</p>
                  <div className="flex flex-wrap gap-1">
                    {insight.factors.map((factor, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-medium">Recomendação:</span> {insight.recommendation}
                  </p>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recomendações Estratégicas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>Recomendações Estratégicas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {aiRecommendations.map(rec => (
              <div key={rec.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{rec.title}</h4>
                    <p className="text-gray-600 mb-2">{rec.description}</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Badge className={getImpactColor(rec.impact)}>{rec.impact}</Badge>
                    <Badge variant="outline">{rec.effort}</Badge>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                  <p className="text-sm">
                    <span className="font-medium text-green-800">ROI Estimado:</span>
                    <span className="text-green-700 ml-1">{rec.roi}</span>
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Próximas ações sugeridas:</p>
                  <ul className="space-y-1">
                    {rec.actions.map((action, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button className="mr-2" variant="outline">Mais Detalhes</Button>
                  <Button>Implementar</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modelos de Machine Learning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Modelos de Machine Learning</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modelo</TableHead>
                <TableHead>Precisão</TableHead>
                <TableHead>Último Treinamento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mlModels.map((model, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{model.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={model.accuracy} className="w-20 h-2" />
                      <span className="text-sm font-medium">{model.accuracy}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{model.lastTrained}</TableCell>
                  <TableCell>
                    <Badge variant={model.status === 'active' ? 'default' : 'secondary'}>
                      {model.status === 'active' ? 'Ativo' : 'Treinando'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Retreinar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Configurações de IA */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações de IA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Modelos de Cálculo</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Algoritmo de LTV</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Histórico + Predição</option>
                    <option>Apenas Histórico</option>
                    <option>Apenas Predição</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Janela de análise</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>12 meses</option>
                    <option>24 meses</option>
                    <option>36 meses</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Peso do NPS no Health Score</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>30%</option>
                    <option>40%</option>
                    <option>50%</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Alertas Automáticos</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risco de churn > 70%</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Oportunidade upsell > 80%</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Queda NPS > 2 pontos</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">LTV abaixo da média</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
