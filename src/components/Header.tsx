
import React, { useState } from 'react';
import { Search, Bell, MessageCircle, User, ChevronDown, Moon, Sun, Zap, Calendar, CheckSquare } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar clientes, contratos, oportunidades..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">Clientes Ativos</p>
              <p className="font-semibold text-green-600 dark:text-green-400">127</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">MRR</p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">R$ 485k</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">NPS Médio</p>
              <p className="font-semibold text-purple-600 dark:text-purple-400">42</p>
            </div>
          </div>

          {/* Tasks */}
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
            <CheckSquare className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </Button>

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
            <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs"></span>
          </Button>

          {/* AI Recommendations */}
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
            <Zap className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full text-xs animate-pulse"></span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          {/* Messages */}
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100 dark:hover:bg-gray-800">
            <MessageCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs"></span>
          </Button>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleTheme} className="hover:bg-gray-100 dark:hover:bg-gray-800">
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </Button>

          {/* Profile */}
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-2 py-1 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};
