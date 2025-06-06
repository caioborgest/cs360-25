
import React, { useState } from 'react';
import { Download, Filter, Target, AlertTriangle, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { OverviewTab } from './ltvcac/tabs/OverviewTab';
import { CACAnalysisTab } from './ltvcac/tabs/CACAnalysisTab';
import { SegmentsTab } from './ltvcac/tabs/SegmentsTab';
import { RankingTab } from './ltvcac/tabs/RankingTab';
import { CohortTab } from './ltvcac/tabs/CohortTab';
import { CalculatorTab } from './ltvcac/tabs/CalculatorTab';

export const LTVCACManagement = () => {
  const [timeFilter, setTimeFilter] = useState('12M');
  const [segmentFilter, setSegmentFilter] = useState('Todos');
  const [viewMode, setViewMode] = useState('overview');
  const [calculationModel, setCalculationModel] = useState(1);
  const [showCACOptimization, setShowCACOptimization] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const currentLTV = 148000;
  const currentCAC = 2450;
  const ltvCacRatio = (currentLTV / currentCAC);
  const previousLTV = 142000;
  const previousCAC = 2600;
  const ltvChange = ((currentLTV - previousLTV) / previousLTV) * 100;
  const cacChange = ((currentCAC - previousCAC) / previousCAC) * 100;

  const handleExportData = () => {
    console.log('Exportando dados LTV/CAC...');
  };

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
    console.log('Mostrando/ocultando filtros');
  };

  const handleConfigureParameters = () => {
    console.log('Configurando parâmetros de cálculo');
  };

  const handleOptimizeCAC = (channel: string) => {
    console.log(`Otimizando CAC para canal: ${channel}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">LTV & CAC Analysis</h2>
          <p className="text-gray-600 dark:text-gray-300">Análise avançada de Lifetime Value e Custo de Aquisição</p>
        </div>
        <div className="flex space-x-2">
          <Button onClick={handleExportData} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={handleShowFilters} variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button onClick={() => setShowCACOptimization(true)} size="sm">
            <Target className="w-4 h-4 mr-2" />
            Otimizar CAC
          </Button>
        </div>
      </div>

      {showFilters && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg">Filtros Avançados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Período</label>
                <select 
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="3M">3 Meses</option>
                  <option value="6M">6 Meses</option>
                  <option value="12M">12 Meses</option>
                  <option value="24M">24 Meses</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Segmento</label>
                <select 
                  value={segmentFilter}
                  onChange={(e) => setSegmentFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                >
                  <option value="Todos">Todos</option>
                  <option value="Nível A">Nível A</option>
                  <option value="Nível B">Nível B</option>
                  <option value="Nível C">Nível C</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Canal de Aquisição</label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                  <option value="all">Todos os Canais</option>
                  <option value="google">Google Ads</option>
                  <option value="facebook">Facebook Ads</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="organic">Orgânico</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button onClick={() => setShowFilters(false)} variant="outline" className="w-full">
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={viewMode} onValueChange={setViewMode} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="cac-analysis">Análise CAC</TabsTrigger>
          <TabsTrigger value="segments">Por Segmento</TabsTrigger>
          <TabsTrigger value="ranking">Ranking</TabsTrigger>
          <TabsTrigger value="cohort">Cohort</TabsTrigger>
          <TabsTrigger value="calculator">Calculadora</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab
            currentLTV={currentLTV}
            currentCAC={currentCAC}
            ltvCacRatio={ltvCacRatio}
            ltvChange={ltvChange}
            cacChange={cacChange}
            onConfigureParameters={handleConfigureParameters}
          />
        </TabsContent>

        <TabsContent value="cac-analysis">
          <CACAnalysisTab onOptimizeCAC={handleOptimizeCAC} />
        </TabsContent>

        <TabsContent value="segments">
          <SegmentsTab
            segmentFilter={segmentFilter}
            onSegmentFilterChange={setSegmentFilter}
          />
        </TabsContent>

        <TabsContent value="ranking">
          <RankingTab />
        </TabsContent>

        <TabsContent value="cohort">
          <CohortTab />
        </TabsContent>

        <TabsContent value="calculator">
          <CalculatorTab
            calculationModel={calculationModel}
            onCalculationModelChange={setCalculationModel}
          />
        </TabsContent>
      </Tabs>

      {showCACOptimization && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Centro de Otimização CAC</CardTitle>
                <Button onClick={() => setShowCACOptimization(false)} variant="ghost" size="sm">
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">CAC Médio Atual</p>
                    <p className="text-2xl font-bold text-red-600">R$ 2.450</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">CAC Meta</p>
                    <p className="text-2xl font-bold text-green-600">R$ 2.000</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Economia Potencial</p>
                    <p className="text-2xl font-bold text-blue-600">R$ 43.400</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Implementar Todas
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Simular Impacto
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
