
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { ClientsOverview } from '../components/ClientsOverview';
import { ClientsFilters } from '../components/ClientsFilters';
import { ClientsList } from '../components/ClientsList';
import { ClientsCharts } from '../components/ClientsCharts';
import { ClientsRanking } from '../components/ClientsRanking';
import { ClientsInteractions } from '../components/ClientsInteractions';

export interface ClientFilter {
  profile: string[];
  level: string[];
  status: string[];
  npsCategory: string[];
  ltvRange: [number, number];
  cacRange: [number, number];
  dateRange: [Date | null, Date | null];
}

const Clients = () => {
  const [activeView, setActiveView] = useState<'list' | 'charts' | 'ranking' | 'interactions'>('list');
  const [filters, setFilters] = useState<ClientFilter>({
    profile: [],
    level: [],
    status: [],
    npsCategory: [],
    ltvRange: [0, 500000],
    cacRange: [0, 50000],
    dateRange: [null, null]
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Gestão de Clientes</h1>
              <p className="text-gray-600 dark:text-gray-300">Visão completa e análise avançada da base de clientes</p>
            </div>
          </div>

          <ClientsOverview />
          
          <ClientsFilters filters={filters} onFiltersChange={setFilters} />

          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveView('list')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Lista de Clientes
            </button>
            <button
              onClick={() => setActiveView('charts')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === 'charts' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Visualizações
            </button>
            <button
              onClick={() => setActiveView('ranking')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === 'ranking' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Ranking
            </button>
            <button
              onClick={() => setActiveView('interactions')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeView === 'interactions' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Interações
            </button>
          </div>

          {activeView === 'list' && <ClientsList filters={filters} />}
          {activeView === 'charts' && <ClientsCharts filters={filters} />}
          {activeView === 'ranking' && <ClientsRanking filters={filters} />}
          {activeView === 'interactions' && <ClientsInteractions filters={filters} />}
        </div>
      </main>
    </div>
  );
};

export default Clients;
