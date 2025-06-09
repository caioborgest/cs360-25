
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Star, 
  AlertTriangle,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

interface AnalyticsChartsProps {
  visibleCharts: string[];
}

const revenueData = [
  { month: 'Jan', mrr: 420, arr: 5040, upsell: 45, churn: 12 },
  { month: 'Fev', mrr: 445, arr: 5340, upsell: 52, churn: 8 },
  { month: 'Mar', mrr: 470, arr: 5640, upsell: 38, churn: 15 },
  { month: 'Abr', mrr: 485, arr: 5820, upsell: 67, churn: 6 },
  { month: 'Mai', mrr: 520, arr: 6240, upsell: 74, churn: 9 },
  { month: 'Jun', mrr: 545, arr: 6540, upsell: 81, churn: 4 }
];

const npsData = [
  { month: 'Jan', promotores: 65, neutros: 25, detratores: 10, score: 55 },
  { month: 'Fev', promotores: 68, neutros: 24, detratores: 8, score: 60 },
  { month: 'Mar', promotores: 70, neutros: 22, detratores: 8, score: 62 },
  { month: 'Abr', promotores: 72, neutros: 20, detratores: 8, score: 64 },
  { month: 'Mai', promotores: 75, neutros: 18, detratores: 7, score: 68 },
  { month: 'Jun', promotores: 78, neutros: 16, detratores: 6, score: 72 }
];

const churnData = [
  { month: 'Jan', voluntary: 2.5, involuntary: 1.2, total: 3.7 },
  { month: 'Fev', voluntary: 2.1, involuntary: 0.8, total: 2.9 },
  { month: 'Mar', voluntary: 2.8, involuntary: 1.5, total: 4.3 },
  { month: 'Abr', voluntary: 1.9, involuntary: 0.6, total: 2.5 },
  { month: 'Mai', voluntary: 2.2, involuntary: 0.9, total: 3.1 },
  { month: 'Jun', voluntary: 1.8, involuntary: 0.5, total: 2.3 }
];

const healthScoreData = [
  { segment: 'Enterprise', score: 9.2, clients: 23, risk: 'Baixo' },
  { segment: 'Mid-Market', score: 8.7, clients: 45, risk: 'Médio' },
  { segment: 'SMB', score: 7.9, clients: 89, risk: 'Alto' },
  { segment: 'Startup', score: 7.2, clients: 67, risk: 'Alto' }
];

const segmentData = [
  { name: 'Enterprise', value: 23, revenue: 285000, color: '#3B82F6' },
  { name: 'Mid-Market', value: 45, revenue: 185000, color: '#8B5CF6' },
  { name: 'SMB', value: 89, revenue: 156000, color: '#EC4899' },
  { name: 'Startup', value: 67, revenue: 98000, color: '#10B981' }
];

const chartConfigs = [
  {
    id: 'revenue',
    title: 'Análise de Receita',
    description: 'MRR, ARR e métricas de crescimento',
    icon: DollarSign,
    color: 'text-green-600'
  },
  {
    id: 'nps',
    title: 'Net Promoter Score',
    description: 'Evolução da satisfação dos clientes',
    icon: Star,
    color: 'text-yellow-600'
  },
  {
    id: 'churn',
    title: 'Análise de Churn',
    description: 'Taxa de cancelamento e retenção',
    icon: AlertTriangle,
    color: 'text-red-600'
  },
  {
    id: 'health',
    title: 'Health Score por Segmento',
    description: 'Saúde dos clientes por categoria',
    icon: TrendingUp,
    color: 'text-blue-600'
  },
  {
    id: 'segments',
    title: 'Distribuição por Segmento',
    description: 'Clientes e receita por segmento',
    icon: Users,
    color: 'text-purple-600'
  }
];

export const AnalyticsCharts = ({ visibleCharts }: AnalyticsChartsProps) => {
  const renderChart = (chartId: string) => {
    switch (chartId) {
      case 'revenue':
        return (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-green-600" />
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Análise de Receita
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MRR, ARR e métricas de crescimento
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  +12.5% vs mês anterior
                </Badge>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px'
                    }}
                    formatter={(value, name) => [
                      `R$ ${value}k`,
                      name === 'mrr' ? 'MRR' : name === 'arr' ? 'ARR' : name
                    ]}
                  />
                  <Area type="monotone" dataKey="mrr" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="upsell" stackId="2" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        );

      case 'nps':
        return (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-600" />
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Net Promoter Score
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Evolução da satisfação dos clientes
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                  Score: 72
                </Badge>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={npsData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="score" stroke="#F59E0B" strokeWidth={3} dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }} />
                  <Line type="monotone" dataKey="promotores" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="detratores" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        );

      case 'churn':
        return (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Análise de Churn
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Taxa de cancelamento e retenção
                  </p>
                </div>
              </div>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                2.3% atual
              </Badge>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={churnData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`${value}%`, 'Taxa']}
                  />
                  <Bar dataKey="voluntary" stackId="a" fill="#EF4444" name="Voluntário" />
                  <Bar dataKey="involuntary" stackId="a" fill="#F87171" name="Involuntário" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        );

      case 'health':
        return (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Health Score por Segmento
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Saúde dos clientes por categoria
                  </p>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                Média: 8.3
              </Badge>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={healthScoreData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis type="category" dataKey="segment" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px'
                    }}
                    formatter={(value, name, props) => [
                      `${value}/10`,
                      `Health Score - ${props.payload.clients} clientes`
                    ]}
                  />
                  <Bar dataKey="score" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        );

      case 'segments':
        return (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Distribuição por Segmento
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clientes e receita por segmento
                  </p>
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                4 segmentos
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {segmentData.map((segment) => (
                    <div key={segment.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: segment.color }} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{segment.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{segment.value} clientes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          R$ {(segment.revenue / 1000).toFixed(0)}k
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">MRR</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Avançados</h2>
          <p className="text-gray-600 dark:text-gray-400">Análises detalhadas e insights de Customer Success</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar Tudo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {chartConfigs
          .filter(config => visibleCharts.includes(config.id))
          .map(config => (
            <div key={config.id}>
              {renderChart(config.id)}
            </div>
          ))}
      </div>

      {visibleCharts.length === 0 && (
        <Card className="bg-gray-50 dark:bg-gray-800/50 border-dashed border-2 border-gray-300 dark:border-gray-600">
          <CardContent className="p-8 text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Nenhum gráfico selecionado
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use o botão de personalização no cabeçalho para selecionar os gráficos que deseja visualizar.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
