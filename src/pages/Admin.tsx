
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { UserManagement } from '../components/admin/UserManagement';
import { BillingManagement } from '../components/admin/BillingManagement';
import { AccountSettings } from '../components/admin/AccountSettings';
import { SecurityAudit } from '../components/admin/SecurityAudit';
import { IntegrationsAPI } from '../components/admin/IntegrationsAPI';
import { DataManagement } from '../components/admin/DataManagement';
import { AIAdvancedFeatures } from '../components/ai/AIAdvancedFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Settings, Users, CreditCard, Shield, Key, Database, Brain } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 transition-all duration-300 peer-data-[state=collapsed]:ml-20 ml-72 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Administração</h1>
            <p className="text-gray-600 dark:text-gray-300">Gerencie usuários, assinatura, segurança e configurações da conta</p>
          </div>
          
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="users" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Usuários</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Assinatura</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Configurações</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Segurança</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center space-x-2">
                <Key className="w-4 h-4" />
                <span className="hidden sm:inline">Integrações</span>
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span className="hidden sm:inline">Dados</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">IA Avançada</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <UserManagement />
            </TabsContent>

            <TabsContent value="billing">
              <BillingManagement />
            </TabsContent>

            <TabsContent value="settings">
              <AccountSettings />
            </TabsContent>

            <TabsContent value="security">
              <SecurityAudit />
            </TabsContent>

            <TabsContent value="integrations">
              <IntegrationsAPI />
            </TabsContent>

            <TabsContent value="data">
              <DataManagement />
            </TabsContent>

            <TabsContent value="ai">
              <AIAdvancedFeatures />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
