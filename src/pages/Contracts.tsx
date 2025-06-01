
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { ContractsManagement } from '../components/ContractsManagement';

const Contracts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestão de Contratos</h1>
            <p className="text-gray-600">Monitore e gerencie todos os contratos e renovações</p>
          </div>
          
          <ContractsManagement />
        </div>
      </main>
    </div>
  );
};

export default Contracts;
