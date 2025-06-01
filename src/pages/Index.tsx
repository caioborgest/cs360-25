
import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { MetricsCards } from '../components/MetricsCards';
import { ChartsSection } from '../components/ChartsSection';
import { FeedbackSection } from '../components/FeedbackSection';
import { ClientsTable } from '../components/ClientsTable';
import { AIAssistant } from '../components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-6 space-y-6">
          <MetricsCards />
          <ChartsSection />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ClientsTable />
            </div>
            <div>
              <FeedbackSection />
            </div>
          </div>
          <AIAssistant />
        </div>
      </main>
    </div>
  );
};

export default Index;
