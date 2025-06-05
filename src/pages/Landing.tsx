
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MainNavigation } from '../components/MainNavigation';
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Landing = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Health Score Inteligente",
      description: "Acompanhe a saúde dos seus clientes em tempo real com IA avançada",
      image: "/placeholder.svg"
    },
    {
      icon: TrendingUp,
      title: "Prevenção de Churn",
      description: "Identifique riscos antes que aconteçam com nossa análise preditiva",
      image: "/placeholder.svg"
    },
    {
      icon: Users,
      title: "Gestão de Relacionamento",
      description: "Centralize todas as interações e histórico dos seus clientes",
      image: "/placeholder.svg"
    }
  ];

  const allFeatures = [
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
    }
  ];

  const stats = [
    { value: "95%", label: "Redução de Churn" },
    { value: "3x", label: "Aumento de LTV" },
    { value: "60%", label: "Mais Upsells" },
    { value: "24h", label: "Setup Completo" }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Head of CS, TechCorp",
      content: "O CS360° transformou nossa operação. Reduzimos o churn em 40% em apenas 3 meses.",
      rating: 5
    },
    {
      name: "João Silva",
      role: "CEO, StartupXYZ",
      content: "A melhor decisão que tomamos foi implementar o CS360°. ROI fantástico!",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "R$ 199",
      period: "/mês",
      description: "Para equipes que estão começando",
      features: [
        "Até 100 clientes",
        "Health Score básico",
        "Relatórios essenciais",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R$ 499",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 500 clientes",
        "IA avançada",
        "Automações",
        "Integrações ilimitadas",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Para grandes operações",
      features: [
        "Clientes ilimitados",
        "Customizações",
        "API dedicada",
        "Gerente de sucesso",
        "SLA garantido"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <MainNavigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            O Customer Success mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Inteligente</span> do Brasil
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforme dados em insights, reduza churn e maximize o valor de vida dos seus clientes com nossa plataforma de CS impulsionada por IA.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

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

      {/* Features Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos que Fazem a Diferença</h2>
            <p className="text-xl text-gray-600">Conheça as funcionalidades que tornam o CS360° único</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? 'border-blue-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        activeFeature === index ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <feature.icon className={`w-6 h-6 ${
                          activeFeature === index ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">{mainFeatures[activeFeature].title}</h3>
                <p className="text-gray-300 mb-6">{mainFeatures[activeFeature].description}</p>
                <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Demo Interativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tudo que Você Precisa</h2>
            <p className="text-xl text-gray-600">Uma plataforma completa para o sucesso dos seus clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Resultados reais de empresas que confiam no CS360°</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preços Transparentes</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para sua empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Revolucionar seu Customer Success?</h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de empresas que já transformaram seus resultados com o CS360°
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

export default Landing;
