
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { LTVCACManagement } from '../components/LTVCACManagement';

const LTVCAC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">LTV & CAC Analysis</h1>
            <p className="text-gray-600 dark:text-gray-300">Acompanhe Lifetime Value e Custo de Aquisição com modelos flexíveis de cálculo</p>
          </div>
          
          <LTVCACManagement />
        </div>
      </main>
    </div>
  );
};

export default LTVCAC;
