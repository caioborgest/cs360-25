
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { AutomationManagement } from '../components/AutomationManagement';

const Automation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Automação & IA</h1>
            <p className="text-gray-600 dark:text-gray-300">Configure automações inteligentes, alertas e insights baseados em IA</p>
          </div>
          
          <AutomationManagement />
        </div>
      </main>
    </div>
  );
};

export default Automation;
