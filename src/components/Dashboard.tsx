
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DraggableIndicators } from './dashboard/DraggableIndicators';
import { CustomerSegmentChart } from './dashboard/CustomerSegmentChart';
import { RevenueGrowthChart } from './dashboard/RevenueGrowthChart';
import { ClientsManagement } from './ClientsManagement';
import {
  Brain,
  MessageSquare,
  Target,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  Settings,
  Download,
  Upload,
  Plus,
  Eye,
  Zap
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const healthScoreData = [
  { month: 'Jan', score: 82, engajamento: 75, satisfacao: 85 },
  { month: 'Fev', score: 84, engajamento: 78, satisfacao: 87 },
  { month: 'Mar', score: 86, engajamento: 82, satisfacao: 89 },
  { month: 'Abr', score: 85, engajamento: 80, satisfacao: 88 },
  { month: 'Mai', score: 88, engajamento: 85, satisfacao: 91 },
  { month: 'Jun', score: 90, engajamento: 87, satisfacao: 93 }
];

const strategicTrendsData = [
  { metric: 'Retenção', atual: 94, meta: 95, tendencia: 'up' },
  { metric: 'Upsell', atual: 23, meta: 25, tendencia: 'up' },
  { metric: 'Time to Value', atual: 12, meta: 10, tendencia: 'down' },
  { metric: 'CSAT', atual: 4.7, meta: 4.8, tendencia: 'up' }
];

export const Dashboard = () => {
  const handleNavigateToClients = () => {
    window.location.href = '/clients';
  };

  const handleNavigateToStrategies = () => {
    window.location.href = '/strategies';
  };

  const handleNavigateToAutomation = () => {
    window.location.href = '/automation';
  };

  const handleNavigateToReports = () => {
    window.location.href = '/reports';
  };

  return (
    <div className="space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      {/* Painel de Indicadores Flexíveis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Indicadores Principal</h2>
            <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700">
              Arraste para reorganizar
            </Badge>
          </div>
        </div>
        <DraggableIndicators />
      </div>

      {/* Gráficos Principais - Lado a Lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Score 360° */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              Health Score 360°
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">Distribuição inteligente com insights acionáveis</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={healthScoreData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs text-gray-500 dark:text-gray-400" />
                <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--foreground)'
                  }}
                />
                <Area type="monotone" dataKey="score" stroke="#10B981" fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Segmentação de Clientes */}
        <CustomerSegmentChart />
      </div>

      {/* Segunda linha de gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendências Estratégicas */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              Tendências Estratégicas
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">Métricas-chave em tempo real</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={strategicTrendsData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="metric" className="text-xs text-gray-500 dark:text-gray-400" />
                <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--foreground)'
                  }}
                />
                <Bar dataKey="atual" fill="#8B5CF6" name="Atual" />
                <Bar dataKey="meta" fill="#EC4899" name="Meta" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Crescimento de Receita */}
        <RevenueGrowthChart />
      </div>

      {/* Gestão de Clientes - Largura Total */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Gestão de Clientes</CardTitle>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <Upload className="w-4 h-4 mr-2" />
                Importar
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                onClick={handleNavigateToClients}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Todos
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ClientsManagement />
        </CardContent>
      </Card>

      {/* Três colunas iguais */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assistente IA */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800 dark:text-blue-400 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Assistente IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Insights inteligentes e recomendações personalizadas baseadas em IA
            </p>
            <div className="space-y-2">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Última análise:</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Cliente TechCorp mostra sinais de expansão. Recomenda-se abordagem proativa."
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleNavigateToAutomation}
            >
              <Zap className="w-4 h-4 mr-2" />
              Acessar IA
            </Button>
          </CardContent>
        </Card>

        {/* Feedback CSAT Recente */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-800 dark:text-green-400 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Feedback CSAT Recente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 dark:text-green-300">4.7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Score médio</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Último feedback:</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Excelente atendimento e resultados mensuráveis."
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={handleNavigateToReports}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Ver Relatórios
            </Button>
          </CardContent>
        </Card>

        {/* Ações Recomendadas IA */}
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-purple-800 dark:text-purple-400 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Ações Recomendadas IA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-purple-200 dark:border-purple-600">
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">ALTA PRIORIDADE</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">Revisar conta BigCorp - Risco de churn</div>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-purple-200 dark:border-purple-600">
                <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">OPORTUNIDADE</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">Upsell Analytics Pro para 5 clientes</div>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={handleNavigateToStrategies}
            >
              <Target className="w-4 h-4 mr-2" />
              Ver Estratégias
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
