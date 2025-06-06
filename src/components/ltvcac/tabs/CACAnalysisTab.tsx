
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Target, AlertTriangle, Zap } from 'lucide-react';
import { cacAnalysisData, cacOptimizationSuggestions } from '../data/ltvCacData';

interface CACAnalysisTabProps {
  onOptimizeCAC: (channel: string) => void;
}

export const CACAnalysisTab: React.FC<CACAnalysisTabProps> = ({ onOptimizeCAC }) => {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [showOptimizations, setShowOptimizations] = useState(false);

  const cacHistoryData = [
    { month: 'Jan', google: 2800, facebook: 3200, linkedin: 4500, organic: 800, referral: 1200 },
    { month: 'Fev', google: 2750, facebook: 3100, linkedin: 4300, organic: 750, referral: 1150 },
    { month: 'Mar', google: 2900, facebook: 3400, linkedin: 4600, organic: 850, referral: 1300 },
    { month: 'Abr', google: 2650, facebook: 3000, linkedin: 4200, organic: 700, referral: 1100 },
    { month: 'Mai', google: 2600, facebook: 2950, linkedin: 4100, organic: 680, referral: 1080 },
    { month: 'Jun', google: 2450, facebook: 2800, linkedin: 3900, organic: 650, referral: 1000 }
  ];

  const handleOptimizeChannel = (channel: string) => {
    setSelectedChannel(channel);
    setShowOptimizations(true);
    onOptimizeCAC(channel);
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header com Ações */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Análise Detalhada de CAC</h3>
          <p className="text-gray-600 dark:text-gray-300">Histórico, tendências e otimizações por canal</p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => setShowOptimizations(true)} variant="outline">
            <Target className="w-4 h-4 mr-2" />
            Ver Otimizações
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            Implementar IA
          </Button>
        </div>
      </div>

      {/* Cards de Canais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cacAnalysisData.map((channel) => (
          <Card key={channel.channel} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{channel.channel}</CardTitle>
                {getTrendIcon(channel.trend)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">CAC Atual</p>
                <p className="text-2xl font-bold text-blue-600">R$ {channel.cac.toLocaleString()}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="text-gray-500 dark:text-gray-400">Volume</p>
                  <p className="font-semibold">{channel.volume}%</p>
                </div>
                <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="text-gray-500 dark:text-gray-400">Eficiência</p>
                  <p className="font-semibold">{channel.efficiency}%</p>
                </div>
              </div>

              <Button 
                onClick={() => handleOptimizeChannel(channel.channel)}
                variant="outline" 
                className="w-full"
              >
                <Target className="w-4 h-4 mr-2" />
                Otimizar Canal
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráfico de Histórico CAC */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de CAC por Canal</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={cacHistoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="google" stroke="#4285F4" strokeWidth={2} name="Google Ads" />
              <Line type="monotone" dataKey="facebook" stroke="#1877F2" strokeWidth={2} name="Facebook Ads" />
              <Line type="monotone" dataKey="linkedin" stroke="#0A66C2" strokeWidth={2} name="LinkedIn" />
              <Line type="monotone" dataKey="organic" stroke="#34A853" strokeWidth={2} name="Orgânico" />
              <Line type="monotone" dataKey="referral" stroke="#FF6B35" strokeWidth={2} name="Referral" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Análise Comparativa */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Comparativa de Eficiência</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cacAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="cac" fill="#3B82F6" name="CAC (R$)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="efficiency" fill="#10B981" name="Eficiência (%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Modal de Otimizações */}
      {showOptimizations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Oportunidades de Otimização CAC</CardTitle>
                <Button onClick={() => setShowOptimizations(false)} variant="ghost" size="sm">×</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {cacOptimizationSuggestions.map((suggestion, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{suggestion.channel}</h4>
                    <Badge className={
                      suggestion.priority === 'high' ? 'bg-red-100 text-red-800' :
                      suggestion.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {suggestion.priority === 'high' ? 'Alta' : 
                       suggestion.priority === 'medium' ? 'Média' : 'Baixa'} Prioridade
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">CAC Atual</p>
                      <p className="text-lg font-bold text-red-600">R$ {suggestion.currentCAC.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">CAC Meta</p>
                      <p className="text-lg font-bold text-green-600">R$ {suggestion.targetCAC.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Economia Potencial</p>
                      <p className="text-lg font-bold text-blue-600">R$ {suggestion.potentialSaving.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Ação Recomendada:</h5>
                    <p className="text-gray-600 dark:text-gray-400">{suggestion.action}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Implementar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Target className="w-4 h-4 mr-2" />
                      Simular
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
