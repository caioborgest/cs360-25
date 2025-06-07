
import React from 'react';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { DashboardCharts } from './dashboard/DashboardCharts';
import { ClientsSection } from './dashboard/ClientsSection';
import { ActionsSection } from './dashboard/ActionsSection';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Painel de Indicadores Flexíveis */}
        <DashboardHeader />

        {/* Gráficos Organizados - 2 por linha em desktop, 1 em mobile */}
        <DashboardCharts />

        {/* Gestão de Clientes - Largura Total */}
        <ClientsSection />

        {/* Três colunas iguais em desktop, stack em mobile */}
        <ActionsSection />
      </div>
    </div>
  );
};
