
import React from 'react';
import { BarChart3, TrendingDown, Star, DollarSign, Users, FileText, Upload, BarChart, Settings, User } from 'lucide-react';

const menuItems = [
  { icon: BarChart3, label: 'CS Analytics', active: true },
  { icon: TrendingDown, label: 'Churn' },
  { icon: Star, label: 'CSAT/CES' },
  { icon: DollarSign, label: 'MRR/ARR' },
];

const dataItems = [
  { icon: Users, label: 'Contratos' },
  { icon: FileText, label: 'Serviços' },
  { icon: Upload, label: 'Upsell' },
];

const relationItems = [
  { icon: BarChart, label: 'Análises' },
  { icon: FileText, label: 'Exportar' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-purple-900 to-purple-800 text-white flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-800" />
          </div>
          <span className="font-bold">CS Analytics</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1 mb-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                item.active 
                  ? 'bg-purple-700 text-white' 
                  : 'text-purple-200 hover:text-white hover:bg-purple-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-xs uppercase text-purple-300 mb-3 px-3">DADOS</h3>
          <div className="space-y-1">
            {dataItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-700 transition-colors cursor-pointer"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase text-purple-300 mb-3 px-3">RELATÓRIOS</h3>
          <div className="space-y-1">
            {relationItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-purple-200 hover:text-white hover:bg-purple-700 transition-colors cursor-pointer"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-purple-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Ana Silva</div>
            <div className="text-xs text-purple-300">Dunder</div>
          </div>
          <Settings className="w-4 h-4 text-purple-300 cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};
