
import React from 'react';
import { Layout } from '@/components/Layout';
import { LTVCACManagement } from '@/components/LTVCACManagement';

const LTVCAC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">LTV & CAC Analysis</h1>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe Lifetime Value e Custo de Aquisição com modelos flexíveis de cálculo</p>
        </div>
        
        <LTVCACManagement />
      </div>
    </Layout>
  );
};

export default LTVCAC;
