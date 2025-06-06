
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  BarChart3, 
  ChevronDown, 
  Menu, 
  X,
  Home,
  Building2,
  Zap,
  DollarSign,
  Users,
  Handshake,
  Star,
  Award,
  Target,
  Brain,
  MessageSquare,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  Globe,
  HeadphonesIcon,
  FileText,
  Calendar,
  Calculator
} from 'lucide-react';

export const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'Sobre',
      href: '#about',
      icon: Building2,
      dropdown: {
        title: 'Conheça o CS360°',
        items: [
          { label: 'Nossa História', href: '#about', icon: Building2, description: 'Como revolucionamos o Customer Success' },
          { label: 'Equipe', href: '#team', icon: Users, description: 'Especialistas em CS e tecnologia' },
          { label: 'Missão & Visão', href: '#mission', icon: Target, description: 'Nossos valores e objetivos' },
          { label: 'Investidores', href: '#investors', icon: TrendingUp, description: 'Nossos parceiros de crescimento' }
        ]
      }
    },
    {
      label: 'Recursos',
      href: '/features',
      icon: Zap,
      dropdown: {
        title: 'Funcionalidades Avançadas',
        items: [
          { label: 'IA Preditiva', href: '/features#ai', icon: Brain, description: '95% de precisão na previsão de churn' },
          { label: 'Dashboard 360°', href: '/features#dashboard', icon: BarChart3, description: 'Visão completa do customer journey' },
          { label: 'Automação', href: '/features#automation', icon: Zap, description: 'Workflows inteligentes e escaláveis' },
          { label: 'Health Score', href: '/features#health', icon: Shield, description: 'Monitoramento em tempo real' },
          { label: 'Integrações', href: '/features#integrations', icon: Globe, description: 'Conecte com 200+ ferramentas' },
          { label: 'Relatórios', href: '/features#reports', icon: FileText, description: 'Insights acionáveis e personalizados' }
        ]
      }
    },
    {
      label: 'Preços',
      href: '/pricing',
      icon: DollarSign,
      dropdown: {
        title: 'Planos Flexíveis',
        items: [
          { label: 'Starter', href: '/pricing#starter', icon: Lightbulb, description: 'R$ 199/mês - Ideal para começar' },
          { label: 'Professional', href: '/pricing#professional', icon: Star, description: 'R$ 499/mês - Mais vendido' },
          { label: 'Growth', href: '/pricing#growth', icon: TrendingUp, description: 'R$ 999/mês - Máximo desempenho' },
          { label: 'Enterprise', href: '/pricing#enterprise', icon: Building2, description: 'Sob consulta - Solução corporativa' },
          { label: 'Calculadora ROI', href: '/pricing#calculator', icon: Calculator, description: 'Calcule seu retorno' },
          { label: 'Comparativo', href: '/pricing#compare', icon: CheckCircle, description: 'Compare todos os planos' }
        ]
      }
    },
    {
      label: 'Clientes',
      href: '#testimonials',
      icon: Users,
      dropdown: {
        title: 'Histórias de Sucesso',
        items: [
          { label: 'Cases de Sucesso', href: '#testimonials', icon: Award, description: 'Resultados reais de clientes' },
          { label: 'Depoimentos', href: '#reviews', icon: MessageSquare, description: 'O que dizem sobre nós' },
          { label: 'Comunidade', href: '#community', icon: Users, description: 'Rede de profissionais CS' },
          { label: 'Eventos', href: '#events', icon: Calendar, description: 'Webinars e treinamentos' }
        ]
      }
    },
    {
      label: 'Parceiros',
      href: '/partners-program',
      icon: Handshake,
      dropdown: {
        title: 'Programa de Parceiros',
        items: [
          { label: 'Seja um Parceiro', href: '/partners-program#join', icon: Handshake, description: 'Até 40% de comissão recorrente' },
          { label: 'Portal do Parceiro', href: '/partner-portal', icon: Globe, description: 'Acesse sua área exclusiva' },
          { label: 'Materiais de Apoio', href: '/partners-program#materials', icon: FileText, description: 'Downloads e recursos' },
          { label: 'Certificações', href: '/partners-program#certifications', icon: Award, description: 'Torne-se especialista certificado' }
        ]
      }
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CS360°
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.dropdown.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {item.dropdown.items.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group/item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                <dropdownItem.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/app">
              <Button variant="ghost" className="hidden sm:inline-flex text-gray-600 hover:text-blue-600">
                Entrar na Plataforma
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <Star className="w-4 h-4 mr-2" />
              Teste Grátis
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-8 space-y-1 mt-2">
                      {item.dropdown.items.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 hover:text-blue-600 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
                <Link to="/app">
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="w-4 h-4 mr-2" />
                    Entrar na Plataforma
                  </Button>
                </Link>
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600">
                  <Star className="w-4 h-4 mr-2" />
                  Teste Grátis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};
