import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { useAuth } from '@/hooks/useAuth';
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
  Goal,
  Handshake,
  Gift,
  ExternalLink,
  Settings
} from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/app', color: 'from-blue-500 to-cyan-500', roles: ['all'] },
  { icon: Goal, label: 'Gestão de Metas', path: '/goals', color: 'from-green-500 to-teal-500', roles: ['all'] },
  { icon: Users, label: 'Gestão de Clientes', path: '/clients', color: 'from-purple-500 to-pink-500', roles: ['all'] },
  { icon: FileText, label: 'Contratos', path: '/contracts', color: 'from-green-500 to-emerald-500', roles: ['all'] },
  { icon: ShoppingCart, label: 'Serviços & Upsell', path: '/services', color: 'from-orange-500 to-red-500', roles: ['all'] },
  { icon: Award, label: 'NPS', path: '/nps', color: 'from-yellow-500 to-orange-500', roles: ['all'] },
  { icon: DollarSign, label: 'LTV & CAC', path: '/ltvcac', color: 'from-indigo-500 to-purple-500', roles: ['all'] },
  { icon: Target, label: 'Estratégias', path: '/strategies', color: 'from-pink-500 to-rose-500', roles: ['all'] },
  { icon: Zap, label: 'Automação & IA', path: '/automation', color: 'from-cyan-500 to-blue-500', roles: ['all'] },
  { icon: BarChart3, label: 'Relatórios', path: '/reports', color: 'from-teal-500 to-green-500', roles: ['all'] },
];

const partnerItems = [
  { icon: Handshake, label: 'Gestão de Parceiros', path: '/partners', color: 'from-blue-500 to-indigo-500', roles: ['admin'] },
  { icon: Gift, label: 'Campanhas & Benefícios', path: '/campaigns', color: 'from-pink-500 to-purple-500', roles: ['admin'] },
  { icon: ExternalLink, label: 'Portal do Parceiro', path: '/partner-portal', color: 'from-green-500 to-teal-500', roles: ['partner'] },
];

const adminItems = [
  { icon: UserCheck, label: 'Administração', path: '/admin', color: 'from-gray-500 to-slate-500', roles: ['admin'] },
  { icon: Settings, label: 'Super Admin', path: '/super-admin', color: 'from-red-500 to-pink-500', roles: ['super-admin'] },
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
  const { profile } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const hasAccess = (roles: string[]) => {
    if (roles.includes('all')) return true;
    
    const userRole = profile?.plan_type || 'starter';
    
    // Definir permissões por plano
    if (roles.includes('admin') && ['enterprise', 'premium'].includes(userRole)) return true;
    if (roles.includes('partner') && userRole === 'partner') return true;
    if (roles.includes('super-admin') && userRole === 'super-admin') return true;
    
    return false;
  };

  const filteredNavigationItems = navigationItems.filter(item => hasAccess(item.roles));
  const filteredPartnerItems = partnerItems.filter(item => hasAccess(item.roles));
  const filteredAdminItems = adminItems.filter(item => hasAccess(item.roles));

  return (
    <div className="space-y-8">
      {/* Navigation Principal */}
      <div className="space-y-2">
        {filteredNavigationItems.map((item, index) => (
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

      {/* Programa de Parceiros */}
      {filteredPartnerItems.length > 0 && !collapsed && (
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">
            Programa de Parceiros
          </div>
          <div className="space-y-2">
            {filteredPartnerItems.map((item, index) => (
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
        </div>
      )}

      {/* Administração */}
      {filteredAdminItems.length > 0 && !collapsed && (
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">
            Administração
          </div>
          <div className="space-y-2">
            {filteredAdminItems.map((item, index) => (
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
        </div>
      )}
    </div>
  );
};
