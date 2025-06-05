
import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 199",
      period: "/mês",
      description: "Para equipes que estão começando",
      features: [
        "Até 100 clientes",
        "Health Score básico",
        "Relatórios essenciais",
        "Suporte por email",
        "1 usuário"
      ],
      popular: false,
      cta: "Começar agora"
    },
    {
      name: "Professional", 
      price: "R$ 499",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Até 500 clientes",
        "IA avançada",
        "Automações",
        "Integrações ilimitadas",
        "Suporte prioritário",
        "5 usuários"
      ],
      popular: true,
      cta: "Teste grátis"
    },
    {
      name: "Growth",
      price: "R$ 999", 
      period: "/mês",
      description: "Para operações escaláveis",
      features: [
        "Até 2000 clientes",
        "White label",
        "API personalizada",
        "Gerente de sucesso",
        "SLA garantido",
        "15 usuários"
      ],
      popular: false,
      cta: "Falar com vendas"
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Para grandes operações",
      features: [
        "Clientes ilimitados",
        "Customizações",
        "API dedicada", 
        "Gerente de sucesso",
        "SLA garantido",
        "Usuários ilimitados"
      ],
      popular: false,
      cta: "Contato"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <MainNavigation />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Preços <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transparentes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Teste grátis por 14 dias, sem compromisso.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} transition-transform hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos planos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Posso mudar de plano a qualquer momento?</h3>
              <p className="text-gray-600">Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas no próximo ciclo de cobrança.</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Existe desconto para pagamento anual?</h3>
              <p className="text-gray-600">Sim, oferecemos 20% de desconto para pagamentos anuais. Entre em contato conosco para mais detalhes.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Como funciona o teste grátis?</h3>
              <p className="text-gray-600">14 dias totalmente grátis, sem necessidade de cartão de crédito. Acesso completo a todos os recursos do plano Professional.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento ou penalidades.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Teste o CS360° gratuitamente por 14 dias e veja a diferença
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Começar Teste Gratuito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CS360°</h3>
              <p className="text-gray-400">A plataforma mais completa de Customer Success do Brasil.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
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

export default Pricing;
