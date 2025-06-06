
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { 
  Home,
  Users, 
  FileText, 
  Target, 
  TrendingUp, 
  ShoppingCart,
  Award,
  UserCheck,
  DollarSign,
  Zap,
  BarChart3,
  Goal
} from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/', color: 'from-blue-500 to-cyan-500' },
  { icon: Goal, label: 'Gestão de Metas', path: '/goals', color: 'from-green-500 to-teal-500' },
  { icon: Users, label: 'Gestão de Clientes', path: '/clients', color: 'from-purple-500 to-pink-500' },
  { icon: FileText, label: 'Contratos', path: '/contracts', color: 'from-green-500 to-emerald-500' },
  { icon: ShoppingCart, label: 'Serviços & Upsell', path: '/services', color: 'from-orange-500 to-red-500' },
  { icon: Award, label: 'NPS', path: '/nps', color: 'from-yellow-500 to-orange-500' },
  { icon: DollarSign, label: 'LTV & CAC', path: '/ltv-cac', color: 'from-indigo-500 to-purple-500' },
  { icon: Target, label: 'Estratégias', path: '/strategies', color: 'from-pink-500 to-rose-500' },
  { icon: Zap, label: 'Automação & IA', path: '/automation', color: 'from-cyan-500 to-blue-500' },
  { icon: BarChart3, label: 'Relatórios', path: '/reports', color: 'from-teal-500 to-green-500' },
];

interface SidebarNavigationProps {
  collapsed: boolean;
  isMobile: boolean;
  onClose: () => void;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  collapsed,
  isMobile,
  onClose
}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="space-y-2">
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path}
          color={item.color}
          isActive={isActive(item.path)}
          collapsed={collapsed}
          isMobile={isMobile}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
