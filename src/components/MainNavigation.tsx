
import React, { useState } from 'react';
import { Logo } from './navigation/Logo';
import { DesktopNavigation } from './navigation/DesktopNavigation';
import { ActionButtons } from './navigation/ActionButtons';
import { MobileMenu } from './navigation/MobileMenu';

export const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <DesktopNavigation 
            activeDropdown={activeDropdown}
            onDropdownToggle={handleDropdownToggle}
            onDropdownClose={handleDropdownClose}
          />
          
          <ActionButtons 
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
        </div>
        
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={handleMenuClose} 
        />
      </div>
      
      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleDropdownClose}
        />
      )}
    </header>
  );
};
