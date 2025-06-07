
import React from 'react';
import { Edit, Target, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  contact: string;
  email: string;
  tier: string;
  profile: string;
  nps: number;
  npsCategory: string;
  ltv: number;
  ltvProjected: number;
  contractEnd: string;
  services: number;
  trust: number;
  status: string;
  lastInteraction: string;
  riskScore: number;
  opportunities: string[];
  contracts: Array<{
    id: string;
    service: string;
    status: string;
    value: number;
  }>;
}

interface ClientsTableProps {
  clients: Client[];
  expandedClient: number | null;
  onExpandClient: (clientId: number | null) => void;
  onEditClient: (client: Client) => void;
  onViewDetails: (client: Client) => void;
  onStrategies: (clientId: number) => void;
  getTierColor: (tier: string) => string;
  getNPSColor: (category: string) => string;
  getRiskColor: (score: number) => string;
  getStatusColor: (status: string) => string;
}

export const ClientsTable = ({
  clients,
  expandedClient,
  onExpandClient,
  onEditClient,
  onViewDetails,
  onStrategies,
  getTierColor,
  getNPSColor,
  getRiskColor,
  getStatusColor
}: ClientsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nível</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">NPS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">LTV</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Risco</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Contratos</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {clients.map((client) => (
            <React.Fragment key={client.id}>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{client.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{client.contact}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{client.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge className={getTierColor(client.tier)}>
                    Nível {client.tier}
                  </Badge>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{client.profile}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className={`text-lg font-semibold ${getNPSColor(client.npsCategory)}`}>{client.nps}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{client.npsCategory}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">R$ {(client.ltv / 1000).toFixed(0)}k</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Proj: R$ {(client.ltvProjected / 1000).toFixed(0)}k</div>
                </td>
                <td className="px-6 py-4">
                  <Badge className={getRiskColor(client.riskScore)}>
                    {client.riskScore}%
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{client.contracts.length} contrato(s)</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs p-1 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      onClick={() => onExpandClient(expandedClient === client.id ? null : client.id)}
                    >
                      {expandedClient === client.id ? 'Ocultar' : 'Ver detalhes'}
                    </Button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onViewDetails(client)}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      title="Ver Resumo Completo"
                    >
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onEditClient(client)}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onStrategies(client.id)}
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                    >
                      <Target className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
              
              {/* Expandable Contracts Section */}
              {expandedClient === client.id && (
                <tr>
                  <td colSpan={8} className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2 text-gray-900 dark:text-white">
                          <FileText className="w-4 h-4" />
                          Contratos Ativos - {client.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {client.contracts.map((contract) => (
                            <div key={contract.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="font-medium text-sm text-gray-900 dark:text-white">{contract.id}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{contract.service}</div>
                                </div>
                                <Badge className={getStatusColor(contract.status)} variant="outline">
                                  {contract.status}
                                </Badge>
                              </div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                R$ {(contract.value / 1000).toFixed(0)}k/ano
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
