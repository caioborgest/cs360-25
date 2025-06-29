import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Activity, Play, Calendar, Sparkles } from 'lucide-react';
export const FeaturesHero: React.FC = () => {
  const navigate = useNavigate();
  const handleViewDashboard = () => {
    navigate('/app');
  };
  return <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <Activity className="w-4 h-4 mr-2" />
          Demonstração Interativa
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Funcionalidades que
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
            revolucionam seu CS
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Descubra como o CS360° transforma cada aspecto do seu Customer Success 
          com tecnologia de ponta e inteligência artificial.
        </p>
        
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600" onClick={handleViewDashboard}>
          <Play className="w-5 h-5 mr-2" />
          Ver Dashboard Completo
        </Button>
      </div>
    </section>;
};
export const FeaturesCTA: React.FC = () => {
  const navigate = useNavigate();
  const handleStartTrial = () => {
    navigate('/register');
  };
  const handleScheduleDemo = () => {
    // Implementar agendamento de demonstração
    window.open('https://calendly.com/cs360-demo', '_blank');
  };
  return <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Pronto para experimentar tudo isso?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Teste todas as funcionalidades gratuitamente por 14 dias
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={handleStartTrial}>
            <Sparkles className="w-5 h-5 mr-2" />
            Começar Teste Grátis
          </Button>
          <Button variant="outline" size="lg" onClick={handleScheduleDemo} className="border-white hover:bg-white text-slate-800">
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </section>;
};