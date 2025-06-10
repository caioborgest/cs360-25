
import React, { useState, useEffect } from 'react';
import { Logo } from './navigation/Logo';
import { DesktopNavigation } from './navigation/DesktopNavigation';
import { ActionButtons } from './navigation/ActionButtons';
import { MobileMenu } from './navigation/MobileMenu';

export const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-12' : 'h-16'
        }`}>
          <Logo isCompact={isScrolled} />
          
          <DesktopNavigation 
            activeDropdown={activeDropdown}
            onDropdownToggle={handleDropdownToggle}
            onDropdownClose={handleDropdownClose}
            isCompact={isScrolled}
          />
          
          <ActionButtons 
            isMenuOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
            isCompact={isScrolled}
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
