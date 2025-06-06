
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Users } from 'lucide-react';

const segmentData = [
  { name: 'Enterprise', value: 25, color: '#3B82F6', clients: 62 },
  { name: 'Growth', value: 35, color: '#8B5CF6', clients: 89 },
  { name: 'Professional', value: 40, color: '#EC4899', clients: 96 }
];

export const CustomerSegmentChart = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          Segmentação de Clientes
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">Distribuição por planos</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={segmentData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {segmentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: any, name: any, props: any) => [
              `${value}% (${props.payload.clients} clientes)`,
              name
            ]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
