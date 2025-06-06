
import React, { useState, useEffect } from 'react';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarNavigation } from './sidebar/SidebarNavigation';
import { SidebarPartners } from './sidebar/SidebarPartners';
import { SidebarAdmin } from './sidebar/SidebarAdmin';
import { SidebarFooter } from './sidebar/SidebarFooter';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleClose = () => {
    setCollapsed(true);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
      
      <div 
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-72'
        } flex flex-col shadow-2xl backdrop-blur-xl ${
          isMobile ? 'z-[100] sidebar-mobile-overlay' : 'z-[100]'
        }`}
        data-state={collapsed ? 'collapsed' : 'expanded'}
      >
        <SidebarHeader collapsed={collapsed} onToggle={handleToggle} />

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto sidebar-scroll">
          <SidebarNavigation 
            collapsed={collapsed} 
            isMobile={isMobile} 
            onClose={handleClose} 
          />
          <SidebarPartners 
            collapsed={collapsed} 
            isMobile={isMobile} 
            onClose={handleClose} 
          />
          <SidebarAdmin 
            collapsed={collapsed} 
            isMobile={isMobile} 
            onClose={handleClose} 
          />
        </nav>

        <SidebarFooter collapsed={collapsed} />
      </div>
    </>
  );
};
