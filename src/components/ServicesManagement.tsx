
import React, { useState } from 'react';
import { 
  ShoppingCart, 
  TrendingUp, 
  Package, 
  Target,
  Plus,
  Search,
  Filter,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Tag,
  Users
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  HeatMap
} from 'recharts';

const servicesData = [
  {
    id: 1,
    name: 'Premium Support',
    category: 'Suporte',
    price: 299,
    description: 'Suporte prioritário 24/7 com tempo de resposta garantido',
    tags: ['Premium', '24/7', 'Prioritário'],
    clients: 45,
    totalClients: 127,
    revenue: 13455,
    growth: 15,
    attachRate: 35,
    segments: { nivelA: 78, nivelB: 42, nivelC: 15 }
  },
  {
    id: 2,
    name: 'Advanced Analytics',
    category: 'Analytics',
    price: 199,
    description: 'Relatórios avançados com IA e insights preditivos',
    tags: ['IA', 'Relatórios', 'Insights'],
    clients: 67,
    totalClients: 127,
    revenue: 13333,
    growth: 22,
    attachRate: 53,
    segments: { nivelA: 89, nivelB: 65, nivelC: 23 }
  },
  {
    id: 3,
    name: 'API Integration',
    category: 'Integração',
    price: 499,
    description: 'Integração personalizada com sistemas externos',
    tags: ['API', 'Integração', 'Custom'],
    clients: 23,
    totalClients: 127,
    revenue: 11477,
    growth: -5,
    attachRate: 18,
    segments: { nivelA: 45, nivelB: 12, nivelC: 5 }
  },
  {
    id: 4,
    name: 'Custom Training',
    category: 'Treinamento',
    price: 899,
    description: 'Treinamento personalizado para equipes',
    tags: ['Treinamento', 'Personalizado', 'Equipe'],
    clients: 12,
    totalClients: 127,
    revenue: 10788,
    growth: 8,
    attachRate: 9,
    segments: { nivelA: 25, nivelB: 8, nivelC: 2 }
  }
];

const upsellOpportunities = [
  {
    client: 'TechCorp LTDA',
    currentServices: ['Basic', 'Support'],
    recommendedService: 'Advanced Analytics',
    probability: 85,
    potentialRevenue: 199,
    reason: 'Alto engajamento com relatórios básicos',
    nps: 9,
    nivel: 'A',
    perfil: 'Arrojado'
  },
  {
    client: 'StartupX',
    currentServices: ['Basic'],
    recommendedService: 'Premium Support',
    probability: 72,
    potentialRevenue: 299,
    reason: 'Múltiplos tickets de suporte recentes',
    nps: 7,
    nivel: 'B',
    perfil: 'Moderado'
  },
  {
    client: 'InnovaCorp',
    currentServices: ['Premium', 'Analytics'],
    recommendedService: 'API Integration',
    probability: 68,
    potentialRevenue: 499,
    reason: 'Solicitações de integrações customizadas',
    nps: 8,
    nivel: 'A',
    perfil: 'Arrojado'
  }
];

const attachRateData = [
  { month: 'Jan', basic: 100, premium: 35, analytics: 48, api: 15, training: 8 },
  { month: 'Fev', basic: 100, premium: 38, analytics: 52, api: 17, training: 9 },
  { month: 'Mar', basic: 100, premium: 42, analytics: 55, api: 18, training: 10 },
  { month: 'Abr', basic: 100, premium: 45, analytics: 58, api: 20, training: 12 },
  { month: 'Mai', basic: 100, premium: 48, analytics: 62, api: 22, training: 14 },
  { month: 'Jun', basic: 100, premium: 51, analytics: 65, api: 24, training: 16 }
];

const segmentData = [
  { segment: 'Nível A', premium: 78, analytics: 89, api: 45, training: 25 },
  { segment: 'Nível B', premium: 42, analytics: 65, api: 12, training: 8 },
  { segment: 'Nível C', premium: 15, analytics: 23, api: 5, training: 2 }
];

