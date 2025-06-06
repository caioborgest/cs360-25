
import React, { useState, useEffect } from 'react';
import { Search, Bell, MessageCircle, User, ChevronDown, Moon, Sun, Zap, Calendar, CheckSquare, Filter, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inicializar o modo dark baseado no localStorage apenas para a aplicação
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('app-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('app-theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Enhanced Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5 transition-colors group-focus-within:text-blue-500" />
            <input
              type="text"
              placeholder="Buscar clientes, contratos, oportunidades..."
              className="w-full pl-12 pr-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80"
            />
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="hidden lg:flex items-center space-x-4 mx-8">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-700/50 shadow-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-center">
              <p className="text-xs text-green-700 dark:text-green-300 font-medium">Clientes Ativos</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">127</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200/50 dark:border-blue-700/50 shadow-sm">
            <div className="text-center">
              <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">MRR</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">R$ 485k</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50 shadow-sm">
            <div className="text-center">
              <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">NPS Médio</p>
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400">42</p>
            </div>
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Email/Messages */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
              3
            </Badge>
          </Button>

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </Button>

          {/* AI Recommendations */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <Bell className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          </Button>

          {/* Chat/Messages */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            </div>
          </Button>

          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme} 
            className="hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300 rounded-xl p-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </div>
          </Button>

          {/* Enhanced Profile */}
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl px-3 py-2 transition-all duration-300 group ml-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ring-2 ring-blue-200 dark:ring-blue-800">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">João Silva</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gestor CS</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:rotate-180 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
};
