
import React from 'react';
import { Target, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { cacOptimizationSuggestions, ltvCacData } from '../data/ltvCacData';
import { getPriorityColor } from '../utils/colorUtils';

interface CACAnalysisTabProps {
  onOptimizeCAC: (channel: string) => void;
}

export const CACAnalysisTab = ({ onOptimizeCAC }: CACAnalysisTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-red-600" />
            <span>Oportunidades de Otimização CAC</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cacOptimizationSuggestions.map((suggestion, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Badge className={getPriorityColor(suggestion.priority)}>
                      {suggestion.priority === 'high' ? 'Alta' : suggestion.priority === 'medium' ? 'Média' : 'Baixa'}
                    </Badge>
                    <h4 className="font-medium text-gray-900 dark:text-white">{suggestion.channel}</h4>
                  </div>
                  <Button onClick={() => onOptimizeCAC(suggestion.channel)} size="sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Implementar
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">CAC Atual:</span>
                    <p className="font-medium text-red-600">R$ {suggestion.currentCAC.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">CAC Meta:</span>
                    <p className="font-medium text-green-600">R$ {suggestion.targetCAC.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Economia Potencial:</span>
                    <p className="font-medium text-blue-600">R$ {suggestion.potentialSaving.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Ação:</span>
                    <p className="font-medium text-gray-900 dark:text-white">{suggestion.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico Detalhado de CAC</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={ltvCacData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                formatter={(value, name) => [
                  `R$ ${value.toLocaleString()}`,
                  name === 'cac' ? 'CAC' : 'Target CAC'
                ]}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="cac" stroke="#EF4444" strokeWidth={4} name="CAC Real" dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} />
              <Line type="monotone" dataKey="ltv" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="LTV (Referência)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
