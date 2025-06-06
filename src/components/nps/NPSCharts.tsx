
import React from 'react';
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
  AreaChart,
  ComposedChart
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const npsEvolutionData = [
  { month: 'Jan', score: 60, responses: 45, promoters: 65, passives: 25, detractors: 10 },
  { month: 'Fev', score: 65, responses: 52, promoters: 68, passives: 22, detractors: 10 },
  { month: 'Mar', score: 63, responses: 48, promoters: 66, passives: 24, detractors: 10 },
  { month: 'Abr', score: 67, responses: 58, promoters: 70, passives: 20, detractors: 10 },
  { month: 'Mai', score: 70, responses: 61, promoters: 72, passives: 18, detractors: 10 },
  { month: 'Jun', score: 75, responses: 67, promoters: 75, passives: 20, detractors: 5 },
  { month: 'Jul', score: 72, responses: 54, promoters: 73, passives: 22, detractors: 5 },
  { month: 'Ago', score: 73, responses: 59, promoters: 74, passives: 21, detractors: 5 },
  { month: 'Set', score: 75, responses: 63, promoters: 76, passives: 19, detractors: 5 },
  { month: 'Out', score: 78, responses: 71, promoters: 78, passives: 17, detractors: 5 },
  { month: 'Nov', score: 82, responses: 78, promoters: 82, passivos: 15, detractors: 3 },
  { month: 'Dez', score: 85, responses: 89, promoters: 85, passives: 12, detractors: 3 }
];

const segmentData = [
  { segment: 'Nível A', score: 88, count: 25 },
  { segment: 'Nível B', score: 76, count: 42 },
  { segment: 'Nível C', score: 65, count: 18 },
  { segment: 'Novos', score: 72, count: 15 },
  { segment: 'Ativos', score: 83, count: 67 },
  { segment: 'Em Risco', score: 45, count: 8 }
];

const categoryData = [
  { category: 'Onboarding', score: 82, total: 45 },
  { category: 'Interface', score: 78, total: 67 },
  { category: 'Suporte', score: 92, total: 89 },
  { category: 'Preço', score: 65, total: 34 },
  { category: 'Recursos', score: 85, total: 78 },
  { category: 'Performance', score: 88, total: 56 }
];

const responseData = [
  { month: 'Jan', sent: 120, responses: 45, rate: 37.5 },
  { month: 'Fev', sent: 135, responses: 52, rate: 38.5 },
  { month: 'Mar', sent: 128, responses: 48, rate: 37.5 },
  { month: 'Abr', sent: 145, responses: 58, rate: 40.0 },
  { month: 'Mai', sent: 150, responses: 61, rate: 40.7 },
  { month: 'Jun', sent: 160, responses: 67, rate: 41.9 },
  { month: 'Jul', sent: 142, responses: 54, rate: 38.0 },
  { month: 'Ago', sent: 155, responses: 59, rate: 38.1 },
  { month: 'Set', sent: 168, responses: 63, rate: 37.5 },
  { month: 'Out', sent: 180, responses: 71, rate: 39.4 },
  { month: 'Nov', sent: 185, responses: 78, rate: 42.2 },
  { month: 'Dez', sent: 195, responses: 89, rate: 45.6 }
];

const COLORS = {
  promoters: '#10B981',
  passives: '#F59E0B', 
  detractors: '#EF4444',
  primary: '#3B82F6',
  secondary: '#8B5CF6'
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 border rounded-xl shadow-2xl border-gray-200 dark:border-gray-600">
        <p className="font-semibold text-gray-900 dark:text-white mb-2">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm font-medium">
            {`${entry.dataKey}: ${entry.value}${entry.dataKey === 'rate' ? '%' : ''}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const NPSCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* NPS Evolution with Enhanced Visuals */}
      <Card className="lg:col-span-2 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Evolução do NPS Score
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={npsEvolutionData}>
              <defs>
                <linearGradient id="npsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
                </linearGradient>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 13, fontWeight: 500 }}
                axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
                tickLine={{ stroke: '#D1D5DB' }}
              />
              <YAxis 
                tick={{ fontSize: 13, fontWeight: 500 }}
                axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
                domain={[0, 100]}
                tickLine={{ stroke: '#D1D5DB' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '500' }} />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#3B82F6"
                strokeWidth={4}
                fill="url(#npsGradient)"
                name="NPS Score"
                dot={{ fill: '#3B82F6', strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 3, fill: '#fff' }}
              />
              <Bar 
                dataKey="responses" 
                fill="url(#barGradient)"
                name="Respostas"
                radius={[4, 4, 0, 0]}
                yAxisId="right"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* NPS by Segment with Enhanced Design */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg"></div>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              NPS por Segmento
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={segmentData} layout="horizontal">
              <defs>
                <linearGradient id="segmentGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.9}/>
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.9}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 13, fontWeight: 500 }} />
              <YAxis 
                type="category" 
                dataKey="segment" 
                tick={{ fontSize: 13, fontWeight: 500 }}
                width={90}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="score" 
                fill="url(#segmentGradient)"
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Response Rate with Enhanced Visuals */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Taxa de Resposta
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={responseData}>
              <defs>
                <linearGradient id="sentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E5E7EB" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F3F4F6" stopOpacity={0.6}/>
                </linearGradient>
                <linearGradient id="responseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0.7}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis dataKey="month" tick={{ fontSize: 13, fontWeight: 500 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 13, fontWeight: 500 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 13, fontWeight: 500 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '15px', fontSize: '13px', fontWeight: '500' }} />
              <Bar 
                yAxisId="left"
                dataKey="sent" 
                fill="url(#sentGradient)"
                name="Enviadas"
                radius={[3, 3, 0, 0]}
              />
              <Bar 
                yAxisId="left"
                dataKey="responses" 
                fill="url(#responseGradient)"
                name="Respostas"
                radius={[3, 3, 0, 0]}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="rate" 
                stroke="#F59E0B" 
                strokeWidth={4}
                name="Taxa (%)"
                dot={{ fill: '#F59E0B', strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 3, fill: '#fff' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Performance with Enhanced Design */}
      <Card className="lg:col-span-2 shadow-lg border-0 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"></div>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Performance por Categoria
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={categoryData}>
              <defs>
                <linearGradient id="categoryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.9}/>
                  <stop offset="50%" stopColor="#FB923C" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.9}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis 
                dataKey="category" 
                tick={{ fontSize: 13, fontWeight: 500 }}
                angle={-45}
                textAnchor="end"
                height={90}
              />
              <YAxis 
                tick={{ fontSize: 13, fontWeight: 500 }}
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="score" 
                fill="url(#categoryGradient)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
