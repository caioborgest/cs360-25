
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { ContractsManagement } from '../components/ContractsManagement';

const Contracts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex transition-colors">
      <Sidebar />
      <div className="flex-1 transition-all duration-300 ml-72 peer-data-[state=collapsed]:ml-20">
        <Header />
        <main className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Gestão de Contratos</h1>
            <p className="text-gray-600 dark:text-gray-400">Monitore e gerencie todos os contratos e renovações</p>
          </div>
          
          <ContractsManagement />
        </main>
      </div>
    </div>
  );
};

export default Contracts;
