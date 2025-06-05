
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { BarChart3 } from 'lucide-react';

export const MainNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/features') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Recursos
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/pricing') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Preços
            </Link>
            <Link 
              to="/partners" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/partners') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Parceiros
            </Link>
            <Link 
              to="/app" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/app') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/app">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/app">
              <Button>Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
