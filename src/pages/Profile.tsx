
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileNavigation } from '@/components/profile/ProfileNavigation';
import { PersonalInfoSection } from '@/components/profile/PersonalInfoSection';
import { SecuritySection } from '@/components/profile/SecuritySection';
import { NotificationsSection } from '@/components/profile/NotificationsSection';
import { PreferencesSection } from '@/components/profile/PreferencesSection';

export default function Profile() {
  const [activeSection, setActiveSection] = useState('personal');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoSection />;
      case 'security':
        return <SecuritySection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'preferences':
        return <PreferencesSection />;
      default:
        return <PersonalInfoSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="ml-72 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <ProfileHeader />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <ProfileNavigation 
                  activeSection={activeSection} 
                  onSectionChange={setActiveSection} 
                />
              </div>
              
              <div className="lg:col-span-3">
                {renderActiveSection()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
