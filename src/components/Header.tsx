
import React, { useState, useEffect } from 'react';
import { Search, Bell, MessageCircle, User, ChevronDown, Moon, Sun, Zap, Calendar, CheckSquare, Filter, Settings } from 'lucide-react';
import { Button } from './ui/button';

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
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all duration-300">
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
        <div className="hidden lg:flex items-center space-x-6 mx-8">
          <div className="text-center p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200/50 dark:border-green-700/50">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Clientes Ativos</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">127</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 dark:border-blue-700/50">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">MRR</p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">R$ 485k</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-700/50">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">NPS Médio</p>
            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">42</p>
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Tasks with Enhanced Design */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 rounded-xl p-3">
            <CheckSquare className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs flex items-center justify-center text-white shadow-lg">
              3
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
          </Button>

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 rounded-xl p-3">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
          </Button>

          {/* AI Recommendations with Glow Effect */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 rounded-xl p-3">
            <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 rounded-xl p-3">
            <Bell className="w-5 h-5 text-red-600 dark:text-red-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-rose-500 rounded-full animate-bounce"></span>
          </Button>

          {/* Messages */}
          <Button variant="ghost" size="sm" className="relative group hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 rounded-xl p-3">
            <MessageCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
          </Button>

          {/* Theme Toggle with Enhanced Animation */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme} 
            className="hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300 rounded-xl p-3 group"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </Button>

          {/* Enhanced Profile */}
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl px-3 py-2 transition-all duration-300 group">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-slate-900 dark:text-white">João Silva</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Gestor CS</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:rotate-180 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
};
