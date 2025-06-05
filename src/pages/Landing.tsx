
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { InteractiveCharts } from '../components/InteractiveCharts';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  Target,
  BarChart3,
  MessageSquare,
  Brain,
  Play
} from 'lucide-react';

const Landing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">CS360°</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Entrar</Button>
              <Button>Começar Grátis</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            A Plataforma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Customer Success</span> mais Completa do Brasil
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforme seu relacionamento com clientes em uma máquina de crescimento. 
            Reduza churn, aumente LTV e escale com inteligência artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-lg">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Redução de Churn</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">3.5x</div>
              <div className="text-gray-600">Aumento no LTV</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-gray-600">Setup Completo</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">10k+</div>
              <div className="text-gray-600">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Charts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Analytics Inteligente em Tempo Real</h2>
            <p className="text-xl text-gray-600">Veja como nossos gráficos interativos transformam dados em insights acionáveis</p>
          </div>

          <InteractiveCharts />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que Escolher o CS360°?</h2>
            <p className="text-xl text-gray-600">Recursos poderosos que fazem a diferença no seu negócio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle>Inteligência Artificial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">IA avançada para predição de churn, análise de sentimento e automação inteligente de processos.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Analytics 360°</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dashboards interativos com métricas em tempo real para tomada de decisão baseada em dados.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-purple-600 mb-4" />
                <CardTitle>Comunicação Unificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Centralize WhatsApp, email, SMS e outros canais em uma única plataforma integrada.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Empresas que Confiam no CS360°</h2>
            <p className="text-xl text-gray-600">Mais de 10.000 empresas já transformaram seus resultados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  TI
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">TechInova</h4>
                  <p className="text-gray-600 text-sm">SaaS B2B</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Reduzimos o churn em 80% nos primeiros 6 meses. O ROI foi impressionante!"
              </p>
              <div className="text-sm text-gray-500">
                📈 Churn: 12% → 2.4% • 💰 LTV: +180%
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ES
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">EduSmart</h4>
                  <p className="text-gray-600 text-sm">EdTech</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "A automação inteligente nos permitiu escalar sem aumentar a equipe de CS."
              </p>
              <div className="text-sm text-gray-500">
                👥 Clientes: +300% • ⚡ Eficiência: +250%
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  FM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">FinMax</h4>
                  <p className="text-gray-600 text-sm">Fintech</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Identificamos oportunidades de upsell que aumentaram nossa receita em 40%."
              </p>
              <div className="text-sm text-gray-500">
                📊 NPS: 65 → 89 • 💎 Upsell: +40%
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Transformar seu Customer Success?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de empresas que já revolucionaram seus resultados com o CS360°.
            Comece sua transformação hoje mesmo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Agendar Demonstração
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            ✅ Grátis para sempre • ⚡ Setup em 5 minutos • 🎯 Sem compromisso
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
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Parceiros</a></li>
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

export default Landing;
