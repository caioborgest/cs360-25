
import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Globe,
  HeadphonesIcon,
  Rocket,
  Brain,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 199',
      period: '/mês',
      description: 'Ideal para pequenas empresas iniciando no Customer Success',
      features: [
        'Até 100 clientes',
        'Dashboard básico',
        'NPS automático',
        'Relatórios essenciais',
        '1 usuário',
        'Suporte via email'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 499',
      period: '/mês',
      description: 'Para empresas em crescimento que precisam de mais recursos',
      features: [
        'Até 500 clientes',
        'Dashboard avançado',
        'Automações de IA',
        'Health Score inteligente',
        '5 usuários',
        'Integrações avançadas',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      name: 'Growth',
      price: 'R$ 999',
      period: '/mês',
      description: 'Solução completa para empresas escalando rapidamente',
      features: [
        'Até 2000 clientes',
        'IA preditiva avançada',
        'Programa de parceiros',
        'White-label disponível',
        '15 usuários',
        'API completa',
        'CSM dedicado'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      period: '',
      description: 'Solução personalizada para grandes corporações',
      features: [
        'Clientes ilimitados',
        'Infraestrutura dedicada',
        'Customizações completas',
        'Usuários ilimitados',
        'SLA garantido',
        'Implementação guiada',
        'Suporte 24/7'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard 360°',
      description: 'Visualize todas as métricas de CS em tempo real com insights acionáveis'
    },
    {
      icon: Brain,
      title: 'IA Preditiva',
      description: 'Algoritmos avançados para prever churn e identificar oportunidades'
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description: 'CRM integrado com health score automático e segmentação inteligente'
    },
    {
      icon: Target,
      title: 'Automação Inteligente',
      description: 'Workflows automatizados baseados em comportamento e dados'
    },
    {
      icon: TrendingUp,
      title: 'Análise de LTV/CAC',
      description: 'Métricas financeiras detalhadas para otimizar seu ROI'
    },
    {
      icon: Award,
      title: 'NPS Automático',
      description: 'Pesquisas de satisfação automatizadas com análise de sentimento'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Head of Customer Success',
      company: 'TechFlow',
      content: 'O CS360° revolucionou nossa operação. Reduzimos o churn em 40% em apenas 6 meses.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'CEO',
      company: 'DataInova',
      content: 'A plataforma mais completa que já usei. A IA preditiva é simplesmente incrível.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      role: 'VP Customer Success',
      company: 'CloudSoft',
      content: 'Aumentamos nosso NPS de 7.2 para 9.1. O ROI foi imediato.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CS360°
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Clientes</a>
              <a href="#partners" className="text-gray-600 hover:text-blue-600 transition-colors">Parceiros</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/app">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Button>Teste Grátis</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              🚀 Novo: IA Preditiva com 95% de precisão
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Potencialize seu
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}Customer Success
              </span>
              <br />em 360°
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A plataforma de Customer Success mais avançada do Brasil. 
              Reduza churn, aumente NPS e maximize LTV com inteligência artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Rocket className="w-5 h-5 mr-2" />
                Começar Teste Grátis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✨ 14 dias grátis • Sem cartão de crédito • Configuração em 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para o sucesso do cliente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos avançados que transformam dados em ações estratégicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resultados que falam por si</h2>
            <p className="text-xl opacity-90">Números reais de empresas que transformaram seu CS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-lg opacity-90">Redução média de churn</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.3x</div>
              <div className="text-lg opacity-90">Aumento no LTV</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Precisão da IA preditiva</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+2.1</div>
              <div className="text-lg opacity-90">Pontos de melhoria no NPS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com seu negócio
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para sua empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programa de Parceiros
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cresça conosco e maximize seus ganhos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-purple-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Indicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Indique clientes e ganhe 10% recorrente</p>
                <Button variant="outline">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Revenda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Venda e ganhe até 40% de comissão</p>
                <Button variant="outline">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Implementadora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Implemente e ofereça serviços</p>
                <Button variant="outline">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-purple-200 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle>White Label</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Use sua marca com 60% de margem</p>
                <Button variant="outline">Saiba Mais</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar seu Customer Success?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de empresas que já revolucionaram seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Rocket className="w-5 h-5 mr-2" />
              Teste Grátis por 14 Dias
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Sem compromisso • Suporte especializado • Implementação guiada
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">CS360°</span>
              </div>
              <p className="text-gray-400 mb-4">
                A plataforma de Customer Success mais avançada do Brasil.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CS360°. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
