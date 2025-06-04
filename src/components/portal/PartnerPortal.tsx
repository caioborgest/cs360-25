
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { PartnerDashboard } from './PartnerDashboard';
import { PartnerReferrals } from './PartnerReferrals';
import { PartnerCommissions } from './PartnerCommissions';
import { PartnerCertifications } from './PartnerCertifications';
import { PartnerSupport } from './PartnerSupport';
import { BarChart3, Users, DollarSign, Award, MessageCircle } from 'lucide-react';

export const PartnerPortal = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Portal do Parceiro</h1>
          <p className="text-muted-foreground">Bem-vindo ao seu painel de controle</p>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="referrals" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Indicações</span>
          </TabsTrigger>
          <TabsTrigger value="commissions" className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Comissões</span>
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Certificações</span>
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Suporte</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <PartnerDashboard />
        </TabsContent>

        <TabsContent value="referrals">
          <PartnerReferrals />
        </TabsContent>

        <TabsContent value="commissions">
          <PartnerCommissions />
        </TabsContent>

        <TabsContent value="certifications">
          <PartnerCertifications />
        </TabsContent>

        <TabsContent value="support">
          <PartnerSupport />
        </TabsContent>
      </Tabs>
    </div>
  );
};
