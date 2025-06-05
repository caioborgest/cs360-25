import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
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
  Handshake,
  Building2,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Menu,
  X,
  Lightbulb,
  Database,
  Bell,
  PieChart,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Lock,
  TrendingDown,
  AlertTriangle,
  Heart,
  Sparkles,
  Crown,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Novo: IA Preditiva com 95% de precisão
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transforme seu
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
                Customer Success
              </span>
              em resultados reais
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              A plataforma de Customer Success mais avançada do Brasil. 
              <strong className="text-gray-800"> Reduza churn em 40%, aumente NPS e maximize LTV</strong> com inteligência artificial de última geração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Rocket className="w-6 h-6 mr-3" />
                Começar Teste Grátis - 14 Dias
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2 hover:bg-gray-50">
                <Play className="w-6 h-6 mr-3" />
                Ver Demonstração ao Vivo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                14 dias grátis
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Configuração em 5 minutos
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recursos que revolucionam seu CS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta que transforma dados em ações estratégicas e resultados mensuráveis
            </p>
          </div>

          {/* Main Features Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white shadow-xl border-2 border-blue-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gray-200'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${activeFeature === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={mainFeatures[activeFeature].image}
                  alt={mainFeatures[activeFeature].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {mainFeatures[activeFeature].title}
                  </h4>
                  <p className="text-gray-600">
                    {mainFeatures[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Números que comprovam nossa excelência
            </h2>
            <p className="text-xl text-gray-600">Resultados reais de empresas que transformaram seu Customer Success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recursos Avançados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta que transforma dados em ações estratégicas e resultados mensuráveis
            </p>
          </div>

          {/* Main Features Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white shadow-xl border-2 border-blue-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gray-200'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${activeFeature === index ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={mainFeatures[activeFeature].image}
                  alt={mainFeatures[activeFeature].title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {mainFeatures[activeFeature].title}
                  </h4>
                  <p className="text-gray-600">
                    {mainFeatures[activeFeature].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Testemunhos
            </h2>
            <p className="text-xl text-gray-600">
              Veja como empresas como a sua revolucionaram seus resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{result}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Gift className="w-4 h-4 mr-2" />
              Promoção de Lançamento - Até 38% OFF
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Planos que crescem com seu negócio
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal e comece a transformar seus resultados hoje mesmo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-2xl scale-105' 
                  : 'border border-gray-200 hover:shadow-xl'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-medium">
                    <Crown className="w-4 h-4 inline mr-2" />
                    Mais Popular
                  </div>
                )}
                
                {plan.savings && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    {plan.savings}
                  </Badge>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-6">
                    {plan.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">{plan.originalPrice}</div>
                    )}
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">{plan.description}</p>
                  <Badge variant="outline" className="mt-2">
                    {plan.highlight}
                  </Badge>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : ''
                  }`}>
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Precisa de mais informações? Fale com nossos especialistas
            </p>
            <Button variant="outline" size="lg">
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para revolucionar seu Customer Success?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Junte-se a <strong>500+ empresas</strong> que já transformaram seus resultados com o CS360°. 
            Comece seu teste gratuito agora e veja a diferença em 14 dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl">
              <Rocket className="w-6 h-6 mr-3" />
              Começar Teste Gratuito
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4">
              <Calendar className="w-6 h-6 mr-3" />
              Agendar Demonstração
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Sem compromisso
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Dados seguros
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Suporte 24/7
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Implementação guiada
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold">CS360°</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                A plataforma de Customer Success mais avançada do Brasil. 
                Transformamos dados em resultados reais para seu negócio.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Produto</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Recursos</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Preços</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Empresa</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investidores</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Suporte</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academia CS360°</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-gray-400">
                <p>&copy; 2024 CS360°. Todos os direitos reservados.</p>
              </div>
              <div className="flex flex-wrap justify-end gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <a href="#" className="hover:text-white transition-colors">LGPD</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
