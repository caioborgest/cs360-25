
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Target, 
  TrendingUp, 
  Settings, 
  CreditCard,
  Bell,
  MessageCircle,
  Menu,
  X,
  Home,
  ShoppingCart,
  Award,
  UserCheck,
  DollarSign,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { useLocation, Link } from 'react-router-dom';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Gestão de Clientes', path: '/clients' },
  { icon: FileText, label: 'Contratos', path: '/contracts' },
  { icon: ShoppingCart, label: 'Serviços & Upsell', path: '/services' },
  { icon: Award, label: 'NPS', path: '/nps' },
  { icon: DollarSign, label: 'LTV & CAC', path: '/ltv-cac' },
  { icon: Target, label: 'Estratégias', path: '/strategies' },
  { icon: Zap, label: 'Automação & IA', path: '/automation' },
  { icon: BarChart3, label: 'Relatórios', path: '/reports' },
];

const adminItems = [
  { icon: UserCheck, label: 'Usuários', path: '/admin/users' },
  { icon: CreditCard, label: 'Assinatura', path: '/admin/billing' },
  { icon: Settings, label: 'Configurações', path: '/admin/settings' },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col shadow-lg`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-2 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CS360°
                </h2>
                <p className="text-xs text-gray-500">Customer Success</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="p-1"
          >
            {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <div className="space-y-1">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </div>

        {!collapsed && (
          <div className="pt-6">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Administração
            </div>
            <div className="space-y-1">
              {adminItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">João Silva</p>
              <p className="text-xs text-gray-500">Gestor CS</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
