
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';
import { 
  BarChart3, 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  Target,
  Award,
  Users
} from 'lucide-react';

const performanceData = [
  { month: 'Jan', individual: 85, team: 78, company: 92, completed: 12 },
  { month: 'Fev', individual: 88, team: 82, company: 89, completed: 15 },
  { month: 'Mar', individual: 92, team: 85, company: 94, completed: 18 },
  { month: 'Abr', individual: 87, team: 88, company: 91, completed: 14 },
  { month: 'Mai', individual: 90, team: 91, company: 96, completed: 22 },
  { month: 'Jun', individual: 94, team: 89, company: 98, completed: 25 }
];

const categoryDistribution = [
  { name: 'Customer Success', value: 35, count: 28, color: '#10B981' },
  { name: 'Vendas', value: 30, count: 24, color: '#3B82F6' },
  { name: 'Retenção', value: 20, count: 16, color: '#8B5CF6' },
  { name: 'Upsell', value: 15, count: 12, color: '#F59E0B' }
];

const departmentPerformance = [
  { department: 'Customer Success', completed: 45, active: 23, success_rate: 89 },
  { department: 'Vendas', completed: 38, active: 19, success_rate: 85 },
  { department: 'Marketing', completed: 22, active: 12, success_rate: 78 },
  { department: 'Produto', completed: 15, active: 8, success_rate: 82 }
];

export const GoalsReports = () => {
  return (
    <div className="space-y-6">
      {/* Header com ações */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Relatórios de Metas</h2>
          <p className="text-gray-600">Análise detalhada do desempenho e tendências</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Período</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Taxa de Sucesso</p>
                <p className="text-3xl font-bold text-green-700">87%</p>
                <p className="text-xs text-green-600 mt-1">+5% vs mês anterior</p>
              </div>
              <Target className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Metas Concluídas</p>
                <p className="text-3xl font-bold text-blue-700">156</p>
                <p className="text-xs text-blue-600 mt-1">Este mês: 25</p>
              </div>
              <Award className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Engajamento</p>
                <p className="text-3xl font-bold text-purple-700">94%</p>
                <p className="text-xs text-purple-600 mt-1">Participação ativa</p>
              </div>
              <Users className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Tempo Médio</p>
                <p className="text-3xl font-bold text-orange-700">23d</p>
                <p className="text-xs text-orange-600 mt-1">Para conclusão</p>
              </div>
              <TrendingUp className="w-12 h-12 text-orange-500 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance ao longo do tempo */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Performance ao Longo do Tempo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="individual" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Individual"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="team" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  name="Equipe"
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="company" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  name="Empresa"
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribuição por Categoria */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <span>Distribuição por Categoria</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance por Departamento */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-500" />
            <span>Performance por Departamento</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10B981" name="Concluídas" radius={[4, 4, 0, 0]} />
              <Bar dataKey="active" fill="#3B82F6" name="Ativas" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabela de Detalhes */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle>Detalhamento por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Categoria</th>
                  <th className="text-left py-3 px-4">Total de Metas</th>
                  <th className="text-left py-3 px-4">Concluídas</th>
                  <th className="text-left py-3 px-4">Taxa de Sucesso</th>
                  <th className="text-left py-3 px-4">Tempo Médio</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {categoryDistribution.map((category, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: category.color }}
                        ></div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{category.count}</td>
                    <td className="py-3 px-4">{Math.floor(category.count * 0.8)}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">
                        {Math.floor(category.value * 2.4)}%
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{18 + index * 3} dias</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">Ativo</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
