
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Bar } from 'recharts';
import { cohortData, cohortAnalysis } from '../data/ltvCacData';

export const CohortTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução LTV por Cohort</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cohortData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cohort" />
                <YAxis />
                <Tooltip formatter={(value) => [`R$ ${value?.toLocaleString() || 'N/A'}`, 'LTV']} />
                <Line type="monotone" dataKey="ltv3m" stroke="#EF4444" strokeWidth={2} name="3 meses" />
                <Line type="monotone" dataKey="ltv6m" stroke="#F59E0B" strokeWidth={2} name="6 meses" />
                <Line type="monotone" dataKey="ltv12m" stroke="#3B82F6" strokeWidth={2} name="12 meses" />
                <Line type="monotone" dataKey="ltv24m" stroke="#10B981" strokeWidth={2} name="24 meses" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Retenção vs LTV por Cohort</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={cohortAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="cohort" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="ltv_12m" fill="#3B82F6" name="LTV 12m" />
                <Line yAxisId="right" type="monotone" dataKey="retention_12m" stroke="#10B981" strokeWidth={2} name="Retenção 12m %" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Análise Detalhada por Cohort</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cohort</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tamanho</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 3m</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 6m</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 12m</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">LTV 24m</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Retenção 12m</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                {cohortAnalysis.map((cohort, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{cohort.cohort}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{cohort.size} clientes</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">R$ {(cohort.ltv_3m / 1000).toFixed(0)}k</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">R$ {(cohort.ltv_6m / 1000).toFixed(0)}k</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {cohort.ltv_12m ? `R$ ${(cohort.ltv_12m / 1000).toFixed(0)}k` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {cohort.ltv_24m ? `R$ ${(cohort.ltv_24m / 1000).toFixed(0)}k` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {cohort.retention_12m ? `${cohort.retention_12m}%` : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
