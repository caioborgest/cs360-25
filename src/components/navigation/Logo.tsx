
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

interface LogoProps {
  isCompact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isCompact = false }) => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className={`bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 ${
        isCompact ? 'w-8 h-8' : 'w-10 h-10'
      }`}>
        <BarChart3 className={`text-white transition-all duration-300 ${
          isCompact ? 'w-4 h-4' : 'w-6 h-6'
        }`} />
      </div>
      {!isCompact && (
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          CS360°
        </span>
      )}
    </Link>
  );
};
