
import React from 'react';
import { RecentActivities } from './RecentActivities';
import { PendingTasks } from './PendingTasks';
import { QuickActions } from './QuickActions';

export const SidebarInfo = () => {
  return (
    <div className="space-y-6">
      <RecentActivities />
      <PendingTasks />
      <QuickActions />
    </div>
  );
};
