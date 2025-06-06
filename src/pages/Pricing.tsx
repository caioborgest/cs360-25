import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { ROICalculatorModal } from '../components/ROICalculatorModal';
import { 
  BarChart3,
  CheckCircle,
  Crown,
  Gift,
  DollarSign,
  Users,
  Building2,
  Zap,
  Shield,
  Phone,
  Clock,
  Star,
  ArrowRight,
  Calculator,
  TrendingUp,
  Heart,
  Award,
  Sparkles,
  HardDrive,
  UserPlus,
  HeadphonesIcon,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isROIModalOpen, setIsROIModalOpen] = useState(false);

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Para começar no CS',
      monthlyPrice: 299,
      annualPrice: 199,
      originalAnnual: 299,
      description: 'Ideal para pequenas empresas iniciando no Customer Success',
      features: [
        'Até 100 clientes ativos',
        'Dashboard básico com métricas essenciais',
        'NPS automático mensal',
        'Health Score básico',
        'Relatórios pré-definidos (10)',
        '1 usuário incluído (+R$ 99/usuário extra)',
        'Suporte via email (48h)',
        'Integrações básicas (5)',
        'Onboarding guiado (2h)',
        'Armazenamento 5GB',
        'Histórico de 6 meses'
      ],
      limitations: [
        'Sem automações avançadas',
        'Sem IA preditiva',
        'Relatórios limitados'
      ],
      highlight: 'Perfeito para começar',
      popular: false,
      savings: isAnnual ? 33 : 0,
      color: 'from-blue-500 to-blue-600',
      features_highlight: ['NPS Automático', 'Health Score', 'Dashboard']
    },
    {
      name: 'Professional',
      subtitle: 'Para escalar seu CS',
      monthlyPrice: 799,
      annualPrice: 499,
      originalAnnual: 799,
      description: 'Para empresas em crescimento que precisam de mais recursos',
      features: [
        'Até 500 clientes ativos',
        'Dashboard avançado com IA',
        'Automações inteligentes ilimitadas',
        'Health Score com IA preditiva (85% precisão)',
        'NPS trimestral + CSAT + CES',
        '5 usuários incluídos (+R$ 79/usuário extra)',
        'Relatórios personalizáveis (50+)',
        'Integrações avançadas (20+)',
        'API básica (1000 req/hora)',
        'Suporte prioritário (24h)',
        'Treinamento online (10h)',
        'Armazenamento 50GB',
        'Histórico de 2 anos',
        'Alertas inteligentes',
        'Segmentação automática'
      ],
      limitations: [
        'IA com precisão limitada',
        'API com rate limit'
      ],
      highlight: 'Mais vendido',
      popular: true,
      savings: isAnnual ? 38 : 0,
      color: 'from-purple-500 to-purple-600',
      features_highlight: ['IA Preditiva', 'Automações', 'API']
    },
    {
      name: 'Growth',
      subtitle: 'Para maximizar resultados',
      monthlyPrice: 1599,
      annualPrice: 999,
      originalAnnual: 1599,
      description: 'Solução completa para empresas escalando rapidamente',
      features: [
        'Até 2.000 clientes ativos',
        'IA preditiva avançada (95% precisão)',
        'Programa de parceiros incluso',
        'White-label básico disponível',
        'Análise de sentimento avançada',
        '15 usuários incluídos (+R$ 59/usuário extra)',
        'Automações com machine learning',
        'API completa (10.000 req/hora)',
        'Integrações ilimitadas',
        'CSM dedicado (4h/mês)',
        'Treinamento presencial (20h)',
        'SLA de 4 horas',
        'Armazenamento 200GB',
        'Histórico ilimitado',
        'Customizações básicas',
        'Consultoria mensal (2h)',
        'Backup automático',
        'Relatórios executivos'
      ],
      limitations: [
        'White-label limitado'
      ],
      highlight: 'Máximo desempenho',
      popular: false,
      savings: isAnnual ? 37 : 0,
      color: 'from-emerald-500 to-emerald-600',
      features_highlight: ['95% Precisão IA', 'CSM Dedicado', 'White-label']
    },
    {
      name: 'Enterprise',
      subtitle: 'Solução corporativa',
      monthlyPrice: null,
      annualPrice: null,
      originalAnnual: null,
      description: 'Solução personalizada para grandes corporações',
      features: [
        'Clientes ilimitados',
        'Infraestrutura dedicada na AWS',
        'IA personalizada para seu negócio',
        'Customizações completas',
        'Usuários ilimitados',
        'White-label completo',
        'Implementação guiada completa (80h)',
        'Consultoria estratégica inclusa (10h/mês)',
        'Treinamento da equipe (40h)',
        'API enterprise (100.000 req/hora)',
        'SLA de 1 hora garantido',
        'Suporte 24/7/365',
        'Success Manager exclusivo',
        'Roadmap personalizado',
        'Integração customizada ilimitada',
        'Compliance total (SOX, HIPAA)',
        'Backup em tempo real',
        'Disaster recovery',
        'Auditoria de segurança',
        'Onboarding premium (6 meses)'
      ],
      limitations: [],
      highlight: 'Solução corporativa',
      popular: false,
      savings: 0,
      color: 'from-orange-500 to-red-500',
      features_highlight: ['Unlimited', 'Dedicated', 'Premium Support']
    }
  ];

  const addOns = [
    {
      name: 'Usuários Extras',
      description: 'Adicione mais membros à sua equipe de Customer Success',
      icon: UserPlus,
      color: 'from-blue-500 to-blue-600',
      pricing: [
        { plan: 'Starter', price: 'R$ 99', period: '/usuário/mês' },
        { plan: 'Professional', price: 'R$ 79', period: '/usuário/mês' },
        { plan: 'Growth', price: 'R$ 59', period: '/usuário/mês' },
        { plan: 'Enterprise', price: 'Incluído', period: '' }
      ],
      features: ['Acesso completo à plataforma', 'Permissões personalizáveis', 'Relatórios individuais']
    },
    {
      name: 'Armazenamento Extra',
      description: 'Aumente sua capacidade de armazenamento de dados',
      icon: HardDrive,
      color: 'from-emerald-500 to-emerald-600',
      pricing: [
        { plan: 'Starter', price: 'R$ 49', period: '/10GB/mês' },
        { plan: 'Professional', price: 'R$ 39', period: '/50GB/mês' },
        { plan: 'Growth', price: 'R$ 29', period: '/100GB/mês' },
        { plan: 'Enterprise', price: 'Ilimitado', period: '' }
      ],
      features: ['Backup automático', 'Acesso em nuvem', 'Sincronização em tempo real']
    },
    {
      name: 'Consultoria Premium',
      description: 'Consultoria estratégica especializada em Customer Success',
      icon: HeadphonesIcon,
      color: 'from-purple-500 to-purple-600',
      pricing: [
        { plan: 'Starter', price: 'R$ 599', period: '/hora' },
        { plan: 'Professional', price: 'R$ 499', period: '/hora' },
        { plan: 'Growth', price: 'R$ 399', period: '/hora' },
        { plan: 'Enterprise', price: 'Incluído', period: '' }
      ],
      features: ['CSM sênior dedicado', 'Análise estratégica', 'Roadmap personalizado']
    },
    {
      name: 'Treinamento Avançado',
      description: 'Certificação CS360° para capacitar sua equipe',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
      pricing: [
        { plan: 'Starter', price: 'R$ 2.999', period: '/pessoa' },
        { plan: 'Professional', price: 'R$ 1.999', period: '/pessoa' },
        { plan: 'Growth', price: 'R$ 999', period: '/pessoa' },
        { plan: 'Enterprise', price: 'Incluído', period: '' }
      ],
      features: ['Certificação oficial', 'Material exclusivo', 'Suporte pós-treinamento']
    }
  ];

  const faq = [
    {
      question: 'Posso trocar de plano a qualquer momento?',
      answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. No caso de upgrade, a diferença é cobrada proporcionalmente. No downgrade, o crédito fica disponível para os próximos ciclos.'
    },
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Oferecemos 14 dias de teste gratuito completo do plano Professional, sem necessidade de cartão de crédito. Você terá acesso a todas as funcionalidades para avaliar nossa plataforma.'
    },
    {
      question: 'Existe contrato de fidelidade?',
      answer: 'Não exigimos contratos de fidelidade. Você pode cancelar a qualquer momento. Nos planos anuais, oferecemos desconto significativo, mas sem obrigatoriedade de permanência.'
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer: 'Oferecemos suporte via email para todos os planos. Nos planos superiores, temos suporte prioritário, CSM dedicado e até suporte 24/7 no Enterprise.'
    },
    {
      question: 'Meus dados ficam seguros?',
      answer: 'Absolutamente. Utilizamos criptografia de nível bancário, backup automático, conformidade com LGPD/GDPR e infraestrutura na AWS com certificação SOC 2 Type II.'
    },
    {
      question: 'Posso integrar com minhas ferramentas atuais?',
      answer: 'Sim! Oferecemos mais de 200 integrações nativas, API completa e nossa equipe pode desenvolver integrações customizadas para o plano Enterprise.'
    }
  ];

  const calculateSavings = (monthly, annual) => {
    const yearlyMonthly = monthly * 12;
    const yearlyAnnual = annual * 12;
    return Math.round(((yearlyMonthly - yearlyAnnual) / yearlyMonthly) * 100);
  };

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
            
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">Voltar ao Site</Button>
              </Link>
              <Link to="/app">
                <Button>Entrar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-green-100 text-green-800 border-green-200 px-6 py-2">
            <Gift className="w-5 h-5 mr-2" />
            Promoção de Lançamento - Até 38% OFF no plano anual
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Preços que
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              cabem no seu bolso
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a transformar 
            seus resultados de Customer Success hoje mesmo.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensal
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-500"
            />
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnnual && (
              <Badge className="bg-green-500 text-white ml-2">
                Economize até 38%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-2xl scale-105 ring-4 ring-purple-100' 
                  : 'border border-gray-200 hover:shadow-xl hover:-translate-y-1'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-3 text-sm font-bold">
                    <Crown className="w-4 h-4 inline mr-2" />
                    MAIS POPULAR
                  </div>
                )}
                
                {plan.savings > 0 && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white font-bold">
                    {plan.savings}% OFF
                  </Badge>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.name === 'Starter' && <Users className="w-8 h-8 text-white" />}
                    {plan.name === 'Professional' && <Zap className="w-8 h-8 text-white" />}
                    {plan.name === 'Growth' && <TrendingUp className="w-8 h-8 text-white" />}
                    {plan.name === 'Enterprise' && <Building2 className="w-8 h-8 text-white" />}
                  </div>
                  
                  <CardTitle className="text-2xl text-gray-900 mb-1">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    {plan.monthlyPrice ? (
                      <>
                        {isAnnual && plan.originalAnnual && (
                          <div className="text-lg text-gray-400 line-through">
                            R$ {plan.originalAnnual}/mês
                          </div>
                        )}
                        <div className="flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-900">
                            R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-600 ml-1">/mês</span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-green-600 font-medium">
                            Economize R$ {(plan.monthlyPrice * 12) - (plan.annualPrice * 12)}/ano
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-gray-900">Sob consulta</div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {plan.features_highlight.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Incluído no plano:
                    </h4>
                    <ul className="space-y-2 max-h-60 overflow-y-auto">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Shield className="w-4 h-4 text-orange-500 mr-2" />
                        Limitações:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-4 h-4 border-2 border-orange-300 rounded mr-2 flex-shrink-0 mt-0.5"></div>
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button className={`w-full mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' 
                      : plan.name === 'Enterprise'
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                      : ''
                  }`}>
                    {plan.name === 'Enterprise' ? (
                      <>
                        <Phone className="w-4 h-4 mr-2" />
                        Falar com Vendas
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Começar Teste Grátis
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {plan.highlight}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 px-6 py-2">
              <Gift className="w-5 h-5 mr-2" />
              Serviços Opcionais
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complementos e Serviços Extras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potencialize ainda mais sua experiência com CS360° através dos nossos serviços adicionais especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${addon.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${addon.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{addon.name}</CardTitle>
                        <p className="text-gray-600 text-sm leading-relaxed">{addon.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {addon.pricing.map((item, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                              {item.plan}
                            </div>
                            <div className="flex items-baseline">
                              <span className={`text-lg font-bold ${
                                item.price === 'Incluído' || item.price === 'Ilimitado' 
                                  ? 'text-green-600' 
                                  : 'text-gray-900'
                              }`}>
                                {item.price}
                              </span>
                              {item.period && (
                                <span className="text-xs text-gray-500 ml-1">{item.period}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-3 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Incluído:
                        </h4>
                        <ul className="space-y-1">
                          {addon.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4 hover:bg-gray-50">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Adicionar ao Plano
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Precisa de algo personalizado?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Nossa equipe pode desenvolver soluções customizadas para atender às necessidades específicas da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
                <Button variant="outline" size="lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Ver Casos de Uso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calcule seu ROI com o CS360°
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Empresas que usam CS360° veem resultados em média de:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Redução de Churn</div>
              <div className="text-gray-600 text-sm">Mantenha mais clientes por mais tempo</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.3x</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Aumento do LTV</div>
              <div className="text-gray-600 text-sm">Maximize o valor de cada cliente</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">450%</div>
              <div className="text-lg font-medium text-gray-900 mb-2">ROI Médio</div>
              <div className="text-gray-600 text-sm">Retorno em 12 meses</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600"
            onClick={() => setIsROIModalOpen(true)}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calcular Meu ROI Personalizado
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos e funcionalidades
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
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
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Teste gratuitamente por 14 dias, sem cartão de crédito
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar Teste Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75 mt-8">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              14 dias gratuitos
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Suporte especializado
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Implementação guiada
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Modal */}
      <ROICalculatorModal 
        isOpen={isROIModalOpen} 
        onClose={() => setIsROIModalOpen(false)} 
      />
    </div>
  );
};

export default Pricing;
