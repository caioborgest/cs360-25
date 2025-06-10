
import { 
  Home,
  Zap,
  DollarSign,
  Users,
  Handshake
} from 'lucide-react';

export const navigationItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home
  },
  {
    label: 'Recursos',
    href: '/features',
    icon: Zap,
    dropdown: {
      title: 'Funcionalidades Avançadas',
      items: [
        { label: 'IA Preditiva', href: '/features#ai', description: '95% de precisão na previsão de churn' },
        { label: 'Dashboard 360°', href: '/features#dashboard', description: 'Visão completa do customer journey' },
        { label: 'Automação', href: '/features#automation', description: 'Workflows inteligentes e escaláveis' },
        { label: 'Health Score', href: '/features#health', description: 'Monitoramento em tempo real' },
        { label: 'Integrações', href: '/features#integrations', description: 'Conecte com 200+ ferramentas' },
        { label: 'Relatórios', href: '/features#reports', description: 'Insights acionáveis e personalizados' }
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
        { label: 'Starter', href: '/pricing#starter', description: 'R$ 199/mês - Ideal para começar' },
        { label: 'Professional', href: '/pricing#professional', description: 'R$ 499/mês - Mais vendido' },
        { label: 'Growth', href: '/pricing#growth', description: 'R$ 999/mês - Máximo desempenho' },
        { label: 'Enterprise', href: '/pricing#enterprise', description: 'Sob consulta - Solução corporativa' }
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
        { label: 'Seja um Parceiro', href: '/partners-program#join', description: 'Até 40% de comissão recorrente' },
        { label: 'Portal do Parceiro', href: '/partner-portal-website', description: 'Acesse sua área exclusiva' },
        { label: 'Materiais de Apoio', href: '/partners-program#materials', description: 'Downloads e recursos' },
        { label: 'Certificações', href: '/partners-program#certifications', description: 'Torne-se especialista certificado' }
      ]
    }
  }
];