export const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [viewMode, setViewMode] = useState('grid');

  const getAdoptionRate = (clients: number, total: number) => {
    return Math.round((clients / total) * 100);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-green-600';
    if (probability >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTagColor = (tag: string) => {
    const colors = {
      'Premium': 'bg-purple-100 text-purple-800',
      'IA': 'bg-blue-100 text-blue-800',
      'API': 'bg-green-100 text-green-800',
      'Treinamento': 'bg-orange-100 text-orange-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return colors[tag as keyof typeof colors] || colors.default;
  };

  return (
    <div className="space-y-6">
      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Serviços</p>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
            <Package className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Receita Adicional</p>
              <p className="text-2xl font-bold text-green-600">R$ 127k</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Oportunidades</p>
              <p className="text-2xl font-bold text-purple-600">15</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Attach Rate Médio</p>
              <p className="text-2xl font-bold text-orange-600">42%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attach Rate Evolution */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Evolução do Attach Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attachRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Line type="monotone" dataKey="premium" stroke="#8B5CF6" strokeWidth={2} />
              <Line type="monotone" dataKey="analytics" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="api" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="training" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Services by Segment */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Adesão por Segmento</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={segmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Bar dataKey="premium" fill="#8B5CF6" />
              <Bar dataKey="analytics" fill="#3B82F6" />
              <Bar dataKey="api" fill="#10B981" />
              <Bar dataKey="training" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Services Management */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Gestão de Serviços</h2>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="w-4 h-4 mr-2" />
              Novo Serviço
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar serviços..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="Todos">Todas Categorias</option>
              <option value="Suporte">Suporte</option>
              <option value="Analytics">Analytics</option>
              <option value="Integração">Integração</option>
              <option value="Treinamento">Treinamento</option>
            </select>

            <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Lista
              </button>
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6" : "divide-y divide-gray-200 dark:divide-gray-700"}>
          {servicesData.map((service) => (
            viewMode === 'grid' ? (
              <div key={service.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                    {service.category}
                  </span>
                  <span className={`text-sm font-medium ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {service.growth >= 0 ? '+' : ''}{service.growth}%
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{service.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.tags.map(tag => (
                    <span key={tag} className={`px-2 py-1 text-xs rounded-full ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-center">
                    <CircularProgress 
                      value={getAdoptionRate(service.clients, service.totalClients)} 
                      color="blue"
                      size={50}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Adoção</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">R$ {service.price}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">/mês</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <p>{service.clients} de {service.totalClients} clientes</p>
                  <p>Receita: R$ {(service.revenue / 1000).toFixed(1)}k/mês</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Editar
                  </Button>
                </div>
              </div>
            ) : (
              <div key={service.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        {service.category}
                      </span>
                      <span className={`text-sm font-medium ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {service.growth >= 0 ? '+' : ''}{service.growth}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{service.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>R$ {service.price}/mês</span>
                      <span>{service.clients}/{service.totalClients} clientes</span>
                      <span>{getAdoptionRate(service.clients, service.totalClients)}% adoção</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Upsell Opportunities */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Oportunidades de Upsell</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {upsellOpportunities.map((opportunity, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{opportunity.client}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {opportunity.nivel} | {opportunity.perfil}
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        NPS: {opportunity.nps}
                      </span>
                      <span className={`text-lg font-bold ${getProbabilityColor(opportunity.probability)}`}>
                        {opportunity.probability}%
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        +R$ {opportunity.potentialRevenue}/mês
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-2">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Serviços atuais: </span>
                      {opportunity.currentServices.map(service => (
                        <span key={service} className="inline-block bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs mr-1">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Recomendação: </span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-sm font-medium">
                        {opportunity.recommendedService}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{opportunity.reason}</p>
                  </div>
                </div>
                
                <div className="ml-6">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                    Abordar Cliente
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
