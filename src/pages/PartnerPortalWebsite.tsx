
import React from 'react';
import { WebsiteLayout } from '../components/layout/WebsiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  TrendingUp, Users, DollarSign, Target, Award, 
  Calendar, FileText, BarChart3, MessageSquare, 
  CheckCircle, Clock, AlertCircle, Download 
} from 'lucide-react';

const PartnerPortalWebsite = () => {
  return (
    <WebsiteLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Portal do Parceiro CS360°
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe suas vendas, comissões e performance em tempo real
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Comissões do Mês</p>
                    <p className="text-3xl font-bold">R$ 12.480</p>
                  </div>
                  <DollarSign className="w-10 h-10 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Vendas Realizadas</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <Target className="w-10 h-10 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Clientes Ativos</p>
                    <p className="text-3xl font-bold">156</p>
                  </div>
                  <Users className="w-10 h-10 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">Taxa de Conversão</p>
                    <p className="text-3xl font-bold">18.5%</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-orange-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Performance de Vendas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Gráfico de performance em tempo real</p>
                      <p className="text-sm text-gray-500 mt-2">Últimos 12 meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      Vendas Recentes
                    </span>
                    <Badge className="bg-green-100 text-green-800">+12% vs mês anterior</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { client: 'TechCorp Ltda', plan: 'Professional', value: 'R$ 499', date: '2 dias atrás', status: 'Ativo' },
                      { client: 'StartupXYZ', plan: 'Growth', value: 'R$ 999', date: '3 dias atrás', status: 'Ativo' },
                      { client: 'Enterprise Inc', plan: 'Enterprise', value: 'R$ 2.499', date: '5 dias atrás', status: 'Ativo' },
                      { client: 'Digital Agency', plan: 'Starter', value: 'R$ 199', date: '1 semana atrás', status: 'Ativo' }
                    ].map((sale, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{sale.client}</h4>
                          <p className="text-sm text-gray-600">Plano {sale.plan}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{sale.value}</p>
                          <p className="text-sm text-gray-500">{sale.date}</p>
                        </div>
                        <Badge className="ml-4 bg-green-100 text-green-800">{sale.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Commission Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-purple-600" />
                    Detalhes de Comissões
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">R$ 12.480</p>
                        <p className="text-sm text-gray-600">Este Mês</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">R$ 38.240</p>
                        <p className="text-sm text-gray-600">Último Trimestre</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">R$ 124.580</p>
                        <p className="text-sm text-gray-600">Anual</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-blue-600">
                    <Users className="w-4 h-4 mr-2" />
                    Indicar Novo Cliente
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Materiais
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Relatório Mensal
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Suporte Parceiro
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Próximos Eventos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Webinar CS360°</span>
                    </div>
                    <p className="text-xs text-gray-600">15 Nov, 14:00</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Treinamento Parceiros</span>
                    </div>
                    <p className="text-xs text-gray-600">22 Nov, 10:00</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Evento Networking</span>
                    </div>
                    <p className="text-xs text-gray-600">30 Nov, 19:00</p>
                  </div>
                </CardContent>
              </Card>

              {/* Partner Level */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Nível do Parceiro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Gold Partner</h3>
                    <p className="text-sm text-gray-600 mb-4">Comissão: 35%</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">75% para Platinum (R$ 15.000)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notificações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Pagamento processado</p>
                      <p className="text-xs text-gray-500">Comissão de R$ 1.245 creditada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Nova indicação</p>
                      <p className="text-xs text-gray-500">Cliente em avaliação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Ação necessária</p>
                      <p className="text-xs text-gray-500">Documentos pendentes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
};

export default PartnerPortalWebsite;
