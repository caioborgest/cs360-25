
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { CustomTooltip } from './ChartComponents';

const categoryData = [
  { category: 'Onboarding', score: 82, total: 45 },
  { category: 'Interface', score: 78, total: 67 },
  { category: 'Suporte', score: 92, total: 89 },
  { category: 'Preço', score: 65, total: 34 },
  { category: 'Recursos', score: 85, total: 78 },
  { category: 'Performance', score: 88, total: 56 }
];

export const CategoryPerformanceChart: React.FC = () => {
  return (
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
  );
};
