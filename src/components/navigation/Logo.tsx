
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
        <BarChart3 className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        CS360°
      </span>
    </Link>
  );
};
