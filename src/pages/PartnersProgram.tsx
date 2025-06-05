import React, { useState } from 'react';
import { MainNavigation } from '../components/MainNavigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
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
  Rocket
} from 'lucide-react';

const PartnersProgram = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">CS360°</h1>
              <Badge className="bg-purple-100 text-purple-800">Programa de Parceiros</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Entrar</Button>
              <Button>Cadastrar</Button>
            </div>
          </div>
        </div>
      </header>

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
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Comissão Recorrente</div>
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

      {/* How it Works */}
      <section className="py-20 bg-white">
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
