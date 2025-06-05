import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { MainNavigation } from '../components/MainNavigation';
import { PartnerRegistrationForm } from '../components/partner-form/PartnerRegistrationForm';
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
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

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

  if (showRegistrationForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <MainNavigation />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowRegistrationForm(false)}
                className="mb-4"
              >
                ← Voltar ao Programa de Parceiros
              </Button>
            </div>
            <PartnerRegistrationForm />
          </div>
        </div>
      </div>
    );
  }

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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg"
              onClick={() => setShowRegistrationForm(true)}
            >
              Cadastrar-se Agora
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

      {/* Registration Form CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Se Tornar um Parceiro?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cadastre-se em nosso programa e comece a ganhar comissões hoje mesmo!
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">🚀</div>
                <div className="text-lg font-semibold">Cadastro Rápido</div>
                <div className="text-sm opacity-75">3 etapas simples</div>
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
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => setShowRegistrationForm(true)}
            >
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
