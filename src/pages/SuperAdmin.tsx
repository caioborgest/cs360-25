
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { SuperAdminDashboard } from '../components/super-admin/SuperAdminDashboard';
import { AccountsManagement } from '../components/super-admin/AccountsManagement';
import { PartnersManagement } from '../components/super-admin/PartnersManagement';
import { RevenueManagement } from '../components/super-admin/RevenueManagement';
import { SystemSettings } from '../components/super-admin/SystemSettings';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  Building2, 
  Handshake, 
  DollarSign, 
  Settings, 
  Users,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const SuperAdmin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-8 h-8 text-red-600" />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Super Administrador</h1>
                <Badge variant="destructive" className="text-xs">ACESSO RESTRITO</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Painel de controle exclusivo da equipe CS360° - Gestão completa do SaaS
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Sistema Online</span>
              </Badge>
            </div>
          </div>
          
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="accounts" className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Contas</span>
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center space-x-2">
                <Handshake className="w-4 h-4" />
                <span className="hidden sm:inline">Parceiros</span>
              </TabsTrigger>
              <TabsTrigger value="revenue" className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span className="hidden sm:inline">Receita</span>
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Sistema</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <SuperAdminDashboard />
            </TabsContent>

            <TabsContent value="accounts">
              <AccountsManagement />
            </TabsContent>

            <TabsContent value="partners">
              <PartnersManagement />
            </TabsContent>

            <TabsContent value="revenue">
              <RevenueManagement />
            </TabsContent>

            <TabsContent value="system">
              <SystemSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SuperAdmin;
