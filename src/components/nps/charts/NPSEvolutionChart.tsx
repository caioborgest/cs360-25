
import React from 'react';
import { 
  ComposedChart, 
  Area, 
  Bar, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CustomTooltip } from './ChartComponents';

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

export const NPSEvolutionChart: React.FC = () => {
  return (
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
              yAxisId="left"
              tick={{ fontSize: 13, fontWeight: 500 }}
              axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
              domain={[0, 100]}
              tickLine={{ stroke: '#D1D5DB' }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 13, fontWeight: 500 }}
              axisLine={{ stroke: '#D1D5DB', strokeWidth: 2 }}
              tickLine={{ stroke: '#D1D5DB' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: '500' }} />
            <Area
              yAxisId="left"
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
              yAxisId="right"
              dataKey="responses" 
              fill="url(#barGradient)"
              name="Respostas"
              radius={[4, 4, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
