
import React from 'react';
import { X, Calendar, DollarSign, FileText, TrendingUp, TrendingDown, AlertTriangle, Users, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ClientSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: any;
}

export const ClientSummaryModal = ({ isOpen, onClose, client }: ClientSummaryModalProps) => {
  if (!isOpen || !client) return null;

  const getTierColor = (tier: string) => {
    const colors = {
      'A': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'B': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'C': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const getNPSColor = (category: string) => {
    const colors = {
      'Promotor': 'text-green-600 dark:text-green-400',
      'Passivo': 'text-yellow-600 dark:text-yellow-400',
      'Detrator': 'text-red-600 dark:text-red-400'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 dark:text-gray-400';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Ativo': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'Risco': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      'Inativo': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const getRiskColor = (score: number) => {
    if (score <= 30) return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
    if (score <= 60) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
    return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{client.name}</h2>
              <p className="text-blue-100">Resumo Completo do Cliente</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20 h-10 w-10 p-0"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">NPS Score</p>
                      <p className={`text-2xl font-bold ${getNPSColor(client.npsCategory)}`}>{client.nps}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{client.npsCategory}</p>
                    </div>
                    {client.npsCategory === 'Promotor' ? (
                      <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                    ) : (
                      <TrendingDown className="w-8 h-8 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">LTV Atual</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R$ {(client.ltv / 1000).toFixed(0)}k</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Proj: R$ {(client.ltvProjected / 1000).toFixed(0)}k</p>
                    </div>
                    <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Risco de Churn</p>
                      <Badge className={getRiskColor(client.riskScore)}>{client.riskScore}%</Badge>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {client.riskScore <= 30 ? 'Baixo' : client.riskScore <= 60 ? 'Médio' : 'Alto'}
                      </p>
                    </div>
                    <AlertTriangle className={`w-8 h-8 ${client.riskScore > 60 ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'}`} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contratos</p>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{client.contracts?.length || 0}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Ativos</p>
                    </div>
                    <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="contracts">Contratos</TabsTrigger>
                <TabsTrigger value="interactions">Interações</TabsTrigger>
                <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Informações do Cliente */}
                  <Card className="border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <Users className="w-5 h-5" />
                        Informações do Cliente
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge className={getTierColor(client.tier)}>Nível {client.tier}</Badge>
                        <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">Contato:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{client.contact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">Email:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{client.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">Última Interação:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{client.lastInteraction}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">Perfil:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{client.profile}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Métricas Avançadas */}
                  <Card className="border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <TrendingUp className="w-5 h-5" />
                        Métricas Avançadas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Serviços Ativos</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{client.services}</p>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Nível de Confiança</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{client.trust}/5</p>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Fim do Contrato</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{client.contractEnd}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="contracts" className="mt-6">
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <FileText className="w-5 h-5" />
                      Contratos Ativos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {client.contracts?.map((contract: any, index: number) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{contract.id}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{contract.service}</p>
                            </div>
                            <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-green-600 dark:text-green-400">
                              R$ {(contract.value / 1000).toFixed(0)}k/ano
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Renovação em breve
                            </span>
                          </div>
                        </div>
                      )) || (
                        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                          Nenhum contrato ativo encontrado
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interactions" className="mt-6">
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Calendar className="w-5 h-5" />
                      Histórico de Interações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Reunião de Alinhamento</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{client.lastInteraction}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Discussão sobre novas funcionalidades e roadmap do produto.
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Suporte Técnico</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">2024-01-10</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Resolução de problema de integração - ticket resolvido com sucesso.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opportunities" className="mt-6">
                <Card className="border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <TrendingUp className="w-5 h-5" />
                      Oportunidades de Crescimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {client.opportunities?.map((opportunity: string, index: number) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-medium text-gray-900 dark:text-white">{opportunity}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 ml-6">
                            Potencial de aumento de receita e satisfação do cliente
                          </p>
                        </div>
                      )) || (
                        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                          Nenhuma oportunidade identificada no momento
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
