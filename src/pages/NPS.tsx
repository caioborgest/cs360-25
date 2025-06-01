
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { NPSManagement } from '../components/NPSManagement';

const NPS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Net Promoter Score (NPS)</h1>
            <p className="text-gray-600">Meça e acompanhe a lealdade e satisfação dos seus clientes</p>
          </div>
          
          <NPSManagement />
        </div>
      </main>
    </div>
  );
};

export default NPS;
