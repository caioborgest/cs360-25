
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { UserManagement } from '../components/admin/UserManagement';
import { AccountSettings } from '../components/admin/AccountSettings';
import { BillingManagement } from '../components/admin/BillingManagement';
import { IntegrationsAPI } from '../components/admin/IntegrationsAPI';
import { SecurityAudit } from '../components/admin/SecurityAudit';
import { DataManagement } from '../components/admin/DataManagement';
import { AdvancedSettings } from '../components/admin/AdvancedSettings';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { 
  Shield, 
  Users, 
  Settings, 
  CreditCard, 
  Zap, 
  Database,
  Lock,
  Palette,
  TrendingUp,
  AlertTriangle,
  Activity
} from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-hidden">
        <Header />
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Administração</h1>
                  <Badge variant="outline" className="text-blue-600">Acesso Admin</Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Painel completo de administração da conta - Gestão de usuários, configurações e segurança
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Sistema Ativo</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-2">
                  <Activity className="w-3 h-3" />
                  <span>12 usuários online</span>
                </Badge>
              </div>
            </div>
            
            <Tabs defaultValue="users" className="space-y-6">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="users" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Usuários</span>
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center space-x-2">
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Personalização</span>
                </TabsTrigger>
                <TabsTrigger value="account" className="flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Conta</span>
                </TabsTrigger>
                <TabsTrigger value="billing" className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="hidden sm:inline">Faturamento</span>
                </TabsTrigger>
                <TabsTrigger value="integrations" className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span className="hidden sm:inline">Integrações</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span className="hidden sm:inline">Segurança</span>
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center space-x-2">
                  <Database className="w-4 h-4" />
                  <span className="hidden sm:inline">Dados</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="users">
                <UserManagement />
              </TabsContent>

              <TabsContent value="advanced">
                <AdvancedSettings />
              </TabsContent>

              <TabsContent value="account">
                <AccountSettings />
              </TabsContent>

              <TabsContent value="billing">
                <BillingManagement />
              </TabsContent>

              <TabsContent value="integrations">
                <IntegrationsAPI />
              </TabsContent>

              <TabsContent value="security">
                <SecurityAudit />
              </TabsContent>

              <TabsContent value="data">
                <DataManagement />
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Admin;
