
import React from 'react';
import { DollarSign, Target, BarChart3, Calendar, TrendingUp, ArrowUp, ArrowDown, Settings } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { CircularProgress } from '../../CircularProgress';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, Area, BarChart } from 'recharts';
import { ltvCacData, cacAnalysisData } from '../data/ltvCacData';

interface OverviewTabProps {
  currentLTV: number;
  currentCAC: number;
  ltvCacRatio: number;
  ltvChange: number;
  cacChange: number;
  onConfigureParameters: () => void;
}

export const OverviewTab = ({
  currentLTV,
  currentCAC,
  ltvCacRatio,
  ltvChange,
  cacChange,
  onConfigureParameters
}: OverviewTabProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">LTV Médio</span>
              </div>
              <div className={`flex items-center space-x-1 ${ltvChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {ltvChange >= 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span className="text-sm font-medium">{ltvChange >= 0 ? '+' : ''}{ltvChange.toFixed(1)}%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CircularProgress value={75} color="green" size={60} />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentLTV / 1000).toFixed(0)}k</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lifetime Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-red-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">CAC Médio</span>
              </div>
              <div className={`flex items-center space-x-1 ${cacChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {cacChange <= 0 ? <ArrowDown className="w-4 h-4" /> : <ArrowUp className="w-4 h-4" />}
                <span className="text-sm font-medium">{cacChange >= 0 ? '+' : ''}{cacChange.toFixed(1)}%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CircularProgress value={85} color="red" size={60} />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">R$ {(currentCAC / 1000).toFixed(1)}k</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cost Acquisition</p>
                <Badge className="mt-1 bg-red-100 text-red-800">Foco Otimização</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Ratio LTV:CAC</span>
              </div>
              <div className="text-green-600">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CircularProgress value={Math.min(ltvCacRatio * 1.5, 100)} color="purple" size={60} />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{ltvCacRatio.toFixed(1)}:1</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ideal: &gt;3:1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Payback Period</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CircularProgress value={75} color="blue" size={60} />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">11 meses</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tempo Retorno</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Evolução LTV vs CAC com Destaque CAC</CardTitle>
              <Button onClick={onConfigureParameters} variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={ltvCacData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'ltv' || name === 'cac' ? `R$ ${value.toLocaleString()}` : value,
                    name === 'ltv' ? 'LTV' : name === 'cac' ? 'CAC' : name === 'ratio' ? 'Ratio' : 'Eficiência CAC'
                  ]}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="ltv" fill="#10B981" name="LTV" />
                <Bar yAxisId="left" dataKey="cac" fill="#EF4444" name="CAC" />
                <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="#8B5CF6" strokeWidth={3} name="Ratio LTV:CAC" />
                <Area yAxisId="right" dataKey="cacEfficiency" fill="#F59E0B" fillOpacity={0.3} stroke="#F59E0B" strokeWidth={2} name="Eficiência CAC %" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análise CAC por Canal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={cacAnalysisData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="channel" tick={{ fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'cac' ? `R$ ${value.toLocaleString()}` : 
                    name === 'efficiency' ? `${value}%` : value,
                    name === 'cac' ? 'CAC' : name === 'volume' ? 'Volume' : 'Eficiência'
                  ]}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="cac" fill="#EF4444" name="CAC" />
                <Bar dataKey="efficiency" fill="#10B981" name="Eficiência %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
