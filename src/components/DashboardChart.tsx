
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DashboardChartProps {
  title: string;
  type: 'line' | 'area' | 'bar' | 'pie';
  data: any[];
  dataKey?: string;
  xAxisKey?: string;
  color?: string;
  height?: number;
}

export const DashboardChart: React.FC<DashboardChartProps> = ({
  title,
  type,
  data,
  dataKey = 'value',
  xAxisKey = 'name',
  color = '#3B82F6',
  height = 300
}) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey={xAxisKey} className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgb(255 255 255 / 0.95)', 
                border: '1px solid rgb(229 231 235)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={3}
              dot={{ fill: color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        );
      
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey={xAxisKey} className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgb(255 255 255 / 0.95)', 
                border: '1px solid rgb(229 231 235)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              fill={color}
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey={xAxisKey} className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgb(255 255 255 / 0.95)', 
                border: '1px solid rgb(229 231 235)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }} 
            />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      
      case 'pie':
        const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {renderChart()}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
