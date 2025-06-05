
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MainNavigation } from '../components/MainNavigation';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Brain,
  Award,
  MessageSquare,
  Bell,
  PieChart,
  Calendar,
  FileText,
  Database,
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Headphones
} from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard 360° Inteligente",
      description: "Visão unificada de todos os dados do cliente em tempo real"
    },
    {
      icon: Brain,
      title: "IA Preditiva de Churn",
      description: "Previsão de churn com 95% de precisão usando machine learning"
    },
    {
      icon: Target,
      title: "Health Score Dinâmico",
      description: "Pontuação de saúde do cliente atualizada em tempo real"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Organize e acompanhe a jornada completa de cada cliente"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Centralizada",
      description: "Todas as interações em um só lugar"
    },
    {
      icon: TrendingUp,
      title: "Análises Avançadas",
      description: "Relatórios e insights acionáveis para seu CS"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "VP Customer Success",
      company: "TechCorp",
      content: "O CS360° transformou completamente nossa operação. Reduzimos churn em 40% e aumentamos NPS em 25 pontos.",
      avatar: "CS"
    },
    {
      name: "Ana Costa",
      role: "Head of Success",
      company: "StartupX",
      content: "A IA preditiva é impressionante. Conseguimos antecipar problemas e agir proativamente com nossos clientes.",
      avatar: "AC"
    },
    {
      name: "Roberto Lima",
      role: "CEO",
      company: "SaaS Pro",
      content: "ROI de 300% no primeiro ano. A plataforma se pagou rapidamente e ainda gerou economia significativa.",
      avatar: "RL"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para equipes pequenas",
      features: [
        "Até 100 clientes",
        "Dashboard básico",
        "Health Score",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "R$ 497",
      period: "/mês",
      description: "Para equipes em crescimento",
      features: [
        "Até 500 clientes",
        "IA Preditiva",
        "Automações",
        "Integrações ilimitadas",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Para grandes empresas",
      features: [
        "Clientes ilimitados",
        "White-label",
        "API completa",
        "CSM dedicado",
        "SLA personalizado"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolucione seu Customer Success
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Customer Success
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Inteligente e Preditivo
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforme dados em relacionamentos duradouros. Reduza churn, aumente NPS 
              e maximize o valor de vida do cliente com inteligência artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/app">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Play className="w-5 h-5 mr-2" />
                  Começar Grátis por 14 dias
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Demonstração
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Setup em 5 minutos
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Suporte especializado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para transformar seu Customer Success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mais de 500 empresas confiam no CS360°
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes estão dizendo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role} - {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com você
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            <Link to="/app">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Sparkles className="w-5 h-5 mr-2" />
                Começar Teste Grátis
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CS360°</span>
              </div>
              <p className="text-gray-400">
                A plataforma mais completa para Customer Success do Brasil.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white">Funcionalidades</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Preços</Link></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Segurança</a></li>
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
