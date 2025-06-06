
import React from 'react';
import { BarChart3, ChevronRight, X } from 'lucide-react';
import { Button } from '../ui/button';

interface SidebarHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  collapsed,
  onToggle
}) => {
  return (
    <div className="p-6 border-b border-slate-700/50 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CS360°
              </h2>
              <p className="text-xs text-slate-400 font-medium">Customer Success Platform</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-2 hover:bg-white/10 text-slate-300 hover:text-white transition-colors rounded-lg"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};
