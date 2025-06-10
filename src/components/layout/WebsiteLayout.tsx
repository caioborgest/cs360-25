
import React from 'react';
import { MainNavigation } from '../MainNavigation';
import { WebsiteFooter } from './WebsiteFooter';

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

export const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      <main>
        {children}
      </main>
      <WebsiteFooter />
    </div>
  );
};
