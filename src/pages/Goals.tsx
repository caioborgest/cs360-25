import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { GoalsManagement } from '../components/goals/GoalsManagement';
const Goals = () => {
  return <div className="min-h-screen bg-gray-50 px-[25px] py-[25px]">
      <Sidebar />
      <div className="ml-72 p-8 py-0 my-[10px] px-0 mx-[70px]">
        <GoalsManagement />
      </div>
    </div>;
};
export default Goals;