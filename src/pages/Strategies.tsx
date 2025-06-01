
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { StrategiesManagement } from '../components/StrategiesManagement';

const Strategies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestão de Estratégias</h1>
            <p className="text-gray-600">Configure e acompanhe estratégias personalizadas para seus clientes</p>
          </div>
          
          <StrategiesManagement />
        </div>
      </main>
    </div>
  );
};

export default Strategies;
