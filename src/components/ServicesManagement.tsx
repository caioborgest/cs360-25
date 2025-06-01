
import React, { useState } from 'react';
import { 
  ShoppingCart, 
  TrendingUp, 
  Package, 
  Target,
  Plus,
  Search,
  Filter,
  DollarSign
} from 'lucide-react';
import { Button } from './ui/button';
import { CircularProgress } from './CircularProgress';

const servicesData = [
  {
    id: 1,
    name: 'Premium Support',
    category: 'Suporte',
    price: 299,
    description: 'Suporte prioritário 24/7',
    clients: 45,
    totalClients: 127,
    revenue: 13455,
    growth: 15
  },
  {
    id: 2,
    name: 'Advanced Analytics',
    category: 'Analytics',
    price: 199,
    description: 'Relatórios avançados e insights',
    clients: 67,
    totalClients: 127,
    revenue: 13333,
    growth: 22
  },
  {
    id: 3,
    name: 'API Integration',
    category: 'Integração',
    price: 499,
    description: 'Integração personalizada via API',
    clients: 23,
    totalClients: 127,
    revenue: 11477,
    growth: -5
  },
  {
    id: 4,
    name: 'Custom Training',
    category: 'Treinamento',
    price: 899,
    description: 'Treinamento personalizado da equipe',
    clients: 12,
    totalClients: 127,
    revenue: 10788,
    growth: 8
  }
];

const upsellOpportunities = [
  {
    client: 'TechCorp LTDA',
    currentServices: ['Basic', 'Support'],
    recommendedService: 'Advanced Analytics',
    probability: 85,
    potentialRevenue: 199,
    reason: 'Alto engajamento com relatórios básicos'
  },
  {
    client: 'StartupX',
    currentServices: ['Basic'],
    recommendedService: 'Premium Support',
    probability: 72,
    potentialRevenue: 299,
    reason: 'Múltiplos tickets de suporte recentes'
  },
  {
    client: 'InnovaCorp',
    currentServices: ['Premium', 'Analytics'],
    recommendedService: 'API Integration',
    probability: 68,
    potentialRevenue: 499,
    reason: 'Solicitações de integrações customizadas'
  }
];

export const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');

  const getAdoptionRate = (clients: number, total: number) => {
    return Math.round((clients / total) * 100);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-green-600';
    if (probability >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Serviços</p>
              <p className="text-2xl font-bold text-blue-600">24</p>
            </div>
            <Package className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Receita Adicional</p>
              <p className="text-2xl font-bold text-green-600">R$ 127k</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Oportunidades</p>
              <p className="text-2xl font-bold text-purple-600">15</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attach Rate Médio</p>
              <p className="text-2xl font-bold text-orange-600">42%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Services Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Gestão de Serviços</h2>
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Todos">Todas Categorias</option>
              <option value="Suporte">Suporte</option>
              <option value="Analytics">Analytics</option>
              <option value="Integração">Integração</option>
              <option value="Treinamento">Treinamento</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {servicesData.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {service.category}
                </span>
                <span className={`text-sm font-medium ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {service.growth >= 0 ? '+' : ''}{service.growth}%
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="text-center">
                  <CircularProgress 
                    value={getAdoptionRate(service.clients, service.totalClients)} 
                    color="blue"
                    size={50}
                  />
                  <p className="text-xs text-gray-500 mt-1">Adoção</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">R$ {service.price}</p>
                  <p className="text-xs text-gray-500">/mês</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-3">
                <p>{service.clients} de {service.totalClients} clientes</p>
                <p>Receita: R$ {(service.revenue / 1000).toFixed(1)}k/mês</p>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                Ver Detalhes
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Upsell Opportunities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Target className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">Oportunidades de Upsell</h2>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {upsellOpportunities.map((opportunity, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{opportunity.client}</h3>
                    <div className="flex items-center space-x-4">
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
                      <span className="text-sm text-gray-500">Serviços atuais: </span>
                      {opportunity.currentServices.map(service => (
                        <span key={service} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Recomendação: </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                        {opportunity.recommendedService}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{opportunity.reason}</p>
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
