
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const NPSAnalyticsTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 dark:text-white">Distribuição por Segmento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-20"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">83</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Growth</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-18"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">76</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Professional</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-16"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">68</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 dark:text-white">Tendências de Melhoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">Interface & Usabilidade</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">23% dos detratores mencionam dificuldades com a interface</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Automações</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">31% solicitam mais funcionalidades de automação</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="text-sm font-medium text-green-800 dark:text-green-300 mb-2">Suporte</h4>
              <p className="text-sm text-green-700 dark:text-green-400">Maior pontuação entre promotores - 94% satisfeitos</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
