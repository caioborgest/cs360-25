
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

const revenueData = [
  { month: 'Jan', mrr: 420, arr: 5040, crescimento: 8.2 },
  { month: 'Fev', mrr: 445, arr: 5340, crescimento: 9.1 },
  { month: 'Mar', mrr: 465, arr: 5580, crescimento: 8.8 },
  { month: 'Abr', mrr: 485, arr: 5820, crescimento: 9.4 },
  { month: 'Mai', mrr: 512, arr: 6144, crescimento: 10.2 },
  { month: 'Jun', mrr: 535, arr: 6420, crescimento: 9.8 }
];

export const RevenueGrowthChart = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          Crescimento de Receita
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">MRR e crescimento mensal</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-xs text-gray-500 dark:text-gray-400" 
            />
            <YAxis 
              className="text-xs text-gray-500 dark:text-gray-400" 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="mrr" 
              stroke="#10B981" 
              strokeWidth={2}
              name="MRR (k)"
            />
            <Line 
              type="monotone" 
              dataKey="crescimento" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Crescimento %"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
