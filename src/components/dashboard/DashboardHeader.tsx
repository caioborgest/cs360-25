
import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { DraggableIndicators } from './DraggableIndicators';

export const DashboardHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Indicadores Principal</h2>
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700">
            Arraste para reorganizar
          </Badge>
        </div>
      </div>
      <DraggableIndicators />
    </div>
  );
};
