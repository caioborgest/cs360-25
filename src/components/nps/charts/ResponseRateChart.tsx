
import React from 'react';
import { ComposedChart, Bar, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CustomTooltip } from './ChartComponents';

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

export const ResponseRateChart: React.FC = () => {
  return (
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
            <YAxis 
              yAxisId="left" 
              tick={{ fontSize: 13, fontWeight: 500 }} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              tick={{ fontSize: 13, fontWeight: 500 }} 
            />
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
  );
};
