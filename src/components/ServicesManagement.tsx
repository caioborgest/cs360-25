
import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ServiceForm } from './ServiceForm';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const servicesData = [
  {
    id: 1,
    name: 'CS360° Premium',
    category: 'plano',
    price: 2500,
    billingCycle: 'mensal',
    clients: 89,
    mrr: 222500,
    status: 'ativo',
    features: ['Dashboard Avançado', 'IA Preditiva', 'Relatórios Personalizados', 'Suporte 24/7'],
    description: 'Plano premium com todas as funcionalidades avançadas'
  },
  {
    id: 2,
    name: 'CS360° Standard',
    category: 'plano',
    price: 1200,
    billingCycle: 'mensal',
    clients: 156,
    mrr: 187200,
    status: 'ativo',
    features: ['Dashboard Básico', 'Relatórios Standard', 'Suporte Business'],
    description: 'Plano padrão para pequenas e médias empresas'
  },
  {
    id: 3,
    name: 'Analytics Pro',
    category: 'addon',
    price: 500,
    billingCycle: 'mensal',
    clients: 67,
    mrr: 33500,
    status: 'ativo',
    features: ['Análises Avançadas', 'Dashboards Personalizados', 'Export de Dados'],
    description: 'Módulo adicional de analytics avançados'
  },
  {
    id: 4,
    name: 'Implementação Dedicada',
    category: 'implementacao',
    price: 5000,
    billingCycle: 'unico',
    clients: 23,
    mrr: 0,
    status: 'ativo',
    features: ['Setup Personalizado', 'Migração de Dados', 'Treinamento Inicial'],
    description: 'Serviço de implementação personalizada'
  }
];

const performanceData = [
  { month: 'Jan', premium: 85, standard: 150, analytics: 60 },
  { month: 'Fev', premium: 89, standard: 156, analytics: 67 },
  { month: 'Mar', premium: 92, standard: 160, analytics: 70 },
  { month: 'Abr', premium: 95, standard: 165, analytics: 75 },
  { month: 'Mai', premium: 98, standard: 170, analytics: 78 },
  { month: 'Jun', premium: 102, standard: 175, analytics: 82 }
];

const revenueData = [
  { name: 'Premium', value: 222500, color: '#3B82F6', clients: 89 },
  { name: 'Standard', value: 187200, color: '#8B5CF6', clients: 156 },
  { name: 'Analytics Pro', value: 33500, color: '#EC4899', clients: 67 },
  { name: 'Implementação', value: 115000, color: '#10B981', clients: 23 }
];

const upsellData = [
  { service: 'Analytics Pro', potential: 89, converted: 67, rate: 75.3 },
  { service: 'Premium Upgrade', potential: 156, converted: 23, rate: 14.7 },
  { service: 'Support Plus', potential: 245, converted: 56, rate: 22.9 },
  { service: 'Custom Training', potential: 89, converted: 12, rate: 13.5 }
];

const getCategoryColor = (category: string) => {
  const colors = {
    'plano': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'addon': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    'implementacao': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'treinamento': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    'consultoria': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400',
    'suporte': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

const getStatusColor = (status: string) => {
  const colors = {
    'ativo': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'inativo': 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
    'descontinuado': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

export const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleServiceSubmit = (data: any) => {
    console.log('Dados do serviço:', data);
    // Aqui você implementaria a lógica para salvar o serviço
  };

  const handleExport = () => {
    console.log('Exportando dados dos serviços...');
  };

  const handleImport = () => {
    console.log('Importando dados dos serviços...');
  };

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'todos' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalMRR = servicesData.reduce((sum, service) => sum + service.mrr, 0);
  const totalClients = servicesData.reduce((sum, service) => sum + service.clients, 0);
  const activeServices = servicesData.filter(s => s.status === 'ativo').length;

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Serviços Ativos</p>
                <p className="text-2xl font-bold text-blue-600">{activeServices}</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">MRR Total</p>
                <p className="text-2xl font-bold text-green-600">R$ {(totalMRR / 1000).toFixed(0)}k</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Clientes Ativos</p>
                <p className="text-2xl font-bold text-purple-600">{totalClients}</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa Upsell</p>
                <p className="text-2xl font-bold text-orange-600">24.3%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Gestão de Serviços</CardTitle>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handleImport} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                <Upload className="w-4 h-4 mr-2" />
                Importar
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600" onClick={() => setIsFormOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Novo Serviço
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Serviços
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="upsell" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Upsell
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Distribuição de Receita</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={revenueData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: R$${(value/1000).toFixed(0)}k`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {revenueData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: any) => [`R$ ${(value/1000).toFixed(0)}k`, 'MRR']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Performance dos Serviços</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" className="text-xs text-gray-500 dark:text-gray-400" />
                        <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'var(--background)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px'
                          }}
                        />
                        <Line type="monotone" dataKey="premium" stroke="#3B82F6" strokeWidth={2} name="Premium" />
                        <Line type="monotone" dataKey="standard" stroke="#8B5CF6" strokeWidth={2} name="Standard" />
                        <Line type="monotone" dataKey="analytics" stroke="#EC4899" strokeWidth={2} name="Analytics" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar serviços..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>
                
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="todos">Todas Categorias</option>
                  <option value="plano">Planos</option>
                  <option value="addon">Add-ons</option>
                  <option value="implementacao">Implementação</option>
                  <option value="treinamento">Treinamento</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="suporte">Suporte</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Clientes</TableHead>
                      <TableHead>MRR</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredServices.map((service) => (
                      <TableRow key={service.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <TableCell>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{service.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getCategoryColor(service.category)} capitalize`}>
                            {service.category}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            R$ {service.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{service.billingCycle}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{service.clients}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            R$ {service.mrr.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(service.status)} capitalize`}>
                            {service.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                              onClick={() => {
                                setSelectedService(service);
                                setIsFormOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">Evolução de Clientes por Serviço</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" className="text-xs text-gray-500 dark:text-gray-400" />
                      <YAxis className="text-xs text-gray-500 dark:text-gray-400" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="premium" fill="#3B82F6" name="Premium" />
                      <Bar dataKey="standard" fill="#8B5CF6" name="Standard" />
                      <Bar dataKey="analytics" fill="#EC4899" name="Analytics Pro" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upsell" className="mt-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">Oportunidades de Upsell</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Serviço</TableHead>
                          <TableHead>Potencial</TableHead>
                          <TableHead>Convertidos</TableHead>
                          <TableHead>Taxa de Conversão</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upsellData.map((item, index) => (
                          <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <TableCell className="font-medium text-gray-900 dark:text-white">{item.service}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{item.potential}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{item.converted}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">{item.rate}%</div>
                                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full" 
                                    style={{ width: `${item.rate}%` }}
                                  ></div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Target className="w-4 h-4 mr-1" />
                                Campanha
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Service Form Modal */}
      <ServiceForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedService(null);
        }}
        onSubmit={handleServiceSubmit}
        service={selectedService}
      />
    </div>
  );
};
