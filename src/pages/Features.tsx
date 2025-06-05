
import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target, 
  Star, 
  ArrowRight, 
  Check, 
  Play,
  Brain,
  MessageSquare,
  Smartphone,
  Globe
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: BarChart3,
      title: "Health Score Inteligente",
      description: "Monitore a saúde dos seus clientes em tempo real com nossa IA avançada que analisa múltiplos pontos de dados.",
      benefits: ["Análise preditiva", "Alertas automáticos", "Dashboards visuais"]
    },
    {
      icon: TrendingUp,
      title: "Prevenção de Churn",
      description: "Identifique riscos antes que se tornem perdas reais com nossa análise comportamental.",
      benefits: ["Modelos de ML", "Identificação precoce", "Planos de ação"]
    },
    {
      icon: Users,
      title: "Gestão de Relacionamento",
      description: "Centralize todas as interações e histórico completo dos seus clientes em um só lugar.",
      benefits: ["Timeline unificada", "Notas colaborativas", "Integração com CRM"]
    }
  ];

  const advancedFeatures = [
    {
      icon: Shield,
      title: "Análise Preditiva",
      description: "Antecipe problemas antes que afetem seus clientes"
    },
    {
      icon: Zap,
      title: "Automação Inteligente", 
      description: "Workflows automatizados baseados em comportamento"
    },
    {
      icon: Target,
      title: "Segmentação Avançada",
      description: "Agrupe clientes por perfil e necessidades específicas"
    },
    {
      icon: Brain,
      title: "IA Generativa",
      description: "Respostas inteligentes e insights automáticos"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Multicanal",
      description: "Integre email, WhatsApp, chat e telefone"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Acesse dados e tome ações direto do seu celular"
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "RD Station", 
    "Slack", "Teams", "WhatsApp", "Zendesk", 
    "Stripe", "PayPal", "PagSeguro", "Asaas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <MainNavigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Recursos CS360°</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Recursos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transformam</span> seu CS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra como nossa plataforma revoluciona o Customer Success com tecnologia de ponta e recursos inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg">
              Teste Grátis por 14 Dias
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos Principais</h2>
            <p className="text-xl text-gray-600">As funcionalidades que fazem a diferença no seu CS</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos Avançados</h2>
            <p className="text-xl text-gray-600">Tecnologia de ponta para resultados excepcionais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrações Nativas</h2>
            <p className="text-xl text-gray-600">Conecte-se com as ferramentas que você já usa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Experimentar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Teste todos esses recursos gratuitamente por 14 dias
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Começar Teste Gratuito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CS360°</h3>
              <p className="text-gray-400">A plataforma mais completa de Customer Success do Brasil.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CS360°. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
