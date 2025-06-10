
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Star, Globe } from 'lucide-react';
import { navigationItems } from '../../data/navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
      <div className="space-y-2">
        {navigationItems.map((item) => (
          <div key={item.label}>
            <Link
              to={item.href}
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
            {item.dropdown && (
              <div className="ml-8 space-y-1 mt-2">
                {item.dropdown.items.map((dropdownItem, index) => (
                  <Link
                    key={index}
                    to={dropdownItem.href}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 hover:text-blue-600 rounded-md transition-colors"
                    onClick={onClose}
                  >
                    <span>{dropdownItem.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
          <Link to="/auth">
            <Button variant="outline" className="w-full justify-start">
              <Globe className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </Link>
          <Link to="/register">
            <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600">
              <Star className="w-4 h-4 mr-2" />
              Teste Grátis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
