
import React, { useState } from 'react';
import { 
  Package, 
  Filter, 
  Download, 
  Plus, 
  Search,
  DollarSign,
  Clock,
  CheckCircle,
  Settings,
  BarChart3,
  PieChart,
  Users,
  ArrowRightLeft,
  Tag,
  Edit,
  Eye,
  PlayCircle,
  PauseCircle,
  Trash2,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ServiceForm } from './ServiceForm';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// Dados simulados
const servicesData = [
  {
    id: 1,
    name: 'CS360° Premium',
    description: 'Plano completo com todos os recursos do CS360°',
    category: 'plano',
    price: 12000,
    billingCycle: 'anual',
    isActive: true,
    clients: 35,
    mrr: 35000,
    features: ['Dashboard Completo', 'NPS', 'LTV/CAC', 'Automação', 'IA Avançada', 'API Ilimitada'],
    integrations: ['Salesforce', 'HubSpot', 'Zendesk'],
    setupFee: 5000,
    createdAt: '2024-01-10',
    tags: ['Premium', 'Recomendado'],
    maxUsers: 'Ilimitado'
  },
  {
    id: 2,
    name: 'CS360° Standard',
    description: 'Plano intermediário com recursos essenciais',
    category: 'plano',
    price: 6000,
    billingCycle: 'anual',
    isActive: true,
    clients: 62,
    mrr: 31000,
    features: ['Dashboard Básico', 'NPS', 'LTV/CAC', 'Automação Básica'],
    integrations: ['HubSpot', 'Zendesk'],
    setupFee: 3000,
    createdAt: '2024-01-15',
    tags: ['Popular'],
    maxUsers: '10'
  },
  {
    id: 3,
    name: 'CS360° Basic',
    description: 'Plano inicial para pequenas empresas',
    category: 'plano',
    price: 3600,
    billingCycle: 'anual',
    isActive: true,
    clients: 83,
    mrr: 24900,
    features: ['Dashboard Básico', 'NPS Básico', 'Relatórios Limitados'],
    integrations: [],
    setupFee: 2000,
    createdAt: '2024-02-01',
    tags: ['Básico', 'Starter'],
    maxUsers: '3'
  },
  {
    id: 4,
    name: 'Implementação Dedicada',
    description: 'Serviço de implementação personalizada',
    category: 'implementacao',
    price: 8000,
    billingCycle: 'one-time',
    isActive: true,
    clients: 27,
    mrr: 0,
    features: ['Setup personalizado', 'Treinamento', 'Migração de dados', 'Planejamento estratégico'],
    integrations: [],
    setupFee: 0,
    createdAt: '2024-02-10',
    tags: ['Serviço', 'Implementação'],
    maxUsers: 'N/A'
  },
  {
    id: 5,
    name: 'Analytics Pro',
    description: 'Add-on de analytics avançado',
    category: 'addon',
    price: 2400,
    billingCycle: 'anual',
    isActive: true,
    clients: 42,
    mrr: 8400,
    features: ['Relatórios personalizados', 'Previsões', 'Exportação avançada', 'BI Integration'],
    integrations: ['Power BI', 'Tableau'],
    setupFee: 1000,
    createdAt: '2024-02-15',
    tags: ['Add-on', 'Analytics'],
    maxUsers: 'N/A'
  }
];

// Dados para gráficos
const serviceDistributionData = [
  { name: 'Premium', value: 35, color: '#3B82F6' },
  { name: 'Standard', value: 62, color: '#8B5CF6' },
  { name: 'Basic', value: 83, color: '#EC4899' }
];

const revenueByTypeData = [
  { name: 'Planos', value: 90900 },
  { name: 'Add-ons', value: 8400 },
  { name: 'Implementação', value: 18000 }
];

const mrrTrendData = [
  { month: 'Jan', mrr: 78000 },
  { month: 'Fev', mrr: 83000 },
  { month: 'Mar', mrr: 85000 },
  { month: 'Abr', mrr: 89000 },
  { month: 'Mai', mrr: 92000 },
  { month: 'Jun', mrr: 99300 }
];

