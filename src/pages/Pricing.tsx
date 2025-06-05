
import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Sparkles, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para equipes pequenas começando com CS",
      features: [
        "Até 100 clientes",
        "Dashboard básico com métricas essenciais",
        "Health Score automático",
        "Alertas de churn básicos",
        "Suporte por email",
        "1 usuário incluído"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      price: "R$ 497",
      period: "/mês",
      description: "Para equipes que querem resultados avançados",
      features: [
        "Até 500 clientes",
        "IA Preditiva de Churn",
        "Automações de workflows",
        "NPS automatizado",
        "Integrações ilimitadas",
        "Relatórios avançados",
        "Suporte prioritário",
        "5 usuários incluídos"
      ],
      popular: true,
      color: "border-blue-500"
    },
    {
      name: "Growth",
      price: "R$ 997",
      period: "/mês",
      description: "Para empresas em crescimento acelerado",
      features: [
        "Até 2.000 clientes",
        "Tudo do Professional +",
        "Customer Journey personalizado",
        "Análises preditivas avançadas",
        "API completa",
        "Onboarding dedicado",
        "CSM atribuído",
        "15 usuários incluídos"
      ],
      popular: false,
      color: "border-purple-500"
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Para grandes empresas com necessidades específicas",
      features: [
        "Clientes ilimitados",
        "White-label completo",
        "Infraestrutura dedicada",
        "SLA personalizado",
        "Integrações customizadas",
        "Treinamento presencial",
        "CSM executivo dedicado",
        "Usuários ilimitados"
      ],
      popular: false,
      color: "border-green-500"
    }
  ];

  const faqs = [
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Seus dados ficam disponíveis por 30 dias após o cancelamento."
    },
    {
      question: "Há desconto para pagamento anual?",
      answer: "Sim! Oferecemos 20% de desconto para pagamentos anuais em todos os planos. Entre em contato para mais detalhes."
    },
    {
      question: "Quais integrações estão disponíveis?",
      answer: "Oferecemos mais de 50 integrações nativas, incluindo Salesforce, HubSpot, Zendesk, Slack, e muitas outras. API completa disponível para integrações customizadas."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Planos Starter têm suporte por email. Professional e superiores incluem suporte prioritário com chat e chamadas. Enterprise tem CSM dedicado."
    },
    {
      question: "Posso fazer upgrade/downgrade do plano?",
      answer: "Sim, você pode alterar seu plano a qualquer momento. Upgrades são aplicados imediatamente, downgrades no próximo ciclo de cobrança."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            14 dias grátis • Sem cartão de crédito
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Planos que crescem
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              com sua empresa
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar seu Customer Success. 
            Comece grátis e escale conforme sua necessidade.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">
                      ⭐ Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-lg">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Teste Grátis'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              💡 Todos os planos incluem 14 dias de teste grátis, sem necessidade de cartão de crédito
            </p>
            <p className="text-sm text-gray-500">
              Precisa de mais usuários ou recursos customizados? 
              <Button variant="link" className="p-0 ml-1 h-auto">
                Fale conosco
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare todos os recursos
            </h2>
            <p className="text-xl text-gray-600">
              Veja em detalhes o que cada plano oferece
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Recursos</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Growth</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Clientes incluídos", starter: "100", professional: "500", growth: "2.000", enterprise: "Ilimitado" },
                    { feature: "Usuários incluídos", starter: "1", professional: "5", growth: "15", enterprise: "Ilimitado" },
                    { feature: "Dashboard básico", starter: "✓", professional: "✓", growth: "✓", enterprise: "✓" },
                    { feature: "Health Score", starter: "✓", professional: "✓", growth: "✓", enterprise: "✓" },
                    { feature: "IA Preditiva", starter: "✗", professional: "✓", growth: "✓", enterprise: "✓" },
                    { feature: "Automações", starter: "✗", professional: "✓", growth: "✓", enterprise: "✓" },
                    { feature: "API completa", starter: "✗", professional: "Básica", growth: "✓", enterprise: "✓" },
                    { feature: "White-label", starter: "✗", professional: "✗", growth: "✗", enterprise: "✓" },
                    { feature: "CSM dedicado", starter: "✗", professional: "✗", growth: "✓", enterprise: "✓" },
                    { feature: "SLA personalizado", starter: "✗", professional: "✗", growth: "✗", enterprise: "✓" }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.professional}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.growth}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-700">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Teste grátis por 14 dias. Sem cartão de crédito. Setup em 5 minutos.
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
    </div>
  );
};

export default Pricing;
