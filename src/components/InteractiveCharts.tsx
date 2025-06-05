
import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Cell } from 'recharts';
import { TrendingUp, Target, Activity, Zap } from 'lucide-react';

// Dados para Matriz de Risco
const riskMatrixData = [
  { ltv: 22, risk: 90, segment: 'Alto Risco', size: 45, color: '#EF4444' },
  { ltv: 24, risk: 85, segment: 'Alto Risco', size: 32, color: '#EF4444' },
  { ltv: 26, risk: 75, segment: 'Alto Risco', size: 28, color: '#EF4444' },
  { ltv: 28, risk: 60, segment: 'Médio Risco', size: 38, color: '#F59E0B' },
  { ltv: 30, risk: 45, segment: 'Médio Risco', size: 42, color: '#F59E0B' },
  { ltv: 32, risk: 30, segment: 'Baixo Risco', size: 35, color: '#10B981' },
  { ltv: 34, risk: 25, segment: 'Baixo Risco', size: 48, color: '#10B981' },
  { ltv: 36, risk: 15, segment: 'Baixo Risco', size: 52, color: '#10B981' },
  { ltv: 38, risk: 10, segment: 'Baixo Risco', size: 38, color: '#10B981' }
];

// Dados para Evolução do NPS
const npsData = [
  { month: 'Jan', value: 30 },
  { month: 'Fev', value: 33 },
  { month: 'Mar', value: 35 },
  { month: 'Abr', value: 38 },
  { month: 'Mai', value: 40 },
  { month: 'Jun', value: 37 },
  { month: 'Jul', value: 42 },
  { month: 'Ago', value: 45 },
  { month: 'Set', value: 47 },
  { month: 'Out', value: 44 },
  { month: 'Nov', value: 47 },
  { month: 'Dez', value: 50 }
];

// Dados para Health Score 360°
const healthScoreData = [
  { subject: 'Utilização', A: 91, B: 76, C: 55, fullMark: 100 },
  { subject: 'Satisfação', A: 88, B: 72, C: 48, fullMark: 100 },
  { subject: 'Suporte', A: 92, B: 78, C: 52, fullMark: 100 },
  { subject: 'Pagamentos', A: 95, B: 85, C: 62, fullMark: 100 },
  { subject: 'Engajamento', A: 89, B: 68, C: 45, fullMark: 100 },
  { subject: 'Crescimento', A: 93, B: 74, C: 58, fullMark: 100 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-200">
        <p className="font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const InteractiveCharts = () => {
  const [hoveredChart, setHoveredChart] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Matriz de Risco Inteligente */}
      <div 
        className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105"
        onMouseEnter={() => setHoveredChart('risk')}
        onMouseLeave={() => setHoveredChart(null)}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Matriz de Risco Inteligente</h3>
            <p className="text-sm text-gray-600">LTV vs Risco de Churn com Health Score</p>
          </div>
          <div className="flex items-center space-x-1 ml-auto">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live</span>
          </div>
        </div>

        <div className="relative h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart data={riskMatrixData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="ltv" tick={{ fontSize: 12 }} name="LTV (k)" />
              <YAxis dataKey="risk" tick={{ fontSize: 12 }} name="Risco %" />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="risk" fill="#8884d8">
                {riskMatrixData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    className={hoveredChart === 'risk' ? 'animate-pulse' : ''}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <div className="flex items-center text-xs bg-green-100 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Baixo Risco
            </div>
            <div className="flex items-center text-xs bg-yellow-100 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
              Médio Risco
            </div>
            <div className="flex items-center text-xs bg-red-100 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Alto Risco
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span>Tendência positiva detectada</span>
            </div>
            <span>Atualizado há 2min</span>
          </div>
        </div>
      </div>

      {/* Evolução do NPS com IA */}
      <div 
        className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105"
        onMouseEnter={() => setHoveredChart('nps')}
        onMouseLeave={() => setHoveredChart(null)}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Evolução do NPS com IA</h3>
            <p className="text-sm text-gray-600">Análise preditiva e tendências inteligentes</p>
          </div>
          <div className="flex items-center space-x-1 ml-auto">
            <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
          </div>
        </div>

        <div className="relative h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={npsData}>
              <defs>
                <linearGradient id="npsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                fill="url(#npsGradient)"
                className={hoveredChart === 'nps' ? 'animate-pulse' : ''}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-3 h-3 text-green-500" />
              <span>Tendência positiva detectada</span>
            </div>
            <span>Atualizado há 2min</span>
          </div>
        </div>
      </div>

      {/* Health Score 360° */}
      <div 
        className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105"
        onMouseEnter={() => setHoveredChart('health')}
        onMouseLeave={() => setHoveredChart(null)}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Health Score 360° por Nível</h3>
            <p className="text-sm text-gray-600">Análise multidimensional dos clientes</p>
          </div>
          <div className="flex items-center space-x-1 ml-auto">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live</span>
          </div>
        </div>

        <div className="relative h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={healthScoreData}>
              <defs>
                <linearGradient id="radarGradientA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="radarGradientB" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="radarGradientC" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6B7280" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#6B7280" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <PolarGrid gridType="polygon" stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" className="text-xs font-medium" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" tickCount={4} />
              <Radar 
                name="Nível A" 
                dataKey="A" 
                stroke="#3B82F6" 
                fill="url(#radarGradientA)" 
                strokeWidth={2} 
                dot={{ r: 3, fill: '#3B82F6' }}
                className={hoveredChart === 'health' ? 'animate-pulse' : ''}
              />
              <Radar 
                name="Nível B" 
                dataKey="B" 
                stroke="#10B981" 
                fill="url(#radarGradientB)" 
                strokeWidth={2} 
                dot={{ r: 3, fill: '#10B981' }}
              />
              <Radar 
                name="Nível C" 
                dataKey="C" 
                stroke="#6B7280" 
                fill="url(#radarGradientC)" 
                strokeWidth={2} 
                dot={{ r: 3, fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-blue-700">Nível A (91%)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700">Nível B (76%)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-gray-700">Nível C (55%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
