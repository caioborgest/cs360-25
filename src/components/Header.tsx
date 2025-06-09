
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './header/SearchBar';
import { NotificationsPopover } from './header/NotificationsPopover';
import { HelpDropdown } from './header/HelpDropdown';
import { UserMenu } from './header/UserMenu';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: 'Novo cliente crítico',
      message: 'Cliente TechCorp está com NPS baixo',
      time: '5 min atrás',
      type: 'alert' as const
    },
    {
      id: 2,
      title: 'Meta alcançada',
      message: 'Você atingiu 95% da meta de CS',
      time: '1 hora atrás',
      type: 'success' as const
    },
    {
      id: 3,
      title: 'Reunião em breve',
      message: 'Review mensal em 30 minutos',
      time: '2 horas atrás',
      type: 'info' as const
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const userInitials = profile?.full_name 
    ? profile.full_name.split(' ').map(name => name.charAt(0)).join('').toUpperCase()
    : 'U';

  const userEmail = profile?.id ? `user-${profile.id.slice(0, 8)}@empresa.com` : 'usuario@empresa.com';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-200 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Search Section */}
        <SearchBar 
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={handleSearch}
        />

        {/* Actions Section */}
        <div className="flex items-center space-x-2 lg:space-x-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Help & Support */}
          <HelpDropdown />

          {/* Notifications */}
          <NotificationsPopover 
            isOpen={isNotificationsOpen}
            onOpenChange={setIsNotificationsOpen}
            notifications={notifications}
          />

          {/* Settings */}
          <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-4 h-4" />
          </Button>

          {/* User Menu */}
          <UserMenu 
            profile={profile}
            userInitials={userInitials}
            userEmail={userEmail}
            onNavigate={navigate}
            onSignOut={handleSignOut}
          />
        </div>
      </div>
    </header>
  );
};
