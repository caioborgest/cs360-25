
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, Scatter, BarChart, Bar, Cell, PieChart, Pie, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Target, Zap, Brain, BarChart3, Activity, Eye } from 'lucide-react';
import { Button } from './ui/button';

const npsData = [
  { month: 'Jan', value: 30, trend: 'up', events: 3 },
  { month: 'Fev', value: 35, trend: 'up', events: 2 },
  { month: 'Mar', value: 32, trend: 'down', events: 4 },
  { month: 'Abr', value: 38, trend: 'up', events: 1 },
  { month: 'Mai', value: 40, trend: 'up', events: 2 },
  { month: 'Jun', value: 37, trend: 'down', events: 3 },
  { month: 'Jul', value: 42, trend: 'up', events: 1 },
  { month: 'Ago', value: 45, trend: 'up', events: 2 },
  { month: 'Set', value: 48, trend: 'up', events: 1 },
  { month: 'Out', value: 44, trend: 'down', events: 2 },
  { month: 'Nov', value: 47, trend: 'up', events: 1 },
  { month: 'Dez', value: 50, trend: 'up', events: 0 }
];

const churnRiskData = [
  { ltv: 5, risk: 90, segment: 'A', size: 45, health: 20 },
  { ltv: 8, risk: 85, segment: 'A', size: 32, health: 25 },
  { ltv: 12, risk: 75, segment: 'B', size: 28, health: 35 },
  { ltv: 15, risk: 60, segment: 'B', size: 38, health: 50 },
  { ltv: 18, risk: 45, segment: 'B', size: 42, health: 65 },
  { ltv: 22, risk: 30, segment: 'C', size: 35, health: 75 },
  { ltv: 25, risk: 25, segment: 'C', size: 48, health: 80 },
  { ltv: 30, risk: 15, segment: 'C', size: 52, health: 90 },
  { ltv: 35, risk: 10, segment: 'C', size: 38, health: 95 }
];

const healthScoreData = [
  { range: '0-20', count: 8, label: 'Crítico', color: '#EF4444', percentage: 7.6 },
  { range: '21-40', count: 12, label: 'Risco', color: '#F97316', percentage: 11.4 },
  { range: '41-60', count: 22, label: 'Bom', color: '#EAB308', percentage: 21.0 },
  { range: '61-80', count: 35, label: 'Excelente', color: '#3B82F6', percentage: 33.3 },
  { range: '81-100', count: 28, label: 'Sucesso', color: '#10B981', percentage: 26.7 }
];

const realtimeData = [
  { time: '09:00', active: 45, interactions: 23, satisfaction: 8.2 },
  { time: '10:00', active: 52, interactions: 31, satisfaction: 8.5 },
  { time: '11:00', active: 48, interactions: 28, satisfaction: 8.1 },
  { time: '12:00', active: 38, interactions: 19, satisfaction: 7.8 },
  { time: '13:00', active: 42, interactions: 25, satisfaction: 8.3 },
  { time: '14:00', active: 55, interactions: 34, satisfaction: 8.7 },
  { time: '15:00', active: 49, interactions: 29, satisfaction: 8.4 }
];

interface EnhancedChartsSectionProps {
  visibleCharts: string[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
        <p className="font-medium text-slate-900 dark:text-white">{label}</p>
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

export const EnhancedChartsSection: React.FC<EnhancedChartsSectionProps> = ({ visibleCharts }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('12M');
  const [isRealtime, setIsRealtime] = useState(false);

  const charts = [
    {
      id: 'nps-evolution',
      title: 'Evolução do NPS com IA',
      subtitle: 'Análise preditiva e tendências inteligentes',
      icon: Brain,
      component: (
        <div className="relative h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={npsData}>
              <defs>
                <linearGradient id="npsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="opacity-30" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fill="url(#npsGradient)"
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="absolute top-4 right-4 bg-blue-500/10 backdrop-blur-sm rounded-lg p-2">
            <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
          </div>
        </div>
      )
    },
    {
      id: 'churn-risk',
      title: 'Matriz de Risco Inteligente',
      subtitle: 'LTV vs Risco de Churn com Health Score',
      icon: Target,
      component: (
        <div className="relative h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart data={churnRiskData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="opacity-30" />
              <XAxis dataKey="ltv" tick={{ fontSize: 12, fill: '#64748B' }} name="LTV (k)" />
              <YAxis dataKey="risk" tick={{ fontSize: 12, fill: '#64748B' }} name="Risco %" />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="risk" fill="#8884d8">
                {churnRiskData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.health > 70 ? '#10B981' : entry.health > 40 ? '#F59E0B' : '#EF4444'}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <div className="flex items-center text-xs bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Baixo Risco
            </div>
            <div className="flex items-center text-xs bg-yellow-100 dark:bg-yellow-900/20 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
              Médio Risco
            </div>
            <div className="flex items-center text-xs bg-red-100 dark:bg-red-900/20 px-2 py-1 rounded">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Alto Risco
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'health-distribution',
      title: 'Health Score 360°',
      subtitle: 'Distribuição inteligente com insights acionáveis',
      icon: Activity,
      component: (
        <div className="relative h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                {healthScoreData.map((entry, index) => (
                  <linearGradient key={index} id={`healthGradient${index}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={entry.color} />
                    <stop offset="100%" stopColor={entry.color} stopOpacity={0.7} />
                  </linearGradient>
                ))}
              </defs>
              <Pie
                data={healthScoreData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                dataKey="count"
                label={({ label, percentage }) => `${label} ${percentage}%`}
              >
                {healthScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#healthGradient${index})`} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">86.2</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Score Médio</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'realtime-activity',
      title: 'Atividade em Tempo Real',
      subtitle: 'Monitor de engajamento e satisfação ao vivo',
      icon: Activity,
      component: (
        <div className="relative h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={realtimeData}>
              <defs>
                <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="interactionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="opacity-30" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="active" stackId="1" stroke="#10B981" fill="url(#activeGradient)" strokeWidth={2} />
              <Area type="monotone" dataKey="interactions" stackId="2" stroke="#8B5CF6" fill="url(#interactionGradient)" strokeWidth={2} />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-lg px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">AO VIVO</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const visibleChartsToShow = charts.filter(chart => visibleCharts.includes(chart.id));

  if (visibleChartsToShow.length === 0) return null;

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="flex items-center justify-between bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Análise Visual Inteligente</h2>
          <div className="flex items-center space-x-2 bg-blue-500/10 rounded-lg px-3 py-1">
            <Brain className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">IA Ativada</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant={isRealtime ? "default" : "outline"}
            size="sm"
            onClick={() => setIsRealtime(!isRealtime)}
            className="flex items-center space-x-2"
          >
            <Activity className="w-4 h-4" />
            <span>Tempo Real</span>
          </Button>
          <div className="flex space-x-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            {['3M', '6M', '12M'].map(period => (
              <button
                key={period}
                onClick={() => setSelectedTimeframe(period)}
                className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
                  selectedTimeframe === period
                    ? 'bg-white dark:bg-slate-600 text-blue-600 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visibleChartsToShow.map((chart) => (
          <div key={chart.id} className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <chart.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{chart.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{chart.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                </Button>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Chart Content */}
            {chart.component}

            {/* Footer Insights */}
            <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span>Tendência positiva detectada</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>Atualizado há</span>
                  <span className="text-blue-500 font-medium">2min</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
