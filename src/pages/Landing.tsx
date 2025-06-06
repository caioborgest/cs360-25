
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Users, 
  Target, 
  Zap,
  TrendingUp,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MainNavigation } from '../components/MainNavigation';

const Landing = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard 360°",
      description: "Visão completa do seu Customer Success em tempo real"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "CRM avançado com segmentação inteligente"
    },
    {
      icon: Target,
      title: "NPS & CSAT",
      description: "Monitoramento automático de satisfação"
    },
    {
      icon: TrendingUp,
      title: "LTV & CAC",
      description: "Análise preditiva de valor do cliente"
    },
    {
      icon: Zap,
      title: "Automação IA",
      description: "Inteligência artificial para otimizar processos"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção avançada de dados empresariais"
    }
  ];

  const benefits = [
    "Dashboard personalizado e interativo",
    "Automação inteligente com IA",
    "Gestão completa de clientes",
    "Análise preditiva avançada",
    "Integrações nativas",
    "Suporte especializado 24/7"
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Head of Customer Success",
      company: "TechCorp",
      content: "O CS360° revolucionou nossa operação. Aumentamos a retenção em 40% em apenas 6 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "StartupX",
      content: "A plataforma mais completa que já usei. A IA realmente faz a diferença nas decisões estratégicas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "CS Manager",
      company: "Scale Inc",
      content: "Implementação rápida e resultados imediatos. Nossa equipe economiza 15 horas por semana.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  Customer Success em 360°
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transforme sua operação de Customer Success com a plataforma mais avançada do mercado. 
                  IA integrada, automação inteligente e insights preditivos em uma única solução.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                    Começar Grátis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                    Ver Demonstração
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Suporte incluído</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Dashboard CS360°</h3>
                        <p className="text-sm text-gray-500">Métricas em tempo real</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">94%</div>
                        <div className="text-sm text-gray-600">Retenção</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">8.7</div>
                        <div className="text-sm text-gray-600">NPS Médio</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Tudo que você precisa para escalar seu CS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma completa que integra todas as funcionalidades essenciais 
              para uma operação de Customer Success de alta performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Por que escolher o CS360°?
                </h2>
                <p className="text-xl text-gray-600">
                  Mais de 500 empresas já confiam na nossa plataforma para 
                  transformar seus resultados de Customer Success.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Ver Planos e Preços
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Empresas ativas</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-gray-600">Aumento médio em retenção</div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Suporte especializado</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15h</div>
                  <div className="text-gray-600">Economia semanal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação com o CS360°
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Pronto para transformar seu Customer Success?
            </h2>
            <p className="text-xl text-blue-100">
              Junte-se a centenas de empresas que já estão obtendo resultados extraordinários
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                  Começar Grátis Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/app">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Acessar Plataforma
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CS360°</span>
              </div>
              <p className="text-gray-400">
                A plataforma mais avançada de Customer Success do mercado.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/features" className="block hover:text-white">Funcionalidades</Link>
                <Link to="/pricing" className="block hover:text-white">Preços</Link>
                <Link to="/app" className="block hover:text-white">Dashboard</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Parceiros</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/partners-program" className="block hover:text-white">Programa</Link>
                <Link to="/partners" className="block hover:text-white">Gestão</Link>
                <Link to="/partner-portal" className="block hover:text-white">Portal</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white">Sobre</a>
                <a href="#" className="block hover:text-white">Blog</a>
                <a href="#" className="block hover:text-white">Contato</a>
              </div>
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
