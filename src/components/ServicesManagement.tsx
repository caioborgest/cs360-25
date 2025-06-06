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

  // Soma do MRR total
  const totalMRR = servicesData.reduce((sum, service) => sum + service.mrr, 0);

  return (
    <div className="space-y-6">
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Serviços</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <Package className="w-8 h-8 text-blue-600" />
          </div>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">MRR Total</p>
              <p className="text-2xl font-bold text-green-600">R$ {(totalMRR / 1000).toFixed(1)}k</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Clientes Atendidos</p>
              <p className="text-2xl font-bold text-purple-600">180</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Oportunidades de Upsell</p>
              <p className="text-2xl font-bold text-orange-600">37</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-orange-600" />
          </div>
        </Card>
      </div>

      {/* Conteúdo Principal */}
      <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Gestão de Serviços & Upsell
              </CardTitle>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4 w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="list" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Serviços
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Análises
              </TabsTrigger>
              <TabsTrigger value="upsell" className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Oportunidades de Upsell
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        
        <CardContent className="pt-6">
          <TabsContent value="list">
            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar por nome ou descrição..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Todos">Todas as Categorias</option>
                <option value="plano">Planos</option>
                <option value="addon">Add-ons</option>
                <option value="implementacao">Implementação</option>
                <option value="treinamento">Treinamento</option>
                <option value="suporte">Suporte</option>
              </select>
            </div>

            {/* Tabela de Serviços */}
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
                    <TableHead>Tags</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServices.map((service) => (
                    <TableRow key={service.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <TableCell className="font-medium">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{service.description}</div>
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
                          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 h-8 w-8 p-0">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 h-8 w-8 p-0"
                            onClick={() => handleEditService(service)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 h-8 w-8 p-0">
                            {service.isActive ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 h-8 w-8 p-0">
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

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Distribuição de Serviços */}
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Distribuição de Clientes por Serviço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={serviceDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
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
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Receita por Tipo de Serviço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
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

            {/* MRR Trend */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Evolução de MRR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
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

          <TabsContent value="upsell">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5" />
                  Oportunidades de Upsell e Cross-sell
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    Esta seção exibiria oportunidades de upsell e cross-sell identificadas pelo sistema, baseadas em análise de uso, padrões de comportamento e regras de negócio.
                  </p>
                  
                  {/* Esta parte seria substituída por uma implementação real de oportunidades de upsell */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="text-sm font-medium text-blue-800 dark:text-blue-400 mb-2">
                        Exemplo de Oportunidade de Upsell
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        12 clientes do plano Standard com alto uso de recursos poderiam fazer upgrade para Premium
                      </p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Ver Detalhes
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="text-sm font-medium text-purple-800 dark:text-purple-400 mb-2">
                        Exemplo de Oportunidade de Cross-sell
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        25 clientes Premium sem add-on Analytics Pro poderiam se beneficiar deste recurso
                      </p>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
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
