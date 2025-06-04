
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  BarChart3,
  Handshake,
  Users,
  Building2,
  Crown,
  DollarSign,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  Globe,
  Target,
  Zap,
  Gift,
  Heart,
  Briefcase,
  GraduationCap,
  Shield,
  Clock,
  FileText,
  Calendar,
  MessageSquare,
  Download,
  Upload,
  RefreshCw,
  BarChart,
  PieChart,
  Activity,
  Sparkles,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnersProgram = () => {
  const [activePartnerType, setActivePartnerType] = useState('referral');

  const partnerTypes = [
    {
      id: 'referral',
      icon: Handshake,
      title: 'Parceiro de Indicação',
      subtitle: 'Indique e ganhe',
      commission: '10% recorrente',
      description: 'Indique clientes e ganhe comissões recorrentes sem investimento',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Comissão de 10% recorrente vitalícia',
        'Sem investimento inicial necessário',
        'Material de apoio completo',
        'Dashboard exclusivo para acompanhar indicações',
        'Pagamento automático mensal',
        'Suporte dedicado para fechamento'
      ],
      requirements: [
        'Cadastro simples no programa',
        'Indicar empresas com 50+ funcionários',
        'Acompanhar o processo de vendas'
      ],
      earnings: 'R$ 500 - R$ 5.000/mês',
      timeToStart: '1 dia'
    },
    {
      id: 'reseller',
      icon: Users,
      title: 'Parceiro Revendedor',
      subtitle: 'Venda nossa solução',
      commission: 'Até 40%',
      description: 'Revenda nossa solução e maximize seus ganhos com descontos progressivos',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Comissão de até 40% por venda',
        'Desconto progressivo conforme volume',
        'Treinamento completo de vendas',
        'Certificação oficial CS360°',
        'Suporte técnico dedicado',
        'Kit de vendas profissional',
        'Demonstrações assistidas',
        'CRM exclusivo para parceiros'
      ],
      requirements: [
        'Experiência em vendas B2B',
        'Participar do treinamento (40h)',
        'Meta mínima de R$ 50.000/trimestre',
        'Certificação CS360° obrigatória'
      ],
      earnings: 'R$ 5.000 - R$ 50.000/mês',
      timeToStart: '2 semanas'
    },
    {
      id: 'implementer',
      icon: Building2,
      title: 'Parceiro Implementador',
      subtitle: 'Ofereça serviços',
      commission: 'R$ 5.000 - R$ 25.000',
      description: 'Ofereça serviços de implementação e consultoria especializados',
      color: 'from-purple-500 to-violet-500',
      benefits: [
        'Projeto base de R$ 15.000 por implementação',
        'Adicional por complexidade e customização',
        'Margem alta com projetos exclusivos',
        'Crescimento escalável com equipe',
        'Treinamento técnico avançado',
        'Certificação de implementador',
        'Suporte durante projetos',
        'Metodologia proprietária'
      ],
      requirements: [
        'Experiência em Customer Success',
        'Equipe técnica qualificada',
        'Certificação de implementador',
        'Disponibilidade para projetos'
      ],
      earnings: 'R$ 15.000 - R$ 100.000/projeto',
      timeToStart: '1 mês'
    },
    {
      id: 'whitelabel',
      icon: Crown,
      title: 'White Label Premium',
      subtitle: 'Sua marca, nossa tecnologia',
      commission: '60% da receita',
      description: 'Use nossa tecnologia com sua marca e tenha controle total',
      color: 'from-orange-500 to-red-500',
      benefits: [
        '60% de toda receita gerada',
        'Plataforma com sua marca completa',
        'Controle total sobre preços',
        'Customizações exclusivas',
        'Infraestrutura dedicada opcional',
        'Suporte white-label completo',
        'Treinamento de equipe incluso',
        'Roadmap personalizado'
      ],
      requirements: [
        'Investimento inicial de R$ 50.000',
        'Equipe de CS estruturada',
        'Meta mínima de R$ 200.000/ano',
        'Contrato de 2 anos mínimo'
      ],
      earnings: 'R$ 50.000 - R$ 500.000+/mês',
      timeToStart: '3 meses'
    }
  ];

  const successStories = [
    {
      name: 'Roberto Silva',
      company: 'TechConsult',
      type: 'Revendedor',
      period: '18 meses no programa',
      earnings: 'R$ 85.000/mês',
      growth: '+320%',
      story: 'Começei como revendedor há 18 meses e hoje lidero uma equipe de 5 vendedores. O CS360° me permitiu construir um negócio sólido e escalável.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      company: 'SuccessPartners',
      type: 'Implementadora',
      period: '2 anos no programa',
      earnings: 'R$ 180.000/projeto',
      growth: '+500%',
      story: 'Como implementadora, transformamos empresas e construímos relacionamentos duradouros. Já implementamos em mais de 80 empresas.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Carlos Mendes',
      company: 'CS Solutions',
      type: 'White Label',
      period: '3 anos no programa',
      earnings: 'R$ 450.000/mês',
      growth: '+1200%',
      story: 'Com o white label, construí minha própria empresa de CS tech. Hoje atendemos 200+ empresas com nossa marca própria.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const supportResources = [
    {
      icon: GraduationCap,
      title: 'Academia de Parceiros',
      description: 'Treinamento completo em Customer Success',
      features: ['40h de conteúdo', 'Certificação oficial', 'Atualizações contínuas', 'Comunidade exclusiva']
    },
    {
      icon: FileText,
      title: 'Kit de Vendas',
      description: 'Materiais profissionais para vendas',
      features: ['Apresentações prontas', 'Cases de sucesso', 'ROI calculators', 'Propostas templates']
    },
    {
      icon: MessageSquare,
      title: 'Suporte Dedicado',
      description: 'Equipe exclusiva para parceiros',
      features: ['Slack exclusivo', 'Calls semanais', 'Suporte técnico', 'Mentor dedicado']
    },
    {
      icon: BarChart,
      title: 'Dashboard Parceiro',
      description: 'Acompanhe performance em tempo real',
      features: ['Métricas detalhadas', 'Comissões transparentes', 'Pipeline de vendas', 'Relatórios automáticos']
    }
  ];

  const earnings = {
    referral: [
      { clients: '10 clientes', earnings: 'R$ 4.990/mês', details: 'R$ 499 × 10 clientes × 10%' },
      { clients: '25 clientes', earnings: 'R$ 12.475/mês', details: 'R$ 499 × 25 clientes × 10%' },
      { clients: '50 clientes', earnings: 'R$ 24.950/mês', details: 'R$ 499 × 50 clientes × 10%' },
      { clients: '100 clientes', earnings: 'R$ 49.900/mês', details: 'R$ 499 × 100 clientes × 10%' }
    ],
    reseller: [
      { volume: 'R$ 50.000/mês', earnings: 'R$ 15.000/mês', details: '30% de comissão' },
      { volume: 'R$ 100.000/mês', earnings: 'R$ 35.000/mês', details: '35% de comissão' },
      { volume: 'R$ 200.000/mês', earnings: 'R$ 80.000/mês', details: '40% de comissão' },
      { volume: 'R$ 500.000/mês', earnings: 'R$ 200.000/mês', details: '40% de comissão' }
    ],
    implementer: [
      { project: 'Implementação básica', earnings: 'R$ 15.000', details: '50-100 usuários' },
      { project: 'Implementação média', earnings: 'R$ 35.000', details: '100-500 usuários' },
      { project: 'Implementação avançada', earnings: 'R$ 65.000', details: '500+ usuários' },
      { project: 'Implementação enterprise', earnings: 'R$ 150.000+', details: 'Customizações completas' }
    ],
    whitelabel: [
      { revenue: 'R$ 50.000/mês', earnings: 'R$ 30.000/mês', details: '60% da receita' },
      { revenue: 'R$ 150.000/mês', earnings: 'R$ 90.000/mês', details: '60% da receita' },
      { revenue: 'R$ 300.000/mês', earnings: 'R$ 180.000/mês', details: '60% da receita' },
      { revenue: 'R$ 750.000/mês', earnings: 'R$ 450.000/mês', details: '60% da receita' }
    ]
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
          <Badge className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-6 py-3">
            <DollarSign className="w-5 h-5 mr-2" />
            Programa de parceiros mais lucrativo do mercado
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cresça conosco e
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
              maximize seus ganhos
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Junte-se ao programa de parceiros CS360° e construa uma fonte de renda recorrente 
            ajudando empresas a transformar seu Customer Success.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">60%</div>
              <div className="text-gray-600">Comissão máxima</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Parceiros ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">R$ 85k</div>
              <div className="text-gray-600">Ganho médio/mês</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600">Suporte dedicado</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
            <Handshake className="w-6 h-6 mr-3" />
            Quero ser Parceiro
          </Button>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha o tipo de parceria ideal
            </h2>
            <p className="text-xl text-gray-600">
              Diferentes modalidades para diferentes perfis e objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerTypes.map((partner, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-0 overflow-hidden ${
                  activePartnerType === partner.id ? 'ring-4 ring-blue-200 shadow-xl' : ''
                }`}
                onClick={() => setActivePartnerType(partner.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${partner.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${partner.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <partner.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{partner.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{partner.subtitle}</p>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-green-600 to-emerald-600">
                    {partner.commission}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-600">
                      <strong>Ganho médio:</strong> {partner.earnings}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Tempo para começar:</strong> {partner.timeToStart}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Partner Details */}
          <Card className="border-2 border-blue-200 shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-4">
                {(() => {
                  const activePartner = partnerTypes.find(p => p.id === activePartnerType);
                  return (
                    <>
                      <div className={`w-16 h-16 bg-gradient-to-r ${activePartner.color} rounded-xl flex items-center justify-center`}>
                        <activePartner.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{activePartner.title}</CardTitle>
                        <p className="text-gray-600">{activePartner.description}</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Gift className="w-5 h-5 text-green-500 mr-2" />
                    Benefícios inclusos:
                  </h3>
                  <ul className="space-y-3">
                    {partnerTypes.find(p => p.id === activePartnerType)?.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-orange-500 mr-2" />
                    Requisitos:
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {partnerTypes.find(p => p.id === activePartnerType)?.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 border-2 border-orange-300 rounded mr-3 flex-shrink-0 mt-0.5"></div>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h4 className="font-bold text-green-900 mb-2">Potencial de Ganhos</h4>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {partnerTypes.find(p => p.id === activePartnerType)?.earnings}
                    </div>
                    <div className="text-sm text-green-700">
                      Com dedicação e estratégia adequada
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simule seus ganhos como parceiro
            </h2>
            <p className="text-xl text-gray-600">
              Veja o potencial de receita para cada tipo de parceria
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                Simulador de Ganhos - {partnerTypes.find(p => p.id === activePartnerType)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {earnings[activePartnerType]?.map((scenario, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {scenario.clients || scenario.volume || scenario.project || scenario.revenue}
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {scenario.earnings}
                    </div>
                    <div className="text-sm text-gray-600">
                      {scenario.details}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Histórias de sucesso dos nossos parceiros
            </h2>
            <p className="text-xl text-gray-600">
              Conheça parceiros que transformaram suas vidas com o programa CS360°
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.company}</div>
                      <Badge variant="outline" className="mt-1">
                        {story.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{story.earnings}</div>
                      <div className="text-xs text-gray-600">Ganho atual</div>
                    </div>
                    <div className="text-center bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{story.growth}</div>
                      <div className="text-xs text-gray-600">Crescimento</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="text-sm text-gray-500">
                    {story.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Suporte completo para seu sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Recursos e ferramentas exclusivas para maximizar seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{resource.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como se tornar um parceiro CS360°
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e rápido para começar sua jornada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Candidatura',
                description: 'Preencha nosso formulário de candidatura online',
                icon: FileText,
                time: '5 minutos'
              },
              {
                step: '2',
                title: 'Avaliação',
                description: 'Nossa equipe avalia seu perfil e entra em contato',
                icon: Search,
                time: '2-3 dias'
              },
              {
                step: '3',
                title: 'Treinamento',
                description: 'Participe do treinamento e certificação',
                icon: GraduationCap,
                time: '1-2 semanas'
              },
              {
                step: '4',
                title: 'Ativação',
                description: 'Receba seus materiais e comece a vender',
                icon: Rocket,
                time: 'Imediato'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 mb-2">{process.description}</p>
                <Badge variant="outline">{process.time}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de parceiros que já faturam 6 dígitos por mês
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Handshake className="w-5 h-5 mr-2" />
              Candidatar-se Agora
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Sem taxa de adesão
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Suporte completo
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Comissões altas
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Crescimento escalável
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersProgram;
