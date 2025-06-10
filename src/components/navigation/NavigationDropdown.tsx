
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

interface DropdownConfig {
  title: string;
  items: DropdownItem[];
}

interface NavigationDropdownProps {
  item: {
    label: string;
    href: string;
    icon: React.ComponentType<any>;
    dropdown?: DropdownConfig;
  };
  isActive: boolean;
  onToggle: () => void;
  onClose: () => void;
  isCompact?: boolean;
}

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  item,
  isActive,
  onToggle,
  onClose,
  isCompact = false
}) => {
  if (!item.dropdown) {
    return (
      <Link
        to={item.href}
        className={`flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50 ${
          isCompact ? 'px-2' : 'px-3'
        }`}
        title={isCompact ? item.label : undefined}
      >
        <item.icon className="w-4 h-4" />
        {!isCompact && <span>{item.label}</span>}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        className={`flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50 ${
          isCompact ? 'px-2' : 'px-3'
        }`}
        onClick={onToggle}
        title={isCompact ? item.label : undefined}
      >
        <item.icon className="w-4 h-4" />
        {!isCompact && (
          <>
            <span>{item.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>
      
      {isActive && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.dropdown.title}</h3>
          </div>
          <div className="space-y-3">
            {item.dropdown.items.map((dropdownItem, index) => (
              <Link
                key={index}
                to={dropdownItem.href}
                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group/item"
                onClick={onClose}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                    {dropdownItem.label}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {dropdownItem.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
