
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Star, Menu, X } from 'lucide-react';

interface ActionButtonsProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isMenuOpen,
  onMenuToggle
}) => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/app">
        <Button variant="ghost" className="hidden sm:inline-flex text-gray-600 hover:text-blue-600">
          Entrar na Plataforma
        </Button>
      </Link>
      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
        <Star className="w-4 h-4 mr-2" />
        Teste Grátis
      </Button>
      
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden"
        onClick={onMenuToggle}
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>
    </div>
  );
};
