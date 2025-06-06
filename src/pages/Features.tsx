
import React, { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Activity, Play } from 'lucide-react';
import FeaturesInteractiveCharts from '../components/FeaturesInteractiveCharts';
import { FeaturesHeader } from '../components/features/FeaturesHeader';
import { FeaturesHero, FeaturesCTA } from '../components/features/FeaturesHero';
import { FeatureCategories } from '../components/features/FeatureCategories';
import { FeaturesContent } from '../components/features/FeaturesContent';
import { IntegrationsShowcase } from '../components/features/IntegrationsShowcase';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('dashboard');

  return (
    <div className="min-h-screen bg-white">
      <FeaturesHeader />
      <FeaturesHero />

      {/* Interactive Charts Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <Activity className="w-4 h-4 mr-2" />
              Demonstração Interativa
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experimente o Poder dos Nossos
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Analytics em Tempo Real
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossos gráficos interativos transformam dados complexos em insights acionáveis. 
              Passe o mouse sobre os gráficos para experimentar a interatividade real do dashboard.
            </p>
          </div>

          <FeaturesInteractiveCharts />

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Play className="w-5 h-5 mr-2" />
              Ver Dashboard Completo
            </Button>
          </div>
        </div>
      </section>

      <FeatureCategories 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <FeaturesContent activeCategory={activeCategory} />
      
      <IntegrationsShowcase />
      
      <FeaturesCTA />
    </div>
  );
};

export default Features;
