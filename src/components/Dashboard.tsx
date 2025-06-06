
import React from 'react';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { DashboardCharts } from './dashboard/DashboardCharts';
import { ClientsSection } from './dashboard/ClientsSection';
import { ActionsSection } from './dashboard/ActionsSection';

export const Dashboard = () => {
  return (
    <div className="space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      {/* Painel de Indicadores Flexíveis */}
      <DashboardHeader />

      {/* Gráficos Organizados - 2 por linha */}
      <DashboardCharts />

      {/* Gestão de Clientes - Largura Total */}
      <ClientsSection />

      {/* Três colunas iguais */}
      <ActionsSection />
    </div>
  );
};
