
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { PartnersTable } from './PartnersTable';
import { PartnerFilters } from './PartnerFilters';
import { PartnerStats } from './PartnerStats';
import { CommissionSimulator } from './CommissionSimulator';
import { Users, TrendingUp, DollarSign, Award } from 'lucide-react';

export const PartnersManagement = () => {
  const [filters, setFilters] = useState({
    type: '',
    level: '',
    status: '',
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Gestão de Parceiros</h2>
          <p className="text-muted-foreground">Gerencie todos os tipos de parceria e comissionamento</p>
        </div>
      </div>

      <PartnerStats />

      <Tabs defaultValue="partners" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="partners" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Parceiros</span>
          </TabsTrigger>
          <TabsTrigger value="commissions" className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Comissões</span>
          </TabsTrigger>
          <TabsTrigger value="simulator" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Simulador</span>
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Certificações</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="partners" className="space-y-6">
          <PartnerFilters filters={filters} onFiltersChange={setFilters} />
          <PartnersTable filters={filters} />
        </TabsContent>

        <TabsContent value="commissions">
          <Card>
            <CardHeader>
              <CardTitle>Relatório de Comissões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Visualização e controle de todas as comissões por parceiro, período e tipo.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="simulator">
          <CommissionSimulator />
        </TabsContent>

        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Certificações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Controle de certificações obrigatórias por tipo de parceria.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
