import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MainNavigation } from '../components/MainNavigation';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Award, 
  Star, 
  ArrowRight, 
  Check, 
  Play,
  GraduationCap,
  FileText,
  MessageSquare,
  BarChart3,
  Search,
  Rocket,
  X,
  CheckCircle
} from 'lucide-react';

const PartnersProgram = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      console.log('Email submitted:', email);
    }
  };

  const partnershipTypes = [
    {
      type: 'Indicação',
      description: 'Agência apenas indica o cliente',
      commission: '10% recorrente',
      level: 'Todos os níveis',
      color: 'blue'
    },
    {
      type: 'Revenda',
      description: 'Agência vende o sistema e você atende',
      commission: '15% a 35% recorrente',
      level: 'A partir de Member',
      color: 'green'
    },
    {
      type: 'Implementação',
      description: 'Agência presta serviços (implantação, CS, treinamento, etc.)',
      commission: 'Valor livre',
      level: 'A partir de Member',
      color: 'purple'
    },
    {
      type: 'White Label',
      description: 'Agência comercializa com sua marca',
      commission: 'Margem personalizada',
      level: 'Somente Elite',
      color: 'gold'
    }
  ];

  const partnerLevels = [
    {
      level: 'Starter',
      activeClients: '0-1',
      mrr: 'Até R$ 999',
      certifications: '1 Básica',
      commissionIndication: '10%',
      commissionResale: '❌',
      whiteLabel: '❌',
      color: 'gray'
    },
    {
      level: 'Member',
      activeClients: '2+',
      mrr: 'R$ 1.000+',
      certifications: '2',
      commissionIndication: '10%',
      commissionResale: '15%',
      whiteLabel: '❌',
      color: 'blue'
    },
    {
      level: 'Gold',
      activeClients: '5+',
      mrr: 'R$ 3.000+',
      certifications: '3',
      commissionIndication: '10%',
      commissionResale: '20%',
      whiteLabel: '❌',
      color: 'yellow'
    },
    {
      level: 'Platinum',
      activeClients: '15+',
      mrr: 'R$ 6.000+',
      certifications: '4',
      commissionIndication: '10%',
      commissionResale: '25%',
      whiteLabel: '❌',
      color: 'purple'
    },
    {
      level: 'Elite',
      activeClients: '30+',
      mrr: 'R$ 12.000+',
      certifications: '5',
      commissionIndication: '10%',
      commissionResale: '35%',
      whiteLabel: '✅',
      color: 'gradient'
    }
  ];

  const systemPlans = [
    {
      plan: 'Starter',
      value: 'R$ 199/mês',
      indication: 'R$ 19,90',
      member: '❌',
      gold: '❌',
      platinum: '❌',
      elite: '❌'
    },
    {
      plan: 'Professional',
      value: 'R$ 499/mês',
      indication: 'R$ 49,90',
      member: 'R$ 74,85',
      gold: 'R$ 99,80',
      platinum: 'R$ 124,75',
      elite: 'R$ 174,65'
    },
    {
      plan: 'Growth',
      value: 'R$ 999/mês',
      indication: 'R$ 99,90',
      member: 'R$ 149,85',
      gold: 'R$ 199,80',
      platinum: 'R$ 249,75',
      elite: 'R$ 349,65'
    },
    {
      plan: 'Enterprise',
      value: 'R$ sob consulta',
      indication: 'Negociável',
      member: 'Negociável',
      gold: 'Negociável',
      platinum: 'Negociável',
      elite: 'Negociável'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <MainNavigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Programa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Parceiros CS360°</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforme seu negócio em uma máquina de crescimento. Ganhe comissões recorrentes, 
            acesse ferramentas exclusivas e construa um império no Customer Success.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-gray-600">Comissão Máxima</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 50k+</div>
              <div className="text-gray-600">Renda Média Mensal</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-gray-600">Suporte Dedicado</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Parceiros Ativos</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tipos de Parceria</h2>
            <p className="text-xl text-gray-600">Escolha o modelo que melhor se adapta ao seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${type.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <Users className={`w-6 h-6 text-${type.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{type.type}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Comissão:</span>
                      <span className="text-sm font-medium text-green-600">{type.commission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Nível:</span>
                      <span className="text-sm font-medium text-blue-600">{type.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Levels */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Níveis de Parceiros</h2>
            <p className="text-xl text-gray-600">Evolua seu nível e aumente suas comissões</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-xl shadow-lg">
              <div className="grid grid-cols-7 gap-4 p-6 border-b bg-gray-50">
                <div className="font-semibold text-gray-900">Nível</div>
                <div className="font-semibold text-gray-900">Clientes Ativos</div>
                <div className="font-semibold text-gray-900">MRR Gerado</div>
                <div className="font-semibold text-gray-900">Certificações</div>
                <div className="font-semibold text-gray-900">Comissão Indicação</div>
                <div className="font-semibold text-gray-900">Comissão Revenda</div>
                <div className="font-semibold text-gray-900">White Label</div>
              </div>
              
              {partnerLevels.map((level, index) => (
                <div key={index} className={`grid grid-cols-7 gap-4 p-6 border-b ${index === partnerLevels.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''}`}>
                  <div className={`font-semibold ${level.color === 'gradient' ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' : `text-${level.color}-600`}`}>
                    {level.level}
                  </div>
                  <div className="text-gray-700">{level.activeClients}</div>
                  <div className="text-gray-700">{level.mrr}</div>
                  <div className="text-gray-700">{level.certifications}</div>
                  <div className="text-green-600 font-medium">{level.commissionIndication}</div>
                  <div className={level.commissionResale === '❌' ? 'text-gray-400' : 'text-green-600 font-medium'}>
                    {level.commissionResale}
                  </div>
                  <div className={level.whiteLabel === '✅' ? 'text-green-600' : 'text-gray-400'}>
                    {level.whiteLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Plans & Commissions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos do Sistema + Comissões</h2>
            <p className="text-xl text-gray-600">Veja quanto você pode ganhar em cada plano</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-xl shadow-lg">
              <div className="grid grid-cols-7 gap-4 p-6 border-b bg-gray-50">
                <div className="font-semibold text-gray-900">Plano</div>
                <div className="font-semibold text-gray-900">Valor Cliente</div>
                <div className="font-semibold text-gray-900">Indicação (10%)</div>
                <div className="font-semibold text-gray-900">Member (15%)</div>
                <div className="font-semibold text-gray-900">Gold (20%)</div>
                <div className="font-semibold text-gray-900">Platinum (25%)</div>
                <div className="font-semibold text-gray-900">Elite (35%)</div>
              </div>
              
              {systemPlans.map((plan, index) => (
                <div key={index} className="grid grid-cols-7 gap-4 p-6 border-b">
                  <div className="font-semibold text-blue-600">{plan.plan}</div>
                  <div className="text-gray-700 font-medium">{plan.value}</div>
                  <div className="text-green-600 font-medium">{plan.indication}</div>
                  <div className={plan.member === '❌' ? 'text-gray-400' : 'text-green-600 font-medium'}>
                    {plan.member}
                  </div>
                  <div className={plan.gold === '❌' ? 'text-gray-400' : 'text-green-600 font-medium'}>
                    {plan.gold}
                  </div>
                  <div className={plan.platinum === '❌' ? 'text-gray-400' : 'text-green-600 font-medium'}>
                    {plan.platinum}
                  </div>
                  <div className={plan.elite === '❌' ? 'text-gray-400' : 'text-green-600 font-medium'}>
                    {plan.elite}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">Três passos simples para começar a ganhar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Cadastre-se</h3>
              <p className="text-gray-600">Crie sua conta de parceiro e acesse nossa plataforma completa de treinamento e materiais.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Aprenda</h3>
              <p className="text-gray-600">Complete nossa certificação CS360° e domine as melhores práticas de Customer Success.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Venda</h3>
              <p className="text-gray-600">Use nossos materiais, demos e suporte para converter leads e ganhar comissões recorrentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Estrutura de Comissões</h2>
            <p className="text-xl text-gray-600">Quanto mais você vende, mais você ganha</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold text-blue-600">30%</div>
                <p className="text-gray-600">Comissão recorrente</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    0-10 clientes vendidos
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Material de vendas
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Suporte por email
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-purple-200 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">Mais Popular</Badge>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold text-purple-600">40%</div>
                <p className="text-gray-600">Comissão recorrente</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    11-50 clientes vendidos
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Kit completo de vendas
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Suporte prioritário
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Treinamentos mensais
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>Elite</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">50%</div>
                <p className="text-gray-600">Comissão recorrente</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    50+ clientes vendidos
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Materiais exclusivos
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Gerente dedicado
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Eventos VIP
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificação CS360°</h2>
            <p className="text-xl text-gray-600">Torne-se um especialista certificado em Customer Success</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que você vai aprender:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong>Fundamentos do Customer Success:</strong> Conceitos, métricas e metodologias
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong>Análise de Churn:</strong> Como identificar e prevenir a perda de clientes
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong>Upsell e Cross-sell:</strong> Estratégias para expandir receita
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong>Plataforma CS360°:</strong> Domine todas as funcionalidades
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  <strong className="text-blue-900">Certificação Oficial</strong>
                </div>
                <p className="text-blue-800">
                  Receba seu certificado digital e badge para LinkedIn após completar o curso.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-gray-900" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Curso de Certificação</h4>
                <p className="text-gray-300">40 horas de conteúdo premium</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Módulos</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Vídeos</span>
                  <span>120+</span>
                </div>
                <div className="flex justify-between">
                  <span>Exercícios</span>
                  <span>50+</span>
                </div>
                <div className="flex justify-between">
                  <span>Casos Reais</span>
                  <span>20+</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos Exclusivos</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para vender com sucesso</p>
          </div>

          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sales">Vendas</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="support">Suporte</TabsTrigger>
              <TabsTrigger value="training">Treinamento</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <FileText className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>Proposta Personalizada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Templates de proposta com seu branding para impressionar clientes.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Search className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle>Scripts de Vendas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Roteiros testados e aprovados para cada etapa do funil de vendas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle>Demo Personalizada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Ambiente de demonstração com seus dados para apresentações.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Rocket className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>Landing Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Páginas de captura otimizadas com seu link de afiliado.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MessageSquare className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle>Email Marketing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sequências de email prontas para nutrir seus leads.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Award className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle>Materiais Gráficos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Banners, infográficos e posts para redes sociais.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte 24/7</h3>
                <p className="text-gray-600 mb-6">Nossa equipe está sempre disponível para ajudar você e seus clientes.</p>
                <Button size="lg">Entrar em Contato</Button>
              </div>
            </TabsContent>

            <TabsContent value="training" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Treinamentos Mensais</h3>
                <p className="text-gray-600 mb-6">Webinars, workshops e sessões de Q&A com nossos especialistas.</p>
                <Button size="lg">Ver Calendário</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Histórias de Sucesso</h2>
            <p className="text-xl text-gray-600">Veja como nossos parceiros estão prosperando</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Marcos Costa</h4>
                  <p className="text-gray-600 text-sm">Consultor CS</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Em 6 meses como parceiro CS360°, consegui gerar R$ 180k em comissões. 
                O suporte da equipe é excepcional!"
              </p>
              <div className="text-sm text-gray-500">
                💰 R$ 30k/mês • 📈 85 clientes vendidos
              </div>
            </Card>

            {/* Success Story 2 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Ana Silva</h4>
                  <p className="text-gray-600 text-sm">Agência Digital</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Integrei o CS360° aos serviços da minha agência. Agora tenho uma fonte 
                de receita recorrente fantástica!"
              </p>
              <div className="text-sm text-gray-500">
                💰 R$ 45k/mês • 📈 120 clientes vendidos
              </div>
            </Card>

            {/* Success Story 3 */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  RF
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Roberto Ferreira</h4>
                  <p className="text-gray-600 text-sm">Freelancer</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Saí do meu emprego CLT para me dedicar 100% ao programa de parceiros. 
                Melhor decisão da minha vida!"
              </p>
              <div className="text-sm text-gray-500">
                💰 R$ 55k/mês • 📈 150 clientes vendidos
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Transformar sua Carreira?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de parceiros que já estão construindo um negócio próspero 
            com o CS360°. Comece hoje mesmo!
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">🚀</div>
                <div className="text-lg font-semibold">Setup em 24h</div>
                <div className="text-sm opacity-75">Comece a vender rapidamente</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">💰</div>
                <div className="text-lg font-semibold">Sem investimento</div>
                <div className="text-sm opacity-75">100% gratuito para começar</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">🎯</div>
                <div className="text-lg font-semibold">Suporte completo</div>
                <div className="text-sm opacity-75">Nossa equipe te acompanha</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Cadastrar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Falar com Especialista
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-6">
            * Sem taxa de inscrição • Sem compromisso de permanência • Suporte gratuito
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CS360°</h3>
              <p className="text-gray-400">
                A plataforma mais completa de Customer Success do Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white">Comissões</a></li>
                <li><a href="#" className="hover:text-white">Certificação</a></li>
                <li><a href="#" className="hover:text-white">Recursos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 parceiros@cs360.com.br</li>
                <li>📱 (11) 99999-9999</li>
                <li>💬 Chat ao vivo 24/7</li>
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

export default PartnersProgram;
