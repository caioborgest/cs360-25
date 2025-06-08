
import React from 'react';
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
  Play
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description: 'Centralize todas as informações dos seus clientes e acompanhe o relacionamento.'
    },
    {
      icon: Target,
      title: 'Gestão de Metas',
      description: 'Defina, acompanhe e alcance suas metas de Customer Success.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Avançados',
      description: 'Insights poderosos para tomar decisões baseadas em dados.'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize processos repetitivos com IA avançada.'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Seus dados protegidos com a mais alta segurança.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Detalhados',
      description: 'Relatórios completos para acompanhar performance.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Head of Customer Success',
      company: 'TechCorp',
      content: 'O CS360° transformou completamente nossa operação de CS. Aumentamos a retenção em 40%.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'Ferramenta indispensável para qualquer empresa que se preocupa com o sucesso do cliente.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CS360°
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Recursos</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Preços</Link>
              <Link to="/partners-program" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Parceiros</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Teste Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              🚀 Plataforma #1 em Customer Success
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Customer Success
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
                360 graus
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              A plataforma completa para revolucionar sua estratégia de Customer Success. 
              Gerencie clientes, contratos, metas e muito mais em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/auth">
                <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Play className="w-6 h-6 mr-3" />
                  Começar Gratuitamente
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-2">
                  Ver Recursos
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tudo que você precisa para o
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> sucesso do cliente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas poderosas e integradas para gerenciar todo o ciclo de vida do cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos clientes amam o CS360°
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes estão dizendo sobre a plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic text-lg">
                    "{testimonial.content}"
                  </blockquote>
                  
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
            Pronto para revolucionar seu Customer Success?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Junte-se a centenas de empresas que já transformaram seus resultados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">
                <Play className="w-6 h-6 mr-3" />
                Começar Gratuitamente
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4">
                Ver Preços
              </Button>
            </Link>
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
              <p className="text-gray-400 mb-6 text-lg">
                A plataforma completa para Customer Success que sua empresa precisa.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Recursos</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Preços</Link></li>
                <li><Link to="/partners-program" className="hover:text-white transition-colors">Parceiros</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
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
