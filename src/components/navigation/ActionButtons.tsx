
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Menu, X, LogIn, Sparkles } from 'lucide-react';

interface ActionButtonsProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  isCompact?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  isMenuOpen, 
  onMenuToggle, 
  isCompact = false 
}) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center space-x-3">
        <Link to="/auth">
          <Button 
            variant="ghost" 
            className={`hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ${
              isCompact ? 'px-2 py-1 text-sm' : 'px-4 py-2'
            }`}
          >
            <LogIn className={`mr-2 transition-all duration-300 ${
              isCompact ? 'w-3 h-3' : 'w-4 h-4'
            }`} />
            {isCompact ? '' : 'Entrar'}
          </Button>
        </Link>
        <Link to="/register">
          <Button 
            className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isCompact ? 'px-3 py-1 text-sm' : 'px-6 py-2'
            }`}
          >
            <Sparkles className={`mr-2 transition-all duration-300 ${
              isCompact ? 'w-3 h-3' : 'w-4 h-4'
            }`} />
            {isCompact ? 'Teste' : 'Teste Grátis'}
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuToggle}
        className="lg:hidden"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>
    </div>
  );
};
