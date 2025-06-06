
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GoalsDashboard } from './GoalsDashboard';
import { GoalsCreation } from './GoalsCreation';
import { GoalsTracking } from './GoalsTracking';
import { GoalsTeam } from './GoalsTeam';
import { GoalsReports } from './GoalsReports';
import { GoalsSettings } from './GoalsSettings';
import { 
  Target, 
  Plus, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Settings,
  Goal,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '../ui/button';

export const GoalsManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Goal className="w-6 h-6 text-white" />
            </div>
            <span>Gestão de Metas</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Defina, acompanhe e alcance suas metas de Customer Success
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Relatório Geral</span>
          </Button>
          <Button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500">
            <Plus className="w-4 h-4" />
            <span>Nova Meta</span>
          </Button>
        </div>
      </div>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Metas Ativas</p>
                <p className="text-3xl font-bold text-green-700">24</p>
                <p className="text-xs text-green-600 mt-1">+3 este mês</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Taxa de Conclusão</p>
                <p className="text-3xl font-bold text-blue-700">87%</p>
                <p className="text-xs text-blue-600 mt-1">+5% vs mês anterior</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Colaboradores</p>
                <p className="text-3xl font-bold text-purple-700">156</p>
                <p className="text-xs text-purple-600 mt-1">Envolvidos</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Metas Vencendo</p>
                <p className="text-3xl font-bold text-orange-700">7</p>
                <p className="text-xs text-orange-600 mt-1">Próximos 30 dias</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 bg-white shadow-sm">
          <TabsTrigger value="dashboard" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="creation" className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Criar Metas</span>
          </TabsTrigger>
          <TabsTrigger value="tracking" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Acompanhamento</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Equipe</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Relatórios</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Configurações</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <GoalsDashboard />
        </TabsContent>

        <TabsContent value="creation">
          <GoalsCreation />
        </TabsContent>

        <TabsContent value="tracking">
          <GoalsTracking />
        </TabsContent>

        <TabsContent value="team">
          <GoalsTeam />
        </TabsContent>

        <TabsContent value="reports">
          <GoalsReports />
        </TabsContent>

        <TabsContent value="settings">
          <GoalsSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};
