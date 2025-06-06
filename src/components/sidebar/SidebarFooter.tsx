
import React from 'react';

interface SidebarFooterProps {
  collapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ collapsed }) => {
  return (
    <div className="p-4 border-t border-slate-700/50 bg-white/5 backdrop-blur-sm">
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'}`}>
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-sm font-bold">JS</span>
        </div>
        {!collapsed && (
          <div className="flex-1">
            <p className="text-sm font-medium text-white">João Silva</p>
            <p className="text-xs text-slate-400">Gestor CS Premium</p>
          </div>
        )}
      </div>
    </div>
  );
};
