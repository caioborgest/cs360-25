
import React from 'react';
import { WebsiteLayout } from '../components/layout/WebsiteLayout';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Users, Target, TrendingUp, Shield, Zap, CheckCircle, Star, 
  ArrowRight, Play, Brain, Rocket, Heart, Building2, Sparkles,
  Award, Clock, Globe, BarChart3
} from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Clientes 360°',
      description: 'Centralize informações, monitore health score e gerencie relacionamentos com inteligência.'
    },
    {
      icon: Brain,
      title: 'IA Preditiva Avançada',
      description: 'Previna churn com 95% de precisão usando machine learning e algoritmos inteligentes.'
    },
    {
      icon: Target,
      title: 'Gestão de Metas Inteligente',
      description: 'Defina, acompanhe e alcance objetivos com dashboards visuais e insights acionáveis.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics em Tempo Real',
      description: 'Dashboards interativos, métricas ao vivo e relatórios personalizados para decisões estratégicas.'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Workflows automatizados e IA para escalar operações sem perder qualidade.'
    },
    {
      icon: Shield,
      title: 'Segurança Enterprise',
      description: 'Proteção avançada com criptografia end-to-end, compliance LGPD e auditoria completa.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Head of Customer Success',
      company: 'TechCorp',
      content: 'O CS360° revolucionou nossa operação. Aumentamos a retenção em 45% e reduzimos churn em 60% nos primeiros 6 meses.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      results: '+45% retenção',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'A IA preditiva nos permitiu antecipar problemas e agir proativamente. ROI de 400% no primeiro ano de uso.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      results: '400% ROI',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'VP Customer Success',
      company: 'Enterprise Corp',
      content: 'Escalamos de 100 para 1000 clientes mantendo a mesma equipe. A automação foi fundamental para esse crescimento.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      results: '10x crescimento',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Empresas Ativas', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { number: '95%', label: 'Precisão da IA', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { number: '2M+', label: 'Clientes Gerenciados', icon: Users, color: 'from-green-500 to-emerald-500' },
    { number: '40%', label: 'Redução Média de Churn', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' },
    { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png' },
    { name: 'Microsoft Teams', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg' },
    { name: 'Zendesk', logo: 'https://d1eipm3vz40hy0.cloudfront.net/images/AMER/zendesk-logo.png' },
    { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' }
  ];

  const benefits = [
    { icon: Clock, text: 'Setup em 5 minutos' },
    { icon: Shield, text: 'Segurança Enterprise' },
    { icon: Globe, text: '200+ Integrações' },
    { icon: Award, text: 'Suporte Premium 24/7' }
  ];

  return (
    <WebsiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border-blue-400/30 px-8 py-4 text-lg font-medium backdrop-blur-sm">
                <BarChart3 className="w-5 h-5 mr-3" />
                Plataforma #1 em Customer Success no Brasil
              </Badge>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-10 leading-tight tracking-tight">
              Customer Success
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mt-4">
                com Inteligência Artificial
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-blue-100 mb-16 max-w-6xl mx-auto leading-relaxed font-light">
              A única plataforma que combina gestão completa de CS com IA preditiva para 
              <span className="font-semibold text-cyan-300 block mt-2"> prevenir churn, aumentar retenção e escalar resultados</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="text-2xl px-16 py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Rocket className="w-7 h-7 mr-4" />
                  Começar Teste Grátis
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-2xl px-16 py-8 border-2 border-blue-400/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 font-semibold"
                >
                  <Play className="w-7 h-7 mr-4" />
                  Ver Demonstração
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-10 text-blue-200 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <benefit.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <span className="font-medium text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Resultados que Transformam Negócios
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Números reais de empresas que já revolucionaram seu Customer Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-4">
                <CardContent className="p-10 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-900 mb-4">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-xl">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <Badge className="bg-blue-100 text-blue-800 px-6 py-3 mb-8 text-lg">
              <Sparkles className="w-5 h-5 mr-3" />
              Funcionalidades Avançadas
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-10 leading-tight">
              Tecnologia que
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revoluciona Resultados
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Descubra como nossa plataforma transforma cada aspecto do seu Customer Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-10">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xl">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Conecte com Seu Ecossistema
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto">
              Mais de 200 integrações nativas para maximizar seu investimento em tecnologia
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center justify-items-center mb-20">
            {integrations.map((integration, index) => (
              <div key={index} className="group">
                <div className="w-28 h-28 bg-white rounded-3xl shadow-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 p-6 group-hover:scale-110">
                  <img 
                    src={integration.logo} 
                    alt={integration.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
                <p className="text-center text-lg text-gray-600 mt-4 font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/features#integrations">
              <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 hover:bg-blue-50 hover:border-blue-300">
                Ver Todas as Integrações
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <Badge className="bg-green-100 text-green-800 px-6 py-3 mb-8 text-lg">
              <Award className="w-5 h-5 mr-3" />
              Casos de Sucesso
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Resultados Comprovados
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Veja como nossos clientes transformaram seus resultados de Customer Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                <CardContent className="p-10">
                  {/* Rating */}
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-10 italic text-xl leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  
                  {/* Author & Results */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-5 shadow-lg" 
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-xl">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                        <div className="font-medium text-blue-600">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 font-bold">
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
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <Badge className="bg-white/20 text-white px-6 py-3 backdrop-blur-sm text-lg">
              <Sparkles className="w-5 h-5 mr-3" />
              Transforme Hoje Mesmo
            </Badge>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Pronto para Revolucionar
            <span className="block text-cyan-300">seu Customer Success?</span>
          </h2>
          
          <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Junte-se a mais de 500 empresas que já transformaram seus resultados com nossa IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-2xl px-16 py-8 shadow-2xl font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="w-7 h-7 mr-4" />
                Começar Teste Grátis
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-2xl px-16 py-8 text-white font-semibold transition-all duration-300"
              >
                Ver Preços
                <ArrowRight className="w-7 h-7 ml-4" />
              </Button>
            </Link>
          </div>

          {/* Final Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-10 text-blue-200">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span className="font-medium text-lg">Sem setup complexo</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Heart className="w-5 h-5 mr-3" />
              <span className="font-medium text-lg">Suporte premium</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5 mr-3" />
              <span className="font-medium text-lg">Dados 100% seguros</span>
            </div>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default Landing;
