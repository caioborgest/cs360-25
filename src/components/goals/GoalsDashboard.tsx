
import React from 'react';
import { GoalsProgressAreaChart } from './charts/GoalsProgressAreaChart';
import { GoalsProgressBarChart } from './charts/GoalsProgressBarChart';
import { GoalsCategoryPieChart } from './charts/GoalsCategoryPieChart';
import { PriorityGoalsList } from './components/PriorityGoalsList';

export const GoalsDashboard = () => {
  return (
    <div className="space-y-6">
      <GoalsProgressAreaChart />
      <GoalsProgressBarChart />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GoalsCategoryPieChart />
        <PriorityGoalsList />
      </div>
    </div>
  );
};
