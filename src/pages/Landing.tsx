
import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Brain,
  Lightbulb,
  Award,
  MessageSquare,
  Globe,
  Rocket,
  Heart,
  Building2
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Gestão de Clientes 360°',
      description: 'Centralize todas as informações dos seus clientes, acompanhe o health score e gerencie relacionamentos de forma inteligente.'
    },
    {
      icon: Target,
      title: 'Gestão de Metas Avançada',
      description: 'Defina, acompanhe e alcance suas metas de Customer Success com dashboards visuais e alertas inteligentes.'
    },
    {
      icon: Brain,
      title: 'IA Preditiva',
      description: 'Previna churn com 95% de precisão usando inteligência artificial e machine learning avançado.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Poderosos',
      description: 'Insights acionáveis com dashboards interativos, métricas em tempo real e relatórios personalizados.'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize workflows, tarefas repetitivas e comunicações com IA para escalar suas operações.'
    },
    {
      icon: Shield,
      title: 'Segurança Enterprise',
      description: 'Proteção de dados com criptografia end-to-end, compliance LGPD e auditoria completa.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Head of Customer Success',
      company: 'TechCorp',
      content: 'O CS360° transformou completamente nossa operação. Aumentamos a retenção em 45% e reduzimos o churn em 60% em apenas 6 meses.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      results: '+45% retenção'
    },
    {
      name: 'João Santos',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'A IA preditiva do CS360° nos permitiu identificar riscos antes mesmo dos clientes saberem. ROI de 400% no primeiro ano.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      results: '400% ROI'
    },
    {
      name: 'Ana Costa',
      role: 'VP Customer Success',
      company: 'Enterprise Corp',
      content: 'Escalamos de 100 para 1000 clientes mantendo a mesma equipe. A automação do CS360° foi fundamental nesse crescimento.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      results: '10x escala'
    }
  ];

  const stats = [
    { number: '500+', label: 'Empresas Ativas', icon: Building2 },
    { number: '95%', label: 'Precisão IA', icon: Brain },
    { number: '2M+', label: 'Clientes Gerenciados', icon: Users },
    { number: '40%', label: 'Redução Churn Média', icon: TrendingUp }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' },
    { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png' },
    { name: 'Microsoft Teams', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg' },
    { name: 'Zendesk', logo: 'https://d1eipm3vz40hy0.cloudfront.net/images/AMER/zendesk-logo.png' },
    { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-6 py-3 text-sm font-medium">
              <Rocket className="w-4 h-4 mr-2" />
              Plataforma #1 em Customer Success no Brasil
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Customer Success
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
                com Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              A única plataforma que combina gestão completa de CS com IA preditiva para 
              <strong className="text-blue-600"> prevenir churn, aumentar retenção e escalar resultados</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/auth">
                <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
                  <Play className="w-6 h-6 mr-3" />
                  Teste Grátis por 14 Dias
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 hover:bg-blue-50">
                  Ver Demonstração
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-12">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Setup em 5 minutos
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                Segurança Enterprise
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-purple-500 mr-2" />
                200+ Integrações
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Funcionalidades que
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                transformam resultados
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para revolucionar seu Customer Success em uma única plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conecte com seu ecossistema
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Mais de 200 integrações nativas com suas ferramentas favoritas
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow p-4">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features#integrations">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Ver Todas as Integrações
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resultados comprovados
            </h2>
            <p className="text-xl text-gray-600">
              Veja como nossos clientes transformaram seus resultados de CS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu Customer Success?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Junte-se a mais de 500 empresas que já revolucionaram seus resultados com IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 shadow-2xl">
                <Rocket className="w-6 h-6 mr-3" />
                Começar Teste Grátis
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6">
                Ver Preços
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Sem setup complexo
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Suporte premium
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Dados 100% seguros
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold">CS360°</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                A plataforma de Customer Success com IA que revoluciona resultados. 
                Transforme dados em insights, prevenha churn e escale seu sucesso.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">YouTube</Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Funcionalidades</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Preços</Link></li>
                <li><Link to="/features#integrations" className="hover:text-white transition-colors">Integrações</Link></li>
                <li><Link to="/features#security" className="hover:text-white transition-colors">Segurança</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/partners-program" className="hover:text-white transition-colors">Programa de Parceiros</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CS360°. Todos os direitos reservados. Transformando Customer Success com Inteligência Artificial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
