
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { UserCheck } from 'lucide-react';

const adminItems = [
  { icon: UserCheck, label: 'Administração', path: '/admin', color: 'from-gray-500 to-slate-500' },
];

interface SidebarAdminProps {
  collapsed: boolean;
  isMobile: boolean;
  onClose: () => void;
}

export const SidebarAdmin: React.FC<SidebarAdminProps> = ({
  collapsed,
  isMobile,
  onClose
}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (collapsed) return null;

  return (
    <div className="pt-8">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">
        Administração
      </div>
      <div className="space-y-2">
        {adminItems.map((item, index) => (
          <NavigationItem
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            color={item.color}
            isActive={isActive(item.path)}
            collapsed={collapsed}
            isMobile={isMobile}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
};
