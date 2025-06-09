
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
  Eye,
  Download,
  RefreshCw,
  ArrowUpRight
} from 'lucide-react';

// Dados simulados para os gráficos
const revenueData = [
  { month: 'Jan', mrr: 420, arr: 5040, growth: 12 },
  { month: 'Fev', mrr: 445, arr: 5340, growth: 15 },
  { month: 'Mar', mrr: 470, arr: 5640, growth: 18 },
  { month: 'Abr', mrr: 485, arr: 5820, growth: 22 },
  { month: 'Mai', mrr: 520, arr: 6240, growth: 25 },
  { month: 'Jun', mrr: 545, arr: 6540, growth: 28 }
];

const clientsData = [
  { month: 'Jan', new: 15, churned: 3, total: 118 },
  { month: 'Fev', new: 12, churned: 2, total: 128 },
  { month: 'Mar', new: 18, churned: 4, total: 142 },
  { month: 'Abr', new: 22, churned: 3, total: 161 },
  { month: 'Mai', new: 16, churned: 2, total: 175 },
  { month: 'Jun', new: 9, churned: 1, total: 183 }
];

const healthScoreData = [
  { segment: 'Enterprise', score: 9.2, count: 23 },
  { segment: 'Mid-Market', score: 8.7, count: 45 },
  { segment: 'SMB', score: 7.9, count: 89 },
  { segment: 'Startup', score: 7.2, count: 67 }
];

const tierDistribution = [
  { name: 'Tier A', value: 23, color: '#3B82F6' },
  { name: 'Tier B', value: 45, color: '#8B5CF6' },
  { name: 'Tier C', value: 89, color: '#EC4899' },
  { name: 'Prospects', value: 26, color: '#10B981' }
];

export const DashboardCharts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Análises Principais</h2>
          <p className="text-gray-600 dark:text-gray-400">Visão geral dos indicadores de Customer Success</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Growth Chart */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-green-600" />
              <div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Crescimento de Receita
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  MRR e ARR ao longo dos meses
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                +28% crescimento
              </Badge>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => [
                    `R$ ${value}k`,
                    name === 'mrr' ? 'MRR' : 'ARR'
                  ]}
                />
                <Area type="monotone" dataKey="mrr" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="growth" stackId="2" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">MRR Atual</p>
                <p className="text-lg font-bold text-green-600">R$ 545k</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">ARR Projetado</p>
                <p className="text-lg font-bold text-blue-600">R$ 6.54M</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">
                Ver detalhes
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Client Growth Chart */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Evolução de Clientes
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Novos clientes vs. Churn
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                183 ativos
              </Badge>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={clientsData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="new" fill="#10B981" name="Novos" radius={[4, 4, 0, 0]} />
                <Bar dataKey="churned" fill="#EF4444" name="Churn" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Net Growth</p>
                <p className="text-lg font-bold text-green-600">+8 clientes</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Churn Rate</p>
                <p className="text-lg font-bold text-red-600">0.5%</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">
                Analisar
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Health Score by Segment */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Health Score por Segmento
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Saúde dos clientes por categoria
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                Média: 8.3
              </Badge>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthScoreData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" domain={[0, 10]} className="text-xs" />
                <YAxis type="category" dataKey="segment" className="text-xs" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name, props) => [
                    `${value}/10`,
                    `Health Score - ${props.payload.count} clientes`
                  ]}
                />
                <Bar dataKey="score" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Melhor Segmento</p>
                  <p className="text-lg font-bold text-green-600">Enterprise (9.2)</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Requer Atenção</p>
                  <p className="text-lg font-bold text-orange-600">Startup (7.2)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tier Distribution */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-yellow-600" />
              <div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  Distribuição por Tier
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clientes por nível de prioridade
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                4 tiers
              </Badge>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={tierDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tierDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {tierDistribution.map((tier) => (
                  <div key={tier.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: tier.color }} />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{tier.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{tier.value} clientes</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">
                      Ver
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
