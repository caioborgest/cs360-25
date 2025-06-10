
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';
import { 
  BarChart3, 
  Eye, 
  Download, 
  RefreshCw,
  Zap,
  Brain,
  Target
} from 'lucide-react';

interface AnalyticsChartsProps {
  visibleCharts: string[];
}

// Dados para os gráficos
const healthScoreData = [
  { name: 'Excelente', value: 35, color: '#10B981' },
  { name: 'Bom', value: 28, color: '#3B82F6' },
  { name: 'Regular', value: 22, color: '#F59E0B' },
  { name: 'Crítico', value: 15, color: '#EF4444' }
];

const distributionData = [
  { name: 'Enterprise', value: 25, color: '#8B5CF6' },
  { name: 'Mid-Market', value: 35, color: '#10B981' },
  { name: 'SMB', value: 30, color: '#F59E0B' },
  { name: 'Startup', value: 10, color: '#EF4444' }
];

const radarData = [
  { dimension: 'Engajamento', score: 85 },
  { dimension: 'Adoção', score: 78 },
  { dimension: 'Suporte', score: 92 },
  { dimension: 'Satisfação', score: 88 },
  { dimension: 'Crescimento', score: 75 },
  { dimension: 'Retenção', score: 90 }
];

const opportunitiesData = [
  { name: 'Upsell', value: 45, color: '#10B981' },
  { name: 'Cross-sell', value: 25, color: '#3B82F6' },
  { name: 'Renovação', value: 30, color: '#F59E0B' }
];

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({ visibleCharts }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Avançado</h2>
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
            <Zap className="w-3 h-3 mr-1" />
            IA Powered
          </Badge>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Distribuição de Receita Inteligente */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg text-gray-900 dark:text-white">
                Distribuição de Receita Inteligente
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Por segmento de clientes
              </p>
            </div>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }} />
                    <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Score 360° por Nível */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg text-gray-900 dark:text-white">
                Health Score 360° por Nível
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Distribuição multidimensional
              </p>
            </div>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis 
                  dataKey="dimension" 
                  tick={{ fontSize: 10, fill: '#6B7280' }}
                />
                <PolarRadiusAxis 
                  domain={[0, 100]} 
                  tick={{ fontSize: 8 }}
                  tickCount={4}
                />
                <Radar
                  name="Health Score"
                  dataKey="score"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <div className="text-3xl font-bold text-purple-600">86.2</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Score Médio</div>
            </div>
          </CardContent>
        </Card>

        {/* Oportunidades Estratégicas */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg text-gray-900 dark:text-white">
                Oportunidades Estratégicas
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Potencial de crescimento
              </p>
            </div>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={opportunitiesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
                >
                  {opportunitiesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-3">
              {opportunitiesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }} />
                    <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900 dark:text-white">{item.value}%</div>
                    <div className="text-xs text-gray-500">do pipeline</div>
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
