
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { 
  BarChart,
  Bar, 
  Cell,
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { goalsProgressChartData } from '../data/goalsData';

export const GoalsProgressBarChart: React.FC = () => {
  return (
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
  );
};
