
import React, { useState, useEffect } from 'react';
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
  Zap,
  ChevronRight,
  Handshake,
  Gift,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import { useLocation, Link } from 'react-router-dom';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, label: 'Gestão de Clientes', path: '/clients', color: 'from-purple-500 to-pink-500' },
  { icon: FileText, label: 'Contratos', path: '/contracts', color: 'from-green-500 to-emerald-500' },
  { icon: ShoppingCart, label: 'Serviços & Upsell', path: '/services', color: 'from-orange-500 to-red-500' },
  { icon: Award, label: 'NPS', path: '/nps', color: 'from-yellow-500 to-orange-500' },
  { icon: DollarSign, label: 'LTV & CAC', path: '/ltv-cac', color: 'from-indigo-500 to-purple-500' },
  { icon: Target, label: 'Estratégias', path: '/strategies', color: 'from-pink-500 to-rose-500' },
  { icon: Zap, label: 'Automação & IA', path: '/automation', color: 'from-cyan-500 to-blue-500' },
  { icon: BarChart3, label: 'Relatórios', path: '/reports', color: 'from-teal-500 to-green-500' },
];

const partnerItems = [
  { icon: Handshake, label: 'Gestão de Parceiros', path: '/partners', color: 'from-blue-500 to-indigo-500' },
  { icon: Gift, label: 'Campanhas & Benefícios', path: '/campaigns', color: 'from-pink-500 to-purple-500' },
  { icon: ExternalLink, label: 'Portal do Parceiro', path: '/partner-portal', color: 'from-green-500 to-teal-500' },
];

const adminItems = [
  { icon: UserCheck, label: 'Administração', path: '/admin', color: 'from-gray-500 to-slate-500' },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
      
      <div 
        className={`peer fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-72'
        } flex flex-col shadow-2xl backdrop-blur-xl ${
          isMobile ? 'z-50 sidebar-mobile-overlay' : 'z-50'
        }`}
        data-state={collapsed ? 'collapsed' : 'expanded'}
      >
        {/* Header with Glassmorphism */}
        <div className="p-6 border-b border-slate-700/50 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${collapsed ? 'justify-center' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              {!collapsed && (
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    CS360°
                  </h2>
                  <p className="text-xs text-slate-400 font-medium">Customer Success Platform</p>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggle}
              className="p-2 hover:bg-white/10 text-slate-300 hover:text-white transition-colors rounded-lg"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation with Enhanced Design */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => isMobile && setCollapsed(true)}
                className={`group relative w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? `bg-gradient-to-r ${item.color} text-white shadow-xl shadow-blue-500/25` 
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                } ${collapsed ? 'justify-center' : ''}`}
              >
                <div className={`relative z-10 ${isActive(item.path) ? 'animate-pulse' : ''}`}>
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                </div>
                {!collapsed && (
                  <>
                    <span className="text-sm font-medium relative z-10">{item.label}</span>
                    {isActive(item.path) && (
                      <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </>
                )}
                {!isActive(item.path) && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                )}
              </Link>
            ))}
          </div>

          {!collapsed && (
            <div className="pt-8">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">
                Programa de Parceiros
              </div>
              <div className="space-y-2">
                {partnerItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => isMobile && setCollapsed(true)}
                    className={`group relative w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path)
                        ? `bg-gradient-to-r ${item.color} text-white shadow-xl shadow-blue-500/25` 
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`relative z-10 ${isActive(item.path) ? 'animate-pulse' : ''}`}>
                      <item.icon className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <span className="text-sm font-medium relative z-10">{item.label}</span>
                    {!isActive(item.path) && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!collapsed && (
            <div className="pt-8">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">
                Administração
              </div>
              <div className="space-y-2">
                {adminItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => isMobile && setCollapsed(true)}
                    className={`group relative w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path)
                        ? `bg-gradient-to-r ${item.color} text-white shadow-xl shadow-gray-500/25` 
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`relative z-10 ${isActive(item.path) ? 'animate-pulse' : ''}`}>
                      <item.icon className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <span className="text-sm font-medium relative z-10">{item.label}</span>
                    {!isActive(item.path) && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Enhanced Footer */}
        <div className="p-4 border-t border-slate-700/50 bg-white/5 backdrop-blur-sm">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            {!collapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-white">João Silva</p>
                <p className="text-xs text-slate-400">Gestor CS Premium</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
