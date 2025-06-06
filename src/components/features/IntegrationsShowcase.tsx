
import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { integrationTools, categoriesIntegrations } from '../../data/integrationTools';

export const IntegrationsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = selectedCategory === 'all' 
    ? integrationTools 
    : integrationTools.filter(tool => tool.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conecte com o Ecossistema Completo
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mais de 200 integrações nativas para maximizar seu investimento em tecnologia
          </p>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoriesIntegrations.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {filteredTools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tool.logo}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{tool.name}</div>
                <Badge variant="outline" className="text-xs text-gray-500">
                  {tool.category}
                </Badge>
                <tool.icon className="w-4 h-4 text-gray-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Integrações Nativas</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Garantido</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 5min</div>
            <div className="text-gray-600">Setup Médio</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">Zero</div>
            <div className="text-gray-600">Código Necessário</div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver Todas as Integrações
          </Button>
        </div>
      </div>
    </section>
  );
};
