import React from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, ArrowRight, Sparkles, FileText, Users, TrendingUp, Award, MessageSquare, Database } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Preços Transparentes
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Escolha o plano que
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              transforma seu CS
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossos planos são desenhados para escalar com você. Experimente a plataforma completa 
            e veja o impacto no seu Customer Success.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-gray-900">Starter</CardTitle>
                <CardContent className="text-5xl font-extrabold text-blue-600 leading-none tracking-tight">
                  R$199
                  <span className="text-base font-medium text-gray-500">/mês</span>
                </CardContent>
                <p className="text-gray-600">Ideal para começar e organizar seu CS</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Até 500 clientes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    1 usuário
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dashboard básico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Suporte por email
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-gray-900">Professional</CardTitle>
                <CardContent className="text-5xl font-extrabold text-purple-600 leading-none tracking-tight">
                  R$499
                  <span className="text-base font-medium text-gray-500">/mês</span>
                </CardContent>
                <p className="text-gray-600">Para escalar seu CS com inteligência</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Até 2.500 clientes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    5 usuários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dashboard avançado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Automações
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Suporte prioritário
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-gray-900">Growth</CardTitle>
                <CardContent className="text-5xl font-extrabold text-green-600 leading-none tracking-tight">
                  R$999
                  <span className="text-base font-medium text-gray-500">/mês</span>
                </CardContent>
                <p className="text-gray-600">Maximize resultados com IA e integrações</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Até 10.000 clientes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    15 usuários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    IA preditiva
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Integrações avançadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Suporte VIP
                  </li>
                </ul>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  Começar Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Plan */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Precisa de algo mais?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Para empresas com necessidades específicas, oferecemos o plano Enterprise.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Fale Conosco
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para gerenciar seu Customer Success em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gestão de Contratos
              </h3>
              <p className="text-gray-600">
                Centralize todos os seus contratos e acompanhe prazos e renovações.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visão 360° do Cliente
              </h3>
              <p className="text-gray-600">
                Tenha todas as informações do cliente em um só lugar.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Análise de Churn
              </h3>
              <p className="text-gray-600">
                Identifique e previna o churn com nossa IA preditiva.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6">
              <Award className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                NPS Inteligente
              </h3>
              <p className="text-gray-600">
                Colete e analise o feedback dos seus clientes de forma inteligente.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="p-6">
              <MessageSquare className="w-8 h-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comunicação Integrada
              </h3>
              <p className="text-gray-600">
                Centralize todas as suas comunicações com clientes.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="p-6">
              <Database className="w-8 h-8 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automação de Tarefas
              </h3>
              <p className="text-gray-600">
                Automatize tarefas repetitivas e ganhe tempo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos e funcionalidades
            </p>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Qual plano é o ideal para minha empresa?
              </summary>
              <p className="text-gray-600 mt-2">
                O plano ideal depende do tamanho da sua empresa e das suas necessidades. 
                O plano Starter é ideal para quem está começando, o Professional para quem 
                busca escalar, e o Growth para quem precisa de IA e integrações avançadas.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Posso mudar de plano a qualquer momento?
              </summary>
              <p className="text-gray-600 mt-2">
                Sim, você pode mudar de plano a qualquer momento. A mudança é imediata e 
                o valor será ajustado proporcionalmente.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Quais formas de pagamento são aceitas?
              </summary>
              <p className="text-gray-600 mt-2">
                Aceitamos cartões de crédito, boleto bancário e PIX.
              </p>
            </details>

            {/* Question 4 */}
            <details className="bg-white rounded-lg shadow-md p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Como funciona o suporte?
              </summary>
              <p className="text-gray-600 mt-2">
                Oferecemos suporte por email em todos os planos. No plano Professional, 
                o suporte é prioritário, e no plano Growth, o suporte é VIP.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece agora e transforme seu CS
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experimente a plataforma completa e veja o impacto no seu Customer Success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Experimente Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/partners-program">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Programa de Parceiros
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CS360°</h3>
              <p className="text-gray-400">
                A plataforma mais completa de Customer Success do Brasil.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-white">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link to="/partners-program" className="hover:text-white">
                    Parceiros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 contato@cs360.com.br</li>
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

export default Pricing;