export const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('list');

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? 
      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">Ativo</Badge> : 
      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400">Inativo</Badge>;
  };

  const getCategoryBadge = (category: string) => {
    const categories: {[key: string]: {bg: string, text: string}} = {
      'plano': {bg: 'bg-blue-100 dark:bg-blue-900/20', text: 'text-blue-800 dark:text-blue-400'},
      'addon': {bg: 'bg-purple-100 dark:bg-purple-900/20', text: 'text-purple-800 dark:text-purple-400'},
      'implementacao': {bg: 'bg-green-100 dark:bg-green-900/20', text: 'text-green-800 dark:text-green-400'},
      'treinamento': {bg: 'bg-yellow-100 dark:bg-yellow-900/20', text: 'text-yellow-800 dark:text-yellow-400'},
      'consultoria': {bg: 'bg-orange-100 dark:bg-orange-900/20', text: 'text-orange-800 dark:text-orange-400'},
      'suporte': {bg: 'bg-red-100 dark:bg-red-900/20', text: 'text-red-800 dark:text-red-400'}
    };
    
    const style = categories[category] || {bg: 'bg-gray-100 dark:bg-gray-900/20', text: 'text-gray-800 dark:text-gray-400'};
    const label = {
      'plano': 'Plano',
      'addon': 'Add-on',
      'implementacao': 'Implementação',
      'treinamento': 'Treinamento',
      'consultoria': 'Consultoria',
      'suporte': 'Suporte'
    }[category] || category;
    
    return <Badge className={`${style.bg} ${style.text}`}>{label}</Badge>;
  };

  const handleServiceSubmit = (data: any) => {
    console.log('Serviço cadastrado:', data);
  };
  
  const handleEditService = (service: any) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'Todos' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalMRR = servicesData.reduce((sum, service) => sum + service.mrr, 0);

  return (
    <div className="space-y-6">
      {/* Cards de Métricas - Layout Otimizado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total de Serviços</p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">5</p>
                <div className="flex items-center text-xs text-blue-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2 este mês
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600 dark:text-green-400">MRR Total</p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-300">R$ {(totalMRR / 1000).toFixed(1)}k</p>
                <div className="flex items-center text-xs text-green-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs mês anterior
                </div>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Clientes Atendidos</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">180</p>
                <div className="flex items-center text-xs text-purple-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% crescimento
                </div>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Oportunidades</p>
                <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">37</p>
                <div className="flex items-center text-xs text-orange-500">
                  <ArrowRightLeft className="w-3 h-3 mr-1" />
                  Upsell identificados
                </div>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRightLeft className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Principal - Layout Melhorado */}
      <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Gestão de Serviços & Upsell
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Gerencie e otimize sua oferta de serviços
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
                onClick={() => {
                  setSelectedService(null);
                  setIsFormOpen(true);
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Serviço
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="list" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <Package className="w-4 h-4" />
                Serviços
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <BarChart3 className="w-4 h-4" />
                Análises
              </TabsTrigger>
              <TabsTrigger value="upsell" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <ArrowRightLeft className="w-4 h-4" />
                Oportunidades
              </TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="space-y-6">
              {/* Filtros Melhorados */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Buscar por nome ou descrição..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      />
                    </div>
                  </div>
                  
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  >
                    <option value="Todos">Todas as Categorias</option>
                    <option value="plano">Planos</option>
                    <option value="addon">Add-ons</option>
                    <option value="implementacao">Implementação</option>
                    <option value="treinamento">Treinamento</option>
                    <option value="suporte">Suporte</option>
                  </select>
                </div>
              </div>

              {/* Tabela com Melhor Espaçamento */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-700/50">
                        <TableHead className="font-semibold">Serviço</TableHead>
                        <TableHead className="font-semibold">Categoria</TableHead>
                        <TableHead className="font-semibold">Preço</TableHead>
                        <TableHead className="font-semibold">Clientes</TableHead>
                        <TableHead className="font-semibold">MRR</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold">Tags</TableHead>
                        <TableHead className="font-semibold">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredServices.map((service) => (
                        <TableRow key={service.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                          <TableCell className="font-medium">
                            <div className="space-y-1">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{service.description}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {getCategoryBadge(service.category)}
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              R$ {(service.price / 1000).toFixed(1)}k
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {service.billingCycle === 'one-time' ? 'Único' : service.billingCycle}
                              {service.setupFee > 0 && ` + Setup R$ ${(service.setupFee / 1000).toFixed(1)}k`}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {service.clients}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {service.mrr > 0 ? `R$ ${(service.mrr / 1000).toFixed(1)}k` : 'N/A'}
                            </div>
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(service.isActive)}
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {service.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="bg-gray-50 dark:bg-gray-700 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-1">
                              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-8 w-8 p-0">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 h-8 w-8 p-0"
                                onClick={() => handleEditService(service)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 h-8 w-8 p-0">
                                {service.isActive ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {/* Grid de Gráficos Reorganizado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Distribuição de Serviços */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <PieChart className="w-4 h-4 text-white" />
                      </div>
                      Distribuição de Clientes
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Por tipo de serviço</p>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={280}>
                      <RechartsPieChart>
                        <Pie
                          data={serviceDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {serviceDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Revenue por Tipo de Serviço */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      Receita por Tipo
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MRR por categoria</p>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={280}>
                      <RechartsBarChart data={revenueByTypeData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="name" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip />
                        <Bar dataKey="value" name="MRR (R$)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* MRR Trend - Full Width */}
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    Evolução do MRR
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tendência de crescimento mensal</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={320}>
                    <RechartsBarChart data={mrrTrendData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Bar dataKey="mrr" name="MRR (R$)" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upsell" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800 dark:text-blue-400 flex items-center gap-2">
                      <ArrowRightLeft className="w-5 h-5" />
                      Oportunidade de Upsell
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      12 clientes do plano Standard com alto uso de recursos poderiam fazer upgrade para Premium
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Potencial:</span>
                        <span className="font-semibold text-blue-700 dark:text-blue-300 ml-1">R$ 72k MRR</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-purple-800 dark:text-purple-400 flex items-center gap-2">
                      <ArrowRightLeft className="w-5 h-5" />
                      Oportunidade de Cross-sell
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      25 clientes Premium sem add-on Analytics Pro poderiam se beneficiar deste recurso
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Potencial:</span>
                        <span className="font-semibold text-purple-700 dark:text-purple-300 ml-1">R$ 60k MRR</span>
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Modal para Novo Serviço */}
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
