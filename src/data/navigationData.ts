
import { 
  Home,
  Building2,
  Zap,
  DollarSign,
  Users,
  Handshake,
  Star,
  Award,
  Target,
  Brain,
  MessageSquare,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  Globe,
  FileText,
  Calendar,
  Calculator,
  BarChart3
} from 'lucide-react';

export const navigationItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Sobre',
    href: '#about',
    icon: Building2,
    dropdown: {
      title: 'Conheça o CS360°',
      items: [
        { label: 'Nossa História', href: '#about', icon: Building2, description: 'Como revolucionamos o Customer Success' },
        { label: 'Equipe', href: '#team', icon: Users, description: 'Especialistas em CS e tecnologia' },
        { label: 'Missão & Visão', href: '#mission', icon: Target, description: 'Nossos valores e objetivos' },
        { label: 'Investidores', href: '#investors', icon: TrendingUp, description: 'Nossos parceiros de crescimento' }
      ]
    }
  },
  {
    label: 'Recursos',
    href: '/features',
    icon: Zap,
    dropdown: {
      title: 'Funcionalidades Avançadas',
      items: [
        { label: 'IA Preditiva', href: '/features#ai', icon: Brain, description: '95% de precisão na previsão de churn' },
        { label: 'Dashboard 360°', href: '/features#dashboard', icon: BarChart3, description: 'Visão completa do customer journey' },
        { label: 'Automação', href: '/features#automation', icon: Zap, description: 'Workflows inteligentes e escaláveis' },
        { label: 'Health Score', href: '/features#health', icon: Shield, description: 'Monitoramento em tempo real' },
        { label: 'Integrações', href: '/features#integrations', icon: Globe, description: 'Conecte com 200+ ferramentas' },
        { label: 'Relatórios', href: '/features#reports', icon: FileText, description: 'Insights acionáveis e personalizados' }
      ]
    }
  },
  {
    label: 'Preços',
    href: '/pricing',
    icon: DollarSign,
    dropdown: {
      title: 'Planos Flexíveis',
      items: [
        { label: 'Starter', href: '/pricing#starter', icon: Lightbulb, description: 'R$ 199/mês - Ideal para começar' },
        { label: 'Professional', href: '/pricing#professional', icon: Star, description: 'R$ 499/mês - Mais vendido' },
        { label: 'Growth', href: '/pricing#growth', icon: TrendingUp, description: 'R$ 999/mês - Máximo desempenho' },
        { label: 'Enterprise', href: '/pricing#enterprise', icon: Building2, description: 'Sob consulta - Solução corporativa' },
        { label: 'Calculadora ROI', href: '/pricing#calculator', icon: Calculator, description: 'Calcule seu retorno' },
        { label: 'Comparativo', href: '/pricing#compare', icon: CheckCircle, description: 'Compare todos os planos' }
      ]
    }
  },
  {
    label: 'Clientes',
    href: '#testimonials',
    icon: Users,
    dropdown: {
      title: 'Histórias de Sucesso',
      items: [
        { label: 'Cases de Sucesso', href: '#testimonials', icon: Award, description: 'Resultados reais de clientes' },
        { label: 'Depoimentos', href: '#reviews', icon: MessageSquare, description: 'O que dizem sobre nós' },
        { label: 'Comunidade', href: '#community', icon: Users, description: 'Rede de profissionais CS' },
        { label: 'Eventos', href: '#events', icon: Calendar, description: 'Webinars e treinamentos' }
      ]
    }
  },
  {
    label: 'Parceiros',
    href: '/partners-program',
    icon: Handshake,
    dropdown: {
      title: 'Programa de Parceiros',
      items: [
        { label: 'Seja um Parceiro', href: '/partners-program#join', icon: Handshake, description: 'Até 40% de comissão recorrente' },
        { label: 'Portal do Parceiro', href: '/partner-portal', icon: Globe, description: 'Acesse sua área exclusiva' },
        { label: 'Materiais de Apoio', href: '/partners-program#materials', icon: FileText, description: 'Downloads e recursos' },
        { label: 'Certificações', href: '/partners-program#certifications', icon: Award, description: 'Torne-se especialista certificado' }
      ]
    }
  }
];
