import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { GoalsManagement } from '../components/goals/GoalsManagement';
const Goals = () => {
  return <div className="min-h-screen bg-gray-50 px-[25px] py-[25px]">
      <Sidebar />
      <div className="ml-72 p-8 mx-[50px]">
        <GoalsManagement />
      </div>
    </div>;
};
export default Goals;