import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
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
  Legend,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Calendar, 
  Award, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Edit,
  BarChart3
} from 'lucide-react';

const goalsProgressData = [
  { month: 'Jan', individual: 85, team: 78, company: 92 },
  { month: 'Fev', individual: 88, team: 82, company: 89 },
  { month: 'Mar', individual: 92, team: 85, company: 94 },
  { month: 'Abr', individual: 87, team: 88, company: 91 },
  { month: 'Mai', individual: 90, team: 91, company: 96 },
  { month: 'Jun', individual: 94, team: 89, company: 98 }
];

const goalsCategoryData = [
  { name: 'Vendas', value: 35, color: '#10B981' },
  { name: 'CS', value: 30, color: '#3B82F6' },
  { name: 'Retenção', value: 20, color: '#8B5CF6' },
  { name: 'Upsell', value: 15, color: '#F59E0B' }
];

const goalsProgressChartData = [
  { name: 'Aumentar NPS para 80+', progress: 75, color: '#10B981' },
  { name: 'Reduzir Churn para 2%', progress: 60, color: '#F59E0B' },
  { name: 'Atingir 150 novos clientes', progress: 82, color: '#3B82F6' },
  { name: 'Aumentar MRR em 25%', progress: 45, color: '#EF4444' },
  { name: 'Melhorar CSAT para 4.5', progress: 88, color: '#8B5CF6' },
  { name: 'Reduzir tempo resposta', progress: 70, color: '#06B6D4' }
];

const topGoals = [
  {
    id: 1,
    title: 'Aumentar NPS para 80+',
    category: 'Customer Success',
    progress: 75,
    target: '80 pontos',
    current: '72 pontos',
    deadline: '30/06/2024',
    status: 'on-track',
    team: 'CS Team',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Reduzir Churn para 2%',
    category: 'Retenção',
    progress: 60,
    target: '2%',
    current: '3.2%',
    deadline: '31/07/2024',
    status: 'at-risk',
    team: 'CS Team',
    priority: 'critical'
  },
  {
    id: 3,
    title: 'Atingir 150 novos clientes',
    category: 'Vendas',
    progress: 82,
    target: '150 clientes',
    current: '123 clientes',
    deadline: '31/12/2024',
    status: 'on-track',
    team: 'Sales Team',
    priority: 'medium'
  },
  {
    id: 4,
    title: 'Aumentar MRR em 25%',
    category: 'Upsell',
    progress: 45,
    target: 'R$ 125.000',
    current: 'R$ 112.500',
    deadline: '30/09/2024',
    status: 'behind',
    team: 'Sales Team',
    priority: 'high'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'on-track': return 'bg-green-100 text-green-800';
    case 'at-risk': return 'bg-yellow-100 text-yellow-800';
    case 'behind': return 'bg-red-100 text-red-800';
    case 'completed': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'critical': return 'bg-red-500';
    case 'high': return 'bg-orange-500';
    case 'medium': return 'bg-yellow-500';
    case 'low': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'on-track': return <CheckCircle className="w-4 h-4 text-green-600" />;
    case 'at-risk': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    case 'behind': return <Clock className="w-4 h-4 text-red-600" />;
    case 'completed': return <Award className="w-4 h-4 text-blue-600" />;
    default: return <Target className="w-4 h-4 text-gray-600" />;
  }
};

export const GoalsDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Gráfico de Progresso */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span>Progresso das Metas por Categoria</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={goalsProgressData}>
              <defs>
                <linearGradient id="individualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="teamGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="companyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="individual"
                stroke="#10B981"
                fill="url(#individualGradient)"
                name="Metas Individuais"
              />
              <Area
                type="monotone"
                dataKey="team"
                stroke="#3B82F6"
                fill="url(#teamGradient)"
                name="Metas de Equipe"
              />
              <Area
                type="monotone"
                dataKey="company"
                stroke="#8B5CF6"
                fill="url(#companyGradient)"
                name="Metas da Empresa"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Novo Gráfico: Progresso das Metas */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-green-500" />
            <span>Progresso das Metas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={goalsProgressChartData}
              layout="horizontal"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={150}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Progresso']}
                contentStyle={{ 
                  backgroundColor: 'rgb(255 255 255 / 0.95)', 
                  border: '1px solid rgb(229 231 235)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar 
                dataKey="progress" 
                radius={[0, 4, 4, 0]}
              >
                {goalsProgressChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribuição por Categoria */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span>Metas por Categoria</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={goalsCategoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {goalsCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Metas Prioritárias */}
        <Card className="lg:col-span-2 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Metas Prioritárias</span>
              </div>
              <Button variant="outline" size="sm">Ver Todas</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topGoals.map((goal) => (
                <div key={goal.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(goal.priority)}`}></div>
                        <h4 className="font-semibold text-lg">{goal.title}</h4>
                        {getStatusIcon(goal.status)}
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-600">Progresso</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={goal.progress} className="flex-1" />
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Meta vs Atual</p>
                          <p className="text-sm font-medium">{goal.current} / {goal.target}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{goal.team}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{goal.deadline}</span>
                        </div>
                        <Badge className={getStatusColor(goal.status)}>
                          {goal.status === 'on-track' ? 'No Prazo' :
                           goal.status === 'at-risk' ? 'Em Risco' :
                           goal.status === 'behind' ? 'Atrasada' : 'Concluída'}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
