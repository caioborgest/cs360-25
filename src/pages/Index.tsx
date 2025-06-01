
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { MetricsCards } from '../components/MetricsCards';
import { ChartsSection } from '../components/ChartsSection';
import { ClientsManagement } from '../components/ClientsManagement';
import { AIAssistant } from '../components/AIAssistant';
import { FeedbackSection } from '../components/FeedbackSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard CS360°</h1>
            <p className="text-gray-600">Potencialize seu Customer Success em 360° de forma fácil e inteligente</p>
          </div>
          
          <MetricsCards />
          <ChartsSection />
          
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-2">
              <ClientsManagement />
            </div>
            <div className="xl:col-span-1">
              <AIAssistant />
            </div>
            <div className="xl:col-span-1">
              <FeedbackSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
