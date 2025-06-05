import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import FeaturesInteractiveCharts from '../components/FeaturesInteractiveCharts';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Brain,
  Award,
  MessageSquare,
  Bell,
  PieChart,
  Calendar,
  FileText,
  Database,
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Lock,
  Activity,
  Eye,
  Workflow,
  Mail,
  Phone,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  ThumbsUp,
  Star,
  Heart,
  Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('dashboard');

  const featureCategories = [
    {
      id: 'dashboard',
      name: 'Dashboard & Analytics',
      icon: BarChart3,
      description: 'Visualização completa e inteligente dos seus dados'
    },
    {
      id: 'ai',
      name: 'Inteligência Artificial',
      icon: Brain,
      description: 'IA preditiva e automação inteligente'
    },
    {
      id: 'automation',
      name: 'Automação',
      icon: Target,
      description: 'Workflows e processos automatizados'
    },
    {
      id: 'communication',
      name: 'Comunicação',
      icon: MessageSquare,
      description: 'Ferramentas de engajamento e comunicação'
    },
    {
      id: 'integrations',
      name: 'Integrações',
      icon: Database,
      description: 'Conecte com suas ferramentas favoritas'
    },
    {
      id: 'security',
      name: 'Segurança',
      icon: Shield,
      description: 'Proteção e conformidade empresarial'
    }
  ];

  const featuresData = {
    dashboard: [
      {
        icon: BarChart3,
        title: 'Dashboard 360° Inteligente',
        description: 'Visão unificada de todos os dados do cliente em tempo real',
        features: [
          'Métricas customizáveis e KPIs personalizados',
          'Visualizações interativas e gráficos dinâmicos',
          'Filtros avançados e drill-down',
          'Exportação automática de relatórios',
          'Alertas e notificações em tempo real'
        ],
        benefits: 'Tome decisões baseadas em dados com visibilidade total do seu CS'
      },
      {
        icon: TrendingUp,
        title: 'Health Score Dinâmico',
        description: 'Pontuação de saúde do cliente atualizada em tempo real',
        features: [
          'Algoritmo proprietário de 50+ variáveis',
          'Histórico e tendências do health score',
          'Alertas automáticos de mudanças críticas',
          'Segmentação por score e perfil',
          'Predição de health score futuro'
        ],
        benefits: 'Identifique riscos e oportunidades antes que seja tarde'
      },
      {
        icon: PieChart,
        title: 'Análise de Segmentação',
        description: 'Segmente clientes automaticamente por comportamento e valor',
        features: [
          'Segmentação automática por IA',
          'Grupos personalizados e dinâmicos',
          'Análise de cohort e comportamento',
          'Comparação entre segmentos',
          'Estratégias específicas por segmento'
        ],
        benefits: 'Entenda seus clientes profundamente e personalize abordagens'
      },
      {
        icon: FileText,
        title: 'Relatórios Avançados',
        description: 'Relatórios personalizáveis e automatizados',
        features: [
          'Templates prontos e personalizáveis',
          'Agendamento automático de envios',
          'Múltiplos formatos (PDF, Excel, PPT)',
          'Comentários e insights automáticos',
          'Compartilhamento seguro com stakeholders'
        ],
        benefits: 'Comunicação eficaz com executivos e equipes'
      }
    ],
    ai: [
      {
        icon: Brain,
        title: 'IA Preditiva de Churn',
        description: 'Previsão de churn com 95% de precisão usando machine learning',
        features: [
          'Algoritmos de deep learning proprietários',
          'Análise de 200+ sinais comportamentais',
          'Predição com até 90 dias de antecedência',
          'Score de probabilidade de churn',
          'Recomendações automáticas de ação'
        ],
        benefits: 'Reduza churn em até 40% com intervenções antecipadas'
      },
      {
        icon: Sparkles,
        title: 'Insights Automáticos',
        description: 'IA identifica padrões e gera insights acionáveis automaticamente',
        features: [
          'Detecção automática de anomalias',
          'Insights contextuais por cliente',
          'Correlações entre métricas',
          'Sugestões de próximas ações',
          'Alertas inteligentes prioritizados'
        ],
        benefits: 'Descubra oportunidades ocultas sem esforço manual'
      },
      {
        icon: Award,
        title: 'NPS Inteligente',
        description: 'Análise avançada de NPS com processamento de linguagem natural',
        features: [
          'Análise de sentimento automática',
          'Categorização de feedbacks',
          'Tendências e drivers de NPS',
          'Benchmarking automático',
          'Ações sugeridas por IA'
        ],
        benefits: 'Transforme feedback em ações concretas de melhoria'
      },
      {
        icon: Search,
        title: 'Busca Inteligente',
        description: 'Encontre qualquer informação usando linguagem natural',
        features: [
          'Busca por linguagem natural',
          'Resultados contextualizados',
          'Sugestões inteligentes',
          'Histórico de buscas',
          'Filtros automáticos'
        ],
        benefits: 'Acesse informações instantaneamente com perguntas simples'
      }
    ],
    automation: [
      {
        icon: Workflow,
        title: 'Workflows Inteligentes',
        description: 'Automação completa de processos de Customer Success',
        features: [
          'Designer visual de workflows',
          'Triggers baseados em comportamento',
          'Condições lógicas complexas',
          'Integração com ferramentas externas',
          'Templates prontos para usar'
        ],
        benefits: 'Automatize 80% das tarefas repetitivas da sua equipe'
      },
      {
        icon: Bell,
        title: 'Alertas Proativos',
        description: 'Sistema avançado de notificações e alertas automáticos',
        features: [
          'Alertas personalizáveis por usuário',
          'Múltiplos canais (email, SMS, Slack)',
          'Escalabilidade automática',
          'Snooze e lembretes',
          'Histórico completo de alertas'
        ],
        benefits: 'Nunca perca uma oportunidade ou risco importante'
      },
      {
        icon: Calendar,
        title: 'Onboarding Automatizado',
        description: 'Jornada de onboarding personalizada e automatizada',
        features: [
          'Jornadas personalizadas por perfil',
          'Check-ins automáticos',
          'Conteúdo dinâmico',
          'Acompanhamento de progresso',
          'Intervenções automáticas'
        ],
        benefits: 'Aumente success rate do onboarding em 60%'
      },
      {
        icon: RefreshCw,
        title: 'Sincronização Automática',
        description: 'Sincronização contínua com todas as suas ferramentas',
        features: [
          'Sync em tempo real',
          'Mapeamento automático de campos',
          'Resolução de conflitos',
          'Histórico de sincronizações',
          'Monitoramento de status'
        ],
        benefits: 'Dados sempre atualizados sem intervenção manual'
      }
    ],
    communication: [
      {
        icon: MessageSquare,
        title: 'Centro de Comunicação',
        description: 'Todas as interações com clientes em um só lugar',
        features: [
          'Histórico unificado de comunicações',
          'Templates personalizáveis',
          'Agendamento de mensagens',
          'Tracking de abertura e cliques',
          'Respostas automáticas inteligentes'
        ],
        benefits: 'Comunicação consistente e profissional sempre'
      },
      {
        icon: Mail,
        title: 'Email Marketing Inteligente',
        description: 'Campanhas de email personalizadas e automatizadas',
        features: [
          'Segmentação automática avançada',
          'Personalização por IA',
          'A/B testing automático',
          'Análise de performance detalhada',
          'Otimização contínua'
        ],
        benefits: 'Aumente engajamento em 45% com emails relevantes'
      },
      {
        icon: Phone,
        title: 'Call Center Integrado',
        description: 'Sistema de chamadas integrado com histórico completo',
        features: [
          'Discador automático inteligente',
          'Gravação e transcrição automática',
          'Scripts dinâmicos contextuais',
          'Agendamento inteligente',
          'Análise de performance de calls'
        ],
        benefits: 'Maximize eficiência e qualidade das ligações'
      },
      {
        icon: Heart,
        title: 'Feedback 360°',
        description: 'Sistema completo de coleta e análise de feedback',
        features: [
          'Múltiplos tipos de pesquisa',
          'Timing automático otimizado',
          'Análise de sentimento avançada',
          'Closed-loop feedback',
          'Benchmarking automático'
        ],
        benefits: 'Transforme feedback em melhorias concretas'
      }
    ],
    integrations: [
      {
        icon: Database,
        title: 'Hub de Integrações',
        description: 'Conecte com 200+ ferramentas sem código',
        features: [
          '200+ integrações nativas',
          'API REST completa',
          'Webhooks bidirecionais',
          'Mapeamento visual de dados',
          'Marketplace de conectores'
        ],
        benefits: 'Unifique seu stack tecnológico sem complexidade'
      },
      {
        icon: Upload,
        title: 'Import/Export Avançado',
        description: 'Migração e sincronização de dados simplificada',
        features: [
          'Importação em massa inteligente',
          'Validação automática de dados',
          'Mapeamento assistido por IA',
          'Rollback automático',
          'Agendamento de sincronizações'
        ],
        benefits: 'Migre dados complexos em minutos, não semanas'
      },
      {
        icon: Globe,
        title: 'API Enterprise',
        description: 'API robusta para integrações customizadas',
        features: [
          'REST API documentada',
          'GraphQL support',
          'Rate limiting inteligente',
          'Autenticação OAuth2',
          'SDKs para principais linguagens'
        ],
        benefits: 'Desenvolva integrações customizadas rapidamente'
      },
      {
        icon: Monitor,
        title: 'Business Intelligence',
        description: 'Conecte com ferramentas de BI para análises avançadas',
        features: [
          'Conectores nativos (Tableau, Power BI)',
          'Data warehouse otimizado',
          'ETL automatizado',
          'Modelos de dados pré-construídos',
          'Refresh automático'
        ],
        benefits: 'Potencialize análises com ferramentas familiares'
      }
    ],
    security: [
      {
        icon: Shield,
        title: 'Segurança Enterprise',
        description: 'Proteção de dados de nível bancário',
        features: [
          'Criptografia AES-256',
          'HTTPS/TLS 1.3',
          'Backup automático multi-região',
          'SOC 2 Type II certificado',
          'Conformidade LGPD/GDPR'
        ],
        benefits: 'Dados seguros com conformidade total'
      },
      {
        icon: Lock,
        title: 'Controle de Acesso',
        description: 'Gestão granular de permissões e acessos',
        features: [
          'SSO (Single Sign-On)',
          'MFA (Multi-Factor Authentication)',
          'RBAC (Role-Based Access Control)',
          'Auditoria completa de acessos',
          'Sessões seguras'
        ],
        benefits: 'Controle total sobre quem acessa o quê'
      },
      {
        icon: Eye,
        title: 'Auditoria e Compliance',
        description: 'Rastreamento completo de ações e conformidade',
        features: [
          'Log completo de atividades',
          'Relatórios de compliance',
          'Retenção configurável',
          'Alertas de violação',
          'Certificações internacionais'
        ],
        benefits: 'Transparência total e conformidade garantida'
      },
      {
        icon: Activity,
        title: 'Monitoramento 24/7',
        description: 'Monitoramento contínuo de segurança e performance',
        features: [
          'Detecção de anomalias',
          'Alertas de segurança em tempo real',
          'Monitoring de performance',
          'SLA de 99.9% uptime',
          'Resposta a incidentes'
        ],
        benefits: 'Tranquilidade com monitoramento profissional'
      }
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
          <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Activity className="w-4 h-4 mr-2" />
            Demonstração Interativa
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Funcionalidades que
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              revolucionam seu CS
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra como o CS360° transforma cada aspecto do seu Customer Success 
            com tecnologia de ponta e inteligência artificial.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Play className="w-5 h-5 mr-2" />
            Ver Dashboard Completo
          </Button>
        </div>
      </section>

      {/* Interactive Charts Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <Activity className="w-4 h-4 mr-2" />
              Demonstração Interativa
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experimente o Poder dos Nossos
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Analytics em Tempo Real
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossos gráficos interativos transformam dados complexos em insights acionáveis. 
              Passe o mouse sobre os gráficos para experimentar a interatividade real do dashboard.
            </p>
          </div>

          <FeaturesInteractiveCharts />

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Play className="w-5 h-5 mr-2" />
              Ver Dashboard Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <category.icon className={`w-8 h-8 mx-auto mb-2 ${
                  activeCategory === category.id ? 'text-white' : 'text-gray-600'
                }`} />
                <div className="font-medium text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {featureCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">
              {featureCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuresData[activeCategory]?.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{feature.title}</CardTitle>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-900 mb-1">Benefício Principal</div>
                        <div className="text-blue-700 text-sm">{feature.benefits}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Integre com suas ferramentas favoritas
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 200 integrações nativas para maximizar seu investimento
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Teams', 'Gmail',
              'Outlook', 'Zapier', 'Power BI', 'Tableau', 'Segment', 'Mixpanel',
              'Amplitude', 'Intercom', 'Freshworks', 'Pipedrive', 'Monday', 'Asana'
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Database className="w-6 h-6 text-gray-600" />
                </div>
                <div className="font-medium text-gray-900">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para experimentar tudo isso?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Teste todas as funcionalidades gratuitamente por 14 dias
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Sparkles className="w-5 h-5 mr-2" />
              Começar Teste Grátis
            </Button>
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

export default Features;
